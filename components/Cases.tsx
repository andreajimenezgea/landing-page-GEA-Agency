"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { AnimatedIcon } from "./ui/AnimatedIcon";
import { cases } from "@/lib/content";
import type { IconName } from "./ui/Icon";

const iconMap: Record<string, { name: IconName; animation: "pulse" | "spin" | "draw" | "float" }> = {
  building: { name: "gear", animation: "draw" },
  briefcase: { name: "bolt", animation: "draw" },
  graduation: { name: "star", animation: "pulse" },
  rocket: { name: "arrow", animation: "draw" },
};

export function Cases() {
  return (
    <section id="cases" className="section-depth-even scroll-mt-20 py-20 lg:py-28 relative overflow-hidden">
      {/* Glow ambiental */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-blue-600/8 blur-[140px] pointer-events-none rounded-full"
      />

      <Container>
        {/* ── Header ── */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3.5 py-1 rounded-full tracking-widest uppercase">
            {cases.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              {cases.title}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base leading-relaxed">
            {cases.subtitle}
          </p>
        </div>

        {/* ── Grid 4 Columnas ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {cases.cases.map((successCase, index) => {
            const iconConfig = iconMap[successCase.icon ?? "rocket"] ?? { name: "arrow" as IconName, animation: "draw" as const };
            return (
              <motion.div
                key={successCase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full min-h-[420px]"
              >
                <Card
                  animateBorder
                  glow
                  className="p-8 text-center flex flex-col items-center justify-between h-full min-h-[420px]"
                >
                  {/* Bloque Superior - Logo o Ícono + Tag (fijo) */}
                  <div className="flex-none flex flex-col items-center">
                    {successCase.logo ? (
                      <div className="flex items-center justify-center w-28 h-28 rounded-2xl bg-blue-950/40 border border-cyan-500/30 mb-4 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-all duration-300 overflow-hidden">
                        <Image
                          src={successCase.logo}
                          alt={successCase.name}
                          width={96}
                          height={96}
                          className="object-contain w-20 h-20"
                          unoptimized
                        />
                      </div>
                    ) : (
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
                    )}
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-2.5 py-0.5 rounded-full">
                      {successCase.sector}
                    </span>
                  </div>

                  {/* Bloque Central - Métrica + Descripción (flex-1) */}
                  <div className="flex-1 flex flex-col justify-center items-center py-6">
                    <div className="font-extrabold text-4xl bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent mb-3 leading-none">
                      {successCase.headline}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {successCase.description}
                    </p>
                  </div>

                  {/* Bloque Inferior - Cliente (fijo, anclado abajo) */}
                  <div className="flex-none pt-4 border-t border-white/[0.06] w-full">
                    <p className="text-sm font-bold text-white">
                      {successCase.name}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}