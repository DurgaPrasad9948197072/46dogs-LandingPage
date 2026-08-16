import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Outfit } from "next/font/google";
import { SITE, faqSchema, ngoSchema, websiteSchema } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  // both styles: an upright-only load would fall back to a sans face
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "46 Dogs — Rescue, Care & Love for India's Street Dogs",
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "46 Dogs",
    "street dog rescue India",
    "Indies",
    "stray dog welfare",
    "feed street dogs",
    "sponsor a dog",
    "dog vaccination India",
    "FourSix46",
  ],
  authors: [{ name: SITE.parent.name, url: SITE.parent.url }],
  creator: SITE.parent.name,
  publisher: SITE.parent.name,
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: "46 Dogs — Rescue. Care. Love.",
    description: SITE.description,
    locale: "en_GB",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "46 Dogs — Rescue. Care. Love.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "46 Dogs — Rescue. Care. Love.",
    description: SITE.description,
    images: ["/og.png"],
    site: "@46Dogsuk",
    creator: "@46Dogsuk",
  },
  category: "nonprofit",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${instrument.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
