import { Button } from "@/components/ui/button";
import background from "../assets/home.jpg";

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col overflow-hidden border-2 border-red-500 max-sm:flex-col xl:flex-row"
    >
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-xl:padding-x relative flex flex-col items-start justify-center border-2 border-red-500 px-10 pt-28 xl:w-3/6">
        <div className="relative rounded-2xl bg-gray-900/30 p-10 max-sm:w-60">
          <h1 className="">
            <span className="font-montserrat bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 bg-clip-text text-7xl font-bold text-transparent max-sm:text-6xl">
              Andre Tiago,
            </span>
            <br />
            <p className="mt-1 text-3xl text-white"> Software Developer </p>
          </h1>
          <p className="mt-3 text-[17px] text-gray-800">
            A highly motivated Full Stack Junior Developer with a strong passion
            for designing and developing diverse applications. I am a quick
            learner, adaptable, and excellent in collaborative team
            environments.
          </p>
        </div>
        <div className="flex h-20 w-auto flex-row items-center justify-center gap-4">
          <Button>Download CV</Button>
          <a
            href="https://www.linkedin.com/in/andre-silva-36a377262/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors hover:text-gray-600"
          >
            <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
