"use client";

import { useRef } from "react";
import { experienceItems } from "@/components/lib/experience-section";

interface ExperienceItemProps {
  title: string;
  company?: string;
  date: string;
  link: string;
}

function ExperienceItem({ title, company, date, link }: ExperienceItemProps) {
  return (
    <div className="bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-md transition duration-300 transform hover:scale-95 hover:border-lime-400 hover:shadow-lime-400/30">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <span className="text-sm text-neutral-400">{date}</span>
      </div>

      {company && (
        <p className="text-sm text-neutral-400 font-medium mt-1">{company}</p>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#D3E97A] font-medium border-b border-[#D3E97A] inline-block hover:text-lime-300 transition uppercase mt-3"
      >
        website <i className="ri-external-link-line text-base" />
      </a>
    </div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-black py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-white mb-12">
          My Experience
        </h2>

        <div
          ref={containerRef}
          className="max-h-[500px] overflow-y-auto pr-3 space-y-6 custom-scrollbar"
        >
          {experienceItems.map((item, index) => (
            <ExperienceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
