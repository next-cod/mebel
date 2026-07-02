import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header } from "@/src/components/site/Header";
import { Footer } from "@/src/components/site/Footer";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Heritage Wood",
  description: "Мебельная студия. Производство классической деревянной мебели с 1998 года.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
