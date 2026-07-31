import type { Metadata, Viewport } from "next";
import "./globals.css";
import RouteIntro from "../components/RouteIntro";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnidot.com"),
  title: "Omnidot — Creative Digital Agency",
  description:
    "Creative agency specialising in web design, branding and digital development. Trusted by 1k+ clients, rated 4.9/5.",
  // No `icons` key on purpose: an explicit declaration overrides Next's
  // file convention, and app/icon.svg (the orange O and dot) is the mark we want.
  // Declaring the old template PNGs here silently won out over it.
  openGraph: {
    title: "Omnidot — Creative Digital Agency",
    description:
      "Creative agency specialising in web design, branding and digital development.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* The exported stylesheet references these families by literal name,
            so they are loaded as-is rather than through next/font's hashed classes. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="body-2">
        <RouteIntro />
        {children}
      </body>
    </html>
  );
}
