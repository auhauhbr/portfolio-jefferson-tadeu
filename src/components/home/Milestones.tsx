import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";

export function Milestones() {
  return (
    <section className="bg-[#061326] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label !text-sky-300">Evolução compartilhada</p>
        <h2 className="section-title">
          Trajetória & <span className="text-sky-400">conquistas</span>
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Alguns marcos que ajudam a contar o processo por trás do código:
          apresentação, colaboração, publicação e aprendizado.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {portfolio.milestones.map((milestone) => (
            <article
              key={milestone.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-sky-300">{milestone.date}</p>
                <h3 className="mt-3 text-xl font-semibold">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {milestone.description}
                </p>
                <Link
                  href={milestone.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
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
