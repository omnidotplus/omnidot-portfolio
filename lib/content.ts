/**
 * Editable content for the sections and pages that are real components
 * rather than ported markup. Change copy here, not in JSX.
 */

import type { FormTarget } from "./forms";

/** The two bodies of work the studio publishes. */
export type WorkKind = "website" | "brand";

/* ============================== Services ============================== */

/**
 * Three services. Digital Strategy stays dropped — it was template
 * inheritance with no work behind it. Graphic Design is here because the
 * studio does sell it, even though it has no showcase of its own yet (see
 * `showcase` below).
 *
 * No `image` field: the services list used to bleed a photograph in behind
 * itself on hover. That is gone, so the data that fed it is too.
 */
export type Service = {
  num: string;
  name: string;
  blurb: string;
  tags: string[];
  /** which intake form a CTA for this service should open */
  formTarget: FormTarget;
  /**
   * Which body of work the card leads to. Kept separate from `formTarget`
   * because the two genuinely diverge: Graphic Design takes brand briefs and
   * points at the brand showcase, since the studio's graphic-design output
   * (social templates, billboards, stationery, patterns) lives inside those
   * case studies rather than in a showcase of its own. Give it its own
   * WorkKind the day there is work to fill one.
   */
  showcase: WorkKind;
};

export const services: Service[] = [
  {
    num: "01",
    name: "Web Design & Development",
    blurb:
      "Sites built to be used, not just looked at — structure and hierarchy first, then the surface that carries them.",
    tags: ["Responsive Design", "Website Development", "UI/UX Design"],
    formTarget: "website",
    showcase: "website",
  },
  {
    num: "02",
    name: "Branding & Identity",
    blurb:
      "Marks, palettes and systems with rules tight enough to survive everything from a business card to a billboard.",
    tags: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    formTarget: "brand",
    showcase: "brand",
  },
  {
    num: "03",
    name: "Graphic Design",
    blurb:
      "Campaign artwork, print and social systems — the applied layer of an identity, built to the same rules as the mark it carries.",
    tags: ["Print & Editorial", "Campaign Artwork", "Social Templates", "Packaging"],
    formTarget: "brand",
    showcase: "brand",
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
  /** which discipline this belongs to — surfaced as a card badge on /work */
  kind: WorkKind;
  /**
   * True for studio concept work: a direction built to show an approach, with
   * no commissioning client behind it. These are labelled as concepts
   * everywhere they appear, and carry no client name, year or testimonial —
   * claiming a client that does not exist would be a lie about the studio's
   * record, which is the one thing a portfolio cannot afford.
   */
  concept?: boolean;
  tags: string[];
  cover: string;
  /** right-hand panel: the running narrative */
  body: string[];
  /** left column: imagery with pull quotes set between it */
  media: MediaBlock[];
  credits: Credit[];
  /** which intake form the case study's closing CTA should open */
  formTarget: FormTarget;
};

export const projects: Project[] = [
  {
    slug: "hash-designs-brand-identity",
    kind: "brand",
    title: "Hash Designs",
    summary:
      "Identity for an interior design studio, where furniture, styling and curation are sold as a feeling, not a catalogue.",
    tags: ["Brand Identity", "Logo Construction", "Typography", "Advertising"],
    cover: "/assets/work/hash-designs/cover.jpg",
    body: [
      "Hash Designs sells interiors, furniture and styling, and the brief was explicit about what that isn't: a catalogue brand. The identity needed to feel closer to an editorial or hospitality mark than a furniture retailer's.",
      "The logomark resolves the studio's name literally: two interlocking H's built from overlapping circles, constructed on a strict geometric grid so it reproduces cleanly at business-card scale or blown up across a billboard.",
      "A four-colour palette of terracotta, forest green, burgundy and warm ivory against charcoal black gives the brand a materials-led, residential warmth that a pure black-and-white system couldn't carry.",
      "The wordmark pairs a confident sans for \"HASH\" with an italic script swash on \"Designs,\" a deliberate tension between structure and warmth that the rest of the system echoes.",
      "The line \"Live Beautifully. Live Hash.\" anchors the brand voice across formats, from Instagram story templates through to a full-scale outdoor billboard pairing the tagline with real lifestyle photography.",
    ],
    media: [
      { kind: "image", src: "/assets/work/hash-designs/cover.jpg", alt: "Hash Designs logo mark over a terracotta-and-white furnished living room", caption: "Primary lockup, applied" },
      { kind: "image", src: "/assets/work/hash-designs/moodboard.jpg", alt: "Hash Designs research moodboard of furniture photography and competitor identities" },
      { kind: "quote", text: "We don't just design spaces. We craft experiences. The tagline had to be true before it could be printed anywhere." },
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
    formTarget: "brand",
  },
  {
    slug: "fascanvas-brand-identity",
    kind: "brand",
    title: "FasCanvas",
    summary:
      "Brand identity for a photography studio offering set design, shoots and hands-on classes.",
    tags: ["Brand Identity", "Typography", "Merchandise", "Social"],
    cover: "/assets/work/fascanvas/cover.jpg",
    body: [
      "FasCanvas runs three businesses under one roof (custom set design, photography production, and practical classes for people learning the craft) and needed a mark that could sit over all three without picking a favourite.",
      "The result is a pixel-built mark: two offset orange squares that read as a stylised F or as a shutter catching light, depending on how long you look at it.",
      "Montserrat carries the whole system: a black display weight for headlines, lighter weights for supporting copy, numerals held to their own bold, so the identity stays legible from a studio sign down to a lanyard badge.",
      "Orange against near-black charcoal became the studio's signature contrast, warm enough to read as creative rather than corporate, and it carries straight through into the social templates built for the studio's three messages: set design, classes, and the combined offer.",
      "Staff ID badges, lanyards and a small merchandise run (caps, tees, hoodies) round the system out as something the studio's own team wears day to day, not just a logo file handed over at the end.",
    ],
    media: [
      { kind: "image", src: "/assets/work/fascanvas/cover.jpg", alt: "FasCanvas logo in white and orange set against a lit photography studio backdrop" },
      { kind: "image", src: "/assets/work/fascanvas/moodboard.jpg", alt: "FasCanvas research moodboard of photography-brand marks and studio imagery" },
      { kind: "quote", text: "Three businesses, one studio. The mark couldn't play favourites between set design, shoots and classes." },
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
    formTarget: "brand",
  },
  {
    slug: "valgee-transport-services",
    kind: "brand",
    title: "Valgee",
    summary: "Premium identity and fleet branding for a private transport service.",
    tags: ["Brand Identity", "Fleet Livery", "App Design", "Social"],
    cover: "/assets/work/valgee/cover.jpg",
    body: [
      "Valgee Transport Services positions itself above the standard inter-city operator, with private vans and prestige vehicles rather than shared routes, and the identity needed to read as premium on first contact.",
      "The mark is a falcon in flight reduced to a few angled planes, paired with a bold condensed wordmark; the bird reads as speed and vigilance at once, fitting for a brand built on trust and punctuality.",
      "Red was pushed hard rather than softened: a gradient running from a deep #B30000 through to pure #FF0000, set against black and white, a deliberate break from the greens and blues most transport brands default to.",
      "Fleet application spans a liveried minibus shot moving through a city at night and an unbranded prestige sedan carrying only a discreet plate and badge, the two extremes of the service Valgee actually sells.",
      "A booking app icon and a run of social templates carry the same red-on-black system into daily use, so the brand feels consistent whether a passenger is boarding a van or tapping to book one.",
    ],
    media: [
      { kind: "image", src: "/assets/work/valgee/cover.jpg", alt: "Dark red Valgee-branded minivan descending a mountain road at sunset, logo overlaid" },
      { kind: "image", src: "/assets/work/valgee/brand-colors.jpg", alt: "Valgee colour system: black, core red and white swatches with a brand gradient from #B30000 to #FF0000" },
      { kind: "image", src: "/assets/work/valgee/typography.jpg", alt: "Valgee typography system built on Montserrat, bold display and regular supporting weights" },
      { kind: "quote", text: "A better way to travel. The red had to feel like confidence and motion, not warning." },
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
    formTarget: "brand",
  },
  {
    slug: "storied-and-illustrious-brand-identity",
    kind: "brand",
    title: "Storied & Illustrious",
    summary: "Identity for a strategy and storytelling consultancy, brand voice as the entire product.",
    tags: ["Brand Identity", "Stationery", "Advertising", "Merchandise"],
    cover: "/assets/work/storied-and-illustrious/cover.jpg",
    body: [
      "Storied & Illustrious is a strategy, storytelling and creative-communications consultancy, the kind of client whose own identity has to demonstrate the discipline it sells, not just describe it.",
      "The mark is built from four rounded quadrants, three navy and one orange, arranged so the composition reads as both an abstract monogram and a piece of considered geometry: a visual argument for strategy before expression.",
      "A single comma-shaped glyph, repeated as a diagonal pattern across stationery and packaging, nods to the consultancy's name: every project is a story still being told.",
      "The stationery suite (letterhead, tubes, cups, business cards) was built dark-first, navy stock with orange used only as a signal colour, so the brand reads as authoritative in a boardroom setting rather than decorative.",
      "The line \"From Story to Stature\" carries the brand's central claim onto a full outdoor billboard, pairing the tagline with behind-the-scenes production photography to make the abstract promise concrete.",
    ],
    media: [
      { kind: "image", src: "/assets/work/storied-and-illustrious/cover.jpg", alt: "Storied & Illustrious outdoor billboard reading 'From Story to Stature' beside a cinematographer at work", caption: "Outdoor, citywide run" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/logo-primary.png", alt: "Storied & Illustrious primary logo: four rounded navy and orange quadrants beside the wordmark" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/pattern.jpg", alt: "Diagonal repeating comma-glyph pattern in navy on white, used across the Storied & Illustrious stationery suite" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/stationery-suite.jpg", alt: "Storied & Illustrious stationery suite: letterhead, envelope, tube packaging, cup and business cards in navy and orange" },
      { kind: "quote", text: "Strategy. Storytelling. Creative communications. The stationery had to argue the same case as the pitch deck." },
      { kind: "image", src: "/assets/work/storied-and-illustrious/business-card.jpg", alt: "Storied & Illustrious business card in navy with the orange-accented logo mark" },
      { kind: "image", src: "/assets/work/storied-and-illustrious/merch-hoodie.jpg", alt: "Navy and olive Storied & Illustrious branded hoodie with the logo mark on the chest" },
    ],
    credits: [
      { label: "Client", values: ["Storied & Illustrious"] },
      { label: "Year", values: ["2024"] },
      { label: "Discipline", values: ["Brand Identity", "Stationery", "Advertising", "Merchandise"] },
      { label: "Team", values: ["Ajiboye Olorunjuwon", "Ifeadi David"] },
    ],
    formTarget: "brand",
  },
  {
    slug: "plateau-express-brand-identity",
    kind: "brand",
    title: "Plateau Express",
    summary: "Identity and fleet livery for an inter-city transport group operating across Nigeria.",
    tags: ["Brand Identity", "Fleet Livery", "App Design", "Advertising"],
    cover: "/assets/work/plateau-express/cover.jpg",
    body: [
      "Plateau Express Services Group runs scheduled van and bus routes connecting Jos to major Nigerian hubs, and needed a mark that read as established and safety-first before a passenger ever boarded.",
      "The logo combines two horse heads flanking a wheel beneath the silhouette of Plateau State, a crest-like construction that borrows the gravity of a heraldic mark for a transport operator.",
      "Green, black and white were chosen for legibility at a distance (on a van door, a bus-stop poster, a terminal sign) over subtlety, since most of this identity's work happens in motion or from across a road.",
      "Fleet livery was the hardest surface: a diagonal green wrap had to stay legible on fifteen-seat Hiace vans running at speed, in daylight and under terminal lighting, which drove the palette's saturation more than any print application did.",
      "A companion booking app extended the brand into digital: route search, seat selection and a \"Travel with Confidence\" message built to work equally as a splash screen and as outdoor advertising.",
    ],
    media: [
      { kind: "image", src: "/assets/work/plateau-express/cover.jpg", alt: "Plateau Express logo on a van side mirror, green two-horse-and-wheel mark over Plateau State's silhouette" },
      { kind: "image", src: "/assets/work/plateau-express/colors.jpg", alt: "Plateau Express colour system: core green, dark green, pure white and black swatches with hex and CMYK values" },
      { kind: "image", src: "/assets/work/plateau-express/typography.jpg", alt: "Plateau Express primary typeface specimen, a bold condensed display face over the horse-and-wheel mark" },
      { kind: "quote", text: "Book. Travel. Trust Plateau Express. The livery had to read that confidently from across a terminal." },
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
    formTarget: "brand",
  },
  {
    slug: "brandeluxe-brand-identity",
    kind: "brand",
    title: "Brandeluxe",
    summary: "Full identity system (mark, stationery and merchandise) for a creative agency built on its own name.",
    tags: ["Brand Identity", "Logo System", "Stationery", "Merchandise"],
    cover: "/assets/work/brandeluxe/mockup-bottle.jpg",
    body: [
      "Brandeluxe Creative Inc. came to the studio needing a mark that could carry its own name as a case study: an agency's identity is the first thing a prospective client judges it by.",
      "The solution is a stylised \"B\" built from two forms: a squared, architectural stroke and a single dot set apart from it, a quiet nod to the same dot-and-mark logic Omnidot uses for its own identity.",
      "Green was chosen as the sole accent against black and white, applied with discipline: always as a wayfinding colour, a divider, a dot, a sliver of brand, never as decoration.",
      "The system was built to survive a wide surface range: printed stationery and staff ID badges on one end, a run of merchandise (caps, bottles, wristbands) on the other, each with its own clear-space and single-colour rules.",
      "Applied consistently across print and product, the mark ends up doing the quiet work most identities claim and few deliver: it reads the same whether it's foil-stamped on a card or silkscreened onto a water bottle.",
    ],
    media: [
      { kind: "image", src: "/assets/work/brandeluxe/mockup-bottle.jpg", alt: "Black and green Brandeluxe-branded steel water bottle, the stylised B mark set over the pour line" },
      { kind: "image", src: "/assets/work/brandeluxe/logo-mark.png", alt: "Brandeluxe logo mark in white and green: a squared B built from two interlocking strokes with a single dot set apart" },
      { kind: "quote", text: "The dot had to read as deliberate, not decorative. It's doing the same job the mark's negative space is doing everywhere else." },
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
    formTarget: "brand",
  },

  /* ---------------------------------------------------------------------
   * Website concepts.
   *
   * Studio-authored directions, not commissioned work. Imagery is licensed
   * stock standing in for a real build (see STOCK_IMAGE_CREDITS.md), which is
   * exactly why none of these carries a client name, a year or a testimonial:
   * the copy describes an approach the studio can argue for, and nothing else.
   * Promote one to a real case study by filling in the client, swapping the
   * imagery for the actual build, and deleting `concept: true`.
   * ------------------------------------------------------------------- */
  {
    slug: "editorial-commerce-concept",
    kind: "website",
    concept: true,
    title: "Editorial Commerce",
    summary:
      "A storefront concept that treats the product page as the story, not the end of one.",
    tags: ["Ecommerce", "Art Direction", "Responsive", "Concept"],
    cover: "/assets/work/editorial-commerce-concept/cover.jpg",
    body: [
      "Most small-retail sites are a grid of thumbnails and a price. This concept starts from the opposite assumption: that someone deciding to spend money wants a reason, and the product page is where that reason has to live.",
      "The structure puts editorial imagery and copy inline with the buying controls rather than on a separate \"about\" page nobody reaches — material, origin and use sit beside the add-to-cart, not three clicks away from it.",
      "Navigation is reduced to two levels. Deep category trees are a warehouse's problem, not a customer's, and every extra tier is another decision made before anyone has seen a product.",
      "Checkout is designed as the least decorated surface on the site. Once intent exists, the only job left is to not lose it: one column, visible progress, no upsell interrupting the path.",
      "On a phone the editorial and the controls swap priority rather than stacking in source order — imagery compresses, the price and the action stay within thumb reach the whole way down.",
    ],
    media: [
      { kind: "image", src: "/assets/work/editorial-commerce-concept/cover.jpg", alt: "Daylit retail interior with garments on open rails, used as the concept's hero imagery", caption: "Concept hero" },
      { kind: "image", src: "/assets/work/editorial-commerce-concept/product.jpg", alt: "Product photography arrangement standing in for the concept's product detail page" },
      { kind: "quote", text: "A product page is an argument. If it only lists attributes, it has not made one." },
      { kind: "image", src: "/assets/work/editorial-commerce-concept/mobile.jpg", alt: "Phone held in hand showing a shopping interface, standing in for the concept's mobile checkout" },
      { kind: "image", src: "/assets/work/editorial-commerce-concept/system.jpg", alt: "Flat-lay desk arrangement standing in for the concept's component and type system" },
    ],
    credits: [
      { label: "Type", values: ["Studio concept"] },
      { label: "Discipline", values: ["Ecommerce", "Art Direction", "Responsive Design"] },
      { label: "Imagery", values: ["Licensed stock, placeholder"] },
    ],
    formTarget: "website",
  },
  {
    slug: "hospitality-booking-concept",
    kind: "website",
    concept: true,
    title: "Hospitality Booking",
    summary:
      "A restaurant and stay concept built around the one action that matters: securing the table.",
    tags: ["Booking Flow", "Hospitality", "Mobile-First", "Concept"],
    cover: "/assets/work/hospitality-booking-concept/cover.jpg",
    body: [
      "Hospitality sites tend to be built as brochures with a booking widget bolted into a corner. This concept inverts that: the booking state is present from the first screen and persists as you read, because that is the only thing a visitor came to do.",
      "Dates, party size and service are held in a single bar that follows the page. Nothing resets when you navigate to the menu or the rooms — losing a half-filled booking to a curiosity click is the most common way these sites fail.",
      "The menu is typeset, not photographed. Dish photography ages badly and prices change weekly; type is cheap to update and reads better on a phone at a bus stop, which is where most of these decisions get made.",
      "Availability is shown honestly, including when there is none. A flow that hides a full night until the last step costs more trust than it saves.",
      "The whole thing is designed mobile-first and one-handed. Hospitality traffic skews heavily to phones in transit, so the desktop layout is the adaptation here, not the origin.",
    ],
    media: [
      { kind: "image", src: "/assets/work/hospitality-booking-concept/cover.jpg", alt: "Laid restaurant table in warm light, used as the concept's hero imagery", caption: "Concept hero" },
      { kind: "image", src: "/assets/work/hospitality-booking-concept/room.jpg", alt: "Furnished interior standing in for the concept's rooms and spaces section" },
      { kind: "quote", text: "The booking bar never resets. Everything else on the page is secondary to not losing a half-made decision." },
      { kind: "image", src: "/assets/work/hospitality-booking-concept/booking.jpg", alt: "Phone held in hand, standing in for the concept's one-handed booking flow" },
      { kind: "image", src: "/assets/work/hospitality-booking-concept/mobile.jpg", alt: "Phone screen mockup standing in for the concept's confirmation state" },
    ],
    credits: [
      { label: "Type", values: ["Studio concept"] },
      { label: "Discipline", values: ["Booking Flow", "Mobile-First Design", "UI/UX"] },
      { label: "Imagery", values: ["Licensed stock, placeholder"] },
    ],
    formTarget: "website",
  },
  {
    slug: "fintech-dashboard-concept",
    kind: "website",
    concept: true,
    title: "Fintech Dashboard",
    summary:
      "A product concept for dense financial data that stays readable at a glance and under pressure.",
    tags: ["Product UI", "Data Design", "Design System", "Concept"],
    cover: "/assets/work/fintech-dashboard-concept/cover.jpg",
    body: [
      "Financial interfaces fail in a specific way: they show everything at once, so nothing is emphasised, and the number that actually required attention is the same weight as the forty around it.",
      "This concept works from a strict hierarchy of three tiers — the figure you check hourly, the figures you check daily, and everything else behind a deliberate click — and refuses to promote anything past its tier.",
      "Colour carries meaning and nothing else. There is no decorative accent anywhere in the data surface: if something is coloured, it is because its state differs from normal, which keeps the alarm channel uncluttered.",
      "Numerals are set tabular throughout so columns align and a changing figure does not shift the characters beside it — a small thing that becomes obvious the moment a value updates live.",
      "The system is specified as tokens rather than screens: density, tier, and state compose, so a new panel inherits the rules instead of relitigating them.",
    ],
    media: [
      { kind: "image", src: "/assets/work/fintech-dashboard-concept/cover.jpg", alt: "Laptop displaying an analytics dashboard, used as the concept's hero imagery", caption: "Concept hero" },
      { kind: "image", src: "/assets/work/fintech-dashboard-concept/dashboard.jpg", alt: "Screen showing data panels, standing in for the concept's primary dashboard tier" },
      { kind: "quote", text: "If everything is emphasised, nothing is. Three tiers, and nothing gets promoted past its own." },
      { kind: "image", src: "/assets/work/fintech-dashboard-concept/charts.jpg", alt: "Charts and figures on a display, standing in for the concept's reporting views" },
      { kind: "image", src: "/assets/work/fintech-dashboard-concept/mobile.jpg", alt: "Phone showing an application interface, standing in for the concept's mobile summary view" },
    ],
    credits: [
      { label: "Type", values: ["Studio concept"] },
      { label: "Discipline", values: ["Product UI", "Data Visualisation", "Design System"] },
      { label: "Imagery", values: ["Licensed stock, placeholder"] },
    ],
    formTarget: "website",
  },
  {
    slug: "studio-portfolio-concept",
    kind: "website",
    concept: true,
    title: "Studio Portfolio",
    summary:
      "A portfolio concept for creative practices, where the work is the interface and the chrome gets out of its way.",
    tags: ["Portfolio", "Editorial Layout", "Motion", "Concept"],
    cover: "/assets/work/studio-portfolio-concept/cover.jpg",
    body: [
      "A creative portfolio has one failure mode: the site competes with the work it is showing. This concept spends its entire design budget on framing and almost none on decoration.",
      "The index is a list, not a grid of equal tiles. Lists let a project's name and discipline carry weight, and they scale honestly — six pieces and sixty pieces use the same layout without one looking thin.",
      "Case studies split into a flowing media column and a pinned narrative panel, so imagery can run at full scale while the argument for it stays in frame rather than scrolling away above.",
      "Motion is used once per screen at most, and always to explain a relationship — where something came from, what it belongs to. Anything that only announces its own cleverness is cut in the subtraction pass.",
      "Everything degrades to a static document with no JavaScript, because a portfolio that cannot be read on a bad connection is not doing the one job it has.",
    ],
    media: [
      { kind: "image", src: "/assets/work/studio-portfolio-concept/cover.jpg", alt: "Designer's desk with sketches and tools, used as the concept's hero imagery", caption: "Concept hero" },
      { kind: "image", src: "/assets/work/studio-portfolio-concept/grid.jpg", alt: "Design work displayed on a screen, standing in for the concept's case study layout" },
      { kind: "quote", text: "The site competes with the work, or it frames it. It cannot do both." },
      { kind: "image", src: "/assets/work/studio-portfolio-concept/desk.jpg", alt: "Workspace flat-lay standing in for the concept's index and typography treatment" },
      { kind: "image", src: "/assets/work/studio-portfolio-concept/space.jpg", alt: "Studio interior standing in for the concept's about and contact surfaces" },
    ],
    credits: [
      { label: "Type", values: ["Studio concept"] },
      { label: "Discipline", values: ["Portfolio", "Editorial Layout", "Motion Design"] },
      { label: "Imagery", values: ["Licensed stock, placeholder"] },
    ],
    formTarget: "website",
  },
  {
    slug: "logistics-platform-concept",
    kind: "website",
    concept: true,
    title: "Logistics Platform",
    summary:
      "An operations concept for fleet and freight, designed for people reading it in a yard, not at a desk.",
    tags: ["Operations UI", "Tracking", "Accessibility", "Concept"],
    cover: "/assets/work/logistics-platform-concept/cover.jpg",
    body: [
      "The studio's brand work for transport operators kept running into the same gap: the identity was handled, and the software the staff used every day was not. This concept is the answer to that gap.",
      "It is built for the actual reading conditions — a phone in daylight, often one-handed, often by someone who has thirty seconds. Type sizes start larger than a desk product would use and contrast is specified against sunlight, not against a design review.",
      "Consignment state is expressed in words as well as colour. A status system that is only colour-coded excludes a meaningful share of users and stops working entirely on a sun-bleached screen.",
      "The tracking view answers one question — where is it and when does it arrive — before offering anything else. Everything secondary is reachable, but nothing secondary is in the way.",
      "Dispatch and customer views share one component set with different densities, so an operator and a customer see the same truth without the studio maintaining two divergent products.",
    ],
    media: [
      { kind: "image", src: "/assets/work/logistics-platform-concept/cover.jpg", alt: "Team working at a shared operations desk, used as the concept's hero imagery", caption: "Concept hero" },
      { kind: "image", src: "/assets/work/logistics-platform-concept/console.jpg", alt: "Code and data on a screen, standing in for the concept's dispatch console" },
      { kind: "quote", text: "Status cannot be colour alone. In a yard at noon, colour is the first thing the screen loses." },
      { kind: "image", src: "/assets/work/logistics-platform-concept/workspace.jpg", alt: "Laptop workspace standing in for the concept's tracking and reporting views" },
      { kind: "image", src: "/assets/work/logistics-platform-concept/ops.jpg", alt: "People reviewing work together, standing in for the concept's operator handover flow" },
    ],
    credits: [
      { label: "Type", values: ["Studio concept"] },
      { label: "Discipline", values: ["Operations UI", "Accessibility", "Design System"] },
      { label: "Imagery", values: ["Licensed stock, placeholder"] },
    ],
    formTarget: "website",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

/* ========================= Work categories =========================
 * The work index exists in three views: everything, websites only, brand
 * only. Each is a real route rather than client-side filter state, so a
 * view can be linked to, shared and indexed — the toggle is a set of links,
 * which also means the filter works with JavaScript disabled.
 *
 * These paths sit alongside /work/[slug]. A static segment wins over a
 * dynamic one in the App Router, and no project uses "web-design" or
 * "brand-design" as a slug, so there is no collision — but that is a real
 * constraint: never add a project with either of those slugs.
 * ================================================================= */

export const WORK_CATEGORIES: Record<
  WorkKind,
  {
    route: string;
    /** short form for the filter pill: plural reads as a category */
    toggleLabel: string;
    /** singular, for use inside a sentence ("See website work") */
    noun: string;
    heading: string;
    blurb: string;
  }
> = {
  website: {
    route: "/work/web-design",
    toggleLabel: "Websites",
    noun: "website",
    heading: "Website Design",
    blurb:
      "Storefronts, booking flows, product interfaces and portfolios — structure first, then the surface that carries it.",
  },
  brand: {
    route: "/work/brand-design",
    toggleLabel: "Brand",
    noun: "brand",
    heading: "Brand Identity",
    blurb:
      "Marks, palettes, livery and stationery systems, built to hold together from a business card to a billboard.",
  },
};

export const projectsOfKind = (kind: WorkKind) =>
  projects.filter((p) => p.kind === kind);

/** Website first, matching the order the services section lists them in. */
export const WORK_KIND_ORDER: WorkKind[] = ["website", "brand"];
