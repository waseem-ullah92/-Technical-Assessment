"use client";

import { Card } from "@/shared/ui/card";
import { trackingRows } from "@/mock/tracking.mock";

const statusCounts = trackingRows.reduce(
  (acc, row) => {
    acc[row.status] = (acc[row.status] ?? 0) + 1;
    return acc;
  },
  {} as Record<string, number>
);

const statusLabels = ["Approved", "Pending Review", "In Progress"] as const;

export function StatusOverviewSidePanel() {
  return (
    <Card>
      <h3 className="font-semibold text-[#1D3557] mb-4">Status Overview</h3>
      <div className="space-y-3">
        {statusLabels.map((label) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-[#8597A8] text-sm">{label}</span>
            <span className="font-semibold text-[#1D3557]">
              {statusCounts[label] ?? 0}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
