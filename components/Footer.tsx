"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, footer, site } from "../lib/content";
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
    <footer className="border-t border-white/10 bg-black/40">
      <Container className="py-16">
        <SectionReveal>
          <div className="flex flex-col items-center pb-14 text-center">
            <Image
              src={assets.navLogo}
              alt={site.name}
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <h2 className="mt-8 text-2xl font-medium text-foreground sm:text-3xl">
              {footer.newsletter.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
              {footer.newsletter.description}
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={footer.newsletter.placeholder}
                className="h-11 w-full flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-foreground placeholder:text-muted focus:border-white/20 focus:outline-none"
              />
              <Button type="submit" size="md">
                {footer.newsletter.button}
              </Button>
            </form>
          </div>
        </SectionReveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-10 border-t border-white/10 py-12 sm:grid-cols-2"
        >
          {footer.columns.map((column, index) => (
            <motion.div key={column.title} variants={staggerItem(index)}>
              <h3 className="font-medium text-foreground">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
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
        <SectionReveal
          variants={fadeIn}
          className="border-t border-white/10 pt-8"
        >
          <p className="text-center text-xs text-muted">{footer.copyright}</p>
        </SectionReveal>
      </Container>
    </footer>
  );
}
