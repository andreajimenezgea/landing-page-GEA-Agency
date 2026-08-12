import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-link">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
