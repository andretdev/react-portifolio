import Skill from "../components/Skill";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import html from "../assets/html.svg";
import python from "../assets/python.svg";
import sqlite from "../assets/slqlite.svg";
import postgresql from "../assets/postgresql.svg";
import css from "../assets/css.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import github from "../assets/github.svg";
import docker from "../assets/docker.svg";
import git from "../assets/git.svg";
function Skills() {
  return (
    <section
      id="skills"
      className="flex h-auto min-h-screen flex-col items-center gap-10 px-5 py-20 max-sm:py-10"
    >
      <div className="animate-appear-left flex h-auto w-full flex-row items-center justify-between rounded-2xl bg-gray-900/30 px-10 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] max-sm:flex-col max-sm:px-4">
        <div className="animate-appear-bottom w-1/3 justify-center transition-all duration-500 ease-in-out max-sm:w-full max-sm:text-center">
          <h2 className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text font-sans text-5xl text-transparent max-sm:mt-5 max-sm:text-3xl">
            Development Skills
          </h2>
          <hr className="w-100 xl:w-90 mt-2 bg-gray-500 max-lg:w-auto max-md:w-auto max-sm:w-auto" />
          <p className="text-md mt-5 text-balance text-left font-sans text-gray-800 max-sm:mt-1 max-sm:px-4 max-sm:text-left">
            As a developer, I am continually learning and mastering my
            programming skills to stay up to date with the latest technologies.
          </p>
        </div>
        <div className="flex w-2/3 flex-wrap gap-4 p-5 max-sm:w-full max-sm:gap-3 max-sm:p-3">
          <div className="animate-appear-left [animation-delay:100ms]">
            <Skill text="React" link={react} />
          </div>
          <div>
            <Skill text="JavasScript" link={javascript} />
          </div>
          <div>
            <Skill text="HTML5" link={html} />
          </div>
          <div>
            <Skill text="Python" link={python} />
          </div>
          <div>
            <Skill text="SQL" link={sqlite} />
          </div>
          <div>
            <Skill text="PostgreSQL" link={postgresql} />
          </div>
          <div>
            <Skill text="CSS" link={css} />
          </div>
          <div>
            <Skill text="Tailwindcss" link={tailwindcss} />
          </div>
        </div>
      </div>
      <div className="animate-appear-right flex h-60 w-full flex-row items-center justify-between rounded-2xl bg-gray-900/30 px-10 shadow-[0_0_15px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)] max-md:h-auto max-sm:h-auto max-sm:flex-col max-sm:px-4">
        <div className="animate-appear-bottom w-1/3 justify-center transition-all duration-500 ease-in-out max-sm:w-full max-sm:text-center">
          <h2 className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text font-sans text-5xl text-transparent max-sm:mt-5 max-sm:text-3xl">
            Other Skills
          </h2>
          <hr className="w-100 xl:w-90 mt-2 bg-gray-500 max-lg:w-auto max-md:w-auto max-sm:w-auto" />
          <p className="text-md mt-5 text-balance text-left font-sans text-gray-800 max-sm:mt-1 max-sm:px-4 max-sm:text-left">
            I am continuously enhancing my development and management skills to
            contribute effectively in a team environment.
          </p>
        </div>
        <div className="flex w-2/3 flex-wrap gap-4 p-5 max-sm:w-full max-sm:gap-3 max-sm:p-3">
          <div>
            <Skill text="GitHub" link={github} />
          </div>
          <div>
            <Skill text="Git" link={git} />
          </div>
          <div>
            <Skill text="Docker" link={docker} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
