"use client";

import { cta } from "../lib/content";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Container } from "./ui/Container";
import { SectionReveal } from "./motion";

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionReveal>
          <Card glow animateBorder className="px-6 py-16 text-center sm:px-12 sm:py-20">
            <h2 className="text-gradient mx-auto max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
              {cta.title.text}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
              {cta.subtitle}
            </p>
            <div className="relative isolate mt-8 inline-block">
              <Button href={cta.button.href} size="lg">
                {cta.button.label}
              </Button>
            </div>
          </Card>
        </SectionReveal>
      </Container>
    </section>
  );
}
