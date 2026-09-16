"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface StoryItem {
  id: string;
  category: string;
  yoruba: string;
  title: string;
  excerpt: string;
  readTime: string;
}

const leadStory: StoryItem = {
  id: "ibadan-compounds",
  category: "ÌTÀN AGBO ILÉ · HERITAGE",
  yoruba: "Ìtàn Àwọn Agbo Ilé",
  title: "The Living Stories Behind Ibadan's Ancient Compounds",
  excerpt:
    "Long before modern street names, Ibadan grew compound by compound. Each Agbo Ilé represents a distinct lineage of warrior prowess, craft guilds, and chieftaincy honor that continues to anchor the city.",
  readTime: "8 min read",
};

const secondaryStories: StoryItem[] = [
  {
    id: "mogaji-custodians",
    category: "ÀWỌN MÒGÁJÌ · PEOPLE",
    yoruba: "Àwọn Aṣáájú Àwùjọ",
    title: "The Lineage Leaders Who Carry Generations Forward",
    excerpt:
      "Understanding the Mogaji not merely as a title, but as the first court of family arbitration, civic stabilizer, and living custodian of oral memory.",
    readTime: "6 min read",
  },
  {
    id: "chieftaincy-ladder",
    category: "ÌṢẸ̀ṢẸ̀ · CHIEFTAINCY",
    yoruba: "Ìlànà Òṣèlú Àtijọ́",
    title: "The Unique Republican Chieftaincy Ladder of Ibadanland",
    excerpt:
      "How the non-hereditary dual succession ladder — the Otun and Balogun lines — created West Africa's most democratic monarchical ascension structure.",
    readTime: "7 min read",
  },
];

export default function StoriesPreview() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[#e8e0d0] px-6 py-28 text-[#101923] sm:px-8 md:py-36 lg:px-12 lg:py-44"
    >
      <div className="mx-auto max-w-[1360px]">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end border-b border-[#101923]/15 pb-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#9a5b43]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9a5b43]">
                ÌTÀN ÌṢẸ̀DÁ · THE LIVING ARCHIVE
              </p>
            </div>

            <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#101923]">
              Ìtàn Ìbàdàn
              <br />
              <span className="italic text-[#9a5b43]">worth keeping.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-md"
          >
            <p className="text-base leading-relaxed text-[#1e242d]/85 sm:text-lg sm:leading-8 font-sans">
              Chronicles of compound patriarchs, ancestral origins, and cultural wisdom handed down through oral poetry and living traditions.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            EDITORIAL JOURNAL SPREAD
        ===================================================== */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEAD CHRONICLE (7 COLS) */}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group lg:col-span-7 border-t-2 border-[#101923] pt-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-[0.2em] text-[#9a5b43]">
                <span>{leadStory.category}</span>
                <span className="text-[#67635b]">{leadStory.readTime}</span>
              </div>

              <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-[#101923] group-hover:text-[#9a5b43] transition-colors leading-[1.08]">
                {leadStory.title}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-[#1e242d]/85 sm:text-lg sm:leading-8 font-sans">
                {leadStory.excerpt}
              </p>
            </div>

            <div className="mt-8 border-t border-[#101923]/15 pt-5">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#101923] group-hover:text-[#9a5b43] transition-colors"
              >
                <span>Read Feature Chronicle</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.article>

          {/* SECONDARY CHRONICLES (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {secondaryStories.map((story) => (
              <motion.article
                key={story.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="group border-t border-[#101923]/25 pt-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-sans font-semibold uppercase tracking-[0.18em] text-[#9a5b43]">
                    <span>{story.category}</span>
                    <span className="text-[#67635b]">{story.readTime}</span>
                  </div>

                  <h4 className="mt-3 font-display text-2xl sm:text-3xl text-[#101923] group-hover:text-[#9a5b43] transition-colors leading-snug">
                    {story.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-[#1e242d]/80 font-sans">
                    {story.excerpt}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#101923]/10 pt-3">
                  <Link
                    href="/stories"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#67635b] group-hover:text-[#101923] transition-colors"
                  >
                    <span>Read Chronicle</span>
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            FOOTER LINK
        ===================================================== */}
        <div className="mt-16 border-t border-[#101923]/15 pt-8 flex justify-end">
          <Link
            href="/stories"
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9a5b43] hover:text-[#101923] transition-colors"
          >
            <span>Explore All Chronicles & Oral Archives</span>
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}