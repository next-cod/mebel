import tables from "@/src/assets/coll-tables.jpg";
import sofas from "@/src/assets/coll-sofas.jpg";
import wardrobes from "@/src/assets/coll-wardrobes.jpg";
import chairs from "@/src/assets/coll-chairs.jpg";
import bedrooms from "@/src/assets/coll-bedrooms.jpg";
import living from "@/src/assets/coll-living.jpg";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/src/components/ui/AnimateIn";

const items = [
  { title: "Столы", count: "8 моделей", img: tables },
  { title: "Диваны", count: "12 моделей", img: sofas },
  { title: "Шкафы", count: "8 моделей", img: wardrobes },
  { title: "Кресла", count: "6 моделей", img: chairs },
  { title: "Спальни", count: "5 коллекций", img: bedrooms },
  { title: "Гостиные", count: "7 коллекций", img: living },
];

export const Collections = () => (
  <section className="bg-background py-24 lg:py-32">
    <div className="container-hw">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <AnimateIn className="max-w-xl">
          <span className="eyebrow">Коллекции</span>
          <div className="section-divider mt-6" />
          <h2 className="serif mt-8 text-3xl text-primary sm:text-4xl lg:text-5xl">
            Шесть направлений – одна философия материала
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            От обеденного стола до системы хранения – каждая категория проектируется как часть единого интерьера.
          </p>
        </AnimateIn>
      </div>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i, idx) => (
          <AnimateIn key={i.title} delay={idx * 0.07}>
            <Link
              href="/products"
              className="card-collection group bg-background p-5 block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface">
                <Image
                  src={i.img}
                  alt={i.title}
                  loading={idx < 3 ? "eager" : "lazy"}
                  className="img-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h3 className="serif text-xl text-primary">{i.title}</h3>
                  <div className="label mt-1">
                    {i.count}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-primary transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </div>
  </section>
);
