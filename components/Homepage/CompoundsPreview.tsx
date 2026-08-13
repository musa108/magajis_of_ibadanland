"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  viewportOnce,
} from "@/lib/animations";

export default function CompoundsPreview() {
  return (
    <section
      id="compounds"
      className="overflow-hidden bg-[var(--ivory)] px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-[var(--terracotta)]">
              ÀWỌN AGBO ILÉ · ANCESTRAL HOMES
            </p>

            <h2 className="font-display text-[clamp(4rem,7vw,7.5rem)] leading-[0.8] tracking-[-0.045em] text-[var(--midnight)]">
              Àwọn Agbo Ilé
              <br />
              <span className="italic text-[var(--gold)]">
                and Compounds.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-lg text-base leading-8 text-[var(--muted)] md:text-lg"
          >
            Across Ibadanland, ancestral family compounds (<span className="italic text-[var(--terracotta)]">Agbo Ilé</span>) carry centuries of identity, chieftaincy history, and culture. Explore the historic quarters behind Ibadan&apos;s living story.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-20 min-h-[520px] overflow-hidden bg-[#ddd7c9]"
        >
          {/* Temporary map treatment */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(16,24,39,.25) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(16,24,39,.25) 1px, transparent 1px)
                `,
                backgroundSize: "55px 55px",
              }}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ivory)] via-transparent to-[var(--gold)]/10" />

          {/* Map markers */}
          <MapMarker className="left-[25%] top-[30%]" label="Oja 'Ba" />
          <MapMarker className="left-[60%] top-[22%]" label="Bere" />
          <MapMarker className="left-[48%] top-[60%]" label="Mapo" />
          <MapMarker className="left-[75%] top-[65%]" label="Kudeti" />

          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-between gap-6 bg-[var(--midnight)] p-7 text-white md:flex-row md:items-center md:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                ÌTÀN AGBO ILÉ · HERITAGE MAP
              </p>

              <p className="mt-2 font-display text-3xl md:text-4xl">
                Discover Ibadan&apos;s ancestral compounds · Àwọn Agbo Ilé
              </p>
            </div>

            <a
              href="/compounds"
              className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.16em]"
            >
              Explore map · Ṣe Àwárí Mapu

              <span className="flex h-10 w-10 items-center justify-center border border-white/20 transition group-hover:bg-white group-hover:text-[var(--midnight)]">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MapMarker({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`absolute ${className}`}
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--midnight)] bg-[var(--gold)] shadow-xl">
        <MapPin size={15} className="text-[var(--midnight)]" />

        <span className="absolute -right-12 -top-5 text-[8px] font-bold tracking-widest text-[var(--midnight)] uppercase whitespace-nowrap bg-[var(--ivory)] px-1.5 py-0.5 rounded border border-[var(--midnight)]/20 shadow-sm">
          {label}
        </span>
      </div>
    </motion.div>
  );
}