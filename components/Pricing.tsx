"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Icon } from "./ui/Icon";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { SectionReveal, popularHover, staggerItem } from "./motion";
import { pricing, theme } from "@/lib/content";

type Billing = "monthly" | "annual";

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  // TODO: lib/content.ts solo define precios mensuales (Gratis/$17/$96).
  // El toggle cambia el período de forma visual; cuando existan precios
  // anuales en la data, hay que conectarlos acá sin inventar valores.

  const toggleOptions: { value: Billing; label: string; badge?: string }[] = [
    { value: "monthly", label: pricing.toggle.monthly },
    { value: "annual", label: pricing.toggle.annual, badge: pricing.toggle.annualBadge },
  ];

  return (
    <section id="pricing" className="scroll-mt-20 py-20 lg:py-24">
      <Container>
        <SectionReveal className="mb-12 flex flex-col items-center gap-8 text-center lg:mb-16">
          <SectionHeading
            eyebrow="Precio"
            title={<span className="text-gradient">{pricing.title}</span>}
            subtitle="Planes simples y transparentes. Empezá gratis y escalá cuando lo necesites."
          />

          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            {toggleOptions.map((option) => {
              const isActive = billing === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setBilling(option.value)}
                  aria-pressed={isActive}
                  className={`relative flex h-10 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-muted hover:text-foreground"
                  }`}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{option.label}</span>
                  {option.badge ? (
                    <span
                      className={`relative z-10 rounded-full px-2 py-0.5 text-xs font-medium ${
                        isActive ? "bg-white/15 text-white" : "bg-brand/20 text-brand"
                      }`}
                    >
                      {option.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 lg:grid-cols-3 lg:items-start"
        >
          {pricing.plans.map((plan, index) => {
            const isPopular = plan.badge === "POPULAR";
            return (
              <div
                key={plan.name}
                className={isPopular ? "relative" : undefined}
              >
                {isPopular && plan.badge ? (
                  <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-3 py-1 text-xs font-medium tracking-wide text-black">
                    {plan.badge}
                  </span>
                ) : null}

                <Card
                  variants={staggerItem(index)}
                  neonBorder={isPopular}
                  animateBorder={isPopular}
                  whileHover={isPopular ? popularHover : undefined}
                  style={isPopular ? { boxShadow: theme.pricingGlow } : undefined}
                  className="flex h-full flex-col p-8"
                >
                  <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                      {plan.price}
                    </span>
                    {plan.period ? (
                      <span className="text-sm text-muted">
                        {billing === "annual" ? "/ año" : plan.period}
                      </span>
                    ) : null}
                  </div>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                      >
                        <Icon
                          name="check"
                          strokeWidth={2.5}
                          className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={plan.cta.href}
                    variant={isPopular ? "primary" : "secondary"}
                    size="lg"
                    className="mt-8 w-full"
                  >
                    {plan.cta.label}
                  </Button>
                </Card>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
