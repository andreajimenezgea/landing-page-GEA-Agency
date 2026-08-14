"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./motion";
import { Icon } from "./ui/Icon";
import { team } from "@/lib/content";

export function Team() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const [order, setOrder] = useState(() => team.members.map((_, i) => i));

  const n = team.members.length;
  const step = cardWidth + 16;
  const animatingRef = useRef(false);

  const x = useMotionValue(0);

  const founder = team.founder;

  const finishAnimating = useCallback(() => {
    animatingRef.current = false;
  }, []);

  const scrollSlider = useCallback(
    (direction: "left" | "right") => {
      const current = x.get();
      const target = direction === "right" ? current - step : current + step;
      if (Math.abs(target - current) < 2) return;

      if (direction === "right") {
        if (current <= -((n - 1) * step) + 2) {
          setOrder((prev) => [...prev.slice(1), prev[0]]);
          x.set(current + step);
        }
      } else if (current >= -2) {
        setOrder((prev) => [prev[n - 1], ...prev.slice(0, n - 1)]);
        x.set(current - step);
      }

      const from = x.get();
      const end = from + (direction === "right" ? -step : step);

      if (prefersReducedMotion) {
        x.set(end);
        return;
      }

      animatingRef.current = true;
      animate(x, end, {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        onComplete: finishAnimating,
        onStop: finishAnimating,
      });
    },
    [n, step, prefersReducedMotion, x, finishAnimating]
  );

  const updateScrollState = useCallback(
    (currentX: number) => {
      setCanScrollLeft(currentX < -2);
      setCanScrollRight(currentX > -((n - 1) * step) + 2);
    },
    [n, step]
  );

  const updateCardOpacity = useCallback((currentX: number) => {
    const container = containerRef.current;
    const track = sliderRef.current;
    if (!container || !track) return;

    const center = container.clientWidth / 2;

    track.querySelectorAll<HTMLElement>(":scope > div").forEach((card) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2 + currentX;
      const distance = Math.abs(cardCenter - center);
      const factor = distance / (container.clientWidth * 0.8);
      const opacity = Math.max(0.25, 1 - factor);
      const scale = Math.max(0.9, 1 - factor * 0.1);
      card.style.opacity = String(opacity);
      card.style.transform = `scale(${scale})`;
    });
  }, []);

  const onXChange = useCallback(
    (latest: number) => {
      if (!animatingRef.current) {
        if (latest <= -((n - 1) * step) - step / 2) {
          setOrder((prev) => [...prev.slice(1), prev[0]]);
          x.set(latest + step);
          return;
        }
        if (latest > -step / 2) {
          setOrder((prev) => [prev[n - 1], ...prev.slice(0, n - 1)]);
          x.set(latest - step);
          return;
        }
      }
      updateScrollState(latest);
      if (!prefersReducedMotion) updateCardOpacity(latest);
    },
    [n, step, x, prefersReducedMotion, updateScrollState, updateCardOpacity]
  );

  useMotionValueEvent(x, "change", onXChange);

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

  useEffect(() => {
    if (!prefersReducedMotion) updateCardOpacity(x.get());
  }, [cardWidth, prefersReducedMotion, updateCardOpacity, x]);

  return (
    <section id="team" className="scroll-mt-20 py-24 sm:py-32">
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
            <Card animateBorder wrapperClassName="md:col-span-4 aspect-[4/5]">
              <Image
                src={founder.avatar}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale contrast-125 brightness-90"
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
              FILA 2: TEAM SLIDER (Ancho completo)
             ═══════════════════════════════════════════════ */}
          <div ref={containerRef} className="relative w-full overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="flex gap-4 pb-4 w-max select-none cursor-grab active:cursor-grabbing touch-pan-y"
              drag={prefersReducedMotion ? false : "x"}
              dragConstraints={{ left: -((n - 1) * step) - step, right: step }}
              dragElastic={0.05}
              dragMomentum={false}
              dragTransition={{ power: 0.2, timeConstant: 200 }}
              onDragStart={() => {
                animatingRef.current = false;
              }}
              onDragEnd={() => {
                animatingRef.current = true;
                const page = Math.round(-x.get() / step);
                animate(x, -page * step, {
                  type: "spring",
                  stiffness: 350,
                  damping: 40,
                  onComplete: finishAnimating,
                  onStop: finishAnimating,
                });
              }}
              style={{ x }}
            >
              {order.map((idx) => {
                const member = team.members[idx];
                return (
                  <div
                    key={member.name}
                    className="shrink-0 h-full transition-[opacity,transform] duration-500 will-change-transform"
                    style={{ width: cardWidth }}
                  >
                    <Card animateBorder>
                      <div className="relative aspect-[3/4] overflow-hidden">
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
                );
              })}
            </motion.div>

            {/* Flechas de navegación */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0B0F19] to-transparent sm:w-24"
            />
            <button
              type="button"
              onClick={() => scrollSlider("left")}
              aria-label="Anterior"
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-[#0F172A]/90 text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] ${canScrollLeft ? "" : "pointer-events-none opacity-40"}`}
            >
              <Icon name="chevron-left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollSlider("right")}
              aria-label="Siguiente"
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/20 bg-[#0F172A]/90 text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] ${canScrollRight ? "" : "pointer-events-none opacity-40"}`}
            >
              <Icon name="chevron-right" className="h-5 w-5" />
            </button>
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