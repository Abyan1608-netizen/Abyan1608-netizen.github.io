import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { site } from "@/site.config";

const judul = `${site.name}: e-book TI gratis, dari yang termudah`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: judul, template: `%s · ${site.name}` },
  description: site.tagline,
  applicationName: site.name,
  authors: [{ name: site.author }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title: judul,
    description: site.tagline,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}: e-book TI gratis` }],
  },
  twitter: { card: "summary_large_image", title: judul, description: site.tagline, images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#2f4fd6" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
