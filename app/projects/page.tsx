import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div className="flex flex-col items-center">
            <div className="w-full flex justify-between items-baseline">
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group hover:opacity-80 transition-opacity duration-200"
              >
                <span className="text-black dark:text-white font-medium tracking-tight text-lg">
                  {project.title}{" "}
                  <MdArrowOutward style={{ display: "inline" }} />
                </span>
              </a>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-lg">
                {project.year}
              </span>
            </div>
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={508}
              height={500}
              className="mt-4"
            />
            <p
              className="prose prose-neutral dark:prose-invert pt-3"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></p>
          </div>
        ))}
      </div>
    </section>
  );
}
