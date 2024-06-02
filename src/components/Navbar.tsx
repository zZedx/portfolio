"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import { useAppContext } from "./AppContext";

interface NavbarProps {}

const NavLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navbar: React.FC<NavbarProps> = () => {
  const { activeSection } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between fixed top-0 left-0 px-12 py-6 md:px-16 md:py-8 z-10">
      <Logo />
      <ul className="space-x-24 text-accent uppercase font-semibold hidden md:flex">
        {NavLinks.map(link => (
          <li
            key={link.name}
            className={`hover:text-primary transition-colors ${
              activeSection === link.name.toLowerCase() ? "text-primary" : ""
            }`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <button
        className="flex flex-col gap-0.5 md:hidden z-10 text-accent"
        onClick={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
      >
        {isMenuOpen ? <FaXmark className="text-4xl" /> : <GiHamburgerMenu className="text-4xl" />}
      </button>

      <div
        className={`absolute top-0 right-0 md:hidden flex items-center justify-center bg-secondary transition-all ${isMenuOpen ? "h-dvh w-dvw opacity-100" : "opacity-0 w-16 h-16"}`}
      >
        <ul className="text-accent uppercase font-semibold flex flex-col items-center justify-center text-2xl gap-12">
          {NavLinks.map(link => (
            <li
              key={link.name}
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
