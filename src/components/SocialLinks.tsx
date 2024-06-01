import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

interface SocialLinksProps {}

const SocialLinks: React.FC<SocialLinksProps> = () => {
  return (
    <aside className="h-full flex flex-col justify-end fixed left-0 px-16 py-12">
      <ul className="text-accent flex flex-col gap-6 text-2xl ">
        <Link href={""} className="hover:text-primary">
          <BsTwitter />
        </Link>
        <Link href={""} className="hover:text-primary">
          <BsGithub />
        </Link>
        <Link href={""} className="hover:text-primary">
          <BsLinkedin />
        </Link>
      </ul>
    </aside>
  );
};

export default SocialLinks;
