import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div
      className="w-full h-dvh overflow-y-scroll snap-mandatory z-[5] hide-scrollbar"
      style={{
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <div className="h-full w-full snap-start">
        <Hero />
      </div>
      <div className="h-full w-full snap-start">
        <Projects />
      </div>
      <div className="h-full w-full snap-start">
        <Experience />
      </div>
    </div>
  );
};

export default Home;
