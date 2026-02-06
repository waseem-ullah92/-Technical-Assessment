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
      <Card>
        <p className="text-2xl font-bold text-slate-900">{trackingRows.length}</p>
        <p className="text-sm text-slate-500">Total Documents</p>
      </Card>
      <Card>
        <p className="text-2xl font-bold text-green-600">
          {statusCounts["Approved"] ?? 0}
        </p>
        <p className="text-sm text-slate-500">Approved</p>
      </Card>
      <Card>
        <p className="text-2xl font-bold text-amber-600">
          {(statusCounts["Pending Review"] ?? 0) + (statusCounts["In Progress"] ?? 0)}
        </p>
        <p className="text-sm text-slate-500">In Review / Progress</p>
      </Card>
    </div>
  );
}
