"use client";

import { TrackingTable } from "./tracking-table";
import { TrackingSummary } from "./tracking-summary";
import { StatusOverviewSidePanel } from "./status-overview-side-panel";

export default function Tracking() {
  return (
    <div className="space-y-6">
      {/* Section: Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1D3557]">Tracking</h1>
        <p className="text-sm text-[#8597A8] mt-1">
          Monitor document status and compliance tracking
        </p>
      </div>

      {/* Section: Summary statistics */}
      <TrackingSummary />

      {/* Sectioned layout: Data table + Side panel */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 lg:col-span-8">
          <TrackingTable />
        </div>
        <aside className="col-span-12 sm:col-span-12 lg:col-span-4">
          <StatusOverviewSidePanel />
        </aside>
      </div>
    </div>
  );
}
