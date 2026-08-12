"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./motion";
import { Icon } from "./ui/Icon";
import { team } from "@/lib/content";

const GAP = 24;

const CAROUSEL_BREAKPOINTS = [
  { media: "(min-width: 1024px)", perView: 3 },
  { media: "(min-width: 768px)", perView: 2 },
  { media: "(max-width: 767.98px)", perView: 1 },
];

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const queries = CAROUSEL_BREAKPOINTS.map(({ media }) =>
      window.matchMedia(media)
    );
    const update = () => {
      const active = queries.find((query) => query.matches);
      const breakpoint =
        CAROUSEL_BREAKPOINTS.find(({ media }) => media === active?.media) ??
        CAROUSEL_BREAKPOINTS[CAROUSEL_BREAKPOINTS.length - 1];
      setPerView(breakpoint.perView);
    };
    update();
    queries.forEach((query) => query.addEventListener("change", update));
    return () =>
      queries.forEach((query) => query.removeEventListener("change", update));
  }, []);

  return perView;
}

export function Team() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, team.length - perView);
  const clampedIndex = Math.min(index, maxIndex);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const measure = () => {
      const width = (viewport.offsetWidth - GAP * (perView - 1)) / perView;
      setCardWidth(Math.max(0, width));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [perView]);

  const offset = clampedIndex * (cardWidth + GAP);

  return (
    <section id="team" className="scroll-mt-20 py-20 lg:py-24">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow="Equipo"
            title={<span className="text-gradient">Conoce al equipo</span>}
            subtitle="Talento senior, sin intermediarios: las personas que construyen tu marca."
          />
        </SectionReveal>

        <SectionReveal>
          <div className="relative">
            <div
              ref={viewportRef}
              className="overflow-hidden"
              role="region"
              aria-label="Equipo carousel"
            >
              <motion.div
                className="flex"
                style={{ gap: GAP }}
                animate={{ x: -offset }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {team.map((member) => (
                  <Card
                    key={member.name}
                    animateBorder
                    style={{ width: cardWidth || undefined }}
                    className="shrink-0 p-6 text-center sm:p-8"
                  >
                    <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/10">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{member.role}</p>
                  </Card>
                ))}
              </motion.div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setIndex((current) => Math.max(0, current - 1))}
                disabled={index === 0}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors duration-300 hover:border-white/20 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-transparent"
              >
                <Icon name="chevron-left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setIndex((current) => Math.min(maxIndex, current + 1))
                }
                disabled={clampedIndex >= maxIndex}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-foreground transition-colors duration-300 hover:border-white/20 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-transparent"
              >
                <Icon name="chevron-right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
