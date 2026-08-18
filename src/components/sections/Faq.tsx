import { Accordion } from "@/components/ui/Accordion";

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
        <Accordion className="faq-list" items={content.items} />
      </div>
    </section>
  );
}
