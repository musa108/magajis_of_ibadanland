"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Landmark, Shield, Users } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function IleEkePreview() {
  return (
    <section
      id="ile-eke"
      className="relative overflow-hidden bg-[#07111f] px-6 py-28 text-[#f4f0e7] sm:px-8 md:py-36 lg:px-12 lg:py-44 border-y border-[#b89a5a]/20"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end border-b border-white/10 pb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#b89a5a]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
                ÌKỌ́LÉ ÀṢÀ · HISTORIC ASSEMBLY COMPLEX
              </p>
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              Gbọ̀ngàn Mògájì
              <br />
              <span className="italic text-[#d4b56e]">Ilé Ẹ̀kẹ́.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-lg"
          >
            <p className="text-base leading-relaxed text-[#f4f0e7]/80 sm:text-lg sm:leading-8 font-sans">
              The grand parliamentary hall and civic council secretariat of the{" "}
              <span className="text-white font-medium">Association of Mogajis of Ibadanland</span>. A monumental traditional complex built to house council conventions, royal arbitrations, and lineage archival preservation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/ile-eke"
                className="group inline-flex items-center gap-3 border border-[#b89a5a] bg-[#b89a5a] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#07111f] transition hover:bg-[#d4b56e]"
              >
                <span>Explore Ilé Ẹ̀kẹ́ Project</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/ile-eke#progress-update"
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#aaa397] transition hover:border-[#b89a5a] hover:text-[#f4f0e7]"
              >
                <span>Construction Journey</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            ARCHITECTURAL DOCUMENTARY SHOWCASE
        ===================================================== */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Main Visual: Ceremonial Facade & Portico (7 Cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group relative overflow-hidden border border-[#b89a5a]/30 bg-[#0b1627] lg:col-span-7 flex flex-col justify-between"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#07111f]">
              <Image
                src="/images/ile-eke-present-2.jpg"
                alt="Gbọngan Mogaji Ilé Ẹ̀kẹ́ - Present Condition Front Entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1627] via-transparent to-transparent opacity-80" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 border border-[#b89a5a]/60 bg-[#07111f]/90 px-3.5 py-1.5 backdrop-blur-md">
                <CheckCircle2 size={13} className="text-[#d4b56e]" />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#d4b56e]">
                  Present Condition · Exterior Completed
                </span>
              </div>
            </div>

            <div className="p-7 sm:p-9 border-t border-white/10">
              <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-[#b89a5a] block">
                Main Ceremonial Portico
              </span>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl text-[#f4f0e7]">
                Gbọ̀ngàn Mògájì · Grand Ceremonial Portico
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#f4f0e7]/75">
                Featuring the historic embossed inscription &ldquo;Gbọngan Mogaji Ilé Ẹ̀kẹ́&rdquo;, crossed royal staffs, classical columns with gold capitols, and processional staircases leading into the double-height assembly hall.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs text-[#aaa397]">
                <span>Ibadan Central, Oyo State</span>
                <span className="font-semibold text-[#d4b56e]">1,500+ Seat Assembly Capacity</span>
              </div>
            </div>
          </motion.div>

          {/* Secondary Photo & Civic Pillars (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Lateral Colonnade Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group relative overflow-hidden border border-white/15 bg-[#0b1627]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07111f]">
                <Image
                  src="/images/ile-eke-present-1.jpg"
                  alt="Ilé Ẹ̀kẹ́ Colonnade and Grounds"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1627]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="border border-white/20 bg-[#07111f]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#f4f0e7] backdrop-blur-md">
                    Campus Grounds & Side Colonnade
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Three Institutional Pillars */}
            <div className="grid gap-3 sm:grid-cols-3">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="border border-white/10 bg-[#0b1627] p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#d4b56e] mb-2">
                  <Landmark size={18} />
                  <span className="text-[10px] font-bold text-[#aaa397]">01</span>
                </div>
                <div>
                  <h4 className="font-display text-base text-white">Parliament</h4>
                  <p className="mt-1 text-[11px] leading-snug text-[#aaa397]">
                    1,500-seat council convention hall.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="border border-white/10 bg-[#0b1627] p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#d4b56e] mb-2">
                  <Shield size={18} />
                  <span className="text-[10px] font-bold text-[#aaa397]">02</span>
                </div>
                <div>
                  <h4 className="font-display text-base text-white">Arbitration</h4>
                  <p className="mt-1 text-[11px] leading-snug text-[#aaa397]">
                    Chieftaincy dispute resolution suite.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="border border-white/10 bg-[#0b1627] p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#d4b56e] mb-2">
                  <Users size={18} />
                  <span className="text-[10px] font-bold text-[#aaa397]">03</span>
                </div>
                <div>
                  <h4 className="font-display text-base text-white">Secretariat</h4>
                  <p className="mt-1 text-[11px] leading-snug text-[#aaa397]">
                    Executive leadership administration.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
