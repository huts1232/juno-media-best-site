# PROGRESS.md

## FASE 0 — Reverse engineering

- Status: afgerond voor akkoord.
- HTML gedownload: home, cases, services, about.
- CSS gedownload: outcrowd-2-0-new-superfinal.webflow.shared.586b00c50.min.css.
- Webflow runtime-JS gedownload: webflow.46ca6895.f3f60b4890b4e2cb.js, webflow.schunk.905be2c09f8db3a4.js, webflow.schunk.f2efb3c5440a81cf.js.
- IX2 payload: gevonden en geparseerd uit Webflow IX2 payload.
- Afwijkingen: geen component-code geschreven; geen visuele browsermeting gedaan in FASE 0.
- Ontbrekende extractiewaarden: waarden die niet rechtstreeks in CSS/HTML staan zijn in de markdown als `niet expliciet` gemarkeerd.

## Volgende stap na akkoord

- FASE 1: Next.js 15 project setup in deze map.

## FASE 1 — Project setup

- Status: afgerond voor akkoord.
- Scaffold: Next.js 15.5.23, App Router, TypeScript, Tailwind v4, ESLint.
- Fonts: exacte ITC Avant Garde bronnen uit de Webflow CSS lokaal opgeslagen en via `next/font/local` geladen.
- Tokens: `src/styles/tokens.css` gegenereerd uit de Webflow CSS, met semantische tokens en raw `--ref-*` waarden.
- Smooth scroll: Lenis helper en `<SmoothScroll>` client wrapper gekoppeld aan GSAP ScrollTrigger.
- Verificatie: `npm run lint` en `npm run build` slagen zonder warnings.
- Open punt: `npm install` meldt 3 high-severity audit findings in de dependency tree; niet automatisch geforceerd gefixt om breaking upgrades te vermijden.

## FASE 2 — Globale systemen

- Status: afgerond voor akkoord.
- Grid: `.site-container` en `.grid-12` vastgelegd met exact overgenomen Webflow breakpoints 479 / 767 / 991 / 1280 / 1440 / 1920.
- Motion: `motion-tokens.ts` uitgebreid met reveal, split-text, cursor, magnetic en Webflow-ease mapping.
- SplitText: client component splitst woorden naar gemeten regels, resplit bij resize met 150ms debounce, en respecteert reduced motion.
- Cursor: referentie bevat custom cursorlagen; globale `mix-blend-mode: difference` dot toegevoegd, met lerp 0.15, 3x interactieve scale en touch-hide.
- Magnetic hover: `useMagnetic()` gebruikt GSAP `quickTo` met duration 0.4 en `power3.out`, en wordt gebruikt op primaire buttons.
- Verificatie: `npm run lint` en `npm run build` slagen zonder warnings.
