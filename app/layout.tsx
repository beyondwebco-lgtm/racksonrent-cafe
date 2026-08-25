import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "Café Display Space for Rent in India | Racks on Rent",
  description:
    "Find or list unused shelves, counters, display racks, and retail spaces inside cafés across India. Racks on Rent connects café owners with food brands and entrepreneurs.",
  keywords: [
    "Racks on Rent",
    "Café display space for rent",
    "Café shelf space for rent",
    "Café counter rental",
    "Rent space inside café",
    "Product display in cafés",
    "Retail shelf rental India",
    "Food brand offline selling",
    "Café space marketplace",
    "Café owners extra income",
    "Rent product shelf Hyderabad",
    "Display products in coffee shops"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Café Display Space for Rent in India | Racks on Rent",
    description:
      "Find or list unused shelves, counters, display racks, and retail spaces inside cafés across India. Racks on Rent connects café owners with food brands and entrepreneurs.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Racks on Rent - Sublet Café Space. Share Success.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Display Space for Rent in India | Racks on Rent",
    description:
      "Find or list unused shelves, counters, display racks, and retail spaces inside cafés across India. Racks on Rent connects café owners with food brands and entrepreneurs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Racks on Rent",
    "url": SITE_CONFIG.domain,
    "logo": `${SITE_CONFIG.domain}/images/logo.png`,
    "description": "Sublet Café Space. Share Success. Connecting café owners with food brands and entrepreneurs.",
    "telephone": "+917995424477",
    "email": "racksonrent@gmail.com"
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFDF5] text-[#C29000] font-sans">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

