"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

/* =========================================================
   ANIMATION CONFIG
========================================================= */

const EASE = [0.22, 1, 0.36, 1] as const;

const heroContent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    y: "100%",
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.15,
      ease: EASE,
    },
  },
};

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* Background movement */
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "8%"]
  );

  /* Content movement */
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "12%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0]
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#0d1627] text-[#f5f1e8]"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="absolute inset-[-4%] z-0 will-change-transform"
      >
        <Image
          src="/images/ibadan-hero.jpg"
          alt="Aerial view of Ibadan"
          fill
          priority
          loading="eager"
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}

      {/* Overall darkening */}
      <div className="absolute inset-0 z-[1] bg-[#08111f]/35" />

      {/* Left side gradient for typography */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#08111f]/90 via-[#08111f]/50 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-[2] h-[45%] bg-gradient-to-t from-[#0d1627] via-[#0d1627]/55 to-transparent" />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 z-[2] h-[30%] bg-gradient-to-b from-[#08111f]/70 to-transparent" />

      {/* =====================================================
          SOFT GOLD LIGHT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 0.16,
          scale: 1,
        }}
        transition={{
          duration: 2.5,
          ease: EASE,
        }}
        className="pointer-events-none absolute left-[18%] top-[28%] z-[2] h-[500px] w-[500px] rounded-full bg-[#b99a58] blur-[150px]"
      />

      {/* =====================================================
          GRAIN
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[3] opacity-[0.035] mix-blend-soft-light">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="hero-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.75"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#hero-noise)"
          />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        variants={heroContent}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1200px] items-center px-6 pb-24 pt-28 lg:px-0"
      >
        <div className="max-w-[950px]">

          {/* =================================================
              CULTURAL EYEBROW BADGE
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="mb-8 flex items-center gap-3.5"
          >
            <span className="h-px w-10 bg-[#b99a58]" />

            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b99a58]/40 bg-[#0d1627]/60 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#d4b56e] animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
                Ẹ KÚ ÀBỌ̀ · OFFICIAL HERITAGE PORTAL
              </p>
            </div>
          </motion.div>

          {/* =================================================
              PRIMARY FOCAL HERO STATEMENT
          ================================================= */}

          <div className="overflow-hidden">
            <motion.h1
              variants={reveal}
              className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.035em] text-white/95"
            >
              WELCOME TO THE OFFICIAL PAGE OF
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              variants={reveal}
              className="font-display text-[clamp(2.5rem,5.2vw,5.2rem)] font-normal leading-[1.08] tracking-[-0.04em] text-white"
            >
              CERTIFIED MOGAJIS OF IBADAN LAND.
            </motion.h1>
          </div>

          {/* =================================================
              THE CULTURAL HIGHLIGHT CALLOUT
          ================================================= */}

          <div className="mt-3 overflow-hidden">
            <motion.h2
              variants={reveal}
              className="font-display text-[clamp(3.8rem,8.5vw,8.2rem)] font-normal italic leading-[0.88] tracking-[-0.05em] text-[#d4b56e] drop-shadow-lg"
            >
              KA RA O LE OO !!!
            </motion.h2>
          </div>

          {/* =================================================
              SUB-HEADING & DESCRIPTION (COMBINED LANGUAGES)
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/90"
          >
            <span className="text-[#c8a85f]">Àwọn Olùṣọ́ Ìtàn Àti Ìṣẹ̀ṣẹ̀</span>
            <span className="text-white/40">·</span>
            <span>Guardians of Living Heritage</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[620px] text-base leading-8 text-white/85 md:text-lg"
          >
            Discover the leaders, families, ancestral compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>), and cultural stories that form part of Ibadan&apos;s enduring legacy.
          </motion.p>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link
              href="#magajis"
              className="group inline-flex items-center gap-8 border border-white/30 bg-[#0d1627]/30 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm transition-all duration-500 hover:border-[#c8a85f] hover:bg-[#c8a85f] hover:text-[#0d1627]"
            >
              <span>
                Explore the Magajis · Àwọn Mògájì
              </span>

              <span className="flex h-7 w-7 items-center justify-center border border-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:border-[#0d1627]/30">
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM INFORMATION
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.2,
          ease: EASE,
        }}
        className="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-[1200px] px-6 pb-7 lg:px-0"
      >
        <div className="border-t border-white/15 pt-5">
          <div className="flex items-center justify-between">

            <p className="text-[8px] uppercase tracking-[0.25em] text-white/45">
              Ibadan · Oyo State · Nigeria
            </p>

            <p className="text-[8px] uppercase tracking-[0.25em] text-white/45">
              Est. 1829
            </p>

          </div>
        </div>
      </motion.div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: EASE,
        }}
        className="absolute bottom-[88px] right-6 z-10 hidden items-center gap-4 lg:flex"
      >
        <span className="h-px w-10 bg-white/25" />

        <span className="text-[8px] uppercase tracking-[0.28em] text-white/45">
          Scroll to explore
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown
            size={13}
            strokeWidth={1}
            className="text-white/55"
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          VIGNETTE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[4] shadow-[inset_0_0_180px_rgba(3,9,18,0.45)]" />
    </section>
  );
}