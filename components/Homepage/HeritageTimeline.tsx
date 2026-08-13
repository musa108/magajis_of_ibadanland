"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

const milestones = [
  {
    year: "1829",
    title: "Ìbẹ̀rẹ̀ Ìbàdàn · Foundations of Ibadan",
    text: "A warrior encampment grows into one of the most vital cultural and urban centers of Yorubaland.",
  },
  {
    year: "01",
    title: "Àwọn Agbo Ilé · Families & Compounds",
    text: "Communities and ancestral family compounds become deeply woven into the social fabric of Ibadan.",
  },
  {
    year: "02",
    title: "Àwọn Mògájì · Traditional Leadership",
    text: "Compound heads and traditional leadership structures guide community identity and social stability.",
  },
  {
    year: "Today",
    title: "Àṣà Lílè · A Living Heritage",
    text: "The lineage stories, compounds, and institutions of Ibadanland continue to connect generations.",
  },
];

export default function HeritageTimeline() {
  return (
    <section className="overflow-hidden bg-[var(--midnight)] px-6 py-28 text-white md:px-10 md:py-36 lg:px-14 lg:py-44">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
            ÌTÀN ÀTI ÌṢẸ̀ṢẸ̀ · A JOURNEY THROUGH TIME
          </p>

          <h2 className="font-display text-[clamp(4rem,8vw,8.5rem)] leading-[0.8] tracking-[-0.045em]">
            Ìbàdàn: A city shaped
            <br />
            <span className="italic text-white/50">
              by generations.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-24"
        >
          {milestones.map((item) => (
            <motion.div
              key={item.year}
              variants={fadeUp}
              className="grid border-t border-white/10 py-8 md:grid-cols-[150px_1fr_1fr] md:gap-10 md:py-12"
            >
              <div className="font-display text-4xl text-[var(--gold)] md:text-5xl">
                {item.year}
              </div>

              <h3 className="mt-5 font-display text-3xl md:mt-0 md:text-4xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-md text-base leading-8 text-white/50 md:mt-0">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}