"use client";

import { Card } from "@/shared/ui/card";
import { recentActivitiesDetails } from "@/mock/details.mock";

export default function RecentActivitiesSection() {
  return (
    <Card className="h-full">
      <h3 className="font-semibold text-slate-900 mb-4">Recent Activities</h3>
      <ul className="space-y-3">
        {recentActivitiesDetails.map((item) => (
          <li key={item.id} className="flex gap-3 items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-rose-500" />
            <div>
              <p className="text-sm text-slate-700">{item.text}</p>
              <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
