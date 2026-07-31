import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnidot.com"),
  title: "Omnidot — Creative Digital Agency",
  description:
    "Creative agency specialising in web design, branding and digital development. Trusted by 1k+ clients, rated 4.9/5.",
  icons: {
    icon: "/assets/6a5e950d52478c467739fe24_favicon.png",
    apple: "/assets/6a5e950d52478c467739fe25_favicon-256.png",
  },
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
      <body className="body-2">{children}</body>
    </html>
  );
}
