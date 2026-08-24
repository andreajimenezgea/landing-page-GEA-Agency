"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { AnimatedIcon } from "./ui/AnimatedIcon";
import { SectionReveal } from "./motion";
import { suitability } from "@/lib/content";
import type { IconName } from "./ui/Icon";

const iconMap: Record<string, { name: IconName; animation: "pulse" | "spin" | "draw" | "float" }> = {
  bolt: { name: "bolt", animation: "draw" },
  star: { name: "star", animation: "pulse" },
  eye: { name: "arrow", animation: "float" },
  gear: { name: "gear", animation: "spin" },
  check: { name: "check", animation: "draw" },
};

export function Suitability() {
  return (
    <section id="para-quien" className="section-depth-even scroll-mt-20 py-4 lg:py-10 relative overflow-hidden">
      {/* Glow ambiental */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/8 blur-[140px] pointer-events-none rounded-full"
      />

      <Container>
        {/* ── Header ── */}
        <SectionReveal>
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full tracking-widest uppercase">
              {suitability.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                {suitability.title}
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base leading-relaxed">
              {suitability.subtitle}
            </p>
          </div>
        </SectionReveal>

        {/* ── Grid 4 Columnas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto items-stretch">
          {suitability.criteria.map((item, index) => {
            const iconConfig = iconMap[item.icon] ?? { name: "star" as IconName, animation: "draw" as const };
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full min-h-[280px]"
              >
                <Card
                  animateBorder
                  glow
                  className="p-6 text-center flex flex-col items-center justify-start h-full min-h-[280px]"
                >
                  {/* Ícono animado */}
                  <div className="flex-none flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-950/40 border border-cyan-500/30 text-cyan-400 mb-4 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <AnimatedIcon
                        name={iconConfig.name}
                        animation={iconConfig.animation}
                        size={36}
                        strokeWidth={2.5}
                        className="text-cyan-400"
                      />
                    </motion.div>
                  </div>

                  {/* Texto */}
                  <div className="flex-1 flex flex-col items-center py-4">
                    <h3 className="flex-none text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Métrica opcional */}
                  {item.metric && (
                    <div className="flex-none mt-4 w-full bg-black/20 border border-white/[0.06] rounded-xl p-3">
                      <span className="text-lg font-extrabold text-white block leading-none">
                        {item.metric.value}
                      </span>
                      <span className="text-[9px] text-white/40 uppercase tracking-wider mt-1 block">
                        {item.metric.label}
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
