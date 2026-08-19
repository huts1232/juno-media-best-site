"use client";

import { AnimatePresence, LazyMotion } from "framer-motion";
import * as m from "framer-motion/m";
import { useSearchParams } from "next/navigation";
import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AgencyIcon } from "@/components/ui/AgencyIcon";
import { branches, configurator, type AgentTask, type Branche } from "@/content/agency";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { calculateAgentPlan, clampVolume } from "@/lib/agent-model";
import { isValidEmail, normalizeEmail } from "@/lib/email";
import { formatDecimal, formatDuration, formatEuroRange } from "@/lib/format";
import { gsap } from "@/lib/gsap";
import { agentFlowMotion, stepMotion } from "@/lib/motion-tokens";
import { buildShareUrl, syncParams } from "@/lib/share-url";
import { getSupabaseClient, UNIQUE_VIOLATION } from "@/lib/supabase";

const loadFramerFeatures = () => import("@/lib/framer-features").then((mod) => mod.default);

const RESULT_STEP = 3;
const TOTAL_STEPS = configurator.steps.length;

type FlowState = {
  step: number;
  brancheSlug: string | null;
  taskSlug: string | null;
  volume: number;
};

export function AgentConfigurator() {
  return (
    <section
      id={configurator.id}
      className="agent-configurator"
      data-cta-zone="configurator"
      aria-labelledby="agent-configurator-title"
    >
      <div className="site-container">
        <p className="eyebrow">{configurator.eyebrow}</p>
        <h2 id="agent-configurator-title" className="agent-configurator__heading">
          {configurator.heading}
        </h2>
        <p className="lead">{configurator.intro}</p>

        {/* Fout #6: useSearchParams zonder Suspense breekt de build in Next 15. */}
        <Suspense fallback={<div className="agent-configurator__panel" aria-hidden="true" />}>
          <ConfiguratorFlow />
        </Suspense>
      </div>
    </section>
  );
}

function ConfiguratorFlow() {
  const params = useSearchParams();
  const reducedMotion = useReducedMotion();
  const [state, setState] = useState<FlowState>(() => seedFromParams(params));
  const [copied, setCopied] = useState(false);

  const branche = useMemo(
    () => branches.find((item) => item.slug === state.brancheSlug) ?? null,
    [state.brancheSlug],
  );
  const task = useMemo(
    () => branche?.tasks.find((item) => item.slug === state.taskSlug) ?? null,
    [branche, state.taskSlug],
  );
  const plan = useMemo(
    () => (task ? calculateAgentPlan({ ...task, volumePerWeek: state.volume }) : null),
    [task, state.volume],
  );

  const shareValues = useMemo(
    () =>
      branche && task
        ? { b: branche.slug, t: task.slug, v: String(state.volume) }
        : null,
    [branche, task, state.volume],
  );

  const [shareUrl, setShareUrl] = useState("");

  // De adresbalk volgt de uitkomst, zodat delen en herladen dezelfde staat geeft.
  useEffect(() => {
    if (state.step !== RESULT_STEP || !shareValues) return;
    syncParams(shareValues);
    setShareUrl(buildShareUrl(shareValues, configurator.id));
  }, [shareValues, state.step]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const goTo = useCallback((step: number) => {
    setState((current) => ({ ...current, step }));
  }, []);

  const pickBranche = useCallback((slug: string) => {
    setState((current) => ({
      ...current,
      brancheSlug: slug,
      taskSlug: current.brancheSlug === slug ? current.taskSlug : null,
      step: 1,
    }));
  }, []);

  const pickTask = useCallback((slug: string) => {
    setState((current) => ({ ...current, taskSlug: slug, step: 2 }));
  }, []);

  const setVolume = useCallback((value: number) => {
    setState((current) => ({ ...current, volume: clampVolume(value) }));
  }, []);

  const copyShareUrl = useCallback(() => {
    if (!shareUrl) return;
    void navigator.clipboard?.writeText(shareUrl).then(() => setCopied(true));
  }, [shareUrl]);

  const steps: ReactNode[] = [
    <BrancheStep key="branche" selected={state.brancheSlug} onPick={pickBranche} />,
    <TaskStep key="taak" branche={branche} selected={state.taskSlug} onPick={pickTask} />,
    <VolumeStep key="volume" value={state.volume} onChange={setVolume} onSubmit={() => goTo(RESULT_STEP)} />,
    <ResultStep
      key="uitkomst"
      branche={branche}
      task={task}
      volume={state.volume}
      plan={plan}
      shareUrl={shareUrl}
      copied={copied}
      onCopy={copyShareUrl}
    />,
  ];

  const activeStep = clampStep(state, branche, task);
  const current = steps[activeStep];

  return (
    <div className="agent-configurator__panel">
      <div className="agent-configurator__bar">
        <ol className="agent-configurator__progress" aria-hidden="true">
          {configurator.steps.map((step, index) => (
            <li
              key={step.id}
              className="agent-configurator__dot"
              data-active={index <= Math.min(activeStep, TOTAL_STEPS - 1) ? "true" : undefined}
            />
          ))}
        </ol>
        <p className="agent-configurator__progress-label" aria-live="polite">
          {activeStep === RESULT_STEP
            ? configurator.result.eyebrow
            : configurator.progressLabel
                .replace("{current}", String(activeStep + 1))
                .replace("{total}", String(TOTAL_STEPS))}
        </p>
        {activeStep > 0 ? (
          <button
            type="button"
            className="agent-configurator__back"
            onClick={() => goTo(activeStep - 1)}
          >
            {configurator.nav.back}
          </button>
        ) : null}
      </div>

      {reducedMotion ? (
        <div className="agent-configurator__stage">{current}</div>
      ) : (
        <LazyMotion features={loadFramerFeatures} strict>
          <div className="agent-configurator__stage">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={activeStep}
                initial={stepMotion.initial}
                animate={stepMotion.animate}
                exit={stepMotion.exit}
              >
                {current}
              </m.div>
            </AnimatePresence>
          </div>
        </LazyMotion>
      )}
    </div>
  );
}

function BrancheStep({
  selected,
  onPick,
}: {
  selected: string | null;
  onPick: (slug: string) => void;
}) {
  return (
    <div>
      <StepHeader index={0} />
      <ul className="agent-configurator__grid">
        {branches.map((branche) => (
          <li key={branche.slug}>
            <button
              type="button"
              className="agent-card"
              data-selected={selected === branche.slug ? "true" : undefined}
              onClick={() => onPick(branche.slug)}
            >
              <AgencyIcon name={branche.icon} className="agent-card__icon" />
              <span className="agent-card__title">{branche.name}</span>
              <span className="agent-card__body">{branche.result}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TaskStep({
  branche,
  selected,
  onPick,
}: {
  branche: Branche | null;
  selected: string | null;
  onPick: (slug: string) => void;
}) {
  if (!branche) return null;

  return (
    <div>
      <StepHeader index={1} />
      <ul className="agent-configurator__grid agent-configurator__grid--tasks">
        {branche.tasks.map((task) => (
          <li key={task.slug}>
            <button
              type="button"
              className="agent-card"
              data-selected={selected === task.slug ? "true" : undefined}
              onClick={() => onPick(task.slug)}
            >
              <span className="agent-card__title">{task.label}</span>
              <span className="agent-card__body">{task.description}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VolumeStep({
  value,
  onChange,
  onSubmit,
}: {
  value: number;
  onChange: (value: number) => void;
  onSubmit: () => void;
}) {
  const { volume } = configurator;

  return (
    <div>
      <StepHeader index={2} />
      <div className="agent-volume">
        <output className="agent-volume__value tabular-nums" htmlFor="agent-volume">
          {value}
          <span className="agent-volume__unit">{volume.unit}</span>
        </output>
        <label className="agent-volume__label" htmlFor="agent-volume">
          {volume.label}
        </label>
        <input
          id="agent-volume"
          className="agent-volume__slider"
          type="range"
          min={volume.min}
          max={volume.max}
          step={volume.step}
          value={value}
          aria-label={volume.ariaLabel}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <div className="agent-volume__scale" aria-hidden="true">
          <span>{volume.min}</span>
          <span>{volume.max}</span>
        </div>
        <button type="button" className="agent-button" onClick={onSubmit}>
          {configurator.nav.next}
        </button>
      </div>
    </div>
  );
}

function ResultStep({
  branche,
  task,
  volume,
  plan,
  shareUrl,
  copied,
  onCopy,
}: {
  branche: Branche | null;
  task: AgentTask | null;
  volume: number;
  plan: ReturnType<typeof calculateAgentPlan> | null;
  shareUrl: string;
  copied: boolean;
  onCopy: () => void;
}) {
  if (!branche || !task || !plan) return null;

  const { metrics } = configurator.result;

  return (
    <div className="agent-result">
      <h3 className="agent-result__heading">
        {configurator.result.headingTemplate
          .replace("{taak}", task.label)
          .replace("{branche}", branche.name.toLowerCase())}
      </h3>

      <FlowDiagram nodes={task.nodes} />

      <dl className="agent-result__metrics">
        <div className="agent-metric">
          <dt>{metrics.hours.label}</dt>
          <dd className="tabular-nums">
            {formatDecimal(plan.hoursSavedPerMonth)}
            <span className="agent-metric__unit">{metrics.hours.suffix}</span>
          </dd>
        </div>
        <div className="agent-metric">
          <dt>{metrics.leadTime.label}</dt>
          <dd className="tabular-nums">
            {formatDuration(plan.leadTimeBeforeMinutes * 60)}
            <span className="agent-metric__arrow" aria-hidden="true">
              {" → "}
            </span>
            <span className="agent-metric__after">
              {formatDuration(plan.leadTimeAfterMinutes * 60)}
            </span>
          </dd>
        </div>
        <div className="agent-metric">
          <dt>{metrics.investment.label}</dt>
          <dd className="tabular-nums">
            {formatEuroRange(plan.investmentLow, plan.investmentHigh)}
            <span className="agent-metric__note">{metrics.investment.note}</span>
          </dd>
        </div>
      </dl>

      <p className="agent-result__disclaimer">{configurator.result.disclaimer}</p>

      <div className="agent-result__actions">
        <LeadForm branche={branche} task={task} volume={volume} />
        <button type="button" className="agent-share" onClick={onCopy} disabled={!shareUrl}>
          {copied ? configurator.share.copied : configurator.share.copy}
        </button>
      </div>
    </div>
  );
}

function FlowDiagram({ nodes }: { nodes: readonly string[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion) return;

    const ctx = gsap.context(() => {
      const horizontal = window.matchMedia(agentFlowMotion.horizontalQuery).matches;

      gsap.from("[data-flow-node]", {
        y: agentFlowMotion.node.y,
        autoAlpha: 0,
        duration: agentFlowMotion.node.duration,
        ease: agentFlowMotion.node.ease,
        stagger: agentFlowMotion.stagger,
      });

      gsap.to(`[data-flow-line='${horizontal ? "h" : "v"}']`, {
        strokeDashoffset: 0,
        duration: agentFlowMotion.line.duration,
        ease: agentFlowMotion.line.ease,
        stagger: agentFlowMotion.stagger,
        delay: agentFlowMotion.stagger,
        // Na afloop staan beide richtingen getekend, zodat een draaiend scherm
        // geen halve lijnen laat zien.
        onComplete: () => gsap.set("[data-flow-line]", { strokeDashoffset: 0 }),
      });
    }, root);

    return () => ctx.revert();
  }, [nodes, reducedMotion]);

  return (
    <div ref={rootRef} className="flow-diagram">
      <p className="flow-diagram__label">{configurator.flow.label}</p>
      <ol className="flow-diagram__list">
        {nodes.map((node, index) => (
          <li key={node} className="flow-diagram__item">
            {index > 0 ? (
              <svg
                className="flow-diagram__link"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <line data-flow-line="h" pathLength={1} x1="0" y1="12" x2="24" y2="12" />
                <line data-flow-line="v" pathLength={1} x1="12" y1="0" x2="12" y2="24" />
              </svg>
            ) : null}
            <span className="flow-diagram__node" data-flow-node>
              {node}
            </span>
          </li>
        ))}
      </ol>
      <p className="flow-diagram__caption">{configurator.flow.caption}</p>
    </div>
  );
}

type LeadStatus = "idle" | "loading" | "success" | "duplicate" | "error";

function LeadForm({
  branche,
  task,
  volume,
}: {
  branche: Branche;
  task: AgentTask;
  volume: number;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement | null>(null);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Bots vullen alles in: stilletjes bevestigen en niets opslaan.
    if (honeypotRef.current?.value) {
      setStatus("success");
      return;
    }

    if (!email.trim()) {
      setError(configurator.email.errors.required);
      return;
    }

    if (!isValidEmail(email)) {
      setError(configurator.email.errors.invalid);
      return;
    }

    setError(null);
    setStatus("loading");

    const supabase = getSupabaseClient();
    if (!supabase) {
      setStatus("error");
      return;
    }

    const { error: insertError } = await supabase.from("agent_leads").insert({
      email: normalizeEmail(email),
      branche: branche.slug,
      taak: task.slug,
      volume,
    });

    if (insertError) {
      setStatus(insertError.code === UNIQUE_VIOLATION ? "duplicate" : "error");
      return;
    }

    setStatus("success");
  };

  return (
    <form className="agent-lead" onSubmit={submit} noValidate>
      <p className="agent-lead__heading">{configurator.email.heading}</p>
      <p className="agent-lead__body">{configurator.email.body}</p>

      <div className="agent-lead__row">
        <label className="sr-only" htmlFor="agent-lead-email">
          {configurator.email.label}
        </label>
        <input
          id="agent-lead-email"
          className="agent-lead__input"
          type="email"
          name="email"
          autoComplete="email"
          placeholder={configurator.email.placeholder}
          value={email}
          aria-invalid={error ? "true" : undefined}
          aria-describedby="agent-lead-status"
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError(null);
          }}
        />
        <button type="submit" className="agent-button" disabled={status === "loading"}>
          {configurator.email.cta}
        </button>
      </div>

      <div className="agent-lead__honeypot" aria-hidden="true">
        <label htmlFor="agent-lead-company">{configurator.email.honeypotLabel}</label>
        <input id="agent-lead-company" ref={honeypotRef} type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <p id="agent-lead-status" className="agent-lead__status" role="status" aria-live="polite">
        {error ?? configurator.email.states[status]}
      </p>
    </form>
  );
}

function StepHeader({ index }: { index: number }) {
  const step = configurator.steps[index];
  if (!step) return null;

  return (
    <header className="agent-configurator__step-header">
      <h3 className="agent-configurator__step-title">{step.title}</h3>
      <p className="agent-configurator__step-hint">{step.hint}</p>
    </header>
  );
}

function seedFromParams(params: URLSearchParams | ReadonlyURLSearchParamsLike): FlowState {
  const brancheSlug = params.get("b");
  const branche = branches.find((item) => item.slug === brancheSlug) ?? null;
  const taskSlug = params.get("t");
  const task = branche?.tasks.find((item) => item.slug === taskSlug) ?? null;
  const rawVolume = Number(params.get("v"));

  return {
    step: branche && task ? RESULT_STEP : 0,
    brancheSlug: branche?.slug ?? null,
    taskSlug: task?.slug ?? null,
    volume: Number.isFinite(rawVolume) && rawVolume > 0 ? clampVolume(rawVolume) : configurator.volume.default,
  };
}

type ReadonlyURLSearchParamsLike = { get: (key: string) => string | null };

/** Voorkomt een stap zonder keuze als de URL half is ingevuld. */
function clampStep(state: FlowState, branche: Branche | null, task: AgentTask | null): number {
  if (!branche) return 0;
  if (!task) return Math.min(state.step, 1);
  return state.step;
}
