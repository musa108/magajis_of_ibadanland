"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Navigation,
  Shield,
  Info,
  Layers,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export interface MapCompoundNode {
  id: string;
  name: string;
  yoruba: string;
  quarter: string;
  location: string;
  mogaji: string;
  era: string;
  x: number; // percentage on map
  y: number; // percentage on map
  desc: string;
  image?: string;
}

const mapCompounds: MapCompoundNode[] = [
  {
    id: "odugade",
    name: "Odugade Family Compound",
    yoruba: "Agbo Ilé Odugade",
    quarter: "Central / Aremo",
    location: "Aremo, Ibadan Central",
    mogaji: "Oloye Allen Olutunji Ajala Odugade",
    era: "19th Century Lineage",
    x: 44,
    y: 30,
    desc: "Ancestral home of the 40th Olubadan of Ibadanland, Oba (Dr) Samuel Osundiran Odulana Odugade I. Deeply intertwined with royal monarchical governance.",
    image: "/images/mogaji-oluye-allen-odugade.jpg",
  },
  {
    id: "olorisa",
    name: "Olorisa Compound",
    yoruba: "Agbo Ilé Olorisa",
    quarter: "Oke Ado",
    location: "Oja Oke Ado, Ibadan",
    mogaji: "Mogaji Asimiyu Adepoju Ariori",
    era: "Early Settlement Era",
    x: 24,
    y: 62,
    desc: "One of the most storied ancestral compounds in Ibadanland, central to religious, civic, and traditional leadership for over a century.",
    image: "/images/mogaji-asimiyu-ariori.jpg",
  },
  {
    id: "toki",
    name: "Ilé Toki Compound",
    yoruba: "Agbo Ilé Toki",
    quarter: "Mapo / Central",
    location: "Ibadan Central",
    mogaji: "Mogaji Toki of Ilé Toki",
    era: "Warrior Era Heritage",
    x: 52,
    y: 48,
    desc: "Renowned ancestral compound in the historic heart of Ibadanland, preserving warrior lineage traditions and communal leadership.",
    image: "/images/mogaji-toki.jpg",
  },
  {
    id: "akinade",
    name: "Akinade Compound",
    yoruba: "Agbo Ilé Akinade",
    quarter: "Kudeti / Mapo",
    location: "Kudeti / Mapo, Ibadan",
    mogaji: "Mogaji Nurudeen Akinade",
    era: "19th Century Settlement",
    x: 62,
    y: 68,
    desc: "Located near Mapo Hill, beacon of peace-building and community youth leadership in Ibadanland.",
  },
  {
    id: "aleshinloye",
    name: "Aleshinloye Compound",
    yoruba: "Agbo Ilé Aleshinloye",
    quarter: "Oke Ado",
    location: "Oke-Ado / Market Area",
    mogaji: "Chief Aleshinloye Lineage Head",
    era: "Civic Leadership Era",
    x: 18,
    y: 52,
    desc: "Historically linked to market leadership and civic influence in modern Ibadanland.",
  },
  {
    id: "lafiku",
    name: "Lafiku Compound",
    yoruba: "Agbo Ilé Lafiku",
    quarter: "Kudeti / Eleta",
    location: "Eleta, Ibadan",
    mogaji: "Chief Mosudi Tijani",
    era: "19th Century Compound",
    x: 76,
    y: 58,
    desc: "Vibrant ancestral family home in Eleta maintaining centuries-old traditions of communal governance.",
  },
  {
    id: "ekolo",
    name: "Ekolo Compound",
    yoruba: "Agbo Ilé Ekolo",
    quarter: "Kudeti / Eleta",
    location: "Ibadan South-East",
    mogaji: "Chief Sakiru Olasunkade Adekola",
    era: "Artistic Heritage Era",
    x: 72,
    y: 76,
    desc: "Key lineage in Ibadan's cultural fabric, contributing to traditional arts and chieftaincy governance.",
  },
  {
    id: "eshinoye",
    name: "Eshinoye Compound",
    yoruba: "Agbo Ilé Eshinoye",
    quarter: "Bere",
    location: "Oke-Offa Babasale, Ibadan",
    mogaji: "Chief (Dr.) Olufemi O. Oyelakin",
    era: "Scholarly Tradition Era",
    x: 58,
    y: 28,
    desc: "Pillar of intellectual and administrative tradition near Oke-Offa Babasale.",
  },
  {
    id: "alagbede",
    name: "Alagbede Ogunkeye Compound",
    yoruba: "Agbo Ilé Alagbede Ogunkeye",
    quarter: "Mapo / Central",
    location: "Ibadan Central",
    mogaji: "Chief Lateef Adesokan",
    era: "Founding Warrior Era",
    x: 48,
    y: 40,
    desc: "Deeply rooted in Ibadan's ironworking and blacksmithing traditions that powered early warrior defense.",
  },
  {
    id: "atere",
    name: "Agboole Atere (Ile Onilu)",
    yoruba: "Agbo Ilé Atere · Ilé Onílù",
    quarter: "Central / Aremo",
    location: "Ayeye, Ibadan Central",
    mogaji: "Mogaji Abdul Gafar Olanrewaju Gbadamosi",
    era: "200+ Year Settlement",
    x: 38,
    y: 36,
    desc: "Founded over 200 years ago by patriarch Okekegan from Orile Owu. Ancestral home of Aare Onilu of Ibadanland Ayanwale Akanbi Gbadamosi.",
    image: "/images/mogaji-abdul-gafar-gbadamosi.jpg",
  },
  {
    id: "bada",
    name: "Bada Compound",
    yoruba: "Agbo Ilé Bada",
    quarter: "Bere",
    location: "Oke Offa Atipe, Ibadan",
    mogaji: "Hon. Olasupo Ibrahim Ademola",
    era: "Jaga Aase (Ajase Ipo) Heritage",
    x: 60,
    y: 32,
    desc: "Founded by brothers Fagbenla and Orotoki, tracing roots from Jaga Aase (Ajase Ipo), with ancestral village roots at Aayun and Oloffa.",
    image: "/images/mogaji-olasupo-ibrahim-ademola.jpg",
  },
];

const quartersList = [
  { id: "all", label: "All Quarters", yoruba: "Gbogbo Àgbègbè" },
  { id: "Central / Aremo", label: "Central & Aremo", yoruba: "Àárín Ggbùngbùn" },
  { id: "Mapo / Central", label: "Mapo Hill", yoruba: "Òkè Mapo" },
  { id: "Bere", label: "Bere District", yoruba: "Bere" },
  { id: "Kudeti / Eleta", label: "Kudeti & Eleta", yoruba: "Kudeti àti Eleta" },
  { id: "Oke Ado", label: "Oke Ado", yoruba: "Òkè Ado" },
];

export default function HeritageMap() {
  const [selectedCompound, setSelectedCompound] = useState<MapCompoundNode | null>(
    mapCompounds[0]
  );
  const [activeQuarterFilter, setActiveQuarterFilter] = useState("all");
  const [zoomLevel, setZoomLevel] = useState(1);

  const filteredCompounds =
    activeQuarterFilter === "all"
      ? mapCompounds
      : mapCompounds.filter((c) => c.quarter === activeQuarterFilter);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 1.75));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.9));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="relative overflow-hidden border border-[#b89a5a]/30 bg-[#07111f] shadow-2xl">
      {/* Top Map Header Controls */}
      <div className="flex flex-col gap-4 border-b border-white/10 bg-[#0b1627] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56e]">
            <Navigation size={14} />
            <span>ÌTÀN AGBO ILÉ · GEOSPATIAL HERITAGE MAP</span>
          </div>
          <h3 className="mt-1 font-display text-xl text-[#f4f0e7] md:text-2xl">
            Historic Quarters & Ancestral Compounds
          </h3>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleZoomOut}
            className="flex h-9 w-9 items-center justify-center border border-white/15 bg-[#07111f] text-[#f4f0e7] transition hover:border-[#b89a5a] hover:text-[#d4b56e]"
            title="Zoom Out"
          >
            <ZoomOut size={15} />
          </button>
          <button
            type="button"
            onClick={handleResetZoom}
            className="flex h-9 px-3 items-center justify-center border border-white/15 bg-[#07111f] text-xs font-semibold uppercase tracking-wider text-[#aaa397] transition hover:border-[#b89a5a] hover:text-white"
            title="Reset Map View"
          >
            <RotateCcw size={13} className="mr-1" /> Reset
          </button>
          <button
            type="button"
            onClick={handleZoomIn}
            className="flex h-9 w-9 items-center justify-center border border-white/15 bg-[#07111f] text-[#f4f0e7] transition hover:border-[#b89a5a] hover:text-[#d4b56e]"
            title="Zoom In"
          >
            <ZoomIn size={15} />
          </button>
        </div>
      </div>

      {/* Quarter Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-white/10 bg-[#081220] px-5 py-3 scrollbar-none">
        <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#b89a5a] shrink-0 mr-2">
          <Layers size={13} /> Filter:
        </span>
        {quartersList.map((q) => (
          <button
            key={q.id}
            type="button"
            onClick={() => setActiveQuarterFilter(q.id)}
            className={`shrink-0 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider transition-all ${
              activeQuarterFilter === q.id
                ? "bg-[#b89a5a] text-[#07111f]"
                : "border border-white/15 bg-[#0b1627] text-[#aaa397] hover:border-[#b89a5a]/50 hover:text-white"
            }`}
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Main Map Canvas Area */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_360px] min-h-[540px]">
        {/* Map Interactive Canvas */}
        <div className="relative overflow-hidden bg-[#050c17] min-h-[460px] flex items-center justify-center p-6 select-none">
          {/* Subtle Grid Background Lines */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(184,154,90,.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(184,154,90,.25) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Scaleable Canvas Container */}
          <motion.div
            animate={{ scale: zoomLevel }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative h-[460px] w-full max-w-[700px] border border-[#b89a5a]/20 bg-[#091424] p-4"
          >
            {/* Map Landmark Labels */}
            <div className="absolute left-[46%] top-[45%] -translate-x-1/2 -translate-y-1/2 border border-[#b89a5a]/40 bg-[#07111f]/90 px-3 py-1 text-center shadow-lg backdrop-blur-sm pointer-events-none">
              <span className="block font-display text-sm text-[#d4b56e]">
                Òkè Mapo · Mapo Hill
              </span>
              <span className="block text-[8px] uppercase tracking-widest text-[#aaa397]">
                Civic Seat of Governance
              </span>
            </div>

            <div className="absolute left-[58%] top-[22%] border border-white/15 bg-[#07111f]/80 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-[#b89a5a] pointer-events-none">
              Bere Crossroads
            </div>

            <div className="absolute left-[20%] top-[58%] border border-white/15 bg-[#07111f]/80 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-[#b89a5a] pointer-events-none">
              Oke Ado Quarter
            </div>

            <div className="absolute left-[70%] top-[65%] border border-white/15 bg-[#07111f]/80 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-[#b89a5a] pointer-events-none">
              Kudeti / Eleta Quarter
            </div>

            {/* Render Compound Markers */}
            {filteredCompounds.map((cp) => {
              const isSelected = selectedCompound?.id === cp.id;

              return (
                <button
                  key={cp.id}
                  type="button"
                  onClick={() => setSelectedCompound(cp)}
                  style={{ left: `${cp.x}%`, top: `${cp.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group focus:outline-none"
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pin Icon Container */}
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border shadow-xl transition-all ${
                        isSelected
                          ? "border-white bg-[#b89a5a] text-[#07111f] scale-110"
                          : "border-[#b89a5a]/60 bg-[#07111f] text-[#d4b56e] hover:border-white hover:bg-[#b89a5a] hover:text-[#07111f]"
                      }`}
                    >
                      <MapPin size={15} />
                    </div>

                    {/* Pin Tooltip Label */}
                    <div className="absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap bg-[#07111f] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white border border-[#b89a5a]/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {cp.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Selected Compound Detail Inspection Panel */}
        <div className="border-t border-white/10 lg:border-t-0 lg:border-l border-white/10 bg-[#081220] p-6 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {selectedCompound ? (
              <motion.div
                key={selectedCompound.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div>
                  <span className="border border-[#b89a5a]/40 bg-[#07111f] px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-widest text-[#d4b56e] inline-block">
                    {selectedCompound.yoruba}
                  </span>
                  <h4 className="mt-3 font-display text-2xl text-white">
                    {selectedCompound.name}
                  </h4>
                  <p className="mt-1 text-xs text-[#b89a5a]">
                    {selectedCompound.quarter} · {selectedCompound.era}
                  </p>
                </div>

                {/* Compound Image Preview */}
                <div className="relative aspect-[4/3] overflow-hidden border border-[#b89a5a]/30 bg-[#07111f] flex items-center justify-center">
                  {selectedCompound.image ? (
                    <Image
                      src={selectedCompound.image}
                      alt={selectedCompound.name}
                      fill
                      sizes="320px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b89a5a]/30 bg-[#07111f]">
                        <Shield className="h-6 w-6 text-[#d4b56e]" />
                      </div>
                      <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[#b89a5a]">
                        Ancestral Lineage
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081220] via-transparent to-transparent opacity-80" />
                </div>

                {/* Details Meta */}
                <div className="space-y-3 text-xs text-[#f4f0e7]/85 border-t border-white/10 pt-4 font-sans">
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#b89a5a]">
                      Incumbent Mogaji:
                    </span>
                    <span className="font-display text-base text-white">
                      {selectedCompound.mogaji}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#b89a5a]">
                      Location Landmark:
                    </span>
                    <span className="text-[#aaa397]">{selectedCompound.location}</span>
                  </div>

                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#b89a5a]">
                      Historical Significance:
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-[#f4f0e7]/75">
                      {selectedCompound.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center text-[#aaa397]">
                <Info size={24} className="mb-2 text-[#d4b56e]" />
                <p className="text-xs">Click any map pin to inspect compound details.</p>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-6 border-t border-white/10 pt-4 text-center">
            <span className="text-[9px] uppercase tracking-widest text-[#aaa397]">
              Interactive Geospatial Map · Magajis of Ibadan Land
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
