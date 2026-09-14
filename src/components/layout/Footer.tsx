"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import LogoMark from "@/components/brand/LogoMark";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { footerMotion } from "@/lib/motion-tokens";

type FooterLinkItem = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: readonly FooterLinkItem[];
};

type FooterContent = {
  email: string;
  location: string;
  legal: string;
  copyright: string;
  logoLabel: string;
  columns: readonly FooterColumn[];
};

type FooterProps = {
  content: FooterContent;
  brandName: string;
  socialLabel: string;
  socialLinks: readonly FooterLinkItem[];
};

/**
 * Footer: logo, linkkolommen (waaronder de vijf dienstpagina's), e-mail,
 * LinkedIn en de bedrijfsgegevens met KvK-nummer.
 */
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
        <div className="site-footer__columns">
          <div
            ref={(node) => {
              columnRefs.current[0] = node;
            }}
            className="site-footer__brand mb-0!"
          >
            <Link href="/" aria-label={content.logoLabel} className="site-footer__brand-mark">
              <LogoMark variant="fill" title={brandName} />
            </Link>
            <p className="site-footer__brand-word">{brandName}</p>
          </div>

          {content.columns.map((column, index) => {
            const titleId = `footer-column-${index}`;

            return (
              <nav
                key={column.title}
                ref={(node) => {
                  columnRefs.current[index + 1] = node;
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
          {socialLinks.length > 0 ? (
            <nav className="site-footer__social" aria-label={socialLabel}>
              {socialLinks.map((link) => (
                <SocialIconLink key={`${link.label}-${link.href}`} link={link} />
              ))}
            </nav>
          ) : null}
        </div>

        <div className="site-footer__bottom">
          <p>{content.copyright}</p>
          <p>{content.legal}</p>
          <p>{content.location}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ link }: { link: FooterLinkItem }) {
  if (isExternalHref(link.href)) {
    const opensTab = link.href.startsWith("http");

    return (
      <a
        href={link.href}
        className="site-footer__link"
        target={opensTab ? "_blank" : undefined}
        rel={opensTab ? "noreferrer" : undefined}
      >
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

function SocialIconLink({ link }: { link: FooterLinkItem }) {
  const ref = useMagnetic<HTMLAnchorElement>(0.24);
  const external = isExternalHref(link.href);

  return (
    <a
      ref={ref}
      href={link.href}
      className="site-footer__social-link"
      aria-label={link.label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <SocialIcon name={link.label} />
    </a>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name.toLowerCase().includes("linkedin")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
        <rect x="5" y="10" width="3" height="8" rx=".7" fill="currentColor" />
        <circle cx="6.5" cy="6.9" r="1.6" fill="currentColor" />
        <path
          d="M12 10v8M12 13.7c.8-2.4 5-2.7 5 1.1V18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
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
