import type { Metadata } from "next";
import Link from "next/link";
import { FaAnchor, FaShieldAlt, FaCode, FaGithub, FaDownload } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Michael Johnson — Computer Science Senior and M.S. Candidate in Cybersecurity at Southern Connecticut State University, U.S. Navy veteran, and full-stack developer.",
};

const featuredProjects = [
  {
    title: "RateMyClass — Academic Review Platform",
    description:
      "A full-stack web application for students to review university courses, rate difficulty and workload, and share academic materials. Built with Python, Flask, SQLAlchemy, and MySQL — with an admin moderation system and AJAX-powered dynamic filtering.",
    tech: ["Python", "Flask", "SQLAlchemy", "MySQL", "JavaScript", "GCP"],
    githubUrl: "https://github.com/MikeEasyMac/RateMyClass",
  },
  {
    title: "Smart Campus Monitor — Real-Time Monitoring System",
    description:
      "A backend-driven monitoring system that processes real-time campus data through a centralized dashboard. Built with FastAPI and Streamlit around a modular architecture designed for scalability.",
    tech: ["Python", "FastAPI", "Streamlit", "REST APIs", "JavaScript"],
    githubUrl: "https://github.com/MikeEasyMac/smart-campus-monitor",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a full-stack portfolio built with Next.js 16, TypeScript, MongoDB, and Tailwind CSS, featuring dark mode, a contact API, and responsive design.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/mikeeasymac/johnson-543",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      {/* Hero */}
      <section className="bg-white dark:bg-gray-700 rounded-lg shadow p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          Michael Johnson
        </h1>
        <p className="text-lg text-red-700 dark:text-red-400 font-medium mb-5">
          Computer Science Senior &middot; M.S. Candidate &middot; Cybersecurity &middot; U.S. Navy Veteran
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mb-7">
          U.S. Navy veteran and Computer Science senior at Southern Connecticut State University,
          concentrating in Cybersecurity and pursuing an accelerated Master&apos;s degree in the same
          field. I build full-stack web applications and cybersecurity systems, and I bring the
          discipline, precision, and ownership mindset of someone who has worked in
          mission-critical environments. Actively seeking roles in software engineering,
          full-stack development, and cybersecurity.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="bg-red-700 text-white px-5 py-2.5 rounded hover:bg-red-800 transition text-sm font-medium"
          >
            View Projects
          </Link>
          <Link
            href="/experience"
            className="border border-red-700 text-red-700 dark:text-red-400 dark:border-red-400 px-5 py-2.5 rounded hover:bg-red-50 dark:hover:bg-gray-600 transition text-sm font-medium"
          >
            My Experience
          </Link>
          <Link
            href="/contact"
            className="border border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-500 px-5 py-2.5 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm font-medium"
          >
            Contact Me
          </Link>
          {/* Resume download — place your resume.pdf in /public/ */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 border border-gray-400 text-gray-700 dark:text-gray-300 dark:border-gray-500 px-5 py-2.5 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition text-sm font-medium"
          >
            <FaDownload className="text-xs" />
            Resume
          </a>
        </div>
      </section>

      {/* Key Differentiators */}
      <section>
        <h2 className="text-xl font-bold mb-4">What I Bring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
            <FaAnchor className="text-red-700 dark:text-red-400 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Navy Veteran</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Served as a Sonar Technician aboard U.S. Navy submarines. Brings leadership,
              discipline, and performance under pressure to every project.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
            <FaShieldAlt className="text-red-700 dark:text-red-400 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Cybersecurity Focus</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Concentrating in cybersecurity with coursework in network security, cryptography,
              and secure software design.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
            <FaCode className="text-red-700 dark:text-red-400 text-2xl mb-3" />
            <h3 className="font-semibold mb-2">Full-Stack Developer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Building modern web applications with Next.js, React, TypeScript, MongoDB,
              and Tailwind CSS from database to deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-red-700 dark:text-red-400 hover:underline text-sm font-medium"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 flex flex-col gap-3"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-red-700 dark:text-red-400 hover:underline w-fit"
                >
                  <FaGithub /> View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
