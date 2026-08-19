/**
 * Browserframe met een landingspagina-mockup. Het frame komt op vanuit y: 40
 * (GSAP, [data-website-frame]); de inhoud scrollt langzaam binnen het frame via
 * een CSS-loop op [data-website-page].
 */
const BLOCKS = [
  { w: "62%", h: "1.4rem", tone: "strong" },
  { w: "84%", h: "0.6rem", tone: "muted" },
  { w: "48%", h: "0.6rem", tone: "muted" },
  { w: "100%", h: "3.4rem", tone: "panel" },
  { w: "40%", h: "1.9rem", tone: "accent" },
  { w: "100%", h: "2.6rem", tone: "panel" },
  { w: "72%", h: "0.6rem", tone: "muted" },
  { w: "56%", h: "0.6rem", tone: "muted" },
] as const;

export function WebsiteFrame() {
  return (
    <div className="sv-website" data-website-frame>
      <div className="sv-website__chrome" aria-hidden="true">
        <span className="sv-website__dot" />
        <span className="sv-website__dot" />
        <span className="sv-website__dot" />
        <span className="sv-website__bar" />
      </div>
      <div className="sv-website__viewport">
        <div className="sv-website__page" data-website-page>
          {BLOCKS.map((block, index) => (
            <span
              key={`${block.tone}-${index}`}
              className={`sv-website__block sv-website__block--${block.tone}`}
              style={{ width: block.w, height: block.h }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
