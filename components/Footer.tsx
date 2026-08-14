"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { footer, site } from "../lib/content";
import { interceptAnchorClick } from "../lib/smooth-scroll";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { fadeIn, SectionReveal, staggerContainer, staggerItem } from "./motion";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#070B14]">
      <Container className="py-16">
        <SectionReveal>
          <div className="flex flex-col items-center pb-14 text-center">
            <Image
              src="/logo.svg"
              alt="GEA"
              width={120}
              height={120}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-md text-sm text-muted">
              {footer.tagline}
            </p>
          </div>
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {footer.columns.map((column, index) => (
            <motion.div key={column.title} variants={staggerItem(index)}>
              <h3 className="font-medium text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={interceptAnchorClick}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

          <SectionReveal variants={fadeIn} className="border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted">{footer.copyright}</p>
            <a href={`mailto:${footer.email}`} className="text-xs text-muted transition-colors hover:text-foreground">
              {footer.email}
            </a>
          </div>
        </SectionReveal>
      </Container>
    </footer>
  );
}
