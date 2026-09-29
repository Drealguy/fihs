import type { Metadata } from "next";
import { DM_Sans, Rethink_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rethink-sans",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Fountain International High School | Home",
    template: "%s | Fountain International High School",
  },
  description:
    "Fountain International High School, Ado-Ekiti — Excellence, Character, and Global Perspective.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${dmSans.variable}`}>
      <body>
        {/* Fixed header lives outside the smooth-scroll wrapper, as ScrollSmoother requires. */}
        <Header />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
