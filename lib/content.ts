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

export const projects: Project[] = [
  {
    slug: "hash-designs-brand-identity",
    title: "Hash Designs",
    summary:
      "Identity for an interior design studio — furniture, styling and curation sold as a feeling, not a catalogue.",
    tags: ["Brand Identity", "Logo Construction", "Typography", "Advertising"],
    cover: "/assets/work/hash-designs/cover.jpg",
    body: [
      "Hash Designs sells interiors, furniture and styling, and the brief was explicit about what that isn't: a catalogue brand. The identity needed to feel closer to an editorial or hospitality mark than a furniture retailer's.",
      "The logomark resolves the studio's name literally — two interlocking H's built from overlapping circles, constructed on a strict geometric grid so it reproduces cleanly at business-card scale or blown up across a billboard.",
      "A four-colour palette of terracotta, forest green, burgundy and warm ivory against charcoal black gives the brand a materials-led, residential warmth that a pure black-and-white system couldn't carry.",
      "The wordmark pairs a confident sans for \"HASH\" with an italic script swash on \"Designs,\" a deliberate tension between structure and warmth that the rest of the system echoes.",
      "The line \"Live Beautifully. Live Hash.\" anchors the brand voice across formats, from Instagram story templates through to a full-scale outdoor billboard pairing the tagline with real lifestyle photography.",
    ],
    media: [
      { kind: "image", src: "/assets/work/hash-designs/cover.jpg", alt: "Hash Designs logo mark over a terracotta-and-white furnished living room", caption: "Primary lockup, applied" },
      { kind: "image", src: "/assets/work/hash-designs/moodboard.jpg", alt: "Hash Designs research moodboard of furniture photography and competitor identities" },
      { kind: "quote", text: "We don't just design spaces. We craft experiences — the tagline had to be true before it could be printed anywhere." },
      { kind: "image", src: "/assets/work/hash-designs/color-palette.jpg", alt: "Hash Designs colour system: terracotta, forest green, burgundy, warm ivory and charcoal black with hex, CMYK and RGB values" },
      { kind: "image", src: "/assets/work/hash-designs/typography.jpg", alt: "Hash Designs logo construction grid showing the interlocking H built from overlapping circles", caption: "Logomark construction" },
      { kind: "image", src: "/assets/work/hash-designs/app-screens.jpg", alt: "Three Hash Designs Instagram story templates: moodboard, 'Live Beautifully. Live Hash.' and the studio's full lockup" },
      { kind: "image", src: "/assets/work/hash-designs/billboard.jpg", alt: "Hash Designs outdoor billboard reading 'Designed to be lived in' beside a couple on a sculptural sofa", caption: "Outdoor, citywide run" },
    ],
    credits: [
      { label: "Client", values: ["Hash Designs"] },
      { label: "Year", values: ["2024"] },
      { label: "Discipline", values: ["Brand Identity", "Logo Construction", "Typography", "Advertising"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Ifeadi David", "Daniel Chimezie"] },
    ],
  },
  {
    slug: "fascanvas-brand-identity",
    title: "FasCanvas",
    summary:
      "Brand identity for a photography studio offering set design, shoots and hands-on classes.",
    tags: ["Brand Identity", "Typography", "Merchandise", "Social"],
    cover: "/assets/work/fascanvas/cover.jpg",
    body: [
      "FasCanvas runs three businesses under one roof — custom set design, photography production, and practical classes for people learning the craft — and needed a mark that could sit over all three without picking a favourite.",
      "The result is a pixel-built mark: two offset orange squares that read as a stylised F or as a shutter catching light, depending on how long you look at it.",
      "Montserrat carries the whole system — a black display weight for headlines, lighter weights for supporting copy, numerals held to their own bold — so the identity stays legible from a studio sign down to a lanyard badge.",
      "Orange against near-black charcoal became the studio's signature contrast, warm enough to read as creative rather than corporate, and it carries straight through into the social templates built for the studio's three messages: set design, classes, and the combined offer.",
      "Staff ID badges, lanyards and a small merchandise run — caps, tees, hoodies — round the system out as something the studio's own team wears day to day, not just a logo file handed over at the end.",
    ],
    media: [
      { kind: "image", src: "/assets/work/fascanvas/cover.jpg", alt: "FasCanvas logo in white and orange set against a lit photography studio backdrop" },
      { kind: "image", src: "/assets/work/fascanvas/moodboard.jpg", alt: "FasCanvas research moodboard of photography-brand marks and studio imagery" },
      { kind: "quote", text: "Three businesses, one studio — the mark couldn't play favourites between set design, shoots and classes." },
      { kind: "image", src: "/assets/work/fascanvas/color.jpg", alt: "FasCanvas colour system: primary orange, near-black and white swatches with hex and RGB values" },
      { kind: "image", src: "/assets/work/fascanvas/typography.jpg", alt: "FasCanvas typography system built on Montserrat, headline, body and numeral weights" },
      { kind: "image", src: "/assets/work/fascanvas/merch.jpg", alt: "FasCanvas-branded caps, t-shirts and hoodies in white, black and gold, each carrying the pixel F mark", caption: "Merchandise run" },
      { kind: "image", src: "/assets/work/fascanvas/id-lanyard.jpg", alt: "FasCanvas staff ID badge and lanyard mockup, orange card with a photo and QR code" },
      { kind: "image", src: "/assets/work/fascanvas/socials.jpg", alt: "Three FasCanvas Instagram story templates: set design, classes, and the combined studio offer" },
    ],
    credits: [
      { label: "Client", values: ["FasCanvas"] },
      { label: "Year", values: ["2025"] },
      { label: "Discipline", values: ["Brand Identity", "Typography", "Social", "Merchandise"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Daniel Chimezie", "Treasure David"] },
    ],
  },
  {
    slug: "valgee-transport-services",
    title: "Valgee",
    summary: "Premium identity and fleet branding for a private transport service.",
    tags: ["Brand Identity", "Fleet Livery", "App Design", "Social"],
    cover: "/assets/work/valgee/cover.jpg",
    body: [
      "Valgee Transport Services positions itself above the standard inter-city operator — private vans and prestige vehicles rather than shared routes — and the identity needed to read as premium on first contact.",
      "The mark is a falcon in flight reduced to a few angled planes, paired with a bold condensed wordmark; the bird reads as speed and vigilance at once, fitting for a brand built on trust and punctuality.",
      "Red was pushed hard rather than softened — a gradient running from a deep #B30000 through to pure #FF0000 — set against black and white, a deliberate break from the greens and blues most transport brands default to.",
      "Fleet application spans a liveried minibus shot moving through a city at night and an unbranded prestige sedan carrying only a discreet plate and badge, the two extremes of the service Valgee actually sells.",
      "A booking app icon and a run of social templates carry the same red-on-black system into daily use, so the brand feels consistent whether a passenger is boarding a van or tapping to book one.",
    ],
    media: [
      { kind: "image", src: "/assets/work/valgee/cover.jpg", alt: "Dark red Valgee-branded minivan descending a mountain road at sunset, logo overlaid" },
      { kind: "image", src: "/assets/work/valgee/brand-colors.jpg", alt: "Valgee colour system: black, core red and white swatches with a brand gradient from #B30000 to #FF0000" },
      { kind: "image", src: "/assets/work/valgee/typography.jpg", alt: "Valgee typography system built on Montserrat, bold display and regular supporting weights" },
      { kind: "quote", text: "A better way to travel — the red had to feel like confidence and motion, not warning." },
      { kind: "image", src: "/assets/work/valgee/branded-bus.jpg", alt: "White and red liveried Valgee minibus driving through a lit city street at night", caption: "Fleet livery, night run" },
      { kind: "image", src: "/assets/work/valgee/prestige-vehicle.jpg", alt: "Dark red Valgee-branded prestige minivan parked in a moodily lit concrete space" },
      { kind: "image", src: "/assets/work/valgee/mobile-app.jpg", alt: "Valgee Transport app icon on an iPhone home screen among standard Apple apps" },
      { kind: "image", src: "/assets/work/valgee/social-post.jpg", alt: "Valgee Instagram post template built on the red-and-black brand system" },
    ],
    credits: [
      { label: "Client", values: ["Valgee Transport Services"] },
      { label: "Year", values: ["2026"] },
      { label: "Discipline", values: ["Brand Identity", "Fleet Livery", "App Design", "Social"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Daniel Chimezie", "Treasure David"] },
    ],
  },
  {
    slug: "storied-and-illustrious-brand-identity",
    title: "Storied & Illustrious",
    summary: "Identity for a strategy and storytelling consultancy — brand voice as the entire product.",
    tags: ["Brand Identity", "Stationery", "Advertising", "Merchandise"],
    cover: "/assets/work/storied-and-illustrious/cover.jpg",
    body: [
      "Storied & Illustrious is a strategy, storytelling and creative-communications consultancy — the kind of client whose own identity has to demonstrate the discipline it sells, not just describe it.",
      "The mark is built from four rounded quadrants, three navy and one orange, arranged so the composition reads as both an abstract monogram and a piece of considered geometry — a visual argument for strategy before expression.",
      "A single comma-shaped glyph, repeated as a diagonal pattern across stationery and packaging, nods to the consultancy's name: every project is a story still being told.",
      "The stationery suite — letterhead, tubes, cups, business cards — was built dark-first, navy stock with orange used only as a signal colour, so the brand reads as authoritative in a boardroom setting rather than decorative.",
      "The line \"From Story to Stature\" carries the brand's central claim onto a full outdoor billboard, pairing the tagline with behind-the-scenes production photography to make the abstract promise concrete.",
    ],
    media: [
      { kind: "image", src: "/assets/work/storied-and-illustrious/cover.jpg", alt: "Storied & Illustrious outdoor billboard reading 'From Story to Stature' beside a cinematographer at work", caption: "Outdoor, citywide run" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/logo-primary.png", alt: "Storied & Illustrious primary logo: four rounded navy and orange quadrants beside the wordmark" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/pattern.jpg", alt: "Diagonal repeating comma-glyph pattern in navy on white, used across the Storied & Illustrious stationery suite" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/stationery-suite.jpg", alt: "Storied & Illustrious stationery suite: letterhead, envelope, tube packaging, cup and business cards in navy and orange" },
      { kind: "quote", text: "Strategy. Storytelling. Creative communications. — the stationery had to argue the same case as the pitch deck." },
      { kind: "image", src: "/assets/work/storied-and-illustrious/business-card.jpg", alt: "Storied & Illustrious business card in navy with the orange-accented logo mark" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/merch-hoodie.jpg", alt: "Navy and olive Storied & Illustrious branded hoodie with the logo mark on the chest" },
    ],
    credits: [
      { label: "Client", values: ["Storied & Illustrious"] },
      { label: "Year", values: ["2024"] },
      { label: "Discipline", values: ["Brand Identity", "Stationery", "Advertising", "Merchandise"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Ifeadi David"] },
    ],
  },
  {
    slug: "plateau-express-brand-identity",
    title: "Plateau Express",
    summary: "Identity and fleet livery for an inter-city transport group operating across Nigeria.",
    tags: ["Brand Identity", "Fleet Livery", "App Design", "Advertising"],
    cover: "/assets/work/plateau-express/cover.jpg",
    body: [
      "Plateau Express Services Group runs scheduled van and bus routes connecting Jos to major Nigerian hubs, and needed a mark that read as established and safety-first before a passenger ever boarded.",
      "The logo combines two horse heads flanking a wheel beneath the silhouette of Plateau State — a crest-like construction that borrows the gravity of a heraldic mark for a transport operator.",
      "Green, black and white were chosen for legibility at a distance — on a van door, a bus-stop poster, a terminal sign — over subtlety, since most of this identity's work happens in motion or from across a road.",
      "Fleet livery was the hardest surface: a diagonal green wrap had to stay legible on fifteen-seat Hiace vans running at speed, in daylight and under terminal lighting, which drove the palette's saturation more than any print application did.",
      "A companion booking app extended the brand into digital — route search, seat selection and a \"Travel with Confidence\" message built to work equally as a splash screen and as outdoor advertising.",
    ],
    media: [
      { kind: "image", src: "/assets/work/plateau-express/cover.jpg", alt: "Plateau Express logo on a van side mirror, green two-horse-and-wheel mark over Plateau State's silhouette" },
      { kind: "image", src: "/assets/work/plateau-express/colors.jpg", alt: "Plateau Express colour system: core green, dark green, pure white and black swatches with hex and CMYK values" },
      { kind: "image", src: "/assets/work/plateau-express/typography.jpg", alt: "Plateau Express primary typeface specimen, a bold condensed display face over the horse-and-wheel mark" },
      { kind: "quote", text: "Book. Travel. Trust Plateau Express — the livery had to read that confidently from across a terminal." },
      { kind: "image", src: "/assets/work/plateau-express/billboard-ads.jpg", alt: "Two Plateau Express bus-shelter posters: a fleet of Hiace vans captioned 'Engineered. Comfortable. Reliable.' and a booking-kiosk scene captioned 'Where booking feels like connection.'" },
      { kind: "image", src: "/assets/work/plateau-express/fleet-livery.jpg", alt: "A green-and-white liveried Plateau Express van parked among a row of unbranded vans, captioned 'Travel with Confidence'", caption: "Fleet livery, yard shot" },
      { kind: "image", src: "/assets/work/plateau-express/socials.jpg", alt: "Three Plateau Express Instagram story templates: 'Travel Made Easy', a trip-booking app screen, and 'Moving Forward, Together'" },
    ],
    credits: [
      { label: "Client", values: ["Plateau Express Services Group"] },
      { label: "Year", values: ["2025"] },
      { label: "Discipline", values: ["Brand Identity", "Fleet Livery", "App Design", "Advertising"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Daniel Chimezie", "Treasure David"] },
    ],
  },
  {
    slug: "brandeluxe-brand-identity",
    title: "Brandeluxe",
    summary: "Full identity system — mark, stationery and merchandise — for a creative agency built on its own name.",
    tags: ["Brand Identity", "Logo System", "Stationery", "Merchandise"],
    cover: "/assets/work/brandeluxe/mockup-bottle.jpg",
    body: [
      "Brandeluxe Creative Inc. came to the studio needing a mark that could carry its own name as a case study — an agency's identity is the first thing a prospective client judges it by.",
      "The solution is a stylised \"B\" built from two forms: a squared, architectural stroke and a single dot set apart from it, a quiet nod to the same dot-and-mark logic Omnidot uses for its own identity.",
      "Green was chosen as the sole accent against black and white, applied with discipline — always as a wayfinding colour, a divider, a dot, a sliver of brand, never as decoration.",
      "The system was built to survive a wide surface range: printed stationery and staff ID badges on one end, a run of merchandise — caps, bottles, wristbands — on the other, each with its own clear-space and single-colour rules.",
      "Applied consistently across print and product, the mark ends up doing the quiet work most identities claim and few deliver: it reads the same whether it's foil-stamped on a card or silkscreened onto a water bottle.",
    ],
    media: [
      { kind: "image", src: "/assets/work/brandeluxe/mockup-bottle.jpg", alt: "Black and green Brandeluxe-branded steel water bottle, the stylised B mark set over the pour line" },
      { kind: "image", src: "/assets/work/brandeluxe/logo-mark.png", alt: "Brandeluxe logo mark in white and green: a squared B built from two interlocking strokes with a single dot set apart" },
      { kind: "quote", text: "The dot had to read as deliberate, not decorative — it's doing the same job the mark's negative space is doing everywhere else." },
      { kind: "image", src: "/assets/work/brandeluxe/pattern.jpg", alt: "Diagonal repeating monogram pattern built from the Brandeluxe mark, used as a stationery and packaging surface" },
      { kind: "image", src: "/assets/work/brandeluxe/business-card.jpg", alt: "Brandeluxe business card, black stock with the green-and-white logo lockup" },
      { kind: "image", src: "/assets/work/brandeluxe/id-card.jpg", alt: "Brandeluxe staff ID badge on a lanyard, portrait photo with the B mark and role line" },
      { kind: "image", src: "/assets/work/brandeluxe/mockup-cap.jpg", alt: "Charcoal baseball cap embroidered with the Brandeluxe B mark" },
      { kind: "image", src: "/assets/work/brandeluxe/mockup-wristband.jpg", alt: "Black, white and green silicone wristbands stacked, each printed with the full Brandeluxe lockup", caption: "Merchandise run" },
    ],
    credits: [
      { label: "Client", values: ["Brandeluxe Creative Inc."] },
      { label: "Year", values: ["2023"] },
      { label: "Discipline", values: ["Brand Identity", "Logo System", "Stationery", "Merchandise"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Ifeadi David"] },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
