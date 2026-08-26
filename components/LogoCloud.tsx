"use client";

import Image from "next/image";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { fadeIn, SectionReveal } from "@/components/motion";
import { logoCloud } from "@/lib/content";

function BrandLogo({ name, logo, size }: { name: string; logo: string; size?: "sm" | "lg" }) {
  const heightClass = size === "lg" ? "h-36" : "h-20";
  return (
    <div className="flex items-center justify-center px-6 grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-80">
      <Image
        src={logo}
        alt={name}
        width={240}
        height={100}
        className={`${heightClass} w-auto object-contain`}
        unoptimized
      />
    </div>
  );
}

export function LogoCloud() {
  return (
    <section className="section-depth-odd border-t border-white/[0.06] pt-14 pb-4">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionReveal variants={fadeIn}>
          <p className="text-sm text-muted">{logoCloud.title}</p>
        </SectionReveal>

        <div className="mt-8">
          <InfiniteMarquee direction="left" duration={25}>
            {logoCloud.brands.map((brand) => (
              <BrandLogo key={brand.name} name={brand.name} logo={brand.logo} size={brand.size} />
            ))}
          </InfiniteMarquee>
        </div>

        <p className="mt-4 text-center text-sm text-muted">{logoCloud.extra}</p>
      </div>
    </section>
  );
}