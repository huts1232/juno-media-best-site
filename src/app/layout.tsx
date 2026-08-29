import type { Metadata } from "next";
import localFont from "next/font/local";
import { CookieBar } from "@/components/layout/CookieBar";
import { StickyCta } from "@/components/layout/StickyCta";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { PageTransition } from "@/components/layout/PageTransition";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";
import { site } from "@/content/site";
import "@/styles/globals.css";

const avantGarde = localFont({
  src: [
    {
      path: "../styles/fonts/ITCAvantGardeStd-Md.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/ITCAvantGardeStd-Bk.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-itc-avant-garde-md",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
});

const avantGardeCondensed = localFont({
  src: [
    {
      path: "../styles/fonts/ITCAvantGardeStd-BkCn.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/ITCAvantGardeStd-MdCn.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-itc-avant-garde-cn",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.metadata.title,
  description: site.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.locale}>
      <body className={`${avantGarde.variable} ${avantGardeCondensed.variable}`}>
        <SmoothScroll>
          <Nav
            brand={site.brand}
            links={site.navigation}
            cta={site.primaryCta}
            email={site.footer.email}
            labels={site.navLabels}
            socialLinks={site.socialLinks}
          />
          <PageTransition>{children}</PageTransition>
          <Footer
            content={site.footer}
            brandName={site.brand.name}
            socialLabel={site.navLabels.social}
            socialLinks={site.socialLinks}
          />
          {/* Direct in de layout, niet in een sectie: binnen een gepinde sectie
              beweegt position: fixed mee met de pin. */}
          <StickyCta />
          <CookieBar copy={site.cookie} />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
