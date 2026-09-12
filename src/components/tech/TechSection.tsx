import { use } from "react";
import type { techType } from "../../types/type";


interface TechSectionProps {
  techPromise: Promise<techType[]>;
};

const TechSection = ({ techPromise }: TechSectionProps) => {
  const techSections = use(techPromise);

  return (
    <div>
      
      <div className="container mx-auto mt-30">
        <h1 className="text-5xl font-extrabold">
          Explore the
          <span className="bg-linear-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="pt-4 text-[#64748b] text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {
        techSections.map((techSection) => {
          return (
            <div>
              {techSection.name}
            </div>
          )
        }) 
      }
    </div>
  );
};

export default TechSection;
