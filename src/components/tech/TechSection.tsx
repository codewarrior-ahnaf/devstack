import { use, useState } from "react";
import { toast } from "react-toastify";
import type { techType } from "../../types/type";
import StackPanel from "../stack/StackPanel";
import TechCard from "./TechCard";

interface TechSectionProps {
  techPromise: Promise<techType[]>;
}

const TechSection = ({ techPromise }: TechSectionProps) => {
  const techSection = use(techPromise);
  const [stack, setStack] = useState<techType[]>([]);

  const addToStack = (tech: techType) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const removeFromStack = (techId: techType["id"]) => {
    const removedTech = stack.find((tech) => tech.id === techId);

    setStack((currentStack) =>
      currentStack.filter((tech) => tech.id !== techId),
    );

    if (removedTech) {
      toast.info(`${removedTech.name} removed from your stack.`);
    }
  };

  const removeAllFromStack = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.error("All technologies removed from your stack.");
  };

  return (
    <div id="technologies">
      <div className="container mx-auto mt-28 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Explore the
          <span className="brand-gradient-text">Technologies</span>
        </h1>

        <p className="pt-3 text-base text-[#64748b]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-[minmax(0,1fr)_260px] items-start gap-6 px-6 pb-20">
        <div className="grid grid-cols-3 gap-4">
          {techSection.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isSelected={stack.some((item) => item.id === tech.id)}
              onAdd={() => addToStack(tech)}
            />
          ))}
        </div>

        <StackPanel
          stack={stack}
          onRemove={removeFromStack}
          onClear={removeAllFromStack}
        />
      </div>
    </div>
  );
};

export default TechSection;
