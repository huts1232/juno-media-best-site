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

## FASE 3.1 — Nav

- Status: afgerond.
- Structuur: fixed full-width header met gecentreerde referentie-nav, content-gestuurde links, CTA en mobiele overlay.
- Motion: scroll > 80px activeert blur/bg/border, ScrollTrigger verbergt bij down-scroll, mobiele menu-reveal gebruikt clip-path circle vanaf hamburger met 0.06s link-stagger.
- Interactie: desktop-links hebben scaleX-underline, CTA heeft magnetic hover en arrow-shift, body scroll-lock actief bij mobiel menu.
- Afwijkingen: social-icons zijn neutrale inline SVG-placeholders tot FASE 6 assets.
- Verificatie: `npm run lint` en `npm run build` slagen zonder warnings.

## FASE 3.2 — Hero

- Status: afgerond.
- Structuur: `hero-height-new` met sticky `section.hero.home`, eyebrow/tag, H1 in twee regels, lazy showreel-video met verplichte poster en 7 losse inline SVG-parallaxlagen.
- Motion: page-load timeline na font readiness, H1 per woord via clipped reveal, video fade/scale, layer stagger, ScrollTrigger scrub-parallax en desktop mouse-parallax.
- Responsief: desktop volgt Webflow-maatvoering; mobiel schakelt sticky uit, verkleint H1 en behoudt veilige spacing rond video en lagen.
- Afwijkingen: video en parallax-assets zijn neutrale placeholders; er is geen Outcrowd-video of illustratie gekopieerd.
- Verificatie: `npm run lint`, `npm run build`, lokale 200-check en desktop/mobiele headless screenshots uitgevoerd.

## FASE 3.3 — Statement

- Status: afgerond.
- Structuur: één content-gestuurde H2 van 15 woorden in een full-width statement-sectie met 12-koloms plaatsing.
- Motion: per visuele regel `yPercent: 100 -> 0` met clip-mask, trigger `top 75%`, plus decoratief rechterelement met subtiele y-parallax.
- Responsief: regels worden na resize opnieuw gemeten; mobiel gebruikt compactere type-scale en 4-koloms layout.
- Afwijkingen: floating element is een neutrale inline SVG-placeholder.
- Verificatie: `npm run lint` en `npm run build` slagen zonder warnings.

## FASE 3.4 — Stats

- Status: afgerond.
- Structuur: 4 content-gestuurde statistieken in een `dl`, 4 kolommen desktop, 2x2 tablet, 1 kolom mobiel.
- Motion: `CountUp` parseert prefix/suffix en animeert alleen het numerieke deel vanaf `top 70%`; dividers groeien met `scaleY` en 0.1s stagger.
- Toegankelijkheid: verborgen content-heading, labels via `dt/dd`, reduced motion toont direct eindwaarden.
- Verificatie: `npm run lint`, `npm run build` en lokale 200-check slagen.

## FASE 3.5 — Fases

- Status: afgerond.
- Structuur: 3 content-gestuurde cards met titel, body, resultaatregel en details-link.
- Desktop: flex-row cards met `flex: 1`, hover-expansie naar `2.2` en overige cards naar `.9`, plus media-scale en body fade-in.
- Tablet/mobiel: horizontale scroll-snap carousel met `85vw` cards, gap `--space-4` en scrollLeft-progressbar.
- Verificatie: `npm run lint`, `npm run build` en lokale 200-check slagen.
