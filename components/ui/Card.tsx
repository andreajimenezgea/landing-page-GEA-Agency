"use client";

import type { ComponentProps, ReactNode } from "react";
import type { TargetAndTransition, Transition } from "framer-motion";
import { motion } from "framer-motion";

export type CardProps = {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  glow?: boolean;
  glowClassName?: string;
  neonBorder?: boolean;
  animateBorder?: boolean;
} & ComponentProps<typeof motion.div>;

const cardSpring: Transition = { type: "spring", stiffness: 300, damping: 25 };
const defaultHover: TargetAndTransition = {
  y: -4,
  boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.45)",
};

const borderGradient =
  "conic-gradient(from 90deg at 50% 50%, #0000 0deg, #00F0FF 30deg, #3B82F6 60deg, #00F0FF 90deg, #0000 120deg)";

const glassInterior =
  "relative z-10 h-full w-full overflow-hidden rounded-[23px] bg-[#0B0F19] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_2px_24px_rgba(0,0,0,0.4)]";

export function Card({
  children,
  className = "",
  wrapperClassName = "",
  glow = false,
  glowClassName = "",
  neonBorder = false,
  animateBorder = false,
  whileHover,
  transition,
  ...rest
}: CardProps) {
  void glowClassName;
  const baseClasses = [
    "relative isolate rounded-3xl border bg-[#0B0F19]",
    neonBorder ? "border-cyan-500/20" : "border-white/[0.06]",
    glow ? "" : "overflow-hidden",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.05),inset_0_2px_24px_rgba(0,0,0,0.4)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (animateBorder) {
    return (
      <motion.div
        className={`group relative isolate h-full shrink-0 rounded-3xl border border-white/[0.06] ${wrapperClassName}`}
        style={{ contain: 'layout style paint', ...rest.style }}
        whileHover={whileHover ?? defaultHover}
        transition={transition ?? cardSpring}
        {...rest}
      >
        <div className="relative h-full overflow-hidden rounded-3xl p-[1px]">
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-[100%] opacity-60 transition-opacity duration-500 [animation:border-spin_4s_linear_infinite] group-hover:opacity-100 group-hover:[animation-duration:2s]"
            style={{ background: borderGradient }}
          />
          <div className={`${glassInterior} ${className}`}>{children}</div>
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
      {children}
    </motion.div>
  );
}
