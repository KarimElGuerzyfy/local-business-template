import type { Metadata } from "next";
import { Figtree, Hind, Cairo } from "next/font/google";
import { LanguageProvider } from "./LanguageContext";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Centre Dentaire Dr. Marbouh Amine – Dentiste & Orthodontiste Fès",
  description:
    "Cabinet dentaire à Fès, Bd Mohamed V. Soins, orthodontie, implants. CNSS, CNOPS et CHIFA acceptés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${figtree.variable} ${hind.variable} ${cairo.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}