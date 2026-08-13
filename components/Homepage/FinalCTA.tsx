"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--terracotta)] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
      <div className="absolute -right-20 -top-40 font-display text-[30rem] leading-none text-white/[0.04]">
        I
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-5xl"
        >
          <p className="mb-7 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            ÀLÀÁFÍÀ FÚN ILẸ̀ ÌBÀDÀN · OUR HERITAGE & FUTURE
          </p>

          <h2 className="font-display text-[clamp(4rem,8vw,9rem)] leading-[0.78] tracking-[-0.045em] text-white">
            Ìtàn Ìbàdàn
            <br />
            <span className="italic text-white/65">
              continues.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Explore the leaders (<span className="italic">Mògájì</span>), ancestral compounds (<span className="italic">Agbo Ilé</span>), and timeless cultural traditions shaping the living legacy of Ibadanland.
          </p>

          <a
            href="/heritage"
            className="group mt-9 inline-flex items-center gap-4 bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--midnight)] transition hover:bg-[var(--midnight)] hover:text-white"
          >
            Explore Ibadan&apos;s heritage · Wò Ìtàn Àti Àṣà

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}