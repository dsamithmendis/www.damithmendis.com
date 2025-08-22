export interface ProjectData {
  title: string;
  description: string;
  tag: string;
  year: string;
  role: string;
  image: string;
  images?: string[];
  youtubeLink: string;
  artstationLink: string;
}

export const projects: ProjectData[] = [
  {
    title: "LUV - Animated Short Film",
    description:
      "This short film was a collaborative project completed in just 48 days. It was created for a Christmas 2022 charity event-every YouTube view resulted in “Gasma” donating a gift to children in orphanages.",
    tag: "Mogo Studios - TV Derana",
    year: "2022",
    role: "Senior 3D Generalist",
    image: "/images/projects/image-1-1.webp",
    images: [
      "/images/projects/image-1-1.webp",
      "/images/projects/image-1-2.webp",
      "/images/projects/image-1-3.webp",
      "/images/projects/image-1-4.webp",
    ],
    youtubeLink: "https://youtu.be/gUGcTvJNB0c",
    artstationLink: "https://www.artstation.com/artwork/aoaP3R",
  },
  {
    title: "HOST - Animated Short Film",
    description:
      "This was my first group project for my BA (Hons) in 3D Animation and VFX at Falmouth University. Our team of five collaborated for six months. Despite the challenges of the COVID-19 pandemic, we successfully completed the project.",
    tag: "Falmouth University",
    year: "2022",
    role: "3D Generalist",
    image: "/images/projects/image-2-1.webp",
    images: [
      "/images/projects/image-2-1.webp",
      "/images/projects/image-2-2.webp",
      "/images/projects/image-2-3.webp",
      "/images/projects/image-2-4.webp",
    ],
    youtubeLink: "https://youtu.be/ggbrs9RtISw",
    artstationLink: "https://www.artstation.com/artwork/OGa9Nb",
  },
  {
    title: "WEDYE - Animated Short Film",
    description:
      "[ WEDYE ] is a self-made short film created during my free time to enhance my animation skills. It tells a charming love story between two bouncing balls using a squash and stretch rig. I handled all aspects-modeling to rendering-in Blender and finalized editing and color grading in Adobe Premiere Pro.",
    tag: "Free Time",
    year: "2023",
    role: "3D Generalist",
    image: "/images/projects/image-3-1.webp",
    images: [
      "/images/projects/image-3-1.webp",
      "/images/projects/image-3-2.webp",
      "/images/projects/image-3-3.webp",
      "/images/projects/image-3-4.webp",
    ],
    youtubeLink: "https://youtu.be/NWvfUFmco54",
    artstationLink: "https://www.artstation.com/artwork/rJZr1e",
  },
  {
    title: "the clocks - Animated Short Film",
    description:
      "Embark on a captivating journey through my first individual animated short film, created as the culmination of my BTEC-HND in AMDT at the School of Creativity. Delve into a world of imagination and artistic expression, where every frame tells a story.",
    tag: "Falmouth University",
    year: "2019",
    role: "3D Generalist",
    image: "/images/projects/image-4-1.webp",
    images: [
      "/images/projects/image-4-1.webp",
      "/images/projects/image-4-2.webp",
      "/images/projects/image-4-3.webp",
      "/images/projects/image-4-4.webp",
    ],
    youtubeLink: "https://youtu.be/jK9TXo1nr_4",
    artstationLink: "https://www.artstation.com/artwork/XBbJJL",
  },
];

export type MovingCardItem =
  | { quote: string; name: string; title: string }
  | { iframe: string; name: string; title: string };

export const movingCardItems: MovingCardItem[] = [
  {
    iframe: `<iframe 
      src="https://www.behance.net/embed/project/206872791?ilo0=1" 
      style="width:100%; height:100%; border:none;" 
      allowfullscreen 
      lazyload 
      allow="clipboard-write" 
      scrolling="no" 
      refererPolicy="strict-origin-when-cross-origin">
    </iframe>`,
    name: "ACASA",
    title: "Space and Perception",
  },
  {
    iframe: `<iframe 
      src="https://www.behance.net/embed/project/219401097?ilo0=1" 
      style="width:100%; height:100%; border:none;" 
      allowfullscreen 
      lazyload 
      allow="clipboard-write" 
      scrolling="no" 
      refererPolicy="strict-origin-when-cross-origin">
    </iframe>`,
    name: "ACASA",
    title: "Home Like No Other",
  },
  {
    iframe: `<iframe 
      src="https://www.behance.net/embed/project/221448773?ilo0=1" 
      style="width:100%; height:100%; border:none;" 
      allowfullscreen 
      lazyload 
      allow="clipboard-write" 
      scrolling="no" 
      refererPolicy="strict-origin-when-cross-origin">
    </iframe>`,
    name: "ACASA",
    title: "Story of 146 Residencies",
  },
  {
    iframe: `<iframe 
      src="https://www.behance.net/embed/project/221474815?ilo0=1" 
      style="width:100%; height:100%; border:none;" 
      allowfullscreen 
      lazyload 
      allow="clipboard-write" 
      scrolling="no" 
      refererPolicy="strict-origin-when-cross-origin">
    </iframe>`,
    name: "Magic Cube",
    title: "Made in Sri Lanka",
  },
  {
    iframe: `<iframe 
      src="https://www.behance.net/embed/project/206134309?ilo0=1" 
      style="width:100%; height:100%; border:none;" 
      allowfullscreen 
      lazyload 
      allow="clipboard-write" 
      scrolling="no" 
      refererPolicy="strict-origin-when-cross-origin">
    </iframe>`,
    name: "ACASA",
    title: "Exterior House 3D Visualization",
  },
];
