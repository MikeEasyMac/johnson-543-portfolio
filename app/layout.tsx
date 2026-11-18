import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/header";
import Aside from "@/layout/aside";
import Footer from "@/layout/footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    default: "Michael Johnson — Portfolio",
    template: "%s | Michael Johnson",
  },
  description:
    "Portfolio of Michael Johnson — M.S. in Cybersecurity candidate and B.S. in Computer Science graduate of Southern Connecticut State University, U.S. Navy veteran, and full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Skip link: lets keyboard users jump past the header and sidebar */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-red-700 focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Header />
          <div className="flex flex-1">
            {/* Sidebar: hidden on mobile, visible md and up */}
            <aside className="hidden md:block">
              <Aside />
            </aside>
            <main id="main-content" tabIndex={-1} className="flex-1 p-6 min-w-0 bg-gray-50 dark:bg-gray-800 focus:outline-none">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}