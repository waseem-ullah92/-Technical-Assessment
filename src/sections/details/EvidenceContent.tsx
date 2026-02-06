"use client";

import EvidenceTable from "./EvidenceTable";
import CommentsSection from "./CommentsSection";
import RecentActivitiesSection from "./RecentActivitiesSection";

export default function EvidenceContent() {
  return (
    <div className="space-y-6">
      <EvidenceTable />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CommentsSection />
        </div>
        <div>
          <RecentActivitiesSection />
        </div>
      </div>
    </div>
  );
}
