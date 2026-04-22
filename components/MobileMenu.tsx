"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close menu on route change / resize past mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className="p-2 rounded hover:bg-red-600 transition"
      >
        {open ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {open && (
        <nav
          className="absolute top-full left-0 w-full bg-red-700 z-50 flex flex-col shadow-lg"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-6 py-3 text-sm font-medium border-b border-red-600 hover:bg-red-600 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
