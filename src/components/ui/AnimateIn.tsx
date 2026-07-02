"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimateIn = ({ children, delay = 0, className }: AnimateInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animate-in-el${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};
