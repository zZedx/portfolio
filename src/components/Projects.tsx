"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

interface ProjectsProps {}

const projects = [
  {
    name: "Project 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ldalwdwl dwldoa wldoawkdo kawod awdkl wmkdak wmdkm wam kwwak ak pawkd pkwap pamw dk kw ak pok apdkw kopawk ",
    image: "https://picsum.photos/id/1/200/300",
    id: 1,
    tools: ["React", "TailwindCSS", "NextJS"],
    url: "https://www.google.com",
  },
  {
    name: "Project 2",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ldalwdwl dwldoa wldoawkdo kawod awdkl wmkdak wmdkm wam kwwak ak pawkd pkwap pamw dk kw ak pok apdkw kopawk ",
    image: "https://picsum.photos/id/2/200/300",
    id: 2,
    tools: ["React", "TailwindCSS", "NextJS"],
    url: "https://www.google.com",
  },
  {
    name: "Project 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ldalwdwl dwldoa wldoawkdo kawod awdkl wmkdak wmdkm wam kwwak ak pawkd pkwap pamw dk kw ak pok apdkw kopawk ",
    image: "https://picsum.photos/id/3/200/300",
    id: 3,
    tools: ["React", "TailwindCSS", "NextJS"],
    url: "https://www.google.com",
  },
  {
    name: "Project 4",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ldalwdwl dwldoa wldoawkdo kawod awdkl wmkdak wmdkm wam kwwak ak pawkd pkwap pamw dk kw ak pok apdkw kopawk ",
    image: "https://picsum.photos/id/4/200/300",
    id: 4,
    tools: ["React", "TailwindCSS", "NextJS"],
    url: "https://www.google.com",
  },
  {
    name: "Project 5",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ldalwdwl dwldoa wldoawkdo kawod awdkl wmkdak wmdkm wam kwwak ak pawkd pkwap pamw dk kw ak pok apdkw kopawk ",
    image: "https://picsum.photos/id/5/200/300",
    id: 5,
    tools: ["React", "TailwindCSS", "NextJS"],
    url: "https://www.google.com",
  },
  {
    name: "Project 6",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ldalwdwl dwldoa wldoawkdo kawod awdkl wmkdak wmdkm wam kwwak ak pawkd pkwap pamw dk kw ak pok apdkw kopawk ",
    image: "https://picsum.photos/id/6/200/300",
    id: 6,
    tools: ["React", "TailwindCSS", "NextJS"],
    url: "https://www.google.com",
  },
];

const Projects: React.FC<ProjectsProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0) {
      setPreviousIndex(projects.length - 1);
      setNextIndex(currentIndex + 1);
    } else if (currentIndex === projects.length - 1) {
      setPreviousIndex(currentIndex - 1);
      setNextIndex(0);
    } else {
      setPreviousIndex(currentIndex - 1);
      setNextIndex(currentIndex + 1);
    }
  }, [previousIndex, currentIndex, nextIndex]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center pt-8 lg:pt-16 px-12">
      <div
        className="w-[350px] h-[370px] lg:w-[450px] lg:h-[470px] relative"
        style={{
          perspective: "500px",
          transformStyle: "preserve-3d",
        }}
      >
        {projects.map((project, index) => {
          // const active = index === currentIndex ? 1 : 0;
          // const offset = (currentIndex - index) / 3;
          // const direction = Math.sign(currentIndex - index);
          // const absOffset = Math.abs(currentIndex - index) / 3;
          const translateX = `${currentIndex === index ? 0 : nextIndex === index ? 25 : previousIndex === index ? -25 : 0}`;
          const scaleY = `${
            currentIndex === index
              ? 1
              : nextIndex === index
                ? 0.9
                : previousIndex === index
                  ? 0.9
                  : 1
          }`;

          const translateZ = `${currentIndex === index ? 0 : nextIndex === index ? -10 : previousIndex === index ? -10 : -100}`;

          const styles: React.CSSProperties = {
            position: "absolute",
            width: "100%",
            height: "100%",

            transform: `scaleY(${scaleY}) translateZ(${translateZ}rem) translateX(${translateX}rem)`,
            // filter: `blur(calc(${absOffset} * 1rem))`,
            transition: "all 0.3s ease-out",
            overflow: "hidden",
          };

          return (
            <div
              style={styles}
              key={index}
              className={`bottom-0 grayscale ${currentIndex === index ? "" : previousIndex === index ? "bottom-0 blur-sm" : nextIndex === index ? "bottom-0 blur-sm" : ""}`}
            >
              <Image src={project.image} fill alt={project.name} key={index} />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-6 md:gap-10 items-center justify-center z-50 -mt-12 md:w-3/5">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest">
          {projects[currentIndex].name}
        </h1>

        <p className="text-center md:w-3/4 text-accent">{projects[currentIndex].description}</p>

        <div className="flex gap-6 md:gap-12 md:-mt-5">
          {projects[currentIndex].tools.map((tool, index) => (
            <span
              className="w-28 md:w-32 text-sm md:text-base text-center py-1 text-accent uppercase tracking-wider font-semibold"
              key={index}
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex gap-4 md:gap-16 items-center">
          <button
            onClick={() => {
              if (currentIndex <= 0) {
                setCurrentIndex(projects.length - 1);
              } else {
                setCurrentIndex(currentIndex => currentIndex - 1);
              }
            }}
            className="p-6"
          >
            <BsArrowLeft className="text-xl hover:text-accent" />
          </button>

          <Link
            href={projects[currentIndex].url}
            className="text-accent uppercase tracking-widest text-base md:text-xl font-semibold px-4 md:px-8 py-2 md:py-3 hover:text-primary transition-all bg-secondary shadow-[rgba(0,0,0,1)_7px_7px_14px_0px] hover:shadow-[rgba(0,0,0,1)_0px_5px_14px_0px]
          "
            // style={{
            //   boxShadow: "rgba(0, 0, 0, 1) 0px 7px 29px 0px",
            // }}
          >
            <span>view project</span>
            {/* <BiLink className="absolute top-4 right-4" /> */}
          </Link>
          <button
            onClick={() => {
              if (currentIndex >= 0 && currentIndex < projects.length - 1) {
                setCurrentIndex(currentIndex => currentIndex + 1);
              } else if (currentIndex === projects.length - 1) {
                setCurrentIndex(0);
              }
            }}
            className="p-6"
          >
            <BsArrowRight className="text-xl hover:text-accent" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
