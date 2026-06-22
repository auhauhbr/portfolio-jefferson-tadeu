import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Clock3,
  ExternalLink,
  GraduationCap,
  Medal,
  Newspaper,
  Presentation,
  Quote,
  Star,
  UserRound,
} from "lucide-react";
import { portfolio } from "@/src/config/portfolio";
import {
  bradescoCourses,
  type Course,
  portoDigitalRecognition,
  udemyCourseGroups,
} from "@/src/config/courses";

export function Education() {
  return (
    <section className="bg-white py-20 dark:bg-[#08111f]">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">Formação</p>
        <h2 className="section-title text-slate-950 dark:text-white">
          Base acadêmica e técnica
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {portfolio.education.map((education) => (
            <article
              key={education.degree}
              className="rounded-2xl border border-slate-200 p-6 dark:border-white/10"
            >
              <GraduationCap className="h-6 w-6 text-sky-500" />
              <h3 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-sky-600 dark:text-sky-300">
                {education.institution}
              </p>
              <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                {education.period} · {education.status}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {education.description}
              </p>
            </article>
          ))}
        </div>

        <div id="certificados" className="scroll-mt-24 pt-24">
          <div className="max-w-3xl">
            <p className="section-label">Cursos e certificados</p>
            <h2 className="section-title text-slate-950 dark:text-white">
              Aprendizado contínuo, organizado por formação
            </h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              Os cartões começam recolhidos para manter a página leve. Expanda
              um curso para consultar carga horária, instrutor, conteúdo e
              resultado.
            </p>
          </div>

          <ProviderSection
            name="Porto Digital"
            description="Reconhecimento institucional recebido durante a Residência Tecnológica e apresentado no ciclo do Coday 2026.1."
            logo="/brands/porto-digital.svg"
            logoAlt="Porto Digital"
            href="https://www.portodigital.org/"
          >
            <PortoDigitalRecognition />
          </ProviderSection>

          <ProviderSection
            name="Fundação Bradesco · Escola Virtual"
            description="Cursos concluídos na Escola Virtual, com aproveitamento registrado no histórico acadêmico."
            logo="/brands/bradesco.svg"
            logoAlt="Bradesco"
            href="https://www.ev.org.br/"
          >
            <CourseList courses={bradescoCourses} />
          </ProviderSection>

          <ProviderSection
            name="Udemy"
            description="Formações adquiridas para aprofundamento em desenvolvimento web, linguagens, bancos de dados e jogos."
            logo="/brands/udemy.svg"
            logoAlt="Udemy"
          >
            <div className="space-y-10">
              {udemyCourseGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                    <BookOpen className="h-4 w-4 text-sky-500" />
                    {group.title}
                  </h4>
                  <CourseList courses={group.courses} />
                </div>
              ))}
            </div>
          </ProviderSection>
        </div>
      </div>
    </section>
  );
}

function PortoDigitalRecognition() {
  const recognition = portoDigitalRecognition;

  return (
    <details className="group overflow-hidden rounded-xl border border-rose-200 bg-white open:shadow-md dark:border-rose-300/15 dark:bg-[#0a1628]">
      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 marker:hidden">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-400/10 dark:text-rose-300">
          <Medal className="h-6 w-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-6 text-slate-950 dark:text-white">
            {recognition.title}
          </span>
          <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
            {recognition.author}
          </span>
        </span>
        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>

      <div className="border-t border-rose-100 px-5 pb-6 pt-6 dark:border-rose-300/10">
        <div className="rounded-xl border border-rose-100 bg-rose-50/60 p-5 dark:border-rose-300/10 dark:bg-rose-400/[0.04]">
          <Quote className="h-6 w-6 text-rose-500" />
          <p className="mt-4 text-sm font-medium leading-7 text-slate-700 dark:text-slate-200">
            {recognition.certificateText}
          </p>
          <div className="mt-5 border-t border-rose-200 pt-4 dark:border-rose-300/15">
            <p className="font-semibold text-slate-950 dark:text-white">
              {recognition.signer}
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {recognition.author}
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
              <Presentation className="h-5 w-5 text-sky-500" />
              Coday 2026.1 e Trilum Conecta
            </h4>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {recognition.context}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {recognition.project}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
              <Newspaper className="h-5 w-5 text-sky-500" />
              Publicações e materiais
            </h4>
            <div className="mt-3 grid gap-2">
              {recognition.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:text-slate-200 dark:hover:border-sky-300/40 dark:hover:text-sky-300"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}

function ProviderSection({
  name,
  description,
  logo,
  logoAlt,
  href,
  children,
}: {
  name: string;
  description: string;
  logo: string;
  logoAlt: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
      <div className="flex flex-col gap-5 border-b border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center dark:border-white/10 dark:bg-white/[0.035]">
        <div className="flex h-16 w-44 shrink-0 items-center justify-center rounded-xl bg-white px-5 shadow-sm">
          <Image
            src={logo}
            alt={logoAlt}
            width={150}
            height={48}
            className="max-h-10 w-auto object-contain"
          />
        </div>
        <div>
          {href ? (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl font-semibold text-slate-950 hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
            >
              {name} <ExternalLink className="h-4 w-4" />
            </Link>
          ) : (
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              {name}
            </h3>
          )}
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
            {description}
          </p>
        </div>
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </section>
  );
}

function CourseList({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-3">
      {courses.map((course) => (
        <CourseDetails key={`${course.provider}-${course.title}`} course={course} />
      ))}
    </div>
  );
}

function CourseDetails({ course }: { course: Course }) {
  return (
    <details className="group overflow-hidden rounded-xl border border-slate-200 bg-white open:shadow-sm dark:border-white/10 dark:bg-[#0a1628]">
      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 marker:hidden">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300">
          <Award className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-6 text-slate-950 dark:text-white">
            {course.title}
          </span>
          <span className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
            {course.duration ? <span>{course.duration}</span> : null}
            {course.grade ? <span>Aproveitamento: {course.grade}</span> : null}
            {course.instructor ? <span>{course.instructor}</span> : null}
          </span>
        </span>
        <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
      </summary>

      <div className="border-t border-slate-200 px-5 pb-6 pt-5 dark:border-white/10">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
          {course.instructor ? (
            <span className="flex items-center gap-1.5">
              <UserRound className="h-3.5 w-3.5" /> {course.instructor}
            </span>
          ) : null}
          {course.duration ? (
            <span className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" /> {course.duration}
            </span>
          ) : null}
          {course.structure ? (
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5" /> {course.structure}
            </span>
          ) : null}
          {course.completion ? (
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" /> {course.completion}
            </span>
          ) : null}
          {course.grade ? (
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" /> {course.grade}
            </span>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {course.summary}
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {course.topics.map((topic) => (
            <li
              key={topic}
              className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              {topic}
            </li>
          ))}
        </ul>

        {course.href ? (
          <Link
            href={course.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-300"
          >
            Procurar curso na Udemy <ExternalLink className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </details>
  );
}
