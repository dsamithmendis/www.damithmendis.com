const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

export const aboutImages = [
  withBasePath("/images/slider/image-1.webp"),
  withBasePath("/images/slider/image-2.webp"),
  withBasePath("/images/slider/image-3.webp"),
  withBasePath("/images/slider/image-4.webp"),
  withBasePath("/images/slider/image-5.webp"),
  withBasePath("/images/slider/image-6.webp"),
  withBasePath("/images/slider/image-7.webp"),
  withBasePath("/images/slider/image-8.webp"),
];
