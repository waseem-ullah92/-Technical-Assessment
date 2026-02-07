"use client";

import { Card } from "@/shared/ui/card";
import { leadersData } from "@/mock/details.mock";

export default function LeadersSection() {
  return (
    <Card className="min-w-0 p-4 sm:p-5">
      <h3 className="font-semibold text-[#1D3557] text-base sm:text-lg mb-3 sm:mb-4">Leaders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 min-w-0">
        {leadersData.map((leader) => (
          <div
            key={leader.name}
            className="flex items-center gap-2 sm:gap-3 rounded-[10px] px-3 sm:px-4 py-3 min-h-[56px] sm:min-h-[63px] bg-[#F5F8FA] min-w-0"
          >
            <div
              className="shrink-0 rounded-full flex items-center justify-center font-medium w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#DFE2E6] text-[#6B7F97] text-xs sm:text-sm"
            >
              {leader.avatar}
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1 gap-0.5 overflow-hidden">
              <p
                className="align-middle capitalize font-medium text-sm sm:text-base leading-5 sm:leading-[22px] text-[#1D3557] truncate"
              >
                {leader.name}
              </p>
              <p
                className="align-middle capitalize font-medium text-sm sm:text-base leading-5 sm:leading-[22px] text-[#8597A8] truncate"
              >
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
