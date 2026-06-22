import type { Metadata } from "next";
import { Bio } from "@/src/components/about/Bio";
import { Skills } from "@/src/components/about/Skills";
import { Experience } from "@/src/components/about/Experience";
import { Education } from "@/src/components/about/Education";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: `Sobre — ${portfolio.name}`,
  description:
    "Trajetória, formação, competências, cursos e conquistas de Jefferson Tadeu dos Santos.",
};

export default function AboutPage() {
  return (
    <>
      <Bio />
      <Skills />
      <Experience />
      <Education />
    </>
  );
}
