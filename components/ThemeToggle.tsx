"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-gray-400 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white transition"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
      <span className="hidden md:inline">{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
}
