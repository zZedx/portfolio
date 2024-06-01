import React from "react";

interface ScrollTextProps {
  onTop: boolean;
  onBottom: boolean;
}

const ScrollText: React.FC<ScrollTextProps> = ({ onTop, onBottom }) => {
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
