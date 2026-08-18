"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type NavLink = {
  label: string;
  href: string;
};

type NavBrand = {
  name: string;
  href: string;
};

type NavProps = {
  brand: NavBrand;
  links: readonly NavLink[];
  cta: NavLink;
  email: string;
  labels: {
    primary: string;
    openMenu: string;
    closeMenu: string;
    social: string;
  };
  socialLinks: readonly NavLink[];
};

export function Nav({ brand, links, cta, email, labels, socialLinks }: NavProps) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const firstLineRef = useRef<HTMLSpanElement | null>(null);
  const secondLineRef = useRef<HTMLSpanElement | null>(null);
  const mobileLinkRefs = useRef<HTMLAnchorElement[]>([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setMobileLinkRef = useCallback((node: HTMLAnchorElement | null, index: number) => {
    if (node) mobileLinkRefs.current[index] = node;
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const updateScrolledState = () => {
      setHasScrolled(window.scrollY > 80);
    };

    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    if (reducedMotion) {
      gsap.set(header, { y: 0 });
      return;
    }

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const shouldHide = self.direction === 1 && self.scroll() > 80 && !isMenuOpen;
        gsap.to(header, {
          y: shouldHide ? -120 : 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      },
    });

    return () => trigger.kill();
  }, [isMenuOpen, reducedMotion]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.dataset.scrollLocked = "true";
      return () => {
        delete document.body.dataset.scrollLocked;
      };
    }

    delete document.body.dataset.scrollLocked;

    return () => {
      delete document.body.dataset.scrollLocked;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    closeMenu();
  }, [closeMenu, pathname]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const overlay = overlayRef.current;
    const burger = burgerRef.current;
    const firstLine = firstLineRef.current;
    const secondLine = secondLineRef.current;

    if (!wrapper || !overlay || !burger || !firstLine || !secondLine) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");
    if (!mobileQuery.matches) {
      gsap.set(wrapper, { clearProps: "height,backgroundColor" });
      gsap.set(overlay, { clearProps: "clipPath,pointerEvents", display: "none" });
      gsap.set([firstLine, secondLine, burger], { clearProps: "transform" });
      return;
    }

    const buttonRect = burger.getBoundingClientRect();
    const overlayRect = overlay.getBoundingClientRect();
    const originX = buttonRect.left + buttonRect.width / 2 - overlayRect.left;
    const originY = buttonRect.top + buttonRect.height / 2 - overlayRect.top;
    const origin = `${originX}px ${originY}px`;
    const extraItems = Array.from(overlay.querySelectorAll<HTMLElement>("[data-mobile-extra]"));
    const mobileLinks = mobileLinkRefs.current.filter(Boolean);

    if (reducedMotion) {
      gsap.set(wrapper, {
        height: isMenuOpen ? "100svh" : "4rem",
        backgroundColor: isMenuOpen ? "rgba(8, 8, 8, 0.98)" : "rgba(0, 0, 0, 0)",
      });
      gsap.set(overlay, {
        clipPath: isMenuOpen ? `circle(150% at ${origin})` : `circle(0px at ${origin})`,
        display: isMenuOpen ? "flex" : "none",
        pointerEvents: isMenuOpen ? "auto" : "none",
      });
      gsap.set([firstLine, secondLine, burger, ...mobileLinks, ...extraItems], {
        clearProps: isMenuOpen ? "" : "transform,opacity",
      });
      return;
    }

    const timeline = gsap.timeline({ defaults: { overwrite: true } });

    if (isMenuOpen) {
      timeline
        .set(overlay, {
          clipPath: `circle(0px at ${origin})`,
          display: "flex",
          pointerEvents: "auto",
        })
        .set([...mobileLinks, ...extraItems], { y: 24, opacity: 0 })
        .to(
          wrapper,
          {
            height: "100svh",
            backgroundColor: "rgba(8, 8, 8, 0.98)",
            duration: 0.9,
            ease: "power1.inOut",
          },
          0,
        )
        .to(
          overlay,
          {
            clipPath: `circle(150% at ${origin})`,
            duration: 0.9,
            ease: "power2.out",
          },
          0,
        )
        .to(burger, { x: "0.5rem", duration: 0.5, ease: "power1.inOut" }, 0)
        .to(firstLine, { x: "-0.5rem", y: "0.3rem", rotate: 45, duration: 0.5, ease: "power1.inOut" }, 0)
        .to(
          secondLine,
          { x: "-0.5rem", y: "-0.3rem", rotate: -45, duration: 0.5, ease: "power1.inOut" },
          0,
        )
        .to(
          mobileLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.06,
          },
          0.18,
        )
        .to(
          extraItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            stagger: 0.06,
          },
          0.34,
        );
    } else {
      timeline
        .to([...mobileLinks, ...extraItems], {
          y: -12,
          opacity: 0,
          duration: 0.25,
          ease: "power1.inOut",
          stagger: 0.03,
        })
        .to(burger, { x: 0, duration: 0.5, ease: "power1.inOut" }, 0)
        .to(firstLine, { x: 0, y: 0, rotate: 0, duration: 0.5, ease: "power1.inOut" }, 0)
        .to(secondLine, { x: 0, y: 0, rotate: 0, duration: 0.5, ease: "power1.inOut" }, 0)
        .to(
          overlay,
          {
            clipPath: `circle(0px at ${origin})`,
            duration: 0.5,
            ease: "power1.inOut",
          },
          0,
        )
        .to(
          wrapper,
          {
            height: "4rem",
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 0.9,
            ease: "power1.inOut",
          },
          0,
        )
        .set(overlay, { display: "none", pointerEvents: "none" });
    }

    return () => {
      timeline.kill();
    };
  }, [isMenuOpen, reducedMotion]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color,backdrop-filter] duration-[400ms] ease-[var(--ease-out-expo)]",
        hasScrolled || isMenuOpen
          ? "border-hairline bg-page/80 backdrop-blur-[12px]"
          : "border-transparent bg-transparent backdrop-blur-0",
      )}
    >
      <div
        ref={wrapperRef}
        className="site-nav-wrapper pointer-events-none mx-auto flex h-20 w-full justify-center px-[var(--gutter)] pt-[1.11rem]"
      >
        <nav
          aria-label={labels.primary}
          className="site-nav-shell pointer-events-auto flex h-[3.47222rem] w-[41.25rem] max-w-full flex-none items-center justify-between overflow-hidden rounded-[.83333rem] bg-[#191919] p-[.28rem]"
        >
          <Link
            href={brand.href}
            className="site-nav-brand flex h-full min-w-[7.25rem] items-center px-4 font-[var(--font-display)] text-[.97222rem] uppercase leading-none text-copy"
            onClick={closeMenu}
          >
            {brand.name}
          </Link>
          <div className="mt-[.2rem] hidden flex-none items-center gap-[2.36rem] overflow-hidden md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "nav-link-underline relative text-[.97222rem] leading-none transition-opacity duration-300",
                    isActive ? "text-[#e5e5e5]" : "text-[#9c9c9c] hover:text-copy",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="hidden h-full w-[8.75rem] items-center justify-end overflow-hidden md:flex">
            <Button
              href={cta.href}
              className="group/button h-full min-w-[8.33rem] whitespace-nowrap rounded-[.5rem] bg-brand px-[1.46rem] pb-[.8rem] pt-[1.01rem] text-[.97222rem] leading-none text-copy"
            >
              <span>{cta.label}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="ml-2 size-3 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/button:translate-x-1"
              >
                <path
                  d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </Button>
          </div>
          <button
            ref={burgerRef}
            type="button"
            aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="mobile-menu-button h-full flex-none flex-col items-center justify-center gap-2 px-2"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span ref={firstLineRef} className="h-px w-[1.6rem] origin-center bg-copy-muted" />
            <span ref={secondLineRef} className="h-px w-[1.6rem] origin-center bg-copy-muted" />
          </button>
        </nav>
        <div
          id="mobile-menu"
          ref={overlayRef}
          className="pointer-events-none hidden h-[80svh] w-full flex-col justify-between pb-8 pt-12 max-[767px]:flex"
          style={{ clipPath: "circle(0px at 100% 0%)" }}
        >
          <div aria-hidden="true" />
          <div className="flex flex-col gap-8">
            {links.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  ref={(node) => setMobileLinkRef(node, index)}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn("text-[2rem] leading-[2.25rem] text-[#e6e6e6]", isActive && "text-copy")}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-6">
            <a
              data-mobile-extra
              href={`mailto:${email}`}
              className="text-[1rem] leading-none text-copy-muted"
              onClick={closeMenu}
            >
              {email}
            </a>
            <div data-mobile-extra className="flex items-center justify-between gap-3">
              <div aria-label={labels.social} className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="grid size-10 place-items-center rounded-full border border-hairline text-copy"
                    onClick={closeMenu}
                  >
                    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4">
                      <circle cx="10" cy="10" r={String(4 + (index % 2))} fill="none" stroke="currentColor" />
                      <path
                        d={index % 2 === 0 ? "M5 12c2-5 6-5 10 0" : "M5 8c2 5 6 5 10 0"}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                      />
                    </svg>
                  </a>
                ))}
              </div>
              <Button
                href={cta.href}
                className="h-12 rounded-[.5rem] bg-brand px-5 text-[.97222rem] leading-none text-copy"
              >
                {cta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
