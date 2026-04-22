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
    "Portfolio of Michael Johnson — Computer Science Senior and M.S. Candidate in Cybersecurity at Southern Connecticut State University, U.S. Navy veteran, and full-stack developer.",
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
          <Header />
          <div className="flex flex-1">
            {/* Sidebar: hidden on mobile, visible md and up */}
            <aside className="hidden md:block">
              <Aside />
            </aside>
            <main className="flex-1 p-6 min-w-0 bg-gray-50 dark:bg-gray-800">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
