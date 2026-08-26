"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./motion";

const leadFields = [
  { name: "fullName", placeholder: "Nombre y apellido", type: "text" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "phone", placeholder: "Número de teléfono", type: "tel" },
  { name: "sector", placeholder: "Tu sector", type: "text" },
  { name: "product", placeholder: "¿Qué producto vendes?", type: "text" },
  { name: "ticket", placeholder: "Ticket medio del producto", type: "text" },
];

export function LeadForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({});
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="lead" className="section-depth-even relative overflow-hidden scroll-mt-20 py-20 lg:py-28">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center text-center lg:mb-16">
          <SectionHeading
            eyebrow="El método"
            title={<span className="text-gradient">Descubre si el Método GEA puede ayudarte a vender más</span>}
          />
        </SectionReveal>

        <SectionReveal className="mx-auto max-w-xl">
          <Card animateBorder className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {leadFields.map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  required
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="h-12 w-full rounded-xl border border-white/[0.06] bg-[#0F172A]/60 px-4 text-sm text-foreground placeholder:text-muted focus:border-cyan-500/30 focus:outline-none backdrop-blur-sm"
                />
              ))}
              <Button type="submit" size="lg" className="w-full">
                Solicitar información →
              </Button>
              <p className="text-center text-xs text-muted">
                Sin compromiso · Te respondemos en menos de 24h
              </p>
            </form>
          </Card>
        </SectionReveal>
      </Container>
    </section>
  );
}