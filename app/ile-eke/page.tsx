"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  MapPin,
  HardHat,
  Landmark,
  FileText,
  ChevronRight,
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
    status: "In Progress",
    date: "Current Phase",
    desc: "Erection of reinforced concrete perimeter columns and custom structural steel domed roof trusses (as shown in live progress updates).",
  },
  {
    phase: "Phase 03",
    title: "Enclosure & Wall Cladding",
    status: "Upcoming",
    date: "Q3 2026",
    desc: "Long-span roof decking installation, clay brick masonry, electrical conduits, and window apertures.",
  },
  {
    phase: "Phase 04",
    title: "Interior Finishes & Commissioning",
    status: "Upcoming",
    date: "Q4 2026",
    desc: "Acoustic ceiling paneling, executive council seating, digital audio-visual setup, and grand royal commissioning.",
  },
];

export default function IleEkePage() {
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
              THE HALL OF COUNCIL
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
              href="#progress-update"
              className="inline-flex items-center gap-3 bg-[#d4b56e] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0d1627] transition hover:bg-[#b99a58] shadow-lg"
            >
              View Live Progress <ChevronRight size={14} />
            </a>
            <Link
              href="/compounds"
              className="inline-flex items-center gap-3 border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-white hover:text-white"
            >
              Explore Family Compounds
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: LIVE CONSTRUCTION PROGRESS SPOTLIGHT
      ========================================================= */}
      <section id="progress-update" className="py-24 px-6 lg:px-14 bg-[#08111f] border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/15 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f] mb-2">
                <HardHat size={15} className="text-[#d4b56e]" />
                <span>ÌṢẸ̀ Ń LỌ · LIVE CONSTRUCTION UPDATE</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-white">
                Construction Site Progress
              </h2>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#d4b56e]/50 bg-[#0d1627] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#d4b56e]">
              <span className="h-2 w-2 rounded-full bg-[#d4b56e] animate-ping" />
              Phase 02 Underway
            </span>
          </div>

          {/* Construction Photo Showcase Card */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            {/* Real Project Photo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeIn}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-[#121c30] shadow-2xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#182233]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ile-eke-project.jpg"
                  alt="Ilé Ẹ̀kẹ́ Hall Construction Site Progress"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-transparent to-transparent opacity-80" />
              </div>

              {/* Photo Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="rounded-lg border border-[#d4b56e]/40 bg-[#0d1627]/90 px-4 py-2 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#d4b56e]">
                    Ilé Ẹ̀kẹ́ Hall · Steel Roof Truss Erection
                  </p>
                  <p className="mt-0.5 text-[11px] text-white/70">
                    Highland Seat, Ibadan Central
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project Quick Meta Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-[#121c30] p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                  Current Project Milestone
                </span>
                <h3 className="mt-2 font-display text-2xl text-white">
                  Structural Domed Roof Framework
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Fabrication and lifting of the main assembly hall&apos;s steel roof truss arch, supported by heavy reinforced concrete columns designed for long-span durability.
                </p>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-[#121c30] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4b56e] mb-1">
                    <MapPin size={13} /> Location
                  </div>
                  <p className="font-display text-lg text-white">Ibadan Central</p>
                  <p className="text-xs text-white/55">Oyo State, Nigeria</p>
                </motion.div>

                <motion.div variants={fadeUp} className="rounded-xl border border-white/10 bg-[#121c30] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4b56e] mb-1">
                    <Landmark size={13} /> Capacity
                  </div>
                  <p className="font-display text-lg text-white">1,500+ Capacity</p>
                  <p className="text-xs text-white/55">Assembly Parliament</p>
                </motion.div>
              </div>
            </motion.div>
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
      <section className="py-24 px-6 lg:px-14 bg-[#0d1627] border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÌṢẸ̀ ÀTI ÌTẸ̀SÍWÁJÚ · PROJECT ROADMAP
            </span>
            <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">
              Development Milestones
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {constructionPhases.map((phase) => (
              <motion.div
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="group relative rounded-xl border border-white/15 bg-[#121c30] p-6 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <span className="font-display text-xl font-bold text-[#d4b56e]">
                    {phase.phase}
                  </span>
                  <span
                    className={`rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest ${
                      phase.status === "Completed"
                        ? "bg-[#2a4a1a] text-[#86efac] border border-[#86efac]/30"
                        : phase.status === "In Progress"
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
              Family compounds, diaspora Ibadanites, and corporate partners are invited to join the Association of Mogajis in bringing this historical assembly hall to completion.
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
