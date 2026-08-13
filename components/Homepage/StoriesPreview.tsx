"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const stories = [
  {
    number: "01",
    category: "ÌTÀN AGBO ILÉ · Heritage",
    title: "The living stories behind Ibadan's family compounds",
  },
  {
    number: "02",
    category: "ÀWỌN MÒGÁJÌ · People",
    title: "The lineage leaders who carry generations forward",
  },
  {
    number: "03",
    category: "ÌṢẸ̀ṢẸ̀ · History",
    title: "Understanding the chieftaincy & heritage of Ibadanland",
  },
];

export default function StoriesPreview() {
  return (
    <section
      id="stories"
      className="overflow-hidden bg-[var(--ivory)] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[var(--terracotta)]">
              ÌTÀN ÌṢẸ̀DÁ · CULTURAL CHRONICLES
            </p>

            <h2 className="font-display text-[clamp(4rem,8vw,8rem)] leading-[0.8] tracking-[-0.045em] text-[var(--midnight)]">
              Ìtàn Ìbàdàn
              <br />
              <span className="italic text-[var(--gold)]">
                worth keeping.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-8 text-[var(--muted)]">
            Stories of lineage heads, historic family compounds (<span className="italic text-[var(--terracotta)]">Agbo Ilé</span>), and cultural traditions worth remembering.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20"
        >
          {stories.map((story) => (
            <motion.a
              key={story.number}
              variants={fadeUp}
              href="/stories"
              className="group grid border-t border-[var(--midnight)]/10 py-8 md:grid-cols-[80px_220px_1fr_60px] md:items-center md:gap-8 md:py-10"
            >
              <span className="font-display text-3xl text-[var(--gold)]">
                {story.number}
              </span>

              <span className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--terracotta)] md:mt-0">
                {story.category}
              </span>

              <h3 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-[var(--midnight)] transition-colors group-hover:text-[var(--terracotta)] md:mt-0 md:text-5xl">
                {story.title}
              </h3>

              <span className="mt-6 flex h-10 w-10 items-center justify-center border border-[var(--midnight)]/20 transition-all group-hover:bg-[var(--midnight)] group-hover:text-white md:mt-0">
                <ArrowUpRight size={15} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}