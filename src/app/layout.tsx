import Glow from "@/components/Glow";
import Navbar from "@/components/Navbar";
import ScrollText from "@/components/ScrollText";
import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

export const playfairDisplay = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`bg-secondary text-primary flex flex-col h-dvh w-dvw overflow-x-hidden`}>
        <Glow />
        <Navbar />
        <SocialLinks />
        <main className="w-full flex h-full flex-1">{children}</main>
        <ScrollText />
      </body>
    </html>
  );
}
