import { Resend } from 'resend';

type ContactEmailPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';

  if (!apiKey || !toEmail) {
    throw new Error('RESEND_API_KEY and CONTACT_TO_EMAIL must be defined');
  }

  const resend = new Resend(apiKey);
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC', timeZoneName: 'short' });

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    subject: `New portfolio contact message from ${payload.name}`,
    text: [
      `Name:    ${payload.name}`,
      `Email:   ${payload.email}`,
      `Subject: ${payload.subject}`,
      `Time:    ${timestamp}`,
      '',
      payload.message,
    ].join('\n'),
  });
}
