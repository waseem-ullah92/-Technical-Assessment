"use client";

import { Card } from "@/shared/ui/card";
import { projectTimelineData } from "@/mock/dashboard.mock";

export default function ProjectTimeline() {
  return (
    <Card className="lg:col-span-2">
      <h3 className="font-semibold text-slate-900 mb-4">Project Timeline</h3>
      <div className="space-y-4">
        {projectTimelineData.map((phase, index) => (
          <div key={phase.phase} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-slate-700">{phase.phase}</span>
              <span className="text-slate-500">
                {phase.start} - {phase.end}
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-500"
                style={{ width: `${phase.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
