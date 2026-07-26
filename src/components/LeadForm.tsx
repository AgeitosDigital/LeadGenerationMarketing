"use client";

import { FormEvent, useState } from "react";
import { SITE, US_STATES } from "@/lib/constants";

type LeadFormProps = {
  id?: string;
};

export function LeadForm({ id = "lead-form" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          phone: data.get("phone"),
          email: data.get("email"),
          state: data.get("state"),
          zip: data.get("zip"),
          accidentDate: data.get("accidentDate"),
          injured: data.get("injured"),
          details: data.get("details") ?? "",
        }),
      });

      const payload = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setError(payload.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-seafoam bg-white px-6 py-10 text-center text-ink">
        <p className="font-headline text-xl font-medium">Thank you</p>
        <p className="mt-2 text-muted">
          A case specialist will call you shortly about your accident.
        </p>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="mt-6 inline-block font-headline text-lg text-royal underline-offset-4 hover:underline"
        >
          Or call {SITE.phoneDisplay} now
        </a>
      </div>
    );
  }

  const field =
    "w-full border border-hairline bg-white px-4 py-3 font-body text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-seafoam";
  const label =
    "mb-1.5 block font-headline text-xs tracking-[0.12em] text-muted uppercase";

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-first`} className={label}>
            First Name *
          </label>
          <input
            id={`${id}-first`}
            name="firstName"
            required
            autoComplete="given-name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-last`} className={label}>
            Last Name *
          </label>
          <input
            id={`${id}-last`}
            name="lastName"
            required
            autoComplete="family-name"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-phone`} className={label}>
            Phone *
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={label}>
            Email *
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-state`} className={label}>
            State *
          </label>
          <select
            id={`${id}-state`}
            name="state"
            required
            defaultValue=""
            className={field}
          >
            <option value="" disabled>
              Select state
            </option>
            {US_STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${id}-zip`} className={label}>
            ZIP Code *
          </label>
          <input
            id={`${id}-zip`}
            name="zip"
            required
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}"
            maxLength={5}
            className={field}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-date`} className={label}>
            Accident Date *
          </label>
          <input
            id={`${id}-date`}
            name="accidentDate"
            type="date"
            required
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`${id}-injured`} className={label}>
            Were you injured? *
          </label>
          <select
            id={`${id}-injured`}
            name="injured"
            required
            defaultValue=""
            className={field}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-details`} className={label}>
          Briefly describe what happened
        </label>
        <textarea
          id={`${id}-details`}
          name="details"
          rows={3}
          className={field + " resize-y"}
          placeholder="Where it happened, other vehicles involved, injuries..."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center bg-seafoam px-8 py-3.5 font-headline text-base font-medium text-royal transition-colors hover:bg-seafoam-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Submitting..." : "Get My Free Case Review"}
      </button>

      <p className="text-xs leading-relaxed text-muted">
        By submitting, you agree to be contacted by phone, text, or email about
        your potential claim, including via automated means. Consent is not a
        condition of service. Message &amp; data rates may apply. See our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
