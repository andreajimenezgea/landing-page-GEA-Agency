"use client";

import { Card } from "./ui/Card";
import { Container } from "./ui/Container";
import { SectionReveal } from "./motion";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="proceso" className="section-depth-even scroll-mt-20 py-20 lg:py-28 relative overflow-hidden">
      {/* Glow ambiental */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full"
      />

      <Container>
        {/* ── Header ── */}
        <SectionReveal>
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full tracking-widest uppercase">
              {process.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Cuatro fases.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                De la radiografía al escalado.
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base leading-relaxed">
              {process.subtitle}
            </p>
          </div>
        </SectionReveal>

        {/* ── Grid 4 Columnas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {process.steps.map((step, i) => (
            <Card
              key={step.number}
              animateBorder
              glow
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 md:p-7 flex flex-col h-full min-h-[260px]"
            >
              <span className="text-5xl md:text-6xl font-extrabold italic bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent leading-none block">
                {step.number}
              </span>
              <h4 className="mt-4 text-lg font-bold text-white">{step.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}