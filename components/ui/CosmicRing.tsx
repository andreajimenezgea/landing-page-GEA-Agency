"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ambientPulse, ambientTransition } from "@/components/motion";

// [left%, top%, sizePx, baseOpacity, twinkleDelay, twinkleDuration]
type Star = readonly [
  left: number,
  top: number,
  size: number,
  opacity: number,
  delay: number,
  duration: number,
];

// Semilla determinista: MISMO cielo cada render. Distribución por todo el
// viewport del hero evitando el centro (x 38-62%, y 32-58%) donde vive el disco.
const STARFIELD: readonly Star[] = [
  [8, 12, 1.5, 0.7, 0, 4.2],
  [16, 6, 1, 0.5, 1.2, 3.6],
  [24, 18, 2, 0.8, 0.4, 5],
  [32, 9, 1.2, 0.45, 2.1, 4.6],
  [42, 8, 1.6, 0.6, 0.8, 3.4],
  [56, 6, 1.2, 0.75, 1.6, 4.8],
  [66, 14, 2, 0.55, 0.2, 3.9],
  [74, 8, 1.3, 0.7, 2.6, 5.2],
  [84, 16, 1.8, 0.5, 1, 4.4],
  [92, 10, 1.2, 0.65, 3, 3.8],
  [6, 28, 2, 0.6, 2.4, 4.9],
  [18, 34, 1.2, 0.85, 0.6, 3.5],
  [30, 26, 1.5, 0.5, 3.2, 5.4],
  [68, 26, 2, 0.7, 1.8, 4.1],
  [78, 34, 1.3, 0.6, 0.2, 3.7],
  [88, 42, 1.8, 0.55, 2.8, 5.6],
  [94, 52, 1.2, 0.7, 0.9, 4.3],
  [12, 48, 2.2, 0.65, 3.4, 3.9],
  [22, 44, 1.3, 0.5, 1.1, 5.1],
  [34, 52, 1.6, 0.8, 2.2, 4],
  [40, 66, 1.8, 0.65, 0.9, 4.1],
  [68, 50, 1.4, 0.45, 0.5, 4.7],
  [76, 58, 2, 0.6, 3.6, 3.4],
  [86, 66, 1.2, 0.75, 1.4, 5.5],
  [8, 64, 1.5, 0.55, 2, 4.5],
  [18, 70, 2, 0.7, 0.3, 3.8],
  [28, 60, 1.2, 0.5, 2.8, 5.2],
  [54, 18, 1.3, 0.6, 3.8, 3.6],
  [60, 70, 2, 0.8, 1.5, 4.9],
  [70, 78, 1.4, 0.5, 2.5, 4.3],
  [82, 82, 1.8, 0.6, 0.7, 3.7],
  [92, 70, 1.2, 0.7, 3.1, 5],
  [14, 86, 2, 0.65, 1.9, 4.6],
  [30, 84, 1.3, 0.5, 0.1, 3.9],
  [44, 86, 1.6, 0.75, 2.7, 4.4],
  [56, 88, 1.2, 0.6, 0.5, 5.3],
  [72, 88, 2, 0.55, 3.5, 3.6],
  [88, 88, 1.4, 0.7, 1.3, 4.8],
  [6, 40, 1.2, 0.8, 2.3, 4],
  [96, 30, 1.8, 0.5, 0.8, 5.4],
  [2, 76, 1.5, 0.6, 3.3, 3.8],
  [94, 62, 1.6, 0.7, 1.7, 4.2],
  [46, 4, 1.4, 0.65, 2.9, 4.7],
  [38, 90, 1.2, 0.55, 0.4, 3.5],
  [64, 40, 1.5, 0.5, 3, 5],
  [52, 28, 1.3, 0.6, 1.2, 4.1],
  [26, 72, 1.8, 0.45, 2.6, 4.9],
];

const IMAGE_SIZE_CLASS = "w-[min(130vw,1100px)] h-auto";

// Polvo orbital: 24 partículas en elipse alrededor del agujero negro.
// Determinista (misma órbita en cada render). La elipse rodea la imagen
// (radio x 48% / radio y 24%) y el contenedor rota lento para la ilusión
// de disco de acreción girando.
const ORBITAL_PARTICLES: readonly {
  left: string;
  top: string;
  size: number;
  opacity: number;
  highlight?: boolean;
}[] = Array.from({ length: 24 }, (_, i) => {
  const angle = (i * 15 * Math.PI) / 180;
  const left = Math.round(Math.cos(angle) * 480) / 10;
  const top = Math.round(Math.sin(angle) * 240) / 10;
  return {
    left: `calc(50% + ${left}%)`,
    top: `calc(50% + ${top}%)`,
    size: 1 + (i % 3) * 0.7,
    opacity: 0.35 + ((i * 7) % 5) * 0.13,
    highlight: i % 8 === 3,
  };
});

export interface CosmicRingProps {
  className?: string;
}

export function CosmicRing({ className = "" }: CosmicRingProps) {
  const reduced = useReducedMotion() === true;

  const entrance = reduced
    ? {}
    : {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.2, ease: "easeOut" as const },
      };

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div className="absolute inset-0" {...entrance}>
        {/* Capa C: glow ambiente ancho detrás del disco */}
        <motion.div
          className="absolute left-1/2 top-[calc(44%+225px)] h-[75vw] w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.15), transparent)",
          }}
          animate={reduced ? undefined : ambientPulse}
          transition={reduced ? undefined : { ...ambientTransition, delay: 0 }}
        />

        {/* Capa C: manchas de gas/dust con blur */}
        <motion.div
          className="absolute left-[14%] top-[55%] h-[260px] w-[420px] rounded-full blur-[70px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.16), transparent)",
          }}
          animate={reduced ? undefined : ambientPulse}
          transition={reduced ? undefined : { ...ambientTransition, delay: 2 }}
        />
        <motion.div
          className="absolute left-[64%] top-[20%] h-[200px] w-[320px] rounded-full blur-[60px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.08), transparent)",
          }}
          animate={reduced ? undefined : ambientPulse}
          transition={reduced ? undefined : { ...ambientTransition, delay: 4 }}
        />
        <motion.div
          className="absolute left-[56%] top-[66%] h-[180px] w-[280px] rounded-full blur-[70px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent)",
          }}
          animate={reduced ? undefined : ambientPulse}
          transition={reduced ? undefined : { ...ambientTransition, delay: 6 }}
        />

        {/* Capa A: starfield de estrellitas blancas */}
        <div className="absolute inset-0">
          {STARFIELD.map(([left, top, size, opacity, delay, duration], i) =>
            reduced ? (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: size,
                  height: size,
                  opacity,
                }}
              />
            ) : (
              <motion.span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: size,
                  height: size,
                }}
                animate={{
                  opacity: [opacity * 0.35, opacity, opacity * 0.35],
                  x: [0, ((i * 37) % 17) - 8, 0],
                  y: [0, ((i * 61) % 15) - 7, 0],
                }}
                transition={{
                  opacity: {
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  x: {
                    duration: 16 + (i % 4) * 6,
                    delay: (i % 3) * 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                  y: {
                    duration: 16 + (i % 4) * 6,
                    delay: (i % 3) * 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
              />
            ),
          )}
        </div>

        {/* Capa B: agujero negro real — imagen centrada detrás del título */}
        <div
          className={`absolute left-1/2 top-[calc(44%+225px)] ${IMAGE_SIZE_CLASS} -translate-x-1/2 -translate-y-1/2`}
        >
          <Image
            src="/black-hole.png"
            alt=""
            aria-hidden
            priority
            width={666}
            height={375}
            sizes="(max-width: 768px) 92vw, 880px"
            className="h-auto w-full object-contain mix-blend-screen opacity-90"
          />
        </div>

        {/* Capa B2: polvo orbital girando lentamente alrededor del agujero negro */}
        <div
          className="absolute left-1/2 top-[calc(44%+225px)] -translate-x-1/2 -translate-y-1/2"
          style={{ width: "min(150vw, 1180px)", aspectRatio: "16/9" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={reduced ? undefined : { rotate: 360 }}
            transition={
              reduced
                ? undefined
                : { repeat: Infinity, ease: "linear", duration: 60 }
            }
          >
            {ORBITAL_PARTICLES.map((p, i) => (
              <span
                key={i}
                className="absolute rounded-full"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  opacity: p.opacity,
                  background: p.highlight
                    ? "rgba(255,255,255,0.95)"
                    : "rgba(255,255,255,0.7)",
                  boxShadow: p.highlight
                    ? "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4)"
                    : "none",
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Capa D: velado de legibilidad muy sutil para el H1 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 44%, rgba(10,10,10,0.4), transparent 60%)",
          }}
        />
      </motion.div>
    </div>
  );
}