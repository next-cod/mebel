import heroImg from "@/src/assets/hero-living.jpg";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn } from "@/src/components/ui/AnimateIn";

const stats = [
  { k: "28", v: "лет мастерства" },
  { k: "1200+", v: "интерьеров" },
  { k: "10", v: "лет гарантии" },
];

export const Hero = () => (
  <section className="relative overflow-hidden bg-background lg:min-h-[calc(100vh-88px)] lg:flex lg:items-center">
    <div className="container-hw grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-12">
      <div className="lg:col-span-5 flex flex-col justify-center">
        <AnimateIn delay={0}>
          <span className="text-xs uppercase tracking-[0.08em] text-accent">
            Мебельная студия – с 1998 года
          </span>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h1 className="serif mt-7 text-5xl leading-[1.03] text-primary sm:text-[3.25rem] lg:text-[3.5rem] xl:text-[4rem]">
            Мебель<br /> с премиум<br /> характером
          </h1>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            Heritage Wood – деревянная мебель для интерьеров, где важны качество, форма и долговечность.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="/collections" className="btn-primary">Смотреть коллекцию</Link>
            <Link
              href="/about"
              className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
            >
              О компании
            </Link>
          </div>
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

          <div className="absolute left-5 top-5 bg-primary/80 px-4 py-2.5 backdrop-blur-sm sm:left-6 sm:top-6">
            <div className="text-[11px] text-primary-foreground/70">Коллекция</div>
            <div className="serif text-lg text-primary-foreground sm:text-xl">Saint Germain</div>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent px-5 pb-6 pt-20 sm:px-8 sm:pb-8">
            <dl className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.v}>
                  <dt className="serif text-2xl leading-none text-cream sm:text-3xl">{s.k}</dt>
                  <dd className="mt-2 text-[11px] leading-tight text-cream/70">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
);
