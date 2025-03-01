function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen w-full flex-col justify-center gap-5 border-2 border-red-500 p-5 xl:flex-row"
    >
      <div className="animate-appear-left w-100 h-100 border-1 inset-shadow-sm inset-shadow-purple-900 flex flex-col items-center justify-center rounded-lg border-purple-500 bg-blue-500 transition-all duration-500 ease-out hover:scale-[1.03]">
        <p className="font-serif">Hello everyone this is a card compononent </p>
        <p className="text-black">Tesst to github push</p>
        <button className="mt-2 rounded-lg border-2 border-red-500 bg-blue-700 px-3 py-2 font-bold text-black transition-all duration-500 ease-out hover:scale-[1.03]">
          Click
        </button>
      </div>
    </section>
  );
}

export default Skills;
