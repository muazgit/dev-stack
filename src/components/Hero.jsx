import bannerImage from '../assets/banner-stack.png';

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-3">
            <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-medium text-slate-600 transition hover:border-pink-300 hover:text-pink-500">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="Hero Banner Image"
            className="w-full max-w-[550px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
