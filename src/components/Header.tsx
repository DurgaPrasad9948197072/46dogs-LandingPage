"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import Wordmark from "./Wordmark";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line-soft bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/#top"
          className="cursor-pointer transition-opacity duration-200 hover:opacity-70"
          aria-label="46Dogs home"
        >
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-pointer text-sm text-muted transition-colors duration-200 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="cursor-pointer rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-ink transition-opacity duration-200 hover:opacity-85"
          >
            Contact us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-fg transition-transform duration-300 ${
                open ? "top-2 rotate-45" : "top-0.5"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-fg transition-transform duration-300 ${
                open ? "top-2 -rotate-45" : "top-3.5"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line-soft bg-ink md:hidden"
      >
        <nav className="flex flex-col px-6 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer border-b border-line-soft py-4 text-base text-muted transition-colors duration-200 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            onClick={() => setOpen(false)}
            className="mt-5 mb-2 cursor-pointer rounded-full bg-fg px-5 py-3.5 text-center text-sm font-medium text-ink"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
