"use client";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollText from "@/components/ScrollText";
import React, { useEffect, useRef, useState } from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [onTop, setOnTop] = useState(true);
  const [onBottom, setOnBottom] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = container;

        if (scrollTop === 0) {
          setOnTop(true);
          setOnBottom(false);
        }
        if (scrollTop + clientHeight >= scrollHeight) {
          setOnTop(false);
          setOnBottom(true);
        }
        if (scrollTop > 0 && scrollTop + clientHeight < scrollHeight) {
          setOnTop(false);
          setOnBottom(false);
        }
      });
    }
  }, []);
  return (
    <div
      className="w-full h-dvh overflow-y-scroll snap-mandatory z-[5] hide-scrollbar"
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
      ref={containerRef}
    >
      <ScrollText onTop={onTop} onBottom={onBottom} />

      <div className="h-full w-full snap-start" id="hero">
        <Hero />
      </div>
      <div className="h-full w-full snap-start" id="projects">
        <Projects />
      </div>
      <div className="h-full w-full snap-start" id="experience">
        <Experience />
      </div>
      <div className="h-full w-full snap-start" id="experience">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
