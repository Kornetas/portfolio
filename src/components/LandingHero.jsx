export default function LandingHero() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[30vh] px-4 pt-0 pb-0 max-w-screen-2xl mx-auto">
      <h1 className="text-4xl md:text-7xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
        HI, I'M AREK
      </h1>
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
        FRONT-END DEV
      </h2>
      <p className="mt-2 text-center text-2xl md:text-3xl text-purple-300 font-semibold">
        With a passion for detail
      </p>
      <a
        href="/Arek-Resume.pdf"
        download
        className="mt-10 px-10 py-5 border-2 border-pink-400 rounded-xl text-pink-300 font-bold text-xl hover:bg-pink-400 hover:text-black transition shadow-lg animate-bounce"
      >
        Download Resume (CV)
      </a>
    </section>
  );
}
