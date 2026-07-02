"use client";

import { useState } from "react";
import { AnimateIn } from "@/src/components/ui/AnimateIn";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

// Tables
import tProvence from "@/src/assets/products/table-provence.jpg";
import tAlbion from "@/src/assets/products/table-albion.jpg";
import tVersailles from "@/src/assets/products/table-versailles.jpg";
import tLoire from "@/src/assets/products/table-loire.jpg";
import tBordeaux from "@/src/assets/products/table-bordeaux.jpg";
import tSorbonne from "@/src/assets/products/table-sorbonne.jpg";
import tLyon from "@/src/assets/products/table-lyon.jpg";
import tMarais from "@/src/assets/products/table-marais.jpg";

// Sofas
import sSaintGermain from "@/src/assets/products/sofa-saint-germain.jpg";
import sMontmartre from "@/src/assets/products/sofa-montmartre.jpg";
import sTuileries from "@/src/assets/products/sofa-tuileries.jpg";
import sChamps from "@/src/assets/products/sofa-champs.jpg";
import sOpera from "@/src/assets/products/sofa-opera.jpg";
import sConcorde from "@/src/assets/products/sofa-concorde.jpg";
import sVendome from "@/src/assets/products/sofa-vendome.jpg";
import sTrocadero from "@/src/assets/products/sofa-trocadero.jpg";
import sMadeleine from "@/src/assets/products/sofa-madeleine.jpg";
import sBastille from "@/src/assets/products/sofa-bastille.jpg";
import sPigalle from "@/src/assets/products/sofa-pigalle.jpg";
import sLatin from "@/src/assets/products/sofa-latin.jpg";

// Wardrobes
import wWestminster from "@/src/assets/products/wardrobe-westminster.jpg";
import wHeritage from "@/src/assets/products/wardrobe-heritage.jpg";
import wOxford from "@/src/assets/products/wardrobe-oxford.jpg";
import wCambridge from "@/src/assets/products/wardrobe-cambridge.jpg";
import wWindsor from "@/src/assets/products/wardrobe-windsor.jpg";
import wBuckingham from "@/src/assets/products/wardrobe-buckingham.jpg";
import wKensington from "@/src/assets/products/wardrobe-kensington.jpg";
import wChelsea from "@/src/assets/products/wardrobe-chelsea.jpg";

// Chairs
import cBelmont from "@/src/assets/products/chair-belmont.jpg";
import cAscot from "@/src/assets/products/chair-ascot.jpg";
import cMayfair from "@/src/assets/products/chair-mayfair.jpg";
import cSoho from "@/src/assets/products/chair-soho.jpg";
import cNotting from "@/src/assets/products/chair-notting.jpg";
import cRichmond from "@/src/assets/products/chair-richmond.jpg";

// Bedrooms
import bFlorence from "@/src/assets/products/bedroom-florence.jpg";
import bVerona from "@/src/assets/products/bedroom-verona.jpg";
import bMilano from "@/src/assets/products/bedroom-milano.jpg";
import bSiena from "@/src/assets/products/bedroom-siena.jpg";
import bRoma from "@/src/assets/products/bedroom-roma.jpg";

// Living rooms
import lHeritage from "@/src/assets/products/living-heritage.jpg";
import lProvence from "@/src/assets/products/living-provence.jpg";
import lSaintGermain from "@/src/assets/products/living-saint-germain.jpg";
import lLoire from "@/src/assets/products/living-loire.jpg";
import lBordeaux from "@/src/assets/products/living-bordeaux.jpg";
import lMarais from "@/src/assets/products/living-marais.jpg";
import lLyon from "@/src/assets/products/living-lyon.jpg";

type Item = { title: string; material: string; price: string; img: StaticImageData; category: string };

const items: Item[] = [
  { category: "Столы", title: "Обеденный стол «Provence»", material: "Массив дуба", price: "142 000 ₽", img: tProvence },
  { category: "Столы", title: "Письменный стол «Albion»", material: "Орех, латунь", price: "187 000 ₽", img: tAlbion },
  { category: "Столы", title: "Стол «Versailles»", material: "Массив дуба, патина", price: "168 000 ₽", img: tVersailles },
  { category: "Столы", title: "Стол «Loire»", material: "Орех, фрезеровка", price: "156 000 ₽", img: tLoire },
  { category: "Столы", title: "Стол «Bordeaux»", material: "Дуб, тонировка", price: "134 000 ₽", img: tBordeaux },
  { category: "Столы", title: "Бюро «Sorbonne»", material: "Орех, кожа", price: "212 000 ₽", img: tSorbonne },
  { category: "Столы", title: "Стол-консоль «Lyon»", material: "Массив дуба", price: "98 000 ₽", img: tLyon },
  { category: "Столы", title: "Журнальный стол «Marais»", material: "Орех", price: "76 000 ₽", img: tMarais },
  { category: "Диваны", title: "Диван «Saint Germain»", material: "Дуб, лён", price: "238 000 ₽", img: sSaintGermain },
  { category: "Диваны", title: "Диван «Montmartre»", material: "Орех, велюр", price: "264 000 ₽", img: sMontmartre },
  { category: "Диваны", title: "Диван «Tuileries»", material: "Дуб, шерсть", price: "248 000 ₽", img: sTuileries },
  { category: "Диваны", title: "Диван «Champs»", material: "Орех, лён", price: "278 000 ₽", img: sChamps },
  { category: "Диваны", title: "Диван «Opera»", material: "Дуб, велюр", price: "294 000 ₽", img: sOpera },
  { category: "Диваны", title: "Диван «Concorde»", material: "Орех, бархат", price: "312 000 ₽", img: sConcorde },
  { category: "Диваны", title: "Диван «Vendome»", material: "Массив дуба, лён", price: "256 000 ₽", img: sVendome },
  { category: "Диваны", title: "Диван «Trocadero»", material: "Орех, шерсть", price: "284 000 ₽", img: sTrocadero },
  { category: "Диваны", title: "Диван «Madeleine»", material: "Дуб, велюр", price: "246 000 ₽", img: sMadeleine },
  { category: "Диваны", title: "Диван «Bastille»", material: "Орех, лён", price: "228 000 ₽", img: sBastille },
  { category: "Диваны", title: "Диван «Pigalle»", material: "Дуб, бархат", price: "274 000 ₽", img: sPigalle },
  { category: "Диваны", title: "Диван «Latin»", material: "Массив ореха, лён", price: "298 000 ₽", img: sLatin },
  { category: "Шкафы", title: "Книжный шкаф «Westminster»", material: "Орех, фрезеровка", price: "214 000 ₽", img: wWestminster },
  { category: "Шкафы", title: "Гардероб «Heritage»", material: "Массив дуба", price: "176 000 ₽", img: wHeritage },
  { category: "Шкафы", title: "Шкаф «Oxford»", material: "Орех, латунь", price: "234 000 ₽", img: wOxford },
  { category: "Шкафы", title: "Шкаф «Cambridge»", material: "Массив дуба, патина", price: "198 000 ₽", img: wCambridge },
  { category: "Шкафы", title: "Витрина «Windsor»", material: "Орех, стекло", price: "256 000 ₽", img: wWindsor },
  { category: "Шкафы", title: "Гардероб «Buckingham»", material: "Массив дуба", price: "286 000 ₽", img: wBuckingham },
  { category: "Шкафы", title: "Шкаф «Kensington»", material: "Орех, фрезеровка", price: "224 000 ₽", img: wKensington },
  { category: "Шкафы", title: "Сервант «Chelsea»", material: "Дуб, латунь", price: "168 000 ₽", img: wChelsea },
  { category: "Кресла", title: "Кресло «Belmont»", material: "Орех, велюр", price: "96 500 ₽", img: cBelmont },
  { category: "Кресла", title: "Кресло «Ascot»", material: "Дуб, кожа", price: "112 000 ₽", img: cAscot },
  { category: "Кресла", title: "Кресло «Mayfair»", material: "Орех, бархат", price: "124 000 ₽", img: cMayfair },
  { category: "Кресла", title: "Кресло «Soho»", material: "Дуб, лён", price: "88 000 ₽", img: cSoho },
  { category: "Кресла", title: "Кресло «Notting»", material: "Орех, шерсть", price: "104 000 ₽", img: cNotting },
  { category: "Кресла", title: "Кресло «Richmond»", material: "Массив дуба, кожа", price: "138 000 ₽", img: cRichmond },
  { category: "Спальни", title: "Коллекция «Florence»", material: "Орех, фрезеровка", price: "от 412 000 ₽", img: bFlorence },
  { category: "Спальни", title: "Коллекция «Verona»", material: "Массив дуба", price: "от 386 000 ₽", img: bVerona },
  { category: "Спальни", title: "Коллекция «Milano»", material: "Орех, латунь", price: "от 458 000 ₽", img: bMilano },
  { category: "Спальни", title: "Коллекция «Siena»", material: "Дуб, патина", price: "от 372 000 ₽", img: bSiena },
  { category: "Спальни", title: "Коллекция «Roma»", material: "Орех, кожа", price: "от 496 000 ₽", img: bRoma },
  { category: "Гостиные", title: "Коллекция «Heritage Classic»", material: "Орех, лён", price: "от 524 000 ₽", img: lHeritage },
  { category: "Гостиные", title: "Коллекция «Provence»", material: "Дуб, велюр", price: "от 478 000 ₽", img: lProvence },
  { category: "Гостиные", title: "Коллекция «Saint Germain»", material: "Орех, бархат", price: "от 612 000 ₽", img: lSaintGermain },
  { category: "Гостиные", title: "Коллекция «Loire»", material: "Массив дуба", price: "от 446 000 ₽", img: lLoire },
  { category: "Гостиные", title: "Коллекция «Bordeaux»", material: "Орех, шерсть", price: "от 568 000 ₽", img: lBordeaux },
  { category: "Гостиные", title: "Коллекция «Marais»", material: "Дуб, лён", price: "от 492 000 ₽", img: lMarais },
  { category: "Гостиные", title: "Коллекция «Lyon»", material: "Орех, латунь", price: "от 584 000 ₽", img: lLyon },
];

const categories = ["Все", "Столы", "Диваны", "Шкафы", "Кресла", "Спальни", "Гостиные"];

export const Featured = () => {
  const [active, setActive] = useState("Все");
  const filtered = active === "Все" ? items : items.filter((i) => i.category === active);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container-hw">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <AnimateIn className="max-w-xl">
            <span className="eyebrow">Избранные изделия</span>
            <div className="section-divider mt-6" />
            <h2 className="serif mt-8 text-3xl text-primary sm:text-4xl lg:text-5xl">
              Каталог мебели Heritage Wood
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <Link href="/contacts" className="btn-ghost">Заказать подбор</Link>
          </AnimateIn>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-2 gap-y-3 border-b border-border pb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i, idx) => (
            <AnimateIn key={i.title} delay={(idx % 3) * 0.08}>
              <article className="group">
                <div className="aspect-[4/5] overflow-hidden bg-surface">
                  <Image
                    src={i.img}
                    alt={i.title}
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="img-cover group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    placeholder="blur"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="serif text-xl leading-tight text-primary">{i.title}</h3>
                    <div className="label mt-2">
                      {i.material}
                    </div>
                  </div>
                  <div className="serif text-lg text-primary whitespace-nowrap">{i.price}</div>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
};
