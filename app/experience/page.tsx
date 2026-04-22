import type { Metadata } from "next";
import { FaAnchor, FaGraduationCap } from "react-icons/fa";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work history, education, and technical skills of Michael Johnson — U.S. Navy Sonar Technician and Computer Science Senior at Southern Connecticut State University.",
};

type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  highlights: string[];
  icon: ReactNode;
};

const experiences: ExperienceEntry[] = [
  {
    title: "Sonar Technician, Petty Officer Second Class (ST2)",
    org: "United States Navy — Submarine Service",
    period: "2018 – 2023",
    highlights: [
      "Served in mission-critical submarine operations where precision, teamwork, and consistency were essential to daily performance",
      "Worked with real-time acoustic data and anomaly detection in high-pressure operational environments",
      "Maintained high standards of accountability, technical discipline, and operational readiness",
      "Advanced to Petty Officer Second Class based on strong technical performance and demonstrated leadership",
      "Earned the Submarine Warfare Insignia (Dolphins)",
      "Developed the ability to remain composed under pressure and contribute effectively in demanding team environments",
    ],
    icon: <FaAnchor />,
  },
  {
    title: "B.S. Computer Science · Accelerated M.S. in Cybersecurity",
    org: "Southern Connecticut State University",
    period: "2023 – Spring 2027 (Expected)",
    highlights: [
      "Pursuing B.S. in Computer Science, Cybersecurity Concentration — expected Spring 2026",
      "Enrolled in accelerated M.S. in Cybersecurity pathway — expected Spring 2027",
      "Completed project work in full-stack web development, cybersecurity, cloud systems, and AI-integrated applications",
      "Relevant coursework: Web Application Development, Network Security, Cryptography, Database Systems",
      "Member of Kappa Alpha Psi Fraternity, Inc.",
      "Active in veteran-related leadership and campus involvement",
      "Provided tutoring and academic support in mathematics; helped students build understanding through clear, one-on-one instruction",
    ],
    icon: <FaGraduationCap />,
  },
];

const skillCategories: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "PHP", "SQL"],
  "Web & Frontend": ["HTML", "CSS", "Next.js", "React", "Tailwind CSS", "AJAX"],
  "Backend & APIs": ["Flask", "FastAPI", "Node.js", "Express"],
  Databases: ["MySQL", "MongoDB"],
  "Cloud, DevOps & Tools": ["Git", "GitHub", "Docker", "GCP", "Linux", "VS Code"],
  "Security & AI": [
    "Network Security",
    "Packet Analysis",
    "Wireshark",
    "Nmap",
    "Secure Authentication",
    "OpenAI API",
    "AI Integration",
  ],
};

export default function Experience() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Experience</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Military service, education, and the skills I bring to the table.
        </p>
      </div>

      {/* Timeline */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Work &amp; Education</h2>
        <div className="flex flex-col gap-5">
          {experiences.map((entry, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex gap-4"
            >
              <div className="text-red-700 dark:text-red-400 text-2xl mt-1 shrink-0">
                {entry.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-lg leading-snug">{entry.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 shrink-0 sm:text-right">
                    {entry.period}
                  </span>
                </div>
                <p className="text-red-700 dark:text-red-400 text-sm font-medium mb-3">
                  {entry.org}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1.5 leading-relaxed">
                  {entry.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(skillCategories).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-700 rounded-lg shadow p-5"
            >
              <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
