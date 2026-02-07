"use client";

import { recentActivities } from "@/mock/dashboard.mock";
import { Card } from "@/shared/ui/card";

export default function RecentActivities() {
  return (
    <Card>
      <h3 className="font-semibold text-[#334155] mb-4">Recent Activities</h3>
      <ul className="divide-y divide-[#E2E8F0]">
        {recentActivities.map((item) => (
          <li key={item.id} className="flex gap-3 items-center py-4 first:pt-0 last:pb-0">
            <span
              className="flex-shrink-0 rounded-full bg-[#DB1F26]"
              style={{ width: 6, height: 6 }}
            />
            <p
              className="flex-1 min-w-0 align-middle capitalize font-medium text-[#1D3557]"
              style={{ fontSize: 16, lineHeight: "22px" }}
            >
              {item.text}
            </p>
            <span
              className="flex-shrink-0 align-middle capitalize font-normal text-[#8597A8]"
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
