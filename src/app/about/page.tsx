import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Ageitos Advertising helps personal injury law firms connect with plaintiffs after motor vehicle accidents.",
};

const distinctions = [
  {
    label: "Focused Network",
    title: "Built for personal injury growth",
    body: "We partner with PI firms that want exclusive MVA volume without building an entire in-house media and intake machine.",
  },
  {
    label: "Digital-First Brands",
    title: "Reaching consumers seeking legal help",
    body: "Our campaigns meet injured drivers across Google, Meta, TikTok, and search — when intent is highest and timing matters most.",
  },
  {
    label: "Best-in-Class Intake",
    title: "Qualification before your phone rings",
    body: "Specialists guide callers through a thorough process, matching your firm with leads that fit your criteria and capacity.",
  },
  {
    label: "In-House Marketing",
    title: "Creative, media, and performance under one roof",
    body: "Strategy, creative, and optimization stay aligned — so messaging and media buying reinforce each other every week.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-royal pt-32 pb-20 text-white md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(189,208,201,0.18),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="animate-fade-up font-headline text-sm tracking-[0.22em] text-seafoam uppercase">
            About {SITE.name}
          </p>
          <h1 className="animate-fade-up delay-1 mt-4 max-w-3xl font-headline text-4xl font-medium tracking-tight md:text-6xl">
            Helping law firms and clients connect.
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            We exist to elevate personal injury practices — creating positive
            change by ensuring injured people find the right representation,
            faster.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
              Mission
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              Maximize your firm&apos;s impact with better demand.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We partner with law firms to maximize their impact — providing
              exclusive leads and the digital infrastructure to reach new
              heights of growth, starting with motor vehicle accidents.
            </p>
            <p className="mt-8 font-headline text-sm tracking-[0.2em] text-brown uppercase">
              Purpose
            </p>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              To elevate law firms, create positive change, and improve access
              to justice for people navigating life after an accident.
            </p>
          </div>
          <div className="reveal relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
              alt="Team collaborating in a bright office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal max-w-2xl">
            <p className="font-headline text-sm tracking-[0.2em] text-brown uppercase">
              Distinction
            </p>
            <h2 className="mt-3 font-headline text-3xl font-medium tracking-tight md:text-4xl">
              What makes Ageitos the choice for your firm.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {distinctions.map((item, i) => (
              <div
                key={item.title}
                className="reveal border-t border-hairline pt-6"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-headline text-xs tracking-[0.18em] text-seafoam-deep uppercase">
                  {item.label}
                </p>
                <h3 className="mt-2 font-headline text-2xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-center text-white md:py-24">
        <div className="reveal mx-auto max-w-2xl px-5 md:px-8">
          <h2 className="font-headline text-3xl font-medium tracking-tight md:text-4xl">
            Let&apos;s grow your practice together.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Talk with our team about exclusive MVA leads for your markets.
          </p>
          <div className="mt-10">
            <Button href="/contact#partner">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
