"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { videoTestimonials } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/motion";
import { Icon } from "@/components/ui/Icon";

const GAP = 24;

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerView(query.matches ? 2 : 1);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return perView;
}

export function VideoTestimonials() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, videoTestimonials.length - perView);
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

  const step = cardWidth + GAP;
  const offset = clampedIndex * step;
  const maxOffset = maxIndex * step;

  return (
    <section id="testimonios" className="py-24 sm:py-32">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Testimonios"
            title={
              <span className="text-gradient">
                Lo que dicen nuestros clientes
              </span>
            }
            subtitle="Escuchá de primera mano cómo Volt Growth transforma negocios."
          />
        </SectionReveal>
        <SectionReveal className="mt-14">
          <div
            ref={viewportRef}
            className="overflow-hidden"
            role="region"
            aria-label="Testimonios en video carousel"
          >
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              style={{ gap: GAP }}
              drag="x"
              dragConstraints={{ left: -maxOffset, right: 0 }}
              dragElastic={0.1}
              animate={{ x: -offset }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onDragEnd={(_, info) => {
                const swipe = info.offset.x + info.velocity.x * 0.2;
                if (swipe < -step * 0.2) {
                  setIndex((current) => Math.min(maxIndex, current + 1));
                } else if (swipe > step * 0.2) {
                  setIndex((current) => Math.max(0, current - 1));
                }
              }}
            >
              {videoTestimonials.map((video, index) => (
                <Card
                  key={index}
                  animateBorder
                  style={{ width: cardWidth || undefined }}
                  className="shrink-0"
                >
                  <iframe
                    src={video.video}
                    title={video.title}
                    loading="lazy"
                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                    allowFullScreen
                    className="aspect-video w-full rounded-xl border-0"
                  />
                  <div className="p-5">
                    <h3 className="text-sm font-medium text-foreground">
                      {video.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-3">
                      <Image
                        src={video.logo}
                        alt={`Logo de ${video.name}`}
                        width={112}
                        height={32}
                        className="h-6 w-auto"
                      />
                      <p className="text-xs text-muted">
                        <span className="font-medium text-foreground">
                          {video.name}
                        </span>{" "}
                        · {video.role}
                      </p>
                    </div>
                  </div>
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
        </SectionReveal>
      </Container>
    </section>
  );
}
