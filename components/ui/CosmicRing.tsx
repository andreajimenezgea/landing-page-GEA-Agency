"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// [left%, sizePx, duration, delay, opacity, color(0 blanco/1 cian/2 azul), blur, wobble]
type Bubble = readonly [
  left: number,
  size: number,
  duration: number,
  delay: number,
  opacity: number,
  color: 0 | 1 | 2,
  blur: 0 | 1 | 2,
  wobble: number,
];

const BUBBLE_COLORS: readonly string[] = [
  "rgba(255,255,255,",
  "rgba(0,240,255,",
  "rgba(59,130,246,",
];

// Burbujas de refresco subiendo: semilla determinista (MISMO campo en cada
// render). Mayoría blancas, unas cian y pocas azules, con velocidades y delays
// escalonados para que el campo nunca se vea uniforme.
const BUBBLES: readonly Bubble[] = [
  [6, 8, 16, 0, 0.2, 0, 0, 10],
  [14, 22, 20, 2.5, 0.17, 0, 1, 14],
  [20, 6, 13, 5, 0.26, 0, 0, 7],
  [27, 12, 24, 8, 0.15, 1, 0, 12],
  [33, 30, 18, 1.5, 0.13, 0, 2, 16],
  [38, 7, 15, 6, 0.23, 0, 0, 9],
  [44, 16, 22, 11, 0.16, 0, 0, 13],
  [50, 5, 12.5, 3, 0.38, 2, 0, 6],
  [56, 10, 17, 9, 0.18, 0, 0, 8],
  [62, 26, 26, 4, 0.12, 1, 1, 18],
  [68, 8, 14, 13, 0.22, 0, 0, 11],
  [74, 18, 21, 0.5, 0.17, 0, 0, 12],
  [80, 6, 16, 7, 0.36, 0, 0, 6],
  [86, 34, 25, 2, 0.12, 2, 2, 15],
  [92, 11, 13, 15, 0.2, 0, 0, 10],
  [98, 20, 19, 10, 0.15, 0, 1, 13],
  [2, 14, 23, 17, 0.16, 1, 0, 9],
  [12, 28, 15, 1, 0.14, 0, 1, 17],
  [18, 5, 26, 12, 0.38, 0, 0, 7],
  [25, 9, 12, 19, 0.23, 0, 0, 8],
  [31, 24, 20, 3.5, 0.15, 0, 1, 14],
  [37, 6, 18, 16, 0.36, 2, 0, 10],
  [43, 13, 14, 0, 0.17, 0, 0, 11],
  [49, 32, 24, 6, 0.12, 1, 2, 16],
  [55, 7, 17, 20, 0.25, 0, 0, 6],
  [61, 12, 22, 2, 0.18, 0, 0, 12],
  [67, 36, 16, 8, 0.12, 0, 2, 18],
  [73, 9, 25, 14, 0.22, 0, 0, 9],
  [79, 15, 13, 5, 0.16, 1, 0, 13],
  [85, 6, 19, 18, 0.36, 0, 0, 7],
  [91, 22, 26, 0.5, 0.15, 0, 1, 14],
  [96, 8, 15, 9, 0.2, 0, 0, 10],
  [9, 25, 21, 12, 0.13, 2, 1, 15],
  [16, 7, 16, 4, 0.26, 0, 0, 8],
  [58, 14, 18, 15, 0.17, 0, 0, 11],
  [88, 29, 23, 3, 0.14, 1, 1, 16],
  [7.5, 44, 30, 0, 0.22, 0, 2, 20],
  [22.5, 10, 14, 7, 0.24, 0, 0, 10],
  [37.5, 42, 27, 3, 0.18, 1, 2, 19],
  [46.5, 7, 12, 11, 0.27, 0, 0, 8],
  [52.5, 40, 32, 5, 0.2, 0, 2, 18],
  [70.5, 6, 15, 14, 0.32, 2, 0, 7],
  [76.5, 16, 19, 9, 0.17, 0, 0, 12],
  [87, 9, 17, 2, 0.21, 0, 0, 9],
  [94, 26, 21, 12, 0.14, 1, 1, 15],
  [99, 5, 20, 16, 0.38, 0, 0, 6],
];

const IMAGE_SIZE_CLASS = "w-[min(71.5vw,605px)] h-auto";

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
        {/* Capa A: burbujas de refresco subiendo, esferas de vidrio 3D (reemplazan starfield, glows y polvo orbital) */}
        <div className="absolute inset-0">
          {BUBBLES.map(
            ([left, size, duration, delay, opacity, color, blur, wobble], i) => {
              const small = size < 8;
              const specular = Math.min(0.65, opacity * 2.5);
              const rim = Math.min(0.4, opacity * 1.5);
              const background = `radial-gradient(circle at 30% 28%, rgba(255,255,255,${specular}), ${BUBBLE_COLORS[color]}${opacity}) ${opacity * 100}%, transparent 72%)`;
              const border = small
                ? "none"
                : `1px solid rgba(255,255,255,${rim})`;
              const boxShadow = small
                ? "inset 0 -2px 6px rgba(0,0,0,0.2), inset 0 2px 6px rgba(255,255,255,0.3), 0 0 10px rgba(0,240,255,0.12)"
                : "inset 0 -2px 8px rgba(0,0,0,0.25), inset 0 2px 10px rgba(255,255,255,0.35), 0 0 12px rgba(0,240,255,0.15)";
              const blurClass =
                blur === 2 ? " blur-[2px]" : blur === 1 ? " blur-[1px]" : "";

              return reduced ? (
                <span
                  key={i}
                  className={`absolute rounded-full${blurClass}`}
                  style={{
                    left: `${left}%`,
                    top: `${6 + ((i * 37) % 84)}%`,
                    width: size,
                    height: size,
                    background,
                    border,
                    boxShadow,
                  }}
                />
              ) : (
                <motion.span
                  key={i}
                  className={`absolute rounded-full${blurClass}`}
                  style={{
                    left: `${left}%`,
                    top: "calc(100% + 40px)",
                    width: size,
                    height: size,
                    background,
                    border,
                    boxShadow,
                  }}
                  animate={{
                    y: [0, -900],
                    x: [0, wobble, -wobble * 0.7, wobble * 0.4, 0],
                    opacity: [0, opacity, opacity, opacity, 0],
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.05, 0.85, 0.95, 1],
                  }}
                />
              );
            },
          )}
        </div>

        {/* Capa B: imagen central flotando suavemente detrás del título */}
        <div
          className={`absolute left-1/2 top-[calc(55%+25px)] ${IMAGE_SIZE_CLASS} -translate-x-1/2 -translate-y-1/2`}
        >
          <motion.div
            animate={reduced ? undefined : { y: [0, -18, 0] }}
            transition={
              reduced
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Image
              src="/hero.png"
              alt=""
              aria-hidden
              priority
              width={1254}
              height={1254}
              sizes="(max-width: 768px) 92vw, 1100px"
              className="h-auto w-full object-contain opacity-70"
            />
          </motion.div>
        </div>

        {/* Capa D: velado de legibilidad para título, subtítulo y stats */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 46%, rgba(10,10,10,0.55), transparent 52%), radial-gradient(circle at 50% 62%, rgba(10,10,10,0.45), transparent 42%)",
          }}
        />
      </motion.div>
    </div>
  );
}