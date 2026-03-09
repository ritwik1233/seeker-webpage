"use client";

import { PdfViewer } from "../../ui/PdfViewer";
import { SeekRLogo } from "../../ui/WanderLogo";
import Link from "next/link";

export default function RefundPolicyPage() {
  const refundUrl = process.env.NEXT_PUBLIC_REFUND_POLICY_URL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950">
      <header className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-6 py-4">
        <Link href="/">
          <SeekRLogo size="sm" />
        </Link>
      </header>

      <div className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-2 text-center">
          Refund Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 text-center">
          Effective Date: March 9, 2026
        </p>

        {refundUrl ? (
          <PdfViewer url={refundUrl} title="Refund Policy" />
        ) : (
          <p className="text-gray-600 dark:text-slate-300">
            The Refund Policy document is currently unavailable. Please
            check back later or contact us at{" "}
            <a
              href="mailto:ritwik@seek-r.life"
              className="text-orange-600 dark:text-orange-400 hover:underline"
            >
              ritwik@seek-r.life
            </a>
            .
          </p>
        )}

      </div>

      <footer className="bg-gradient-to-br from-orange-500 via-pink-500 to-violet-500 py-8 px-5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <div className="flex gap-4 text-sm font-semibold">
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white/80 transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Made with <span className="text-rose-300">♥</span> for curious
            seek-rs · © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
