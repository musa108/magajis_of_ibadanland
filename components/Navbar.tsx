"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  yoruba: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", yoruba: "Ilé", href: "/" },
  { label: "Heritage", yoruba: "Àkọ́ọ́lẹ̀", href: "/heritage" },
  { label: "Magajis", yoruba: "Àwọn Mògájì", href: "/magajis" },
  { label: "Compounds", yoruba: "Agbo Ilé", href: "/compounds" },
  { label: "Ilé Ẹ̀kẹ́", yoruba: "Ìkọ́lé", href: "/ile-eke" },
  { label: "Stories", yoruba: "Ìtàn", href: "/stories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener for translucent -> solid institutional transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#07111f]/95 backdrop-blur-md border-b border-[#b89a5a]/20 shadow-lg py-3.5"
            : "bg-transparent border-b border-white/10 py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Institutional Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b89a5a]"
            aria-label="Magajis of Ibadan Land - Home"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-[#b89a5a]/60 bg-[#07111f] p-1 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/mogaji-logo.svg"
                alt="Association of Mogajis of Ibadanland Official Seal"
                width={40}
                height={40}
                priority
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-tight">
              <div className="font-display text-xl sm:text-2xl font-normal tracking-wide text-[#f4f0e7] transition-colors group-hover:text-[#d4b56e]">
                Mogajis of Ibadan
              </div>
              <div className="text-[10px] font-medium tracking-[0.22em] text-[#b89a5a] uppercase font-sans">
                Àwọn Mògájì Ilẹ̀ Ìbàdàn
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors py-1 ${
                    isActive ? "text-[#d4b56e]" : "text-[#f4f0e7]/80 hover:text-[#f4f0e7]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#b89a5a]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* About / Institutional Portal Link */}
            <Link
              href="/about"
              className={`group ml-2 inline-flex items-center gap-2 border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                pathname === "/about"
                  ? "border-[#b89a5a] bg-[#b89a5a] text-[#07111f]"
                  : "border-[#b89a5a]/45 text-[#f4f0e7] hover:border-[#b89a5a] hover:bg-[#b89a5a] hover:text-[#07111f]"
              }`}
            >
              <span>About · Ìtàn</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center border border-[#b89a5a]/40 bg-[#07111f]/60 text-[#f4f0e7] hover:border-[#b89a5a] hover:text-[#d4b56e] transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Institutional Mobile Portal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#07111f] text-[#f4f0e7] lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between border-b border-[#b89a5a]/20 px-6 py-5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#b89a5a]/60 p-0.5">
                  <Image
                    src="/images/mogaji-logo.svg"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-lg tracking-wide text-[#f4f0e7]">
                    Mogajis of Ibadan
                  </div>
                  <div className="text-[9px] font-medium tracking-[0.2em] text-[#b89a5a] uppercase">
                    Àwọn Mògájì Ilẹ̀ Ìbàdàn
                  </div>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center border border-[#b89a5a]/40 text-[#f4f0e7] hover:border-[#b89a5a] hover:text-[#d4b56e] transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links List */}
            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
              <div className="space-y-2 divide-y divide-white/10">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      className="pt-3 first:pt-0"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-baseline justify-between py-2.5 transition-colors ${
                          isActive ? "text-[#d4b56e]" : "text-[#f4f0e7] hover:text-[#d4b56e]"
                        }`}
                      >
                        <span className="font-display text-3xl sm:text-4xl tracking-tight">
                          {item.label}
                        </span>
                        <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#b89a5a]">
                          {item.yoruba}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-3 flex items-center justify-between border border-[#b89a5a]/50 bg-[#0c1626] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d4b56e] transition hover:bg-[#b89a5a] hover:text-[#07111f]"
                  >
                    <span>About the Institution · Ìtàn Nípa Ẹgbẹ́</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </motion.div>
              </div>
            </nav>

            {/* Mobile Footer Colophon */}
            <div className="border-t border-[#b89a5a]/20 bg-[#050c17] px-6 py-5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-[#aaa397]">
                <span>Ibadan · Oyo State · Nigeria</span>
                <span>Est. 1829</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}