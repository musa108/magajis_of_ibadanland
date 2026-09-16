"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, ChevronRight, ScrollText, Mic, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const featuredStories = [
  {
    id: "ibadan-origins",
    category: "Àkọ́ọ́lẹ̀ · History",
    yorubaTitle: "Ìpilẹ̀ṣẹ̀ Ìbàdàn",
    title: "The Origins of Ibadan: From Forest Camp to Fortress City",
    excerpt:
      "In the early 19th century, a war camp established by Yoruba warriors fleeing the collapse of the Oyo Empire grew into one of sub-Saharan Africa's largest cities. This is the story of how Ibadan was born from conflict and forged into an enduring civilisation.",
    date: "Est. ~1829",
    readTime: "8 min read",
    tags: ["Origins", "Oyo Empire", "Warriors", "History"],
  },
  {
    id: "olubadan-succession",
    category: "Ìjọba Ìbílẹ̀ · Chieftaincy",
    yorubaTitle: "Ìlànà Ìtẹ̀ Olúbàdàn",
    title: "The Unique Republican Throne: How the Olubadan Ascends",
    excerpt:
      "Unlike most Yoruba kingdoms where the throne passes through a single royal dynasty, Ibadan's Olubadan system is a meritocratic ladder where any Mogaji can, through rank longevity and civic service, ascend to become king. An extraordinary institution unique in West Africa.",
    date: "Centuries-Old Tradition",
    readTime: "10 min read",
    tags: ["Olubadan", "Chieftaincy", "Succession", "Governance"],
  },
  {
    id: "adedibu-legacy",
    category: "Àwọn Mògájì · Mogaji Profiles",
    yorubaTitle: "Ìtàn Adédibù",
    title: "Lamidi Adedibu: The 'Strong Man of Ibadan' and His Compound",
    excerpt:
      "Chief Lamidi Ariyibi Adedibu — former Mogaji of the Adedibu Compound — became one of Nigeria's most influential political figures. His compound in Molete, where thousands gathered daily to receive hospitality and counsel, remains a symbol of communal generosity.",
    date: "20th Century",
    readTime: "12 min read",
    tags: ["Adedibu", "Mogaji", "Politics", "Compound"],
  },
  {
    id: "mapo-hall",
    category: "Àwọn Ibi Àṣà · Heritage Sites",
    yorubaTitle: "Mapo Hall — Ilé Ìjọba Àtijọ́",
    title: "Mapo Hall: The Hilltop Parliament of Ibadanland",
    excerpt:
      "Completed in 1929 atop Mapo Hill, Mapo Hall was built under the colonial administration of Captain Ross with indigenous labour and materials. It became the seat of Ibadan governance, the venue of the Mogajis council, and the architectural soul of the city.",
    date: "1929 — Present",
    readTime: "7 min read",
    tags: ["Mapo Hall", "Architecture", "Governance", "Heritage"],
  },
  {
    id: "mogaji-role",
    category: "Ìjọba Ìbílẹ̀ · Traditional Rule",
    yorubaTitle: "Ipa Mògájì Nínú Àwùjọ Ìbàdàn",
    title: "The Role of the Mogaji in Ibadan's Social Fabric",
    excerpt:
      "A Mogaji is not merely an honorary title — they are the custodian of ancestral memory, the court of first instance for family disputes, and the bridge between civic government and the grassroots. Understanding the Mogaji is to understand the beating heart of Ibadanland.",
    date: "Living Tradition",
    readTime: "9 min read",
    tags: ["Mogaji", "Role", "Society", "Ibadan"],
  },
  {
    id: "oriki-ibadan",
    category: "Àṣà · Culture & Oral Tradition",
    yorubaTitle: "Oríkì Ìbàdàn",
    title: "Oríkì Ìbàdàn: The Praise Poetry That Carries a City's Soul",
    excerpt:
      "Long before written records, Ibadan's identity was carried in oral verse. The Oríkì of Ibadan — praise poetry recited at chieftaincy installations, family gatherings, and festivals — is a living archive of the city's warrior spirit, its heroes, and its deep pride.",
    date: "Oral Tradition",
    readTime: "6 min read",
    tags: ["Oriki", "Culture", "Poetry", "Oral History"],
  },
];

const archiveCategories = [
  {
    icon: ScrollText,
    title: "Chieftaincy Chronicles",
    yoruba: "Àkọ́ọ́lẹ̀ Ìjọba Ìbílẹ̀",
    desc: "Installation rites, chieftaincy histories, and the biographies of those who sat on Ibadan's highest stools.",
    count: "24 Records",
  },
  {
    icon: Mic,
    title: "Oral Traditions",
    yoruba: "Ìtàn Àgbà",
    desc: "Transcribed oral histories passed down through Ibadan's elders, families, and compound griots.",
    count: "17 Traditions",
  },
  {
    icon: LayoutGrid,
    title: "Compound Archives",
    yoruba: "Àkọ́ọ́lẹ̀ Agbo Ilé",
    desc: "Founding histories and notable lineages of Ibadan's historically significant family compounds.",
    count: "30+ Compounds",
  },
  {
    icon: BookOpen,
    title: "Cultural Practices",
    yoruba: "Àṣà Ìbàdàn",
    desc: "Documentation of Ibadan's unique cultural expressions — from masquerade traditions to communal harvest assemblies.",
    count: "12 Practices",
  },
];

const orikiBadge = [
  "Ìbàdàn, Olùyọ́lé.",
  "Ìbàdàn tí ń gbójú wo ọ̀run.",
  "Ọlọ́ yọ tí kò ṣẹ̀ mọ́ ẹ̀ jẹ.",
  "Ibadan — City of the Brave.",
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-[#f4f0e7]">
      <Navbar />

      {/* =========================================================
          HERO BANNER (WARM CREAM EDITORIAL FOLIO)
      ========================================================= */}
      <section className="relative pt-36 pb-24 px-6 lg:px-12 overflow-hidden border-b border-[#101923]/15 bg-[#e8e0d0] text-[#101923]">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#9a5b43]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
              ÌTÀN ÌṢẸ̀DÁ ÀTI ÀṢÀ · CHRONICLES & ORAL ARCHIVES
            </p>
          </div>

          <div className="max-w-[950px]">
            <h1 className="font-display text-[clamp(2.8rem,6vw,6rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#101923]">
              Stories <span className="italic text-[#9a5b43]">worth keeping.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#1e242d]/85 sm:text-lg sm:leading-8 border-l-2 border-[#9a5b43] pl-6 font-sans">
            Stories of people, places, and traditions that deserve to be remembered and passed on for generations to come.
          </p>

          {/* Oriki Running Marquee Ribbon */}
          <div className="mt-14 overflow-hidden border-y border-[#101923]/15 py-3.5">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap"
            >
              {[...orikiBadge, ...orikiBadge, ...orikiBadge].map((line, i) => (
                <span key={i} className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
                  {line} ·
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHIVE COLLECTIONS
      ========================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-[#050c17] border-b border-white/10">
        <div className="mx-auto max-w-[1360px]">
          <div className="mb-12 border-b border-white/10 pb-6">
            <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
              ÀWỌN ÀKỌ́Ọ́LẸ̀ · ARCHIVE COLLECTIONS
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[#f4f0e7]">
              Explore the Collections
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {archiveCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  className="group border border-white/10 bg-[#0b1627] p-6 transition-all hover:border-[#b89a5a] cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#b89a5a]/40 bg-[#07111f] text-[#d4b56e]">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-[#b89a5a] block">
                      {cat.yoruba}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-white group-hover:text-[#d4b56e] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#aaa397] font-sans">{cat.desc}</p>
                  </div>
                  <div className="mt-5 border-t border-white/10 pt-3 text-[10px] font-semibold uppercase tracking-widest text-[#d4b56e]">
                    {cat.count}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FEATURED STORIES REPOSITORY
      ========================================================= */}
      <section className="py-24 px-6 lg:px-12 mx-auto max-w-[1360px]">
        <div className="mb-14 border-b border-white/10 pb-6">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#b89a5a]">
            ÀWỌN ÌTÀN ÌṢẸ̀DÁ · FEATURED CHRONICLES
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-[#f4f0e7]">
            The Living Archive
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredStories.map((story, i) => (
            <motion.article
              key={story.id}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: (i % 2) * 0.1 }}
              className={`group border border-[#b89a5a]/25 bg-[#0b1627] p-7 transition-all hover:border-[#b89a5a] flex flex-col justify-between ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#aaa397] font-sans">
                  <span className="font-semibold uppercase tracking-[0.2em] text-[#b89a5a]">
                    {story.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {story.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={11} /> {story.readTime}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-xs italic text-[#d4b56e] font-display">{story.yorubaTitle}</p>

                <h3
                  className={`mt-2 font-display text-white group-hover:text-[#d4b56e] transition-colors leading-tight ${
                    i === 0 ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#f4f0e7]/80 font-sans">{story.excerpt}</p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#aaa397]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#d4b56e] group-hover:gap-2 transition-all">
                  Read chronicle <ChevronRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================================
          YORUBA PROVERB COLOPHON
      ========================================================= */}
      <section className="py-20 px-6 lg:px-12 bg-[#050c17] border-t border-white/10">
        <div className="mx-auto max-w-[1360px] text-center">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl italic text-[#d4b56e]">
            &ldquo;Ìtàn tí a kò gbọ́ kò lè kọ́ wa nǹkan.&rdquo;
          </p>
          <p className="mt-3 text-sm text-[#aaa397] font-sans">
            <em>A story we have not heard cannot teach us anything.</em> — Yorùbá Proverb
          </p>
          <div className="mt-8">
            <Link
              href="/heritage"
              className="group inline-flex items-center gap-3 border border-[#b89a5a]/60 bg-[#07111f] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#d4b56e] transition hover:bg-[#b89a5a] hover:text-[#07111f]"
            >
              <span>Explore Heritage · Àkọ́ọ́lẹ̀ Ìtàn</span>
              <ChevronRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
