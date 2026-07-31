/**
 * Editable content for the sections and pages that are real components
 * rather than ported markup. Change copy here, not in JSX.
 */

/* ============================== Services ============================== */

export type Service = {
  num: string;
  name: string;
  tags: string[];
  image: string;
};

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
    name: "Graphic Design",
    tags: ["Print & Editorial", "Campaign Artwork", "Packaging", "Motion Graphics"],
    // placeholder — swap for a real graphic-design still when one exists
    image: "/assets/6a5e950d52478c467739fdea_Service-Item-Img-03.avif",
  },
  {
    num: "04",
    name: "Digital Strategy",
    tags: ["Market Research", "UX Strategy", "Growth Strategy"],
    image: "/assets/6a5e950d52478c467739fdec_Service-Item-Img-04.avif",
  },
];

/* ============================== Work ============================== */

export type MediaBlock =
  | { kind: "image"; src: string; alt: string; caption?: string }
  | { kind: "quote"; text: string; attribution?: string };

export type Credit = { label: string; values: string[] };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover: string;
  /** right-hand panel: the running narrative */
  body: string[];
  /** left column: imagery with pull quotes set between it */
  media: MediaBlock[];
  credits: Credit[];
};

/* Placeholder copy and imagery throughout — structure is real, content is not. */
export const projects: Project[] = [
  {
    slug: "racer-logistics-brand-identity",
    title: "Racer Logistics",
    summary: "Full brand guideline design for a logistics and delivery network.",
    tags: ["Brand Identity", "Guidelines", "Logistics", "Wayfinding"],
    cover: "/assets/6a5f0ffb31795eb4b08bce74_BGIV.png",
    body: [
      "Placeholder narrative. Racer Logistics approached the studio to consolidate a fragmented visual system that had grown organically across depots, vehicles and digital touchpoints.",
      "The work began with an audit of every existing application, from livery to invoice templates, mapping where the identity held together and where it had drifted.",
      "A single grid underpins the result. Type, iconography and vehicle livery all resolve to the same underlying measure, which makes the system reproducible by teams who are not designers.",
      "The guideline document runs to eighty pages and is written to be used rather than admired — every rule is paired with a correct and incorrect example drawn from real applications.",
      "Rollout was staged across two quarters, beginning with the fleet and ending with the customer-facing portal.",
    ],
    media: [
      { kind: "image", src: "/assets/6a5f0ffb31795eb4b08bce74_BGIV.png", alt: "Placeholder — brand guideline spreads", caption: "Guideline spreads, placeholder imagery" },
      { kind: "quote", text: "The system had to survive being used by people who would never open a design tool." },
      { kind: "image", src: "/assets/6a5f0ffb551c8baaa3c330c8_BGIII.png", alt: "Placeholder — colour and type specimens" },
      { kind: "image", src: "/assets/6a5f0fe416179111be92ce83_1.png", alt: "Placeholder — applied livery" },
      { kind: "quote", text: "Consistency is not the same as sameness. The grid holds; the expression varies by context.", attribution: "Project lead" },
    ],
    credits: [
      { label: "Client", values: ["Racer Logistics"] },
      { label: "Year", values: ["2025"] },
      { label: "Discipline", values: ["Brand Identity", "Guidelines", "Art Direction"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Ifeadi David"] },
    ],
  },
  {
    slug: "startup-lab-brand-guidelines",
    title: "Startup Lab",
    summary: "Complete visual identity for an early-stage startup accelerator.",
    tags: ["Brand Identity", "Guidelines", "Education", "Editorial"],
    cover: "/assets/6a5f0ffb31795eb4b08bce71_BG.png",
    body: [
      "Placeholder narrative. Startup Lab runs three cohorts a year and needed an identity that could absorb a constant churn of sub-brands without fragmenting.",
      "The solution treats the wordmark as a container rather than a fixed lockup, so each cohort inherits the structure while carrying its own colour and imagery.",
      "Editorial templates were built alongside the identity, because the accelerator publishes more than it advertises and the written output is the product.",
      "A restrained type system does the heavy lifting: one family, four sizes, and strict rules about when scale may change.",
    ],
    media: [
      { kind: "image", src: "/assets/6a5f0ffb31795eb4b08bce71_BG.png", alt: "Placeholder — identity system overview" },
      { kind: "quote", text: "Three cohorts a year meant the identity had to flex without anyone asking permission." },
      { kind: "image", src: "/assets/6a5f0fe48b0cea880fb6e8ac_2.png", alt: "Placeholder — editorial templates", caption: "Editorial templates, placeholder imagery" },
      { kind: "image", src: "/assets/6a5e950d52478c467739fdef_Project-02.avif", alt: "Placeholder — cohort sub-brands" },
    ],
    credits: [
      { label: "Client", values: ["Startup Lab"] },
      { label: "Year", values: ["2025"] },
      { label: "Discipline", values: ["Brand Identity", "Editorial Design"] },
      { label: "Team", values: ["Treasure David", "Ifeadi David"] },
    ],
  },
  {
    slug: "thames-freeport-social-campaign",
    title: "Thames Freeport",
    summary: "Social media design system for a port and logistics network.",
    tags: ["Campaign", "Social", "Motion", "Infrastructure"],
    cover: "/assets/6a5f100358d173781d34c7c5_insta.png",
    body: [
      "Placeholder narrative. The brief was volume: a small internal team publishing daily across four platforms with no designer on staff.",
      "Rather than deliver finished artwork, the studio delivered a system — a set of constrained templates that make an off-brand post difficult to produce by accident.",
      "Motion was treated as a first-class format rather than an afterthought, with looping templates built to the same grid as the stills.",
      "Six months in, output has roughly tripled while the approval cycle has shortened, because there is less to argue about.",
    ],
    media: [
      { kind: "image", src: "/assets/6a5f100358d173781d34c7c5_insta.png", alt: "Placeholder — social templates", caption: "Template set, placeholder imagery" },
      { kind: "quote", text: "Make the on-brand thing the easy thing, and the system enforces itself." },
      { kind: "image", src: "/assets/6a5e950d52478c467739fdee_Project-3.avif", alt: "Placeholder — motion frames" },
      { kind: "image", src: "/assets/6a5e950d52478c467739fdf0_Project-4.avif", alt: "Placeholder — campaign stills" },
    ],
    credits: [
      { label: "Client", values: ["Thames Freeport"] },
      { label: "Year", values: ["2026"] },
      { label: "Discipline", values: ["Campaign Design", "Motion", "Social Systems"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Treasure David"] },
    ],
  },
  {
    slug: "racer-logistics-logo-system",
    title: "Racer Logistics — Logo System",
    summary: "Logo construction and brand colour palette design.",
    tags: ["Logo System", "Colour", "Construction", "Logistics"],
    cover: "/assets/6a5f0ffb551c8baaa3c330c8_BGIII.png",
    body: [
      "Placeholder narrative. A companion project to the wider identity, focused solely on the mark and how it is built.",
      "The construction is documented at every scale, from a favicon to vehicle livery, with explicit minimum sizes and clear-space rules.",
      "Colour was reduced from eleven values to five, each with a defined role. Nothing in the palette is decorative.",
      "The result is a mark that reproduces cleanly in single-colour vinyl and at sixteen pixels, which were the two hardest constraints.",
    ],
    media: [
      { kind: "image", src: "/assets/6a5f0ffb551c8baaa3c330c8_BGIII.png", alt: "Placeholder — logo construction grid" },
      { kind: "quote", text: "It had to survive single-colour vinyl and sixteen pixels. Everything else was negotiable." },
      { kind: "image", src: "/assets/6a5e950d52478c467739fded_Project-01.avif", alt: "Placeholder — palette roles", caption: "Palette roles, placeholder imagery" },
    ],
    credits: [
      { label: "Client", values: ["Racer Logistics"] },
      { label: "Year", values: ["2025"] },
      { label: "Discipline", values: ["Logo System", "Colour"] },
      { label: "Team", values: ["Ifeadi David"] },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
