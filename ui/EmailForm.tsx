"use client";

declare global {
  interface Window {
    turnstile?: { reset: (widgetId: string) => void };
  }
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Check, Loader2 } from "lucide-react";
import { Turnstile } from "react-turnstile";
import { subscribe } from "../lib/api";

export function EmailForm({
  placeholder,
  dark = false,
}: {
  placeholder: string;
  dark?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [widgetId, setWidgetId] = useState<string>("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (!token) {
      setError("Please complete the verification.");
      return;
    }

    setStatus("loading");
    setError("");

    const result = await subscribe(email, token);

    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setError(result.error);
      if (widgetId) window.turnstile?.reset(widgetId);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl ${
          dark
            ? "bg-white/20 border border-white/30 text-white"
            : "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/40 text-green-700 dark:text-green-400"
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${dark ? "bg-white/20" : "bg-green-100 dark:bg-green-900/40"}`}
        >
          <Check
            className={`w-4 h-4 ${dark ? "text-white" : "text-green-600 dark:text-green-400"}`}
          />
        </div>
        <p className="text-sm">
          You're on the list! We'll ping you at{" "}
          <span
            className={
              dark
                ? "text-white underline decoration-white/50"
                : "text-green-600 dark:text-green-400 underline decoration-green-300"
            }
          >
            {email}
          </span>
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-2 w-full">
      <div
        className={`flex flex-col sm:flex-row gap-2 p-1.5 rounded-2xl shadow-lg ${
          dark
            ? "bg-white/15 border border-white/25 backdrop-blur-md"
            : "bg-white dark:bg-slate-800 border border-orange-100 dark:border-slate-700"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder={placeholder}
          className={`flex-1 px-4 py-3 text-sm rounded-xl outline-none bg-transparent ${
            dark
              ? "text-white placeholder-white/50"
              : "text-gray-700 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500"
          }`}
        />
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed ${
            dark
              ? "bg-white text-orange-600 hover:bg-orange-50 shadow-black/20"
              : "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-orange-200 dark:shadow-orange-900/30"
          }`}
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Sparkles className="w-4 h-4" />
          )}
          {status === "loading" ? "Submitting..." : "Notify Me"}
        </motion.button>
      </div>

      <Turnstile
        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onVerify={(t) => setToken(t)}
        onError={() => setToken(null)}
        onExpire={() => setToken(null)}
        onLoad={(id) => setWidgetId(id)}
        theme={dark ? "dark" : "auto"}
        size="flexible"
        refreshExpired="auto"
      />

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`text-xs px-2 ${dark ? "text-white/70" : "text-rose-500 dark:text-rose-400"}`}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
