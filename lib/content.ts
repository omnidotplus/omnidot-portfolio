/**
 * Editable content for the sections that were rebuilt as real components
 * rather than ported markup. Change copy here, not in JSX.
 */

export type Service = {
  num: string;
  name: string;
  tags: string[];
  image: string;
};

/** Three services. "No-Code Development" was retired; numbering runs in sequence. */
export const services: Service[] = [
  {
    num: "01",
    name: "Web Design & Development",
    tags: ["Responsive Design", "Website Development", "UI/UX Design"],
    image: "/assets/6a5e950d52478c467739fde9_Service-Item-Img.avif",
  },
  {
    num: "02",
    name: "Branding & Identity",
    tags: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    image: "/assets/6a5e950d52478c467739fdeb_Service-Item-Img-02.avif",
  },
  {
    num: "03",
    name: "Digital Strategy",
    tags: ["Market Research", "UX Strategy", "Growth Strategy"],
    image: "/assets/6a5e950d52478c467739fdec_Service-Item-Img-04.avif",
  },
];
