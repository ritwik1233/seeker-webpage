"use client";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { WandrLogo } from "./WanderLogo";
import { EmailForm } from "./EmailForm";
import { FeatureCard, FEATURES } from "./FeatureCard";

// ── Main page ─────────────────────────────────────────────────────────────────
export function LandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 overflow-x-hidden">
      {/* ════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO (full-viewport, header lives inside)
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 py-24 overflow-hidden">
        {/* ── Looping video background ── */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1723482471019-aeab76dc44c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzE0OTQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "saturate(1.15) brightness(0.92)" }}
        >
          <source
            src="https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/856974/856974-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          <img
            src="https://images.unsplash.com/photo-1723482471019-aeab76dc44c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwc3Vuc2V0JTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzE0OTQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tropical beach"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
        {/* Warm sunrise tint at the bottom edge */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-orange-950/40 to-transparent pointer-events-none" />

        {/* ── Floating nav — sits inside the hero ── */}
        <div className="absolute top-[5%] inset-x-0 z-20 flex items-center justify-between px-6 h-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <WandrLogo height="h-40" />
          </motion.div>
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(2.6rem,8vw,5rem)] leading-[1.08] tracking-tight text-white drop-shadow-lg"
          >
            Stop Planning,{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent drop-shadow-none">
              Start Wandering
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="text-[clamp(1.1rem,3vw,1.5rem)] text-white/75 max-w-xl drop-shadow"
          >
            From Vibe to Full Itinerary —{" "}
            <span className="text-orange-300">In Minutes</span>
          </motion.p>

          {/* Email form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="w-full max-w-md"
          >
            <EmailForm
              placeholder="Where should we notify about the launch?"
              dark
            />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: "easeOut",
            }}
            className="max-w-sm text-center"
          >
            <p className="text-sm italic text-white/60 leading-relaxed">
              For the love of travel we roam
              <br />
              Chasing sunsets and sunrise away from home
            </p>
            <footer className="mt-2 text-xs text-white/60 tracking-widest uppercase not-italic">
              — Reelika Sinha
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 2 — HOW IT WORKS
      ════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-5 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(to right, #f97316 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section label */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200/60 dark:border-orange-700/40 text-xs text-orange-600 dark:text-orange-400">
              <Sparkles className="w-3 h-3" />
              AI-Powered Travel Planning
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.8rem,5vw,3rem)] text-gray-900 dark:text-slate-50 leading-tight">
              Drop your details.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Unbox your itinerary.
              </span>
            </h2>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-orange-200 via-pink-200 to-violet-200 dark:from-orange-900/50 dark:via-pink-900/50 dark:to-violet-900/50 z-0" />

            {FEATURES.map((f) => (
              <FeatureCard key={f.number} feature={f} />
            ))}
          </div>

          {/* Preview pill row */}
          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {[
              "🛫  Flights",
              "🏨  Hotels",
              "🎒  Activities",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-orange-50 dark:bg-slate-800 border border-orange-100 dark:border-slate-700 text-sm text-gray-600 dark:text-slate-300 shadow-sm"
              >
                {item}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 border border-orange-200 dark:border-orange-700/50 text-sm text-orange-600 dark:text-orange-400 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />& more
            </span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SECTION 3 — FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 px-5 overflow-hidden">
        {/* Background gradient (matches app summary card) */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-violet-500" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs text-white mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Coming Soon
            </span>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-[clamp(2rem,6vw,3.5rem)] text-white leading-tight mb-5">
              Focus on the Adventure,{" "}
              <span className="text-white/75">
                Not the Admin
              </span>
            </h2>
          </div>

          {/* Sub-headline */}
          <div>
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
              We're launching soon. Drop your email to be the
              first to experience the{" "}
              <span className="text-white">
                smartest travel agent in your pocket
              </span>
              .
            </p>
          </div>

          {/* Email form */}
          <div className="max-w-md mx-auto">
            <EmailForm
              placeholder="Where should we notify about the launch?"
              dark
            />
          </div>

          {/* ── Footer merged into Section 3 ── */}
          <div className="mt-8 pt-8 border-t border-white/20 flex justify-center">
            <p className="text-xs text-white/40 flex items-center gap-1">
              Made with{" "}
              <span className="text-rose-300">♥</span> for
              curious wand-rs · © 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
