"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Crown, Calendar, Sparkles } from "lucide-react";
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";

export default function OlubadanVisit() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 sm:px-8 md:py-32 lg:px-12 border-b border-[#b89a5a]/25 text-[#f4f0e7]">
      {/* Background subtle watermark texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      <div className="mx-auto max-w-[1360px]">
        {/* Editorial Top Folio */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#b89a5a]/25 pb-6 mb-14">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#b89a5a]" />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
              ÌṢẸ̀LẸ̀ ÀṢÀ · HISTORIC ROYAL INSPECTION
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-[#aaa397]">
            <Calendar size={13} className="text-[#b89a5a]" />
            <span>26th October 2026 · Ibadanland</span>
          </div>
        </div>

        {/* Header Grid: Title and Context Narrative */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 border border-[#b89a5a]/40 bg-[#b89a5a]/10 px-3.5 py-1 mb-5">
              <Crown size={13} className="text-[#d4b56e]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4b56e]">
                Imperial Royal Visit
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.4rem,4.8vw,4.5rem)] font-normal leading-[1.05] tracking-[-0.03em] text-[#f4f0e7]">
              Kabiyesi Olubadan of Ibadan,
              <br />
              <span className="italic text-[#d4b56e]">
                Oba Adewolu Ladoja (Arusa I)
              </span>
              <br />
              Visits Ilé Ẹ̀kẹ́.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <p className="text-base leading-relaxed text-[#f4f0e7]/85 font-sans sm:text-lg sm:leading-8">
              In historic preparation for the official commissioning of{" "}
              <strong className="text-white font-medium">Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́</strong> (Mogaji&apos;s Hall),
              His Imperial Majesty{" "}
              <span className="text-[#d4b56e] font-semibold">
                Oba Adewolu Ladoja (Arusa I)
              </span>
              , Kabiyesi Olubadan of Ibadanland, paid a momentous visit to the complex on October 26, 2026, where he was warmly received with grand traditional honours by the Council of Mogajis and prominent elders of Ibadanland.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#aaa397]">
                Location: Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ Complex
              </span>
              <Link
                href="/ile-eke#royal-visit"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#d4b56e] hover:text-white transition"
              >
                <span>Full Gallery & Coverage</span>
                <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Curated Royal Photo Journal (2 Dominant Framing Panes) */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Photo 1: Processional Arrival */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group relative overflow-hidden border border-[#b89a5a]/35 bg-[#0b1627]"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#07111f]">
              <Image
                src="/images/olubadan-ile-eke-visit-1.jpg"
                alt="Kabiyesi Olubadan of Ibadan, Oba Adewolu Ladoja (Arusa I) arriving at Gbọngan Mogaji Ilé Ẹ̀kẹ́"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 border border-[#b89a5a]/60 bg-[#07111f]/90 px-3 py-1 backdrop-blur-md">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#d4b56e]">
                  Royal Processional Arrival
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2 text-[#b89a5a]">
                <Sparkles size={13} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                  The Imperial Majesty
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white">
                Arrival Under the Royal Parasol
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f4f0e7]/75">
                His Imperial Majesty Kabiyesi Olubadan of Ibadanland escorted by senior chieftains and Mogajis onto the grounds of the newly completed hall ahead of the historic commissioning ceremonies.
              </p>
            </div>
          </motion.div>

          {/* Photo 2: Council Assembly & Reception */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group relative overflow-hidden border border-[#b89a5a]/35 bg-[#0b1627]"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#07111f]">
              <Image
                src="/images/olubadan-ile-eke-visit-2.jpg"
                alt="Kabiyesi Olubadan surrounded by the Council of Mogajis of Ibadanland at Ilé Ẹ̀kẹ́ forecourt"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-80" />

              <div className="absolute top-4 left-4 border border-[#b89a5a]/60 bg-[#07111f]/90 px-3 py-1 backdrop-blur-md">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#d4b56e]">
                  Council Assembly Forecourt
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 border-t border-white/10">
              <div className="flex items-center gap-2 mb-2 text-[#b89a5a]">
                <Sparkles size={13} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                  Àwọn Mògájì Ilẹ̀ Ìbàdàn
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white">
                Reception by the Council of Mogajis
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f4f0e7]/75">
                Mogajis representing ancient quarters across Ibadanland gather with Oba Adewolu Ladoja (Arusa I) at the entrance of Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ in solidarity and institutional pride.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Archival Royal Citation */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 border-l-2 border-[#b89a5a] bg-[#0b1627]/80 p-6 sm:p-8 backdrop-blur-sm"
        >
          <p className="font-display italic text-lg sm:text-2xl text-[#f4f0e7]/90 leading-relaxed">
            &ldquo;Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ represents the living strength of Ibadan&apos;s traditional leadership. When the Olubadan steps into this hall, he walks with the ancestral weight and future dignity of every family compound in our land.&rdquo;
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#aaa397]">
            <span className="font-semibold uppercase tracking-wider text-[#d4b56e]">
              Official Record of Royal Visitation · Council of Mogajis
            </span>
            <span>October 26, 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

