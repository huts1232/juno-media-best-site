"use client";

import { type MouseEvent } from "react";
import { CountUp } from "@/components/ui/CountUp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getActiveLenis } from "@/lib/lenis";

type AboutAnchor = {
  label: string;
  href: string;
};

type AboutNumber = {
  value: string;
  label: string;
};

type AboutValue = {
  title: string;
  body: string;
};

type AboutSectionsProps = {
  content: {
    anchorsLabel: string;
    anchors: readonly AboutAnchor[];
    numbers: {
      eyebrow: string;
      heading: string;
      items: readonly AboutNumber[];
    };
    mission: {
      eyebrow: string;
      heading: string;
      body: string;
    };
    values: {
      eyebrow: string;
      heading: string;
      items: readonly AboutValue[];
    };
    clients: {
      eyebrow: string;
      heading: string;
      items: readonly string[];
    };
  };
};

const NAV_OFFSET = -96;

export function AboutSections({ content }: AboutSectionsProps) {
  const reducedMotion = useReducedMotion();

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);

    const lenis = getActiveLenis();
    if (lenis && !reducedMotion) {
      lenis.scrollTo(target, { offset: NAV_OFFSET });
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
    window.scrollTo({ top, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="about-anchor-bar">
        <nav className="site-container about-anchor-nav" aria-label={content.anchorsLabel}>
          {content.anchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="about-anchor-link"
              onClick={(event) => handleAnchorClick(event, anchor.href)}
            >
              {anchor.label}
            </a>
          ))}
        </nav>
      </div>

      <section id="numbers" className="about-section about-section--numbers" aria-labelledby="about-numbers-title">
        <div className="site-container about-section__grid">
          <div className="about-section__intro">
            <p className="eyebrow">{content.numbers.eyebrow}</p>
            <h2 id="about-numbers-title" className="about-section__heading">
              {content.numbers.heading}
            </h2>
          </div>
          <dl className="about-numbers">
            {content.numbers.items.map((item) => (
              <div key={`${item.value}-${item.label}`} className="about-number">
                <dt className="about-number__label">{item.label}</dt>
                <dd className="about-number__value">
                  <CountUp value={item.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="mission" className="about-section" aria-labelledby="about-mission-title">
        <div className="site-container about-section__grid">
          <p className="eyebrow about-section__eyebrow">{content.mission.eyebrow}</p>
          <div className="about-section__content">
            <h2 id="about-mission-title" className="about-section__heading about-section__heading--large">
              {content.mission.heading}
            </h2>
            <p className="about-section__body">{content.mission.body}</p>
          </div>
        </div>
      </section>

      <section id="values" className="about-section" aria-labelledby="about-values-title">
        <div className="site-container">
          <div className="about-values-header">
            <p className="eyebrow">{content.values.eyebrow}</p>
            <h2 id="about-values-title" className="about-section__heading">
              {content.values.heading}
            </h2>
          </div>
          <div className="about-values" role="list">
            {content.values.items.map((item, index) => (
              <article key={item.title} className="about-value" role="listitem">
                <span className="about-value__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="about-value__title">{item.title}</h3>
                <p className="about-value__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="about-section about-section--clients" aria-labelledby="about-clients-title">
        <div className="site-container about-section__grid">
          <div className="about-section__intro">
            <p className="eyebrow">{content.clients.eyebrow}</p>
            <h2 id="about-clients-title" className="about-section__heading">
              {content.clients.heading}
            </h2>
          </div>
          <div className="about-clients" role="list">
            {content.clients.items.map((client) => (
              <div key={client} className="about-client" role="listitem">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
