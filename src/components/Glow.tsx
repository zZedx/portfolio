import React from "react";

interface GlowProps {}

const Glow: React.FC<GlowProps> = () => {
  return (
    <div
      className="fixed xl:-top-[80%] h-3/4 left-8 md:h-auto md:left-4 -top-52 rounded-full md:w-4/5 aspect-square opacity-50 z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
      }}
    ></div>
  );
};

export default Glow;
