"use client";

import { useRef, useState, useEffect } from "react";
import { experienceItems } from "@/components/lib/experience-section";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

interface ExperienceItemProps {
  title: string;
  company?: string;
  date: string;
  link: string;
  isActive: boolean;
  onTouch: () => void;
  isVisible?: boolean;
}

function ExperienceItem({
  title,
  company,
  date,
  link,
  isActive,
  onTouch,
  isVisible = false,
}: ExperienceItemProps) {
  return (
    <div
      onTouchStart={onTouch}
      onMouseDown={onTouch}
      className={`bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-md transition-all duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${
        isActive
          ? "scale-95 border-lime-400 shadow-lime-400/30"
          : "hover:scale-95 hover:border-lime-400 hover:shadow-lime-400/30 active:scale-95 active:border-lime-400 active:shadow-lime-400/30"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <span className="text-sm text-neutral-400">{date}</span>
      </div>

      {company && (
        <p className="text-sm text-neutral-400 font-medium mt-1">{company}</p>
      )}

      <a
        href={withBasePath(link)}
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(experienceItems.length).fill(false)
  );

  const handleTouch = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => setActiveIndex(null), 300);
  };

  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el ?? null;
              }}
              data-index={index}
            >
              <ExperienceItem
                {...item}
                isActive={activeIndex === index}
                onTouch={() => handleTouch(index)}
                isVisible={visibleItems[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
