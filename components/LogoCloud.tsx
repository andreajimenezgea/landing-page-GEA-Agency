"use client";

import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { fadeIn, SectionReveal } from "@/components/motion";
import { logoCloud } from "@/lib/content";

function BrandLogo({ name }: { name: string }) {
  return (
    <span className="px-6 text-lg font-bold uppercase tracking-wider text-white/40 transition-colors hover:text-white/70">
      {name}
    </span>
  );
}

export function LogoCloud() {
  return (
    <section className="section-depth-odd border-t border-white/[0.06] py-14">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionReveal variants={fadeIn}>
          <p className="text-sm text-muted">{logoCloud.title}</p>
        </SectionReveal>

        <div className="mt-8">
          <InfiniteMarquee direction="left" duration={25}>
            {logoCloud.brands.map((name) => (
              <BrandLogo key={name} name={name} />
            ))}
          </InfiniteMarquee>
        </div>

        <p className="mt-4 text-center text-sm text-muted">{logoCloud.extra}</p>
      </div>
    </section>
  );
}
