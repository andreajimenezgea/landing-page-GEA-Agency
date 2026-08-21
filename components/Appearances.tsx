"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal, staggerItem } from "./motion";
import { appearances } from "@/lib/content";

export function Appearances() {
  return (
    <section id="apariciones" className="section-depth-odd scroll-mt-20 py-4 lg:py-10">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow={appearances.eyebrow}
            title={<span className="text-gradient">{appearances.title}</span>}
            subtitle={appearances.subtitle}
          />
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {appearances.items.map((item, index) => (
            <Card
              key={item.title}
              animateBorder
              variants={staggerItem(index)}
              className="flex flex-col p-6 sm:p-8"
            >
              <span className="mb-3 text-xs font-medium uppercase tracking-wider text-brand">
                {item.type}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
