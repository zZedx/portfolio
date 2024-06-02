import React from "react";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="h-full w-full flex items-center justify-center element">
      <div className="flex flex-col uppercase w-fit items-center md:items-start">
        <div className="w-1/2 flex items-center md:justify-center">
          <span className="text-accent font-medium tracking-wider md:-mb-2 text-lg">I am</span>
        </div>
        <h1
          className="font-extrabold text-8xl sm:text-9xl md:text-[10rem] tracking-widest"
          style={{
            fontFamily: "Playfair Display",
            textShadow: "7px 7px 0px #4b4b4b",
          }}
        >
          ZZEd
        </h1>
        <div className="md:w-1/2 w-3/40 -mr-8 md:mr-0 ml-auto flex flex-col gap-1 font-medium mt-4 tracking-wider">
          <span className="text-accent">a full stack</span>
          <span className="text-accent tracking-widest">website developer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
