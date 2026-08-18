"use client";

import { ArrowUpRight, Landmark, Shield, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";

export default function IleEkePreview() {
  return (
    <section
      id="ile-eke"
      className="relative overflow-hidden bg-[#0d1627] px-6 py-28 text-white md:px-10 md:py-36 lg:px-14 lg:py-44 border-y border-white/10"
    >
      {/* Background Ambience Glow */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#b89a5a] opacity-10 blur-[150px]" />
      <div className="pointer-events-none absolute right-[5%] bottom-[15%] h-[400px] w-[400px] rounded-full bg-[#9a5b43] opacity-10 blur-[140px]" />

      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end mb-16 md:mb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4b56e]/40 bg-[#121c30] px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4b56e] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
                ÌKỌ́LÉ ÀṢÀ · HISTORIC ASSEMBLY HALL
              </span>
            </div>

            <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-[0.85] tracking-[-0.045em] text-white">
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
            className="flex flex-col justify-between gap-6"
          >
            <p className="text-base leading-8 text-white/75 md:text-lg">
              The grand parliamentary hall and civic council secretariat of the{" "}
              <span className="text-white font-medium">Association of Mogajis of Ibadanland</span>. A monumental traditional complex built to house council conventions, royal arbitrations, and archival preservation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/ile-eke"
                className="group inline-flex items-center gap-3 bg-[#d4b56e] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0d1627] transition hover:bg-[#c8a85f] shadow-xl"
              >
                <span>Explore Ilé Ẹ̀kẹ́ Project</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/ile-eke#progress-update"
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-white hover:text-white"
              >
                <span>Before & Present Status</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Visual Showcase: Present Condition & Highlights */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Main Visual: Front Elevation Present Condition */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#121c30] shadow-2xl lg:col-span-7 flex flex-col"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#182233]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ile-eke-present-2.jpg"
                alt="Gbọngan Mogaji Ilé Ẹ̀kẹ́ - Present Condition Front Facade"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent opacity-90" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-[#d4b56e]/50 bg-[#0d1627]/90 px-3.5 py-1.5 backdrop-blur-md">
                <CheckCircle2 size={13} className="text-[#d4b56e]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4b56e]">
                  Present Condition · Exterior Completed
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-[#121c30]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                  Main Entrance & Assembly Facade
                </p>
                <h3 className="mt-1 font-display text-2xl md:text-3xl text-white">
                  Gbọ̀ngàn Mògájì · Grand Ceremonial Portico
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Featuring the historic embossed inscription, gold-crested royal columns, stainless steel processional stairs, and double-height assembly hall doors.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                <span>Location: Ibadan Central</span>
                <span className="font-semibold text-[#d4b56e]">1,500+ Seat Assembly Capacity</span>
              </div>
            </div>
          </motion.div>

          {/* Side Cards: Secondary Present View & Key Features */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            {/* Secondary Photo: Side View & Colonnade */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#121c30] shadow-xl"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#182233]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ile-eke-present-1.jpg"
                  alt="Ilé Ẹ̀kẹ́ Side Colonnade and Landscaped Grounds"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-md border border-white/20 bg-[#0d1627]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-md">
                    Campus Grounds & Side Colonnade
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Pillars Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid gap-3 sm:grid-cols-3 flex-1"
            >
              <motion.div
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-[#121c30] p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#d4b56e] mb-2">
                  <Landmark size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">01</span>
                </div>
                <div>
                  <h4 className="font-display text-base text-white">Parliament</h4>
                  <p className="mt-1 text-[11px] leading-snug text-white/60">
                    1,500-seat hall for council conventions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-[#121c30] p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#d4b56e] mb-2">
                  <Shield size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">02</span>
                </div>
                <div>
                  <h4 className="font-display text-base text-white">Arbitration</h4>
                  <p className="mt-1 text-[11px] leading-snug text-white/60">
                    Traditional dispute resolution suite.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-[#121c30] p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between text-[#d4b56e] mb-2">
                  <Users size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">03</span>
                </div>
                <div>
                  <h4 className="font-display text-base text-white">Secretariat</h4>
                  <p className="mt-1 text-[11px] leading-snug text-white/60">
                    Executive administration offices.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
