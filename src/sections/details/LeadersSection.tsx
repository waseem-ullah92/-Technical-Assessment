"use client";

import { leadersData } from "@/mock/details.mock";

export default function LeadersSection() {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-slate-900">Leaders & Owners</h3>
      <div className="flex flex-wrap gap-3">
        {leadersData.map((leader) => (
          <div
            key={leader.name}
            className="flex items-center gap-3 p-3 bg-white rounded-lg border shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">
              {leader.avatar}
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">{leader.name}</p>
              <p className="text-xs text-slate-500">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
