"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/lib/content";
import { interceptAnchorClick } from "@/lib/smooth-scroll";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto mt-4 w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-background/60 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src={nav.logo}
                alt="Volt Growth"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden items-center gap-6 md:flex">
              {nav.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={interceptAnchorClick}
                  className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button href={nav.cta.href} size="sm">
                {nav.cta.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground md:hidden"
            >
              <Icon name={isOpen ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-3 space-y-1 border-t border-white/10 pt-3">
                  {nav.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        interceptAnchorClick(e);
                        closeMenu();
                      }}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-2">
                    <Button
                      href={nav.cta.href}
                      size="sm"
                      onClick={closeMenu}
                      className="w-full"
                    >
                      {nav.cta.label}
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
