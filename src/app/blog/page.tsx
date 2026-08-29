import Link from "next/link";
import { type CSSProperties } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { site } from "@/content/site";

type BlogCardStyle = CSSProperties & {
  "--blog-accent": string;
};

export default function BlogPage() {
  const page = site.pages.blog;

  return (
    <main>
      <PageHero content={page} id="blog-page-title" />
      <section className="blog-index" aria-label={page.articlesLabel}>
        <div className="site-container blog-index__grid">
          {page.articles.map((article, index) => (
            <article
              key={`${article.title}-${article.date}`}
              className="blog-card"
              style={{ "--blog-accent": article.accent } as BlogCardStyle}
            >
              <Link href={article.href} className="blog-card__link">
                <div className="blog-card__thumb">
                  <BlogThumbnail title={article.title} index={index} accent={article.accent} />
                </div>
                <div className="blog-card__meta">
                  <div className="blog-card__kicker">
                    <span>{article.category}</span>
                    <time>{article.date}</time>
                  </div>
                  <h2 className="blog-card__title">{article.title}</h2>
                  <span className="blog-card__read">
                    <span>{page.readLabel}</span>
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
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function BlogThumbnail({ title, index, accent }: { title: string; index: number; accent: string }) {
  const secondary = index % 2 === 0 ? "#1f7fb8" : "var(--brand-light)";

  return (
    <svg className="blog-card__image" viewBox="0 0 760 520" role="img" aria-label={title} focusable="false">
      <rect width="760" height="520" fill="#101010" />
      <circle cx={590 - index * 58} cy="128" r="152" fill={accent} opacity=".2" />
      <circle cx={166 + index * 42} cy="398" r="128" fill={secondary} opacity=".16" />
      <rect x="70" y="70" width="620" height="380" rx="8" fill="#080808" stroke="#ffffff1f" strokeWidth="2" />
      <path
        d={`M116 ${350 - index * 10}C208 ${246 + index * 12} 318 ${226 - index * 8} 420 ${300 + index * 10}C500 358 576 334 642 246`}
        fill="none"
        stroke={accent}
        strokeLinecap="round"
        strokeWidth="18"
      />
      <rect x="116" y="118" width="220" height="34" rx="17" fill="#fff" opacity=".22" />
      <rect x="116" y="196" width="486" height="46" rx="23" fill="#fff" opacity=".14" />
      <rect x="116" y="272" width="360" height="30" rx="15" fill="#fff" opacity=".28" />
    </svg>
  );
}
