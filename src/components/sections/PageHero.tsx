import { SplitText } from "@/components/ui/SplitText";

type PageHeroContent = {
  eyebrow: string;
  title: string;
  intro: string;
};

type PageHeroProps = {
  content: PageHeroContent;
  id: string;
};

export function PageHero({ content, id }: PageHeroProps) {
  return (
    <section className="page-hero" aria-labelledby={id}>
      <div className="site-container page-hero__inner">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 id={id} className="page-hero__title">
          <SplitText text={content.title} />
        </h1>
        <p className="lead page-hero__intro">{content.intro}</p>
      </div>
    </section>
  );
}
