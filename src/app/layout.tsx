import type { Metadata } from "next";
import { Lexend_Deca, Source_Sans_3 } from "next/font/google";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

const lexend = Lexend_Deca({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ageitos Advertising | Personal Injury & MVA Lead Generation",
    template: "%s | Ageitos Advertising",
  },
  description:
    "Ageitos Advertising helps personal injury law firms grow with exclusive, high-quality motor vehicle accident leads from Google, Meta, TikTok, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
