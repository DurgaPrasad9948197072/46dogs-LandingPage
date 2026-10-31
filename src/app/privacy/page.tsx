import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy notice | ${SITE.name}`,
  description: `How ${SITE.name} uses your details when you email us.`,
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy", title: `Privacy notice | ${SITE.name}` },
};

const email = (
  <a
    href={`mailto:${SITE.email}`}
    className="cursor-pointer text-fg underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:decoration-fg"
  >
    {SITE.email}
  </a>
);

const SECTIONS = [
  {
    h: "What we collect",
    body: <>If you email {email}, we get your email address and whatever you write.</>,
  },
  {
    h: "Why",
    body: <>Only to reply to you, and to tell you when donations open if you ask.</>,
  },
  {
    h: "Who sees it",
    body: <>The trustees. We do not sell or share your details.</>,
  },
  {
    h: "How long we keep it",
    body: (
      <>
        Only as long as we need it to answer you or keep you updated, then we delete
        it.
      </>
    ),
  },
  {
    h: "Your rights",
    body: <>You can ask to see, correct or delete what we hold. Email {email}.</>,
  },
];

export default function Privacy() {
  return (
    <>
      <Header />

      <main id="main" className="px-6 pt-36 pb-24 lg:px-8 lg:pt-44 lg:pb-32">
        <article className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold sm:text-5xl">Privacy notice</h1>

          <dl className="mt-12 divide-y divide-line-soft border-y border-line-soft">
            {SECTIONS.map((s) => (
              <div key={s.h} className="py-6">
                <dt className="font-display text-lg font-medium text-fg">{s.h}</dt>
                <dd className="mt-2 text-base text-muted">{s.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 space-y-4 text-base text-muted">
            <p>This site uses no cookies and no tracking.</p>
            <p>
              If you are unhappy with how we use your data, you can complain to the
              Information Commissioner&rsquo;s Office (
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-fg underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:decoration-fg"
              >
                ico.org.uk
              </a>
              ).
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
