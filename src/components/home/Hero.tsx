"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/src/config/portfolio";

export function Hero() {
  return (
    <section className="hero-grid overflow-hidden bg-[#061326] text-white">
      <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Construo sistemas que{" "}
            <span className="text-sky-400">transformam problemas reais</span>{" "}
            em soluções claras.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Desenvolvedor em formação, com foco em backend, automação com
            Python, APIs REST, banco de dados e aplicações full stack. Tenho
            projetos com FastAPI, Celery, Redis, PostgreSQL, Docker, React,
            TypeScript e Node.js, buscando criar soluções práticas para
            problemas reais.
          </p>

          <div className="mt-9 flex flex-col flex-wrap gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-sky-500 px-6 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Ver projetos <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={portfolio.resume}
              target="_blank"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-sky-300/35 px-6 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Baixar currículo
            </Link>
            <Link
              href="/about#certificados"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-sky-300/35 px-6 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-white/5"
            >
              <Award className="h-4 w-4" /> Ver certificados
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            <Link className="social-link" href={portfolio.github} target="_blank">
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link className="social-link" href={portfolio.linkedin} target="_blank">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
            <Link className="social-link" href={`mailto:${portfolio.email}`}>
              <Mail className="h-4 w-4" /> E-mail
            </Link>
            <Link
              className="social-link"
              href={portfolio.whatsapp}
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Link>
            <span className="social-link">
              <MapPin className="h-4 w-4" /> {portfolio.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          <div className="absolute -inset-10 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
            <Image
              src={portfolio.avatar}
              alt={`Retrato de ${portfolio.name}`}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 430px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#061326] via-[#061326]/55 to-transparent p-6 pt-24">
              <p className="font-semibold">{portfolio.name}</p>
              <p className="mt-1 text-sm text-slate-300">{portfolio.role}</p>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-sky-400/25 bg-[#0b1d35] px-4 py-3 font-mono text-xs text-sky-300 shadow-xl">
            {"{ backend · dados · produto }"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
