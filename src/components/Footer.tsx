import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-royal text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-20 lg:py-20">
          <div>
            <p className="font-headline text-sm tracking-[0.2em] text-seafoam uppercase">
              We&apos;re here to help
            </p>
            <h2 className="mt-4 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              Ready to grow your personal injury practice?
            </h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
              Submit the form and a partner specialist will contact you - or
              call us at{" "}
              <a
                href={`tel:${SITE.phoneTel}`}
                className="text-seafoam underline-offset-4 hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <ContactForm variant="dark" compact />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex flex-col leading-none">
            <span className="font-headline text-lg font-semibold tracking-[0.08em] uppercase">
              Ageitos
            </span>
            <span className="mt-1 font-headline text-xs font-light tracking-[0.28em] text-seafoam uppercase">
              Advertising
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Exclusive motor vehicle accident leads for personal injury law
            firms - powered by Google, Meta, TikTok, and precision digital
            acquisition.
          </p>
        </div>

        <div>
          <h3 className="font-headline text-sm tracking-[0.16em] text-seafoam uppercase">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-headline text-sm tracking-[0.16em] text-seafoam uppercase">
            Lead Types
          </h3>
          <ul className="mt-4 space-y-2.5 text-white/75">
            <li>
              <Link href="/legal-leads" className="hover:text-white">
                Auto Accident Leads
              </Link>
            </li>
            <li>
              <Link href="/legal-leads#commercial" className="hover:text-white">
                Commercial Vehicle Leads
              </Link>
            </li>
            <li>
              <Link href="/legal-leads" className="hover:text-white">
                Personal Injury Leads
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-headline text-sm tracking-[0.16em] text-seafoam uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-2.5 text-white/75">
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
