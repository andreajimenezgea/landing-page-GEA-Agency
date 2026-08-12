"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials, type Testimonial } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionReveal } from "@/components/motion";

interface VerticalMarqueeProps {
  children: ReactNode;
  direction?: "up" | "down";
  duration?: number;
  className?: string;
  maskStyle?: CSSProperties;
}

function VerticalMarquee({
  children,
  direction = "up",
  duration = 80,
  className = "",
  maskStyle,
}: VerticalMarqueeProps) {
  const [paused, setPaused] = useState(false);
  const y = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={maskStyle}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex w-full flex-col"
        animate={{ y }}
        transition={{
          ease: "linear",
          duration: paused ? duration * 4 : duration,
          repeat: Infinity,
        }}
      >
        <div className="flex w-full flex-col">{children}</div>
        <div className="flex w-full flex-col" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mb-6 rounded-3xl border border-white/10 bg-neutral-900/80 p-6">
      <Icon name="quote" className="h-5 w-5 text-brand" />
      <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">
        {testimonial.quote}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <Image
          src={testimonial.logo}
          alt={`Logo de ${testimonial.name}`}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

function repeat<T>(items: T[], times = 3): T[] {
  const result: T[] = [];
  for (let i = 0; i < times; i++) result.push(...items);
  return result;
}

const columns: { direction: "up" | "down"; items: Testimonial[] }[] = [
  { direction: "up", items: repeat([testimonials[0], testimonials[3]]) },
  { direction: "down", items: repeat([testimonials[1], testimonials[4]]) },
  { direction: "up", items: repeat([testimonials[2], testimonials[5]]) },
];

const maskStyle: CSSProperties = {
  maskImage:
    "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
};

function columnMaskStyle(columnIndex: number): CSSProperties | undefined {
  if (columnIndex === 0) {
    return {
      maskImage: "linear-gradient(to right, transparent, black 50%)",
      WebkitMaskImage: "linear-gradient(to right, transparent, black 50%)",
    };
  }
  if (columnIndex === 2) {
    return {
      maskImage: "linear-gradient(to left, transparent, black 50%)",
      WebkitMaskImage: "linear-gradient(to left, transparent, black 50%)",
    };
  }
  return undefined;
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionReveal>
          <SectionHeading
            eyebrow="Testimonios"
            title={
              <span className="text-gradient">
                Lo que dicen nuestros clientes
              </span>
            }
            subtitle="Resultados reales de marcas que confiaron en Volt Growth."
          />
        </SectionReveal>
        <div
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
          style={maskStyle}
        >
          {columns.map((column, columnIndex) => (
            <VerticalMarquee
              key={columnIndex}
              direction={column.direction}
              className="h-[600px]"
              maskStyle={columnMaskStyle(columnIndex)}
            >
              {column.items.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </VerticalMarquee>
          ))}
        </div>
      </Container>
    </section>
  );
}
