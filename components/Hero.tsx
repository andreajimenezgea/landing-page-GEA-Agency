"use client";

import type { ReactNode } from "react";
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
import { SocialProof } from "@/components/ui/SocialProof";

const highlights = hero.title.gradient ?? [];

function renderTitle() {
  const nodes: ReactNode[] = [];
  let rest = hero.title.text;
  highlights.forEach((phrase, i) => {
    const idx = rest.indexOf(phrase);
    if (idx === -1) return;
    if (idx > 0) nodes.push(rest.slice(0, idx));
    nodes.push(<span key={i} className="text-gradient">{phrase}</span>);
    rest = rest.slice(idx + phrase.length);
  });
  if (rest) nodes.push(rest);
  return nodes;
}

export function Hero() {
  const hasHighlights = highlights.length > 0;

  return (
    <section id="hero" className="relative isolate overflow-hidden pb-36 pt-28 sm:pt-32 lg:pt-40">
      {/* Deep blue gradient mesh background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#0B0F19]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(30,64,175,0.2),transparent)]" />
        <div className="absolute right-0 top-1/4 h-full w-full bg-[radial-gradient(ellipse_60%_40%_at_80%_30%,rgba(0,240,255,0.06),transparent)]" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-25%] h-[560px] w-[760px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]">
          <motion.div
            className="h-full w-full"
            style={{ background: `radial-gradient(closest-side, ${theme.indigo}, transparent)` }}
            animate={ambientPulse}
            transition={{ ...ambientTransition, delay: 0 }}
          />
        </div>
        <div className="absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full opacity-20 blur-[110px]">
          <motion.div
            className="h-full w-full"
            style={{ background: `radial-gradient(closest-side, ${theme.brand}, transparent)` }}
            animate={ambientPulse}
            transition={{ ...ambientTransition, delay: 2.5 }}
          />
        </div>
        <div className="absolute bottom-[-10%] left-[-10%] h-[320px] w-[520px] rounded-full opacity-[0.15] blur-[110px]">
          <motion.div
            className="h-full w-full"
            style={{ background: `radial-gradient(closest-side, ${theme.accent}, transparent)` }}
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
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-300/90">
            <Icon name="star" className="h-4 w-4 text-brand" />
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className={`mx-auto mt-6 max-w-6xl text-balance text-white text-4xl font-medium leading-[1.2] tracking-tight pb-[0.1em] -mb-[0.1em] sm:text-5xl lg:text-6xl ${
            hasHighlights ? "" : "text-gradient"
          }`}
        >
          {hasHighlights ? renderTitle() : hero.title.text}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-3xl text-lg text-slate-200 [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={hero.primaryCta.href} size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 hidden flex flex-wrap items-center justify-center gap-x-8 gap-y-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]"
        >
          {hero.stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <span className="text-3xl font-semibold text-white">{stat.value}</span>
              <span className="ml-2 text-sm text-slate-200">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-17">
          <SocialProof />
        </div>
      </motion.div>
    </section>
  );
}
