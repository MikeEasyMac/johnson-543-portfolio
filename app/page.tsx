import Section from "@/components/section";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Home</h1>

      <p>
        Welcome to my CSC 543 project. This website demonstrates the use of
        Next.js, React, TypeScript, and Tailwind CSS to build a structured
        web application with reusable components and layout elements.
      </p>

      <ul className="list-disc list-inside space-y-1">
        <li>Next.js App Router</li>
        <li>React Components</li>
        <li>TypeScript</li>
        <li>Tailwind CSS Flexbox Layout</li>
      </ul>

      <Section />
      <Section />
    </div>
  );
}
