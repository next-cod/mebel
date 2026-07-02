"use client";

import { useState } from "react";
import { toast } from "sonner";
import { AnimateIn } from "@/src/components/ui/AnimateIn";

export const CTA = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка отправлена. Мы свяжемся с вами в течение дня.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container-hw">
        <div className="grid gap-16 lg:grid-cols-12">
          <AnimateIn className="lg:col-span-6">
            <span className="eyebrow">Связаться</span>
            <div className="section-divider mt-6" />
            <h2 className="serif mt-8 text-3xl leading-[1.1] text-primary sm:text-4xl lg:text-5xl">
              Подберите мебель<br /> под ваш интерьер
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Оставьте заявку – наш дизайнер свяжется с вами, чтобы обсудить проект, материалы и сроки.
              Консультация бесплатна и ни к чему не обязывает.
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="label">Шоурум</dt>
                <dd className="serif mt-2 text-lg text-primary">Москва, Малая Дмитровка, 12</dd>
              </div>
              <div>
                <dt className="label">Телефон</dt>
                <dd className="serif mt-2 text-lg text-primary">+7 (495) 120-48-90</dd>
              </div>
              <div>
                <dt className="label">Email</dt>
                <dd className="serif mt-2 text-lg text-primary">studio@heritagewood.ru</dd>
              </div>
              <div>
                <dt className="label">Часы работы</dt>
                <dd className="serif mt-2 text-lg text-primary">Пн – Сб, 10:00 – 20:00</dd>
              </div>
            </dl>

            <div className="mt-12">
              <div className="label">На карте</div>
              <div className="mt-4 aspect-[4/3] w-full overflow-hidden border border-border bg-surface">
                <iframe
                  title="Heritage Wood – шоурум на карте"
                  src="https://yandex.ru/map-widget/v1/?ll=37.610489%2C55.768120&mode=search&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%2C%2012&z=16"
                  width="100%"
                  height="100%"
                  frameBorder={0}
                  loading="lazy"
                  allowFullScreen
                  className="block h-full w-full"
                />
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <form
              onSubmit={onSubmit}
              className="border border-border bg-surface p-8 lg:p-12"
            >
              <h3 className="serif text-2xl text-primary">Оставить заявку</h3>
              <div className="mt-8 space-y-6">
                <div>
                  <label className="label">Имя</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label className="label">Телефон</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="label">Комментарий</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-primary"
                    placeholder="Расскажите коротко о проекте"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-10 w-full">
                Оставить заявку
              </button>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
              </p>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};
