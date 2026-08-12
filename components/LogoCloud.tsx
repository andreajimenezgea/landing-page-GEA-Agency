"use client";

import Image from "next/image";
import { InfiniteMarquee } from "@/components/ui/InfiniteMarquee";
import { fadeIn, SectionReveal } from "@/components/motion";
import { logos } from "@/lib/content";

export function LogoCloud() {
  return (
    <section className="border-t border-white/10 py-14">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <SectionReveal variants={fadeIn}>
          <p className="text-sm text-muted">{logos.title}</p>
        </SectionReveal>

        <div className="mt-8">
          <InfiniteMarquee direction="left" duration={25}>
            {logos.items.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={120}
                height={40}
                className="h-8 w-auto opacity-60 grayscale transition-opacity hover:opacity-100 sm:h-10"
              />
            ))}
          </InfiniteMarquee>
        </div>
      </div>
    </section>
  );
}
