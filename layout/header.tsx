import Link from "next/link";
import { FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-red-700 text-white px-6 py-4">
      <div className="flex items-center gap-2 text-xl font-bold">
        <FaReact />
        <span>My Website</span>
      </div>

      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
      </nav>
    </header>
  );
}
