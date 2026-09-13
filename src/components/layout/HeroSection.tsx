import banner from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="container mx-auto flex items-center justify-between gap-6 px-6 pt-24"
    >
      <div>
        <h1 className="text-6xl font-extrabold leading-[1.08] tracking-tight">
          <span className="text-[#0F172A]">Build Your Ideal</span> <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>

        <p className="max-w-xl pb-7 pt-4 text-lg leading-6 text-[#475569]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-3 pt-4">
          <button className="brand-gradient h-10 rounded-lg px-4 text-xs font-semibold text-white shadow-sm transition duration-200 hover:opacity-90">
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
          className="w-[360px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
