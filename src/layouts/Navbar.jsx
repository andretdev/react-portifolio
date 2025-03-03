import { useEffect, useState } from "react";
import sections from "../section";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      });
    });
  }, []);

  return (
    <header className="padding-x relative z-10 w-full py-3">
      <nav className="relative flex items-center justify-between">
        <a className="fonts-montserrat bg-gradient-to-r from-violet-600 via-blue-400 to-indigo-600 bg-clip-text px-5 text-[30px] font-bold text-transparent">
          At{" "}
        </a>
        <button
          className="min-lg:hidden px-5 text-[25px] hover:text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul
          className={`flex flex-1 items-center justify-end gap-16 px-10 max-lg:hidden`}
        >
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="fonts-montserrat text-slate-blue-500 text-lg leading-normal text-gray-400 hover:text-blue-400"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}

        <ul
          className={`absolute left-0 top-full flex w-full flex-col text-gray-500 transition-all duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} lg:hidden`}
        >
          {sections.map((section) => (
            <li
              key={section.id}
              className="from-purpler-400 to-purple-500 px-3 py-2 hover:bg-gradient-to-b"
            >
              <a
                href={`#${section.id}`}
                className="fonts-montserrat text-slate-blue-500 text-lg leading-normal hover:text-white"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
