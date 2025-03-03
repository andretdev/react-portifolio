import sections from "../section";

function Footer() {
  return (
    <section
      id="footer"
      className="flex w-full border-2 border-red-500 xl:flex-row"
    >
      <footer class="w-full bg-white shadow-sm">
        <div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-slate-blue-500 text-sm text-gray-400 hover:text-blue-400"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
