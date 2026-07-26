import { Resend } from "resend";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  return new Resend(apiKey);
}

export function getMailConfig() {
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!to) throw new Error("CONTACT_TO_EMAIL is not set");
  if (!from) throw new Error("RESEND_FROM_EMAIL is not set");

  return { to, from };
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function rowsToHtml(rows: Record<string, string>) {
  const body = Object.entries(rows)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;font-weight:600;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e8e8e8;">${escapeHtml(value || "-")}</td></tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;width:100%;max-width:560px;font-family:system-ui,sans-serif;font-size:14px;color:#2a2f35;">${body}</table>`;
}
