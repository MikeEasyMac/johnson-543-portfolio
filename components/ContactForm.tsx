"use client";

import { useState, useEffect, useRef, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const emptyForm: FormData = { name: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  // Move focus to the confirmation so screen reader users hear that the message was sent
  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  const validate = (): boolean => {
    const next: Partial<FormData> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address";
    }
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) {
      next.message = "Message is required";
    } else if (form.message.trim().length < 20) {
      next.message = "Message must be at least 20 characters";
    }
    setErrors(next);
    // Send keyboard and screen reader users to the first field that needs fixing
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) document.getElementById(firstInvalid)?.focus();
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  const fieldClass = (field: keyof FormData) =>
    `w-full border rounded px-3 py-2 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
      errors[field]
        ? "border-red-500"
        : "border-gray-300 dark:border-gray-600"
    }`;

  if (status === "success") {
    return (
      <div role="status" className="flex flex-col items-center justify-center py-10 text-center">
        <div className="text-green-500 text-5xl mb-4" aria-hidden="true">✓</div>
        <h2 ref={successHeadingRef} tabIndex={-1} className="text-xl font-semibold mb-2 focus:outline-none">Message Sent!</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-red-700 dark:text-red-300 hover:underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <h2 className="text-lg font-semibold">Send a Message</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name <span className="text-red-700 dark:text-red-300" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={fieldClass("name")}
          />
          {errors.name && (
            <p id="name-error" className="text-red-700 dark:text-red-300 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email <span className="text-red-700 dark:text-red-300" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={fieldClass("email")}
          />
          {errors.email && (
            <p id="email-error" className="text-red-700 dark:text-red-300 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject <span className="text-red-700 dark:text-red-300" aria-hidden="true">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          aria-required="true"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          type="text"
          value={form.subject}
          onChange={handleChange}
          placeholder="What is this regarding?"
          className={fieldClass("subject")}
        />
        {errors.subject && (
          <p id="subject-error" className="text-red-700 dark:text-red-300 text-xs mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message <span className="text-red-700 dark:text-red-300" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Your message (at least 20 characters)..."
          className={fieldClass("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-red-700 dark:text-red-300 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-red-600 dark:text-red-300 text-sm">
          Something went wrong. Please try again or reach out directly via email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 disabled:opacity-50 transition text-sm font-medium w-fit"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
