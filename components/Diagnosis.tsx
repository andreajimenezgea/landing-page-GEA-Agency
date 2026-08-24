"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./motion";
import { diagnosis } from "@/lib/content";

export function Diagnosis() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({});
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="diagnosis" className="section-depth-odd scroll-mt-20 py-12 sm:py-16">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow={diagnosis.eyebrow}
            title={<span className="text-gradient">{diagnosis.title}</span>}
            subtitle={diagnosis.subtitle}
          />
        </SectionReveal>

        <SectionReveal className="mx-auto max-w-xl">
          <Card animateBorder className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {diagnosis.fields.map((field) => (
                <input
                  key={field.name}
                  type={field.type ?? "text"}
                  required
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="h-12 w-full rounded-xl border border-white/[0.06] bg-[#0F172A]/60 px-4 text-sm text-foreground placeholder:text-muted focus:border-cyan-500/30 focus:outline-none backdrop-blur-sm"
                />
              ))}
              <Button type="submit" size="lg" className="w-full">
                {diagnosis.cta}
              </Button>
              <p className="text-center text-xs text-muted">
                {diagnosis.disclaimer}
              </p>
            </form>
          </Card>
        </SectionReveal>
      </Container>
    </section>
  );
}
