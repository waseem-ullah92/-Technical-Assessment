"use client";

import { Card } from "@/shared/ui/card";
import { overviewContent } from "@/mock/details.mock";
import { LeadersSection } from "../leaders-section";

export default function OverviewContent() {
  return (
    <div className="space-y-6">
      <Card>
        <h4 className="font-semibold text-slate-900 mb-2">Objective</h4>
        <p className="text-sm text-slate-600">{overviewContent.objective}</p>
      </Card>
      <Card>
        <h4 className="font-semibold text-slate-900 mb-2">Requirements</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
          {overviewContent.requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </Card>
      <Card>
        <h4 className="font-semibold text-slate-900 mb-2">Scope</h4>
        <p className="text-sm text-slate-600">{overviewContent.scope}</p>
      </Card>
      <LeadersSection />
    </div>
  );
}
