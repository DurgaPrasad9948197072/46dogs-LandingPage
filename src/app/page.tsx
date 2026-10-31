import Image from "next/image";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import {
  ArrowIcon,
  ArrowUpRightIcon,
  BowlIcon,
  GiftIcon,
  PawIcon,
  TagIcon,
} from "@/components/Icons";
import { PLANS, SITE, WAYS_TO_HELP } from "@/lib/site";

const HELP_ICONS = {
  feed: BowlIcon,
  sponsor: PawIcon,
  name: TagIcon,
  gift: GiftIcon,
} as const;

const linkClass =
  "cursor-pointer text-fg underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:decoration-fg";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section
          id="top"
          className="grain relative isolate flex min-h-svh items-center overflow-hidden px-6 pt-28 pb-20 lg:px-8"
        >
          {/* soft vignette so the logo lifts off the black */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07),transparent_65%)] lg:left-[68%]"
          />

          <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="eyebrow">India&rsquo;s Street Dogs</p>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-6 text-[2.6rem] leading-[1.04] font-semibold sm:text-6xl lg:text-[4rem]">
                  46Dogs:
                  <span className="mt-3 block">Care for India&rsquo;s street dogs</span>
                </h1>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">
                  46Dogs is a new charity being set up in England. We plan to feed,
                  treat, sterilise, vaccinate and rehome street dogs, starting in
                  Rajahmundry, Andhra Pradesh.
                </p>
              </Reveal>

              <Reveal delay={270}>
                <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                  <a
                    href="#about"
                    className="group inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-fg px-8 text-base font-medium text-ink transition-opacity duration-200 hover:opacity-85 sm:w-auto"
                  >
                    Read our story
                    <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="cursor-pointer text-base text-muted underline decoration-neutral-700 underline-offset-[6px] transition-colors duration-200 hover:text-fg hover:decoration-fg"
                  >
                    Contact us
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="order-first lg:order-last">
              <Image
                src="/logo-lockup.png"
                alt="46Dogs logo: a sitting dog formed from the numerals 4 and 6"
                width={720}
                height={720}
                priority
                sizes="(max-width: 1023px) 74vw, 40vw"
                className="mx-auto w-[58%] max-w-[260px] object-contain sm:w-[64%] sm:max-w-[380px] lg:w-full lg:max-w-none"
              />
            </Reveal>
          </div>
        </section>

        {/* ── FOUNDER QUOTE ──────────────────────────────────────── */}
        <section className="border-y border-line-soft px-6 py-24 lg:px-8 lg:py-32">
          <Reveal as="figure" className="mx-auto max-w-4xl text-center">
            <blockquote>
              <p className="font-serif text-[1.75rem] leading-[1.28] text-fg sm:text-4xl lg:text-[2.9rem]">
                &ldquo;They cannot say they are hungry. Someone has to be the voice for
                those who have none.&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-9 flex items-center justify-center gap-4 text-sm text-muted">
              <span aria-hidden="true" className="h-px w-10 bg-neutral-700" />
              <span>
                <a
                  href={SITE.founder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group inline-flex items-center gap-1 font-medium ${linkClass}`}
                >
                  {SITE.founder.name}
                  <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                , founder of {SITE.name}
              </span>
              <span aria-hidden="true" className="h-px w-10 bg-neutral-700" />
            </figcaption>
          </Reveal>
        </section>

        {/* ── OUR STORY ──────────────────────────────────────────── */}
        <section id="about" className="px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
              <Reveal>
                <p className="eyebrow">Our Story</p>
                <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
                  Not a statistic.
                  <span className="mt-1 block text-[0.86em] text-fg/55">A life that is remembered.</span>
                </h2>
              </Reveal>

              <div className="space-y-7 text-lg text-muted">
                <Reveal delay={80}>
                  <p>
                    46Dogs plans to feed, vaccinate and care for India&rsquo;s street dogs:
                    the Indies who search for food every day with no way to ask for help.
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <p>
                    Every dog we help will have a permanent record: a name, a health
                    history, a story that doesn&rsquo;t disappear once the moment passes.
                    Not a statistic. Not a passing act of kindness. A life that will be
                    tracked, cared for and remembered.
                  </p>
                </Reveal>
                <Reveal delay={200}>
                  <p>46Dogs is being set up as an independent charity, run by three trustees.</p>
                </Reveal>
                <Reveal delay={260}>
                  <p className="border-l border-neutral-700 pl-6 font-display text-xl leading-relaxed text-fg sm:text-2xl">
                    46Dogs does not trade. It will be funded by donations.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE WILL DO ────────────────────────────────────── */}
        <section id="plans" className="border-t border-line-soft px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Our Plans</p>
              <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">What we will do.</h2>
            </Reveal>

            <div>
              <ol className="divide-y divide-line-soft border-y border-line-soft">
                {PLANS.map((plan, i) => (
                  <Reveal as="li" key={plan} delay={i * 60} className="flex gap-6 py-5">
                    <span className="w-6 shrink-0 font-display text-sm leading-7 text-dim tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-fg">{plan}</span>
                  </Reveal>
                ))}
              </ol>
              <Reveal delay={120}>
                <p className="mt-8 text-lg text-muted">
                  We start in Rajahmundry and will grow as funds allow.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── HOW YOU CAN HELP ───────────────────────────────────── */}
        <section id="help" className="border-t border-line-soft px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">How You Can Help</p>
              <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
                Four ways to change a life.
              </h2>
              <p className="mt-6 text-lg text-muted">
                Donations are not open yet. We will open them once our charity bank
                account is set up.
              </p>
            </Reveal>

            <ul className="mt-16 grid gap-5 sm:grid-cols-2">
              {WAYS_TO_HELP.map((way, i) => {
                const Icon = HELP_ICONS[way.id];
                return (
                  <Reveal as="li" key={way.id} delay={i * 80}>
                    <article className="h-full rounded-2xl border border-line bg-surface p-8 sm:p-10">
                      <div className="flex items-start justify-between gap-6">
                        <Icon className="h-9 w-9 text-fg" />
                        <span className="rounded-full border border-line px-3 py-1 text-center font-display text-[0.625rem] font-medium tracking-[0.18em] text-dim uppercase">
                          Coming when donations open
                        </span>
                      </div>
                      <h3 className="mt-8 font-display text-2xl font-semibold">
                        {way.title}
                      </h3>
                      <p className="mt-4 text-base text-muted">{way.body}</p>
                    </article>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={120}>
              <p className="mt-12 text-base text-muted">
                Have a question, or want to hear when donations open? Email{" "}
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────────── */}
        <section id="faq" className="border-t border-line-soft px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
                Straight answers.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Faq />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
