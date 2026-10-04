"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Crown, Shield, User, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

export interface LineageNode {
  id: string;
  name: string;
  title: string;
  generation: string;
  era: string;
  role: string;
  status: "Royal Monarch" | "Lineage Founder" | "Incumbent Mogaji" | "Lineage Elder";
  bio: string;
  image?: string;
  children?: LineageNode[];
}

export interface LineageTreeData {
  mogajiId: string;
  familyName: string;
  compoundName: string;
  yoruba: string;
  root: LineageNode;
}

const lineageTrees: Record<string, LineageTreeData> = {
  odugade: {
    mogajiId: "odugade",
    familyName: "Odugade Family Lineage",
    compoundName: "Odugade Family Compound",
    yoruba: "Ìdílé Ìtàn Odugade",
    root: {
      id: "odugade-gen1",
      name: "Pa Odugade I",
      title: "Founding Lineage Father",
      generation: "1st Generation",
      era: "19th Century",
      role: "Compound Founder",
      status: "Lineage Founder",
      bio: "Founding patriarch of the Odugade family compound in Aremo, central to Ibadan's traditional 19th-century lineage growth.",
      children: [
        {
          id: "odugade-gen2",
          name: "Oba (Dr) Samuel Osundiran Odulana Odugade I",
          title: "40th Olubadan of Ibadanland",
          generation: "2nd Generation",
          era: "1914 – 2016",
          role: "Monarch of Ibadanland",
          status: "Royal Monarch",
          bio: "The revered 40th Olubadan of Ibadanland who reigned with immense wisdom, dignity, and commitment to Ibadan's traditional meritocratic stool.",
          image: "/images/mogaji-oluye-allen-odugade.jpg",
          children: [
            {
              id: "odugade-gen3",
              name: "Oloye Allen Olutunji Ajala Odugade",
              title: "General Secretary, Association of Mogajis",
              generation: "3rd Generation",
              era: "2016 – Present",
              role: "Incumbent General Secretary",
              status: "Incumbent Mogaji",
              bio: "Seasoned Insurance Professional (AIIN), M.Sc Managerial Psychology (UI), installed Mogaji of Odugade family in 2016. Serving 2nd term as General Secretary.",
              image: "/images/mogaji-oluye-allen-odugade.jpg",
            },
          ],
        },
      ],
    },
  },

  ariori: {
    mogajiId: "ariori",
    familyName: "Ariori Lineage & Olorisa Compound",
    compoundName: "Olorisa Compound",
    yoruba: "Ìdílé Mògájì Ariori",
    root: {
      id: "ariori-gen1",
      name: "Pa Ariori Olorisa",
      title: "Olorisa Ancestral Founder",
      generation: "1st Generation",
      era: "Late 19th Century",
      role: "Lineage Founder",
      status: "Lineage Founder",
      bio: "Warrior era lineage head of Olorisa Compound in Oja Oke Ado, establishing family roots in Ibadan South-West.",
      children: [
        {
          id: "ariori-gen2",
          name: "Chief Adepoju Ariori Senior",
          title: "Olorisa Compound Family Elder",
          generation: "2nd Generation",
          era: "Mid-20th Century",
          role: "Traditional Counsellor",
          status: "Lineage Elder",
          bio: "Prominent chieftaincy advisor and elder of Oke Ado quarter.",
          children: [
            {
              id: "ariori-gen3",
              name: "Mogaji Asimiyu Adepoju Ariori",
              title: "President, Association of Mogajis of Ibadanland",
              generation: "3rd Generation",
              era: "1988 – Present (36+ Years)",
              role: "Incumbent President",
              status: "Incumbent Mogaji",
              bio: "Installed Mogaji of Olorisa Compound over 36 years ago by Late Kabiesi, Oba Oloyede Asanike. Serving 2nd 4-year term as President.",
              image: "/images/mogaji-asimiyu-ariori.jpg",
            },
          ],
        },
      ],
    },
  },

  toki: {
    mogajiId: "toki",
    familyName: "Ilé Toki Lineage",
    compoundName: "Ilé Toki Compound",
    yoruba: "Ìdílé Agbo Ilé Toki",
    root: {
      id: "toki-gen1",
      name: "Warrior Toki Ancestor",
      title: "Toki Lineage Patriarch",
      generation: "1st Generation",
      era: "19th Century",
      role: "Warrior Era Founder",
      status: "Lineage Founder",
      bio: "Patriarch warrior of Ilé Toki compound during the unification of Ibadan's central quarters.",
      children: [
        {
          id: "toki-gen2",
          name: "Chief Toki Lineage Elder",
          title: "Senior Compound Custodian",
          generation: "2nd Generation",
          era: "20th Century",
          role: "Compound Head",
          status: "Lineage Elder",
          bio: "Maintained Toki family archives and chieftaincy representation.",
          children: [
            {
              id: "toki-gen3",
              name: "Mogaji Toki of Ilé Toki",
              title: "Executive Council Member",
              generation: "3rd Generation",
              era: "Incumbent Custodian",
              role: "Mogaji of Ilé Toki",
              status: "Incumbent Mogaji",
              bio: "Duly installed Mogaji and custodian of Ilé Toki ancestral compound, dedicated to compound youth development and heritage preservation.",
              image: "/images/mogaji-toki.jpg",
            },
          ],
        },
      ],
    },
  },

  gbadamosi: {
    mogajiId: "gbadamosi",
    familyName: "Atere & Ile Onilu Lineage",
    compoundName: "Agboole Atere (Ile Onilu)",
    yoruba: "Ìdílé Agboole Atere · Ilé Onílù",
    root: {
      id: "gbadamosi-gen1",
      name: "Patriarch Okekegan",
      title: "Founding Patriarch from Orile Owu",
      generation: "1st Generation",
      era: "Over 200 Years Ago",
      role: "Compound Founder",
      status: "Lineage Founder",
      bio: "Leader of the ancestral migration from Orile Owu who settled the family at Ayeye in the heart of Ibadan over two centuries ago.",
      children: [
        {
          id: "gbadamosi-gen2",
          name: "Aare Onilu Ayanwale Akanbi Gbadamosi",
          title: "Aare Onilu of Ibadanland (1970s)",
          generation: "2nd Generation",
          era: "Mid-20th Century",
          role: "Master Artisan & Cultural Custodian",
          status: "Lineage Elder",
          bio: "Master drummer and artisan who honed his trade at Ile Onilu and rose to become the supreme Aare Onilu of Ibadanland in the 1970s, establishing a legendary family legacy.",
          children: [
            {
              id: "gbadamosi-gen3",
              name: "Alhaji Abdul Ganiyu Gbadamosi",
              title: "Lineage Patriarch & Mentor",
              generation: "3rd Generation",
              era: "20th Century",
              role: "Family Patriarch",
              status: "Lineage Elder",
              bio: "Dedicated family patriarch and beloved mentor who nurtured the family's educational and civic leadership traditions.",
              children: [
                {
                  id: "gbadamosi-gen4",
                  name: "Mogaji Abdul Gafar Olanrewaju Gbadamosi",
                  title: "Mogaji of Agboole Atere, Ayeye · Solicitor & Commissioner for Oaths",
                  generation: "4th Generation",
                  era: "2023 – Present",
                  role: "Incumbent Mogaji & ITTG UK Chair",
                  status: "Incumbent Mogaji",
                  bio: "Installed Mogaji on 04 December 2023 by Oba Mohood Olalekan Balogun. UK-trained lawyer (LL.B, LL.M Wolverhampton), Solicitor & Commissioner for Oaths, Chair of Ibadan Think Tank Group UK.",
                  image: "/images/mogaji-abdul-gafar-gbadamosi.jpg",
                },
              ],
            },
          ],
        },
      ],
    },
  },

  bada: {
    mogajiId: "bada",
    familyName: "Bada Family Lineage",
    compoundName: "Bada Compound (Oke Offa Atipe)",
    yoruba: "Ìdílé Agbo Ilé Bada",
    root: {
      id: "bada-gen1",
      name: "Patriarchs Fagbenla & Orotoki",
      title: "Founding Lineage Brothers from Jaga Aase (Ajase Ipo)",
      generation: "1st Generation",
      era: "Founding Era",
      role: "Compound Founders",
      status: "Lineage Founder",
      bio: "Brothers Fagbenla and Orotoki traced their ancestral roots from Jaga Aase (Ajase Ipo, near Offa) and founded Bada Compound at Oke Offa Atipe, establishing early satellite ancestral villages at Aayun (Akinyele LG) and Oloffa (Ona Ara LG).",
      children: [
        {
          id: "bada-gen2",
          name: "Bada Lineage Ancestors & Elders",
          title: "Chieftaincy Elders of Oke Offa Atipe",
          generation: "2nd Generation",
          era: "20th Century",
          role: "Traditional Lineage Elders",
          status: "Lineage Elder",
          bio: "Generations of compound elders who expanded the family's civic standing, preserved its ancestral roots, and nurtured illustrious sons and daughters across all walks of life.",
          children: [
            {
              id: "bada-gen3",
              name: "Hon. Olasupo Ibrahim Ademola",
              title: "Mogaji Bada, Oke Offa Atipe",
              generation: "3rd Generation",
              era: "Incumbent Mogaji",
              role: "Incumbent Mogaji & Civic Leader",
              status: "Incumbent Mogaji",
              bio: "Incumbent Mogaji of Bada Compound, Oke Offa Atipe. Dedicated to lineage preservation, compound progress, and community development across Ibadanland.",
              image: "/images/mogaji-olasupo-ibrahim-ademola.jpg",
            },
          ],
        },
      ],
    },
  },

  egunjenmi: {
    mogajiId: "egunjenmi",
    familyName: "Egunjenmi Family Lineage",
    compoundName: "Egunjenmi Compound (Itutaba, Oje)",
    yoruba: "Ìdílé Agbo Ilé Egunjenmi",
    root: {
      id: "egunjenmi-gen1",
      name: "Pa Egunjenmi",
      title: "Founding Patriarch from Abejide Compound, Oyo Town",
      generation: "1st Generation",
      era: "19th Century (Era of Aare Latosa)",
      role: "Compound Founder, Farmer & Warrior",
      status: "Lineage Founder",
      bio: "Patriarch Pa Egunjenmi led the family from Abejide Compound in Oyo Town. Aare Latosa granted them their settlement at Itutaba ('Ibi tiwon tin tu taba'), where they established thriving agricultural estates and rode as valiant warriors under the battle-cry 'Egunjenmi, Ija Eto!'.",
      children: [
        {
          id: "egunjenmi-gen2",
          name: "Egunjenmi Lineage Elders & Nation Builders",
          title: "Ancestral Pillars of Itutaba & Nation Builders",
          generation: "2nd Generation",
          era: "20th Century",
          role: "Custodians & Prominent Leaders",
          status: "Lineage Elder",
          bio: "Illustrious lineage that produced Chief Meredith Adisa Akinloye (A.M.A. Akinloye) — Seriki of Ibadanland and Nigeria's first Minister of Agriculture, and educational pioneer Chief Mrs. Gladys Aduke Vaughan, founder of Omolewa School.",
          children: [
            {
              id: "egunjenmi-gen3",
              name: "Chief Adekunle Amidu Aremu Busari",
              title: "Mogaji of Egunjenmi Compound",
              generation: "3rd Generation",
              era: "2023 – Present",
              role: "Incumbent Mogaji",
              status: "Incumbent Mogaji",
              bio: "Installed Mogaji on 23rd January 2023. Custodian of Orisa Olufon and Orisa Alaso Funfun, host of Atipako and Abidi Elege masquerades, actively driving unity, electrification, water, and community security.",
              image: "/images/mogaji-adekunle-amidu-busari.jpg",
            },
          ],
        },
      ],
    },
  },
};

export default function LineageTree({
  initialFamily = "odugade",
}: {
  initialFamily?: string;
}) {
  const [selectedFamilyKey, setSelectedFamilyKey] = useState<string>(
    lineageTrees[initialFamily] ? initialFamily : "odugade"
  );
  const [activeNode, setActiveNode] = useState<LineageNode | null>(null);

  const activeTree = lineageTrees[selectedFamilyKey] || lineageTrees["odugade"];

  return (
    <div className="border border-[#b89a5a]/30 bg-[#07111f] p-6 text-[#f4f0e7] shadow-2xl">
      {/* Header & Family Switcher */}
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56e]">
            <Sparkles size={14} />
            <span>ÀWỌN ÌDÍLÈ · VISUAL FAMILY TREE & GENEALOGY</span>
          </div>
          <h3 className="mt-1 font-display text-2xl text-white">
            {activeTree.familyName}
          </h3>
          <p className="mt-0.5 text-xs text-[#aaa397]">
            {activeTree.compoundName} ({activeTree.yoruba})
          </p>
        </div>

        {/* Tree Family Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(lineageTrees).map((key) => {
            const tree = lineageTrees[key];
            const isSelected = selectedFamilyKey === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setSelectedFamilyKey(key);
                  setActiveNode(null);
                }}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-[#b89a5a] text-[#07111f]"
                    : "border border-white/15 bg-[#0b1627] text-[#aaa397] hover:border-[#b89a5a]/50 hover:text-white"
                }`}
              >
                {tree.compoundName.split(" ")[0]} Tree
              </button>
            );
          })}
        </div>
      </div>

      {/* Tree Visualization Workspace */}
      <div className="relative mt-8 min-h-[440px] overflow-x-auto border border-white/10 bg-[#050c17] p-8">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-10">
          {/* Render Root Generation 1 */}
          <RenderNodeLevel
            node={activeTree.root}
            activeNode={activeNode}
            onSelectNode={setActiveNode}
          />
        </div>
      </div>

      {/* Selected Node Details Drawer */}
      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="mt-6 border border-[#b89a5a]/40 bg-[#0b1627] p-6 shadow-2xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="border border-[#b89a5a]/40 bg-[#07111f] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#d4b56e] inline-block">
                  {activeNode.status} · {activeNode.generation}
                </span>
                <h4 className="mt-2 font-display text-2xl text-white">
                  {activeNode.name}
                </h4>
                <p className="text-xs text-[#b89a5a]">
                  {activeNode.title} ({activeNode.era})
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveNode(null)}
                className="border border-white/15 bg-[#07111f] px-3 py-1 text-xs uppercase tracking-wider text-[#aaa397] hover:text-white"
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#f4f0e7]/80 font-sans">{activeNode.bio}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function RenderNodeLevel({
  node,
  activeNode,
  onSelectNode,
}: {
  node: LineageNode;
  activeNode: LineageNode | null;
  onSelectNode: (node: LineageNode) => void;
}) {
  const isSelected = activeNode?.id === node.id;
  const isIncumbent = node.status === "Incumbent Mogaji";
  const isMonarch = node.status === "Royal Monarch";

  return (
    <div className="flex flex-col items-center w-full">
      {/* Node Card */}
      <button
        type="button"
        onClick={() => onSelectNode(node)}
        className={`group relative flex w-full max-w-[440px] items-center gap-4 border p-4 text-left transition-all ${
          isSelected
            ? "border-white bg-[#b89a5a] text-[#07111f]"
            : isIncumbent
            ? "border-[#b89a5a] bg-[#0b1627] text-white hover:bg-[#0f1e36]"
            : isMonarch
            ? "border-[#9a5b43] bg-[#141b29] text-white hover:bg-[#1a2336]"
            : "border-white/15 bg-[#07111f] text-[#f4f0e7] hover:border-white/40"
        }`}
      >
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
            isSelected
              ? "border-[#07111f] bg-[#07111f] text-[#d4b56e]"
              : isMonarch
              ? "border-[#9a5b43] bg-[#9a5b43] text-white"
              : "border-[#b89a5a]/40 bg-[#07111f] text-[#d4b56e]"
          }`}
        >
          {isMonarch ? (
            <Crown size={20} />
          ) : isIncumbent ? (
            <Shield size={18} />
          ) : (
            <User size={18} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <span
            className={`text-[9px] font-sans font-semibold uppercase tracking-widest block ${
              isSelected ? "text-[#07111f]/80" : "text-[#b89a5a]"
            }`}
          >
            {node.generation} · {node.era}
          </span>

          <h5
            className={`font-display text-lg leading-snug truncate ${
              isSelected ? "text-[#07111f]" : "text-white"
            }`}
          >
            {node.name}
          </h5>

          <p
            className={`text-xs truncate ${
              isSelected ? "text-[#07111f]/75" : "text-[#aaa397]"
            }`}
          >
            {node.title}
          </p>
        </div>

        <ChevronRight
          size={16}
          className={`shrink-0 ${
            isSelected ? "text-[#07111f]" : "text-[#d4b56e]"
          }`}
        />
      </button>

      {/* Downward Connecting Vertical Line & Children */}
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center w-full mt-4">
          <div className="h-8 w-[1.5px] bg-[#b89a5a]/40" />
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full mt-2">
            {node.children.map((child) => (
              <RenderNodeLevel
                key={child.id}
                node={child}
                activeNode={activeNode}
                onSelectNode={onSelectNode}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
