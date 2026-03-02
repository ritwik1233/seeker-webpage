export const EMAIL_SENDER = {
  name: "SeekR",
  email: "ritwik@seek-r.life",
};

export const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export const WELCOME_EMAIL = {
  subject: "Welcome to SeekR — Your AI Travel Companion",
  htmlContent: `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
      <h1 style="color: #f97316;">Welcome to SeekR!</h1>
      <p>Thanks for signing up. We're building an AI-powered travel planner that makes trip planning effortless.</p>
      <p>You're now on the early access list. We'll reach out as soon as we're ready for you to explore.</p>
      <p style="margin-top: 24px;">— The SeekR Team</p>
    </div>
  `,
  textContent: `Welcome to SeekR!

Thanks for signing up. We're building an AI-powered travel planner that makes trip planning effortless.

You're now on the early access list. We'll reach out as soon as we're ready for you to explore.

— The SeekR Team`,
};
