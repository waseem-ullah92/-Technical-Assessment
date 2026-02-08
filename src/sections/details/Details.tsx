"use client";

import { DetailsHeader } from "./details-header";
import { EvidenceSummaryCards } from "./evidence-summary-cards";
import { Tabs } from "@/shared/ui/tabs";
import { OverviewContent } from "./overview-content";
import { EvidenceContent } from "./evidence-content";

export default function Details() {
  const tabs = [
    { id: "overview", label: "Overview", content: <OverviewContent /> },
    { id: "evidence", label: "Evidence", content: <EvidenceContent /> },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 min-w-0 w-full max-w-full overflow-hidden">
      <DetailsHeader />
      <EvidenceSummaryCards />
      <Tabs tabs={tabs} defaultTab="overview" />
    </div>
  );
}