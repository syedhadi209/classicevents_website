import type { Metadata } from "next";
import { Manrope, Playfair_Display, Almendra } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const almendraFont = Almendra({
  variable: "--font-almendra",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Classic Events | Luxury Event Management",
  description:
    "Classic Events crafts modern, luxurious weddings, celebrations, and spiritual gatherings with concierge-level planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${almendraFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
