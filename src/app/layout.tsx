import { ContextProvider } from "@/components/AppContext";
import Glow from "@/components/Glow";
import Navbar from "@/components/Navbar";
import SocialLinks from "@/components/SocialLinks";
import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <ContextProvider>
        <body className={`bg-secondary text-primary flex flex-col h-dvh w-dvw overflow-x-hidden`}>
          <Glow />
          <Navbar />
          <SocialLinks />
          <main className="w-full flex h-full flex-1">{children}</main>
        </body>
      </ContextProvider>
    </html>
  );
}
