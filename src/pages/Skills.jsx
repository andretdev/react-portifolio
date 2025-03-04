function Skills() {
  return (
    <section
      id="skills"
      className="flex- relative flex h-auto w-full flex-col items-center justify-center gap-5 border-2 border-red-500 p-5 xl:flex-row"
    >
      <div className="animate-appear-bottom bg-specific mb-4 flex w-full flex-col scroll-smooth rounded-2xl px-10 shadow-lg shadow-gray-600">
        <div className="flex h-20 w-full items-center justify-center">
          <h3 className="py-5 text-5xl text-gray-500">Skills</h3>
        </div>

        <div className="flex flex-row justify-between gap-5 p-10 text-gray-500">
          <div className="">
            <p className="border border-red-500 from-gray-500 to-gray-600 hover:bg-gradient-to-r">
              JavasScript
            </p>
            <p>React</p>
            <p>Node</p>
            <p>Python</p>
            <p>SQL</p>
            <p>Rest API</p>
          </div>
          <div>
            <p className="border border-red-500 from-gray-500 to-gray-600 hover:bg-gradient-to-r">
              JavasScript
            </p>
            <p>React</p>
            <p>Node</p>
            <p>Python</p>
            <p>SQL</p>
            <p>Rest API</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
