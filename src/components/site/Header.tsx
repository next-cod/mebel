"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { to: "/collections", label: "Коллекции" },
  { to: "/products", label: "Изделия" },
  { to: "/process", label: "Процесс" },
  { to: "/why-us", label: "Почему мы" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const menu = (
    <div
      id="mobile-menu"
      className={`fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col bg-background transition-opacity duration-300 xl:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <nav className="container-hw flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-10">
        {links.map((l, idx) => (
          <Link
            key={l.to}
            href={l.to}
            onClick={() => setOpen(false)}
            className="menu-item-in group flex items-baseline gap-5 border-b border-border py-4"
            style={{ animationDelay: open ? `${idx * 45 + 80}ms` : "0ms" }}
          >
            <span className="text-xs text-muted-foreground">{String(idx + 1).padStart(2, "0")}</span>
            <span
              className={`serif text-3xl transition-colors group-hover:text-primary ${
                pathname === l.to ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </span>
          </Link>
        ))}
      </nav>
      <div className="container-hw pb-10">
        <Link href="/contacts" className="btn-primary w-full" onClick={() => setOpen(false)}>
          Оставить заявку
        </Link>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-hw flex h-20 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="serif text-2xl tracking-wide text-primary">Heritage Wood</span>
          <span className="hidden text-xs text-muted-foreground sm:inline">
            est. 1998
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`nav-link whitespace-nowrap${pathname === l.to ? " nav-link-active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contacts" className="hidden xl:inline-flex btn-ghost !py-3 !px-5 text-xs whitespace-nowrap">
          Оставить заявку
        </Link>

        <button
          className="relative z-50 p-2 text-primary xl:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mounted ? createPortal(menu, document.body) : null}
    </header>
  );
};
