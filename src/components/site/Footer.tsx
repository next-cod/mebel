"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { to: "/collections", label: "Коллекции" },
  { to: "/products", label: "Изделия" },
  { to: "/process", label: "Процесс" },
  { to: "/why-us", label: "Почему мы" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
];

const disclaimerText =
  "Информация на сайте носит справочный характер и не является публичной офертой. Внешний вид, размеры, оттенок древесины и фактура обивки могут отличаться от изображений на фотографиях в зависимости от партии материала и настроек экрана. Итоговую стоимость, сроки изготовления и наличие моделей уточняйте у менеджера при оформлении заказа.";

export const Footer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="bg-graphite text-cream/80">
      <div className="container-hw py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Link href="/" className="serif text-3xl text-cream sm:text-4xl">
              Heritage Wood
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/55">
              Семейная мебельная студия. Производим классическую деревянную мебель из массива с 1998 года.
            </p>

            <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  href={l.to}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-5 lg:pl-4">
            <div className="text-xs font-medium text-cream/40">Свяжитесь с нами</div>
            <ul className="mt-5 space-y-3 text-base">
              <li className="serif text-cream/90">Москва, Малая Дмитровка, 12</li>
              <li className="serif text-cream/90">+7 (495) 120-48-90</li>
              <li className="serif text-cream/90">studio@heritagewood.ru</li>
              <li className="mt-4 text-sm text-cream/50">Пн – Сб, 10:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-cream/45 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} Heritage Wood. Все права защищены.</div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="transition-colors hover:text-cream">Политика конфиденциальности</a>
              <a href="#" className="transition-colors hover:text-cream">Условия</a>
              <button
                type="button"
                onClick={() => setShowDisclaimer((v) => !v)}
                aria-expanded={showDisclaimer}
                aria-controls="footer-disclaimer"
                className="border-b border-dotted border-cream/40 pb-px transition-colors hover:text-cream hover:border-cream/70"
              >
                Дисклеймер
              </button>
            </div>
          </div>

          <div
            id="footer-disclaimer"
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              showDisclaimer ? "mt-5 max-h-32 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="max-w-2xl text-xs leading-relaxed text-cream/40">
              {disclaimerText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
