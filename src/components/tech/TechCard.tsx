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
}

const TechCard = ({ tech }: TechCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          loading="lazy"
          className="w-9 h-9"
        />
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            badgeStyles[tech.badge ?? ""] || "bg-gray-100 text-gray-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h2 className="text-base font-semibold text-gray-900 mb-1.5">
        {tech.name}
      </h2>

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {tech.description}
      </p>

      <div className="flex items-center gap-3 mb-4 text-xs mt-auto">
        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium">
          {tech.category}
        </span>
        <span className="text-blue-600 font-medium">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700 font-semibold">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button className="w-full bg-gray-900 text-white text-sm py-2.5 rounded-xl font-medium hover:bg-gray-800 transition">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
