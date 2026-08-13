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
    <div className="rounded-2xl border border-[#d4b56e]/30 bg-[#08111f] p-6 text-[#f5f1e8] shadow-2xl">
      {/* Header & Family Switcher */}
      <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#c8a85f]">
            <Sparkles size={14} className="text-[#d4b56e]" />
            <span>ÀWỌN ÌDÍLÈ · VISUAL FAMILY TREE & GENEALOGY</span>
          </div>
          <h3 className="mt-1 font-display text-2xl text-white">
            {activeTree.familyName}
          </h3>
          <p className="mt-0.5 text-xs text-white/60">
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
                onClick={() => {
                  setSelectedFamilyKey(key);
                  setActiveNode(null);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-[#d4b56e] text-[#0d1627] shadow-md"
                    : "border border-white/15 bg-[#121c30] text-white/65 hover:border-[#d4b56e]/50 hover:text-white"
                }`}
              >
                {tree.compoundName.split(" ")[0]} Tree
              </button>
            );
          })}
        </div>
      </div>

      {/* Tree Visualization Workspace */}
      <div className="relative mt-8 min-h-[460px] overflow-x-auto rounded-xl border border-white/10 bg-[#0d1728] p-8">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-12">
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
            className="mt-6 rounded-xl border border-[#d4b56e]/40 bg-[#121c30] p-6 shadow-2xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="inline-block rounded border border-[#d4b56e]/40 bg-[#0d1627] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#d4b56e]">
                  {activeNode.status} · {activeNode.generation}
                </span>
                <h4 className="mt-2 font-display text-2xl text-white">
                  {activeNode.name}
                </h4>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#c8a85f]">
                  {activeNode.title} ({activeNode.era})
                </p>
              </div>

              <button
                onClick={() => setActiveNode(null)}
                className="rounded border border-white/15 bg-[#0d1627] px-3 py-1 text-xs uppercase tracking-wider text-white/60 hover:text-white"
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/80">{activeNode.bio}</p>
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
      <motion.button
        onClick={() => onSelectNode(node)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative flex w-full max-w-[440px] items-center gap-4 rounded-xl border p-4 text-left shadow-xl transition-all ${
          isSelected
            ? "border-white bg-[#d4b56e] text-[#0d1627]"
            : isIncumbent
            ? "border-[#d4b56e] bg-[#121c30] text-white hover:bg-[#18243c]"
            : isMonarch
            ? "border-[#8a4f2f] bg-[#1a2334] text-white hover:bg-[#202b3f]"
            : "border-white/15 bg-[#0d1627] text-white/85 hover:border-white/40"
        }`}
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border shadow-md ${
            isSelected
              ? "border-[#0d1627] bg-[#0d1627] text-[#d4b56e]"
              : isMonarch
              ? "border-[#8a4f2f] bg-[#8a4f2f] text-white"
              : "border-[#d4b56e]/40 bg-[#0d1627] text-[#d4b56e]"
          }`}
        >
          {isMonarch ? (
            <Crown size={22} />
          ) : isIncumbent ? (
            <Shield size={20} />
          ) : (
            <User size={20} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span
              className={`text-[9px] font-bold uppercase tracking-widest ${
                isSelected ? "text-[#0d1627]/80" : "text-[#c8a85f]"
              }`}
            >
              {node.generation} · {node.era}
            </span>
          </div>

          <h5
            className={`font-display text-lg leading-snug truncate ${
              isSelected ? "text-[#0d1627]" : "text-white"
            }`}
          >
            {node.name}
          </h5>

          <p
            className={`text-xs truncate ${
              isSelected ? "text-[#0d1627]/75" : "text-white/60"
            }`}
          >
            {node.title}
          </p>
        </div>

        <ChevronRight
          size={16}
          className={`shrink-0 ${
            isSelected ? "text-[#0d1627]" : "text-[#d4b56e]"
          }`}
        />
      </motion.button>

      {/* Downward Connecting Vertical Line & Children */}
      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center w-full mt-4">
          <div className="h-8 w-0.5 bg-[#d4b56e]/40" />
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center w-full mt-2">
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
