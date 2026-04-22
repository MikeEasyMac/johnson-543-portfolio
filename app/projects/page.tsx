import type { Metadata } from "next";
import ProjectCard, { type Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Technical projects by Michael Johnson — full-stack web development and cybersecurity work.",
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A full-stack personal portfolio built with Next.js 16 (App Router), React, TypeScript, and MongoDB/Mongoose. Features dark mode via next-themes, a contact form API, responsive layout, and is Vercel-ready.",
    techStack: ["Next.js", "React", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS"],
    githubUrl: "https://github.com/mikeeasymac/johnson-543",
    liveUrl: null,
    status: "in-progress",
  },
  {
    title: "RateMyClass — Full-Stack Academic Review Platform",
    description:
      "A full-stack web application that allows students to review university courses, rate difficulty and workload, share academic materials, and browse peer feedback to make more informed academic decisions. Built with Python and Flask on the backend, MySQL and SQLAlchemy for relational data modeling, and AJAX-powered dynamic filtering for a smooth, no-reload browsing experience. Includes an admin moderation system for managing reviews and uploaded materials.",
    techStack: ["Python", "Flask", "SQLAlchemy", "MySQL", "JavaScript", "AJAX", "HTML/CSS", "GCP"],
    githubUrl: "https://github.com/MikeEasyMac/RateMyClass",
    liveUrl: null,
    status: "completed",
  },
  {
    title: "Smart Campus Monitor — Real-Time Monitoring System",
    description:
      "A real-time monitoring system that collects and displays campus activity data through a FastAPI backend and a Streamlit dashboard. Tracks structured data streams, surfaces live status updates to administrators, and is built around a modular architecture designed to support additional data sources over time.",
    techStack: ["Python", "FastAPI", "REST APIs", "JavaScript", "HTML/CSS", "Streamlit"],
    githubUrl: "https://github.com/MikeEasyMac/smart-campus-monitor",
    liveUrl: null,
    status: "completed",
  },
  {
    title: "Hotel Management System — Booking & Administration Platform",
    description:
      "A web-based hotel management application that allows users to browse available rooms and submit booking requests, while giving administrators a centralized dashboard to manage reservations, rooms, and user records. Built with PHP and MySQL on a normalized relational database backend, with dynamic frontend interactions for real-time availability updates. Implements secure session-based user authentication and full CRUD operations across all core system entities.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    githubUrl: "https://github.com/MikeEasyMac/hotel-management-system",
    liveUrl: null,
    status: "completed",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A showcase of my technical work across full-stack web development, backend systems,
          and real-world application design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
