"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionReveal } from "./motion";

interface Stat {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 2, prefix: "x", suffix: "", label: "en ventas" },
  { value: 10, prefix: "+", suffix: "", label: "Años de experiencia" },
  { value: 130, prefix: "+", suffix: "M€", label: "gestionados en campañas" },
];

function useCountUp(target: number, start: boolean, reducedMotion: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reducedMotion || !start) return;

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (value) => setCount(Math.floor(value)),
    });

    return () => controls.stop();
  }, [target, start, reducedMotion]);

  return reducedMotion ? target : count;
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion() ?? false;
  const count = useCountUp(stat.value, inView, reducedMotion);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center"
    >
      <span className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        {stat.prefix}
        {count}
        {stat.suffix}
      </span>
      <span className="text-[10px] md:text-xs font-semibold tracking-widest text-cyan-400 uppercase mt-2">
        {stat.label}
      </span>
    </motion.div>
  );
}

export function StatsBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-[#0B0F19] via-[#1E293B] to-[#0B0F19] border-y border-blue-500/20 py-10">
      <Container>
        <SectionReveal>
            <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}