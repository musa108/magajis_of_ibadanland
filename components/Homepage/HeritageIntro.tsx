"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASE,
    },
  },
};

export default function HeritageIntro() {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-[#f3efe5] px-6 py-28 text-[#101b2d] md:py-40 lg:px-0"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* =====================================================
            TOP CONTENT
        ===================================================== */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
        >

          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#b98e47]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a26e43]">
              ÀKỌ́Ọ́LẸ̀ ÌTÀN · A LIVING HERITAGE
            </span>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">

            {/* Heading */}

            <div className="overflow-hidden">
              <motion.h2
                variants={fadeUp}
                className="max-w-[800px] font-serif text-[clamp(4rem,8vw,7.5rem)] font-normal leading-[0.82] tracking-[-0.055em]"
              >
                Agbo Ilé kọ̀ọ̀kan
                <br />
                <span className="italic text-[#b99855]">
                  has a story.
                </span>
              </motion.h2>
            </div>

            {/* Description */}

            <motion.div
              variants={fadeUp}
              className="max-w-[430px] pb-2"
            >
              <p className="text-base leading-8 text-[#5e6470] md:text-lg">
                Ibadan, <span className="font-medium text-[#101b2d]">Ilẹ̀ Olúyọ̀lé</span> — a city shaped by families, communities and generations. Behind its streets and landmarks are ancestral compounds (<span className="italic text-[#a26e43]">Agbo Ilé</span>) whose living stories form the core of Ibadanland&apos;s heritage.
              </p>

              <Link
                href="#compounds"
                className="group mt-7 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#172235]"
              >
                Discover the heritage · Wò Ìtàn Àti Àṣà

                <span className="flex h-8 w-8 items-center justify-center border border-[#172235]/25 transition-all duration-300 group-hover:border-[#172235] group-hover:bg-[#172235] group-hover:text-white">
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* =================================================
              IMAGE
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="relative mt-20 h-[55vh] min-h-[420px] overflow-hidden md:mt-28"
          >
            <motion.div
              initial={{
                scale: 1.08,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.5,
                ease: EASE,
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/ibadan-heritage.jpg"
                alt="Ibadan heritage"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-[#111827]/10" />

            {/* Image label */}

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="bg-[#f3efe5]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#172235] backdrop-blur-sm">
                Ìbàdàn · Agbo Ilé Living Heritage
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}