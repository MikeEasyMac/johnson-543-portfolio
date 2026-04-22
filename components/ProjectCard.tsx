import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: "completed" | "in-progress" | "placeholder";
};

const statusStyles: Record<Project["status"], string> = {
  completed: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  "in-progress": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
  placeholder: "bg-gray-100 text-gray-500 dark:bg-gray-600 dark:text-gray-400",
};

const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  placeholder: "Add Your Project",
};

export default function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = project.status === "placeholder";

  return (
    <div
      className={`rounded-lg shadow p-6 flex flex-col gap-4 ${
        isPlaceholder
          ? "bg-gray-50 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600"
          : "bg-white dark:bg-gray-700"
      }`}
    >
      {/* Title + Status */}
      <div className="flex items-start justify-between gap-2">
        <h2
          className={`font-bold text-lg leading-snug ${
            isPlaceholder ? "text-gray-400 dark:text-gray-500" : ""
          }`}
        >
          {project.title}
        </h2>
        <span
          className={`text-xs px-2 py-1 rounded shrink-0 font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed flex-1 ${
          isPlaceholder
            ? "text-gray-400 dark:text-gray-500 italic"
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      {project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-0.5 rounded ${
                isPlaceholder
                  ? "bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
                  : "bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      {(project.githubUrl || project.liveUrl) && !isPlaceholder && (
        <div className="flex gap-4 pt-3 border-t border-gray-100 dark:border-gray-600">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-red-700 dark:text-red-400 hover:underline"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-red-700 dark:text-red-400 hover:underline"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
