"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Shield,
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const mandates = [
  "Promote and preserve the cultural heritage, traditions, and customs of Ibadanland.",
  "Safeguard the rights, dignity, and interests of all registered Mogajis.",
  "Serve as a unified voice of family compound leadership to all tiers of government.",
  "Settle inter-family and inter-compound disputes through traditional arbitration.",
  "Document and archive chieftaincy histories, installation records, and family lineages.",
  "Facilitate community development projects within family compound quarters.",
  "Promote peaceful co-existence across Ibadan's diverse family compounds.",
];

const executiveCouncil = [
  {
    name: "Mogaji Asimiyu Adepoju Ariori",
    role: "President",
    yorubaRole: "Aṣáájú Ẹgbẹ́",
    compound: "Olorisa Compound, Oja Oke Ado",
    term: "2nd Term (4-Year Tenure)",
    image: "/images/mogaji-asimiyu-ariori.jpg",
    bio: "Installed Mogaji of Olorisa Compound over 36 years ago by Late Kabiesi, Oba Oloyede Asanike. Spent his youthful life within the Late Lamidi Adedibu political empire. A thoroughbred Ibadan man, great listener, wise counsellor in deep Yorùbá matters, devoted family man, and passionate custodian of Ibadan cultural heritage.",
  },
  {
    name: "Oloye Allen Olutunji Ajala Odugade",
    role: "General Secretary",
    yorubaRole: "Àkọ́ọ́wé Àgbà",
    compound: "Odugade Family Compound",
    term: "2nd Term (4-Year Tenure)",
    image: "/images/mogaji-oluye-allen-odugade.jpg",
    bio: "Holds a Master's Degree in Managerial Psychology from the University of Ibadan. A seasoned Insurance Professional and Associate Member of the Insurance Institute of Nigeria. Installed Mogaji of Odugade family in 2016 after the transition of Oba (Dr) Samuel Osundiran Odulana Odugade I — the 40th Olubadan.",
  },
  {
    name: "Mogaji Toki of Ilé Toki",
    role: "Executive Council Member",
    yorubaRole: "Mògájì Agbo Ilé Toki",
    compound: "Ilé Toki Family Compound",
    term: "Incumbent Lineage Custodian",
    image: "/images/mogaji-toki.jpg",
    bio: "Duly installed Mogaji and custodian of the historic Ilé Toki ancestral family compound in Ibadanland. Dedicated to compound development, youth mentorship, inter-family peace initiatives, and the preservation of Ibadan's warrior era heritage.",
  },
];

const contactChannels = [
  {
    icon: MapPin,
    label: "Secretariat",
    value: "Mapo Hill, Ibadan, Oyo State, Nigeria",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "+234 (0) 800 MOGAJIS",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mogajisofibadan.org.ng",
  },
];

const communityProjects = [
  {
    title: "Compound Infrastructure Fund",
    yoruba: "Ìdásílẹ̀ Agbo Ilé",
    desc: "Supporting rehabilitation of ancestral family homes and communal compound facilities across Ibadanland.",
    status: "Ongoing",
  },
  {
    title: "Youth Heritage Initiative",
    yoruba: "Ìsapá Àwọn Ọdọ Àṣà",
    desc: "Engaging young Ibadanites in the study, documentation, and celebration of traditional chieftaincy culture.",
    status: "Active",
  },
  {
    title: "Mogaji Digital Archive",
    yoruba: "Àkọ́ọ́lẹ̀ Fídíò Àwọn Mògájì",
    desc: "Digitising installation records, oral histories, and compound genealogies for permanent preservation.",
    status: "In Progress",
  },
  {
    title: "Ibadan Cultural Festival",
    yoruba: "Àjọyọ Àṣà Ìbàdàn",
    desc: "Annual celebration of Ibadan's heritage, featuring chieftaincy displays, masquerades, Oriki performances, and traditional cuisine.",
    status: "Annual",
  },
];

export default function AboutPage() {
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
              NÍPA ẸGBẸ́ ÀWỌN MÒGÁJÌ · ABOUT THE INSTITUTION
            </p>
          </div>

          <div className="max-w-[950px]">
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              Our story. <span className="italic text-[#d4b56e]">Our future.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#f4f0e7]/85 sm:text-lg sm:leading-8 border-l-2 border-[#b89a5a] pl-6 font-sans">
            The stories of Ibadan belong to its people. This platform exists to document, preserve, and share them for all generations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/magajis"
              className="group inline-flex items-center gap-3 border border-[#b89a5a] bg-[#b89a5a] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#07111f] transition hover:bg-[#d4b56e]"
            >
              <span>Explore the Magajis</span>
              <ChevronRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/heritage"
              className="inline-flex items-center gap-3 border border-white/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:border-[#b89a5a] hover:text-[#d4b56e]"
            >
              <span>Discover the Heritage</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE THREE PURPOSE PILLARS (CREAM FOLIO)
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#e8e0d0] text-[#101923]">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-14 border-b border-[#101923]/15 pb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
              ÀWỌN ÒPÓ ẸGBẸ́ · PURPOSE & VISION
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-[#101923]">
              Why this platform exists.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* PRESERVE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="border border-[#101923]/15 bg-[#f4f0e7] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b43]">
                  01 · PRESERVE
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl text-[#101923]">
                  Document the heritage of Ibadanland.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1e242d]/80 font-sans">
                  Digitising ancient chieftaincy installation records, family compound genealogies, and oral traditions before they fade from living memory.
                </p>
              </div>
            </motion.div>

            {/* CONNECT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="border border-[#101923]/15 bg-[#f4f0e7] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b43]">
                  02 · CONNECT
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl text-[#101923]">
                  Bridge the generations.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1e242d]/80 font-sans">
                  Connecting Ibadan descendants worldwide with their ancestral Agbo Ilé compounds, family leaders, and historic lineage roots.
                </p>
              </div>
            </motion.div>

            {/* INSPIRE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="border border-[#101923]/15 bg-[#f4f0e7] p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a5b43]">
                  03 · INSPIRE
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl text-[#101923]">
                  A permanent home of discovery.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#1e242d]/80 font-sans">
                  Inspiring young Ibadanites to discover where they come from, fostering pride in Yoruba traditional governance and civic leadership.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MANDATE & OBJECTIVES
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#050c17] border-b border-white/10">
        <div className="mx-auto max-w-[1360px] grid gap-16 lg:grid-cols-2 items-start">
          <div>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
              ÀFỌ́JÚ ÌMỌ̀ · MANDATE & OBJECTIVES
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#f4f0e7]">
              Our Purpose and Mission
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#f4f0e7]/75 font-sans">
              Established as the official umbrella body for all certified Mogajis of Ibadanland, the
              Association operates under a clear mandate rooted in cultural preservation, communal
              harmony, and institutional governance.
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#f4f0e7]/75 font-sans">
              The Association interfaces with government bodies, civil society, and international
              observers on matters affecting the dignity and welfare of Ibadan&apos;s traditional
              institutions and the people they serve.
            </p>

            <div className="mt-8 flex items-center gap-4 border border-[#b89a5a]/30 bg-[#0b1627] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#b89a5a]/40 bg-[#07111f]">
                <Shield size={22} className="text-[#d4b56e]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Certified & Recognised</p>
                <p className="mt-1 text-xs text-[#aaa397]">
                  All member Mogajis hold official installation certificates recognised by the Oyo
                  State government and the Olubadan Palace Council.
                </p>
              </div>
            </div>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-4"
          >
            {mandates.map((mandate, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 border border-white/10 bg-[#0b1627] p-4"
              >
                <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#d4b56e]" />
                <p className="text-sm sm:text-base leading-relaxed text-[#f4f0e7]/80 font-sans">{mandate}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* =========================================================
          EXECUTIVE COUNCIL
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 mx-auto max-w-[1360px]">
        <div className="mb-14 border-b border-white/10 pb-6">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
            ÌGBÌMỌ̀ ÀṢÁÁJÚ · EXECUTIVE COUNCIL
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7]">
            Leadership of the Association
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#aaa397] font-sans">
            The executive council stewards the traditional governance of Ibadanland&apos;s family compounds.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {executiveCouncil.map((exec, i) => (
            <motion.div
              key={exec.name}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: i * 0.15 }}
              className="border border-[#b89a5a]/25 bg-[#0b1627] flex flex-col justify-between"
            >
              <div>
                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-[#b89a5a]/20 bg-[#07111f]">
                  <Image
                    src={exec.image}
                    alt={exec.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1627] via-transparent to-transparent opacity-70" />

                  {/* Role Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="border border-[#b89a5a]/60 bg-[#07111f]/90 px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-widest text-[#d4b56e] backdrop-blur-sm">
                      {exec.yorubaRole}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a] block">
                    {exec.role} · {exec.term}
                  </span>
                  <h3 className="mt-1.5 font-display text-2xl text-white">{exec.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-[#aaa397]">
                    <MapPin size={11} className="text-[#b89a5a]" />
                    {exec.compound}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-[#f4f0e7]/80 font-sans">{exec.bio}</p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-white/10">
                <Link
                  href="/magajis"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4b56e] hover:text-white transition-colors"
                >
                  <span>Full Profile</span>
                  <ChevronRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          COMMUNITY INITIATIVES
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#050c17] border-y border-white/10">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-14 border-b border-white/10 pb-6">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
              ÀWỌN IṢẸ́ ÀWÙJỌ · COMMUNITY INITIATIVES
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#f4f0e7]">
              Building for Ibadanland
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2"
          >
            {communityProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="border border-white/10 bg-[#0b1627] p-7 transition-all hover:border-[#b89a5a]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a]">
                    {project.yoruba}
                  </span>
                  <span className="border border-[#b89a5a]/40 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[#d4b56e]">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#aaa397] font-sans">{project.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTACT & MEMBERSHIP
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 mx-auto max-w-[1360px]">
        <div className="mb-14 border-b border-white/10 pb-6">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.24em] text-[#b89a5a]">
            ÌSOPỌ̀ · CONTACT THE ASSOCIATION
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#f4f0e7]">Get in Touch</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.label}
                  className="flex items-start gap-4 border border-white/10 bg-[#0b1627] p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b89a5a]/40 bg-[#07111f] text-[#d4b56e]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a]">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-white/90">{channel.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Membership CTA */}
          <div className="border border-[#b89a5a]/40 bg-[#0b1627] p-8 md:p-10 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b89a5a]/40 bg-[#07111f] text-[#d4b56e] mb-6">
              <Users size={22} />
            </div>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a] block">
              Ìdásílẹ̀ Ẹgbẹ́ · Membership
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl text-white">
              Are you a Mogaji of Ibadanland?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#f4f0e7]/75 font-sans">
              If you have been duly installed as the Mogaji of your family compound, you are
              eligible for full membership in the Association of Mogajis of Ibadanland. Join your
              fellow compound leaders in preserving our collective heritage.
            </p>
            <ul className="mt-6 space-y-2 text-xs text-[#aaa397] font-sans">
              {[
                "Official installation certificate required",
                "Recognition by Olubadan Palace Council",
                "Annual membership dues apply",
                "Full voting rights at general assembly",
              ].map((req) => (
                <li key={req} className="flex items-center gap-2">
                  <CheckCircle size={12} className="text-[#d4b56e] shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="mailto:info@mogajisofibadan.org.ng"
                className="inline-flex items-center gap-3 border border-[#b89a5a] bg-[#b89a5a] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#07111f] transition hover:bg-[#d4b56e]"
              >
                <FileText size={13} /> Apply for Membership
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
