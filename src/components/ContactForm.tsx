"use client";

import { FormEvent, useState } from "react";
import { SITE, US_STATES } from "@/lib/constants";

type ContactFormProps = {
  variant?: "light" | "dark";
  compact?: boolean;
  id?: string;
};

export function ContactForm({
  variant = "light",
  compact = false,
  id,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const dark = variant === "dark";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-sm border px-6 py-10 text-center ${
          dark
            ? "border-seafoam/30 bg-white/5 text-white"
            : "border-seafoam bg-surface text-ink"
        }`}
      >
        <p className="font-headline text-xl font-medium">Thank you</p>
        <p className={`mt-2 ${dark ? "text-white/70" : "text-muted"}`}>
          A partner specialist from {SITE.name} will be in touch shortly.
        </p>
      </div>
    );
  }

  const field =
    "w-full border bg-transparent px-4 py-3 font-body text-base outline-none transition-colors focus:border-seafoam " +
    (dark
      ? "border-white/20 text-white placeholder:text-white/40"
      : "border-hairline text-ink placeholder:text-muted/70");

  const label =
    "mb-1.5 block font-headline text-xs tracking-[0.12em] uppercase " +
    (dark ? "text-seafoam" : "text-muted");

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id ?? "c"}-first`} className={label}>
            First Name *
          </label>
          <input
            id={`${id ?? "c"}-first`}
            name="firstName"
            required
            autoComplete="given-name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id ?? "c"}-last`} className={label}>
            Last Name *
          </label>
          <input
            id={`${id ?? "c"}-last`}
            name="lastName"
            required
            autoComplete="family-name"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id ?? "c"}-firm`} className={label}>
          Law Firm *
        </label>
        <input
          id={`${id ?? "c"}-firm`}
          name="lawFirm"
          required
          className={field}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id ?? "c"}-email`} className={label}>
            Email *
          </label>
          <input
            id={`${id ?? "c"}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id ?? "c"}-phone`} className={label}>
            Phone *
          </label>
          <input
            id={`${id ?? "c"}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id ?? "c"}-state`} className={label}>
          State *
        </label>
        <select
          id={`${id ?? "c"}-state`}
          name="state"
          required
          defaultValue=""
          className={field}
        >
          <option value="" disabled>
            Select state
          </option>
          {US_STATES.map((state) => (
            <option key={state} value={state} className="text-ink">
              {state}
            </option>
          ))}
        </select>
      </div>

      {!compact && (
        <div>
          <label htmlFor={`${id ?? "c"}-message`} className={label}>
            How can we help?
          </label>
          <textarea
            id={`${id ?? "c"}-message`}
            name="message"
            rows={4}
            className={field + " resize-y"}
            placeholder="Practice focus, markets, monthly lead volume..."
          />
        </div>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center bg-seafoam px-8 py-3.5 font-headline text-base font-medium text-royal transition-colors hover:bg-seafoam-deep sm:w-auto"
      >
        Connect With Us
      </button>

      <p className={`text-xs leading-relaxed ${dark ? "text-white/40" : "text-muted"}`}>
        By clicking Connect With Us, you consent to receive calls and messages
        from {SITE.name} regarding partnership opportunities. Consent is not a
        condition of purchase.
      </p>
    </form>
  );
}
