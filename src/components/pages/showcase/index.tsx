"use client";

import Image from "next/image";
import { gallerySections, draggableItems } from "@/components/lib/gallery-data";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

export default function Showcase() {
  return (
    <>
      <section className="w-full bg-black py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase text-white">
              showcase
            </h2>

            <div className="hidden md:block mt-10 w-full mx-auto">
              <DraggableCardContainer className="relative flex flex-wrap justify-center items-center gap-2">
                {draggableItems.map((src, index) => (
                  <DraggableCardBody
                    key={index}
                    className="relative w-[280px] h-[50px] cursor-grab"
                  >
                    <Image
                      src={withBasePath(src)}
                      alt={`Draggable image ${index + 1}`}
                      width={300}
                      height={300}
                      className="rounded-2xl object-cover w-full h-full"
                    />
                  </DraggableCardBody>
                ))}
              </DraggableCardContainer>
            </div>

            <div className="mt-10 grid gap-2 md:grid-cols-2">
              {gallerySections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#111] rounded-2xl border-none grid gap-4 w-full"
                >
                  {section.images.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`flex w-full ${
                        row.length === 1 ? "" : "gap-4"
                      }`}
                    >
                      {row.map((image, imgIdx) => (
                        <div
                          key={imgIdx}
                          className={image.className || "w-full"}
                        >
                          <Image
                            src={withBasePath(image.src)}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-full w-full rounded-xl object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
