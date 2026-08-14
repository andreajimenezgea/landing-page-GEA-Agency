"use client";

import { motion } from "framer-motion";
import type { IconName } from "./Icon";

interface AnimatedIconProps {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
  animation?: "pulse" | "spin" | "draw" | "float";
}

const iconPaths: Record<IconName, string | string[]> = {
  star: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  check: "M20 6 9 17l-5-5",
  x: ["M18 6 6 18", "m6 6 12 12"],
  bolt: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  gear: [
    "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    "M12 12r3",
  ],
  arrow: ["M5 12h14", "m12 5 7 7-7 7"],
  quote: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
  menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
  close: ["M18 6 6 18", "m6 6 12 12"],
  "chevron-down": "m6 9 6 6 6-6",
  "chevron-left": "m15 18-6-6 6-6",
  "chevron-right": "m9 18 6-6-6-6",
  plus: ["M5 12h14", "M12 5v14"],
};

const animationVariants = {
  pulse: {
    animate: { scale: [0.85, 1.1, 0.85], opacity: [0.5, 1, 0.5] },
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const },
  },
  spin: {
    animate: { rotate: 360 },
    transition: { duration: 8, repeat: Infinity, ease: "linear" as const },
  },
  draw: {
    animate: { pathLength: [0, 1, 1, 0], opacity: [0.3, 1, 1, 0.3] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
  float: {
    animate: { y: [0, -4, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
};

export function AnimatedIcon({
  name,
  className = "h-6 w-6",
  size = 24,
  strokeWidth = 1.5,
  animation = "draw",
}: AnimatedIconProps) {
  const paths = iconPaths[name];
  const variant = animationVariants[animation];
  const isSpin = animation === "spin";
  const isPulse = animation === "pulse";

  const Wrapper = isSpin ? motion.g : motion.svg;
  const wrapperProps = isSpin
    ? { style: { transformOrigin: "12px 12px" } }
    : {};

  return (
    <Wrapper
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...(isSpin ? variant : { animate: variant.animate })}
      transition={variant.transition}
      {...wrapperProps}
    >
      {isSpin && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {Array.isArray(paths) ? (
            paths.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.3, ease: "easeInOut" }}
              />
            ))
          ) : (
            <motion.path
              d={paths}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </svg>
      )}
      {!isSpin &&
        (Array.isArray(paths) ? (
          paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              {...(isPulse ? {} : variant)}
              transition={{
                ...variant.transition,
                delay: i * 0.2,
              }}
            />
          ))
        ) : (
          <motion.path d={paths} {...variant} />
        ))}
    </Wrapper>
  );
}
