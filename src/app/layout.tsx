import type { Metadata } from "next";
import localFont from "next/font/local";
import { CookieBar } from "@/components/layout/CookieBar";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
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
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
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
          <Nav links={site.navigation} cta={site.primaryCta} />
          {children}
          <Footer content={site.footer} />
          <CookieBar copy={site.cookie} />
          <Cursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
