import { use } from "react";
import type { techType } from "../../types/type";
import TechCard from "./TechCard";

interface TechSectionProps {
  techPromise: Promise<techType[]>;
}

const TechSection = ({ techPromise }: TechSectionProps) => {
  const techSection = use(techPromise);

  return (
    <div>
      <div className="container mx-auto mt-30">
        <h1 className="text-5xl font-extrabold">
          Explore the
          <span className="bg-linear-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="pt-4 text-[#64748b] text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 gap-6 pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {techSection.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechSection;
