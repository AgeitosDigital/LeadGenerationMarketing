import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Car Accident Case Review",
  description:
    "Injured in a car accident? Get a free case review. No fee unless you win. Speak with an injury attorney about your crash.",
  robots: {
    index: false,
    follow: false,
  },
};

const trustPoints = [
  "Free case review - no obligation",
  "No fee unless you win",
  "Speak with an injury specialist soon",
];

export default function FreeCaseReviewPage() {
  return (
    <section className="relative overflow-hidden bg-royal text-white">
      <Image
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=80"
        alt=""
        fill
        priority
        className="object-cover object-center opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-royal via-royal/92 to-royal/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-royal/90 via-transparent to-royal/40" />

      <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-[1fr_1.05fr] md:items-start md:gap-14 md:px-8 md:py-16 lg:py-20">
        <div>
          <p className="animate-fade-up font-headline text-sm tracking-[0.22em] text-seafoam uppercase">
            Free case review
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 font-headline text-[2.4rem] leading-[1.08] font-medium tracking-tight md:text-5xl">
            Injured in a Crash?
          </h1>
          <p className="animate-fade-up delay-2 mt-5 max-w-md text-lg leading-relaxed text-white/80">
            Get a free case review and find out if you may be entitled to
            compensation. Takes about two minutes.
          </p>
          <ul className="animate-fade-up delay-3 mt-8 space-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex gap-3 text-white/85">
                <span className="mt-2 h-2 w-2 shrink-0 bg-seafoam" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-white/55">
            Prefer to talk now?{" "}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-seafoam underline-offset-4 hover:underline"
            >
              Call {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="animate-fade-up delay-2 border border-white/10 bg-white p-6 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:p-8">
          <h2 className="font-headline text-xl font-medium tracking-tight">
            Start your free review
          </h2>
          <p className="mt-2 text-sm text-muted">
            Tell us what happened and a specialist will follow up.
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
