"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Github,
  Images,
  Network,
  X,
} from "lucide-react";
import type { Project } from "@/src/config/portfolio";
import { getTechnologyIcon } from "@/src/config/technologies";
import { cn } from "@/src/lib/utils";
import { ProjectReadme } from "./ProjectReadme";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images ?? [];

  const showPrevious = () =>
    setImageIndex((current) => (current - 1 + images.length) % images.length);
  const showNext = () =>
    setImageIndex((current) => (current + 1) % images.length);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.035]",
        featured && "md:col-span-2 md:grid md:grid-cols-[1.1fr_.9fr]"
      )}
    >
      <ProjectVisual
        project={project}
        featured={featured}
        imageIndex={imageIndex}
        onPrevious={showPrevious}
        onNext={showNext}
        onSelect={setImageIndex}
      />

      <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-600 dark:text-sky-300">
            {project.category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {project.status}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          {project.summary}
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        {featured ? (
          <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
            {project.contribution}
          </p>
        ) : null}

        <TechnologyTags technologies={project.tech} />

        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-3 pt-7">
          <ProjectDetails project={project} />
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link text-slate-800 hover:text-sky-600 dark:text-slate-100 dark:hover:text-sky-300"
          >
            <Github className="h-4 w-4" /> Repositório
          </Link>
          {project.live ? (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link text-sky-600 hover:text-sky-500 dark:text-sky-300"
            >
              Abrir projeto <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({
  project,
  featured,
  imageIndex,
  onPrevious,
  onNext,
  onSelect,
}: {
  project: Project;
  featured: boolean;
  imageIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  const images = project.images ?? [];

  if (images.length > 0) {
    const currentImage = images[imageIndex];

    return (
      <div
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#07182c]",
          featured && "md:aspect-auto md:min-h-[470px]"
        )}
      >
        <Image
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, 50vw"
          }
          className="object-contain transition-opacity duration-300"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061326] via-[#061326]/65 to-transparent px-5 pb-5 pt-16 text-white">
          <p className="max-w-[80%] text-xs leading-5 text-slate-200">
            {currentImage.caption}
          </p>
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={onPrevious}
              className="gallery-arrow left-3"
              aria-label={`Imagem anterior de ${project.title}`}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="gallery-arrow right-3"
              aria-label={`Próxima imagem de ${project.title}`}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-5 right-5 z-10 flex gap-1.5">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  onClick={() => onSelect(index)}
                  aria-label={`Mostrar imagem ${index + 1} de ${project.title}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    index === imageIndex
                      ? "w-6 bg-sky-300"
                      : "w-1.5 bg-white/45 hover:bg-white"
                  )}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    );
  }

  return (
    <ArchitectureVisual
      title={project.title}
      summary={project.summary}
      architecture={project.architecture}
      featured={featured}
    />
  );
}

function ArchitectureVisual({
  title,
  summary,
  architecture,
  featured,
}: {
  title: string;
  summary: string;
  architecture: string[];
  featured: boolean;
}) {
  return (
    <div
      className={cn(
        "project-code relative flex aspect-[16/10] flex-col justify-between overflow-hidden bg-[#07182c] p-6 text-white",
        featured && "md:aspect-auto md:min-h-[470px]"
      )}
    >
      <div className="relative z-10 flex items-center gap-2 font-mono text-xs text-sky-300">
        <Network className="h-4 w-4" />
        arquitetura / fluxo
      </div>

      <div className="relative z-10 flex flex-wrap items-center gap-2">
        {architecture.map((step, index) => (
          <div key={step} className="contents">
            <span className="rounded-lg border border-sky-300/20 bg-sky-300/10 px-3 py-2 font-mono text-xs text-sky-100">
              {step}
            </span>
            {index < architecture.length - 1 ? (
              <ArrowRight className="h-4 w-4 text-sky-400" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
          {summary}
        </p>
      </div>
    </div>
  );
}

function TechnologyTags({ technologies }: { technologies: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {technologies.map((tech) => {
        const icon = getTechnologyIcon(tech);

        return (
          <span
            key={tech}
            className="inline-flex min-h-8 items-center gap-2 rounded-lg border border-sky-100 bg-sky-50 px-2.5 py-1.5 text-[11px] font-semibold text-sky-800 dark:border-sky-300/10 dark:bg-sky-400/10 dark:text-sky-200"
          >
            {icon ? (
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white p-0.5">
                <Image
                  src={icon}
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain"
                  style={{ width: 16, height: 16 }}
                />
              </span>
            ) : (
              <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded bg-sky-600 px-1 font-mono text-[8px] uppercase text-white">
                {tech
                  .replace(/[^a-zA-Z0-9+#]/g, "")
                  .slice(0, 2)}
              </span>
            )}
            {tech}
          </span>
        );
      })}
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="project-link text-sky-600 hover:text-sky-500 dark:text-sky-300"
        >
          <Images className="h-4 w-4" /> Ver detalhes
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-slate-950/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[80] max-h-[92vh] w-[min(1120px,94vw)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl focus:outline-none dark:border-white/10 dark:bg-[#071321]">
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur dark:border-white/10 dark:bg-[#071321]/95">
            <div>
              <Dialog.Title className="text-xl font-semibold text-slate-950 dark:text-white">
                {project.title}
              </Dialog.Title>
              <Dialog.Description className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Visão completa do projeto, como um README dentro do portfólio.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Fechar detalhes"
              >
                <X className="h-5 w-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-10 p-6 sm:p-8">
            {project.images?.length ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.map((image, index) => (
                  <figure
                    key={image.src}
                    className={cn(
                      "overflow-hidden rounded-xl border border-slate-200 bg-[#07182c] dark:border-white/10",
                      index === 0 && "sm:col-span-2"
                    )}
                  >
                    <div
                      className={cn(
                        "relative aspect-[16/9]",
                        index === 0 && "sm:aspect-[16/8]"
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={
                          index === 0
                            ? "(max-width: 640px) 90vw, 1000px"
                            : "(max-width: 640px) 90vw, 500px"
                        }
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="border-t border-white/10 px-4 py-3 text-xs text-slate-300">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <ArchitectureVisual
                title={project.title}
                summary={project.summary}
                architecture={project.architecture}
                featured={false}
              />
            )}

            <div className="grid gap-9 lg:grid-cols-[1.2fr_.8fr]">
              <div>
                <DetailHeading>Sobre o projeto</DetailHeading>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  {project.contribution}
                </p>
              </div>

              <div>
                <DetailHeading>Arquitetura</DetailHeading>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.architecture.map((step, index) => (
                    <div key={step} className="contents">
                      <span className="rounded-lg border border-slate-200 px-3 py-2 font-mono text-xs text-slate-700 dark:border-white/10 dark:text-slate-200">
                        {step}
                      </span>
                      {index < project.architecture.length - 1 ? (
                        <ArrowRight className="h-4 w-4 text-sky-500" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <DetailHeading>Funcionalidades implementadas</DetailHeading>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <DetailHeading>Tecnologias utilizadas</DetailHeading>
              <TechnologyTags technologies={project.tech} />
            </div>

            <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-7 dark:border-white/10">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-button border-slate-300 text-slate-800 dark:border-white/20 dark:text-white"
              >
                <GitBranch className="h-4 w-4" /> Ver código no GitHub
              </Link>
              {project.live ? (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-button border-sky-500 bg-sky-500 text-white hover:bg-sky-400"
                >
                  <ExternalLink className="h-4 w-4" /> Abrir projeto publicado
                </Link>
              ) : null}
              {project.links?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-button border-slate-300 text-slate-800 dark:border-white/20 dark:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" /> {link.label}
                </Link>
              ))}
            </div>

            {project.readme ? (
              <ProjectReadme title={project.title} {...project.readme} />
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function DetailHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-sky-600 dark:text-sky-300">
      {children}
    </h4>
  );
}
