"use client";

import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";

export interface FeaturedMogaji {
  id: number;
  name: string;
  role: string;
  yorubaRole: string;
  compound: string;
  location: string;
  image?: string;
  badge: string;
  detail: string;
}

const featuredProfiles: FeaturedMogaji[] = [
  {
    id: 1,
    name: "Mogaji Asimiyu Adepoju Ariori",
    role: "President, Association of Mogajis of Ibadanland",
    yorubaRole: "Aṣáájú Ẹgbẹ́ Àwọn Mògájì",
    compound: "Agbo Ilé Olorisa",
    location: "Oja Oke Ado, Ibadan",
    image: "/images/mogaji-asimiyu-ariori.jpg",
    badge: "2nd 4-Year Term",
    detail: "Installed over 36 years ago by Oba Oloyede Asanike. Custodian of Olorisa compound and Yoruba traditional matters.",
  },
  {
    id: 2,
    name: "Oloye Allen Olutunji Ajala Odugade",
    role: "General Secretary, Association of Mogajis",
    yorubaRole: "Àkọ́ọ́wé Àgbà",
    compound: "Agbo Ilé Odugade",
    location: "Aremo / Ibadan Central",
    image: "/images/mogaji-oluye-allen-odugade.jpg",
    badge: "2nd 4-Year Term",
    detail: "Installed in 2016 following transition of 40th Olubadan Oba Odulana Odugade I. Master's in Managerial Psychology (UI).",
  },
  {
    id: 3,
    name: "Mogaji Toki of Ilé Toki",
    role: "Mogaji of Ilé Toki Family Compound",
    yorubaRole: "Mògájì Agbo Ilé Toki",
    compound: "Agbo Ilé Toki",
    location: "Ibadan Central, Oyo State",
    image: "/images/mogaji-toki.jpg",
    badge: "Lineage Head",
    detail: "Incumbent Mogaji and custodian of the historical Ilé Toki ancestral family compound in Ibadanland.",
  },
];

export default function FeaturedMagajis() {
  return (
    <section
      id="magajis"
      className="overflow-hidden bg-[var(--midnight)] px-6 py-28 text-white md:px-10 md:py-36 lg:px-14 lg:py-44 border-b border-white/10 relative"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#b99a58] opacity-10 blur-[170px]" />

      <div className="mx-auto max-w-[1440px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#b99a58]/40 bg-[#0d1627]/60 px-4 py-2 backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-[#d4b56e] animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
                ÀWỌN MÒGÁJÌ · GUARDIANS OF LEADERSHIP
              </p>
            </div>

            <h2 className="font-display text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.85] tracking-[-0.04em] text-white">
              Àwọn Mògájì
              <br />
              <span className="italic text-[#d4b56e]">
                of Ibadan Land.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-md text-base leading-8 text-white/85 md:text-lg"
          >
            Meet the distinguished compound heads (<span className="italic text-[#d4b56e]">Àwọn Mògájì</span>) steering the traditional executive council and preserving the lineages of Ibadanland&apos;s ancestral compounds (<span className="italic text-[#d4b56e]">Agbo Ilé</span>).
          </motion.p>
        </div>

        {/* Profiles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProfiles.map((profile) => (
            <motion.article
              key={profile.id}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#121c30] shadow-2xl transition-all duration-500 hover:border-[#d4b56e]/50"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#182233] flex items-center justify-center">
                {profile.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d4b56e]/40 bg-[#0d1627] text-[#d4b56e]">
                      <span className="font-display text-2xl tracking-widest text-[#d4b56e]">
                        {profile.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </span>
                    </div>
                    <span className="mt-4 text-xs font-bold uppercase tracking-widest text-[#c8a85f]">
                      Agbo Ilé Member
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1627] via-[#0d1627]/40 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block rounded-full border border-[#d4b56e]/60 bg-[#0d1627]/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d4b56e] backdrop-blur-sm">
                    {profile.yorubaRole}
                  </span>
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8a85f]">
                    {profile.role}
                  </p>

                  <h3 className="mt-1 font-display text-2xl md:text-3xl text-white group-hover:text-[#d4b56e] transition-colors leading-tight">
                    {profile.name}
                  </h3>

                  <p className="mt-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.16em] text-white/80">
                    <MapPin size={13} className="text-[#d4b56e]" />
                    {profile.compound} · {profile.location}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/90 line-clamp-2 border-t border-white/10 pt-3">
                    {profile.detail}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footer Link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8"
        >
          <p className="text-sm text-white/70">
            Official Directory of Certified Compound Leaders
          </p>

          <Link
            href="/magajis"
            className="group flex items-center gap-3 rounded-full border border-[#d4b56e]/40 bg-[#0d1627] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#d4b56e] transition-all hover:bg-[#d4b56e] hover:text-[#0d1627]"
          >
            <span>Explore all Magajis · Àwọn Mògájì Pátápátá</span>
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}