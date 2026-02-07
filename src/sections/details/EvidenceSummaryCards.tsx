"use client";

import { Card } from "@/shared/ui/card";
import { evidenceSummaryData } from "@/mock/details.mock";

const iconMap: Record<string, React.ReactNode> = {
  total: (
    <svg className="w-5 h-5" fill="none" stroke="#DB1F26" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  review: (
    <svg className="w-5 h-5" fill="none" stroke="#DB1F26" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  progress: (
    <svg className="w-5 h-5" fill="none" stroke="#DB1F26" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  completed: (
    <svg className="w-5 h-5" fill="none" stroke="#DB1F26" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function EvidenceSummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {evidenceSummaryData.map((item) => (
        <Card
          key={item.label}
          className="relative overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="align-middle capitalize text-[24px] leading-[16px] font-bold text-[#1D3557]">
                {item.value}
              </p>
              <p className="mt-1 align-middle capitalize text-[14px] leading-[16px] font-normal text-[#8597A8]">
                {item.label}
              </p>
            </div>
            <div className="flex-shrink-0">{iconMap[item.icon] ?? iconMap.total}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
