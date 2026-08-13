"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Crown, ChevronRight, BookOpen, MapPin, Sparkles, ScrollText, Users } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";

const timelineEvents = [
  {
    year: "1829",
    number: "01",
    title: "The Foundations of Ibadan",
    yorubaTitle: "Ìpilẹ̀ṣẹ̀ Ilẹ̀ Ìbàdàn",
    desc: "A war camp established by Lagelu and allied Yoruba warriors fleeing the collapse of the Oyo Empire grows into a formidable fortress city.",
    detail: "Unlike ancient kingdoms bound by single royal bloodlines, Ibadan was founded as a republican sanctuary where bravery, military strategy, and civic wisdom determined leadership.",
    quarter: "Oke Mapo & Central Quarters",
  },
  {
    year: "1851",
    number: "02",
    title: "The Republican Chieftaincy Ladder",
    yorubaTitle: "Ìlànà Òṣèlú Àtijọ́",
    desc: "Establishment of the dual non-hereditary chieftaincy succession ladder: the Otun (Civil) and Balogun (Military) lines.",
    detail: "This revolutionary governance structure eliminated royal succession wars. Any Mogaji could advance rank-by-rank through service and longevity to ascend the throne of the Olubadan.",
    quarter: "Palace Council & War Chiefs",
  },
  {
    year: "1893",
    number: "03",
    title: "Growth of Ancestral Agbo Ilé",
    yorubaTitle: "Ìdàgbàsókè Àwọn Agbo Ilé",
    desc: "Over 2,500 family compounds flourish across Mapo, Bere, Kudeti, Oja 'Ba, and Oke Ado, establishing deep ancestral roots.",
    detail: "The Agbo Ilé became the foundational court of arbitration, cultural instruction, and community welfare, with the Mogaji serving as the lineage father.",
    quarter: "Bere, Kudeti, Eleta, Oja 'Ba",
  },
  {
    year: "1929",
    number: "04",
    title: "Mapo Hall Commissioned",
    yorubaTitle: "Ìkọ́lé Ilé Ìjọba Mapo",
    desc: "Mapo Hall is commissioned atop Mapo Hill, becoming the iconic neoclassical seat of traditional governance and civic assembly.",
    detail: "Built with local labor and stone, Mapo Hall served as the supreme meeting ground for the Council of Mogajis and royal chieftaincy conferments.",
    quarter: "Mapo Hill, Ibadan Central",
  },
  {
    year: "1936",
    number: "05",
    title: "Designation of the Olubadan Title",
    yorubaTitle: "Ìdásílẹ̀ Oyè Olúbàdàn",
    desc: "The title of the ruler of Ibadan officially transitions from Baale to Olubadan of Ibadanland ('Lord of Ibadan').",
    detail: "This elevation formalized Ibadan's monarchical status across Nigeria while strictly retaining its meritocratic dual-line succession system.",
    quarter: "Royal Stool of Ibadanland",
  },
  {
    year: "Present",
    number: "06",
    title: "The Association of Mogajis of Ibadanland",
    yorubaTitle: "Ẹgbẹ́ Àwọn MògGÁJÌ Ti ÒDE ÒNÍ",
    desc: "Unification of certified compound heads under a modern executive council to safeguard heritage and foster community development.",
    detail: "Under current leadership, the Association interfaces with civil authorities, digitizes lineage archives, and ensures Ibadan's living heritage thrives for future generations.",
    quarter: "All 11 Local Government Areas",
  },
];

const visualArchive = [
  {
    title: "Old Ibadan Architecture",
    yoruba: "Àwọn Ilé Àtijọ́",
    tag: "ARCHITECTURE",
    desc: "Clay wall courtyards, corrugated rust roofs, and open piazzas of ancient Agbo Ilé.",
    color: "from-[#b99a58]/30",
  },
  {
    title: "Chieftaincy Installation Rites",
    yoruba: "Ìwoye Àti Àwọn Ìlẹ̀kẹ̀",
    tag: "TRADITIONS",
    desc: "Beaded crowns (Ade), royal ilẹkẹ beads, and ceremonial sword conferments.",
    color: "from-[#8a4f2f]/30",
  },
  {
    title: "Historic Quarters of Ibadan",
    yoruba: "Àwọn ÀgbègbÈ Ìbàdàn",
    tag: "COMMUNITIES",
    desc: "From the slopes of Mapo Hill to Bere crossroads, the urban fabric of a fortress metropolis.",
    color: "from-[#1a3a6b]/30",
  },
  {
    title: "Custodians & Lineage Elders",
    yoruba: "Àwọn Àgbà Àwùjọ",
    tag: "PEOPLE",
    desc: "Mogajis and compound elders holding council under the shade of ancestral trees.",
    color: "from-[#2a4a1a]/30",
  },
];

export default function HeritagePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1.08, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0d1627] text-[#f5f1e8]">
      <Navbar />

      {/* =========================================================
          SECTION 1: HERITAGE HERO (DARK NAVY)
      ========================================================= */}
      <section className="relative min-h-[90vh] pt-36 pb-24 px-6 lg:px-14 overflow-hidden border-b border-white/10 flex items-center">
        {/* Background Parallax Image */}
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0 bg-cover bg-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ibadan-heritage.jpg"
            alt="Old Ibadan Heritage"
            className="h-full w-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1627]/90 via-[#0d1627]/80 to-[#0d1627]" />
        </motion.div>

        {/* Ambient Gold Radial Light */}
        <div className="pointer-events-none absolute left-[15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#b99a58] opacity-20 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-[1200px] w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Cultural Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#b99a58]/40 bg-[#0d1627]/80 px-4 py-1.5 backdrop-blur-md mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4b56e] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a85f]">
                ÀKỌ́Ọ́LẸ̀ ÌTÀN · THE STORY OF A CITY
              </span>
            </motion.div>

            {/* Editorial Title Sequence */}
            <motion.div variants={fadeUp} className="max-w-[950px]">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8a85f] mb-3">
                THE STORY OF A CITY.
              </p>
              <h1 className="font-display text-[clamp(3.2rem,7.5vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-white">
                Built by <span className="italic text-[#d4b56e]">generations.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-9 text-white/80 md:text-xl border-l-2 border-[#d4b56e] pl-6"
            >
              Ibadan&apos;s history is written in its people, ancestral family compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>), traditional governance institutions, and enduring customs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: TIMELINE — "A JOURNEY THROUGH TIME" (DARK NAVY)
      ========================================================= */}
      <section className="relative py-32 px-6 lg:px-14 bg-[#0d1627] border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f] mb-3">
              <ScrollText size={13} className="text-[#d4b56e]" />
              <span>ÀWỌN ÌṢẸ̀LẸ̀ ÌTÀN · A JOURNEY THROUGH TIME</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              The making <span className="italic text-[#d4b56e]">of Ibadan.</span>
            </h2>
          </div>

          {/* Timeline Stream */}
          <div className="relative border-l-2 border-[#d4b56e]/30 pl-8 md:pl-16 space-y-20">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                {/* Year Node Marker */}
                <div className="absolute -left-[41px] md:-left-[73px] top-1.5 flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full border border-[#d4b56e] bg-[#0d1627] text-[#d4b56e] group-hover:scale-125 transition-transform duration-300">
                  <div className="h-2 w-2 rounded-full bg-[#d4b56e]" />
                </div>

                <div className="rounded-xl border border-white/10 bg-[#121c30] p-7 md:p-9 shadow-xl transition-all duration-500 group-hover:border-[#d4b56e]/50">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-white/10 pb-4">
                    <span className="font-display text-3xl md:text-4xl font-bold text-[#d4b56e]">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#c8a85f] bg-[#0d1627] px-3 py-1 rounded border border-[#d4b56e]/30">
                      Phase {event.number}
                    </span>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-[#d4b56e]/80">
                    {event.yorubaTitle}
                  </span>
                  <h3 className="mt-1 font-display text-2xl md:text-3xl text-white group-hover:text-[#d4b56e] transition-colors">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-white/80 font-medium">
                    {event.desc}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {event.detail}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-white/55 uppercase tracking-widest border-t border-white/10 pt-4">
                    <MapPin size={12} className="text-[#d4b56e]" />
                    <span>Quarter: {event.quarter}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: PEOPLE & INSTITUTIONS (CREAM / IVORY)
      ========================================================= */}
      <section className="py-32 px-6 lg:px-14 bg-[#f4f0e6] text-[#101827]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a4f2f]">
              ÌṢẸ̀ṢẸ̀ ÀTI ÀṢÀ · BEYOND A CITY
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-6xl text-[#101827]">
              More than a city. <br />
              <span className="italic text-[#8a4f2f]">A living institution.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#101827]/70 md:text-lg">
              Ibadan does not belong to a single royal ruling house. It is governed by a meritocratic traditional system preserved across three foundational pillars.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* 01 THE PEOPLE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="rounded-xl border border-[#101827]/15 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-3xl font-bold text-[#8a4f2f]">01</span>
                <Users size={22} className="text-[#8a4f2f]" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#8a4f2f]">
                Àwọn Ìdílé
              </span>
              <h3 className="mt-1 font-display text-2xl text-[#101827]">THE PEOPLE</h3>
              <p className="mt-4 text-sm leading-7 text-[#101827]/75">
                The families and communities who built Ibadan from a warrior encampment into Africa&apos;s largest indigenous metropolis. Every family compound carries its own warrior history and lineage title.
              </p>
            </motion.div>

            {/* 02 THE INSTITUTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[#101827]/15 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-3xl font-bold text-[#8a4f2f]">02</span>
                <Crown size={22} className="text-[#8a4f2f]" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#8a4f2f]">
                Ìlànà Òṣèlú
              </span>
              <h3 className="mt-1 font-display text-2xl text-[#101827]">THE INSTITUTION</h3>
              <p className="mt-4 text-sm leading-7 text-[#101827]/75">
                The non-hereditary dual succession ladder — Otun (Civil) and Balogun (Military) — which enables leaders to ascend through merit, rank longevity, and service without dynastic disputes.
              </p>
            </motion.div>

            {/* 03 THE HERITAGE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[#101827]/15 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-3xl font-bold text-[#8a4f2f]">03</span>
                <Sparkles size={22} className="text-[#8a4f2f]" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#8a4f2f]">
                Àṣà Àti Ìtàn
              </span>
              <h3 className="mt-1 font-display text-2xl text-[#101827]">THE HERITAGE</h3>
              <p className="mt-4 text-sm leading-7 text-[#101827]/75">
                The customs, Oriki praise poetry, compound arbitration, and sacred installation rites preserved by the Association of Mogajis of Ibadanland across generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: VISUAL ARCHIVE GALLERY (DARK NAVY)
      ========================================================= */}
      <section className="py-32 px-6 lg:px-14 bg-[#08111f] border-t border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀWỌN ÀWÒRÁN ÌTÀN · VISUAL ARCHIVE
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-white">
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
                className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#121c30] p-6 shadow-xl"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.color} to-[#0d1627] opacity-50 group-hover:opacity-80 transition-opacity`} />

                <div className="relative z-10">
                  <span className="inline-block rounded border border-[#d4b56e]/40 bg-[#0d1627] px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest text-[#d4b56e]">
                    {item.tag}
                  </span>
                  <p className="mt-3 text-[9px] uppercase tracking-wider text-[#c8a85f]">
                    {item.yoruba}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-white group-hover:text-[#d4b56e] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: HERITAGE CLOSING CTA (TERRACOTTA)
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 bg-gradient-to-r from-[#8a4f2f] to-[#6a3b22] text-white">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f4f0e6]/80">
              ÌTÀN Ń TẸ̀SÍWÁJÚ · THE CONTINUOUS STORY
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-white">
              The story doesn&apos;t end here.
            </h2>
            <p className="mt-3 text-base text-white/80 max-w-lg leading-8">
              Discover the living custodians who carry these ancient compound traditions into the present day.
            </p>
          </div>

          <Link
            href="/magajis"
            className="inline-flex items-center gap-3 rounded bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a4f2f] transition hover:bg-[#f4f0e6] shadow-xl shrink-0"
          >
            <span>Explore the Magajis</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
