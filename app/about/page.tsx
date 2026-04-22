import type { Metadata } from "next";
import Image from "next/image";
import { FaAnchor, FaGraduationCap, FaShieldAlt, FaDownload } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Michael Johnson — U.S. Navy veteran, Computer Science Senior and M.S. Candidate in Cybersecurity at Southern Connecticut State University.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <h1 className="text-3xl font-bold">About Me</h1>

      {/* Profile card */}
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col md:flex-row gap-6 items-start">
        <Image
          src="/AboutMe.JPG"
          alt="Michael Johnson"
          width={220}
          height={220}
          className="rounded-lg shadow object-cover shrink-0 w-full max-w-xs mx-auto md:mx-0 md:w-auto"
        />
        <div className="flex flex-col gap-4 min-w-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Michael Johnson
            </h2>
            <p className="text-red-700 dark:text-red-400 font-medium mt-1">
              Computer Science Senior &middot; M.S. Candidate &middot; Cybersecurity &middot; U.S. Navy Veteran
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            I&apos;m a U.S. Navy veteran and Computer Science senior at Southern Connecticut State
            University, where I&apos;m concentrating in Cybersecurity and pursuing an accelerated
            Master&apos;s degree in the same field. I served as a Sonar Technician in the United
            States Navy, working in mission-critical environments where precision, teamwork,
            and consistent performance were non-negotiable every day.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            That experience built something a classroom can&apos;t fully replicate: the discipline
            to work through hard problems, the accountability to own my output, and the
            leadership habits to operate effectively in high-stakes team environments. I apply
            that same mindset to every project I build — whether it&apos;s a full-stack web
            application, a security-focused system, or an AI-integrated tool.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            I&apos;m actively looking for opportunities in software engineering, full-stack
            development, and cybersecurity — particularly with organizations where technical
            quality, security, and real-world impact are priorities. I&apos;m open to relocation
            and to hybrid, on-site, or remote work depending on the role.
          </p>

          {/* Resume download — place your resume.pdf in /public/ */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded hover:bg-red-800 transition text-sm font-medium w-fit mt-1"
          >
            <FaDownload className="text-xs" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Background cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaAnchor className="text-red-700 dark:text-red-400 text-2xl mb-3" />
          <h3 className="font-semibold mb-2">Military Service</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Served as a Sonar Technician in the United States Navy. Worked in mission-critical
            environments where precision, teamwork, and consistent performance were essential
            every day — developing the discipline, accountability, and leadership habits that
            now define how I approach technical work.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaGraduationCap className="text-red-700 dark:text-red-400 text-2xl mb-3" />
          <h3 className="font-semibold mb-2">Education</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            B.S. in Computer Science, Cybersecurity Concentration — Southern Connecticut State
            University (currently enrolled). Also pursuing an accelerated M.S. in Cybersecurity.
            Built projects across full-stack development, cybersecurity, cloud, and AI-integrated
            systems. Provided tutoring and mentorship to fellow students.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
          <FaShieldAlt className="text-red-700 dark:text-red-400 text-2xl mb-3" />
          <h3 className="font-semibold mb-2">Core Values</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Integrity, accountability, and continuous improvement — values shaped by military
            service and carried directly into software development. I take ownership of what
            I build, communicate clearly, and hold myself to a high standard of reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
