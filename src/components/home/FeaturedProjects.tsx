import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";
import { ProjectCard } from "@/src/components/projects/ProjectCard";

export function FeaturedProjects() {
  const priority = [
    "Lumora",
    "Orquestrador Assíncrono",
    "Nexo Kanban",
    "AirVision",
    "Rastreador de Preços",
    "Trilum Conecta",
  ];
  const featured = portfolio.projects
    .filter((project) => project.featured)
    .toSorted(
      (first, second) =>
        priority.indexOf(first.title) - priority.indexOf(second.title),
    );

  return (
    <section className="bg-white py-24 text-slate-950 dark:bg-[#07101f] dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Trabalhos selecionados</p>
            <h2 className="section-title">
              Projetos em <span className="text-sky-500">destaque</span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
              Sistemas que mostram minha evolução em arquitetura, produto,
              automação, dados e entrega de software.
            </p>
          </div>
          <Link className="text-link shrink-0" href="/projects">
            Ver todos os projetos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
