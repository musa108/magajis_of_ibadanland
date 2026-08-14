"use client";

import { motion } from "framer-motion";

import Link from "next/link";

const links = [
  { label: "Heritage · Àkọ́ọ́lẹ̀", href: "/heritage" },
  { label: "Magajis · Àwọn Mògájì", href: "/magajis" },
  { label: "Compounds · Agbo Ilé", href: "/compounds" },
  { label: "Ilé Ẹ̀kẹ́ · Ìkọ́lé", href: "/ile-eke" },
  { label: "Stories · Ìtàn", href: "/stories" },
  { label: "About · Nípa Ẹgbẹ́", href: "/about" },
];

export default function Footer() {
  return (
    <footer
      id="about"
      className="overflow-hidden bg-[var(--midnight)] px-6 pb-8 pt-24 text-white md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="border-b border-white/10 pb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-5xl text-white/90 md:text-7xl lg:text-8xl">
              Magajis
            </span>

            <span className="ml-3 font-display text-5xl italic text-[var(--gold)] md:text-7xl lg:text-8xl">
              of Ibadan
            </span>
          </motion.p>

          <div className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-[1fr_200px_200px]">
            <p className="max-w-md text-base leading-8 text-white/50">
              Preserving the stories of our leaders, ancestral family compounds (<span className="italic text-[var(--gold)]">Agbo Ilé</span>), and communities for generations to come. <span className="block mt-2 italic text-[#c8a85f]">Àlàáfíà fún Ilẹ̀ Ìbàdàn.</span>
            </p>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                Explore · Ṣe Àwárí
              </p>

              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[var(--gold)]">
                Location · Ilẹ̀
              </p>

              <p className="text-sm leading-7 text-white/55">
                Ibadan
                <br />
                Oyo State
                <br />
                Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 py-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/40 md:flex-row">
          <span>© 2026 Magajis of Ibadan Land · Àwọn Mògájì Ilẹ̀ Ìbàdàn</span>
          <span>Preserving Living Heritage · Àṣà Lílè</span>
        </div>
      </div>
    </footer>
  );
}