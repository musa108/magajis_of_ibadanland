"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
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
import { fadeUp, fadeIn, viewportOnce } from "@/lib/animations";

const projectPillars = [
  {
    number: "01",
    title: "Supreme Assembly Chamber",
    yoruba: "Àwùjọ Àwọn Mògájì",
    desc: "A 1,500-seat traditional parliament for monthly council assemblies, chieftaincy summits, and inter-compound conventions.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Heritage Vault & Archives",
    yoruba: "Àkọ́ọ́lẹ̀ Ìtàn Àti Ìṣẹ́ṣẹ́",
    desc: "Climate-controlled repository storing centuries of lineage installation records, chieftaincy certificates, and oral poetry recordings.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Arbitration Chambers",
    yoruba: "Ilé Ẹjọ́ Àbílẹ̀",
    desc: "Private traditional dispute resolution suites for settling inter-family and compound chieftaincy matters in accordance with Yoruba custom.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Executive Secretariat",
    yoruba: "Ilé Ìjọba Ẹgbẹ́",
    desc: "Administrative offices for the Association's President, General Secretary, and committee administrators to interface with civic authorities.",
    icon: Building2,
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
    <main className="min-h-screen bg-[#07111f] text-[#f4f0e7]">
      <Navbar />

      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative pt-36 pb-20 px-6 lg:px-12 overflow-hidden border-b border-[#b89a5a]/20">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#b89a5a]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
              ÀKỌ́Ọ́LẸ̀ ÌKỌ́LÉ · MOGAJIS&apos; HISTORIC ASSEMBLY HALL
            </p>
          </div>

          <div className="max-w-[950px]">
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              Ilé Ẹ̀kẹ́ <span className="italic text-[#d4b56e]">Projects.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#f4f0e7]/85 sm:text-lg sm:leading-8 border-l-2 border-[#b89a5a] pl-6 font-sans">
            The historical assembly hall and modern traditional secretariat of the <span className="text-white font-medium">Association of Mogajis of Ibadanland</span> — an architectural landmark bridging centuries of lineage heritage with the future of civic leadership.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery-transformation"
              className="inline-flex items-center gap-3 border border-[#b89a5a] bg-[#b89a5a] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#07111f] transition hover:bg-[#d4b56e]"
            >
              <Eye size={14} /> View Present Condition & Gallery <ChevronRight size={13} />
            </a>
            <a
              href="#progress-update"
              className="inline-flex items-center gap-3 border border-white/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4f0e7] transition hover:border-[#b89a5a] hover:text-[#d4b56e]"
            >
              <History size={14} /> Construction Journey
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRESENT CONDITION & TRANSFORMATION SPOTLIGHT
      ========================================================= */}
      <section id="gallery-transformation" className="py-24 px-6 lg:px-12 bg-[#050c17] border-b border-white/10">
        <div className="mx-auto max-w-[1360px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/15 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56e] mb-2">
                <Sparkles size={14} />
                <span>ÌKỌ́LÉ LỌ́WỌ́LỌ́WỌ́ · BUILDING CONDITION & TRANSFORMATION</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7]">
                Present Condition: Gbọ̀ngàn Mògájì
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 border border-white/15 bg-[#0b1627] p-1">
              {(["All", "Present", "Before"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                    filter === tab
                      ? "bg-[#b89a5a] text-[#07111f]"
                      : "text-[#aaa397] hover:text-white"
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
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-start">
            {/* Active Highlight Image */}
            <motion.div
              key={selectedImage.id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="group border border-[#b89a5a]/30 bg-[#0b1627] flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#07111f]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1627] via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 border border-[#b89a5a]/60 bg-[#07111f]/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#d4b56e] backdrop-blur-sm">
                    {selectedImage.type === "Present" ? (
                      <CheckCircle2 size={13} className="text-[#d4b56e]" />
                    ) : (
                      <HardHat size={13} className="text-[#b89a5a]" />
                    )}
                    {selectedImage.badge}
                  </span>
                </div>
              </div>

              {/* Photo Description Box */}
              <div className="p-7 sm:p-9 border-t border-white/10">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a] block">
                  {selectedImage.subtitle}
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f4f0e7]/80 font-sans">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>

            {/* Thumbnail Selectors & Quick Project Facts */}
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#b89a5a]">
                  Select Image to Inspect:
                </p>

                {filteredImages.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`w-full text-left border p-3.5 transition-all flex items-center gap-4 ${
                      selectedImage.id === img.id
                        ? "border-[#b89a5a] bg-[#0f1e35]"
                        : "border-white/10 bg-[#0b1627] hover:border-white/25"
                    }`}
                  >
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden bg-[#07111f]">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#d4b56e]">
                          {img.type}
                        </span>
                        <span className="text-[11px] text-[#aaa397] truncate">
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
              <div className="border border-[#b89a5a]/30 bg-[#0b1627] p-6">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a] block">
                  Architectural Summary
                </span>
                <div className="mt-4 space-y-3 text-xs text-[#aaa397] font-sans">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#b89a5a]" /> Location</span>
                    <span className="text-white font-medium">Ibadan Central, Oyo State</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5"><Landmark size={12} className="text-[#b89a5a]" /> Capacity</span>
                    <span className="text-white font-medium">1,500+ Seat Parliament</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-[#b89a5a]" /> Exterior Status</span>
                    <span className="text-[#d4b56e] font-semibold">Completed & Portico Installed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5"><Shield size={12} className="text-[#b89a5a]" /> Inscription</span>
                    <span className="text-[#d4b56e] font-medium">Gbọngan Mògájì Ilé Ẹ̀kẹ́</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUR CORE FACILITIES (CREAM FOLIO)
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#e8e0d0] text-[#101923]">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-16 border-b border-[#101923]/15 pb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
              ÀWỌN IBI ÀṢÀ · CIVIC FACILITIES
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-[#101923]">
              Pillars of the New Hall.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1e242d]/80 font-sans sm:text-lg">
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
                  className="border border-[#101923]/15 bg-[#f4f0e7] p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-3xl font-bold text-[#9a5b43]">
                        {pillar.number}
                      </span>
                      <Icon size={22} className="text-[#9a5b43]" />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b43] block">
                      {pillar.yoruba}
                    </span>

                    <h3 className="mt-1 font-display text-2xl text-[#101923]">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#1e242d]/75 font-sans">
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
          CONSTRUCTION ROADMAP TIMELINE
      ========================================================= */}
      <section id="progress-update" className="py-24 px-6 lg:px-12 bg-[#07111f] border-b border-[#b89a5a]/20">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-16 border-b border-white/10 pb-8">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
              ÌṢẸ̀ ÀTI ÌTẸ̀SÍWÁJÚ · PROJECT ROADMAP & PROGRESS
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7]">
              Development Milestones
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#aaa397] font-sans">
              Tracing the journey from ground excavation and structural steel domed trusses to the completed exterior present condition and upcoming grand commissioning.
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
                className="border border-white/10 bg-[#0b1627] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                    <span className="font-display text-xl text-[#d4b56e]">
                      {phase.phase}
                    </span>
                    <span className="border border-[#b89a5a]/40 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[#d4b56e]">
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="font-display text-lg text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#b89a5a]">{phase.date}</p>

                  <p className="mt-3 text-xs leading-relaxed text-[#aaa397] font-sans">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SPONSORSHIP & SUPPORT CTA (TERRACOTTA)
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#9a5b43] text-[#f4f0e7]">
        <div className="mx-auto max-w-[1360px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
              ÌDÁSÍLẸ̀ AGBO ILÉ · SUPPORT THE PROJECT
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-white">
              Be part of Ilé Ẹ̀kẹ́&apos;s legacy.
            </h2>
            <p className="mt-3 text-base text-white/85 max-w-xl leading-relaxed font-sans">
              Family compounds, diaspora Ibadanites, and corporate partners are invited to join the Association of Mogajis in bringing this historical assembly hall to full interior commissioning.
            </p>
          </div>

          <a
            href="mailto:info@mogajisofibadan.org.ng?subject=Ile%20Eke%20Project%20Inquiry"
            className="group inline-flex items-center gap-3 border border-white bg-[#07111f] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f4f0e7] transition hover:bg-white hover:text-[#07111f] shrink-0 shadow-xl"
          >
            <span>Inquire & Support Project</span>
            <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
