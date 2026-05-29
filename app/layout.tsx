import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ABOUT } from "@/lib/about";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${ABOUT.name} · Portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL(ABOUT.siteUrl),
  title,
  description: ABOUT.socialDescription,
  openGraph: {
    type: "website",
    url: ABOUT.siteUrl,
    siteName: title,
    title,
    description: ABOUT.socialDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: ABOUT.socialDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
