import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Personal Injury & MVA Legal Leads",
  description:
    "Purchase exclusive motor vehicle accident and personal injury leads for your law firm from Ageitos Advertising.",
};

const leadTypes = [
  {
    title: "Auto Accidents",
    body: "High-intent leads from drivers and passengers seeking representation after collisions — the core of our MVA pipeline.",
  },
  {
    id: "commercial",
    title: "Commercial Vehicles",
    body: "Truck, rideshare, and commercial policy matters with elevated case value potential for experienced PI firms.",
  },
  {
    title: "Motorcycle & Pedestrian",
    body: "Targeted campaigns for vulnerable road users with clear liability signals and medical treatment pathways.",
  },
  {
    title: "Premises & Adjacent PI",
    body: "Expand beyond MVA as your firm grows — with the same qualification standards and exclusive delivery.",
  },
];

const benefits = [
  "Exclusive access — not shared across competing firms",
  "Live transfer and warm handoff options",
  "Criteria matched to your practice and geography",
  "Real-time reporting on campaign and lead performance",
  "Less intake burden with pre-qualified inquiries",
];

export default function LegalLeadsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-royal pt-32 pb-20 text-white md:pt-40 md:pb-28">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80"
          alt="Legal documents and gavel"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="animate-fade-up font-headline text-sm tracking-[0.22em] text-seafoam uppercase">
            Purchase Legal Leads
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 max-w-3xl font-headline text-4xl font-medium tracking-tight md:text-6xl">
            Personal Injury &amp; MVA Leads Built to Convert
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Millions of motor vehicle collisions occur in the U.S. every year.
            Ageitos Advertising helps personal injury firms capture the injured
            plaintiffs actively seeking counsel — through Google, Meta, TikTok,
            and precision digital acquisition.
          </p>
          <div className="animate-fade-up delay-3 mt-10">
            <Button href="/contact#partner">Increase Your Caseload</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
                Why Firms Buy Leads
              </p>
              <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
                More qualified plaintiffs. Less wasted marketing spend.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                In personal injury, plaintiffs carry the burden of proof — and
                they look to experienced attorneys to shoulder that load. We
                receive inquiries from people who need help now. Our job is to
                qualify them and connect the right cases to your firm.
              </p>
            </div>
            <ul className="space-y-4 self-center">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="reveal flex gap-3 border-b border-hairline pb-4 text-ink"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-seafoam" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal max-w-2xl">
            <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
              Lead Types
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              Starting with motor vehicle accidents — expanding with your firm.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {leadTypes.map((type, i) => (
              <div
                key={type.title}
                id={type.id}
                className="reveal border border-hairline bg-white p-8"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-headline text-2xl font-medium text-ink">
                  {type.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{type.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8 lg:gap-20">
          <div className="reveal">
            <p className="font-headline text-sm tracking-[0.2em] text-seafoam uppercase">
              Ready For A Growth Partner?
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              Join the Ageitos Advertising network.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Tell us your markets, practice focus, and capacity. We&apos;ll
              map an exclusive lead plan around how your firm actually retains
              cases.
            </p>
          </div>
          <div className="reveal">
            <ContactForm variant="dark" id="leads-contact" />
          </div>
        </div>
      </section>
    </>
  );
}
