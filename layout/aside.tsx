import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contactLinks = [
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
  {
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:MichaelJohnson.USN@gmail.com",
    display: "MichaelJohnson.USN@gmail.com",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "FastAPI",
  "Flask",
  "MySQL",
  "React",
  "Docker",
  "GCP",
  "Cybersecurity",
  "Full-Stack Development",
];

export default function Aside() {
  return (
    <div className="w-52 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-5 flex flex-col gap-6 shrink-0 border-r border-gray-200 dark:border-gray-700">
      {/* Connect */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
          Connect
        </h2>
        <div className="flex flex-col gap-2">
          {contactLinks.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-start gap-2 text-xs hover:text-red-700 dark:hover:text-red-400 transition leading-snug"
              aria-label={label}
            >
              <Icon className="shrink-0 text-sm mt-0.5" />
              <span className="break-all">{display}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-1">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Open To */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
          Open To
        </h2>
        <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
          <li>• Software Engineering</li>
          <li>• Full-Stack Development</li>
          <li>• Cybersecurity Roles</li>
          <li>• AI / ML-Adjacent Roles</li>
          <li>• Defense &amp; Gov&apos;t Tech</li>
        </ul>
      </div>
    </div>
  );
}
