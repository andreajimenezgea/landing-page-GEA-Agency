"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

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
  "conic-gradient(from 90deg at 50% 50%, #0000 0deg, rgba(255,255,255,0.4) 55deg, rgba(255,255,255,0.2) 100deg, #0000 150deg)";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium select-none whitespace-nowrap";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-pink-500 via-rose-500 to-rose-500 text-white font-semibold",
  secondary: "bg-neutral-900 border border-white/20 text-white",
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
  primary: "0px 0px 20px rgba(236, 72, 153, 0.5)",
  secondary: "0px 0px 20px rgba(236, 72, 153, 0.35)",
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
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        {...motionProps}
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
