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

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 1.8));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.9));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#d4b56e]/30 bg-[#08111f] shadow-2xl">
      {/* Top Map Header Controls */}
      <div className="flex flex-col gap-4 border-b border-white/10 bg-[#0d1627] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
            <Navigation size={14} className="text-[#d4b56e]" />
            <span>ÌTÀN AGBO ILÉ · GEOSPATIAL HERITAGE MAP</span>
          </div>
          <h3 className="mt-1 font-display text-xl text-white md:text-2xl">
            Historic Quarters & Ancestral Compounds
          </h3>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="flex h-9 w-9 items-center justify-center rounded border border-white/15 bg-[#121c30] text-white/80 transition hover:border-[#d4b56e] hover:bg-[#d4b56e] hover:text-[#0d1627]"
            title="Zoom Out"
          >
            <ZoomOut size={16} />
          </button>
          <button
            onClick={handleResetZoom}
            className="flex h-9 px-3 items-center justify-center rounded border border-white/15 bg-[#121c30] text-xs font-semibold uppercase tracking-wider text-white/80 transition hover:border-[#d4b56e] hover:bg-[#d4b56e] hover:text-[#0d1627]"
            title="Reset Map View"
          >
            <RotateCcw size={14} className="mr-1" /> Reset
          </button>
          <button
            onClick={handleZoomIn}
            className="flex h-9 w-9 items-center justify-center rounded border border-white/15 bg-[#121c30] text-white/80 transition hover:border-[#d4b56e] hover:bg-[#d4b56e] hover:text-[#0d1627]"
            title="Zoom In"
          >
            <ZoomIn size={16} />
          </button>
        </div>
      </div>

      {/* Quarter Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-white/10 bg-[#0a1322] px-5 py-3 scrollbar-none">
        <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#c8a85f] shrink-0 mr-2">
          <Layers size={13} /> Filter:
        </span>
        {quartersList.map((q) => (
          <button
            key={q.id}
            onClick={() => setActiveQuarterFilter(q.id)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
              activeQuarterFilter === q.id
                ? "bg-[#d4b56e] text-[#0d1627] shadow-md"
                : "border border-white/15 bg-[#121c30]/70 text-white/65 hover:border-[#d4b56e]/50 hover:text-white"
            }`}
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Main Map Canvas Area */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_360px] min-h-[560px]">
        {/* Map Interactive Canvas */}
        <div className="relative overflow-hidden bg-[#070e1b] min-h-[480px] flex items-center justify-center p-6 select-none">
          {/* Subtle Grid Background Lines */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212,181,110,.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212,181,110,.2) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Topographic Contour Shapes */}
          <div className="pointer-events-none absolute left-[30%] top-[25%] h-[320px] w-[320px] rounded-full border border-[#d4b56e]/15 bg-[#d4b56e]/5 blur-xl" />
          <div className="pointer-events-none absolute right-[20%] bottom-[20%] h-[280px] w-[280px] rounded-full border border-[#8a4f2f]/20 bg-[#8a4f2f]/5 blur-xl" />

          {/* Scaleable Canvas Container */}
          <motion.div
            animate={{ scale: zoomLevel }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative h-[480px] w-full max-w-[700px] rounded-2xl border border-white/10 bg-[#0d1728]/80 shadow-2xl p-4"
          >
            {/* Map Landmark Labels */}
            <div className="absolute left-[46%] top-[45%] -translate-x-1/2 -translate-y-1/2 rounded border border-[#d4b56e]/40 bg-[#0d1627]/90 px-3 py-1 text-center shadow-lg backdrop-blur-sm pointer-events-none">
              <span className="block font-display text-sm text-[#d4b56e]">
                Òkè Mapo · Mapo Hill
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-white/50">
                Civic Seat of Governance
              </span>
            </div>

            <div className="absolute left-[58%] top-[22%] rounded border border-white/15 bg-[#0d1627]/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#c8a85f] pointer-events-none">
              Bere Crossroads
            </div>

            <div className="absolute left-[20%] top-[58%] rounded border border-white/15 bg-[#0d1627]/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#c8a85f] pointer-events-none">
              Oke Ado Quarter
            </div>

            <div className="absolute left-[70%] top-[65%] rounded border border-white/15 bg-[#0d1627]/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#c8a85f] pointer-events-none">
              Kudeti / Eleta Quarter
            </div>

            {/* Render Compound Markers */}
            {filteredCompounds.map((cp) => {
              const isSelected = selectedCompound?.id === cp.id;

              return (
                <motion.button
                  key={cp.id}
                  onClick={() => setSelectedCompound(cp)}
                  style={{ left: `${cp.x}%`, top: `${cp.y}%` }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.25 }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-transform z-20 group`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulse Glow for Selected Pin */}
                    {isSelected && (
                      <motion.div
                        layoutId="pinGlow"
                        className="absolute h-10 w-10 rounded-full bg-[#d4b56e]/40 animate-ping"
                      />
                    )}

                    {/* Pin Icon Container */}
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border shadow-xl transition-all ${
                        isSelected
                          ? "border-white bg-[#d4b56e] text-[#0d1627] scale-110"
                          : "border-[#d4b56e]/60 bg-[#0d1627] text-[#d4b56e] hover:border-white hover:bg-[#d4b56e] hover:text-[#0d1627]"
                      }`}
                    >
                      <MapPin size={16} />
                    </div>

                    {/* Pin Tooltip Hover Label */}
                    <div className="absolute left-1/2 -top-8 -translate-x-1/2 whitespace-nowrap rounded bg-[#0d1627] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg border border-[#d4b56e]/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {cp.name}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Selected Compound Detail Inspection Panel */}
        <div className="border-t border-white/10 lg:border-t-0 lg:border-l border-white/10 bg-[#0c1626] p-6 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {selectedCompound ? (
              <motion.div
                key={selectedCompound.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div>
                  <span className="inline-block rounded border border-[#d4b56e]/40 bg-[#0d1627] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#d4b56e]">
                    {selectedCompound.yoruba}
                  </span>
                  <h4 className="mt-3 font-display text-2xl text-white">
                    {selectedCompound.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#c8a85f]">
                    {selectedCompound.quarter} · {selectedCompound.era}
                  </p>
                </div>

                {/* Compound Image Preview */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/15 bg-[#121c30] flex items-center justify-center">
                  {selectedCompound.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={selectedCompound.image}
                      alt={selectedCompound.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4b56e]/30 bg-[#0d1627]">
                        <Shield className="h-6 w-6 text-[#d4b56e]" />
                      </div>
                      <span className="mt-2 text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                        Ancestral Lineage
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1626] via-transparent to-transparent" />
                </div>

                {/* Details Meta */}
                <div className="space-y-3 text-sm text-white/80 border-t border-white/10 pt-4">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#c8a85f]">
                      Incumbent Mogaji:
                    </span>
                    <span className="font-display text-lg text-white">
                      {selectedCompound.mogaji}
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#c8a85f]">
                      Location Landmark:
                    </span>
                    <span className="text-white/75">{selectedCompound.location}</span>
                  </div>

                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#c8a85f]">
                      Historical Significance:
                    </span>
                    <p className="mt-1 text-xs leading-6 text-white/70">
                      {selectedCompound.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center text-white/50">
                <Info size={28} className="mb-2 text-[#d4b56e]" />
                <p className="text-sm">Click any map pin to inspect compound details.</p>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-6 border-t border-white/10 pt-4 text-center">
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Interactive Geospatial Map · Magajis of Ibadan Land
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
