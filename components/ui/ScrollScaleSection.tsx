"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollScaleSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollScaleSection({
  children,
  className = "",
}: ScrollScaleSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.93, 1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
