import Link from "next/link";

type FooterColumn = {
  title: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

type FooterContent = {
  email: string;
  location: string;
  copyright: string;
  columns: readonly FooterColumn[];
};

type FooterProps = {
  content: FooterContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="site-container grid gap-10 md:grid-cols-4">
        {content.columns.map((column) => (
          <div key={column.title}>
            <p className="eyebrow">{column.title}</p>
            <div className="grid gap-3">
              {column.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-copy-muted">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="site-container mt-12 flex flex-col gap-4 text-copy-muted md:flex-row md:items-end md:justify-between">
        <a href={`mailto:${content.email}`} className="text-3xl text-copy">
          {content.email}
        </a>
        <p>{content.location}</p>
        <p>{content.copyright}</p>
      </div>
    </footer>
  );
}
