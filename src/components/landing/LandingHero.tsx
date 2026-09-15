import { ArrowIcon } from "@/components/landing/ArrowIcon";
import { Reveal } from "@/components/landing/Reveal";
import { Button } from "@/components/ui/Button";
import type { Landing } from "@/content/landings/types";

type LandingHeroProps = {
  content: Landing["hero"];
};

/**
 * Hero van een landingspagina op de page-hero-basis, lichte surface.
 *
 * De H1 animeert bewust niet: hij is het LCP-element en moet bij de eerste
 * paint staan. Eyebrow, sub en CTA komen binnen bij page load; globals.css
 * verbergt ze vooraf alleen als JavaScript aan staat en er geen
 * reduced-motion-voorkeur is, anders flitsen ze voor de reveal.
 */
export function LandingHero({ content }: LandingHeroProps) {
  return (
    <section className="page-hero landing-hero" data-surface="light" aria-labelledby="landing-hero-title">
      <Reveal on="load" className="site-container page-hero__inner landing-hero__inner">
        <p className="eyebrow" data-reveal>
          {content.eyebrow}
        </p>
        <h1 id="landing-hero-title" className="page-hero__title landing-hero__title">
          {content.h1}
        </h1>
        <div className="landing-hero__body">
          <p className="lead landing-hero__sub" data-reveal>
            {content.sub}
          </p>
          <div className="landing-hero__actions" data-reveal>
            <Button href={content.cta.href} className="cta-banner__button cta-banner__button--primary">
              <span>{content.cta.label}</span>
              <ArrowIcon className="cta-banner__arrow" />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
