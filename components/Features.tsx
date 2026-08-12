"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Icon, type IconName } from "./ui/Icon";
import { SectionReveal, staggerItem } from "./motion";
import { features, theme } from "@/lib/content";

const stepStyles = [
  { backgroundColor: "rgba(79, 57, 246, 0.12)", color: theme.indigo },
  { backgroundColor: "rgba(251, 100, 182, 0.12)", color: theme.brand },
  { backgroundColor: "rgba(255, 34, 14, 0.12)", color: theme.accent },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 lg:py-24">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow="Proceso"
            title={
              <span className="text-gradient">
                No reinventamos la rueda, la optimizamos
              </span>
            }
            subtitle="Un proceso claro y medible para que veas resultados desde el primer día."
          />
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {features.map((feature, index) => {
            const style = stepStyles[index % stepStyles.length];
            return (
              <Card
                key={feature.title}
                animateBorder
                variants={staggerItem(index)}
                className="p-6 sm:p-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={style}
                  >
                    <Icon name={feature.icon as IconName} className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium tracking-widest text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
