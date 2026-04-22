import type { Metadata } from "next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Michael Johnson — open to software engineering, full-stack development, and cybersecurity roles. U.S. Navy veteran and Computer Science Senior at SCSU.",
};

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:MichaelJohnson.USN@gmail.com",
    display: "MichaelJohnson.USN@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/MikeEasyMac",
    display: "github.com/MikeEasyMac",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-johnson-cybersecurity",
    display: "linkedin.com/in/michael-johnson-cybersecurity",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Contact</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Interested in working together or have a question? Fill out the form below or
          reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact form — client component handles all form state and validation */}
        <div className="md:col-span-2 bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <ContactForm />
        </div>

        {/* Contact info sidebar */}
        <div className="flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-5">
            <h2 className="font-semibold mb-4">Connect With Me</h2>
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-3 text-sm hover:text-red-700 dark:hover:text-red-400 transition"
                  aria-label={label}
                >
                  <Icon className="text-red-700 dark:text-red-400 shrink-0" />
                  <span className="break-all">{display}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-5">
            <h2 className="font-semibold mb-3">Open To</h2>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1.5 leading-relaxed">
              <li>• Software Engineering</li>
              <li>• Full-Stack Development</li>
              <li>• Cybersecurity Roles</li>
              <li>• AI / ML-Adjacent Roles</li>
              <li>• Defense &amp; Government Tech</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
