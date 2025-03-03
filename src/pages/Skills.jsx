function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen w-full flex-col justify-center gap-5 border-2 border-red-500 p-5 xl:flex-row"
    >
      <div className="animate-appear-left flex w-full flex-col justify-center rounded-2xl border border-gray-400 px-10 shadow-lg xl:w-3/5">
        <h3 className="font-stretch-semi-expanded flex justify-center text-5xl text-black">
          Skills
        </h3>

        <ul className="text-black">
          <li className="hover:bg-radial-[at_50%_75%] transtion from-sky-200 via-blue-400 to-indigo-900 to-90% duration-500 ease-out hover:bg-opacity-50">
            HTML
          </li>
          <li className="">HTML</li>
          <li className="">HTML</li>
          <li className="">HTML</li>
          <li className="">HTML</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
