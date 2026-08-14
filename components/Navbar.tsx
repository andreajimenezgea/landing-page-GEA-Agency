"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="rounded-2xl border border-white/[0.06] bg-[#0B0F19]/60 px-4 py-3 backdrop-blur-xl saturate-150 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-between">
            <Link href="#hero" onClick={interceptAnchorClick} className="flex shrink-0 items-center">
              <Image
                src="/logo.svg"
                alt="GEA — volver al inicio"
                width={120}
                height={120}
                className="h-9 w-auto"
              />
              <span className="ml-2 font-bold text-white">GEA Agency</span>
            </Link>

            <div className="hidden items-center gap-5 lg:flex">
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

            <div className="hidden lg:block">
              <Button href={nav.cta.href} size="sm">
                {nav.cta.label}
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground lg:hidden"
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
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-3 max-h-[70vh] space-y-1 overflow-y-auto overscroll-contain border-t border-white/10 pt-3">
                  {nav.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => { interceptAnchorClick(e); closeMenu(); }}
                      className="block rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-2">
                    <Button href={nav.cta.href} size="sm" onClick={closeMenu} className="w-full">
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
