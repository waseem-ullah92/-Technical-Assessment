"use client";

import { Card } from "@/shared/ui/card";
import PerspectivesTable from "./PerspectivesTable";

export default function PerspectivesSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#1A202C]">Perspectives</h2>

      {/* Digital Transformation Strategic Planning with green circular progress */}
      <Card className="flex items-center gap-6 p-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-[#4CAF50] flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-[#1A202C]">
            Digital Transformation Strategic Planning
          </h3>
          <p className="text-sm text-[#6B7280] mt-1">
            Overview of strategic initiatives and progress across perspectives
          </p>
        </div>
      </Card>

      <PerspectivesTable />
    </div>
  );
}
