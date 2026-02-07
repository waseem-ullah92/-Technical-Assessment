"use client";

import { Card } from "@/shared/ui/card";
import { recentActivitiesDetails } from "@/mock/details.mock";

export default function RecentActivitiesSection() {
  return (
    <Card className="h-full min-w-0 p-4 sm:p-5">
      <h3 className="font-semibold text-[#334155] mb-3 sm:mb-4 text-base sm:text-lg">Recent Activities</h3>
      <ul className="divide-y divide-[#E2E8F0]">
        {recentActivitiesDetails.map((item) => (
          <li key={item.id} className="flex gap-2 sm:gap-3 items-start py-3 sm:py-4 first:pt-0 last:pb-0 min-w-0">
            <span
              className="flex-shrink-0 self-center mt-1.5 sm:mt-2 rounded-full bg-[#DB1F26] w-1.5 h-1.5 sm:w-[6px] sm:h-[6px]"
            />
            <p
              className="flex-1 min-w-0 capitalize font-medium text-[#1D3557] text-sm sm:text-base leading-5 sm:leading-[22px] break-words"
            >
              {item.text}
            </p>
            <span
              className="flex-shrink-0 capitalize font-normal text-[#8597A8] text-[10px] sm:text-xs leading-4"
            >
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
