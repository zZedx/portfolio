import React from "react";

interface GlowProps {}

const Glow: React.FC<GlowProps> = () => {
  return (
    <div
      className="fixed -top-[80%] left-4 rounded-full w-4/5 aspect-square opacity-50 z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
      }}
    ></div>
  );
};

export default Glow;
