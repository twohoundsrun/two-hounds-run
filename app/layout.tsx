import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import "./image-placement.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const display = Sora({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://twohoundsrun.com"),
  title: "Two Hounds Run | Websites, Digital Products & Custom Tools",
  description: "Independent Northeast Pennsylvania studio building polished websites, sports products, data platforms, and practical custom tools.",
  creator: "Collin Krum",
  openGraph: {
    title: "Two Hounds Run | Practical technology built for the real world",
    description: "Websites, sports products, data platforms, and custom tools—designed and built from rough idea through launch.",
    url: "https://twohoundsrun.com",
    siteName: "Two Hounds Run",
    type: "website",
    images: [{ url: "/images/website-header.png", width: 1672, height: 941, alt: "Two Hounds Run" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Two Hounds Run | Practical technology built for the real world",
    description: "Websites, sports products, data platforms, and custom tools—designed and built from rough idea through launch.",
    images: ["/images/website-header.png"],
  },
  icons: {
    icon: [{ url: "/favicon-32.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
