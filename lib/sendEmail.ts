import { EMAIL_SENDER, BREVO_API_URL, WELCOME_EMAIL } from "./emailConstants";

interface Recipient {
  email: string;
  name?: string;
}

interface SendEmailOptions {
  to: Recipient[];
  subject?: string;
  htmlContent?: string;
  textContent?: string;
}

export async function sendEmail({
  to,
  subject = WELCOME_EMAIL.subject,
  htmlContent = WELCOME_EMAIL.htmlContent,
  textContent = WELCOME_EMAIL.textContent,
}: SendEmailOptions) {
  const recipients = to.map((r) => r.email).join(", ");
  console.log(`[sendEmail] Sending to: ${recipients} | Subject: "${subject}"`);
  console.log(`[sendEmail] Sender: ${EMAIL_SENDER.email} | API URL: ${BREVO_API_URL}`);
  console.log(`[sendEmail] API key present: ${!!process.env.BREVO_API_KEY}`);

  const body = {
    sender: EMAIL_SENDER,
    to,
    subject,
    htmlContent,
    textContent,
  };

  console.log(`[sendEmail] Request body:`, JSON.stringify(body, null, 2));

  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "accept": "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify(body),
  });

  console.log(`[sendEmail] Response status: ${res.status} ${res.statusText}`);

  if (!res.ok) {
    const error = await res.json();
    console.error(`[sendEmail] Error response:`, JSON.stringify(error, null, 2));
    throw new Error(error.message || "Failed to send email");
  }

  const data = await res.json() as { messageId: string };
  console.log(`[sendEmail] Success — messageId: ${data.messageId}`);
  return data;
}
