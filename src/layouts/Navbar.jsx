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
    <header className="bg-background/80 border-border/40 fixed top-0 z-50 w-full border-b shadow-sm backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a className="from-primary via-sidebar-primary to-accent-foreground bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent">
            AT
          </a>

          <button
            className="text-foreground relative h-10 w-10 focus:outline-none lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="absolute left-1/2 top-1/2 -ml-2.5 -mt-2 h-4 w-5">
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${menuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${menuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${menuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-foreground/70 hover:text-foreground before:bg-primary relative text-sm font-medium transition-colors duration-300 before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:transition-all before:duration-300 hover:before:w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div
            className={`bg-background/95 border-border/40 fixed left-0 right-0 top-[72px] transform border-b backdrop-blur-sm transition-all duration-300 ease-in-out lg:hidden ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <ul className="container mx-auto space-y-4 px-4 py-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-foreground/70 hover:text-foreground hover:bg-accent/10 block transform rounded-lg px-4 py-2 transition-all duration-300 hover:translate-x-1"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                      setMenuOpen(false);
                    }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
