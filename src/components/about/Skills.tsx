import { portfolio } from "@/src/config/portfolio";

export function Skills() {
  const strengths = [
    "APIs REST e processamento assíncrono",
    "Aplicações full stack e tempo real",
    "Automação, coleta e tratamento de dados",
    "Pagamentos, webhooks e integrações externas",
    "Modelagem e bancos relacionais",
    "Docker, testes, documentação e deploy",
  ];

  return (
    <section className="bg-white py-20 dark:bg-[#08111f]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">Conhecimentos</p>
        <h2 className="section-title text-slate-950 dark:text-white">
          Habilidades principais
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength) => (
            <div
              key={strength}
              className="border-l-2 border-sky-500 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 dark:bg-white/[0.035] dark:text-slate-200"
            >
              {strength}
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-xl font-semibold text-slate-950 dark:text-white">
          Tecnologias por área
        </h3>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {Object.entries(portfolio.skills).map(([group, items]) => (
            <div key={group} className="bg-white p-7 dark:bg-[#0a1628]">
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {group}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-700 dark:bg-white/5 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
