"use client";

import { Card } from "@/shared/ui/card";

const readinessItems = [
  { label: "Documentation Complete", status: "ready", value: 95 },
  { label: "Compliance Checklist", status: "ready", value: 88 },
  { label: "Evidence Collected", status: "in-progress", value: 72 },
  { label: "Review Pending", status: "pending", value: 45 },
];

export default function AuditReadiness() {
  return (
    <Card>
      <h3 className="font-semibold text-slate-900 mb-4">Audit Readiness</h3>
      <div className="space-y-4">
        {readinessItems.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-700">{item.label}</span>
              <span className="font-medium text-slate-900">{item.value}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  item.value >= 80
                    ? "bg-green-500"
                    : item.value >= 50
                    ? "bg-amber-500"
                    : "bg-slate-300"
                }`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
