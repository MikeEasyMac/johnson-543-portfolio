import mongoose, { Schema, InferSchemaType } from 'mongoose';

const contactMessageSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name must be 100 characters or fewer'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      maxlength: [254, 'Email must be 254 characters or fewer'],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [200, 'Subject must be 200 characters or fewer'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [20, 'Message must be at least 20 characters'],
      maxlength: [5000, 'Message must be 5000 characters or fewer'],
    },
  },
  { timestamps: true }
);

export type ContactMessageType = InferSchemaType<typeof contactMessageSchema>;

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model('ContactMessage', contactMessageSchema, 'contact_messages');

export default ContactMessage;
