export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-red-700 text-white text-center px-6 py-4 text-sm">
      &copy; {year} Michael Johnson &mdash; Built with Next.js &amp; Tailwind CSS
    </footer>
  );
}
