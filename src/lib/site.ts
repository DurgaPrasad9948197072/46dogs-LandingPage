/**
 * Single source of truth for copy, links and structured data.
 * Anything that appears in more than one place lives here.
 *
 * Wording rules (from the 2026 rebuild brief): the name is always "46Dogs";
 * 46Dogs is not yet a registered charity; donations are not open; plans are
 * described in the future tense; 46Dogs is independent of FourSix46; no
 * postal address; trustees are not named.
 */

export const SITE = {
  name: "46Dogs",
  // Canonical host. 46dogs.com, www.46dogs.com and www.46dogs.org all
  // 301-redirect here, so every signal (canonical, og:url, sitemap, robots,
  // JSON-LD) must use the bare .org form.
  url: "https://46dogs.org",
  email: "contact@46dogs.org",
  location: "England",
  title: "46Dogs: Care for India's Street Dogs",
  description:
    "46Dogs is a charity being set up in England to feed, treat, sterilise, vaccinate and rehome street dogs in India, starting in Rajahmundry.",
  founder: {
    name: "Dinesh Koyyalamudi",
    url: "https://46dc.com",
  },
  credits: "Brand by FourSix46®. Website by Stack46.",
} as const;

/*
 * Charity status. These are the lines that change once the Charity Commission
 * registers 46Dogs: swap `note` for the registered wording (with the charity
 * number), and update the "Is 46Dogs a registered charity?" FAQ answer below.
 */
export const CHARITY = {
  note: "46Dogs is being set up as a charitable incorporated organisation and is not yet registered with the Charity Commission.",
} as const;

/** Verified live profiles — these exact URLs are also used in `sameAs`. */
export const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/46dogs/" },
  { name: "X", href: "https://x.com/46Dogsuk" },
  { name: "Facebook", href: "https://www.facebook.com/46dogsuk/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/46dogs/" },
  { name: "TikTok", href: "https://www.tiktok.com/@46dogsuk" },
  { name: "YouTube", href: "https://www.youtube.com/@46dogs" },
] as const;

// Root-relative so the same links work from /privacy as well as the home page.
export const NAV = [
  { label: "Our Story", href: "/#about" },
  { label: "How You Can Help", href: "/#help" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const PLANS = [
  "Feed street dogs.",
  "Give vet treatment to sick and injured dogs.",
  "Sterilise dogs, to keep numbers healthy and humane.",
  "Vaccinate dogs, including against rabies.",
  "Rehome dogs where we can.",
  "Teach local people about caring for dogs and staying safe around them.",
] as const;

export const WAYS_TO_HELP = [
  {
    id: "feed",
    title: "Feed a Dog",
    body: "Pay for real meals for a real dog, once or every month.",
  },
  {
    id: "sponsor",
    title: "Sponsor a Dog",
    body: "Follow one dog's story. Your name will be on their profile, and you will get updates on their life.",
  },
  {
    id: "name",
    title: "Name a Dog",
    body: "Give a dog with no name their first one. It will stay on their record for good.",
  },
  {
    id: "gift",
    title: "Gift a Rescue",
    body: "Give in someone's name for a birthday, wedding or memorial. They will get a certificate showing which dog they helped.",
  },
] as const;

export const FAQS = [
  {
    q: "What is 46Dogs?",
    a: "46Dogs is a charity being set up in England and Wales to look after street dogs in India, starting in Rajahmundry, Andhra Pradesh.",
  },
  {
    q: "Is 46Dogs a registered charity?",
    a: "Not yet. 46Dogs is applying to the Charity Commission for England and Wales to register as a charitable incorporated organisation (CIO). Until it is registered we cannot call ourselves a registered charity or claim Gift Aid. We will update this page when that changes.",
  },
  {
    q: "Who runs 46Dogs?",
    a: "Three trustees, who are unpaid and responsible for how the charity is run.",
  },
  {
    q: "How will 46Dogs be funded?",
    a: "By donations. 46Dogs does not trade.",
  },
  {
    q: "Where will you work?",
    a: "We start in Rajahmundry, Andhra Pradesh, India, and will grow as funds allow.",
  },
  {
    q: "How can I help now?",
    a: `Donations are not open yet. Email ${SITE.email} and we will be in touch when they are.`,
  },
] as const;

/* ── JSON-LD ──────────────────────────────────────────────────────── */

/*
 * Three blocks, all built from the constants above so the page copy and the
 * machine-readable version can never disagree.
 *
 *   NGO      — who this entity is (independent; no parent organisation)
 *   WebSite  — the site itself, published by that entity
 *   FAQPage  — eligible for rich snippets, and the block answer engines
 *              quote from when asked "what is 46Dogs"
 *
 * @id values let the three cross-reference each other instead of reading as
 * unrelated islands, which is what lets a crawler assemble one entity.
 */

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;
const PAGE_ID = `${SITE.url}/#webpage`;

export const ngoSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/og.png`,
  email: SITE.email,
  description: SITE.description,
  sameAs: SOCIALS.map((s) => s.href),
  foundingLocation: { "@type": "Place", name: SITE.location },
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Street dog welfare",
    "Indian pariah dog (Indie)",
    "Dog sterilisation",
    "Rabies vaccination",
    "Dog rehoming",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general enquiries",
    email: SITE.email,
    availableLanguage: "English",
  },
  founder: {
    "@type": "Person",
    name: SITE.founder.name,
    url: SITE.founder.url,
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en-GB",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "WebPage",
      "@id": PAGE_ID,
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
      inLanguage: "en-GB",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      primaryImageOfPage: `${SITE.url}/og.png`,
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE.url}/#faq`,
  isPartOf: { "@id": PAGE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en-GB",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
