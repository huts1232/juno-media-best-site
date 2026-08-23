"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import LogoMark from "@/components/brand/LogoMark";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { footerMotion } from "@/lib/motion-tokens";

type FooterColumn = {
  title: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

type FooterContent = {
  email: string;
  location: string;
  copyright: string;
  columns: readonly FooterColumn[];
};

type SocialLink = {
  label: string;
  href: string;
};

type FooterProps = {
  content: FooterContent;
  brandName: string;
  socialLabel: string;
  socialLinks: readonly SocialLink[];
};

export function Footer({ content, brandName, socialLabel, socialLinks }: FooterProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const columnRefs = useRef<Array<HTMLElement | null>>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const columns = columnRefs.current.filter(Boolean) as HTMLElement[];

    if (reducedMotion) {
      gsap.set(columns, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        columns,
        { opacity: 0, y: footerMotion.columnY },
        {
          opacity: 1,
          y: 0,
          duration: footerMotion.columnDuration,
          ease: footerMotion.columnEase,
          stagger: footerMotion.columnStagger,
          scrollTrigger: {
            trigger: root,
            start: footerMotion.triggerStart,
            once: true,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <footer ref={rootRef} className="site-footer" data-cta-zone="footer">
      <div className="site-container">
        <div className="site-footer__brand">
          {/* De wordmark eronder noemt de naam al. */}
          <span className="site-footer__brand-mark" aria-hidden="true">
            <LogoMark variant="fill" />
          </span>
          <p className="site-footer__brand-word">{brandName}</p>
        </div>

        <div className="site-footer__columns">
          {content.columns.map((column, index) => {
            const titleId = `footer-column-${index}`;

            return (
              <nav
                key={column.title}
                ref={(node) => {
                  columnRefs.current[index] = node;
                }}
                className="site-footer__column"
                aria-labelledby={titleId}
              >
                <p id={titleId} className="eyebrow site-footer__title">
                  {column.title}
                </p>
                <ul className="site-footer__links">
                  {column.links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="site-footer__contact">
          <a href={`mailto:${content.email}`} className="site-footer__email">
            {content.email}
          </a>
          <nav className="site-footer__social" aria-label={socialLabel}>
            {socialLinks.map((link) => (
              <SocialIconLink key={`${link.label}-${link.href}`} link={link} />
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>{content.copyright}</p>
          <p>{content.location}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ link }: { link: { label: string; href: string } }) {
  if (isExternalHref(link.href)) {
    return (
      <a href={link.href} className="site-footer__link">
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className="site-footer__link">
      {link.label}
    </Link>
  );
}

function SocialIconLink({ link }: { link: SocialLink }) {
  const ref = useMagnetic<HTMLAnchorElement>(0.24);

  return (
    <a
      ref={ref}
      href={link.href}
      className="site-footer__social-link"
      aria-label={link.label}
      target={isExternalHref(link.href) ? "_blank" : undefined}
      rel={isExternalHref(link.href) ? "noreferrer" : undefined}
    >
      <SocialIcon name={link.label} />
    </a>
  );
}

function SocialIcon({ name }: { name: string }) {
  const key = name.toLowerCase();

  if (key.includes("dribbble")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5.1 8.6c5.1 1.2 8.7 5.2 10.2 11.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        <path d="M18.8 8.1c-3.1 3.2-7.4 4.8-13 4.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (key.includes("behance")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="M4.5 7.2h5.2c2 0 3.3 1 3.3 2.7 0 1.1-.5 1.9-1.4 2.3 1.2.4 1.9 1.3 1.9 2.7 0 2-1.5 3.1-3.7 3.1H4.5Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M4.6 12.1h5.1M16 9.4h4.1M15.2 13.2h5.4c-.1-1.8-1.1-3-2.7-3-1.8 0-2.9 1.4-2.9 3.3 0 2 1.1 3.4 3 3.4 1.2 0 2.1-.5 2.6-1.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (key.includes("instagram")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.5" cy="7.7" r=".9" fill="currentColor" />
      </svg>
    );
  }

  if (key === "x") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.9" />
      </svg>
    );
  }

  if (key.includes("linkedin")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <rect x="5" y="10" width="3" height="8" rx=".7" fill="currentColor" />
        <circle cx="6.5" cy="6.9" r="1.6" fill="currentColor" />
        <path d="M12 10v8M12 13.7c.8-2.4 5-2.7 5 1.1V18" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 12h7M12 8.5v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}
