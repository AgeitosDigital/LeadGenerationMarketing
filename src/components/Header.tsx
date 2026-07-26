"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-royal/95 text-white shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="group flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-headline text-[15px] font-semibold tracking-[0.08em] uppercase md:text-base">
            Ageitos
          </span>
          <span className="mt-0.5 font-headline text-[11px] font-light tracking-[0.28em] text-seafoam uppercase">
            Advertising
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline text-[15px] font-normal tracking-wide text-white/90 transition-colors hover:text-seafoam"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#partner"
            className="inline-flex items-center justify-center bg-seafoam px-6 py-2.5 font-headline text-[15px] font-medium text-royal transition-colors hover:bg-seafoam-deep"
          >
            Partner With Us
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 top-[72px] bg-royal transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 font-headline text-xl text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#partner"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center bg-seafoam px-6 py-3.5 font-headline text-base font-medium text-royal"
          >
            Partner With Us
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-4 text-center font-headline text-seafoam"
          >
            Call {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
