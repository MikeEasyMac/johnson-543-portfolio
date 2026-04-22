import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="relative bg-red-700 text-white px-6 py-4 flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight hover:opacity-90 transition shrink-0"
      >
        Michael Johnson
      </Link>

      {/* Desktop navigation */}
      <nav
        className="hidden md:flex items-center gap-5 text-sm"
        aria-label="Main navigation"
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:underline underline-offset-4 transition"
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile: theme toggle + hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </header>
  );
}
