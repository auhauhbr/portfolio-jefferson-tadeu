import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061326] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{portfolio.name}</p>
          <p className="mt-1 text-sm text-slate-400">{portfolio.role}</p>
        </div>
        <div className="flex items-center gap-2">
          <FooterLink href={portfolio.github} label="GitHub">
            <Github className="h-4 w-4" />
          </FooterLink>
          <FooterLink href={portfolio.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </FooterLink>
          <FooterLink href={`mailto:${portfolio.email}`} label="E-mail">
            <Mail className="h-4 w-4" />
          </FooterLink>
          <FooterLink href={portfolio.whatsapp} label="WhatsApp">
            <MessageCircle className="h-4 w-4" />
          </FooterLink>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {portfolio.name}. Desenvolvido com Next.js.
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:border-sky-400 hover:text-sky-300"
    >
      {children}
    </Link>
  );
}
