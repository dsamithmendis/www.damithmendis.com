const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

export const contactLinks = {
  email: "damithmendis.00@gmail.com",
  resume: withBasePath("/resume.pdf"),
  socials: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/damithmendis",
      iconClass: "ri-facebook-fill",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/damith_mendis",
      iconClass: "ri-instagram-fill",
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@damiya00",
      iconClass: "ri-youtube-fill",
    },
  ],
};
