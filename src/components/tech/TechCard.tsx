import type { techType } from "../../types/type";

const badgeStyles: Record<string, string> = {
  Popular: "bg-blue-50 text-blue-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-500",
  Hybrid: "bg-slate-100 text-slate-600",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-rose-50 text-rose-500",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-blue-50 text-blue-600",
  Robust: "bg-orange-50 text-orange-500",
  Modern: "bg-teal-50 text-teal-600",
  Containers: "bg-blue-50 text-blue-600",
};

interface TechCardProps {
  tech: techType;
  isSelected: boolean;
  onAdd: () => void;
}

const TechCard = ({ tech, isSelected, onAdd }: TechCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          loading="lazy"
          className="h-8 w-8"
        />
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
            badgeStyles[tech.badge ?? ""] || "bg-gray-100 text-gray-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h2 className="mb-1.5 text-sm font-bold text-gray-900">{tech.name}</h2>

      <p className="mb-4 text-xs leading-5 text-gray-500">{tech.description}</p>

      <div className="mt-auto mb-4 flex items-center gap-2 text-[10px]">
        <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-600">
          {tech.category}
        </span>
        <span className="font-medium text-[#475569]">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-semibold text-gray-700">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={onAdd}
        disabled={isSelected}
        className="w-full rounded-lg bg-slate-950 py-2 text-xs font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500"
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
