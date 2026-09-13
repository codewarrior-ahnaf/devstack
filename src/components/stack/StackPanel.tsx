import type { techType } from "../../types/type";

interface StackPanelProps {
  stack: techType[];
  onRemove: (techId: techType["id"]) => void;
  onClear: () => void;
}

const StackPanel = ({ stack, onRemove, onClear }: StackPanelProps) => {
  return (
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
                onClick={() => onRemove(tech.id)}
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
        onClick={onClear}
        disabled={stack.length === 0}
        className="mt-5 w-full rounded-lg border border-rose-200 py-2 text-xs font-medium text-rose-500 transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
};

export default StackPanel;
