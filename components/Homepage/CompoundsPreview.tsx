"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Compass, MapPin } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

const quarters = [
  {
    name: "Mapo Hill",
    yoruba: "Òkè Mapo",
    badge: "Civic Seat",
    desc: "The monumental hilltop of assembly where the Council of Mogajis and royal chieftaincy conferments overlook the city.",
  },
  {
    name: "Oja ’Ba",
    yoruba: "Ọjà Ọba",
    badge: "Royal Crossroads",
    desc: "The ancient market district and founding commercial hub binding early warrior compounds with civic governance.",
  },
  {
    name: "Bere",
    yoruba: "Bere",
    badge: "Warrior Quarters",
    desc: "The historic central intersection connecting founding compound gates, blacksmith lineages, and community courts.",
  },
  {
    name: "Kudeti & Eleta",
    yoruba: "Kudeti àti Eleta",
    badge: "Lineage Cradle",
    desc: "Vibrant quarters preserving centuries of communal governance, chieftaincy trees, and ancestral living quarters.",
  },
];

export default function CompoundsPreview() {
  return (
    <section
      id="compounds"
      className="relative overflow-hidden bg-[#f4f0e7] px-6 py-28 text-[#101923] sm:px-8 md:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end border-b border-[#101923]/15 pb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#9a5b43]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
                ÀWỌN AGBO ILÉ · GEOGRAPHY & MEMORY
              </p>
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#101923]">
              Àwọn Agbo Ilé
              <br />
              <span className="italic text-[#9a5b43]">and Ancient Quarters.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-lg"
          >
            <p className="text-base leading-relaxed text-[#1e242d]/85 sm:text-lg sm:leading-8 font-sans">
              Across Ibadanland, more than 2,500 family compounds (<span className="italic text-[#9a5b43]">Agbo Ilé</span>) carry centuries of identity, warrior lineage, and civic leadership. Explore how the physical landscape connects with family memory.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            EDITORIAL CARTOGRAPHIC LANDSCAPE
        ===================================================== */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Cartographic Visual Plane (7 Cols) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative overflow-hidden border border-[#101923]/20 bg-[#e7dfd0] p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between min-h-[460px]"
          >
            {/* Archival Grid Overlay */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(16,25,35,0.25) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(16,25,35,0.25) 1px, transparent 1px)
                `,
                backgroundSize: "44px 44px",
              }}
            />

            {/* Subtle Compass Mark */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#101923]/15 pb-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b43]">
                <Compass size={15} />
                <span>Historical Cartography · Ibadan Central</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#67635b]">
                Latitude 7.3775° N · Longitude 3.9470° E
              </span>
            </div>

            {/* Center Map Diagram Representation */}
            <div className="relative z-10 my-10 flex flex-col items-center justify-center text-center">
              <div className="relative border border-[#9a5b43]/40 bg-[#f4f0e7]/90 px-8 py-6 shadow-sm backdrop-blur-sm max-w-[380px]">
                <span className="font-display text-2xl text-[#101923] block">
                  Agbo Ilé Geography
                </span>
                <span className="mt-1 text-xs text-[#67635b] block">
                  Every quarter originated as an encampment of warrior chiefs and their extended families, forming an interconnected civic shield.
                </span>
                <div className="mt-4 flex justify-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-[#9a5b43]">
                  <span>• Bere</span>
                  <span>• Mapo</span>
                  <span>• Oja ’Ba</span>
                  <span>• Kudeti</span>
                </div>
              </div>
            </div>

            {/* Bottom Invitation Banner */}
            <div className="relative z-10 flex flex-col gap-4 border-t border-[#101923]/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-[#101923] font-medium">
                Over 2,500 ancestral compounds mapped across 11 Local Government Areas.
              </span>
              <Link
                href="/compounds"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9a5b43] hover:text-[#101923] transition-colors"
              >
                <span>Explore Interactive Map</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Historical Quarters Registry (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {quarters.map((q, i) => (
              <motion.div
                key={q.name}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: 0.1 * i }}
                className="group border border-[#101923]/15 bg-[#fbf9f4] p-5 sm:p-6 transition-all duration-300 hover:border-[#9a5b43] hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#9a5b43]" />
                    <h3 className="font-display text-xl sm:text-2xl text-[#101923] group-hover:text-[#9a5b43] transition-colors">
                      {q.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#67635b]">
                    {q.yoruba}
                  </span>
                </div>

                <p className="mt-2.5 text-xs leading-relaxed text-[#1e242d]/80 sm:text-sm">
                  {q.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}