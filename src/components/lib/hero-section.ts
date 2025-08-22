const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

export const HeroMainWords = [{ text: "Damith" }, { text: "Mendis." }];

export const HeroFlipWords = ["Filmmaker", "Lecturer"];

export const HeroLinks = [
  {
    href: "https://www.linkedin.com/in/damiya00",
    label: "LinkedIn",
    iconClass: "ri-linkedin-fill",
  },
  {
    href: "https://www.artstation.com/damiya00",
    label: "Art Station",
    imageSrc: withBasePath("/icons/artstation-brands-solid.svg"),
  },
  {
    href: "https://www.behance.net/damiya00",
    label: "Behance",
    iconClass: "ri-behance-fill",
  },
];

export const heroImages = [
  withBasePath("/images/hero-grid/image-1.webp"),
  withBasePath("/images/hero-grid/image-2.webp"),
  withBasePath("/images/hero-grid/image-3.webp"),
  withBasePath("/images/hero-grid/image-4.webp"),
];
