"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal, fadeUp } from "./motion";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section id="problema" className="section-depth-even scroll-mt-20 py-20 lg:py-24">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow={problem.eyebrow}
            title={<span className="text-gradient">{problem.headline}</span>}
          />
        </SectionReveal>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex items-center"
          >
            <h2 className="text-4xl font-medium leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {problem.headline}{" "}
              <span className="text-gradient italic pr-2 [box-decoration-break:clone]">
                {problem.headlineHighlight}
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            {problem.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
