import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { portfolio } from "@/src/config/portfolio";

export const metadata: Metadata = {
  title: `Contato — ${portfolio.name}`,
  description: `Entre em contato com ${portfolio.name}.`,
};

const contacts = [
  {
    label: "E-mail",
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: portfolio.phone,
    href: portfolio.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "github.com/auhauhbr",
    href: portfolio.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "Jefferson Tadeu dos Santos",
    href: portfolio.linkedin,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-[#061326] py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_.9fr]">
        <div>
          <p className="section-label !text-sky-300">Contato</p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            Vamos construir algo útil juntos?
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Estou aberto a oportunidades de estágio, posições júnior,
            colaborações e conversas sobre desenvolvimento backend, full stack
            e automação.
          </p>
          <p className="mt-8 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" /> {portfolio.location}
          </p>
        </div>

        <div className="space-y-4">
          {contacts.map(({ label, value, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-sky-400/60 hover:bg-white/[0.06]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-widest text-slate-500">
                  {label}
                </span>
                <span className="mt-1 block truncate font-medium text-slate-100">
                  {value}
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-slate-500 transition group-hover:text-sky-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
