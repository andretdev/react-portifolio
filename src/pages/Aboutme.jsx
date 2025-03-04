import coder from "../assets/coder.jpg";

function Aboutme() {
  return (
    <section
      id="aboutme"
      className="px-35 flex min-h-screen flex-row items-center justify-center gap-10"
    >
      <div className="flex flex-col justify-center xl:w-4/5">
        <h2 className="font-sans text-6xl text-gray-500">
          Hi, Im Andre Tiago!
          <br />
          <span>Software Developer</span>
        </h2>
        <p className="text-md mt-5 text-balance font-sans text-white">
          Im a Full-Stack developer always using my skills to create and inovate
          developing full-stack aplications, been passionate about technology
          since I was a kid, I am a quick learner and a team player
        </p>
      </div>
      <div className="h-140 w-210 flex items-center justify-center rounded-full">
        <img src={coder} className="h-full rounded-full object-cover" />
        <div className="z-40 h-full w-full rounded-full border border-red-500 bg-amber-200 blur-2xl"></div>
      </div>
    </section>
  );
}
export default Aboutme;
