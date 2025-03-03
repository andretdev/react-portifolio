import background from "../assets/aboutmeback.jpg";

function Aboutme() {
  return (
    <section
      id="aboutme"
      className="relative flex min-h-screen w-full flex-col overflow-hidden border-2 border-red-500 xl:flex-row"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center border-2 border-red-500 px-10 pt-28 xl:w-4/5">
        <h1 className="">
          <span className="font-montserrat bg-gradient-to-r from-violet-600 via-blue-400 to-indigo-600 bg-clip-text text-7xl font-bold text-transparent">
            Andre Tiago,
          </span>
          <br />
          <p className="mt-1 text-2xl text-white"> Software Developer </p>
        </h1>
        <p className="mt-1 text-yellow-700">
          A full stack junior developer with a passion for creating and
          developing web applications. I am a quick learner and a team player
        </p>
        <button className="mt-10 rounded-[14px] bg-blue-400 px-4 py-2 font-medium shadow-xl">
          Download CV
        </button>
        <div class="animate-rotate-border hover:bg-conic/[from_var(--border-angle)] mt-2 cursor-pointer rounded-[14px] from-black from-80% via-blue-500 via-90% to-black to-100% p-[1px] transition-all duration-500 ease-out hover:scale-[1.03]">
          <button class="font-lg w-full rounded-[14px] border border-neutral-800 bg-violet-600 px-4 py-2 text-center text-lg text-white/50">
            Download CV
          </button>
        </div>
      </div>

      <div className="max-xl:padding-x flex w-full items-center justify-center border-2 border-red-500">
        <img
          src={background}
          className="absolute -z-10 h-full w-full object-fill"
        ></img>
      </div>
    </section>
  );
}

export default Aboutme;
