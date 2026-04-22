import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles and writing by Michael Johnson on software development, cybersecurity, and career transitions.",
};

export default function Articles() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Articles</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Writing on software development, cybersecurity, and the transition from military
          service to tech. Articles coming soon.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-10 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          Technical articles and write-ups will be added here soon.
        </p>
      </div>
    </div>
  );
}
