"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, MapPin, ScrollText, Users, Crown, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { fadeUp, staggerContainer, viewportOnce, EASE_ROYAL } from "@/lib/animations";

const timelineEvents = [
  {
    year: "1829",
    number: "01",
    title: "The Foundations of Ibadan",
    yorubaTitle: "Ìpilẹ̀ṣẹ̀ Ilẹ̀ Ìbàdàn",
    desc: "A war camp established by allied Yoruba warriors fleeing the collapse of the Oyo Empire grows into a formidable fortress metropolis.",
    detail:
      "Unlike ancient kingdoms bound by single royal bloodlines, Ibadan was founded as a republican sanctuary where bravery, military strategy, and civic wisdom determined leadership.",
    quarter: "Oke Mapo & Central Quarters",
  },
  {
    year: "1851",
    title: "The Republican Chieftaincy Ladder",
    yorubaTitle: "Ìlànà Òṣèlú Àtijọ́",
    desc: "Establishment of the dual non-hereditary chieftaincy succession ladder: the Otun (Civil) and Balogun (Military) lines.",
    detail:
      "This governance structure eliminated royal succession wars. Any qualified Mogaji can advance rank-by-rank through service and longevity to ascend the throne of the Olubadan.",
    quarter: "Palace Council & War Chiefs",
  },
  {
    year: "1893",
    title: "Growth of Ancestral Agbo Ilé",
    yorubaTitle: "Ìdàgbàsókè Àwọn Agbo Ilé",
    desc: "Over 2,500 family compounds flourish across Mapo, Bere, Kudeti, Oja 'Ba, and Oke Ado, establishing deep ancestral roots.",
    detail:
      "The Agbo Ilé became the foundational court of arbitration, cultural instruction, and community welfare, with the Mogaji serving as the lineage father.",
    quarter: "Bere, Kudeti, Eleta, Oja 'Ba",
  },
  {
    year: "1929",
    title: "Mapo Hall Commissioned",
    yorubaTitle: "Ìkọ́lé Ilé Ìjọba Mapo",
    desc: "Mapo Hall is commissioned atop Mapo Hill, becoming the iconic neoclassical seat of traditional governance and civic assembly.",
    detail:
      "Built with local materials, Mapo Hall serves as the supreme meeting ground for the Council of Mogajis and royal chieftaincy conferments.",
    quarter: "Mapo Hill, Ibadan Central",
  },
  {
    year: "1936",
    title: "Designation of the Olubadan Title",
    yorubaTitle: "Ìdásílẹ̀ Oyè Olúbàdàn",
    desc: "The title of the ruler of Ibadan officially transitions from Baale to Olubadan of Ibadanland ('Lord of Ibadan').",
    detail:
      "This elevation formalized Ibadan's monarchical status across Nigeria while strictly retaining its meritocratic dual-line succession system.",
    quarter: "Royal Stool of Ibadanland",
  },
  {
    year: "Present",
    title: "The Association of Mogajis of Ibadanland",
    yorubaTitle: "Ẹgbẹ́ Àwọn Mògájì Ti Òde Òní",
    desc: "Unification of certified compound heads under a modern executive council to safeguard heritage and foster community development.",
    detail:
      "Under current leadership, the Association interfaces with civil authorities, preserves lineage archives, and constructs monumental assembly secretariats like Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́.",
    quarter: "All 11 Local Government Areas",
  },
];

const visualArchive = [
  {
    title: "Old Ibadan Architecture",
    yoruba: "Àwọn Ilé Àtijọ́",
    tag: "ARCHITECTURE",
    desc: "Clay wall courtyards, corrugated rust roofs, and open piazzas of ancient Agbo Ilé compounds.",
  },
  {
    title: "Chieftaincy Installation Rites",
    yoruba: "Ìwoye Àti Àwọn Ìlẹ̀kẹ̀",
    tag: "TRADITIONS",
    desc: "Beaded royal crowns, sacred ilẹkẹ beads, and ceremonial sword conferments under the Olubadan-in-Council.",
  },
  {
    title: "Historic Quarters of Ibadan",
    yoruba: "Àwọn Àgbègbè Ìbàdàn",
    tag: "GEOGRAPHY",
    desc: "From the slopes of Mapo Hill to Bere crossroads, the urban fabric of a fortress metropolis.",
  },
  {
    title: "Custodians & Lineage Elders",
    yoruba: "Àwọn Àgbà Àwùjọ",
    tag: "LEADERSHIP",
    desc: "Mogajis and compound elders holding council in family compounds to preserve oral history.",
  },
];

export default function HeritagePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1.05, 1]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#07111f] text-[#f4f0e7]">
      <Navbar />

      {/* =========================================================
          HERITAGE HERO
      ========================================================= */}
      <section className="relative min-h-[85vh] pt-36 pb-24 px-6 lg:px-12 overflow-hidden border-b border-[#b89a5a]/20 flex items-center">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        >
          <Image
            src="/images/ibadan-heritage.jpg"
            alt="Historical panoramic vista of Ibadanland"
            fill
            priority
            className="object-cover object-center grayscale-[30%] opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/90 via-[#07111f]/80 to-[#07111f]" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-[1360px] w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            {/* Cultural Eyebrow */}
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#b89a5a]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
                ÀKỌ́Ọ́LẸ̀ ÌTÀN · THE STORY OF A CITY
              </p>
            </motion.div>

            {/* Title Sequence */}
            <motion.div variants={fadeUp} className="max-w-[950px]">
              <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
                Built by courage.
                <br />
                <span className="italic text-[#d4b56e]">Shaped by generations.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-relaxed text-[#f4f0e7]/85 sm:text-lg sm:leading-8 border-l-2 border-[#b89a5a] pl-6 font-sans"
            >
              Ibadan&apos;s history is written in its people, ancestral family compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>), meritocratic chieftaincy traditions, and enduring customs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          HISTORICAL TIMELINE STREAM
      ========================================================= */}
      <section className="relative py-32 px-6 lg:px-12 bg-[#07111f] border-b border-[#b89a5a]/20">
        <div className="mx-auto max-w-[1360px]">
          {/* Header */}
          <div className="mb-20 border-b border-white/10 pb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#d4b56e] mb-3">
              <ScrollText size={15} />
              <span>ÀWỌN ÌṢẸ̀LẸ̀ ÌTÀN · A CHRONICLE THROUGH TIME</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f4f0e7]">
              The Making <span className="italic text-[#d4b56e]">of Ibadan.</span>
            </h2>
          </div>

          {/* Timeline Stream */}
          <div className="relative border-l-2 border-[#b89a5a]/30 pl-8 md:pl-16 space-y-16">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.08, ease: EASE_ROYAL }}
                className="relative group"
              >
                {/* Node Marker */}
                <div className="absolute -left-[41px] md:-left-[73px] top-1.5 flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full border border-[#b89a5a] bg-[#07111f] text-[#d4b56e]">
                  <div className="h-2 w-2 rounded-full bg-[#d4b56e]" />
                </div>

                <div className="border border-white/10 bg-[#0b1627] p-7 md:p-9 transition-colors duration-500 hover:border-[#b89a5a]/60">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-white/10 pb-4">
                    <span className="font-display text-3xl sm:text-4xl text-[#d4b56e]">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a] border border-[#b89a5a]/30 px-3 py-1">
                      Phase {event.number}
                    </span>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#b89a5a] block mb-1">
                    {event.yorubaTitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#f4f0e7] leading-tight">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-[#f4f0e7]/85 font-sans">
                    {event.desc}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#aaa397] font-sans">
                    {event.detail}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-[#b89a5a] uppercase tracking-widest border-t border-white/10 pt-4 font-sans">
                    <MapPin size={13} />
                    <span>Quarter: {event.quarter}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          THE THREE FOUNDATIONAL PILLARS (CREAM FOLIO)
      ========================================================= */}
      <section className="py-32 px-6 lg:px-12 bg-[#e8e0d0] text-[#101923]">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-16 border-b border-[#101923]/15 pb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
              ÌṢẸ̀ṢẸ̀ ÀTI ÀṢÀ · BEYOND A CITY
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-[#101923]">
              More than a city.
              <br />
              <span className="italic text-[#9a5b43]">A living institution.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1e242d]/85 font-sans sm:text-lg">
              Ibadan does not belong to a single royal dynasty. It is governed by a meritocratic traditional system preserved across three foundational pillars.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* 01 THE PEOPLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="border border-[#101923]/15 bg-[#f4f0e7] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-bold text-[#9a5b43]">01</span>
                  <Users size={22} className="text-[#9a5b43]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b43]">
                  Àwọn Ìdílé
                </span>
                <h3 className="mt-1 font-display text-2xl text-[#101923]">THE PEOPLE</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1e242d]/80 font-sans">
                  The families and warrior lineages who built Ibadan from an encampment into Africa&apos;s largest indigenous metropolis. Every compound carries its own warrior history and title.
                </p>
              </div>
            </motion.div>

            {/* 02 THE INSTITUTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="border border-[#101923]/15 bg-[#f4f0e7] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-bold text-[#9a5b43]">02</span>
                  <Crown size={22} className="text-[#9a5b43]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b43]">
                  Ìlànà Òṣèlú
                </span>
                <h3 className="mt-1 font-display text-2xl text-[#101923]">THE INSTITUTION</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1e242d]/80 font-sans">
                  The dual succession ladder — Otun (Civil) and Balogun (Military) — which enables leaders to ascend through merit, rank longevity, and civic contribution without succession crises.
                </p>
              </div>
            </motion.div>

            {/* 03 THE HERITAGE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="border border-[#101923]/15 bg-[#f4f0e7] p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl font-bold text-[#9a5b43]">03</span>
                  <Sparkles size={22} className="text-[#9a5b43]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b43]">
                  Àṣà Àti Ìtàn
                </span>
                <h3 className="mt-1 font-display text-2xl text-[#101923]">THE HERITAGE</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1e242d]/80 font-sans">
                  The oral praise poetry (Oríkì), compound dispute arbitration, sacred rites, and assemblies safeguarded by the Association of Mogajis across centuries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          VISUAL ARCHIVE CHRONICLES
      ========================================================= */}
      <section className="py-32 px-6 lg:px-12 bg-[#07111f] border-b border-[#b89a5a]/20">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-16 border-b border-white/10 pb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
              ÀWỌN ÀWÒRÁN ÌTÀN · VISUAL ARCHIVE
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-[#f4f0e7]">
              Echoes of Old Ibadan.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visualArchive.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 bg-[#0b1627] p-6 flex flex-col justify-between transition-colors hover:border-[#b89a5a]/60"
              >
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#b89a5a] border border-[#b89a5a]/40 px-2.5 py-0.5 inline-block">
                    {item.tag}
                  </span>
                  <p className="mt-3 text-[10px] font-sans font-medium uppercase tracking-widest text-[#aaa397]">
                    {item.yoruba}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-[#f4f0e7]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#f4f0e7]/70 font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HERITAGE CLOSING CTA (TERRACOTTA)
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#9a5b43] text-[#f4f0e7]">
        <div className="mx-auto max-w-[1360px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
              ÌTÀN Ń TẸ̀SÍWÁJÚ · THE CONTINUOUS STORY
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-white">
              The story doesn&apos;t end here.
            </h2>
            <p className="mt-3 text-base text-white/85 max-w-lg leading-relaxed font-sans">
              Discover the living custodians who carry these ancient compound traditions into the present day.
            </p>
          </div>

          <Link
            href="/magajis"
            className="group inline-flex items-center gap-3 border border-white bg-[#07111f] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f4f0e7] transition hover:bg-white hover:text-[#07111f] shrink-0 shadow-lg"
          >
            <span>Explore the Magajis</span>
            <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
