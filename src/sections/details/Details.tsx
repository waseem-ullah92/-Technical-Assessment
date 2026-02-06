"use client";

import DetailsHeader from "./DetailsHeader";
import EvidenceSummaryCards from "./EvidenceSummaryCards";
import { Tabs } from "@/shared/ui/tabs";
import OverviewContent from "./OverviewContent";
import EvidenceContent from "./EvidenceContent";

export default function Details() {
  const tabs = [
    { id: "overview", label: "Overview", content: <OverviewContent /> },
    { id: "evidence", label: "Evidence", content: <EvidenceContent /> },
  ];

  return (
    <div className="space-y-6">
      <DetailsHeader />
      <EvidenceSummaryCards />
      <Tabs tabs={tabs} defaultTab="overview" />
    </div>
  );
}
