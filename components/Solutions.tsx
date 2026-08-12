"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Icon, PhosphorStar, type IconName } from "./ui/Icon";
import { InfiniteMarquee } from "./ui/InfiniteMarquee";
import { SectionReveal, staggerItem } from "./motion";
import { solutions, theme } from "@/lib/content";

const marqueeItems = [
  "Diseño Web",
  "Wep App",
  "Email Marketing",
  "Landing Page",
  "Dashboard",
];

function MarqueePill({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-[30px] border py-2 pr-6 pl-2"
      style={{
        backgroundColor: "#0d0d0d",
        borderColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-xl bg-[#141414]">
        <PhosphorStar className="h-5 w-5 text-[#FB64B6]" />
      </span>
      <span className="text-xl font-medium leading-[1.5em] tracking-tight text-[#999999]">
        {label}
      </span>
    </div>
  );
}

function PillsMarquee() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0d0d0d] py-10">
      <div className="flex flex-col gap-0">
        <InfiniteMarquee direction="left" duration={25}>
          {marqueeItems.map((item) => (
            <MarqueePill key={item} label={item} />
          ))}
        </InfiniteMarquee>
        <InfiniteMarquee direction="right" duration={25}>
          {marqueeItems.map((item) => (
            <MarqueePill key={item} label={item} />
          ))}
        </InfiniteMarquee>
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-20 py-20 lg:py-24">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow="Soluciones"
            title={<span className="text-gradient">Lo que hacemos</span>}
            subtitle="Combinamos diseño, tecnología y marketing para convertir visitantes en clientes."
          />
        </SectionReveal>

        <div className="mb-12 lg:mb-16">
          <PillsMarquee />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              animateBorder
              variants={staggerItem(index)}
              className="p-6 sm:p-8"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  backgroundColor: "rgba(79, 57, 246, 0.12)",
                  color: theme.indigo,
                }}
              >
                <Icon name={solution.icon as IconName} className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-foreground">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {solution.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
