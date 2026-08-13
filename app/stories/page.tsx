"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Clock, ChevronRight, ScrollText, Mic, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from "@/lib/animations";

const featuredStories = [
  {
    id: "ibadan-origins",
    category: "Àkọ́ọ́lẹ̀ · History",
    yorubaTitle: "Ìpilẹ̀ṣẹ̀ Ìbàdàn",
    title: "The Origins of Ibadan: From Forest Camp to Fortress City",
    excerpt:
      "In the early 19th century, a war camp established by Yoruba warriors fleeing the collapse of the Oyo Empire grew into one of sub-Saharan Africa's largest cities. This is the story of how Ibadan was born from conflict and forged into a civilisation.",
    date: "Est. ~1829",
    readTime: "8 min read",
    tags: ["Origins", "Oyo Empire", "Warriors", "History"],
    accent: "from-[#b99a58]/25",
  },
  {
    id: "olubadan-succession",
    category: "Ìjọba Ìbílẹ̀ · Chieftaincy",
    yorubaTitle: "Ìlànà Ìtẹ̀ Olúbàdàn",
    title: "The Unique Democratic Throne: How the Olubadan Ascends",
    excerpt:
      "Unlike most Yoruba kingdoms where the throne passes through a single royal dynasty, Ibadan's Olubadan system is a meritocratic ladder where any Mogaji can, through rank and longevity, ascend to become king. An extraordinary institution unlike any other in West Africa.",
    date: "Tradition · Centuries Old",
    readTime: "10 min read",
    tags: ["Olubadan", "Chieftaincy", "Succession", "Governance"],
    accent: "from-[#8a4f2f]/25",
  },
  {
    id: "adedibu-legacy",
    category: "Àwọn Mògájì · Mogaji Profiles",
    yorubaTitle: "Ìtàn Adéàdìbù",
    title: "Lamidi Adedibu: The 'Strong Man of Ibadan' and His Compound",
    excerpt:
      "Chief Lamidi Ariyibi Adedibu — former Mogaji of the Adedibu Compound — became one of Nigeria's most powerful political figures. His compound in Molete, where thousands gathered daily to receive rice and political wisdom, remains a symbol of Ibadan's communal generosity.",
    date: "20th Century",
    readTime: "12 min read",
    tags: ["Adedibu", "Mogaji", "Politics", "Compound"],
    accent: "from-[#1a3a6b]/25",
  },
  {
    id: "mapo-hall",
    category: "Àwọn Ibi Àṣà · Heritage Sites",
    yorubaTitle: "Mapo Hall — Ilé Ìjọba Àtijọ́",
    title: "Mapo Hall: The Hilltop Parliament of Ibadan",
    excerpt:
      "Completed in 1929 atop Mapo Hill, Mapo Hall was built under the colonial administration of Captain Ross with indigenous labour and materials. It became the seat of Ibadan governance, the venue of the Mogajis council, and the architectural soul of the city.",
    date: "1929 — Present",
    readTime: "7 min read",
    tags: ["Mapo Hall", "Architecture", "Governance", "Heritage"],
    accent: "from-[#2a4a1a]/25",
  },
  {
    id: "mogaji-role",
    category: "Ìjọba Ìbílẹ̀ · Traditional Rule",
    yorubaTitle: "Ipa Mògájì Nínú Àwùjọ Ìbàdàn",
    title: "The Role of the Mogaji in Ibadan's Social Fabric",
    excerpt:
      "A Mogaji is not merely a title — they are the custodian of ancestral memory, the court of first instance for family disputes, and the bridge between government and the grassroots. Understanding the Mogaji is to understand the beating heart of Ibadanland.",
    date: "Living Tradition",
    readTime: "9 min read",
    tags: ["Mogaji", "Role", "Society", "Ibadan"],
    accent: "from-[#3a1a4a]/25",
  },
  {
    id: "oriki-ibadan",
    category: "Àṣà · Culture & Oral Tradition",
    yorubaTitle: "Oríkì Ìbàdàn",
    title: "Oríkì Ìbàdàn: The Praise Songs That Carry a City's Soul",
    excerpt:
      "Long before written records, Ibadan's identity was carried in song. The Oríkì of Ibadan — praise poetry recited at chieftaincy installations, family gatherings, and festivals — is a living archive of the city's warrior spirit, its heroes, and its deep pride.",
    date: "Oral Tradition",
    readTime: "6 min read",
    tags: ["Oriki", "Culture", "Poetry", "Oral History"],
    accent: "from-[#1a4a3a]/25",
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
    desc: "Transcribed oral histories passed down through Ibadan's griots, families, and compound elders.",
    count: "17 Traditions",
  },
  {
    icon: LayoutGrid,
    title: "Compound Archives",
    yoruba: "Àkọ́ọ́lẹ̀ Agbo Ilé",
    desc: "Founding histories and notable lineages of Ibadan's most historically significant family compounds.",
    count: "30+ Compounds",
  },
  {
    icon: BookOpen,
    title: "Cultural Practices",
    yoruba: "Àṣà Ìbàdàn",
    desc: "Documentation of Ibadan's unique cultural expressions — from masquerade traditions to communal harvest festivals.",
    count: "12 Practices",
  },
];

const orikiBadge = [
  "Ìbàdàn, olùyọlé.",
  "Ìbàdàn tí ń gbójú wo ọ̀run.",
  "Ọlọ́ yọ tí kò ṣẹ̀ mọ́ ẹ̀ jẹ.",
  "Ibadan — City of the Brave.",
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-[#0d1627] text-[#f5f1e8]">
      <Navbar />

      {/* =========================================================
          HERO BANNER (CREAM PAPER AESTHETIC)
      ========================================================= */}
      <section className="relative pt-36 pb-24 px-6 lg:px-14 overflow-hidden border-b border-[#101827]/10 bg-[#f4f0e6] text-[#101827]">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#8a4f2f]/30 bg-white/80 px-4 py-1.5 backdrop-blur-md mb-8 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8a4f2f] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a4f2f]">
              ÌTÀN ÌṢẸ̀DÁ ÀTI ÀṢÀ · CHRONICLES & ORAL ARCHIVES
            </span>
          </div>

          <div className="max-w-[950px]">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8a4f2f] mb-3">
              THE CHRONICLES
            </p>
            <h1 className="font-display text-[clamp(3.2rem,7.5vw,7.5rem)] font-normal leading-[0.95] tracking-[-0.04em] text-[#101827]">
              Stories <span className="italic text-[#8a4f2f]">worth keeping.</span>
            </h1>
          </div>

          <p className="mt-8 max-w-2xl text-base leading-9 text-[#101827]/80 md:text-xl border-l-2 border-[#8a4f2f] pl-6">
            Stories of people, places, and traditions that deserve to be remembered and passed on for generations to come.
          </p>

          {/* Oriki Marquee */}
          <div className="mt-14 overflow-hidden border-y border-[#101827]/15 py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap"
            >
              {[...orikiBadge, ...orikiBadge].map((line, i) => (
                <span key={i} className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a4f2f]">
                  {line} ·
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ARCHIVE CATEGORIES
      ========================================================= */}
      <section className="py-20 px-6 lg:px-14 bg-[#08111f] border-b border-white/10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
              ÀWỌN ÀKỌ́Ọ́LẸ̀ · ARCHIVE COLLECTIONS
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl text-white">
              Explore the Collections
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {archiveCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  className="group rounded-xl border border-white/10 bg-[#121c30] p-6 transition-all hover:border-[#d4b56e]/40 cursor-pointer"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#d4b56e]/30 bg-[#0d1627] text-[#d4b56e] transition-transform group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                    {cat.yoruba}
                  </span>
                  <h3 className="mt-1 font-display text-xl text-white group-hover:text-[#d4b56e] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{cat.desc}</p>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#d4b56e]/80">
                    {cat.count}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FEATURED STORIES
      ========================================================= */}
      <section className="py-24 px-6 lg:px-14 mx-auto max-w-[1200px]">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
            ÀWỌN ÌTÀN ÌṢẸ̀DÁ · FEATURED CHRONICLES
          </p>
          <h2 className="mt-2 font-display text-3xl md:text-5xl text-white">
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
              className={`group relative overflow-hidden rounded-xl border border-white/15 bg-[#121c30] p-7 shadow-xl transition-all hover:border-[#d4b56e]/40 ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${story.accent} to-[#0d1627] opacity-60`}
              />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
                    {story.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {story.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={10} /> {story.readTime}
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-sm italic text-[#d4b56e]/85">{story.yorubaTitle}</p>

                <h3
                  className={`mt-2 font-serif text-white group-hover:text-[#d4b56e] transition-colors ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}
                >
                  {story.title}
                </h3>

                <p className="mt-3 text-base leading-8 text-white/70 line-clamp-3">{story.excerpt}</p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#d4b56e] hover:gap-3 transition-all">
                    Read more <ChevronRight size={11} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =========================================================
          YORUBA PROVERB BANNER
      ========================================================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeIn}
        className="py-20 px-6 lg:px-14 bg-[#08111f] border-y border-white/10"
      >
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-serif text-2xl italic text-[#d4b56e] md:text-4xl">
            &ldquo;Ìtàn tí a kò gbọ́ kò lè kọ́ wa nǹkan.&rdquo;
          </p>
          <p className="mt-3 text-base text-white/60">
            <em>A story we have not heard cannot teach us anything.</em> — Yorùbá Proverb
          </p>
          <div className="mt-8">
            <Link
              href="/heritage"
              className="inline-flex items-center gap-3 border border-[#d4b56e]/60 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#d4b56e] transition hover:bg-[#d4b56e] hover:text-[#0d1627]"
            >
              Explore Heritage · Àkọ́ọ́lẹ̀ Ìtàn <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
