"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
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
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";

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
    <main className="min-h-screen bg-[#0d1627] text-[#f5f1e8]">
      <Navbar />

      {/* =========================================================
          HERO BANNER
      ========================================================= */}
      <section className="relative pt-36 pb-24 px-6 lg:px-14 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08111f] via-[#0d1627] to-[#0d1627]" />
        <div className="pointer-events-none absolute left-[10%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#b99a58] opacity-15 blur-[160px]" />
        <div className="pointer-events-none absolute right-[5%] bottom-[0%] h-[350px] w-[350px] rounded-full bg-[#8a4f2f] opacity-10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b99a58]/40 bg-[#0d1627]/80 px-4 py-1.5 backdrop-blur-md mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4b56e] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a85f]">
              NÍPA ẸGBẸ́ ÀWỌN MÒGÁJÌ · ABOUT THE INSTITUTION
            </span>
          </div>

          <div className="max-w-[950px]">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8a85f] mb-3">
              OUR HERITAGE
            </p>
            <h1 className="font-display text-[clamp(3.2rem,7.5vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-white">
              Our story. <span className="italic text-[#d4b56e]">Our future.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-9 text-white/80 md:text-xl border-l-2 border-[#d4b56e] pl-6">
            The stories of Ibadan belong to its people. This platform exists to document, preserve, and share them for all generations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/magajis"
              className="inline-flex items-center gap-3 bg-[#d4b56e] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0d1627] transition hover:bg-[#b99a58]"
            >
              Explore the Magajis <ChevronRight size={12} />
            </Link>
            <Link
              href="/heritage"
              className="inline-flex items-center gap-3 border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 transition hover:border-white hover:text-white"
            >
              Discover the Heritage
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE THREE PURPOSE PILLARS
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 bg-[#f4f0e6] text-[#101827]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a4f2f]">
              ÀWỌN ÒPÓ ẸGBẸ́ · PURPOSE & VISION
            </span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl text-[#101827]">
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
              className="rounded-xl border border-[#101827]/15 bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a4f2f]">
                01 · PRESERVE
              </span>
              <h3 className="mt-3 font-display text-3xl text-[#101827]">
                Document the heritage of Ibadanland.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#101827]/75">
                Digitising ancient chieftaincy installation records, family compound genealogies, and oral traditions before they fade from living memory.
              </p>
            </motion.div>

            {/* CONNECT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-[#101827]/15 bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a4f2f]">
                02 · CONNECT
              </span>
              <h3 className="mt-3 font-display text-3xl text-[#101827]">
                Create a digital bridge between generations.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#101827]/75">
                Connecting Ibadan descendants worldwide with their ancestral Agbo Ilé compounds, family leaders, and historic lineage roots.
              </p>
            </motion.div>

            {/* INSPIRE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[#101827]/15 bg-white p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#8a4f2f]">
                03 · INSPIRE
              </span>
              <h3 className="mt-3 font-display text-3xl text-[#101827]">
                Give future generations a place of discovery.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#101827]/75">
                Empowering young Ibadanites to discover where they come from, fostering pride in Yoruba traditional governance and civic leadership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MANDATE & OBJECTIVES
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 bg-[#08111f] border-b border-white/10">
        <div className="mx-auto max-w-[1200px] grid gap-16 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀFỌ́JÚ ÌMỌ̀ · MANDATE & OBJECTIVES
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-white">
              Our Purpose and Mission
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70">
              Established as the official umbrella body for all certified Mogajis of Ibadanland, the
              Association operates under a clear mandate rooted in cultural preservation, communal
              harmony, and institutional governance.
            </p>
            <p className="mt-3 text-base leading-8 text-white/70">
              The Association interfaces with government bodies, civil society, and international
              observers on matters affecting the dignity and welfare of Ibadan&apos;s traditional
              institutions and the people they serve.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-lg border border-[#d4b56e]/30 bg-[#121c30] p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4b56e]/40 bg-[#0d1627]">
                <Shield size={22} className="text-[#d4b56e]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Certified & Recognised</p>
                <p className="mt-1 text-xs text-white/60">
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
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-[#121c30] p-4"
              >
                <CheckCircle size={16} className="mt-0.5 shrink-0 text-[#d4b56e]" />
                <p className="text-base leading-7 text-white/80">{mandate}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* =========================================================
          EXECUTIVE COUNCIL
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 mx-auto max-w-[1200px]">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
            ÌGBÌMỌ̀ ÀṢÁÁJÚ · EXECUTIVE COUNCIL
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">
            Leadership of the Association
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
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
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#121c30] shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Portrait */}
                <div className="relative h-[320px] w-full overflow-hidden bg-[#182233] flex items-center justify-center">
                  {exec.image ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4b56e]/40 bg-[#0d1627]">
                        <span className="font-display text-2xl tracking-widest text-[#d4b56e]">
                          {exec.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </span>
                      </div>
                      <span className="mt-3 text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                        Certified Mogaji
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121c30] via-[#121c30]/30 to-transparent" />

                  {/* Role Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="rounded-full border border-[#d4b56e]/60 bg-[#0d1627]/90 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#d4b56e] backdrop-blur-sm">
                      {exec.yorubaRole}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                    {exec.role} · {exec.term}
                  </span>
                  <h3 className="mt-1.5 font-display text-2xl text-white">{exec.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-white/50">
                    <MapPin size={11} className="text-[#d4b56e]" />
                    {exec.compound}
                  </p>
                  <p className="mt-5 text-base leading-8 text-white/75">{exec.bio}</p>
                </div>
              </div>

              <div className="p-7 pt-0">
                <Link
                  href="/magajis"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#d4b56e] hover:gap-3 transition-all"
                >
                  Full Profile <ChevronRight size={11} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          COMMUNITY PROJECTS
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 bg-[#08111f] border-y border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀWỌN IṢẸ́ ÀWÙ JỌ · COMMUNITY INITIATIVES
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">
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
                className="group rounded-xl border border-white/10 bg-[#121c30] p-7 transition-all hover:border-[#d4b56e]/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                    {project.yoruba}
                  </span>
                  <span className="rounded-full border border-[#d4b56e]/40 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-[#d4b56e]">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-xl text-white group-hover:text-[#d4b56e] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{project.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTACT & LOCATION
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 mx-auto max-w-[1200px]">
        <div className="mb-14">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c8a85f]">
            ÌSOPỌ̀ · CONTACT THE ASSOCIATION
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">Get in Touch</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-5"
          >
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.label}
                  variants={fadeUp}
                  className="flex items-start gap-5 rounded-xl border border-white/10 bg-[#121c30] p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4b56e]/40 bg-[#0d1627] text-[#d4b56e]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                      {channel.label}
                    </p>
                    <p className="mt-1 text-base text-white/85">{channel.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Membership CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeIn}
            className="rounded-2xl border border-[#d4b56e]/30 bg-gradient-to-br from-[#121c30] to-[#0d1627] p-8 md:p-10 shadow-2xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4b56e]/40 bg-[#0d1627] text-[#d4b56e] mb-6">
              <Users size={22} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
              Ìdásílẹ̀ Ẹgbẹ́ · Membership
            </span>
            <h3 className="mt-2 font-display text-2xl text-white">
              Are you a Mogaji of Ibadanland?
            </h3>
            <p className="mt-4 text-base leading-8 text-white/70">
              If you have been duly installed as the Mogaji of your family compound, you are
              eligible for full membership of the Association of Mogajis of Ibadanland. Join your
              fellow compound leaders in preserving our collective heritage.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
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
                className="inline-flex items-center gap-3 bg-[#d4b56e] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0d1627] transition hover:bg-[#b99a58]"
              >
                <FileText size={13} /> Apply for Membership
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
