import Image from "next/image";
import Link from "next/link";
import { CHARITY, NAV, SITE, SOCIALS } from "@/lib/site";
import { SOCIAL_ICONS } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── main grid ─────────────────────────────────────────── */}
        <div className="grid gap-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.2fr] lg:gap-12 lg:py-20">
          {/* brand */}
          <div className="max-w-sm">
            <Image
              src="/logo-mark.png"
              alt="46Dogs"
              width={200}
              height={200}
              sizes="112px"
              className="h-28 w-28 object-contain"
            />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              {SITE.name}, based in {SITE.location}.
            </p>
          </div>

          {/* explore */}
          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="eyebrow">
              Explore
            </h2>
            <ul className="mt-6 space-y-3.5">
              {[...NAV, { label: "Privacy notice", href: "/privacy" }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* connect */}
          <div>
            <h2 className="eyebrow">Connect</h2>
            <p className="mt-6 text-sm text-muted">
              Email:{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="cursor-pointer text-fg underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:decoration-fg"
              >
                {SITE.email}
              </a>
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 sm:flex-nowrap">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.name];
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={`46Dogs on ${social.name}`}
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-fg hover:text-fg"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ── legal bar ─────────────────────────────────────────── */}
        <div className="space-y-4 border-t border-line-soft py-8 text-xs text-dim">
          <p className="max-w-2xl">{CHARITY.note}</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>{SITE.credits}</p>
            <p className="shrink-0">© 2026 {SITE.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
