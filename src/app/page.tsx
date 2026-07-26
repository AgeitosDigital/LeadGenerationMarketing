import Image from "next/image";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

const differentiators = [
  {
    title: "Superior Leads",
    body: "Consistent, high-intent MVA leads — screened for injury, liability, and readiness — so your intake team spends time on cases that convert.",
  },
  {
    title: "Proven Digital Marketing",
    body: "We run performance campaigns across Google, Meta, TikTok, and search — reaching injured drivers the moment they’re looking for help.",
  },
  {
    title: "Exclusive Delivery",
    body: "Your firm receives exclusive leads matched to your criteria, markets, and capacity — not shared volume recycled across competitors.",
  },
  {
    title: "Qualified Intake",
    body: "Every inquiry is vetted before it reaches your desk. Warm, actionable transfers designed for personal injury retention.",
  },
];

const partnerReasons = [
  {
    title: "Receive Quality Leads",
    body: "A steady flow of exclusive, high-converting motor vehicle accident leads.",
  },
  {
    title: "Invest With Confidence",
    body: "Transparent reporting and ROI-focused campaigns so every dollar works harder.",
  },
  {
    title: "Grow Your Practice",
    body: "A long-term marketing partnership built around predictable case acquisition.",
  },
];

const testimonials = [
  {
    quote:
      "Ageitos gave us a clear view of our MVA market and a pipeline we could actually staff around. The lead quality is what changed our growth.",
    name: "Managing Partner",
    firm: "Regional PI Firm",
  },
  {
    quote:
      "We stopped chasing cold form fills. Exclusive, qualified auto accident leads let our attorneys focus on signing the right cases.",
    name: "Intake Director",
    firm: "Multi-State Injury Practice",
  },
  {
    quote:
      "The hardest thing as a firm owner is getting the client. Ageitos removes that stress and delivers people who need our help.",
    name: "Founding Attorney",
    firm: "Boutique Accident Firm",
  },
];

const channels = [
  "Google Ads",
  "Meta",
  "TikTok",
  "YouTube",
  "SEO",
  "Landing Pages",
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Walker-style full-bleed */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-royal text-white">
        <Image
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=80"
          alt="Professionals shaking hands in a modern office"
          fill
          priority
          className="animate-hero-image object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal/92 via-royal/75 to-royal/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-transparent to-royal/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-40">
          <p className="animate-fade-up font-headline text-sm tracking-[0.28em] text-seafoam uppercase md:text-[15px]">
            Ageitos Advertising
          </p>
          <h1 className="animate-fade-up delay-1 mt-5 max-w-3xl font-headline text-[2.6rem] leading-[1.08] font-medium tracking-tight md:text-6xl lg:text-7xl">
            {SITE.tagline}
            <span className="mt-2 block text-seafoam">
              Advance Justice Through Better Leads.
            </span>
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Exclusive motor vehicle accident leads for personal injury law
            firms — generated through high-intent digital advertising.
          </p>
          <div className="animate-fade-up delay-3 mt-10 flex flex-wrap gap-4">
            <Button href="/contact#partner">Contact Us Now</Button>
            <Button href={`tel:${SITE.phoneTel}`} variant="outlined">
              Call {SITE.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal max-w-2xl">
            <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
              What Sets Us Apart
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight text-ink md:text-4xl">
              Built for personal injury firms that want quality over volume.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Ageitos Advertising partners with PI firms to deliver exclusive,
              conversion-ready MVA leads. Our commitment to quality,
              transparency, and consistency makes us a reliable growth partner
              as you scale your caseload.
            </p>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="reveal border-t border-hairline pt-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 h-1 w-10 bg-seafoam" />
                <h3 className="font-headline text-xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-seafoam/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-muted/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal max-w-2xl">
            <p className="font-headline text-sm tracking-[0.2em] text-seafoam uppercase">
              Why Partner With Ageitos?
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              A marketing engine built around signed cases — not vanity metrics.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {partnerReasons.map((item, i) => (
              <div
                key={item.title}
                className="reveal border border-white/10 bg-white/[0.03] p-8"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-headline text-seafoam text-sm tracking-[0.18em]">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-headline text-2xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/70">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="reveal mt-12">
            <Button href="/contact#partner">Partner With Us</Button>
          </div>
        </div>
      </section>

      {/* Channels strip */}
      <section className="border-y border-hairline bg-surface py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="reveal text-center font-headline text-sm tracking-[0.22em] text-muted uppercase">
            Acquisition Channels
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {channels.map((channel) => (
              <span
                key={channel}
                className="font-headline text-lg font-medium tracking-wide text-navy-light md:text-xl"
              >
                {channel}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal max-w-2xl">
            <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
              Client Perspective
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              See what partners value most.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.name}
                className="reveal flex flex-col border-l-2 border-seafoam pl-6"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p className="text-lg leading-relaxed text-ink/90">
                  “{t.quote}”
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="font-headline font-medium text-ink">
                      {t.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted">
                      {t.firm}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Mid contact */}
      <section
        id="contact-form-wrapper"
        className="bg-surface py-20 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
              Have Questions?
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              We&apos;re here to help you grow.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Tell us about your firm, markets, and lead goals. A specialist
              will walk you through exclusive MVA lead options and how Ageitos
              fits your intake workflow.
            </p>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80"
                alt="Professional in a modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="reveal">
            <ContactForm id="home-contact" />
          </div>
        </div>
      </section>

      {/* Resources teaser */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
                Insights
              </p>
              <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
                Grow your firm and your legal marketing knowledge.
              </h2>
            </div>
            <Button href="/how-it-works" variant="outlined" className="text-navy border-navy">
              See How It Works
            </Button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Why Exclusive MVA Leads Outperform Shared Volume",
                href: "/legal-leads",
              },
              {
                title: "How Digital Channels Drive Auto Accident Case Intake",
                href: "/how-it-works",
              },
              {
                title: "Building a Predictable Personal Injury Pipeline",
                href: "/about",
              },
            ].map((article, i) => (
              <a
                key={article.title}
                href={article.href}
                className="reveal group block border-t border-hairline pt-5 transition-colors hover:border-seafoam"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="font-headline text-xl font-medium text-ink group-hover:text-navy-light">
                  {article.title}
                </h3>
                <span className="mt-4 inline-block font-headline text-sm tracking-wide text-brown">
                  Learn More →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
