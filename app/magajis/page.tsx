"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Award, MapPin, Calendar, Shield } from "lucide-react";
import Image from "next/image";
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
    id: "gbadamosi",
    name: "Mogaji Abdul Gafar Olanrewaju Gbadamosi",
    title: "Mogaji of Agboole Atere, Ayeye · Solicitor & Commissioner for Oaths",
    role: "Mogaji · Legal & Diaspora Chair",
    yorubaRole: "Mògájì Agbo Ilé Atere",
    compound: "Agboole Atere (Ile Onilu)",
    location: "Ayeye, Ibadan Central",
    installedBy: "Late Kabiesi, Oba Mohood Olalekan Balogun, Alli Okunmade II",
    installedYear: "04 December 2023",
    image: "/images/mogaji-abdul-gafar-gbadamosi.jpg",
    education: "Ahmadiya Primary School Idikan; Ibadan Grammar School (IGSOSA); LL.B (Hons), LL.M — University of Wolverhampton, UK",
    career: "Solicitor & Commissioner for Oaths; Chair, Ibadan Think Tank Group UK (ITTG UK); Member, Oluyole Progressive Union (UK)",
    tenure: "Installed Dec 2023 by Oba Olalekan Balogun",
    bio: [
      "Mogaji Abdul Gafar Olanrewaju Gbadamosi is the duly installed Mogaji of Agboole Atere in Ayeye, located in the historical heart of Ibadanland. He was installed on 04 December 2023 by the late 42nd Olubadan of Ibadanland, His Imperial Majesty Oba Mohood Olalekan Balogun (Alli Okunmade II).",
      "Born to Alhaji Abdul Ganiyu Gbadamosi and Mrs. Kudirat Mojisola Gbadamosi (née Latona), his family lineage led by patriarch Okekegan originated from Orile Owu and settled in Ibadan over 200 years ago. The larger ancestral family compound is renowned as Ile Onilu, where his grandfather Ayanwale Akanbi Gbadamosi honed his trade and rose to become the revered Aare Onilu of Ibadanland in the 1970s.",
      "A distinguished legal practitioner holding both LL.B (Hons) and Master of Laws (LL.M) degrees from the University of Wolverhampton, UK, Mogaji Gbadamosi is a qualified Solicitor and Commissioner for Oaths. He attended Ahmadiya Primary School Idikan and Ibadan Grammar School.",
      "As Mogaji, he has spearheaded extensive rebuilding and restoration of dilapidated structures in Agboole Atere, empowering family members, facilitating educational welfare, and championing the social and legal mobility of Ibadan indigenes across the Diaspora as Chair of the Ibadan Think Tank Group UK (ITTG UK) and member of the Oluyole Progressive Union (UK)."
    ],
    isExecutive: true,
  },
  {
    id: "bada",
    name: "Hon. Olasupo Ibrahim Ademola",
    title: "Mogaji Bada, Oke Offa Atipe · Community Chieftain & Civic Leader",
    role: "Mogaji · Civic Leader",
    yorubaRole: "Mògájì Agbo Ilé Bada",
    compound: "Bada Compound (Agbo Ilé Bada)",
    location: "Oke Offa Atipe, Ibadan",
    installedBy: "Olubadan-in-Council",
    installedYear: "Lineage Mogaji",
    image: "/images/mogaji-olasupo-ibrahim-ademola.jpg",
    education: "Higher Education & Traditional Governance",
    career: "Civic Leader, Public Administrator & Lineage Custodian",
    tenure: "Incumbent Mogaji Bada",
    bio: [
      "Hon. Olasupo Ibrahim Ademola is the Mogaji of the renowned Bada family compound in Oke Offa Atipe, situated in the historic heartland of Ibadan.",
      "Bada compound and family was founded by brothers Fagbenla and Orotoki, whose roots have been traced to Jaga Aase (believed to be modern Ajase Ipo, close to Offa). From its inception, the lineage extended across ancestral villages including Aayun in Akinyele Local Government and Oloffa in Ona Ara Local Government.",
      "The Bada family is blessed with illustrious sons and daughters distinguishing themselves across diverse walks of life in commerce, academia, public administration, and community leadership.",
      "As Mogaji, Hon. Olasupo Ibrahim Ademola is dedicated to the progress of the compound, the preservation of the family's historical legacy, and the advancement of peaceful co-existence and civic development across Ibadanland."
    ],
    isExecutive: true,
  },
  {
    id: "egunjenmi",
    name: "Chief Adekunle Amidu Aremu Busari",
    title: "Mogaji of Egunjenmi Compound, Itutaba, Ita Akinloye, Oje",
    role: "Mogaji · Community Developer & Chieftain",
    yorubaRole: "Mògájì Agbo Ilé Egunjenmi",
    compound: "Egunjenmi Compound (Agbo Ilé Egunjenmi)",
    location: "Itutaba, Ita Akinloye, Oje, Ibadan",
    installedBy: "Olubadan-in-Council",
    installedYear: "23rd January 2023",
    image: "/images/mogaji-adekunle-amidu-busari.jpg",
    education: "Traditional Chieftaincy, Leadership & Community Administration",
    career: "Community Chieftain, Cultural Custodian & Civic Developer",
    tenure: "Installed January 2023",
    bio: [
      "Chief Adekunle Amidu Aremu Busari was installed as the Mogaji of the historic Egunjenmi Compound on 23rd January 2023. He is actively driving communal unity, electrification, potable water infrastructure, and security across the family quarter.",
      "Located at Itutaba, Ita Akinloye, Oje, Egunjenmi Compound stands as a historic bastion of warriors, prosperous farmers, and nation builders. Led by founding patriarch Pa Egunjenmi, the family originally migrated from Abejide Compound in Oyo Town. The great generalissimo Aare Latosa granted them land at 'Ibi tiwon tin tu taba' (now Itutaba).",
      "Renowned historically as extensive cultivators of cocoa, kola, and rubber, and as valiant horse-riding warriors under the battlefield battle-cry 'Egunjenmi, Ija Eto!', the family lineage expanded into agrarian settlements including Aba Alafia, Aba Oniyeye, Aba Onifila, Aba Tekuta, and Idi Osan, Olodo.",
      "Egunjenmi Compound has bestowed prominent nation builders upon Nigeria, including Chief Meredith Adisa Akinloye (A.M.A. Akinloye) — Seriki of Ibadanland, national political leader, and Nigeria's first Minister of Agriculture; and Chief Mrs. Gladys Aduke Vaughan, pioneering founder of Omolewa School. The compound remains proud custodians of Orisa Olufon, Orisa Alaso Funfun, and hosts of the revered Atipako and Abidi Elege masquerades."
    ],
    isExecutive: true,
  },
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
              ÀWỌN MÒGÁJÌ ILẸ̀ ÌBÀDÀN · CUSTODIANS OF LIVING LINEAGE
            </p>
          </div>

          <div className="max-w-[950px]">
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f0e7]">
              The <span className="italic text-[#d4b56e]">Magajis.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#f4f0e7]/85 sm:text-lg sm:leading-8 border-l-2 border-[#b89a5a] pl-6 font-sans">
            The custodians, representatives, and voices of ancestral family compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>) across Ibadanland.
          </p>
        </div>
      </section>

      {/* =========================================================
          EXECUTIVE COUNCIL SPOTLIGHT
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 mx-auto max-w-[1360px]">
        <div className="mb-14 border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
              EXECUTIVE LEADERSHIP · ẸGBẸ́ ÀWỌN MÒGÁJÌ
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7]">
              Association Executive Council
            </h2>
          </div>
          <span className="border border-[#b89a5a]/50 bg-[#07111f] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#d4b56e]">
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
              className="group border border-[#b89a5a]/30 bg-[#0b1627] p-7 transition-colors duration-500 hover:border-[#b89a5a] flex flex-col justify-between"
            >
              <div>
                {/* Portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#b89a5a]/20 bg-[#07111f] flex items-center justify-center">
                  {leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#b89a5a]/40 bg-[#07111f]">
                        <Shield className="h-8 w-8 text-[#d4b56e]" />
                      </div>
                      <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#b89a5a]">
                        Certified Mogaji
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1627] via-transparent to-transparent opacity-70" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="border border-[#b89a5a]/60 bg-[#07111f]/90 px-3 py-1 text-[10px] font-sans font-semibold uppercase tracking-wider text-[#d4b56e] backdrop-blur-sm">
                      {leader.yorubaRole}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#b89a5a]">
                    {leader.compound}
                  </span>
                  <h3 className="mt-1 font-display text-2xl sm:text-3xl text-[#f4f0e7] group-hover:text-[#d4b56e] transition-colors leading-tight">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#aaa397]">
                    {leader.title}
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-[#f4f0e7]/75 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-[#b89a5a] shrink-0" />
                      <span>{leader.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={12} className="text-[#b89a5a] shrink-0" />
                      <span>{leader.installedBy}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMogaji(leader)}
                className="mt-6 inline-flex w-full items-center justify-center border border-[#b89a5a]/50 bg-[#07111f] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4b56e] transition-all hover:bg-[#b89a5a] hover:text-[#07111f]"
              >
                View Full Biography & Lineage
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          DIRECTORY SEARCH & FILTER
      ========================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-[#050c17] border-t border-white/10">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12 border-b border-white/10 pb-8">
            <div>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
                MOGAJI DIRECTORY · ÀWỌN MÒGÁJÌ PÁTÁPÁTÁ
              </span>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl text-[#f4f0e7]">
                Family Compound Lineage Heads
              </h2>
            </div>

            {/* Search Input & Filter */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative w-full md:w-72">
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#aaa397]" />
                <input
                  type="text"
                  placeholder="Search Mogaji or Compound..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-white/20 bg-[#0b1627] py-2.5 pl-10 pr-4 text-xs text-white placeholder-[#aaa397] focus:border-[#b89a5a] focus:outline-none"
                />
              </div>

              <div className="flex items-center border border-white/20 bg-[#0b1627] p-1">
                <button
                  type="button"
                  onClick={() => setFilterRole("all")}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                    filterRole === "all" ? "bg-[#b89a5a] text-[#07111f]" : "text-[#aaa397] hover:text-white"
                  }`}
                >
                  All Mogajis
                </button>
                <button
                  type="button"
                  onClick={() => setFilterRole("executive")}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                    filterRole === "executive" ? "bg-[#b89a5a] text-[#07111f]" : "text-[#aaa397] hover:text-white"
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
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedMogaji(profile)}
                className="group cursor-pointer border border-white/10 bg-[#0b1627] p-5 transition-all duration-300 hover:border-[#b89a5a] flex gap-4 items-center"
              >
                <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-[#b89a5a]/40 bg-[#07111f] flex items-center justify-center">
                  {profile.image ? (
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <span className="font-display text-lg tracking-wider text-[#d4b56e]">
                      {profile.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a] truncate block">
                    {profile.yorubaRole || profile.role}
                  </span>
                  <h4 className="font-display text-lg text-white group-hover:text-[#d4b56e] transition-colors leading-snug truncate">
                    {profile.name}
                  </h4>
                  <p className="mt-0.5 text-xs text-[#aaa397] truncate">
                    {profile.compound}
                  </p>
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
              className="absolute inset-0 bg-[#040912]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-[#b89a5a]/50 bg-[#07111f] p-6 sm:p-8 shadow-2xl text-[#f4f0e7]"
            >
              <button
                type="button"
                onClick={() => setSelectedMogaji(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/20 bg-[#0b1627] text-white transition hover:border-[#b89a5a] hover:text-[#d4b56e]"
              >
                <X size={18} />
              </button>

              {/* Drawer Modal Header Tabs */}
              <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-6 pr-12">
                <button
                  type="button"
                  onClick={() => setModalTab("bio")}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                    modalTab === "bio"
                      ? "bg-[#b89a5a] text-[#07111f]"
                      : "border border-white/15 bg-[#0b1627] text-[#aaa397] hover:text-white"
                  }`}
                >
                  Biography & Profile
                </button>
                <button
                  type="button"
                  onClick={() => setModalTab("tree")}
                  className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition ${
                    modalTab === "tree"
                      ? "bg-[#b89a5a] text-[#07111f]"
                      : "border border-white/15 bg-[#0b1627] text-[#aaa397] hover:text-white"
                  }`}
                >
                  Interactive Lineage Tree
                </button>
              </div>

              {modalTab === "bio" ? (
                <div className="grid gap-8 md:grid-cols-[220px_1fr]">
                  <div className="relative aspect-[3/4] overflow-hidden border border-[#b89a5a]/40 bg-[#0b1627] flex items-center justify-center">
                    {selectedMogaji.image ? (
                      <Image
                        src={selectedMogaji.image}
                        alt={selectedMogaji.name}
                        fill
                        sizes="220px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <span className="font-display text-2xl tracking-widest text-[#d4b56e]">
                          {selectedMogaji.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                        </span>
                        <span className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-[#b89a5a]">
                          Certified Mogaji
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="border border-[#b89a5a]/40 bg-[#07111f] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#d4b56e]">
                      {selectedMogaji.role}
                    </span>

                    <h3 className="mt-3 font-display text-2xl sm:text-3xl text-white">
                      {selectedMogaji.name}
                    </h3>

                    <p className="mt-1 text-xs text-[#b89a5a]">
                      {selectedMogaji.title}
                    </p>

                    <div className="mt-4 grid gap-2 text-xs text-[#aaa397] border-t border-b border-white/10 py-3 font-sans">
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-[#b89a5a]" />
                        <span>{selectedMogaji.compound} ({selectedMogaji.location})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={12} className="text-[#b89a5a]" />
                        <span>Installed by: {selectedMogaji.installedBy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-[#b89a5a]" />
                        <span>Tenure / Year: {selectedMogaji.installedYear}</span>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#f4f0e7]/85 font-sans">
                      <h4 className="font-semibold text-white uppercase text-xs tracking-wider text-[#d4b56e]">
                        Biography & Cultural Profile
                      </h4>
                      {selectedMogaji.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>

                    {selectedMogaji.education && (
                      <div className="mt-4 text-xs text-[#aaa397]">
                        <span className="font-bold text-[#b89a5a]">Education: </span>
                        {selectedMogaji.education}
                      </div>
                    )}

                    {selectedMogaji.career && (
                      <div className="mt-2 text-xs text-[#aaa397]">
                        <span className="font-bold text-[#b89a5a]">Career / Profession: </span>
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
