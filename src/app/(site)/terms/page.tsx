import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h1 className="font-headline text-4xl font-medium tracking-tight text-ink">
          Terms of Use
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          These placeholder terms apply to the {SITE.name} website. Replace
          with counsel-approved terms before launch. Site content is for
          informational purposes for prospective law firm partners and does not
          constitute a guarantee of lead volume, case value, or specific
          results. Partnership terms are governed by a separate written
          agreement.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Questions? Email{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-navy-light underline-offset-2 hover:underline"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
