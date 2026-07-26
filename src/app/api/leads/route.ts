import { NextResponse } from "next/server";
import { getMailConfig, getResend, rowsToHtml } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const state = String(body.state ?? "").trim();
    const zip = String(body.zip ?? "").trim();
    const accidentDate = String(body.accidentDate ?? "").trim();
    const injured = String(body.injured ?? "").trim();
    const details = String(body.details ?? "").trim();

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !state ||
      !zip ||
      !accidentDate ||
      !injured
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const { to, from } = getMailConfig();
    const resend = getResend();

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New MVA lead: ${firstName} ${lastName} (${state} ${zip})`,
      html: rowsToHtml({
        Type: "Consumer accident lead",
        Name: `${firstName} ${lastName}`,
        Phone: phone,
        Email: email,
        State: state,
        ZIP: zip,
        "Accident date": accidentDate,
        Injured: injured,
        Details: details || "(none)",
      }),
    });

    if (error) {
      console.error("Resend lead error:", error);
      return NextResponse.json(
        { error: "Could not submit your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Leads API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
