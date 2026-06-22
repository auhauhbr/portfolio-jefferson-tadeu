import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";

export function Experience() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-[#06101e]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">Marcos da jornada</p>
        <h2 className="section-title text-slate-950 dark:text-white">
          Aprendizado também acontece em público
        </h2>
        <div className="mt-10 space-y-6">
          {portfolio.milestones.map((milestone) => (
            <article
              key={milestone.title}
              className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-[.8fr_1.2fr] dark:border-white/10 dark:bg-white/[0.035]"
            >
              <div className="relative min-h-64">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 md:p-9">
                <Award className="h-6 w-6 text-sky-500" />
                <p className="mt-5 font-mono text-xs text-sky-600 dark:text-sky-300">
                  {milestone.date}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                  {milestone.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                  {milestone.description}
                </p>
                <Link
                  href={milestone.href}
                  target="_blank"
                  className="text-link mt-6"
                >
                  {milestone.linkLabel} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
