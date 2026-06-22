"use client";

import { RotateCcw } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";
import { cn } from "@/src/lib/utils";

export function FilterBar({
  activeCategory,
  activeTechnology,
  technologies,
  onCategoryChange,
  onTechnologyChange,
  onReset,
}: {
  activeCategory: string;
  activeTechnology: string;
  technologies: string[];
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
  onReset: () => void;
}) {
  const hasFilter =
    activeCategory !== "Todos" || activeTechnology !== "Todas";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.035]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          Filtrar por área
        </p>
        <div
          className="mt-3 flex flex-wrap gap-2"
          aria-label="Filtrar projetos por área"
        >
          {portfolio.categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition",
                activeCategory === category
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-300"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-end dark:border-white/10">
        <label className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
            Filtrar por tecnologia
          </span>
          <select
            value={activeTechnology}
            onChange={(event) => onTechnologyChange(event.target.value)}
            className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-white/15 dark:bg-[#0a1628] dark:text-slate-200"
          >
            <option value="Todas">Todas as tecnologias</option>
            {technologies.map((technology) => (
              <option key={technology} value={technology}>
                {technology}
              </option>
            ))}
          </select>
        </label>

        {hasFilter ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 text-sm font-semibold text-slate-600 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:text-slate-300"
          >
            <RotateCcw className="h-4 w-4" /> Limpar filtros
          </button>
        ) : null}
      </div>
    </div>
  );
}
