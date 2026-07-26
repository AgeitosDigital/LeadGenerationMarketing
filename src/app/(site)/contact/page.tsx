import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ageitos Advertising to partner on exclusive personal injury and MVA leads for your law firm.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-royal pt-32 pb-16 text-white md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="animate-fade-up font-headline text-sm tracking-[0.22em] text-seafoam uppercase">
            Contact
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 max-w-3xl font-headline text-4xl font-medium tracking-tight md:text-6xl">
            Let&apos;s talk about growing your firm.
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Submit the form and a sales representative will contact you - or
            call{" "}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-seafoam underline-offset-4 hover:underline"
            >
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <section id="partner" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="reveal space-y-8">
            <div>
              <h2 className="font-headline text-2xl font-medium text-ink">
                Partnership inquiries
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Ideal for personal injury firms focused on motor vehicle
                accidents who want exclusive, qualified leads - not shared
                volume.
              </p>
            </div>
            <div className="border-t border-hairline pt-8">
              <p className="font-headline text-xs tracking-[0.16em] text-muted uppercase">
                Phone
              </p>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-2 block font-headline text-xl text-ink hover:text-navy-light"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="border-t border-hairline pt-8">
              <p className="font-headline text-xs tracking-[0.16em] text-muted uppercase">
                Email
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-2 block font-headline text-xl text-ink hover:text-navy-light"
              >
                {SITE.email}
              </a>
            </div>
          </div>
          <div className="reveal rounded-sm border border-hairline bg-surface p-6 md:p-10">
            <ContactForm id="partner-form" />
          </div>
        </div>
      </section>
    </>
  );
}
