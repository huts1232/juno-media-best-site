import Link from "next/link";

type NewsItem = {
  title: string;
  category: string;
  date: string;
  href: string;
  accent: string;
};

type NewsProps = {
  content: {
    eyebrow: string;
    heading: string;
    viewMore: {
      label: string;
      href: string;
    };
    ariaLabel: string;
    items: readonly NewsItem[];
  };
};

export function News({ content }: NewsProps) {
  return (
    <section className="news-section" aria-labelledby="home-news-title">
      <div className="site-container">
        <div className="news-header">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 id="home-news-title" className="news-heading">
              {content.heading}
            </h2>
          </div>
          <Link href={content.viewMore.href} className="news-view-more">
            <span>{content.viewMore.label}</span>
            <svg aria-hidden="true" viewBox="0 0 16 16" focusable="false">
              <path
                d="M3 8h9M8.5 3.5 13 8l-4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </Link>
        </div>

        <div className="news-grid" role="list" aria-label={content.ariaLabel}>
          {content.items.map((item, index) => (
            <article key={`${item.title}-${index}`} className="news-card" role="listitem">
              <Link href={item.href} className="news-card__link">
                <div className="news-card__thumb">
                  <NewsThumbnail item={item} index={index} />
                </div>
                <div className="news-card__meta">
                  <div className="news-card__kicker">
                    <span>{item.category}</span>
                    <time>{item.date}</time>
                  </div>
                  <h3 className="news-card__title">{item.title}</h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsThumbnail({ item, index }: { item: NewsItem; index: number }) {
  const secondary = index % 2 === 0 ? "#8a5cff" : "#fe4a23";

  return (
    <svg className="news-card__image" viewBox="0 0 760 520" role="img" aria-label={item.title} focusable="false">
      <rect width="760" height="520" fill="#101010" />
      <circle cx={590 - index * 64} cy="130" r="156" fill={item.accent} opacity=".2" />
      <circle cx={166 + index * 48} cy="398" r="132" fill={secondary} opacity=".16" />
      <rect x="74" y="72" width="612" height="376" rx="8" fill="#080808" stroke="#ffffff1f" strokeWidth="2" />
      <rect x="116" y="120" width="238" height="36" rx="18" fill={item.accent} opacity=".86" />
      <rect x="116" y="214" width="510" height="42" rx="21" fill="#fff" opacity=".16" />
      <rect x="116" y="292" width="388" height="30" rx="15" fill="#fff" opacity=".28" />
      <path
        d={`M124 ${384 - index * 16}C226 ${270 + index * 18} 348 ${268 - index * 10} 442 ${338 + index * 9}C506 386 574 358 636 262`}
        fill="none"
        stroke={item.accent}
        strokeLinecap="round"
        strokeWidth="18"
      />
    </svg>
  );
}
