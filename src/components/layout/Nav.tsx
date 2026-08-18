import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

type NavProps = {
  links: readonly NavLink[];
  cta: NavLink;
};

export function Nav({ links, cta }: NavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-hairline/0">
      <div className="site-container flex h-20 items-center justify-between">
        <Link href="/" className="font-condensed text-xl uppercase leading-none">
          Juno Media
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-copy-muted">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href={cta.href} className="rounded-full bg-copy px-5 py-3 text-sm text-page">
          {cta.label}
        </Link>
      </div>
    </header>
  );
}
