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

export function TrackingSummary() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card className="relative overflow-hidden hover:shadow-md transition-shadow">
        <p className="align-middle capitalize text-[24px] leading-[16px] font-bold text-[#1D3557]">
          {trackingRows.length}
        </p>
        <p className="mt-1 align-middle capitalize text-[14px] leading-[16px] font-normal text-[#8597A8]">
          Total Documents
        </p>
      </Card>
      <Card className="relative overflow-hidden hover:shadow-md transition-shadow">
        <p className="align-middle capitalize text-[24px] leading-[16px] font-bold text-[#1D3557]">
          {statusCounts["Approved"] ?? 0}
        </p>
        <p className="mt-1 align-middle capitalize text-[14px] leading-[16px] font-normal text-[#8597A8]">
          Approved
        </p>
      </Card>
      <Card className="relative overflow-hidden hover:shadow-md transition-shadow">
        <p className="align-middle capitalize text-[24px] leading-[16px] font-bold text-[#1D3557]">
          {(statusCounts["Pending Review"] ?? 0) + (statusCounts["In Progress"] ?? 0)}
        </p>
        <p className="mt-1 align-middle capitalize text-[14px] leading-[16px] font-normal text-[#8597A8]">
          In Review / Progress
        </p>
      </Card>
    </div>
  );
}
