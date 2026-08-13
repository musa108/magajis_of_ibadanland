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
      "One of the most storied ancestral compounds in Ibadanland. Olorisa Compound has been central to the religious, civic and leadership traditions of Ibadan's indigenous families for centuries.",
    heritage: "Founded during the early settlements of Ibadan.",
    color: "from-[#b99a58]/20 to-[#0d1627]",
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
    color: "from-[#8a4f2f]/20 to-[#0d1627]",
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
    color: "from-[#1a3a6b]/20 to-[#0d1627]",
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
    color: "from-[#2a4a1a]/20 to-[#0d1627]",
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
    color: "from-[#3a1a4a]/20 to-[#0d1627]",
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
    color: "from-[#1a4a3a]/20 to-[#0d1627]",
  },
  {
    id: "alagbede",
    name: "Alagbede Ogunkeye Compound",
    yoruba: "Agbo Ilé Alagbede Ogunkeye",
    location: "Ibadan Central",
    quarter: "Ibadan Central",
    mogaji: "Chief Lateef Adesokan",
    description:
      "The Alagbede Ogunkeye compound is deeply rooted in Ibadan's ironworking and blacksmithing traditions — foundational crafts that powered early Ibadan's military and agricultural economy.",
    heritage: "Ironworking and artisan lineage from Ibadan's founding era.",
    color: "from-[#4a1a1a]/20 to-[#0d1627]",
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
    color: "from-[#d4b56e]/20 to-[#0d1627]",
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
    color: "from-[#1a3a2a]/20 to-[#0d1627]",
  },
];

const historicQuarters = [
  { name: "Mapo", desc: "The political and civic heart of Ibadan, home to Mapo Hall." },
  { name: "Oja 'Ba", desc: "The King's market district, a vibrant center of traditional trade." },
  { name: "Bere", desc: "Ancient warrior district known for its military heritage." },
  { name: "Kudeti", desc: "Cultural and educational quarter of old Ibadan." },
  { name: "Oke Are", desc: "Hilltop district with panoramic views and deep royal history." },
  { name: "Beere / Gbagi", desc: "Commercial crossroads of the city, blending heritage and modernity." },
];

export default function CompoundsPage() {
  return (
    <main className="min-h-screen bg-[#0d1627] text-[#f5f1e8]">
      <Navbar />

      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative pt-36 pb-24 px-6 lg:px-14 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111f] via-[#0d1627] to-[#0d1627]" />
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#8a4f2f] opacity-15 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b99a58]/40 bg-[#0d1627]/80 px-4 py-1.5 backdrop-blur-md mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4b56e] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀWỌN AGBO ILÉ · ANCESTRAL HOMES & FAMILY COMPOUNDS
            </span>
          </div>

          <div className="max-w-[950px]">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8a85f] mb-3">
              THE PLACES
            </p>
            <h1 className="font-display text-[clamp(3.2rem,7.5vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-white">
              The <span className="italic text-[#d4b56e]">Compounds.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-9 text-white/80 md:text-xl border-l-2 border-[#d4b56e] pl-6">
            Across Ibadanland, over 2,500 family compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>) carry generations of memory, identity, chieftaincy lineage, and cultural tradition.
          </p>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE GEOSPATIAL HERITAGE MAP
      ========================================================= */}
      <section className="py-20 px-6 lg:px-14 mx-auto max-w-[1200px]">
        <HeritageMap />
      </section>

      {/* =========================================================
          HISTORIC QUARTERS
      ========================================================= */}
      <section className="py-20 px-6 lg:px-14 bg-[#08111f] border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀWỌN ÀGBÈGBÈ ÀTIJỌ́ · HISTORIC QUARTERS OF IBADANLAND
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-white">
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
                className="group rounded-lg border border-white/10 bg-[#121c30] p-5 transition-all hover:border-[#d4b56e]/50"
              >
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-[#d4b56e] shrink-0" />
                  <div>
                    <h4 className="font-display text-lg text-white group-hover:text-[#d4b56e] transition-colors">
                      {quarter.name}
                    </h4>
                    <p className="mt-1 text-sm text-white/65">{quarter.desc}</p>
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
      <section className="py-24 px-6 lg:px-14 mx-auto max-w-[1200px]">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
            DIRECTORY · ÀWỌN AGBO ILÉ
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">
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
              transition={{ delay: (i % 2) * 0.12 }}
              className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#121c30] p-7 shadow-xl transition-all hover:border-[#d4b56e]/50"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${compound.color} opacity-50`} />

              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
                  {compound.yoruba}
                </span>
                <h3 className="mt-1 font-display text-2xl text-white group-hover:text-[#d4b56e] transition-colors">
                  {compound.name}
                </h3>

                <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-white/60">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {compound.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Home size={11} />
                    {compound.quarter}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/75">
                  {compound.description}
                </p>

                <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/60">
                  <Clock size={12} className="text-[#d4b56e]" />
                  <span>{compound.heritage}</span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs">
                  <ChevronRight size={12} className="text-[#d4b56e]" />
                  <span className="text-[#c8a85f]">Mogaji: </span>
                  <span className="text-white/75">{compound.mogaji}</span>
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
