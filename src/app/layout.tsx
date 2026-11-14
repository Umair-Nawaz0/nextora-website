import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nextora-business.site"),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  keywords: [
    "AI Automation",
    "Business Workflow Automation",
    "AI Appointment Assistant",
    "Custom Software Solutions",
    "Virtual Receptionist AI",
    "Intelligent Agents",
    "Nextora",
  ],
  authors: [{ name: "Nextora" }],
  creator: "Nextora",
  publisher: "Nextora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nextora-business.site",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#060911] text-slate-100 min-h-screen selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
