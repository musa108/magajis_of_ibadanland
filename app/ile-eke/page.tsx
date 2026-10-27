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
  Crown,
  Calendar,
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
    id: "royal-visit-1",
    title: "Royal Inspection · Processional Arrival",
    subtitle: "26 October 2026 · Kabiyesi Olubadan of Ibadan",
    src: "/images/olubadan-ile-eke-visit-1.jpg",
    type: "Present",
    badge: "Royal Inspection",
    desc: "Kabiyesi Olubadan of Ibadan, Oba Adewolu Ladoja (Arusa I) arriving under the royal umbrella to inspect the completed hall ahead of its official commissioning.",
  },
  {
    id: "royal-visit-2",
    title: "Reception by the Council of Mogajis",
    subtitle: "26 October 2026 · Assembly Forecourt",
    src: "/images/olubadan-ile-eke-visit-2.jpg",
    type: "Present",
    badge: "Royal Inspection",
    desc: "His Imperial Majesty received in grand audience by the Mogajis of Ibadanland at the forecourt entrance of Gbọngan Mogaji Ilé Ẹ̀kẹ́.",
  },
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
            <h1 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              Gbọ̀ngàn Mògájì
              <br />
              <span className="italic text-[#d4b56e]">Ilé Ẹ̀kẹ́ Complex.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-[#f4f0e7]/85 font-sans leading-relaxed max-w-3xl">
              The grand parliamentary hall, arbitration chambers, and lineage archive of the{" "}
              <span className="text-white font-medium">Association of Mogajis of Ibadanland</span>. A living monument to traditional governance, communal unity, and Ibadan&apos;s enduring heritage.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-xs text-[#aaa397]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#b89a5a]" />
              <span>Location: Ibadanland, Oyo State</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#d4b56e]" />
              <span className="text-[#f4f0e7]">Status: Exterior Completed · Final Commissioning Stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIAL SECTION: ROYAL INSPECTION VISIT BY OLUBADAN
      ========================================================= */}
      <section id="royal-visit" className="py-24 px-6 lg:px-12 bg-[#091424] border-b border-[#b89a5a]/25 text-[#f4f0e7]">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#b89a5a]/25 pb-6 mb-12">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#b89a5a]" />
              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d4b56e]">
                ÌBẸ̀WÒ ỌBA · ROYAL VISIT & OFFICIAL INSPECTION
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#aaa397]">
              <Calendar size={13} className="text-[#b89a5a]" />
              <span>October 26, 2026 · Ibadanland</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 border border-[#b89a5a]/40 bg-[#07111f] px-3.5 py-1 mb-5">
                <Crown size={14} className="text-[#d4b56e]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4b56e]">
                  Imperial Seal of Approval
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7] leading-[1.1]">
                Kabiyesi Olubadan of Ibadan,
                <br />
                <span className="italic text-[#d4b56e]">
                  Oba Adewolu Ladoja (Arusa I)
                </span>
                <br />
                Inspects Gbọ̀ngàn Mògájì.
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#f4f0e7]/85 font-sans">
                In preparation for the historic commissioning of <strong className="text-white font-medium">Gbọ̀ngàn Mògájì Ilé Ẹ̀kẹ́</strong> (Mogaji&apos;s Hall), His Imperial Majesty <span className="text-[#d4b56e] font-semibold">Oba Adewolu Ladoja (Arusa I)</span>, Kabiyesi Olubadan of Ibadan, visited the assembly hall on <strong>October 26, 2026</strong>.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#aaa397] font-sans">
                Kabiyesi was warmly received with grand pomp, traditional reverence, and royal dignity by the Mogajis of Ibadanland, chieftains, and elders of the Association. His Imperial Majesty walked the grounds, inspected the completed classical portico and chambers, and bestowed his royal blessings upon the landmark assembly project.
              </p>

              <div className="mt-8 border-l-2 border-[#b89a5a] bg-[#07111f] p-5">
                <p className="font-display italic text-base text-[#f4f0e7]/90 leading-relaxed">
                  &ldquo;This hall stands as a monument to the unity and enduring strength of Ibadan&apos;s family compounds. We look forward to its grand commissioning for the benefit of all our people.&rdquo;
                </p>
                <span className="mt-2 block text-[11px] font-semibold uppercase tracking-widest text-[#d4b56e]">
                  — Royal Declaration of Visitation
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-6 grid gap-4 sm:grid-cols-2"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-[#b89a5a]/40 bg-[#07111f] group">
                <Image
                  src="/images/olubadan-ile-eke-visit-1.jpg"
                  alt="Kabiyesi Olubadan Oba Adewolu Ladoja (Arusa I) arriving at Gbọngan Mogaji Ilé Ẹ̀kẹ́"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="border border-[#b89a5a]/60 bg-[#07111f]/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[#d4b56e] backdrop-blur-sm">
                    Arrival
                  </span>
                  <p className="mt-1 text-xs text-white/90 font-medium">
                    Kabiyesi under royal parasol
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden border border-[#b89a5a]/40 bg-[#07111f] group">
                <Image
                  src="/images/olubadan-ile-eke-visit-2.jpg"
                  alt="Council of Mogajis receiving Kabiyesi Olubadan at Ilé Ẹ̀kẹ́ forecourt"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="border border-[#b89a5a]/60 bg-[#07111f]/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[#d4b56e] backdrop-blur-sm">
                    Reception
                  </span>
                  <p className="mt-1 text-xs text-white/90 font-medium">
                    With Council of Mogajis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTERACTIVE PHOTO GALLERY & ARCHITECTURAL DOCUMENTATION
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#07111f] border-b border-[#b89a5a]/20">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8 mb-12">
            <div>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
                ÀKỌ́Ọ́LẸ̀ ÀWÒRÁN · VISUAL DOCUMENTARY ARCHIVE
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7]">
                Architectural Records
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {(["All", "Present", "Before"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition cursor-pointer ${
                    filter === tab
                      ? "border border-[#b89a5a] bg-[#b89a5a] text-[#07111f]"
                      : "border border-white/20 bg-transparent text-[#aaa397] hover:border-white hover:text-white"
                  }`}
                >
                  {tab === "All" ? "All Photographs" : tab === "Present" ? "Present Condition" : "Construction Phase"}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Featured Image Display */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden border border-[#b89a5a]/30 bg-[#0b1627] lg:col-span-8"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#07111f]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 border border-[#b89a5a]/60 bg-[#07111f]/90 px-3.5 py-1 backdrop-blur-md">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#d4b56e]">
                    {selectedImage.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 border-t border-white/10">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#b89a5a] block">
                  {selectedImage.subtitle}
                </span>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f4f0e7]/75 font-sans">
                  {selectedImage.desc}
                </p>
              </div>
            </motion.div>

            {/* Thumbnails Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-xs uppercase font-semibold tracking-widest text-[#aaa397] block mb-2">
                Select Photo Angle ({filteredImages.length})
              </span>
              {filteredImages.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`group relative overflow-hidden border p-3 text-left transition cursor-pointer flex items-center gap-4 ${
                    selectedImage.id === img.id
                      ? "border-[#b89a5a] bg-[#0b1627]"
                      : "border-white/10 bg-[#07111f] hover:border-white/30"
                  }`}
                >
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden bg-[#07111f]">
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="96px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#d4b56e] block">
                      {img.badge}
                    </span>
                    <h4 className="font-display text-sm text-white group-hover:text-[#d4b56e] transition">
                      {img.title}
                    </h4>
                    <p className="text-[11px] text-[#aaa397] mt-0.5 line-clamp-1">
                      {img.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUR INSTITUTIONAL PILLARS
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#e8e0d0] text-[#101923] border-b border-[#b89a5a]/30">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-16 border-b border-[#101923]/15 pb-8">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#9a5b43]">
              ÈRÒDÍ ÀTI ÈTÒ · INSTITUTIONAL PURPOSE & PILLARS
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#101923]">
              Four Pillars of Ilé Ẹ̀kẹ́
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#1e242d]/80 font-sans">
              Gbọngan Mogaji is designed not merely as an architectural monument, but as the active legislative, judicial, and archival hearth for Ibadan&apos;s traditional council.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
