"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { hero, theme } from "@/lib/content";
import {
  ambientPulse,
  ambientTransition,
  fadeUp,
  staggerContainer,
} from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CosmicRing } from "@/components/ui/CosmicRing";

// Fragmentos del título que se resaltan con gradiente (hero.title.gradient).
// Si no hay ninguno, el H1 completo usa .text-gradient.
const highlights = hero.title.gradient ?? [];

function renderTitle() {
  const nodes: ReactNode[] = [];
  let rest = hero.title.text;

  highlights.forEach((phrase, i) => {
    const idx = rest.indexOf(phrase);
    if (idx === -1) return;
    if (idx > 0) nodes.push(rest.slice(0, idx));
    nodes.push(
      <span key={i} className="text-gradient">
        {phrase}
      </span>
    );
    rest = rest.slice(idx + phrase.length);
  });

  if (rest) nodes.push(rest);
  return nodes;
}

export function Hero() {
  const hasHighlights = highlights.length > 0;

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:pt-40">
      {/* Glow de fondo: índigo principal + rosa/accento tenues + agujero negro */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-25%] h-[560px] w-[760px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]">
          <motion.div
            className="h-full w-full"
            style={{
              background: `radial-gradient(closest-side, ${theme.indigo}, transparent)`,
            }}
            animate={ambientPulse}
            transition={{ ...ambientTransition, delay: 0 }}
          />
        </div>
        <div className="absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full opacity-20 blur-[110px]">
          <motion.div
            className="h-full w-full"
            style={{
              background: `radial-gradient(closest-side, ${theme.brand}, transparent)`,
            }}
            animate={ambientPulse}
            transition={{ ...ambientTransition, delay: 2.5 }}
          />
        </div>
        <div className="absolute bottom-[-10%] left-[-10%] h-[320px] w-[520px] rounded-full opacity-[0.15] blur-[110px]">
          <motion.div
            className="h-full w-full"
            style={{
              background: `radial-gradient(closest-side, ${theme.accent}, transparent)`,
            }}
            animate={ambientPulse}
            transition={{ ...ambientTransition, delay: 5 }}
          />
        </div>
        <CosmicRing />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-foreground/80">
            <Icon name="star" className="h-4 w-4 text-brand" />
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className={`mx-auto mt-6 max-w-4xl text-balance text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl ${
            hasHighlights ? "" : "text-gradient"
          }`}
        >
          {hasHighlights ? renderTitle() : hero.title.text}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <div className="flex -space-x-3">
            {hero.avatars.map((avatar) => (
              <Image
                key={avatar}
                src={avatar}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-background object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">
              {hero.stats.value}
            </span>{" "}
            {hero.stats.label}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
