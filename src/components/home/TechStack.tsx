import Image from "next/image";
import { portfolio } from "@/src/config/portfolio";

export function TechStack() {
  const technologies = [...portfolio.techStack, ...portfolio.techStack];

  return (
    <section className="overflow-hidden border-y border-sky-900/70 bg-[#08182c] py-7 text-white">
      <div className="mx-auto mb-5 max-w-6xl px-6">
        <p className="text-sm font-medium text-sky-300">
          Tecnologias utilizadas em projetos e estudadas em cursos
        </p>
      </div>

      <div className="tech-marquee relative overflow-hidden">
        <div className="animate-tech-marquee flex w-max items-center gap-4 px-4">
          {technologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex h-16 shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-slate-200 shadow-sm"
            >
              {"icon" in tech && tech.icon ? (
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5">
                  <Image
                    src={tech.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                    style={{ width: 28, height: 28 }}
                  />
                </span>
              ) : (
                <span className="rounded-md bg-sky-400/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-sky-300">
                  tech
                </span>
              )}
              <span className="whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
