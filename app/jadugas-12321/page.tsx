import type { Metadata } from "next";
import { PdfViewer } from "../../ui/PdfViewer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — SeekR",
  description: "Cookie Policy for SeekR",
};

export default function CookiesPage() {
  const cookiesUrl = process.env.NEXT_PUBLIC_COOKIES_POLICY_URL;

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
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-8">
          Effective Date: March 9, 2026
        </p>

        {cookiesUrl ? (
          <PdfViewer url={cookiesUrl} title="Cookie Policy" />
        ) : (
          <p className="text-gray-600 dark:text-slate-300">
            The Cookie Policy document is currently unavailable. Please check
            back later or contact us at{" "}
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
            href="/terms"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            Terms &amp; Conditions
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
