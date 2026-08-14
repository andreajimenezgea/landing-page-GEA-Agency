"use client";

import { Card } from "./ui/Card";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { AnimatedIcon } from "./ui/AnimatedIcon";
import { SectionReveal } from "./motion";
import { method } from "@/lib/content";
import type { IconName } from "./ui/Icon";

const pillarIcons: Record<string, { name: IconName; animation: "pulse" | "spin" | "draw" | "float" }> = {
  star: { name: "star", animation: "pulse" },
  eye: { name: "gear", animation: "spin" },
  bolt: { name: "bolt", animation: "draw" },
};

export function Method() {
  const pillars = method.pillars;
  const pilar01 = pillars[0];
  const pilar02 = pillars[1];
  const pilar03 = pillars[2];

  return (
    <section id="method" className="section-depth-odd scroll-mt-20 py-20 lg:py-28 relative overflow-hidden">
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
              {method.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Un solo sistema. <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                Tres piezas. Resultados medibles.
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-base leading-relaxed">
              {method.subtitle}
            </p>
          </div>
        </SectionReveal>

        {/* ── Nivel Superior: Pilares 01 y 02 ── */}
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {[pilar01, pilar02].map((pillar, i) => {
              const iconConfig = pillarIcons[pillar.icon] ?? { name: "star" as IconName, animation: "draw" as const };
              return (
                <Card
                  key={pillar.number}
                  animateBorder
                  glow
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="p-6 md:p-7 flex flex-col justify-between min-h-[280px]"
                >
                  {/* Grid pattern */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.015] pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/40 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                        <AnimatedIcon
                          name={iconConfig.name}
                          animation={iconConfig.animation}
                          size={22}
                          strokeWidth={2.5}
                          className="text-cyan-400"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">
                          Pilar 0{ i + 1 }
                        </span>
                        <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="relative z-10 bg-black/20 border border-white/[0.06] rounded-xl p-4 mt-5">
                    <span className="text-[10px] font-bold text-cyan-400/70 uppercase tracking-widest block mb-1">
                      RESULTADO
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.result}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </SectionReveal>

        {/* ── Nivel Inferior: Pilar 03 Banner Completo ── */}
        {pilar03 && (
          <SectionReveal>
            <Card
              animateBorder
              glow
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 md:p-8 lg:p-10"
            >
              {/* Badge destacado */}
              <div className="absolute top-0 right-0 bg-cyan-500 text-[#0B0F19] font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                NUESTRO PUNTO FUERTE
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Lado Izquierdo: Info */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                      <AnimatedIcon
                        name={pillarIcons[pilar03.icon]?.name ?? "bolt"}
                        animation={pillarIcons[pilar03.icon]?.animation ?? "draw"}
                        size={26}
                        strokeWidth={2.5}
                        className="text-cyan-400"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest block">
                        Pilar 03
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {pilar03.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-lg">
                    {pilar03.description}
                  </p>
                </div>

                {/* Lado Derecho: Resultado + Métricas */}
                <div className="space-y-4">
                  <div className="bg-black/20 border border-white/[0.06] rounded-2xl p-5">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                      RESULTADO
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">{pilar03.result}</p>
                  </div>

                  {pilar03.metrics && (
                    <div className="grid grid-cols-2 gap-3">
                      {pilar03.metrics.map((m) => (
                        <div
                          key={m.value}
                          className="bg-[#0B0F19]/70 border border-white/[0.06] rounded-2xl p-4 text-center"
                        >
                          <span className="text-2xl md:text-3xl font-extrabold text-white block leading-none">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-white/40 uppercase tracking-wider mt-1.5 block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </SectionReveal>
        )}

        {/* ── CTA ── */}
        <SectionReveal className="mt-14 flex justify-center">
          <Button href={method.cta.href} size="lg">
            {method.cta.label}
          </Button>
        </SectionReveal>
      </Container>
    </section>
  );
}
