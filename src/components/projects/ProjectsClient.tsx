"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";

const projectTechnologies = Array.from(
  new Set(portfolio.projects.flatMap((project) => project.tech))
).sort((a, b) => a.localeCompare(b, "pt-BR"));

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeTechnology, setActiveTechnology] = useState("Todas");
  const filtered = portfolio.projects.filter(
    (project) =>
      (activeCategory === "Todos" || project.category === activeCategory) &&
      (activeTechnology === "Todas" ||
        project.tech.includes(activeTechnology))
  );

  return (
    <div className="min-h-screen bg-slate-50 py-20 dark:bg-[#06101e]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="section-label">Portfólio técnico</p>
          <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl">
            Projetos construídos para aprender, resolver e entregar.
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            Aqui estão projetos autorais, acadêmicos e estudos técnicos. Cada
            um registra não apenas a tecnologia usada, mas o problema, as
            decisões de implementação e o estágio atual da solução.
          </p>
        </div>
        <div className="my-10">
          <FilterBar
            activeCategory={activeCategory}
            activeTechnology={activeTechnology}
            technologies={projectTechnologies}
            onCategoryChange={setActiveCategory}
            onTechnologyChange={setActiveTechnology}
            onReset={() => {
              setActiveCategory("Todos");
              setActiveTechnology("Todas");
            }}
          />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {filtered.length} {filtered.length === 1 ? "projeto encontrado" : "projetos encontrados"}
          </p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${activeTechnology}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center md:col-span-2 dark:border-white/15 dark:bg-white/[0.025]">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Nenhum projeto combina esses filtros.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("Todos");
                    setActiveTechnology("Todas");
                  }}
                  className="mt-3 text-sm font-semibold text-sky-600 dark:text-sky-300"
                >
                  Mostrar todos os projetos
                </button>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
