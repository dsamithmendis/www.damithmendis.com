"use client";

import Image from "next/image";
import { projects } from "@/components/lib/project-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function ProjectSection() {
  return (
    <section className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase md:mb-4 text-white">
            featured projects
          </h2>
          <p className="text-gray-400 text-lg w-full">
            Here lies a collection of digital dreams—projects where I blend
            design, detail, and direction to turn ideas into dimensional
            experiences.
          </p>
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Left: Image with GlowingEffect */}
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="bg-[#111] relative rounded-2xl p-6 md:p-8 border border-gray-800">
                <span className="absolute bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                  {project.tag}
                </span>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl mt-10 w-full border border-gray-800"
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="bg-black">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>

              <div className="text-sm text-gray-400 space-y-2 mb-6">
                <div className="flex justify-between border-t border-gray-700 pt-2">
                  <span className="text-white">Year</span>
                  <span>{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Role</span>
                  <span>{project.role}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="flex items-center gap-2 bg-[#D3E97A] text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition"
                >
                  LIVE DEMO
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 border border-gray-700 text-white px-5 py-2 rounded-full hover:bg-white/10 transition"
                >
                  SEE ON GITHUB
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
