"use client";

import Hero from "@/components/Hero";
import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full h-full overflow-y-hidden">
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
};

export default Home;
