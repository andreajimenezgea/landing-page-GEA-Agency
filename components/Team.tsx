"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./motion";
import { Icon } from "./ui/Icon";
import { team } from "@/lib/content";

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const founder = team.founder;
  const members = team.members;
  const n = members.length;

  // Duplicamos una vez para loop infinito (como InfiniteMarquee)
  const clonedMembers = [...members, ...members];

  // Medir cardWidth
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaMd = window.matchMedia("(min-width: 768px)");
    const mediaSm = window.matchMedia("(min-width: 640px)");

    const measure = () => {
      const factor = mediaMd.matches ? 0.23 : mediaSm.matches ? 0.45 : 0.8;
      setCardWidth(Math.floor(container.clientWidth * factor));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    mediaMd.addEventListener("change", measure);
    mediaSm.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      mediaMd.removeEventListener("change", measure);
      mediaSm.removeEventListener("change", measure);
    };
  }, []);

  // Inicializar
  useEffect(() => {
    if (cardWidth > 0) {
      setMounted(true);
    }
  }, [cardWidth]);

  // Hover pause/resume (solo controla animationPlayState)
  const onHover = (entering: boolean) => {
    setIsPaused(entering);
  };

  // Duración de la animación CSS (~60px/s)
  const singleSetWidth = n * (cardWidth + 16);
  const cssDuration = singleSetWidth > 0 ? singleSetWidth / 60 : 25;

  return (
    <section id="team" className="scroll-mt-20 py-5 sm:py-7 lg:py-10">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow={team.eyebrow}
            title={<span className="text-gradient">{team.title}</span>}
            subtitle={team.subtitle}
          />
        </SectionReveal>

        <SectionReveal>
          {/* ═══════════════════════════════════════════════
              FILA 1: CEO BLOCK
             ═══════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mb-16">

            {/* ── Foto CEO ── */}
            <Card animateBorder wrapperClassName="md:col-span-4 aspect-[4/5] group">
              <Image
                src={founder.avatar}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white break-words">
                  {founder.name}
                </h3>
                {founder.handle && (
                  <p className="mt-1 text-sm text-cyan-400/80">{founder.handle}</p>
                )}
              </div>
            </Card>

            {/* ── Info CEO ── */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white break-words">
                  {founder.name}
                </h2>
                <p className="mt-1 text-muted">{founder.role}</p>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/70 break-words">
                  {founder.description}
                </p>
              </div>

              <hr className="border-white/[0.06]" />

              {/* Grid de Especialidades */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card animateBorder glow className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950/40 border border-cyan-500/30 text-cyan-400">
                      <Icon name="gear" className="h-5 w-5 text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Estrategia Digital
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Planificación de medios, campañas de alto presupuesto y dirección creativa para marcas top.
                  </p>
                </Card>
                <Card animateBorder glow className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950/40 border border-cyan-500/30 text-cyan-400">
                      <Icon name="star" className="h-5 w-5 text-cyan-400" strokeWidth={2.5} />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      Formación & Docencia
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Profesora en la Universitat de Barcelona. Formación de portavoces y content creators.
                  </p>
                </Card>
              </div>

              {/* Tags de clientes */}
              {founder.tags && founder.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              FILA 2: TEAM SLIDER - CSS MARQUEE PURO (cero parpadeo)
             ═══════════════════════════════════════════════ */}
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden"
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
          >
            {mounted && (
              <div className="flex gap-4 pb-4 w-max">
                {/* Set 1 */}
                <div
                  className="flex gap-4"
                  style={{
                    animationName: "team-scroll",
                    animationDuration: `${cssDuration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: isPaused ? "paused" : "running",
                  }}
                >
                  {clonedMembers.map((member, idx) => (
                    <div
                      key={`${member.name}-${idx}`}
                      className="shrink-0 h-full transition-[opacity,transform] duration-500 will-change-transform"
                      style={{ width: cardWidth }}
                    >
                      <Card animateBorder whileHover={{}}>
                        <div className="relative aspect-[3/4] overflow-hidden group">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 80vw, 23vw"
                            className="object-cover grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent" />

                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                            <h4 className="text-base font-bold text-white break-words">
                              {member.name}
                            </h4>
                            <p className="mt-0.5 text-xs text-slate-400 break-words">
                              {member.role}
                            </p>
                            {member.handle && (
                              <p className="mt-1 text-[11px] text-cyan-400/70 break-words">
                                {member.handle}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>

                {/* Set 2 (duplicado) para loop infinito */}
                <div
                  className="flex gap-4"
                  style={{
                    animationName: "team-scroll",
                    animationDuration: `${cssDuration}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: isPaused ? "paused" : "running",
                    animationDelay: `-${cssDuration / 2}s`,
                  }}
                  aria-hidden="true"
                >
                  {clonedMembers.map((member, idx) => (
                    <div
                      key={`${member.name}-${idx}-dup`}
                      className="shrink-0 h-full transition-[opacity,transform] duration-500 will-change-transform"
                      style={{ width: cardWidth }}
                    >
                      <Card animateBorder whileHover={{}}>
                        <div className="relative aspect-[3/4] overflow-hidden group">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 80vw, 23vw"
                            className="object-cover grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent" />

                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                            <h4 className="text-base font-bold text-white break-words">
                              {member.name}
                            </h4>
                            <p className="mt-0.5 text-xs text-slate-400 break-words">
                              {member.role}
                            </p>
                            {member.handle && (
                              <p className="mt-1 text-[11px] text-cyan-400/70 break-words">
                                {member.handle}
                              </p>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fade edges (como InfiniteMarquee) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B0F19] to-transparent sm:w-24"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0B0F19] to-transparent sm:w-24"
            />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}