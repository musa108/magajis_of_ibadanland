"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Building2,
  Shield,
  MapPin,
  HardHat,
  Landmark,
  FileText,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Eye,
  History,
} from "lucide-react";
import Link from "next/link";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";

const projectPillars = [
  {
    number: "01",
    title: "Supreme Assembly Chamber",
    yoruba: "Àwùjọ Àwọn Mògájì",
    desc: "A state-of-the-art 1,500-seat traditional parliament for monthly council assemblies, chieftaincy summits, and inter-compound conventions.",
    icon: Landmark,
    accent: "from-[#d4b56e]/20 to-[#0d1627]",
  },
  {
    number: "02",
    title: "Heritage Vault & Archives",
    yoruba: "Àkọ́ọ́lẹ̀ Ìtàn Àti Ìṣẹ́ṣẹ́",
    desc: "Climate-controlled repository storing centuries of lineage installation records, chieftaincy certificates, and oral poetry recordings.",
    icon: FileText,
    accent: "from-[#8a4f2f]/20 to-[#0d1627]",
  },
  {
    number: "03",
    title: "Arbitration Chambers",
    yoruba: "Ilé Ẹjọ́ Àbílẹ̀",
    desc: "Private traditional dispute resolution suites for settling inter-family and compound chieftaincy matters in accordance with Yoruba custom.",
    icon: Shield,
    accent: "from-[#1a3a6b]/20 to-[#0d1627]",
  },
  {
    number: "04",
    title: "Executive Secretariat",
    yoruba: "Ilé Ìjọba Ẹgbẹ́",
    desc: "Administrative offices for the Association's President, General Secretary, and committee administrators to interface with civic authorities.",
    icon: Building2,
    accent: "from-[#2a4a1a]/20 to-[#0d1627]",
  },
];

const constructionPhases = [
  {
    phase: "Phase 01",
    title: "Site Acquisition & Substructure",
    status: "Completed",
    date: "Q3 2024",
    desc: "Site surveying, highland foundation excavation, reinforced concrete footing, and ground retaining walls.",
  },
  {
    phase: "Phase 02",
    title: "Columns & Domed Roof Framework",
    status: "Completed",
    date: "Q1 2025",
    desc: "Erection of reinforced concrete perimeter columns and custom structural steel domed roof trusses.",
  },
  {
    phase: "Phase 03",
    title: "Facade, Enclosure & Exterior Finishes",
    status: "Completed",
    date: "Present State",
    desc: "Roof decking, masonry, ceremonial portico, embossed lettering 'Gbọngan Mogaji Ilé Ẹ̀kẹ́', gold-crested pillars, and perimeter works.",
  },
  {
    phase: "Phase 04",
    title: "Interior Chambers & Commissioning",
    status: "Final Stage",
    date: "Target Q4 2026",
    desc: "Acoustic ceiling paneling, executive council seating, digital audio-visual setup, and grand royal commissioning.",
  },
];

const galleryImages = [
  {
    id: "present-front",
    title: "Ceremonial Portico & Facade",
    subtitle: "Present Condition · Front Entrance",
    src: "/images/ile-eke-present-2.jpg",
    type: "Present",
    badge: "Completed Exterior",
    desc: "Direct elevation showing the embossed 'GBỌ̀NGÀN MÒGÁJÌ ILÉ Ẹ̀KẸ́' crest, crossed royal staffs, dual ceremonial staircases with stainless steel balustrades, and classical columns with gold capitols.",
  },
  {
    id: "present-side",
    title: "Side Colonnade & Campus Grounds",
    subtitle: "Present Condition · Lateral Wing",
    src: "/images/ile-eke-present-1.jpg",
    type: "Present",
    badge: "Completed Exterior",
    desc: "Panoramic lateral view showcasing the expansive window apertures, curved roofline geometry, external lighting fixtures, and the surrounding highland landscape.",
  },
  {
    id: "before-steel",
    title: "Structural Domed Roof Framework",
    subtitle: "Before / Construction Milestone",
    src: "/images/ile-eke-project.jpg",
    type: "Before",
    badge: "Structural Phase",
    desc: "Historical construction phase showing the lifting and assembly of heavy curved structural steel roof trusses and bare reinforced concrete support columns before wall enclosure.",
  },
];

export default function IleEkePage() {
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const [filter, setFilter] = useState<"All" | "Present" | "Before">("All");

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.type === filter);

  return (
    <main className="min-h-screen bg-[#0d1627] text-[#f5f1e8]">
      <Navbar />

      {/* =========================================================
          SECTION 1: HERO BANNER
      ========================================================= */}
      <section className="relative pt-36 pb-20 px-6 lg:px-14 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111f] via-[#0d1627] to-[#0d1627]" />
        <div className="pointer-events-none absolute left-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#b99a58] opacity-15 blur-[160px]" />
        <div className="pointer-events-none absolute right-[5%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-[#8a4f2f] opacity-10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b99a58]/40 bg-[#0d1627]/80 px-4 py-1.5 backdrop-blur-md mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4b56e] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀKỌ́Ọ́LẸ̀ ÌKỌ́LÉ · MOGAJIS&apos; HISTORIC ASSEMBLY HALL
            </span>
          </div>

          {/* Title */}
          <div className="max-w-[950px]">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8a85f] mb-3">
              GBỌ̀NGÀN MÒGÁJÌ · THE HALL OF COUNCIL
            </p>
            <h1 className="font-display text-[clamp(3.2rem,7.5vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-white">
              Ilé Ẹ̀kẹ́ <span className="italic text-[#d4b56e]">Projects.</span>
            </h1>
          </div>

          {/* Subtext */}
          <p className="mt-8 max-w-2xl text-base leading-9 text-white/80 md:text-xl border-l-2 border-[#d4b56e] pl-6">
            The historical assembly hall and modern traditional secretariat of the <span className="text-white font-medium">Association of Mogajis of Ibadanland</span> — an architectural landmark bridging centuries of lineage heritage with the future of civic leadership.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery-transformation"
              className="inline-flex items-center gap-3 bg-[#d4b56e] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0d1627] transition hover:bg-[#b99a58] shadow-lg"
            >
              <Eye size={15} /> View Present Condition & Gallery <ChevronRight size={14} />
            </a>
            <a
              href="#progress-update"
              className="inline-flex items-center gap-3 border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-white hover:text-white"
            >
              <History size={15} /> Transformation Journey
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: PRESENT CONDITION & TRANSFORMATION SPOTLIGHT
      ========================================================= */}
      <section id="gallery-transformation" className="py-24 px-6 lg:px-14 bg-[#08111f] border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/15 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f] mb-2">
                <Sparkles size={15} className="text-[#d4b56e]" />
                <span>ÌKỌ́LÉ LỌ́WỌ́LỌ́WỌ́ · BUILDING CONDITION & TRANSFORMATION</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-white">
                Present Condition: Gbọ̀ngàn Mògájì
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-[#121c30] p-1.5">
              {(["All", "Present", "Before"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`rounded-md px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    filter === tab
                      ? "bg-[#d4b56e] text-[#0d1627] shadow-md"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab === "Present"
                    ? "Present Condition"
                    : tab === "Before"
                    ? "Before / Construction"
                    : "All Views"}
                </button>
              ))}
            </div>
          </div>

          {/* Main Featured Photo & Interactive Details */}
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-stretch">
            {/* Active Highlight Image */}
            <motion.div
              key={selectedImage.id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-[#121c30] shadow-2xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#182233]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md border ${
                      selectedImage.type === "Present"
                        ? "border-[#d4b56e]/50 bg-[#0d1627]/90 text-[#d4b56e]"
                        : "border-amber-400/40 bg-[#0d1627]/90 text-amber-300"
                    }`}
                  >
                    {selectedImage.type === "Present" ? (
                      <CheckCircle2 size={13} className="text-[#d4b56e]" />
                    ) : (
                      <HardHat size={13} className="text-amber-400" />
                    )}
                    {selectedImage.badge}
                  </span>
                </div>
              </div>

              {/* Photo Description Box */}
              <div className="p-6 md:p-8 bg-[#121c30] border-t border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                  {selectedImage.subtitle}
                </span>
                <h3 className="mt-1 font-display text-2xl md:text-3xl text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>

            {/* Thumbnail Selectors & Quick Project Facts */}
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a85f]">
                  Select Image to Inspect:
                </p>

                {filteredImages.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`w-full text-left rounded-xl border p-3.5 transition-all flex items-center gap-4 ${
                      selectedImage.id === img.id
                        ? "border-[#d4b56e] bg-[#1a263d] shadow-lg"
                        : "border-white/10 bg-[#121c30] hover:border-white/25 hover:bg-[#162238]"
                    }`}
                  >
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-[#0d1627]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                            img.type === "Present"
                              ? "bg-[#2a4a1a] text-[#86efac]"
                              : "bg-white/10 text-[#d4b56e]"
                          }`}
                        >
                          {img.type}
                        </span>
                        <span className="text-[11px] text-white/50 truncate">
                          {img.subtitle}
                        </span>
                      </div>
                      <p className="font-display text-base text-white mt-1 truncate">
                        {img.title}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick Info Card */}
              <div className="rounded-xl border border-white/10 bg-[#121c30] p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                  Architectural Summary
                </span>
                <div className="mt-4 space-y-3 text-xs text-white/70">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#d4b56e]" /> Location</span>
                    <span className="font-medium text-white">Ibadan Central, Oyo State</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5"><Landmark size={13} className="text-[#d4b56e]" /> Capacity</span>
                    <span className="font-medium text-white">1,500+ Seat Parliament</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#d4b56e]" /> Exterior Status</span>
                    <span className="font-semibold text-[#86efac]">Completed & Portico Installed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5"><Shield size={13} className="text-[#d4b56e]" /> Inscription</span>
                    <span className="font-medium text-[#d4b56e]">Gbọngan Mògájì Ilé Ẹ̀kẹ́</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 3: FOUR CORE FACILITIES / PILLARS
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 bg-[#f4f0e6] text-[#101827]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a4f2f]">
              ÀWỌN IBI ÀṢÀ · DESIGNED FACILITIES
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-6xl text-[#101827]">
              Pillars of the New Hall.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#101827]/70 md:text-lg">
              Ilé Ẹ̀kẹ́ is built to serve as a comprehensive traditional civic complex preserving culture while empowering compound governance.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projectPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeUp}
                  className="rounded-xl border border-[#101827]/15 bg-white p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-3xl font-bold text-[#8a4f2f]">
                        {pillar.number}
                      </span>
                      <Icon size={24} className="text-[#8a4f2f]" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-widest text-[#8a4f2f]">
                      {pillar.yoruba}
                    </span>

                    <h3 className="mt-1 font-display text-2xl text-[#101827]">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#101827]/75">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 4: CONSTRUCTION ROADMAP TIMELINE
      ========================================================= */}
      <section id="progress-update" className="py-24 px-6 lg:px-14 bg-[#0d1627] border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÌṢẸ̀ ÀTI ÌTẸ̀SÍWÁJÚ · PROJECT ROADMAP & PROGRESS
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">
              Development Milestones
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              Tracing the journey from ground substructure and steel framework to the completed exterior present condition and upcoming grand commissioning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {constructionPhases.map((phase) => (
              <motion.div
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="group relative rounded-xl border border-white/15 bg-[#121c30] p-6 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="font-display text-xl font-bold text-[#d4b56e]">
                      {phase.phase}
                    </span>
                    <span
                      className={`rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                        phase.status === "Completed"
                          ? "bg-[#2a4a1a] text-[#86efac] border border-[#86efac]/30"
                          : phase.status === "Final Stage"
                          ? "bg-[#d4b56e] text-[#0d1627] font-bold"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <h4 className="font-display text-lg text-white group-hover:text-[#d4b56e] transition-colors">
                    {phase.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#c8a85f]">{phase.date}</p>

                  <p className="mt-3 text-xs leading-6 text-white/65">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: SPONSORSHIP & SUPPORT CTA
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 bg-gradient-to-r from-[#8a4f2f] to-[#6a3b22] text-white">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f4f0e6]/80">
              ÌDÁSÍLẸ̀ AGBO ILÉ · SUPPORT THE PROJECT
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-white">
              Be part of Ilé Ẹ̀kẹ́&apos;s legacy.
            </h2>
            <p className="mt-3 text-base text-white/80 max-w-xl leading-8">
              Family compounds, diaspora Ibadanites, and corporate partners are invited to join the Association of Mogajis in bringing this historical assembly hall to full interior commissioning.
            </p>
          </div>

          <a
            href="mailto:info@mogajisofibadan.org.ng?subject=Ile%20Eke%20Project%20Inquiry"
            className="inline-flex items-center gap-3 rounded bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#8a4f2f] transition hover:bg-[#f4f0e6] shadow-xl shrink-0"
          >
            <span>Inquire & Support Project</span>
            <ChevronRight size={15} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
