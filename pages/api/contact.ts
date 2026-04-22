import { NextApiRequest, NextApiResponse } from "next";

/*
  Contact Form API — POST /api/contact
  ─────────────────────────────────────
  Validates incoming form submissions. Currently logs to the console.
  To wire up a real email provider, follow the TODO block below.

  Required environment variables (see .env.example):
    CONTACT_TO_EMAIL — the address that receives form submissions

  Optional (provider-specific — add whichever you choose):
    RESEND_API_KEY       — if using Resend
    SENDGRID_API_KEY     — if using SendGrid
    SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS — if using Nodemailer
*/

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ResponseBody = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body as ContactPayload;

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (message.trim().length < 20) {
    return res
      .status(400)
      .json({ message: "Message must be at least 20 characters" });
  }

  // ─────────────────────────────────────────────────────────────────
  // TODO: Replace the console.log below with a real email send call.
  //
  // Example using Resend:
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: process.env.CONTACT_FROM_EMAIL!,
  //     to:   process.env.CONTACT_TO_EMAIL!,
  //     subject: `[Portfolio Contact] ${subject}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });
  //
  // Example using SendGrid:
  //   import sgMail from "@sendgrid/mail";
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  //   await sgMail.send({
  //     from: process.env.CONTACT_FROM_EMAIL!,
  //     to:   process.env.CONTACT_TO_EMAIL!,
  //     subject: `[Portfolio Contact] ${subject}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });
  // ─────────────────────────────────────────────────────────────────
  console.log("[Contact Form Submission]", { name, email, subject, message });

  return res.status(200).json({ message: "Message received successfully" });
}
