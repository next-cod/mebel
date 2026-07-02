import heroImg from "@/src/assets/hero-living.jpg";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/src/components/ui/AnimateIn";

export const Hero = () => (
  <section className="relative overflow-hidden bg-background lg:min-h-[calc(100vh-88px)] lg:flex lg:items-center">
    <div className="container-hw grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-10 lg:py-12">
      <div className="lg:col-span-5 flex flex-col justify-center">
        <AnimateIn delay={0}>
          <span className="eyebrow">Мебельная студия – с 1998 года</span>
          <div className="section-divider mt-5" />
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="serif mt-6 text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
            Мебель,<br /> которая создаёт<br /> характер дома
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Heritage Wood – деревянная мебель для интерьеров, где важны качество, форма и долговечность.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/collections" className="btn-primary">Смотреть коллекцию</Link>
            <Link href="/about" className="btn-ghost">О компании</Link>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.4}>
          <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-border pt-6">
            {[
              { k: "27", v: "лет мастерства" },
              { k: "1200+", v: "интерьеров" },
              { k: "10", v: "лет гарантии" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="serif text-3xl text-primary">{s.k}</dt>
                <dd className="label mt-2">{s.v}</dd>
              </div>
            ))}
          </dl>
        </AnimateIn>
      </div>

      <div className="hero-image-in lg:col-span-7 lg:flex lg:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface lg:aspect-[5/6] lg:max-h-[78vh]">
          <Image
            src={heroImg}
            alt="Классическая гостиная с деревянной мебелью Heritage Wood"
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 60vw, 100vw"
            priority
            placeholder="blur"
          />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-cream">
            <div className="bg-primary/80 px-5 py-3 backdrop-blur-sm">
              <div className="text-xs text-primary-foreground/70">
                Коллекция
              </div>
              <div className="serif text-xl text-primary-foreground">Saint Germain</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
