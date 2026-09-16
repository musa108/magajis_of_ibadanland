"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#9a5b43] px-6 py-28 text-[#f4f0e7] sm:px-8 md:py-36 lg:px-12 lg:py-44">
      {/* Background Archival Monogram Watermark */}
      <div className="pointer-events-none absolute -right-12 -bottom-24 select-none font-display text-[26rem] font-normal leading-none text-white/[0.04]">
        Ì
      </div>

      <div className="relative mx-auto max-w-[1360px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-white/40" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
              ÀLÀÁFÍÀ FÚN ILẸ̀ ÌBÀDÀN · LIVING HERITAGE
            </p>
          </div>

          <h2 className="font-display text-[clamp(2.8rem,6.5vw,6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
            Ìtàn Ìbàdàn
            <br />
            <span className="italic text-white/85">continues.</span>
          </h2>

          <p className="mt-8 font-display text-2xl sm:text-3xl italic text-white/95 leading-snug">
            &ldquo;The story did not end with those who came before us. We are still carrying it.&rdquo;
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg sm:leading-8 font-sans">
            Explore the leaders (<span className="italic">Àwọn Mògájì</span>), ancestral compounds (<span className="italic">Agbo Ilé</span>), and chieftaincy traditions shaping the enduring legacy of Ibadanland.
          </p>

          <div className="mt-10">
            <Link
              href="/heritage"
              className="group inline-flex items-center gap-4 border border-white/80 bg-[#07111f] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f4f0e7] transition hover:bg-white hover:text-[#07111f] hover:border-white shadow-xl"
            >
              <span>Explore Ibadan&apos;s Heritage · Wò Ìtàn Àti Àṣà</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}