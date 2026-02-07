"use client";

import Link from "next/link";
import { Card } from "@/shared/ui/card";

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
    <div className="space-y-3 sm:space-y-4">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-[#1D3557] font-medium hover:opacity-80 transition-opacity text-xs sm:text-sm truncate max-w-full"
      >
        <span className="text-base sm:text-lg shrink-0">←</span>
        <span className="truncate">{title}</span>
      </Link>

      <Card className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 p-4 sm:p-6">
        <div className="space-y-2 sm:space-y-3 flex-1 min-w-0">
          <span
            className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[#8597A8] font-normal border border-[#E0E8ED] text-[10px] sm:text-xs bg-[#F5F8FA]"
          >
            {category}
          </span>
          <h1
            className="font-bold text-[#1D3557] capitalize text-lg sm:text-xl lg:text-2xl leading-tight sm:leading-8 break-words"
          >
            {title}
          </h1>
          <p
            className="text-[#8597A8] font-normal capitalize max-w-2xl text-xs sm:text-sm leading-5 sm:leading-[22px] line-clamp-3 sm:line-clamp-none"
          >
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center lg:justify-end">
          <div
            className="rounded-full border-2 sm:border-[3px] border-green-500 flex items-center justify-center bg-white w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
          >
            <span
              className="font-bold text-[#1D3557] text-sm sm:text-base lg:text-lg"
            >
              {progress}%
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
