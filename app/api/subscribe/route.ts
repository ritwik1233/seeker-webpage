import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import { PreRegister } from "../../../models/PreRegister";

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
  const { email, token } = await req.json();

  if (!email || !token) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const ip =
    req.headers.get("CF-Connecting-IP") ||
    req.headers.get("x-forwarded-for") ||
    "unknown";

  const verification = await verifyTurnstile(token, ip);

  if (!verification.success) {
    console.error("Turnstile rejected:", verification["error-codes"]);
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 403 },
    );
  }

  await connectDB();

  try {
    await PreRegister.create({ email });
  } catch (err: unknown) {
    if (
      err instanceof Error &&
      "code" in err &&
      (err as Record<string, unknown>).code === 11000
    ) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 },
      );
    }
    throw err;
  }

  return NextResponse.json({ success: true });
}
