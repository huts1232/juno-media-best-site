type FaqProps = {
  content: {
    eyebrow: string;
    heading: string;
    items: readonly {
      id: string;
      question: string;
      answer: string;
    }[];
  };
};

/**
 * Veelgestelde vragen met native <details>: open en dicht zonder JavaScript,
 * toetsenbord en screenreader werken standaard. Server component.
 */
export function Faq({ content }: FaqProps) {
  return (
    <section className="faq-section" aria-labelledby="home-faq-title">
      <div className="site-container">
        <div className="faq-header">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="home-faq-title" className="faq-heading">
            {content.heading}
          </h2>
        </div>
        <div className="faq-list">
          {content.items.map((item) => (
            <details key={item.id} id={item.id} className="faq-row">
              <summary className="faq-trigger">
                <span className="faq-question">{item.question}</span>
                <span className="faq-plus" aria-hidden="true" />
              </summary>
              <p className="faq-answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
