"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";

const navItems = [
  { label: "Home", yoruba: "Ilé", href: "/" },
  { label: "Heritage", yoruba: "Àkọ́ọ́lẹ̀", href: "/heritage" },
  { label: "Magajis", yoruba: "Àwọn Mògájì", href: "/magajis" },
  { label: "Compounds", yoruba: "Agbo Ilé", href: "/compounds" },
  { label: "Stories", yoruba: "Ìtàn", href: "/stories" },
];

const emptySubscribe = () => () => {};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const pathname = usePathname();

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
        <Link href="/" className="group flex items-center gap-3.5 text-white">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4b56e]/50 bg-[#0d1627]/80 p-1 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/mogaji-logo.svg"
              alt="Association of Mogajis of Ibadanland Logo"
              width={36}
              height={36}
              priority
              loading="eager"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-none">
            <div className="font-display text-2xl tracking-wide text-white group-hover:text-[#d4b56e] transition-colors">
              Mogajis
            </div>

            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#c8a85f]">
              Of Ibadan Land
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "text-[#d4b56e]" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
                {isMounted && isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#d4b56e]"
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/about"
            className={`flex items-center gap-2 border px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition ${
              pathname === "/about"
                ? "border-[#d4b56e] bg-[#d4b56e] text-[#0d1627]"
                : "border-white/30 text-white hover:bg-white hover:text-[var(--midnight)]"
            }`}
          >
            About · Ìtàn
            <ArrowUpRight size={14} />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden border-t border-white/10 bg-[var(--midnight)] md:hidden"
          >
            <nav className="flex flex-col px-6 py-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`border-b border-white/10 py-5 font-display text-3xl flex items-baseline justify-between ${
                      pathname === item.href ? "text-[#d4b56e]" : "text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-sans tracking-widest text-[var(--gold)] uppercase">
                      {item.yoruba}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--gold)] flex items-center justify-between"
              >
                <span>About the institution · Ìtàn Nípa Ẹgbẹ́</span>
                <ArrowUpRight size={14} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}