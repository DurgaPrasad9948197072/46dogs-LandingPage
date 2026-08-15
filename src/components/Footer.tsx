import Image from "next/image";
import { NAV, SITE, SOCIALS } from "@/lib/site";
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
              alt="46 Dogs"
              width={200}
              height={200}
              sizes="112px"
              className="h-28 w-28 object-contain"
            />
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Rescuing, feeding, and caring for India&rsquo;s street dogs — one dog, one
              name, one life at a time.
            </p>
          </div>

          {/* explore */}
          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="eyebrow">
              Explore
            </h2>
            <ul className="mt-6 space-y-3.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* connect */}
          <div>
            <h2 className="eyebrow">Connect</h2>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-block cursor-pointer text-sm text-fg underline decoration-neutral-600 underline-offset-4 transition-colors duration-200 hover:decoration-fg"
            >
              {SITE.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-2 sm:flex-nowrap">
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.name];
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={`46 Dogs on ${social.name}`}
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
        <div className="flex flex-col gap-4 border-t border-line-soft py-8 text-xs text-dim md:flex-row md:items-center md:justify-between">
          <p>
            46 Dogs is part of the{" "}
            <a
              href={SITE.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted underline decoration-neutral-700 underline-offset-4 transition-colors duration-200 hover:text-fg hover:decoration-fg"
            >
              {SITE.parent.trademark}
            </a>{" "}
            ecosystem. {SITE.parent.name} — Company No. {SITE.parent.companyNo} —{" "}
            {SITE.parent.jurisdiction}.
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {SITE.parent.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
