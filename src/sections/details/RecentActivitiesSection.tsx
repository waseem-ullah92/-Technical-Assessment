"use client";

import { Card } from "@/shared/ui/card";
import { recentActivitiesDetails } from "@/mock/details.mock";

export default function RecentActivitiesSection() {
  return (
    <Card className="h-full">
      <h3 className="font-semibold text-[#334155] mb-4">Recent Activities</h3>
      <ul className="divide-y divide-[#E2E8F0]">
        {recentActivitiesDetails.map((item) => (
          <li key={item.id} className="flex gap-3 items-start py-4 first:pt-0 last:pb-0">
            <span
              className="flex-shrink-0 self-center rounded-full bg-[#DB1F26]"
              style={{ width: 6, height: 6 }}
            />
            <p
              className="flex-1 min-w-0 capitalize font-medium text-[#1D3557]"
              style={{ fontSize: 16, lineHeight: "22px" }}
            >
              {item.text}
            </p>
            <span
              className="flex-shrink-0 capitalize font-normal text-[#8597A8]"
              style={{ fontSize: 12, lineHeight: "16px" }}
            >
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
