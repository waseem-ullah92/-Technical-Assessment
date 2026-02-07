"use client";

import { EvidenceTable } from "../evidence-table";
import { CommentsSection } from "../comments-section";
import { RecentActivitiesSection } from "../recent-activities-section";

export default function EvidenceContent() {
  return (
    <div className="space-y-6">
      <EvidenceTable />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 lg:col-span-7">
          <CommentsSection />
        </div>
        <div className="col-span-12 sm:col-span-12 lg:col-span-5">
          <RecentActivitiesSection />
        </div>
      </div>
    </div>
  );
}
