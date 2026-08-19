"use client";

import Link from "next/link";
import { LazyMotion } from "framer-motion";
import * as m from "framer-motion/m";

const loadFramerFeatures = () => import("@/lib/framer-features").then((mod) => mod.default);

type CaseDetailItem = {
  slug: string;
  client: string;
  title: string;
  summary: string;
  description: string;
  palette: readonly string[];
};

type CaseDetailProps = {
  item: CaseDetailItem;
  backLabel: string;
};

export function CaseDetail({ item, backLabel }: CaseDetailProps) {
  return (
    <main>
      <section className="case-detail-section">
        <div className="site-container case-detail-shell">
          <Link href="/cases" className="case-detail-back">
            {backLabel}
          </Link>
          <div className="case-detail-copy">
            <p className="eyebrow">{item.client}</p>
            <h1>{item.title}</h1>
            <p className="lead">{item.summary}</p>
            <p className="case-detail-description">{item.description}</p>
          </div>
          <LazyMotion features={loadFramerFeatures} strict>
            <m.div layoutId={`case-thumbnail-${item.slug}`} className="case-detail-thumb">
              <CaseDetailVisual item={item} />
            </m.div>
          </LazyMotion>
        </div>
      </section>
    </main>
  );
}

function CaseDetailVisual({ item }: { item: CaseDetailItem }) {
  const [primary, secondary, tertiary] = item.palette;

  return (
    <svg viewBox="0 0 1200 900" role="img" aria-label={item.title} focusable="false">
      <rect width="1200" height="900" fill="#101010" />
      <circle cx="876" cy="210" r="244" fill={primary} opacity=".22" />
      <circle cx="286" cy="690" r="210" fill={secondary} opacity=".18" />
      <rect x="128" y="112" width="944" height="676" rx="8" fill="#080808" stroke="#ffffff1f" strokeWidth="2" />
      <rect x="190" y="180" width="388" height="54" rx="27" fill={tertiary} opacity=".82" />
      <rect x="190" y="302" width="820" height="80" rx="40" fill="#ffffff" opacity=".14" />
      <rect x="190" y="432" width="520" height="48" rx="24" fill="#ffffff" opacity=".24" />
      <rect x="190" y="520" width="666" height="48" rx="24" fill="#ffffff" opacity=".16" />
      <path
        d="M226 680C360 496 516 492 626 602C722 698 850 646 982 456"
        fill="none"
        stroke={primary}
        strokeLinecap="round"
        strokeWidth="30"
      />
    </svg>
  );
}
