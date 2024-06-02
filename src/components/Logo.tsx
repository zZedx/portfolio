import React from "react";
import { Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return <span className={`font-extrabold text-6xl z-10 ${playfairDisplay.className}`}>Z</span>;
};

export default Logo;
