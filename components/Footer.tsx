"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

const navLinks = [
  { label: "Heritage · Àkọ́ọ́lẹ̀", href: "/heritage" },
  { label: "Magajis · Àwọn Mògájì", href: "/magajis" },
  { label: "Compounds · Agbo Ilé", href: "/compounds" },
  { label: "Ilé Ẹ̀kẹ́ · Ìkọ́lé", href: "/ile-eke" },
  { label: "Stories · Ìtàn", href: "/stories" },
  { label: "About · Nípa Ẹgbẹ́", href: "/about" },
];

export default function Footer() {
  return (
    <footer
      id="about"
      className="relative overflow-hidden bg-[#050c17] px-6 pt-24 pb-12 text-[#f4f0e7] sm:px-8 lg:px-12 border-t border-[#b89a5a]/25"
    >
      <div className="mx-auto max-w-[1360px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-b border-white/10 pb-16"
        >
          {/* Institutional Header Row */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#b89a5a]/60 bg-[#07111f] p-1">
                <Image
                  src="/images/mogaji-logo.svg"
                  alt="Official Emblem"
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#f4f0e7] leading-tight">
                  Mogajis of Ibadan Land
                </h3>
                <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em] text-[#b89a5a]">
                  Àwọn Mògájì Ilẹ̀ Ìbàdàn · Est. 1829
                </p>
              </div>
            </div>

            <div className="font-display text-xl sm:text-2xl italic text-[#d4b56e]/80">
              Àlàáfíà fún Ilẹ̀ Ìbàdàn.
            </div>
          </div>

          {/* Columns */}
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <p className="text-sm font-sans leading-7 text-[#aaa397] max-w-md">
                The official cultural institution safeguarding the oral history, family lineages, and ancestral compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>) of Ibadanland for generations to come.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a] mb-4">
                Explore Portal · Ṣe Àwárí
              </p>

              <ul className="space-y-2.5 text-sm text-[#f4f0e7]/75">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-[#d4b56e]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a] mb-4">
                Institutional Seat · Ilẹ̀
              </p>

              <address className="not-italic text-sm leading-relaxed text-[#aaa397]">
                Mapo Hill Secretariat
                <br />
                Ibadan Central
                <br />
                Oyo State, Nigeria
              </address>
            </div>
          </div>
        </motion.div>

        {/* Bottom Colophon */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-[#aaa397]/70 sm:flex-row">
          <span>© 2026 Association of Mogajis of Ibadanland · All Rights Reserved</span>
          <span>Preserving Living Heritage · Àṣà Lílè</span>
        </div>
      </div>
    </footer>
  );
}