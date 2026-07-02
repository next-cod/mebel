import { Hero } from "@/src/components/site/Hero";
import { Collections } from "@/src/components/site/Collections";
import { WhyUs } from "@/src/components/site/WhyUs";
import { Process } from "@/src/components/site/Process";
import { CTA } from "@/src/components/site/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <WhyUs />
      <Process />
      <CTA />
    </>
  );
}
