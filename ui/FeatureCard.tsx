"use client";
import { motion } from "motion/react";
import {
  MapPin,
  LayoutGrid,
  Eye,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  number: string;
  icon: LucideIcon;
  iconBg: string;
  title: string;
  body: string;
  accent: string;
  numColor: string;
}

export const FEATURES: Feature[] = [
  {
    number: "01",
    icon: MapPin,
    iconBg: "from-orange-400 to-amber-500",
    title: "Tell Us Your Vibe",
    body: "Just type where, when, and your budget. Our AI handles the rest — no forms, no filters, no friction.",
    accent: "border-orange-100 dark:border-orange-900/40",
    numColor: "from-orange-400 to-amber-500",
  },
  {
    number: "02",
    icon: LayoutGrid,
    iconBg: "from-pink-400 to-rose-500",
    title: "Ditch the Spreadsheets",
    body: "We do the heavy lifting so you can close those 15+ browser tabs. One place. One plan. Everything sorted.",
    accent: "border-pink-100 dark:border-pink-900/40",
    numColor: "from-pink-400 to-rose-500",
  },
  {
    number: "03",
    icon: Eye,
    iconBg: "from-violet-400 to-purple-500",
    title: "Total Transparency",
    body: "See the full cost before you go — real prices for flights, hotels, and activities. Zero surprises.",
    accent: "border-violet-100 dark:border-violet-900/40",
    numColor: "from-violet-400 to-purple-500",
  },
];

export function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px -8px rgba(249,115,22,0.12)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      className={`relative bg-gradient-to-br from-white to-orange-50/30 dark:from-slate-800 dark:to-slate-800 rounded-3xl border ${feature.accent} p-7 flex flex-col gap-5 shadow-sm transition-shadow`}
    >
      {/* Large background number */}
      <span
        className={`absolute top-5 right-6 text-7xl leading-none bg-gradient-to-br ${feature.numColor} bg-clip-text text-transparent opacity-10 select-none pointer-events-none`}
        aria-hidden
      >
        {feature.number}
      </span>

      {/* Icon */}
      <div
        className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center shadow-md`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Step number badge */}
      <div className="relative z-10">
        <span
          className={`text-xs bg-gradient-to-r ${feature.numColor} bg-clip-text text-transparent tracking-widest uppercase`}
        >
          Step {feature.number}
        </span>
        <h3 className="text-gray-900 dark:text-slate-100 mt-1">
          {feature.title}
        </h3>
      </div>

      <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed relative z-10">
        {feature.body}
      </p>
    </motion.div>
  );
}
