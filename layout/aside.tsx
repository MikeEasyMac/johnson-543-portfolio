import { FaInfoCircle } from "react-icons/fa";

export default function Aside() {
  return (
    <aside className="w-64 bg-gray-200 text-gray-800 p-5">
      <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
        <FaInfoCircle />
        <span>Sidebar</span>
      </div>

      <p className="text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        lacinia odio vitae vestibulum vestibulum.
      </p>
    </aside>
  );
}
