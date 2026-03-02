import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { PreRegister } from "../../../models/PreRegister";
import { validateEmail } from "../../../lib/validateEmail";
import { sendEmail } from "../../../lib/sendEmail";

async function verifyTurnstile(token: string, ip: string) {
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    },
  );
  return res.json();
}

export async function POST(req: NextRequest) {
  console.log("[subscribe] Received POST request");

  const { email, token } = await req.json();
  console.log(`[subscribe] Email: ${email} | Token present: ${!!token}`);

  if (!email || !token) {
    console.log("[subscribe] Missing fields — returning 400");
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log(`[subscribe] Validating email domain...`);
  const isValidEmail = await validateEmail(email);
  if (!isValidEmail) {
    console.log(`[subscribe] Invalid email domain for: ${email} — returning 400`);
    return NextResponse.json(
      { error: "Invalid email domain" },
      { status: 400 },
    );
  }
  console.log(`[subscribe] Email domain valid`);

  const ip =
    req.headers.get("CF-Connecting-IP") ||
    req.headers.get("x-forwarded-for") ||
    "unknown";
  console.log(`[subscribe] Client IP: ${ip}`);

  console.log("[subscribe] Verifying Turnstile token...");
  const verification = await verifyTurnstile(token, ip);

  if (!verification.success) {
    console.error("[subscribe] Turnstile rejected:", verification["error-codes"]);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 403 },
    );
  }
  console.log("[subscribe] Turnstile verified");

  console.log("[subscribe] Connecting to DB...");
  await connectDB();
  console.log("[subscribe] DB connected");

  try {
    await PreRegister.create({ email });
    console.log(`[subscribe] Saved email: ${email}`);
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      "code" in err &&
      (err as Record<string, unknown>).code === 11000
    ) {
      console.log(`[subscribe] Duplicate email: ${email} — returning 409`);
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 },
      );
    }
    console.error("[subscribe] DB error:", err);
    throw err;
  }

  console.log(`[subscribe] Sending welcome email to ${email}...`);
  try {
    await sendEmail({ to: [{ email }] });
    console.log(`[subscribe] Welcome email sent to ${email}`);
  } catch (err) {
    console.error(`[subscribe] Failed to send welcome email:`, err);
  }

  console.log(`[subscribe] Success for ${email}`);
  return NextResponse.json({ success: true });
}
