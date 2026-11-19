import { Michroma, Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const display = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: "/icon.svg" },
};

export const viewport = {
  themeColor: "#bde8ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
