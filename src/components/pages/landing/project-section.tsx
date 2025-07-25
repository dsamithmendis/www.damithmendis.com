"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { projects, movingCardItems } from "@/components/lib/project-section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function ProjectSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (images: string[], index: number = 0) => {
    setModalImages(images);
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalImages([]);
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    const nextImage = () =>
      setCurrentIndex((prev) => (prev + 1) % modalImages.length);

    const prevImage = () =>
      setCurrentIndex((prev) =>
        prev === 0 ? modalImages.length - 1 : prev - 1
      );

    const handleKey = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen, modalImages.length, closeModal]);

  return (
    <section className="w-full bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            featured projects
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Here lies a collection of digital dreams—projects where I blend
            design, detail, and direction to turn ideas into dimensional
            experiences.
          </p>
        </div>

        {/* Projects List */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16"
          >
            {/* Project Image */}
            <div
              className="relative cursor-pointer"
              onClick={() => openGallery(project.images || [project.image])}
            >
              <GlowingEffect
                spread={40}
                glow
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
                  priority
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-black text-white">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
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
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#D3E97A] text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-300 transition cursor-pointer"
                >
                  <i className="ri-youtube-fill text-xl"></i>
                  LIVE
                </a>
                <a
                  href={project.artstationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-700 text-[#D3E97A] px-5 py-2 rounded-full hover:bg-white/10 transition cursor-pointer"
                >
                  <Image
                    src="/icons/artstation-brands-solid.svg"
                    alt="ArtStation"
                    width={20}
                    height={20}
                  />
                  MORE
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Modal Gallery */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 text-white text-3xl font-bold z-[9999] hover:opacity-70 cursor-pointer"
              aria-label="Close gallery"
            >
              <i className="ri-close-line"></i>
            </button>

            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-center">
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (prev) =>
                        prev === 0 ? modalImages.length - 1 : prev - 1
                    )
                  }
                  className="text-white text-4xl px-4 hover:opacity-70 cursor-pointer"
                  aria-label="Previous image"
                >
                  <i className="ri-arrow-left-line"></i>
                </button>

                <Image
                  src={modalImages[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  width={1000}
                  height={600}
                  className="w-full max-h-[80vh] object-contain rounded-xl border border-gray-700"
                  priority
                />

                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % modalImages.length)
                  }
                  className="text-white text-4xl px-4 hover:opacity-70 cursor-pointer"
                  aria-label="Next image"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>

              <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
                {modalImages.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={60}
                    loading="lazy" // lazy load thumbnails
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded border cursor-pointer ${
                      idx === currentIndex ? "border-white" : "border-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Scrolling Cards */}
      <InfiniteMovingCards
        items={movingCardItems}
        speed="normal"
        direction="left"
      />
    </section>
  );
}
