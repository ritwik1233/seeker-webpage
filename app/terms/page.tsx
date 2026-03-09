import type { Metadata } from "next";
import { PdfViewer } from "../../ui/PdfViewer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions — SeekR",
  description: "Terms and Conditions for SeekR",
};

export default function TermsPage() {
  const termsUrl = process.env.NEXT_PUBLIC_TERMS_URL;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-slate-950 dark:via-gray-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <Link
          href="/"
          className="text-sm text-orange-600 dark:text-orange-400 hover:underline mb-8 inline-block"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-50 mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
          Effective Date: March 9, 2026
        </p>

        {termsUrl ? (
          <PdfViewer url={termsUrl} title="Terms & Conditions" />
        ) : (
          <p className="text-gray-600 dark:text-slate-300">
            The Terms &amp; Conditions document is currently unavailable. Please
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

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-slate-400">
          <Link
            href="/privacy"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookies"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            Cookie Policy
          </Link>
          <span>
            Questions? Contact{" "}
            <a
              href="mailto:ritwik@seek-r.life"
              className="text-orange-600 dark:text-orange-400 hover:underline"
            >
              ritwik@seek-r.life
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
