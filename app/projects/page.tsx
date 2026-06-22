import type { Metadata } from "next";
import { ProjectsClient } from "@/src/components/projects/ProjectsClient";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: `Projetos — ${portfolio.name}`,
  description: `Projetos de backend, full stack, automação, dados, produto web, desktop e estudos técnicos de ${portfolio.name}.`,
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
