"use client";

import { Card } from "@/shared/ui/card";

const readinessPercent = 80;
const overdueStds = 12;
const missingEvidence = 5;

export default function AuditReadiness() {
  // Semi-circle arc: 180° total, 80% = 144° filled
  const radius = 80;
  const strokeWidth = 12;
  const circumference = Math.PI * radius;
  const filledLength = (readinessPercent / 100) * circumference;

  return (
    <Card>
      <h3 className="font-semibold text-[#1A202C] mb-6">
        Digital Transformation Program - Audit Readiness
      </h3>

      {/* Semi-circular progress gauge */}
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-24">
          <svg
            viewBox="0 0 200 100"
            className="w-full h-full"
          >
            {/* Background arc (light grey) */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#E0E8ED"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Filled arc (green) */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#4CAF50"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${filledLength} ${circumference}`}
              strokeDashoffset={0}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
            <span className="text-2xl font-bold text-[#1A202C]">
              {readinessPercent}%
            </span>
            <span className="text-sm text-[#666666] mt-0.5">
              Readiness Level
            </span>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="my-6 border-t border-[#E0E8ED]" />

      {/* Bottom metrics */}
      <div className="flex justify-around gap-4">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#1A202C]">{overdueStds}</span>
          <span className="text-sm text-[#666666] mt-1">Overdue Stds</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#1A202C]">
            {missingEvidence}
          </span>
          <span className="text-sm text-[#666666] mt-1">Missing Evidence</span>
        </div>
      </div>
    </Card>
  );
}
