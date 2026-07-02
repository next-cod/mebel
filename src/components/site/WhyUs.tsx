import { Leaf, Hammer, ShieldCheck, Ruler } from "lucide-react";
import { AnimateIn } from "@/src/components/ui/AnimateIn";

const items = [
  {
    icon: Leaf,
    title: "Натуральные материалы",
    text: "Массив дуба, ореха и ясеня. Покрытия – натуральные масла и воск без синтетических добавок.",
  },
  {
    icon: Hammer,
    title: "Ручная обработка",
    text: "Шлифовка, тонировка и сборка выполняются вручную опытными мастерами с многолетним опытом.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    text: "10 лет гарантии на конструкцию каждого изделия и сервисное обслуживание после продажи.",
  },
  {
    icon: Ruler,
    title: "Индивидуальные размеры",
    text: "Адаптируем модели под ваш интерьер – размер, древесину, обивку и фурнитуру.",
  },
];

export const WhyUs = () => (
  <section className="bg-primary py-24 text-primary-foreground lg:py-32">
    <div className="container-hw">
      <AnimateIn>
        <div className="max-w-2xl">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl">
            Качество, в котором уверены поколения
          </h2>
        </div>
      </AnimateIn>

      <div className="mt-16 grid gap-px bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, idx) => (
          <AnimateIn key={it.title} delay={idx * 0.08}>
            <div className="bg-primary p-8 lg:p-10 h-full">
              <it.icon size={28} className="text-brass" strokeWidth={1.4} />
              <h3 className="serif mt-8 text-xl text-primary-foreground">{it.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{it.text}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  </section>
);
