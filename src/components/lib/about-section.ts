export const rawAboutImages = [
  "/images/slider/image-1.webp",
  "/images/slider/image-2.webp",
  "/images/slider/image-3.webp",
  "/images/slider/image-4.webp",
  "/images/slider/image-5.webp",
  "/images/slider/image-6.webp",
  "/images/slider/image-7.webp",
  "/images/slider/image-8.webp",
];

export const getAboutImages = (basePath: string) =>
  rawAboutImages.map((src) => {
    const trimmedBase = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
    const trimmedPath = src.startsWith("/") ? src : "/" + src;
    return `${trimmedBase}${trimmedPath}`;
  });
