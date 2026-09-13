import { use, useState } from "react";
import { toast } from "react-toastify";
import type { techType } from "../../types/type";
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

  const removeFromStack = (techId: number) => {
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
    <div>
      <div className="container mx-auto mt-20 px-6 sm:mt-24 lg:mt-28">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Explore the
          <span className="bg-linear-to-r from-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="pt-3 text-sm text-[#64748b] sm:text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto mt-8 grid grid-cols-1 items-start gap-6 px-6 pb-20 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techSection.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isSelected={stack.some((item) => item.id === tech.id)}
              onAdd={() => addToStack(tech)}
            />
          ))}
        </div>

        <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-bold text-gray-900">Your Stack</h2>
          <p className="mt-1 text-xs text-gray-400">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
            Selected
          </p>

          <div className="mt-4 space-y-3">
            {stack.length === 0 ? (
              <p className="rounded-xl border border-dashed border-gray-200 px-3 py-5 text-center text-xs text-gray-400">
                Add technologies to build your stack.
              </p>
            ) : (
              stack.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-2.5"
                >
                  <img className="h-7 w-7" src={tech.icon} alt="" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-gray-800">
                      {tech.name}
                    </p>
                    <p className="text-[10px] text-gray-400">{tech.category}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromStack(tech.id)}
                    aria-label={`Remove ${tech.name} from stack`}
                    className="text-lg leading-none text-gray-400 transition hover:text-rose-500"
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>

          <button
            type="button"
            onClick={removeAllFromStack}
            disabled={stack.length === 0}
            className="mt-5 w-full rounded-lg border border-rose-200 py-2 text-xs font-medium text-rose-500 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Remove All
          </button>
        </aside>
      </div>
    </div>
  );
};

export default TechSection;
