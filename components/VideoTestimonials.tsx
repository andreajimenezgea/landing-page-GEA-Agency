"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { videoTestimonials, type VideoTestimonial } from "@/lib/content";
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

function VideoCard({
  video,
  autoPlay,
  width,
}: {
  video: VideoTestimonial;
  autoPlay?: boolean;
  width: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card
      animateBorder
      style={{ width: width || undefined }}
      className="shrink-0"
    >
      <div className="relative aspect-video w-full">
        <video
          ref={videoRef}
          src={video.video}
          title={`Testimonio de ${video.name}`}
          playsInline
          preload="metadata"
          {...(autoPlay ? { autoPlay: true, muted: true } : {})}
          onClick={(e) => {
            const vid = e.currentTarget;
            if (vid.paused) vid.play();
            else vid.pause();
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="aspect-video w-full rounded-xl border-0 cursor-pointer"
        />
        {!isPlaying && (
          <Image
            src={video.image}
            alt={`${video.name} — testimonio en video`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            draggable={false}
            onClick={() => videoRef.current?.play()}
            className="absolute inset-0 cursor-pointer rounded-xl object-cover"
          />
        )}
      </div>
      <div className="min-h-20 p-5">
        <p className="line-clamp-1 text-sm font-medium text-foreground">
          {video.name}
        </p>
        {video.role && (
          <p className="line-clamp-1 mt-1 text-xs text-muted">
            {video.role}
          </p>
        )}
      </div>
    </Card>
  );
}

export function VideoTestimonials() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, videoTestimonials.items.length - perView);
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
    <section id="testimonios" className="section-depth-odd scroll-mt-20 py-5 sm:py-7 lg:py-10">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow={videoTestimonials.eyebrow}
            title={
              <span className="text-gradient">
                {videoTestimonials.title}
              </span>
            }
            subtitle={videoTestimonials.subtitle}
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
              {videoTestimonials.items.map((video, index) => (
                <VideoCard
                  key={index}
                  video={video}
                  autoPlay={index === 0}
                  width={cardWidth}
                />
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
