"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import { fadeUp, viewportOnce, EASE_ROYAL } from "@/lib/animations";

export interface FeaturedMogaji {
  id: number;
  name: string;
  role: string;
  yorubaRole: string;
  compound: string;
  location: string;
  image: string;
  badge: string;
  detail: string;
}

const primaryLeader: FeaturedMogaji = {
  id: 1,
  name: "Mogaji Asimiyu Adepoju Ariori",
  role: "President, Association of Mogajis of Ibadanland",
  yorubaRole: "Aṣáájú Ẹgbẹ́ Àwọn Mògájì",
  compound: "Agbo Ilé Olorisa",
  location: "Oja Oke Ado, Ibadan",
  image: "/images/mogaji-asimiyu-ariori.jpg",
  badge: "President · Serving 2nd 4-Year Term",
  detail:
    "Installed as Mogaji of Olorisa Compound over 36 years ago by Oba Oloyede Asanike. A thorough-bred Ibadan leader and wise counsellor in Yoruba chieftaincy affairs, guiding the traditional council with quiet authority.",
};

const secondaryLeaders: FeaturedMogaji[] = [
  {
    id: 2,
    name: "Oloye Allen Olutunji Ajala Odugade",
    role: "General Secretary, Association of Mogajis",
    yorubaRole: "Àkọ́ọ́wé Àgbà",
    compound: "Agbo Ilé Odugade",
    location: "Aremo / Ibadan Central",
    image: "/images/mogaji-oluye-allen-odugade.jpg",
    badge: "General Secretary · 2nd Term",
    detail:
      "Installed in 2016 following the transition of the 40th Olubadan Oba Odulana Odugade I. Master's in Managerial Psychology (UI) and Associate Member of the Insurance Institute of Nigeria.",
  },
  {
    id: 3,
    name: "Mogaji Toki of Ilé Toki",
    role: "Mogaji of Ilé Toki Family Compound",
    yorubaRole: "Mògájì Agbo Ilé Toki",
    compound: "Agbo Ilé Toki",
    location: "Ibadan Central, Oyo State",
    image: "/images/mogaji-toki.jpg",
    badge: "Lineage Custodian",
    detail:
      "Incumbent Mogaji and custodian of the historical Ilé Toki ancestral family compound in Ibadanland, preserving warrior lineage traditions and compound welfare.",
  },
];

export default function FeaturedMagajis() {
  return (
    <section
      id="magajis"
      className="relative overflow-hidden bg-[#07111f] px-6 py-28 text-[#f4f0e7] sm:px-8 md:py-36 lg:px-12 lg:py-44 border-b border-[#b89a5a]/20"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end border-b border-white/10 pb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#b89a5a]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
                ÀWỌN MÒGÁJÌ · GUARDIANS OF LEADERSHIP
              </p>
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              Àwọn Mògájì
              <br />
              <span className="italic text-[#d4b56e]">of Ibadan Land.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-md"
          >
            <p className="text-base leading-relaxed text-[#f4f0e7]/75 sm:text-lg sm:leading-8 font-sans">
              Meet the distinguished compound heads (<span className="italic text-[#d4b56e]">Àwọn Mògájì</span>) steering the traditional council, resolving family matters, and preserving the lineages of Ibadanland&apos;s ancestral compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>).
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            EDITORIAL MAGAZINE SPREAD
        ===================================================== */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* PRIMARY FEATURED LEADER (7 COLS) */}
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="group lg:col-span-7 flex flex-col justify-between border border-[#b89a5a]/30 bg-[#0b1627] p-7 sm:p-9 transition-colors duration-500 hover:border-[#b89a5a]"
          >
            <div>
              {/* Leader Portrait */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#b89a5a]/20 bg-[#07111f]">
                <Image
                  src={primaryLeader.image}
                  alt={primaryLeader.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1627] via-transparent to-transparent opacity-80" />

                {/* Subtle Archival Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="border border-[#b89a5a]/60 bg-[#07111f]/90 px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#d4b56e] backdrop-blur-sm">
                    {primaryLeader.yorubaRole}
                  </span>
                </div>
              </div>

              {/* Leader Meta & Bio */}
              <div className="mt-7">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#b89a5a]">
                  <span>{primaryLeader.role}</span>
                  <span className="text-[#aaa397] font-normal">{primaryLeader.badge}</span>
                </div>

                <h3 className="mt-2 font-display text-3xl sm:text-4xl text-[#f4f0e7] group-hover:text-[#d4b56e] transition-colors leading-tight">
                  {primaryLeader.name}
                </h3>

                <p className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#aaa397]">
                  <MapPin size={13} className="text-[#b89a5a]" />
                  <span>{primaryLeader.compound} · {primaryLeader.location}</span>
                </p>

                <p className="mt-5 border-t border-white/10 pt-5 text-base leading-relaxed text-[#f4f0e7]/80">
                  {primaryLeader.detail}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <Link
                href="/magajis"
                className="group/link inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4b56e] hover:text-[#f4f0e7] transition-colors"
              >
                <span>Read Full Biography & Lineage</span>
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </Link>
            </div>
          </motion.article>

          {/* SECONDARY LEADERS COLUMN (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {secondaryLeaders.map((leader, index) => (
              <motion.article
                key={leader.id}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: 0.15 * (index + 1), duration: 0.85, ease: EASE_ROYAL }}
                className="group border border-white/10 bg-[#0b1627] p-6 sm:p-7 transition-colors duration-500 hover:border-[#b89a5a]/60"
              >
                <div className="grid gap-6 sm:grid-cols-[140px_1fr] items-start">
                  {/* Portrait */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden border border-white/15 bg-[#07111f] shrink-0">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="180px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1627]/70 via-transparent to-transparent" />
                  </div>

                  {/* Information */}
                  <div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#b89a5a] block">
                      {leader.yorubaRole}
                    </span>

                    <h4 className="mt-1 font-display text-xl sm:text-2xl text-[#f4f0e7] group-hover:text-[#d4b56e] transition-colors leading-snug">
                      {leader.name}
                    </h4>

                    <p className="mt-1 text-xs text-[#aaa397]">
                      {leader.role}
                    </p>

                    <p className="mt-2 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-[#b89a5a]/90">
                      <MapPin size={11} />
                      {leader.compound}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-[#f4f0e7]/75 line-clamp-3">
                      {leader.detail}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-3 flex justify-end">
                  <Link
                    href="/magajis"
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#aaa397] hover:text-[#d4b56e] transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            FOOTER CALL TO ACTION
        ===================================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-8"
        >
          <p className="font-display text-lg italic text-[#aaa397]">
            Official Directory of Certified Compound Leaders of Ibadanland.
          </p>

          <Link
            href="/magajis"
            className="group inline-flex items-center gap-3 border border-[#b89a5a]/60 bg-[#07111f] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#d4b56e] transition-all hover:bg-[#b89a5a] hover:text-[#07111f]"
          >
            <span>Explore all Magajis · Àwọn Mògájì Pátápátá</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}