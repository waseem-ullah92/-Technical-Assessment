"use client";

import { Card } from "@/shared/ui/card";
import { overviewContent } from "@/mock/details.mock";
import { LeadersSection } from "../leaders-section";

export default function OverviewContent() {
  return (
    <div className="space-y-4 sm:space-y-6 min-w-0">
      <Card className="min-w-0 p-4 sm:p-5">
        <h4 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Objective</h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-5 sm:leading-relaxed">{overviewContent.objective}</p>
      </Card>
      <Card className="min-w-0 p-4 sm:p-5">
        <h4 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Requirements</h4>
        <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600 leading-5">
          {overviewContent.requirements.map((req, i) => (
            <li key={i} className="break-words">{req}</li>
          ))}
        </ul>
      </Card>
      <Card className="min-w-0 p-4 sm:p-5">
        <h4 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Scope</h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-5 sm:leading-relaxed">{overviewContent.scope}</p>
      </Card>
      <LeadersSection />
    </div>
  );
}
