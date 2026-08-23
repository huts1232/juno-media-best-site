"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { roi } from "@/content/agency";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { formatDecimal, formatEuro, formatEuroCompact, formatNumber } from "@/lib/format";
import { ScrollTrigger } from "@/lib/gsap";
import { getActiveLenis } from "@/lib/lenis";
import { calculateRoi, MONTHS_IN_CHART, type RoiInput } from "@/lib/roi-model";
import { buildShareUrl, syncParams } from "@/lib/share-url";

const FIELDS = [roi.fields.hours, roi.fields.rate, roi.fields.people, roi.fields.automation];

type FieldKey = keyof typeof roi.fields;

const PARAM_KEYS: Record<FieldKey, string> = {
  hours: "h",
  rate: "r",
  people: "p",
  automation: "a",
};

export function RoiCalculator() {
  return (
    <section id={roi.id} className="roi" data-cta-zone="roi" aria-labelledby="roi-title">
      <div className="site-container">
        <p className="eyebrow">{roi.eyebrow}</p>
        <h2 id="roi-title" className="roi__heading">
          {roi.heading}
        </h2>
        <p className="lead">{roi.intro}</p>

        {/* Fout #6: useSearchParams zonder Suspense breekt de build in Next 15. */}
        <Suspense fallback={<div className="roi__panel" aria-hidden="true" />}>
          <RoiPanel />
        </Suspense>
      </div>
    </section>
  );
}

function RoiPanel() {
  const params = useSearchParams();
  const reducedMotion = useReducedMotion();
  const [values, setValues] = useState<RoiInput>(() => seedFromParams(params));
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const result = useMemo(() => calculateRoi(values), [values]);

  const shareValues = useMemo(
    () => ({
      [PARAM_KEYS.hours]: String(values.hoursPerWeek),
      [PARAM_KEYS.rate]: String(values.hourlyRate),
      [PARAM_KEYS.people]: String(values.people),
      [PARAM_KEYS.automation]: String(values.automationPercent),
    }),
    [values],
  );

  // Gedempt: elke toetsaanslag naar de adresbalk schrijven is zonde en wordt
  // door Safari afgeknepen.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      syncParams(shareValues);
      setShareUrl(buildShareUrl(shareValues, roi.id));
    }, 400);

    return () => window.clearTimeout(timer);
  }, [shareValues]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const update = useCallback((key: FieldKey, next: number) => {
    setValues((current) => {
      const field = roi.fields[key];
      const clamped = Math.min(field.max, Math.max(field.min, next));
      switch (key) {
        case "hours":
          return { ...current, hoursPerWeek: clamped };
        case "rate":
          return { ...current, hourlyRate: clamped };
        case "people":
          return { ...current, people: clamped };
        default:
          return { ...current, automationPercent: clamped };
      }
    });
  }, []);

  const copyShareUrl = useCallback(() => {
    if (!shareUrl) return;
    void navigator.clipboard?.writeText(shareUrl).then(() => setCopied(true));
  }, [shareUrl]);

  const jumpToConfigurator = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.querySelector<HTMLElement>(roi.bridge.href);
    if (!target) return;
    event.preventDefault();
    const lenis = getActiveLenis();
    if (lenis) lenis.scrollTo(target);
    else target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
  }, [reducedMotion]);

  const current: Record<FieldKey, number> = {
    hours: values.hoursPerWeek,
    rate: values.hourlyRate,
    people: values.people,
    automation: values.automationPercent,
  };

  return (
    <div className="roi__panel">
      <div className="roi__inputs">
        {FIELDS.map((field) => {
          const key = field.id as FieldKey;
          const prefix = "prefix" in field ? field.prefix : undefined;
          const suffix = "suffix" in field ? field.suffix : undefined;

          return (
            <div key={field.id} className="roi-field">
              <label className="roi-field__label" htmlFor={`roi-${field.id}`}>
                {field.label}
              </label>
              <div className="roi-field__value tabular-nums">
                {prefix ? <span className="roi-field__affix">{prefix}</span> : null}
                {current[key]}
                {suffix ? <span className="roi-field__affix">{suffix}</span> : null}
              </div>
              <input
                id={`roi-${field.id}`}
                className="roi-field__slider"
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={current[key]}
                onChange={(event) => update(key, Number(event.target.value))}
              />
            </div>
          );
        })}
      </div>

      <dl className="roi__outputs">
        <Output label={roi.outputs.monthly.label} value={result.monthlySaving} format={formatEuro} />
        <Output label={roi.outputs.yearly.label} value={result.yearlySaving} format={formatEuro} />
        <Output
          label={roi.outputs.payback.label}
          value={result.paybackMonths ?? 0}
          format={(value) =>
            result.paybackMonths === null ? "—" : `${formatDecimal(value)} ${roi.outputs.payback.suffix}`
          }
        />
        <Output
          label={roi.outputs.hoursFreed.label}
          value={result.hoursFreedPerYear}
          format={(value) => `${formatNumber(value)}${roi.outputs.hoursFreed.suffix}`}
        />
      </dl>

      <RoiChart result={result} />

      <details
        className="roi__assumptions"
        onToggle={() => {
          // Fout #5: het in- en uitklappen verandert de paginahoogte, dus alle
          // triggers eronder staan zonder refresh verkeerd.
          ScrollTrigger.refresh();
        }}
      >
        <summary>{roi.assumptions.title}</summary>
        <ul>
          {roi.assumptions.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </details>

      <div className="roi__footer">
        <div className="roi__bridge">
          <p className="roi__bridge-question">{roi.bridge.question}</p>
          <p className="roi__bridge-body">{roi.bridge.body}</p>
          <a className="agent-button" href={roi.bridge.href} onClick={jumpToConfigurator}>
            {roi.bridge.cta}
          </a>
        </div>
        <button type="button" className="agent-share" onClick={copyShareUrl} disabled={!shareUrl}>
          {copied ? roi.share.copied : roi.share.copy}
        </button>
      </div>
    </div>
  );
}

function Output({
  label,
  value,
  format,
}: {
  label: string;
  value: number;
  format: (value: number) => string;
}) {
  return (
    <div className="roi-output">
      <dt>{label}</dt>
      <dd>
        <AnimatedNumber value={value} format={format} />
      </dd>
    </div>
  );
}

const CHART = {
  width: 640,
  height: 260,
  padLeft: 62,
  padRight: 14,
  padTop: 14,
  padBottom: 34,
};

function RoiChart({ result }: { result: ReturnType<typeof calculateRoi> }) {
  const plotWidth = CHART.width - CHART.padLeft - CHART.padRight;
  const plotHeight = CHART.height - CHART.padTop - CHART.padBottom;
  const maxValue = Math.max(...result.series.without, ...result.series.with, 1);

  const x = (index: number) => CHART.padLeft + (index / (MONTHS_IN_CHART - 1)) * plotWidth;
  const y = (value: number) => CHART.padTop + plotHeight * (1 - value / maxValue);
  const toPoints = (series: number[]) =>
    series.map((value, index) => `${x(index).toFixed(1)},${y(value).toFixed(1)}`).join(" ");

  const crossingIndex = result.crossingMonth === null ? null : result.crossingMonth - 1;

  const summary =
    result.crossingMonth === null
      ? roi.chart.noCrossingLabel
      : `${roi.chart.crossingLabel}: ${roi.chart.axisLabel.toLowerCase()} ${result.crossingMonth}`;

  return (
    <figure className="roi-chart">
      <figcaption className="roi-chart__caption">
        <span>{roi.chart.label}</span>
        <span className="roi-chart__legend">
          <span className="roi-chart__key roi-chart__key--without">{roi.chart.legend.without}</span>
          <span className="roi-chart__key roi-chart__key--with">{roi.chart.legend.with}</span>
        </span>
      </figcaption>
      <svg
        className="roi-chart__svg"
        viewBox={`0 0 ${CHART.width} ${CHART.height}`}
        role="img"
        aria-label={`${roi.chart.label}. ${summary}.`}
      >
        {[0, 0.5, 1].map((step) => {
          const value = maxValue * step;
          return (
            <g key={step}>
              <line
                className="roi-chart__grid"
                x1={CHART.padLeft}
                x2={CHART.width - CHART.padRight}
                y1={y(value)}
                y2={y(value)}
              />
              <text className="roi-chart__tick" x={CHART.padLeft - 8} y={y(value) + 4} textAnchor="end">
                {formatEuroCompact(value)}
              </text>
            </g>
          );
        })}

        {[1, 6, 12].map((month) => (
          <text
            key={month}
            className="roi-chart__tick"
            x={x(month - 1)}
            y={CHART.height - 12}
            textAnchor="middle"
          >
            {month}
          </text>
        ))}

        <polyline className="roi-chart__line roi-chart__line--without" points={toPoints(result.series.without)} />
        <polyline className="roi-chart__line roi-chart__line--with" points={toPoints(result.series.with)} />

        {crossingIndex !== null ? (
          <g className="roi-chart__crossing">
            <line
              x1={x(crossingIndex)}
              x2={x(crossingIndex)}
              y1={CHART.padTop}
              y2={CHART.padTop + plotHeight}
            />
            <circle cx={x(crossingIndex)} cy={y(result.series.with[crossingIndex] ?? 0)} r="5" />
            {/* Onderin: bovenaan botst het label met de bedragen op de as. */}
            <text
              x={x(crossingIndex) + (crossingIndex > MONTHS_IN_CHART / 2 ? -6 : 6)}
              y={CHART.padTop + plotHeight - 6}
              textAnchor={crossingIndex > MONTHS_IN_CHART / 2 ? "end" : "start"}
            >
              {roi.chart.crossingLabel}
            </text>
          </g>
        ) : null}
      </svg>
      <p className="roi-chart__summary">{summary}</p>
    </figure>
  );
}

function seedFromParams(params: { get: (key: string) => string | null }): RoiInput {
  const read = (key: FieldKey) => {
    const raw = Number(params.get(PARAM_KEYS[key]));
    const field = roi.fields[key];
    if (!Number.isFinite(raw) || raw === 0) return field.default;
    return Math.min(field.max, Math.max(field.min, Math.round(raw)));
  };

  return {
    hoursPerWeek: read("hours"),
    hourlyRate: read("rate"),
    people: read("people"),
    automationPercent: read("automation"),
  };
}
