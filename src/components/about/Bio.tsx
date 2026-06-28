import Image from "next/image";
import Link from "next/link";
import {
  Braces,
  Download,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Target,
} from "lucide-react";
import { portfolio } from "@/src/config/portfolio";

export function Bio() {
  return (
    <section className="bg-[#061326] py-14 text-white sm:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-[.72fr_1.28fr]">
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 md:mt-1">
          <Image
            src={portfolio.avatar}
            alt={portfolio.name}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 380px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="section-label !text-sky-300">Sobre mim</p>
          <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Formação sólida, projetos práticos e evolução contínua.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">{portfolio.bio}</p>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: Braces,
                title: "Foco",
                text: "Backend e automação",
              },
              {
                icon: Layers3,
                title: "Amplitude",
                text: "Full stack e integrações",
              },
              {
                icon: Target,
                title: "Objetivo",
                text: "Estágio ou vaga júnior",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.035] p-4"
              >
                <Icon className="h-5 w-5 text-sky-300" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {title}
                </p>
                <p className="mt-1 text-sm font-medium text-white">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={portfolio.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold hover:bg-sky-400"
            >
              <Download className="h-4 w-4" /> Baixar currículo
            </Link>
            <Link
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold hover:border-sky-300"
            >
              <Mail className="h-4 w-4" /> Entrar em contato
            </Link>
            <Link
              href={portfolio.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/35 px-5 py-3 text-sm font-semibold text-emerald-200 hover:border-emerald-300 hover:bg-emerald-400/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" /> {portfolio.location}
          </p>
        </div>
      </div>
    </section>
  );
}
