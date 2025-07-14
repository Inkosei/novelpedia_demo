export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-white relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" />
      <h1 className="text-5xl font-bold mb-6">
        <span className="bg-black px-4 py-2 rounded-lg">Novel<span className="text-purple-400">Pedia</span></span>
      </h1>
      <h2 className="text-3xl font-extrabold text-center mb-4">
        BY AUTHORS, FOR AUTHORS<br />BY READERS, FOR READERS
      </h2>
      <p className="text-lg mb-8 text-center max-w-xl">
        Reading reimagined, changing the ecosystem, bringing community together
      </p>
      <div className="flex space-x-4">
        <button className="bg-white text-purple-700 font-semibold px-6 py-2 rounded shadow hover:bg-purple-100">
          Explore Platform
        </button>
        <button className="bg-transparent border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-purple-700">
          Join Community
        </button>
      </div>
      <span className="mt-16 text-purple-200 text-sm">Scroll below for contents</span>
    </section>
  );
}
