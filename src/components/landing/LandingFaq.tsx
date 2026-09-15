import type { Landing } from "@/content/landings/types";

type LandingFaqProps = {
  content: Landing["faq"];
};

/**
 * Zes vragen met native <details>, in de faq-stijl van de homepage. Server
 * component: open en dicht zonder JavaScript.
 */
export function LandingFaq({ content }: LandingFaqProps) {
  return (
    <section className="faq-section landing-faq" aria-labelledby="landing-faq-title">
      <div className="site-container">
        <div className="faq-header">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="landing-faq-title" className="faq-heading">
            {content.kop}
          </h2>
        </div>
        <div className="faq-list">
          {content.items.map((item) => (
            <details key={item.vraag} className="faq-row">
              <summary className="faq-trigger">
                <span className="faq-question">{item.vraag}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p className="faq-answer">{item.antwoord}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
