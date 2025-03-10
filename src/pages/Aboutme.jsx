import coder from "../assets/coder.jpg";

function Aboutme() {
  return (
    <section
      id="aboutme"
      className="px-35 flex min-h-screen flex-row items-center justify-center gap-10 max-sm:h-auto max-sm:flex-col max-sm:px-20"
    >
      <div className="animate-appear-bottom flex flex-col justify-center transition-all duration-500 ease-in-out xl:w-4/5">
        <h2 className="font-sans text-6xl text-gray-500 max-sm:mt-10">
          Hi, I'm Andre Tiago!
          <br />
          <span>Software Developer</span>
        </h2>
        <p className="mt-5 text-balance font-sans text-lg text-gray-800">
          As a passionate Full-Stack Developer, I bring ideas to life through
          innovative web applications. With a lifelong fascination for
          technology and a natural aptitude for learning, I excel in
          collaborative environments while crafting elegant solutions to complex
          challenges. My dedication to clean code and user-centric design drives
          me to create seamless digital experiences.
        </p>
      </div>
      <div className="animate-appear-right h-140 w-210 max-sm:h-70 max-sm:w-70 flex items-center justify-center rounded-full border border-white max-sm:mb-5">
        <img src={coder} className="h-full rounded-full object-cover" />
        <div className="z-40 h-full w-full rounded-full"></div>
      </div>
    </section>
  );
}
export default Aboutme;
