/**
 * Single source of truth for copy, links and structured data.
 * Anything that appears in more than one place lives here.
 */

export const SITE = {
  name: "46 Dogs",
  slogan: "Rescue. Care. Love.",
  // Canonical host. 46dogs.com 308-redirects here, so every signal
  // (canonical, og:url, sitemap, robots, JSON-LD) must use the www form.
  url: "https://www.46dogs.com",
  email: "hello@46dogs.com",
  description:
    "46 Dogs rescues, feeds, and cares for India's street dogs (Indies). No business model — just rescue, care, and love. Launching soon.",
  schemaDescription:
    "46 Dogs is a stray dog welfare initiative dedicated to the rescue, care, and rehabilitation of India's street dogs (Indies).",
  parent: {
    name: "FourSix46 Global Ltd",
    url: "https://foursix46.com",
    companyNo: "16712658",
    jurisdiction: "Registered in England & Wales",
    trademark: "FourSix46®",
  },
  founder: {
    name: "Dinesh Koyyalamudi",
    alternateName: "46DC",
    url: "https://46dc.com",
  },
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

export const NAV = [
  { label: "Our Story", href: "#about" },
  { label: "How You Can Help", href: "#help" },
  { label: "FAQ", href: "#faq" },
] as const;

export const WAYS_TO_HELP = [
  {
    id: "feed",
    title: "Feed a Dog",
    body: "Fund real meals for real dogs. One-off, or as part of our monthly Feeding Circle — your support keeps a specific dog fed, not a vague cause.",
  },
  {
    id: "sponsor",
    title: "Sponsor a Dog",
    body: "Follow one dog's story from rescue onward. Your name on their profile, updates on their life, a bond that's real and ongoing.",
  },
  {
    id: "name",
    title: "Name a Dog",
    body: "Give an unnamed rescue their very first name — recorded on their permanent story, forever.",
  },
  {
    id: "gift",
    title: "Gift a Rescue",
    body: "Donate in someone's name for a birthday, wedding, or memorial. They receive a certificate showing exactly whose life they helped save, and how many days of feeding it funds.",
  },
] as const;

export const FAQS = [
  {
    q: "What is 46 Dogs?",
    a: "46 Dogs is a stray dog welfare initiative dedicated to the rescue, care, and rehabilitation of India's street dogs (Indies).",
  },
  {
    q: "Is 46 Dogs a registered charity?",
    a: "46 Dogs currently operates as an initiative under FourSix46 Global Ltd, with UK charity registration in progress.",
  },
  {
    q: "Does 46 Dogs have a business model?",
    a: "No, and it never will. Every rescue, meal, and vaccination is funded through direct support, not revenue.",
  },
  {
    q: "How can I help right now?",
    a: "Get in touch at hello@46dogs.com. Donations, sponsorships, and dog profiles go live the moment the platform launches.",
  },
] as const;

/* ── JSON-LD ──────────────────────────────────────────────────────── */

export const ngoSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/og.png`,
  email: SITE.email,
  description: SITE.schemaDescription,
  slogan: SITE.slogan,
  sameAs: SOCIALS.map((s) => s.href),
  parentOrganization: {
    "@type": "Organization",
    name: SITE.parent.name,
    url: SITE.parent.url,
  },
  founder: {
    "@type": "Person",
    name: SITE.founder.name,
    alternateName: SITE.founder.alternateName,
    url: SITE.founder.url,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
