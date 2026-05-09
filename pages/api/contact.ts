import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/library/db';
import ContactMessage from '@/models/contactMessage';
import { sendContactEmail } from '@/library/email';

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
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body as ContactPayload;

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  if (message.trim().length < 20) {
    return res.status(400).json({ message: 'Message must be at least 20 characters' });
  }

  if (name.trim().length > 100) {
    return res.status(400).json({ message: 'Name must be 100 characters or fewer' });
  }

  if (subject.trim().length > 200) {
    return res.status(400).json({ message: 'Subject must be 200 characters or fewer' });
  }

  if (message.trim().length > 5000) {
    return res.status(400).json({ message: 'Message must be 5000 characters or fewer' });
  }

  try {
    await dbConnect();
    await ContactMessage.create({ name: name.trim(), email: email.trim(), subject: subject.trim(), message: message.trim() });
  } catch {
    return res.status(500).json({ message: 'Failed to save your message. Please try again.' });
  }

  try {
    await sendContactEmail({ name, email, subject, message });
  } catch (err) {
    console.warn('[contact] Email notification failed:', err instanceof Error ? err.message : err);
  }

  return res.status(200).json({ message: 'Message received successfully' });
}
