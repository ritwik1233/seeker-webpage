import { BrevoClient } from "@getbrevo/brevo";
import { EMAIL_SENDER, WELCOME_EMAIL } from "./emailConstants";

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

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export async function sendEmail({
  to,
  subject = WELCOME_EMAIL.subject,
  htmlContent = WELCOME_EMAIL.htmlContent,
  textContent = WELCOME_EMAIL.textContent,
}: SendEmailOptions) {
  const response = await brevo.transactionalEmails.sendTransacEmail({
    sender: EMAIL_SENDER,
    to,
    subject,
    htmlContent,
    textContent,
  });

  return response;
}
