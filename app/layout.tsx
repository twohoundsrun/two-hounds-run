import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import "./image-placement.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const display = Sora({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Two Hounds Run",
  description: "Practical tools. Built for the long run. Websites, sports-data projects, and custom digital tools made for the real world.",
  other: { "codex-preview": "development" },
  icons: {
    icon: [{ url: "/favicon-32.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
