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
    <div className="space-y-4">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-[#1D3557] font-medium hover:opacity-80 transition-opacity"
        style={{ fontSize: 14 }}
      >
        <span className="text-lg">←</span>
        {title}
      </Link>

      <Card className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-6">
        <div className="space-y-3 flex-1 min-w-0">
          <span
            className="inline-block px-3 py-1.5 rounded-full text-[#8597A8] font-normal border border-[#E0E8ED]"
            style={{ fontSize: 12, backgroundColor: "#F5F8FA" }}
          >
            {category}
          </span>
          <h1
            className="font-bold text-[#1D3557] capitalize"
            style={{ fontSize: 24, lineHeight: "32px" }}
          >
            {title}
          </h1>
          <p
            className="text-[#8597A8] font-normal capitalize max-w-2xl"
            style={{ fontSize: 14, lineHeight: "22px" }}
          >
            {description}
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center">
          <div
            className="rounded-full border-[3px] border-green-500 flex items-center justify-center bg-white"
            style={{ width: 80, height: 80 }}
          >
            <span
              className="font-bold text-[#1D3557]"
              style={{ fontSize: 18 }}
            >
              {progress}%
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}
