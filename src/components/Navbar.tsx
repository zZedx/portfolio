import { playfairDisplay } from "@/app/layout";
import Link from "next/link";
import React from "react";

interface NavbarProps {}

const NavLinks = [
  {
    name: "Home",
    href: "/",
  },
  //   {
  //     name: "About",
  //     href: "/about",
  //   },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="w-full flex items-center justify-between fixed top-0 left-0 px-16 py-8 z-10">
      <Logo />
      <ul className="flex space-x-24 text-accent uppercase font-semibold">
        {NavLinks.map(link => (
          <li key={link.name} className="hover:text-primary transition-colors">
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Logo: React.FC = () => {
  return <span className={`font-extrabold text-6xl ${playfairDisplay.className}`}>Z</span>;
};

export default Navbar;
