import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">About</h1>

      <Image
        src="/AboutMe.JPG"
        alt="About Me"
        width={600}
        height={400}
        className="rounded-lg shadow"
      />

      <p className="text-gray-800 leading-relaxed">
        My name is Michael Johnson and this is my CSC 543 project. I am
        learning to build modern web applications using Next.js, React,
        TypeScript, and Tailwind CSS. This project demonstrates component-based
        architecture, routing, and responsive layout design.
      </p>
    </div>
  );
}
