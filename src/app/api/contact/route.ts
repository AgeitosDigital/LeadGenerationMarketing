import { NextResponse } from "next/server";
import { getMailConfig, getResend, rowsToHtml } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const lawFirm = String(body.lawFirm ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const state = String(body.state ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!firstName || !lastName || !lawFirm || !email || !phone || !state) {
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
      subject: `Partner inquiry: ${firstName} ${lastName} (${lawFirm})`,
      html: rowsToHtml({
        Type: "Law firm partnership",
        Name: `${firstName} ${lastName}`,
        "Law firm": lawFirm,
        Email: email,
        Phone: phone,
        State: state,
        Message: message || "(none)",
      }),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
