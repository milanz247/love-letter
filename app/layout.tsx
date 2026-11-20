import type { Metadata } from "next";
import local from "next/font/local";
import "./globals.css";
const serif = local({
  src: [
    {
      path: "./fonts/cormorant-garamond-normal.woff2",
      style: "normal",
    },
    {
      path: "./fonts/cormorant-garamond-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--serif",
});
const sans = local({
  src: "./fonts/manrope-normal.woff2",
  weight: "200 800",
  variable: "--sans",
});
const hand = local({ src: "./fonts/caveat.woff2", variable: "--hand" });
export const metadata: Metadata = {
  title: "A Little Letter",
  description: "A personal note.",
  robots: { index: false, follow: false },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={[serif.variable, sans.variable, hand.variable].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
