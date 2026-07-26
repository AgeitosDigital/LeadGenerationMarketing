import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="prose-like mx-auto max-w-3xl px-5 md:px-8">
        <h1 className="font-headline text-4xl font-medium tracking-tight text-ink">
          Privacy Policy
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          This placeholder privacy policy is provided for the {SITE.name}{" "}
          marketing website. Replace this content with counsel-approved
          language before launch. We collect information you submit through
          contact forms (such as name, firm, email, phone, and state) to
          respond to partnership inquiries. We do not sell personal information
          collected on this site for unrelated third-party marketing.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          For privacy questions, contact{" "}
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
