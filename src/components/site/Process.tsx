import { AnimateIn } from "@/src/components/ui/AnimateIn";

const steps = [
  { n: "01", title: "Консультация", text: "Обсуждаем задачу, стиль интерьера, функции и бюджет. Подбираем коллекции и материалы." },
  { n: "02", title: "Замер", text: "Дизайнер выезжает на объект, фиксирует размеры и особенности помещения." },
  { n: "03", title: "Производство", text: "Изготовление в собственной мастерской: от заготовки до финишной обработки." },
  { n: "04", title: "Доставка и установка", text: "Бережная упаковка, доставка собственным транспортом и установка в интерьере." },
];

export const Process = () => (
  <section className="bg-surface py-24 lg:py-32">
    <div className="container-hw">
      <AnimateIn>
        <div className="max-w-2xl">
          <span className="eyebrow">Процесс работы</span>
          <div className="section-divider mt-6" />
          <h2 className="serif mt-8 text-3xl text-primary sm:text-4xl lg:text-5xl">
            От первого разговора до готового интерьера
          </h2>
        </div>
      </AnimateIn>

      <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <AnimateIn key={s.n} delay={idx * 0.1}>
            <div className="bg-surface p-8 lg:p-10 h-full">
              <div className="serif text-3xl text-brass">{s.n}</div>
              <div className="mt-6 h-px w-10 bg-border" />
              <h3 className="serif mt-6 text-xl text-primary">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  </section>
);
