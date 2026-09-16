"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { EASE_ROYAL } from "@/lib/animations";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Very gentle, documentary-style parallax
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#07111f] text-[#f4f0e7]"
    >
      {/* =====================================================
          CINEMATIC AERIAL BACKGROUND
      ===================================================== */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-[-2%] z-0 will-change-transform pointer-events-none"
      >
        <Image
          src="/images/ibadan-hero.jpg"
          alt="Aerial view across the historic city and red-oxide roofs of Ibadan"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Cinematic Overlays: Navy Tint, Left Shadow for Text, Bottom Grounding */}
      <div className="absolute inset-0 z-[1] bg-[#07111f]/65" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/40" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-[#07111f] via-[#07111f]/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[2] h-32 bg-gradient-to-b from-[#07111f]/80 to-transparent" />

      {/* Subtle Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[3] shadow-[inset_0_0_160px_rgba(4,9,18,0.7)]" />

      {/* Archival Film Grain */}
      <div className="pointer-events-none absolute inset-0 z-[3] opacity-[0.03] mix-blend-soft-light">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <filter id="hero-film-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-film-grain)" />
        </svg>
      </div>

      {/* =====================================================
          HERO MAIN CONTENT
      ===================================================== */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1360px] flex-col justify-center px-6 pt-32 pb-24 sm:px-8 lg:px-12"
      >
        <div className="max-w-[920px]">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_ROYAL }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[1px] w-8 bg-[#b89a5a]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d4b56e]">
              Ẹ KÚ ÀBỌ̀ · OFFICIAL HERITAGE PORTAL
            </p>
          </motion.div>

          {/* Primary Statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: EASE_ROYAL }}
          >
            <h1 className="font-display text-[clamp(2.5rem,5.8vw,5.6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              Guardians of
              <br />
              <span className="italic text-[#d4b56e]">Living Heritage.</span>
            </h1>
          </motion.div>

          {/* Cultural Greeting & Sub-statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE_ROYAL }}
            className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-1"
          >
            <span className="font-display text-2xl sm:text-3xl italic text-[#d4b56e]/90">
              Ka Ra O Le Ooo !!!
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#aaa397]">
              Àwọn Olùṣọ́ Ìtàn Àti Ìṣẹ̀ṣẹ̀
            </span>
          </motion.div>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: EASE_ROYAL }}
            className="mt-6 max-w-[640px] text-base leading-relaxed text-[#f4f0e7]/85 sm:text-lg sm:leading-8 font-sans font-normal"
          >
            Discover the leaders, ancestral compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>), and cultural stories carrying the living memory of Ibadanland.
          </motion.p>

          {/* Restrained CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: EASE_ROYAL }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link
              href="#magajis"
              className="group inline-flex items-center gap-5 border border-[#b89a5a]/70 bg-[#07111f]/70 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#f4f0e7] backdrop-blur-sm transition-all duration-300 hover:border-[#d4b56e] hover:bg-[#b89a5a] hover:text-[#07111f]"
            >
              <span>Explore the Magajis · Àwọn Mògájì</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/heritage"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#aaa397] transition-colors hover:text-[#d4b56e] px-2 py-3"
            >
              <span>Our History · Ìtàn Ìbàdàn</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM CIVIC COLOPHON
      ===================================================== */}
      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1360px] px-6 pb-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border-t border-white/15 pt-4 text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-[#aaa397]">
          <span>Ibadan · Oyo State · Nigeria</span>

          <div className="hidden sm:flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#b89a5a]" />
            <span>Est. 1829 · Ilẹ̀ Olúyọ̀lé</span>
          </div>

          <a
            href="#heritage"
            className="group flex items-center gap-2 text-[#aaa397] hover:text-[#d4b56e] transition-colors"
            aria-label="Scroll down to Heritage Introduction"
          >
            <span className="hidden md:inline">Scroll to Explore</span>
            <ArrowDown
              size={12}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}