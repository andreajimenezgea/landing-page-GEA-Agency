"use client";

import type { ReactNode } from "react";
import type {
  TargetAndTransition,
  Transition,
  Variants,
  ViewportOptions,
} from "framer-motion";
import { motion } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const staggerItem = (index: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
  },
});

export const cardHover: TargetAndTransition = {
  y: -6,
  borderColor: "rgba(255, 255, 255, 0.2)",
};

export const popularHover: TargetAndTransition = {
  y: -8,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const ambientPulse: TargetAndTransition = {
  scale: [1, 1.03, 1],
  opacity: [0.8, 1, 0.8],
};

export const ambientTransition: Transition = {
  duration: 8,
  repeat: Infinity,
  ease: "easeInOut",
};

interface SectionRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  amount?: number;
  viewport?: ViewportOptions;
}

export function SectionReveal({
  children,
  variants = fadeUp,
  className,
  amount,
  viewport = { once: true, margin: "-100px" },
}: SectionRevealProps) {
  const resolvedViewport =
    amount !== undefined ? { ...viewport, amount } : viewport;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={resolvedViewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
