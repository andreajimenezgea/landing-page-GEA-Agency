"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}

export function InfiniteMarquee({
  children,
  direction = "left",
  duration = 25,
  className,
}: InfiniteMarqueeProps) {
  const x = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div
      className={`overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)] ${className ?? ""}`}
    >
      <motion.div
        className="flex w-max"
        animate={{ x }}
        transition={{ ease: "linear", duration, repeat: Infinity }}
      >
        <div className="flex w-max items-center gap-6 pr-6">{children}</div>
        <div className="flex w-max items-center gap-6 pr-6" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
