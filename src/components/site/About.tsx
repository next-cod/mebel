import aboutImg from "@/src/assets/about-craft.jpg";
import Image from "next/image";
import { AnimateIn } from "@/src/components/ui/AnimateIn";

export const About = () => (
  <section className="bg-surface py-24 lg:py-32">
    <div className="container-hw grid gap-16 lg:grid-cols-12">
      <AnimateIn className="lg:col-span-5">
        <div className="aspect-[4/5] overflow-hidden bg-surface-deep">
          <Image
            src={aboutImg}
            alt="Мастер за работой в мастерской Heritage Wood"
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(min-width: 1024px) 40vw, 100vw"
            placeholder="blur"
          />
        </div>
      </AnimateIn>
      <div className="lg:col-span-7 lg:pl-10 flex flex-col justify-center">
        <AnimateIn delay={0.1}>
          <span className="eyebrow">О компании</span>
          <div className="section-divider mt-6" />
          <h2 className="serif mt-8 text-3xl text-primary sm:text-4xl lg:text-5xl">
            Мастерская, в которой каждое изделие&nbsp;– продуманно
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Heritage Wood – семейная мебельная студия, основанная в 1998 году. Мы работаем с массивом дуба,
            ореха и ясеня, сочетая традиционные техники столярного дела с инженерной точностью современного производства.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Каждое изделие проходит ручную обработку, многослойное покрытие натуральными маслами и индивидуальную проверку перед отправкой.
            Мы делаем мебель, которая служит десятилетиями и становится частью истории дома.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
            {[
              { k: "1998", v: "Год основания" },
              { k: "60+", v: "Мастеров" },
              { k: "3", v: "Производства" },
              { k: "EU", v: "Сертификация" },
            ].map((s) => (
              <div key={s.v}>
                <div className="serif text-2xl text-primary">{s.k}</div>
                <div className="label mt-2">{s.v}</div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </div>
  </section>
);
