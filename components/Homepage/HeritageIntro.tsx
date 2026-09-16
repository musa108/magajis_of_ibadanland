"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce, EASE_ROYAL } from "@/lib/animations";

export default function HeritageIntro() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-[#e8e0d0] px-6 py-28 text-[#101923] sm:px-8 md:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* =====================================================
            EDITORIAL CHAPTER HEADER
        ===================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#9a5b43]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
              ÀKỌ́Ọ́LẸ̀ ÌTÀN · A LIVING HERITAGE
            </p>
          </motion.div>

          {/* Heading & Narrative Layout */}
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <motion.div variants={fadeUp}>
              <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.04] tracking-[-0.035em] text-[#101923]">
                Agbo Ilé kọ̀ọ̀kan
                <br />
                <span className="italic text-[#9a5b43]">has a story.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-[480px] pb-2">
              <p className="text-base leading-relaxed text-[#1e242d]/85 sm:text-lg sm:leading-8 font-sans">
                Before the streets had modern names, families already knew these places as home. The compounds of Ibadan carry the memory of those who came before us — their names, their work, their relationships, and the stories handed down from one generation to another.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#67635b]">
                Ibadan, <span className="font-medium text-[#101923]">Ilẹ̀ Olúyọ̀lé</span> — a city shaped not by a single dynasty, but by a coalition of warrior lineages, community arbiters, and family elders.
              </p>

              <div className="mt-8">
                <Link
                  href="/heritage"
                  className="group inline-flex items-center gap-3 border-b border-[#101923]/30 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#101923] transition-colors hover:border-[#9a5b43] hover:text-[#9a5b43]"
                >
                  <span>Discover the Heritage · Wò Ìtàn Àti Àṣà</span>
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              LARGE ARCHIVAL PHOTOGRAPH
          ===================================================== */}
          <motion.div
            variants={fadeUp}
            className="relative mt-16 overflow-hidden border border-[#101923]/15 bg-[#ddd5c2] md:mt-24"
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
              <motion.div
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 1.4, ease: EASE_ROYAL }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/ibadan-heritage.jpg"
                  alt="Archival view of traditional Ibadan compounds and settlements"
                  fill
                  sizes="(max-width: 1360px) 100vw, 1360px"
                  className="object-cover object-center grayscale-[20%]"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#101923]/60 via-transparent to-transparent" />
            </div>

            {/* Archival Caption Colophon */}
            <div className="flex flex-col justify-between gap-2 border-t border-[#101923]/15 bg-[#f4f0e7] px-6 py-4 sm:flex-row sm:items-center sm:px-8">
              <span className="font-display text-sm italic text-[#101923]">
                Àwọn Agbo Ilé Ilẹ̀ Ìbàdàn · The living compounds and architectural memory of Ibadanland.
              </span>
              <span className="text-[10px] font-sans font-medium uppercase tracking-[0.22em] text-[#67635b]">
                Historical Archive · Photo Registry
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}