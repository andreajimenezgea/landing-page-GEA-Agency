"use client";

import type { ComponentProps, ReactNode } from "react";
import type { TargetAndTransition, Transition } from "framer-motion";
import { motion } from "framer-motion";

export type CardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  glowClassName?: string;
  neonBorder?: boolean;
  animateBorder?: boolean;
} & ComponentProps<typeof motion.div>;

const cardSpring: Transition = { type: "spring", stiffness: 300, damping: 25 };
const defaultHover: TargetAndTransition = {
  y: -4,
  boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.15)",
};

const borderGradient =
  "conic-gradient(from 90deg at 50% 50%, #0000 0deg, rgba(255,255,255,0.4) 55deg, rgba(255,255,255,0.2) 100deg, #0000 150deg)";

export function Card({
  children,
  className = "",
  glow = false,
  glowClassName = "",
  neonBorder = false,
  animateBorder = false,
  whileHover,
  transition,
  ...rest
}: CardProps) {
  const baseClasses = [
    "relative isolate rounded-3xl border bg-neutral-950",
    neonBorder ? "border-pink-500/20" : "border-white/10",
    glow ? "" : "overflow-hidden",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (animateBorder) {
    return (
      <motion.div
        className="relative isolate shrink-0 rounded-3xl border border-white/10"
        whileHover={whileHover ?? defaultHover}
        transition={transition ?? cardSpring}
        {...rest}
      >
        {glow ? (
          <motion.span
            aria-hidden
            className={`pointer-events-none absolute -inset-8 -z-10 rounded-full bg-pink-600/10 blur-3xl ${glowClassName}`}
          />
        ) : null}

        <div className="relative h-full overflow-hidden rounded-3xl p-[1px]">
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -inset-[1000%]"
            style={{ background: borderGradient }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
          />
          <div
            className={`relative h-full w-full overflow-hidden rounded-[23px] bg-neutral-950 ${className}`}
          >
            {children}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={baseClasses}
      whileHover={whileHover ?? defaultHover}
      transition={transition ?? cardSpring}
      {...rest}
    >
      {glow ? (
        <motion.span
          aria-hidden
          className={`pointer-events-none absolute -inset-8 -z-10 rounded-full bg-pink-600/10 blur-3xl ${glowClassName}`}
        />
      ) : null}
      {children}
    </motion.div>
  );
}
