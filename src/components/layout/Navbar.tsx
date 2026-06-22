"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { portfolio } from "@/src/config/portfolio";
import { cn } from "@/src/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#061326]/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span>
            <span className="block text-sm font-semibold text-slate-950 dark:text-white">
              {portfolio.firstName}
            </span>
            <span className="block text-[11px] text-slate-500 dark:text-slate-400">
              Backend / Full Stack
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition",
                pathname === link.href
                  ? "text-sky-600 dark:text-sky-300"
                  : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label="Alternar tema"
          >
            <Sun className="h-4 w-4 scale-100 dark:scale-0" />
            <Moon className="absolute h-4 w-4 scale-0 dark:scale-100" />
          </button>
          <Link
            href="/contact"
            className="hidden rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400 md:block"
          >
            Fale comigo
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-white/10 dark:bg-[#061326] md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
