"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Home, ChevronRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import HeritageMap from "@/components/HeritageMap";

const compounds = [
  {
    id: "olorisa",
    name: "Olorisa Compound",
    yoruba: "Agbo Ilé Olorisa",
    location: "Oja Oke Ado, Ibadan",
    quarter: "Ibadan South-West",
    mogaji: "Mogaji Asimiyu Adepoju Ariori",
    description:
      "One of the most storied ancestral compounds in Ibadanland. Olorisa Compound has been central to the religious, civic, and leadership traditions of Ibadan's indigenous families for centuries.",
    heritage: "Founded during the early settlements of Ibadan.",
  },
  {
    id: "odugade",
    name: "Odugade Compound",
    yoruba: "Agbo Ilé Odugade",
    location: "Aremo / Ibadan Central",
    quarter: "Ibadan Central",
    mogaji: "Oloye Allen Olutunji Ajala Odugade",
    description:
      "Home of the distinguished Odugade royal lineage, which produced Oba (Dr) Samuel Osundiran Odulana Odugade I — the 40th Olubadan of Ibadanland. A compound deeply intertwined with Ibadan's monarchical history.",
    heritage: "Ancestral home of the 40th Olubadan of Ibadanland.",
  },
  {
    id: "aleshinloye",
    name: "Aleshinloye Compound",
    yoruba: "Agbo Ilé Aleshinloye",
    location: "Oke-Ado / Aleshinloye Market Area",
    quarter: "Ibadan North-West",
    mogaji: "Chief Aleshinloye Family Head",
    description:
      "The Aleshinloye compound is historically linked to one of the most prominent political dynasties of modern Ibadanland, associated with market leadership and civic influence.",
    heritage: "Legacy of commercial and civic leadership in Ibadan.",
  },
  {
    id: "lafiku",
    name: "Lafiku Compound",
    yoruba: "Agbo Ilé Lafiku",
    location: "Eleta, Ibadan",
    quarter: "Ibadan South-East",
    mogaji: "Chief Mosudi Tijani",
    description:
      "Located in Eleta, the Lafiku compound is a vibrant ancestral family home maintaining its centuries-old traditions of communal governance and family unity.",
    heritage: "Prominent family home in Eleta since the 19th century.",
  },
  {
    id: "ekolo",
    name: "Ekolo Compound",
    yoruba: "Agbo Ilé Ekolo",
    location: "Ibadan South-East",
    quarter: "Ibadan South-East",
    mogaji: "Chief Sakiru Olasunkade Adekola",
    description:
      "The Ekolo compound represents a key lineage in Ibadan's cultural fabric, contributing to governance, arts, and traditional leadership through successive generations.",
    heritage: "Traditional compound of cultural and artistic legacy.",
  },
  {
    id: "eshinoye",
    name: "Eshinoye Compound",
    yoruba: "Agbo Ilé Eshinoye",
    location: "Oke-Offa Babasale, Ibadan",
    quarter: "Ibadan North",
    mogaji: "Chief (Dr.) Olufemi O. Oyelakin",
    description:
      "Situated near Oke-Offa Babasale, the Eshinoye compound stands as a pillar of intellectual and administrative tradition, having produced scholars and civic leaders across generations.",
    heritage: "Academic and administrative heritage compound.",
  },
  {
    id: "alagbede",
    name: "Alagbede Ogunkeye Compound",
    yoruba: "Agbo Ilé Alagbede Ogunkeye",
    location: "Ibadan Central",
    quarter: "Ibadan Central",
    mogaji: "Chief Lateef Adesokan",
    description:
      "The Alagbede Ogunkeye compound is deeply rooted in Ibadan's ironworking and blacksmithing traditions — foundational crafts that powered early Ibadan's military defense and agricultural economy.",
    heritage: "Ironworking and artisan lineage from Ibadan's founding era.",
  },
  {
    id: "toki",
    name: "Ilé Toki Compound",
    yoruba: "Agbo Ilé Toki",
    location: "Ibadan Central",
    quarter: "Ibadan Central",
    mogaji: "Mogaji Toki of Ilé Toki",
    description:
      "A renowned ancestral compound in the historic heart of Ibadanland. Agbo Ilé Toki has preserved warrior lineage traditions, communal governance, and cultural leadership for generations.",
    heritage: "Historic family compound of the Toki lineage.",
  },
  {
    id: "akinade",
    name: "Akinade Compound",
    yoruba: "Agbo Ilé Akinade",
    location: "Kudeti / Mapo, Ibadan",
    quarter: "Ibadan Central",
    mogaji: "Mogaji Nurudeen Akinade",
    description:
      "Nestled near the iconic Mapo Hill, the Akinade compound has been a beacon of peace-building and youth leadership development in Ibadanland.",
    heritage: "Peace, leadership, and civic harmony compound near Mapo.",
  },
];

const historicQuarters = [
  { name: "Mapo", desc: "The political and civic heart of Ibadan, home to Mapo Hall." },
  { name: "Oja ’Ba", desc: "The King's market district, a vibrant center of traditional trade." },
  { name: "Bere", desc: "Ancient warrior district known for its military heritage." },
  { name: "Kudeti", desc: "Cultural and educational quarter of old Ibadan." },
  { name: "Oke Are", desc: "Hilltop district with panoramic views and deep royal history." },
  { name: "Gbagi & Central", desc: "Commercial crossroads of the city, blending heritage and trade." },
];

export default function CompoundsPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-[#f4f0e7]">
      <Navbar />

      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative pt-36 pb-24 px-6 lg:px-12 overflow-hidden border-b border-[#b89a5a]/20">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#b89a5a]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
              ÀWỌN AGBO ILÉ · ANCESTRAL HOMES & FAMILY COMPOUNDS
            </p>
          </div>

          <div className="max-w-[950px]">
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              The <span className="italic text-[#d4b56e]">Compounds.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#f4f0e7]/85 sm:text-lg sm:leading-8 border-l-2 border-[#b89a5a] pl-6 font-sans">
            Across Ibadanland, over 2,500 family compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>) carry generations of memory, identity, chieftaincy lineage, and cultural tradition.
          </p>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE GEOSPATIAL HERITAGE MAP
      ========================================================= */}
      <section className="py-20 px-6 lg:px-12 mx-auto max-w-[1360px]">
        <HeritageMap />
      </section>

      {/* =========================================================
          HISTORIC QUARTERS
      ========================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-[#050c17] border-t border-b border-white/10">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-12 border-b border-white/10 pb-6">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
              ÀWỌN ÀGBÈGBÈ ÀTIJỌ́ · HISTORIC QUARTERS OF IBADANLAND
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#f4f0e7]">
              The Ancient Districts
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {historicQuarters.map((quarter, i) => (
              <motion.div
                key={quarter.name}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="group border border-white/10 bg-[#0b1627] p-5 transition-all hover:border-[#b89a5a]"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 text-[#b89a5a] shrink-0" />
                  <div>
                    <h3 className="font-display text-lg text-white group-hover:text-[#d4b56e] transition-colors">
                      {quarter.name}
                    </h3>
                    <p className="mt-1 text-xs text-[#aaa397] leading-relaxed font-sans">{quarter.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPOUNDS DIRECTORY
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 mx-auto max-w-[1360px]">
        <div className="mb-14 border-b border-white/10 pb-6">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
            DIRECTORY · ÀWỌN AGBO ILÉ
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7]">
            Notable Family Compounds
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {compounds.map((compound, i) => (
            <motion.div
              key={compound.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: (i % 2) * 0.1 }}
              className="group border border-[#b89a5a]/25 bg-[#0b1627] p-7 transition-all hover:border-[#b89a5a] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a] block">
                  {compound.yoruba}
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl text-white group-hover:text-[#d4b56e] transition-colors">
                  {compound.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#aaa397] font-sans">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-[#b89a5a]" />
                    {compound.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Home size={11} className="text-[#b89a5a]" />
                    {compound.quarter}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#f4f0e7]/80 font-sans">
                  {compound.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-[#aaa397]">
                  <Clock size={12} className="text-[#b89a5a]" />
                  <span>{compound.heritage}</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-xs">
                  <ChevronRight size={12} className="text-[#d4b56e]" />
                  <span className="text-[#b89a5a]">Mogaji: </span>
                  <span className="text-[#f4f0e7] font-medium">{compound.mogaji}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
