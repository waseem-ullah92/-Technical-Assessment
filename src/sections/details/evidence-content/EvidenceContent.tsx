"use client";

import { EvidenceTable } from "../evidence-table";
import { CommentsSection } from "../comments-section";
import { RecentActivitiesSection } from "../recent-activities-section";

export default function EvidenceContent() {
  return (
    <div className="space-y-4 sm:space-y-6 min-w-0 w-full max-w-full">
      <EvidenceTable />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 min-w-0 w-full">
        <div className="col-span-1 sm:col-span-1 lg:col-span-7 min-w-0">
          <CommentsSection />
        </div>
        <div className="col-span-1 sm:col-span-1 lg:col-span-5 min-w-0">
          <RecentActivitiesSection />
        </div>
      </div>
    </div>
  );
}