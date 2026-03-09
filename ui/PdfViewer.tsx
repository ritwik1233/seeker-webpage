"use client";

interface PdfViewerProps {
  url: string;
  title: string;
}

export function PdfViewer({ url, title }: PdfViewerProps) {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <iframe
        src={url}
        title={title}
        className="w-full rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm"
        style={{ height: "80vh" }}
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
      >
        Download PDF
      </a>
    </div>
  );
}
