export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export interface GallerySection {
  images: GalleryImage[][];
}

export const gallerySections: GallerySection[] = [
  // Section 1
  {
    images: [
      [
        {
          src: "/images/grid-1/image-1.webp",
          alt: "Big Image 1",
          width: 800,
          height: 600,
          className: "w-2/3 pr-2",
        },
        {
          src: "/images/grid-1/image-2.webp",
          alt: "Small Image 1",
          width: 400,
          height: 300,
          className: "w-1/3 pl-2",
        },
      ],
      [
        {
          src: "/images/grid-1/image-4.webp",
          alt: "Small Image 2",
          width: 400,
          height: 300,
          className: "w-1/3 pr-2",
        },
        {
          src: "/images/grid-1/image-3.webp",
          alt: "Big Image 2",
          width: 800,
          height: 600,
          className: "w-2/3 pl-2",
        },
      ],
    ],
  },
  // Section 2
  {
    images: [
      [
        {
          src: "/images/grid-2/image-1.webp",
          alt: "Big Image 3",
          width: 800,
          height: 600,
          className: "w-2/3 pr-2",
        },
        {
          src: "/images/grid-2/image-3.webp",
          alt: "Small Image 3",
          width: 400,
          height: 300,
          className: "w-1/3 pl-2",
        },
      ],
      [
        {
          src: "/images/grid-2/image-4.webp",
          alt: "Small Image 4",
          width: 400,
          height: 300,
          className: "w-1/3 pr-2",
        },
        {
          src: "/images/grid-2/image-2.webp",
          alt: "Big Image 4",
          width: 800,
          height: 600,
          className: "w-2/3 pl-2",
        },
      ],
    ],
  },
  // Section 3
  {
    images: [
      [
        {
          src: "/images/grid-3/image-1.webp",
          alt: "Big Image 5",
          width: 800,
          height: 600,
          className: "w-full",
        },
      ],
      [
        {
          src: "/images/grid-3/image-2.webp",
          alt: "Small Image 5",
          width: 400,
          height: 300,
          className: "w-1/2",
        },
        {
          src: "/images/grid-3/image-3.webp",
          alt: "Small Image 6",
          width: 400,
          height: 300,
          className: "w-1/2",
        },
      ],
    ],
  },
  // Section 4
  {
    images: [
      [
        {
          src: "/images/grid-4/image-1.webp",
          alt: "Big Image 6",
          width: 800,
          height: 600,
          className: "w-full",
        },
      ],
      [
        {
          src: "/images/grid-4/image-2.webp",
          alt: "Small Image 7",
          width: 400,
          height: 300,
          className: "w-1/2",
        },
        {
          src: "/images/grid-4/image-3.webp",
          alt: "Small Image 8",
          width: 400,
          height: 300,
          className: "w-1/2",
        },
      ],
    ],
  },
  // Section 5
  {
    images: [
      [
        {
          src: "/images/grid-5/image-1.webp",
          alt: "Image 1",
          width: 800,
          height: 600,
          className: "w-1/2",
        },
        {
          src: "/images/grid-5/image-2.webp",
          alt: "Image 2",
          width: 800,
          height: 600,
          className: "w-1/2",
        },
      ],
    ],
  },
  // Section 6
  {
    images: [
      [
        {
          src: "/images/grid-6/image-1.webp",
          alt: "Big Image 7",
          width: 800,
          height: 600,
          className: "w-2/3 pr-2",
        },
        {
          src: "/images/grid-6/image-2.webp",
          alt: "Small Image 9",
          width: 400,
          height: 300,
          className: "w-1/3 pl-2",
        },
      ],
      [
        {
          src: "/images/grid-6/image-4.webp",
          alt: "Small Image 10",
          width: 400,
          height: 300,
          className: "w-1/3 pr-2",
        },
        {
          src: "/images/grid-6/image-3.webp",
          alt: "Big Image 8",
          width: 800,
          height: 600,
          className: "w-2/3 pl-2",
        },
      ],
    ],
  },
  // Section 7
  {
    images: [
      [
        {
          src: "/images/grid-7/image-1.webp",
          alt: "Big Image 9",
          width: 800,
          height: 600,
          className: "w-2/3 pr-2",
        },
        {
          src: "/images/grid-7/image-2.webp",
          alt: "Small Image 11",
          width: 400,
          height: 300,
          className: "w-1/3 pl-2",
        },
      ],
      [
        {
          src: "/images/grid-7/image-4.webp",
          alt: "Small Image 12",
          width: 400,
          height: 300,
          className: "w-1/3 pr-2",
        },
        {
          src: "/images/grid-7/image-3.webp",
          alt: "Big Image 10",
          width: 800,
          height: 600,
          className: "w-2/3 pl-2",
        },
      ],
    ],
  },
  // Section 8
  {
    images: [
      [
        {
          src: "/images/grid-8/image-1.webp",
          alt: "Big Image 11",
          width: 800,
          height: 600,
          className: "w-full",
        },
      ],
      [
        {
          src: "/images/grid-8/image-2.webp",
          alt: "Small Image 13",
          width: 400,
          height: 300,
          className: "w-1/2",
        },
        {
          src: "/images/grid-8/image-3.webp",
          alt: "Small Image 14",
          width: 400,
          height: 300,
          className: "w-1/2",
        },
      ],
    ],
  },
  // Section 9
  {
    images: [
      [
        {
          src: "/images/grid-9/image-2.webp",
          alt: "Big Image 12",
          width: 800,
          height: 600,
          className: "w-full h-[300px] md:h-[400px]",
        },
      ],
      [
        {
          src: "/images/grid-9/image-1.webp",
          alt: "Small Image 15",
          width: 400,
          height: 300,
          className: "w-1/2 h-[150px] md:h-[200px]",
        },
        {
          src: "/images/grid-9/image-3.webp",
          alt: "Small Image 16",
          width: 400,
          height: 300,
          className: "w-1/2 h-[150px] md:h-[200px]",
        },
      ],
    ],
  },
  // Section 10
  {
    images: [
      [
        {
          src: "/images/grid-10/image-1.webp",
          alt: "Image 3",
          width: 800,
          height: 600,
          className: "w-1/2",
        },
        {
          src: "/images/grid-10/image-2.webp",
          alt: "Image 4",
          width: 800,
          height: 600,
          className: "w-1/2",
        },
      ],
    ],
  },
];

export const draggableItems = [
  "/images/cars/image-1.webp",
  "/images/cars/image-2.webp",
  "/images/cars/image-3.webp",
  "/images/cars/image-4.webp",
  "/images/cars/image-5.webp",
  "/images/cars/image-6.webp",
  "/images/cars/image-7.webp",
];
