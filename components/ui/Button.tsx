"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { interceptAnchorClick } from "@/lib/smooth-scroll";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
}

interface ButtonAsButton extends CommonProps {
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const borderGradient =
  "conic-gradient(from 90deg at 50% 50%, #0000 0deg, rgba(255,255,255,0.9) 30deg, rgba(255,255,255,1) 60deg, rgba(255,255,255,0.9) 90deg, rgba(255,255,255,0.7) 120deg, #0000 150deg)";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium select-none whitespace-nowrap";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_20px_rgba(0,240,255,0.3)]",
  secondary: "bg-[#1E293B] border border-white/10 text-white backdrop-blur-sm",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

const primaryHeightClasses: Record<ButtonSize, string> = {
  sm: "h-9 text-sm",
  md: "h-11 text-sm",
  lg: "h-12 text-base",
};

const primaryPaddingClasses: Record<ButtonSize, string> = {
  sm: "px-4",
  md: "px-6",
  lg: "px-8",
};

const variantGlow: Record<ButtonVariant, string> = {
  primary: "0px 0px 25px rgba(0, 240, 255, 0.4)",
  secondary: "0px 0px 20px rgba(255, 255, 255, 0.15)",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
  } = props;

  const isPrimary = variant === "primary";

  const wrapperClasses = isPrimary
    ? [
        "relative isolate inline-flex select-none whitespace-nowrap overflow-hidden rounded-full p-[1px] font-medium",
        primaryHeightClasses[size],
        className,
      ].join(" ")
    : [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ");

  const motionProps = {
    whileHover: { scale: 1.03, boxShadow: variantGlow[variant] },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
    onClick,
    className: wrapperClasses,
  };

  const content = isPrimary ? (
    <>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -inset-[1000%]"
        style={{ background: borderGradient }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
      />
      <span
        className={`relative z-10 flex h-full w-full items-center justify-center gap-2 rounded-full ${variantClasses.primary} ${primaryPaddingClasses[size]}`}
      >
        {children}
      </span>
    </>
  ) : (
    children
  );

  if ("href" in props) {
    const isHashLink = props.href.startsWith("#");
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        {...motionProps}
        onClick={
          isHashLink
            ? (e: MouseEvent<HTMLAnchorElement>) => {
                interceptAnchorClick(e);
                onClick?.();
              }
            : onClick
        }
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={props.type ?? "button"} {...motionProps}>
      {content}
    </motion.button>
  );
}
