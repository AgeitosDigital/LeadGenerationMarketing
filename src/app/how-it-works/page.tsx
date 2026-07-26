import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Ageitos Advertising generates, qualifies, and delivers exclusive MVA leads to personal injury law firms.",
};

const steps = [
  {
    title: "Advertise",
    body: "We reach injured consumers through Google, Meta, TikTok, YouTube, and high-intent search — meeting plaintiffs at the moment they need a lawyer.",
  },
  {
    title: "Connect",
    body: "Prospects call or submit forms into our intake system. Dedicated specialists engage quickly, with empathy and clarity during a stressful moment.",
  },
  {
    title: "Qualify & Transfer",
    body: "We screen for injury, liability indicators, treatment, and your firm’s criteria — then live-transfer or deliver warm exclusive leads to your team.",
  },
  {
    title: "Optimize",
    body: "Your account lead reviews performance and ROI with you, refining markets, creative, and qualification rules so your pipeline keeps improving.",
  },
];

const channels = [
  {
    title: "Paid Search",
    body: "Capture high-intent “car accident lawyer” and related searches when plaintiffs are ready to hire.",
  },
  {
    title: "Meta & Social",
    body: "Reach local audiences with creative that educates, builds trust, and drives qualified form fills and calls.",
  },
  {
    title: "TikTok & Video",
    body: "Meet younger and mobile-first audiences where attention is — with compliant creative tuned for legal response.",
  },
  {
    title: "Landing Pages & SEO",
    body: "Conversion-focused pages and content funnels that turn traffic into retainable case opportunities.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-royal pt-32 pb-20 text-white md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="animate-fade-up font-headline text-sm tracking-[0.22em] text-seafoam uppercase">
            How We Partner Together
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 max-w-3xl font-headline text-4xl font-medium tracking-tight md:text-6xl">
            From ad click to signed retainer — a clear path.
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Ageitos Advertising specializes in live-connecting quality,
            exclusive MVA leads to personal injury law firms. You focus on
            advocacy. We focus on acquisition.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="reveal border-t border-hairline py-8 md:border-t-0 md:border-l md:px-6 md:py-0 lg:px-8 first:md:border-l-0 first:md:pl-0"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-headline text-sm tracking-[0.2em] text-seafoam uppercase">
                  Step {i + 1}
                </span>
                <h2 className="mt-3 font-headline text-2xl font-medium text-ink">
                  {step.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
              alt="Marketing team reviewing campaign performance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="reveal">
            <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
              Strategic Digital Communication
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              Multi-channel campaigns tuned for legal intake.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We blend creative and data-driven media buying to reach diverse
              consumers nationwide — connecting with potential clients when
              they seek legal representation.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {channels.map((c) => (
                <div key={c.title}>
                  <h3 className="font-headline text-lg font-medium text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-center text-white md:py-24">
        <div className="reveal mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-headline text-3xl font-medium tracking-tight md:text-4xl">
            Ready to put a predictable MVA pipeline in place?
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Partner with Ageitos Advertising and start receiving exclusive,
            qualified leads matched to your firm.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact#partner">Partner With Us</Button>
            <Button href="/legal-leads" variant="outlined">
              View Lead Types
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
