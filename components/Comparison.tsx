"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Icon } from "./ui/Icon";
import { SectionReveal } from "./motion";
import { comparison } from "@/lib/content";

const columnLeft: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0 },
  },
};

const columnRight: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
  },
};

export function Comparison() {
  return (
    <section id="comparison" className="scroll-mt-20 py-20 lg:py-24">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow="Comparación"
            title={<span className="text-gradient">{comparison.title}</span>}
            subtitle="La diferencia no está en lo que prometemos, sino en cómo lo cumplimos."
          />
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            variants={columnLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="mb-6 text-center text-lg font-medium text-muted sm:text-xl">
              {comparison.otherTitle}
            </h3>
            <ul className="space-y-4">
              {comparison.items.map((item, index) => (
                <li
                  key={`${item.other}-${index}`}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur"
                >
                  <Icon
                    name="x"
                    strokeWidth={2.5}
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent/70"
                  />
                  <span className="text-sm leading-relaxed text-muted">{item.other}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={columnRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="mb-6 text-center text-lg font-medium text-foreground sm:text-xl">
              {comparison.ourTitle}
            </h3>
            <ul className="space-y-4">
              {comparison.items.map((item, index) => (
                <li
                  key={`${item.ours}-${index}`}
                  className="flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/[0.04] p-4 backdrop-blur"
                >
                  <Icon
                    name="check"
                    strokeWidth={2.5}
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  />
                  <span className="text-sm leading-relaxed text-foreground">
                    {item.ours}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
