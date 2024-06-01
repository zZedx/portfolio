"use client";

import React, { useEffect, useState } from "react";

interface ScrollTextProps {}

const ScrollText: React.FC<ScrollTextProps> = () => {
  const [onTop, setOnTop] = useState(true);
  const [onBottom, setOnBottom] = useState(false);
  useEffect(() => {
    const handleScroll = (): void => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (scroll <= 0 + 40) {
        setOnTop(true);
        setOnBottom(false);
      } else if (scroll >= height - 40) {
        setOnTop(false);
        setOnBottom(true);
      } else {
        setOnTop(false);
        setOnBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <aside className="flex flex-col gap-12 items-center h-full justify-end fixed right-0 px-16 py-12">
      {!onTop && (
        <div
          className={`${!onTop && !onBottom ? "h-6" : "h-12"} -ml-1 w-0.5 transition-all rounded-sm bg-accent`}
        ></div>
      )}
      <span className="text-accent rotate-90 uppercase font-medium tracking-wider text-md">
        scroll
      </span>
      {!onBottom && (
        <div
          className={`${!onTop && !onBottom ? "h-6" : "h-12"} -ml-1 w-0.5 transition-all rounded-sm bg-accent`}
        ></div>
      )}
    </aside>
  );
};

export default ScrollText;
