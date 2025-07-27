"use client";

import Image from "next/image";
import { gallerySections } from "@/components/lib/gallery-data";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Showcase() {
  return (
      <section className="w-full bg-black py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-none uppercase text-white">
              showcase
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {gallerySections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#111] rounded-2xl border-none grid gap-4 w-full"
                >
                  {section.images.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={`flex w-full ${row.length === 1 ? "" : "gap-4"}`}
                    >
                      {row.map((image, imgIdx) => (
                        <div
                          key={imgIdx}
                          className={image.className || "w-full"}
                        >
                          <Image
                            src={basePath + image.src}
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
  );
}
