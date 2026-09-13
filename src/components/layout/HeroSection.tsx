import banner from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto grid items-center gap-10 px-6 pt-16 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-24">
      <div>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-[#0F172A]">Build Your Ideal</span> <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="max-w-xl pb-7 pt-4 text-sm leading-6 text-[#475569] sm:text-base">
          Explore frontend, backend, database, and tooling options, <br />
          compare them side by side, and put together the stack that fits your
          <br /> next project.
        </p>

        <div className="flex gap-3 pt-4">
          <button className="h-10 rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] px-4 text-xs font-semibold text-white shadow-sm transition duration-200 hover:opacity-90">
            Explore Technologies
          </button>
          <button className="h-10 rounded-lg border border-[#E5E7EB] bg-white px-5 text-xs font-semibold text-[#374151] transition duration-200 hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src={banner}
          alt="Development stack illustration"
          className="w-64 sm:w-72 lg:w-[360px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
