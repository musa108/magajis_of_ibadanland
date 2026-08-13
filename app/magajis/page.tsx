"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Award, MapPin, Calendar, Shield } from "lucide-react";
import { useState } from "react";
import { fadeUp, viewportOnce } from "@/lib/animations";
import LineageTree from "@/components/LineageTree";

export interface MogajiProfile {
  id: string;
  name: string;
  title: string;
  role: string;
  yorubaRole: string;
  compound: string;
  location: string;
  installedBy: string;
  installedYear: string;
  image?: string;
  bio: string[];
  education?: string;
  career?: string;
  tenure?: string;
  isExecutive: boolean;
}

const executiveLeaders: MogajiProfile[] = [
  {
    id: "ariori",
    name: "Mogaji Asimiyu Adepoju Ariori",
    title: "President, Association of Mogajis of Ibadanland",
    role: "President",
    yorubaRole: "Aṣáájú Ẹgbẹ́ Àwọn Mògájì",
    compound: "Olorisa Compound",
    location: "Oja Oke Ado, Ibadan",
    installedBy: "Late Kabiesi, Oba Oloyede Asanike",
    installedYear: "1988 (Over 36 years ago)",
    image: "/images/mogaji-asimiyu-ariori.jpg",
    education: "Elementary school education in Ibadan",
    career: "Thorough-bred Ibadan man & Political Administrator; spent youthful life within the Late Lamidi Adedibu political empire.",
    tenure: "Serving 2nd 4-year term as President",
    bio: [
      "Mogaji Asimiyu Adepoju Ariori is the President of the Association of Mogajis of Ibadanland. He had his elementary school education in Ibadan and spent his youthful life within the Late Lamidi Adedibu political empire.",
      "He is a thorough-bred Ibadan man, a great listener, and a wise counsellor in deep Yoruba traditional matters and chieftaincy affairs.",
      "He was installed as Mogaji of Olorisa Compound, Oja Oke Ado in Ibadan over 36 years ago by the Late Kabiesi, Oba Oloyede Asanike.",
      "A great family man and passionate lover of Ibadan cultural heritage, he is currently serving his second term of 4 years as the President of the Association of Mogajis of Ibadanland."
    ],
    isExecutive: true,
  },
  {
    id: "odugade",
    name: "Oloye Allen Olutunji Ajala Odugade",
    title: "General Secretary, Association of Mogajis of Ibadanland",
    role: "General Secretary",
    yorubaRole: "Àkọ́ọ́wé Àgbà",
    compound: "Odugade Family Compound",
    location: "Aremo / Ibadan Central",
    installedBy: "Late Oba Saliu Akanmu Adetunji, Aje Ogungunniso I",
    installedYear: "2016",
    image: "/images/mogaji-oluye-allen-odugade.jpg",
    education: "Primary, Secondary & Higher Education in Ibadan; Master's Degree in Managerial Psychology from the University of Ibadan.",
    career: "Seasoned Insurance Professional; Associate Member of the Insurance Institute of Nigeria (AIIN).",
    tenure: "Serving 2nd 4-year term as General Secretary",
    bio: [
      "Oloye Allen Olutunji Ajala Odugade is the General Secretary of the Association of Mogajis of Ibadanland. He completed his primary, secondary, and higher education in Ibadan.",
      "A seasoned Insurance Professional, he holds a Master's Degree in Managerial Psychology from the University of Ibadan and is an Associate Member of the Insurance Institute of Nigeria.",
      "He was installed as the Mogaji of the Odugade family in 2016, following the transition of Oba (Dr) Samuel Osundiran Odulana Odugade I (the 40th Olubadan of Ibadanland), by the Late Oba Saliu Akanmu Adetunji, Aje Ogungunniso I.",
      "A dedicated lover of the 'Ibadanland Project', hard working and passionate about lineage development, he is currently serving his second term of 4 years as the General Secretary of the Association."
    ],
    isExecutive: true,
  },
  {
    id: "toki",
    name: "Mogaji Toki of Ilé Toki",
    title: "Mogaji of Ilé Toki Family Compound, Ibadanland",
    role: "Mogaji · Executive Council",
    yorubaRole: "Mògájì Agbo Ilé Toki",
    compound: "Ilé Toki Compound",
    location: "Ibadan Central, Oyo State",
    installedBy: "Olubadan-in-Council",
    installedYear: "Custodian of Toki Lineage",
    image: "/images/mogaji-toki.jpg",
    education: "Traditional Governance & Lineage Leadership",
    career: "Custodian of the Toki ancestral compound and lineage heritage",
    tenure: "Incumbent Mogaji of Ilé Toki",
    bio: [
      "Mogaji Toki of Ilé Toki is the duly installed Mogaji and custodian of the Ilé Toki Family Compound in Ibadanland — one of the historically significant ancestral compounds of the city.",
      "Ilé Toki carries a proud lineage rooted in Ibadan's warrior founding era. The compound has produced leaders who have contributed to governance, commerce, and cultural preservation across successive generations.",
      "As Mogaji, he serves as the first point of contact for family and community matters, arbitrating disputes, safeguarding ancestral property, and preserving the oral histories and traditions of the Toki lineage.",
      "He is an active executive council member of the Association of Mogajis of Ibadanland, dedicated to preserving Ibadan's living heritage."
    ],
    isExecutive: true,
  },
];

const directoryMogajis: MogajiProfile[] = [
  ...executiveLeaders,
  {
    id: "lekan-salami",
    name: "Chief Adenrele O. Lekan-Salami",
    title: "Patron & Ajia Balogun of Ibadanland",
    role: "Patron",
    yorubaRole: "Patron Ẹgbẹ́",
    compound: "Lekan-Salami Compound",
    location: "Adamasingba / Ibadan Central",
    installedBy: "Olubadan of Ibadanland",
    installedYear: "Prominent Chieftain",
    education: "Higher Education & Chieftaincy Leadership",
    career: "Community Leader & Chieftaincy Patron",
    tenure: "Patron of the Association",
    bio: [
      "Chief Adenrele O. Lekan-Salami holds the title of Ajia Balogun of Ibadanland and serves as the esteemed Patron of the Association of Mogajis of Ibadanland.",
      "He continues the grand legacy of the Lekan-Salami dynasty, providing wisdom and strategic advice for community development."
    ],
    isExecutive: false,
  },
  {
    id: "tijani",
    name: "Chief Mosudi Tijani",
    title: "Vice President, Association of Mogajis of Ibadanland",
    role: "Vice President",
    yorubaRole: "Ìgbákejì Aṣáájú",
    compound: "Mogaji Lafiku Compound",
    location: "Eleta, Ibadan South-East",
    installedBy: "Olubadan-in-Council",
    installedYear: "Veteran Chieftain",
    education: "Traditional Governance & Commerce",
    career: "Community Chieftain & Businessman",
    tenure: "Executive Vice President",
    bio: [
      "Chief Mosudi Tijani is the Vice President of the Association and the Mogaji of Lafiku Compound, Eleta.",
      "He plays a pivotal role in resolving compound disputes and preserving traditional heritage across Eleta and surrounding quarters."
    ],
    isExecutive: true,
  },
  {
    id: "adekola",
    name: "Chief Sakiru Olasunkade Adekola",
    title: "Assistant General Secretary",
    role: "Assistant General Secretary",
    yorubaRole: "Ìgbákejì Àkọ́ọ́wé Àgbà",
    compound: "Mogaji Ekolo Compound",
    location: "Ibadan South-East",
    installedBy: "Olubadan-in-Council",
    installedYear: "Lineage Custodian",
    education: "Tertiary Education",
    career: "Administrative Officer & Cultural Custodian",
    tenure: "Executive Assistant Secretary",
    bio: [
      "Chief Sakiru Olasunkade Adekola serves as the Assistant General Secretary of the Association.",
      "He oversees organizational documentation and supports lineage welfare programs across Ibadanland."
    ],
    isExecutive: true,
  },
  {
    id: "oyelakin",
    name: "Chief (Dr.) Olufemi O. Oyelakin",
    title: "Financial Secretary",
    role: "Financial Secretary",
    yorubaRole: "Àkọ́ọ́wé Akaye Koto",
    compound: "Mogaji Eshinoye Compound",
    location: "Oke-Offa Babasale, Ibadan",
    installedBy: "Olubadan-in-Council",
    installedYear: "Traditional Mogaji",
    education: "Doctorate / Higher Education",
    career: "Academic & Financial Administrator",
    tenure: "Executive Financial Secretary",
    bio: [
      "Chief (Dr.) Olufemi O. Oyelakin is the Financial Secretary of the Association and Mogaji of Eshinoye Compound, Oke-Offa Babasale.",
      "He manages the fiscal health and development projects of the Mogajis collective."
    ],
    isExecutive: true,
  },
  {
    id: "adesokan",
    name: "Chief Lateef Adesokan",
    title: "Treasurer, Association of Mogajis",
    role: "Treasurer",
    yorubaRole: "Oníbùkún / Treasurer",
    compound: "Alagbede Ogunkeye Compound",
    location: "Ibadan Central",
    installedBy: "Olubadan-in-Council",
    installedYear: "Community Mogaji",
    education: "Higher Education",
    career: "Treasury Custodian & Merchant",
    tenure: "Association Treasurer",
    bio: [
      "Chief Lateef Adesokan serves as the Treasurer of the Association of Mogajis of Ibadanland.",
      "He represents Alagbede Ogunkeye Compound, upholding traditional ironworking and lineage heritage."
    ],
    isExecutive: true,
  },
  {
    id: "akinade",
    name: "Mogaji Nurudeen Akinade",
    title: "Coordinator, Ibadan Compound Peace Initiative",
    role: "Peace Coordinator",
    yorubaRole: "Alágbàwí Àlàáfíà",
    compound: "Akinade Compound",
    location: "Kudeti / Mapo",
    installedBy: "Olubadan-in-Council",
    installedYear: "Lineage Leader",
    education: "Public Administration",
    career: "Conflict Resolution Specialist",
    tenure: "Peace Initiative Coordinator",
    bio: [
      "Mogaji Nurudeen Akinade is a key coordinator of the Ibadan Compound Peace Initiative.",
      "He works closely with youth leaders and compound elders to maintain civic peace and cultural harmony."
    ],
    isExecutive: false,
  },
];

export default function MagajisPage() {
  const [selectedMogaji, setSelectedMogaji] = useState<MogajiProfile | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [modalTab, setModalTab] = useState<"bio" | "tree">("bio");

  const filteredMogajis = directoryMogajis.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.compound.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    if (filterRole === "all") return matchesSearch;
    if (filterRole === "executive") return matchesSearch && item.isExecutive;
    return matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0d1627] text-[#f5f1e8]">
      <Navbar />

      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative pt-36 pb-24 px-6 lg:px-14 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111f] via-[#0d1627] to-[#0d1627]" />
        <div className="pointer-events-none absolute left-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#b99a58] opacity-15 blur-[160px]" />
        <div className="pointer-events-none absolute right-[5%] bottom-[5%] h-[350px] w-[350px] rounded-full bg-[#8a4f2f] opacity-10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b99a58]/40 bg-[#0d1627]/80 px-4 py-1.5 backdrop-blur-md mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4b56e] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀWỌN MÒGÁJÌ ILẸ̀ ÌBÀDÀN · LEADERSHIP & CUSTODIANS
            </span>
          </div>

          <div className="max-w-[950px]">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8a85f] mb-3">
              THE PEOPLE
            </p>
            <h1 className="font-display text-[clamp(3.2rem,7.5vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-white">
              The <span className="italic text-[#d4b56e]">Magajis.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-9 text-white/80 md:text-xl border-l-2 border-[#d4b56e] pl-6">
            The custodians, representatives, and voices of ancestral family compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>) across Ibadanland.
          </p>
        </div>
      </section>

      {/* =========================================================
          EXECUTIVE LEADERSHIP SPOTLIGHT
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 mx-auto max-w-[1200px]">
        <div className="mb-14 border-b border-white/15 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              EXECUTIVE LEADERSHIP · ẸGBẸ́ ÀWỌN MÒGÁJÌ
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">
              Association Executive Council
            </h2>
          </div>
          <span className="rounded-full border border-[#d4b56e]/40 bg-[#0d1627]/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d4b56e]">
            Incumbent Executive Term
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {executiveLeaders.map((leader) => (
            <motion.div
              key={leader.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#121c30] p-6 md:p-7 shadow-2xl transition-all duration-500 hover:border-[#d4b56e]/50 flex flex-col justify-between"
            >
              <div>
                {/* Leader Portrait */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/20 bg-[#182233] flex items-center justify-center">
                  {leader.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4b56e]/40 bg-[#0d1627]">
                        <Shield className="h-8 w-8 text-[#d4b56e]" />
                      </div>
                      <span className="mt-3 text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                        Certified Mogaji
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1627]/90 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-block rounded-full border border-[#d4b56e]/60 bg-[#0d1627]/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#d4b56e] backdrop-blur-sm">
                      {leader.yorubaRole}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
                    {leader.compound}
                  </span>
                  <h3 className="mt-1 font-display text-2xl text-white group-hover:text-[#d4b56e] transition-colors leading-tight">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/65">
                    {leader.title}
                  </p>

                  <div className="mt-5 space-y-2 text-sm text-white/75 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={13} className="text-[#d4b56e] shrink-0" />
                      <span>{leader.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={13} className="text-[#d4b56e] shrink-0" />
                      <span>{leader.installedBy}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedMogaji(leader)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded border border-[#d4b56e]/40 bg-[#0d1627] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4b56e] transition-all hover:bg-[#d4b56e] hover:text-[#0d1627]"
              >
                View Full Biography
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SEARCH & DIRECTORY GRID
      ========================================================= */}
      <section className="py-20 px-6 lg:px-14 bg-[#08111f] border-t border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
                MOGAJI DIRECTORY · ÀWỌN MÒGÁJÌ PÁTÁPÁTÁ
              </p>
              <h2 className="mt-1 font-display text-3xl md:text-4xl text-white">
                Family Compound Lineage Heads
              </h2>
            </div>

            {/* Search Input & Filter */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative w-full md:w-72">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search Mogaji or Compound..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-white/20 bg-[#121c30] py-3 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:border-[#d4b56e] focus:outline-none"
                />
              </div>

              <div className="flex items-center rounded-full border border-white/20 bg-[#121c30] p-1">
                <button
                  onClick={() => setFilterRole("all")}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                    filterRole === "all" ? "bg-[#d4b56e] text-[#0d1627]" : "text-white/60 hover:text-white"
                  }`}
                >
                  All Mogajis
                </button>
                <button
                  onClick={() => setFilterRole("executive")}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                    filterRole === "executive" ? "bg-[#d4b56e] text-[#0d1627]" : "text-white/60 hover:text-white"
                  }`}
                >
                  Executives
                </button>
              </div>
            </div>
          </div>

          {/* Directory Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMogajis.map((profile) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMogaji(profile)}
                className="group cursor-pointer rounded-xl border border-white/10 bg-[#121c30]/80 p-5 transition-all duration-300 hover:border-[#d4b56e] hover:bg-[#121c30]"
              >
                <div className="flex gap-4 items-center">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#d4b56e]/40 bg-[#0d1627] flex items-center justify-center">
                    {profile.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <span className="font-display text-lg tracking-wider text-[#d4b56e]">
                        {profile.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                      {profile.yorubaRole || profile.role}
                    </span>
                    <h4 className="font-display text-lg text-white group-hover:text-[#d4b56e] transition-colors leading-snug">
                      {profile.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-white/55">
                      {profile.compound}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROFILE INSPECTION MODAL DRAWER
      ========================================================= */}
      <AnimatePresence>
        {selectedMogaji && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMogaji(null)}
              className="absolute inset-0 bg-[#040812]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-[#d4b56e]/50 bg-[#0d1627] p-6 sm:p-8 shadow-2xl text-[#f5f1e8]"
            >
              <button
                onClick={() => setSelectedMogaji(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#121c30] text-white/70 transition hover:bg-white hover:text-[#0d1627]"
              >
                <X size={18} />
              </button>

              {/* Drawer Modal Header Tabs */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6 pr-12">
                <button
                  onClick={() => setModalTab("bio")}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                    modalTab === "bio"
                      ? "bg-[#d4b56e] text-[#0d1627] shadow-md"
                      : "border border-white/15 bg-[#121c30] text-white/60 hover:text-white"
                  }`}
                >
                  Biography & Profile
                </button>
                <button
                  onClick={() => setModalTab("tree")}
                  className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                    modalTab === "tree"
                      ? "bg-[#d4b56e] text-[#0d1627] shadow-md"
                      : "border border-white/15 bg-[#121c30] text-white/60 hover:text-white"
                  }`}
                >
                  Interactive Lineage Tree
                </button>
              </div>

              {modalTab === "bio" ? (
                <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-white/20 bg-[#182233] flex items-center justify-center">
                    {selectedMogaji.image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={selectedMogaji.image}
                        alt={selectedMogaji.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4b56e]/40 bg-[#0d1627]">
                          <span className="font-display text-2xl tracking-widest text-[#d4b56e]">
                            {selectedMogaji.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                          </span>
                        </div>
                        <span className="mt-3 text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                          Certified Mogaji
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="inline-block rounded bg-[#d4b56e]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#d4b56e] border border-[#d4b56e]/30">
                      {selectedMogaji.role}
                    </span>

                    <h3 className="mt-3 font-display text-2xl md:text-3xl text-white">
                      {selectedMogaji.name}
                    </h3>

                    <p className="mt-1 text-sm text-[#c8a85f]">
                      {selectedMogaji.title}
                    </p>

                    <div className="mt-4 grid gap-2 text-sm text-white/75 border-t border-b border-white/10 py-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-[#d4b56e]" />
                        <span>{selectedMogaji.compound} ({selectedMogaji.location})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={13} className="text-[#d4b56e]" />
                        <span>Installed by: {selectedMogaji.installedBy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={13} className="text-[#d4b56e]" />
                        <span>Tenure/Year: {selectedMogaji.installedYear}</span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 text-sm leading-7 text-white/80">
                      <h4 className="font-semibold text-white uppercase text-xs tracking-wider text-[#d4b56e]">
                        Biography & Cultural Profile
                      </h4>
                      {selectedMogaji.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {selectedMogaji.education && (
                      <div className="mt-4 text-xs text-white/75">
                        <span className="font-bold text-[#c8a85f]">Education: </span>
                        {selectedMogaji.education}
                      </div>
                    )}

                    {selectedMogaji.career && (
                      <div className="mt-2 text-xs text-white/75">
                        <span className="font-bold text-[#c8a85f]">Career/Profession: </span>
                        {selectedMogaji.career}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="mt-2">
                  <LineageTree initialFamily={selectedMogaji.id} />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
