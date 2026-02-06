"use client";

import Link from "next/link";

type DetailsHeaderProps = {
  title?: string;
  category?: string;
  description?: string;
  progress?: number;
  backHref?: string;
};

export default function DetailsHeader({
  title = "Digital Transformation Strategic Planning",
  category = "Strategy & Planning",
  description = "Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals",
  progress = 100,
  backHref = "/dashboard",
}: DetailsHeaderProps) {
  return (
    <div className="space-y-2">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
      >
        <span className="text-lg">←</span>
        Back
      </Link>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="space-y-1">
          <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded">
            {category}
          </span>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="text-sm text-slate-500 max-w-2xl">{description}</p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-3">
          <div className="w-20 h-20 rounded-full border-4 border-green-500 flex items-center justify-center bg-green-50">
            <span className="text-lg font-bold text-green-600">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
