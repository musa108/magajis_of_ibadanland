"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface Milestone {
  year: string;
  title: string;
  yoruba: string;
  text: string;
}

const milestones: Milestone[] = [
  {
    year: "1829",
    title: "Foundations of Ibadan",
    yoruba: "Ìbẹ̀rẹ̀ Ìbàdàn",
    text: "A warrior encampment established by allied Yoruba warriors grows into the most formidable fortress metropolis in Yorubaland, governed by valor and civic wisdom rather than hereditary monarchies.",
  },
  {
    year: "1851",
    title: "The Chieftaincy Succession Ladder",
    yoruba: "Ìlànà Òṣèlú Àtijọ́",
    text: "Establishment of the revolutionary dual non-hereditary chieftaincy ladder — the Otun and Balogun lines — eliminating succession disputes and ensuring any qualified Mogaji can ascend to the Olubadan throne.",
  },
  {
    year: "1893",
    title: "Flourishing of Ancestral Compounds",
    yoruba: "Àwọn Agbo Ilé",
    text: "Over 2,500 ancestral family compounds take root across Mapo, Bere, Kudeti, and Oja 'Ba, establishing the Mogaji as the primary custodian of family welfare, land arbitration, and lineage history.",
  },
  {
    year: "1929",
    title: "Mapo Hall Commissioned",
    yoruba: "Ìkọ́lé Ilé Ìjọba Mapo",
    text: "Mapo Hall is opened atop Mapo Hill, built with local materials to serve as the civic parliament of Ibadanland and the meeting ground for the Council of Mogajis.",
  },
  {
    year: "Today",
    title: "Living Heritage & Chieftaincy Council",
    yoruba: "Àṣà Lílè Àti Ẹgbẹ́ Àwọn Mògájì",
    text: "The Association of Mogajis of Ibadanland unifies certified compound leaders, building modern institutions like Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́ and safeguarding living heritage for future generations.",
  },
];

export default function HeritageTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-28 text-[#f4f0e7] sm:px-8 md:py-36 lg:px-12 lg:py-44 border-b border-[#b89a5a]/20">
      <div className="mx-auto max-w-[1360px]">
        {/* =====================================================
            TIMELINE HEADER
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
                ÌTÀN ÀTI ÌṢẸ̀ṢẸ̀ · A JOURNEY THROUGH TIME
              </p>
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              Ìbàdàn: A city shaped
              <br />
              <span className="italic text-[#d4b56e]">by generations.</span>
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
              Unlike ancient kingdoms bound to single royal houses, Ibadan was founded as a republican sanctuary where service, courage, and compound wisdom shape leadership.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            CINEMATIC MILESTONE ENTRIES
        ===================================================== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 divide-y divide-white/10"
        >
          {milestones.map((item) => (
            <motion.div
              key={item.year}
              variants={fadeUp}
              className="grid gap-6 py-10 sm:py-12 md:grid-cols-[160px_1fr_1.2fr] md:items-baseline md:gap-10"
            >
              {/* Enormous Serif Numeral */}
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-normal text-[#d4b56e] tracking-tight">
                {item.year}
              </div>

              {/* Title & Yoruba Label */}
              <div>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#b89a5a] block mb-1">
                  {item.yoruba}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#f4f0e7] leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Narrative Text */}
              <div>
                <p className="text-base leading-relaxed text-[#f4f0e7]/80 font-sans">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================
            FOOTER LINK
        ===================================================== */}
        <div className="mt-14 border-t border-white/15 pt-8 flex justify-end">
          <Link
            href="/heritage"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#d4b56e] hover:text-[#f4f0e7] transition-colors"
          >
            <span>Explore Complete Historical Timeline</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}