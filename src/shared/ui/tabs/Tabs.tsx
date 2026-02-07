"use client";

import { useState } from "react";
import { cn } from "@/shared/lib/cn";
import type { TabsProps } from "./Tabs.interface";

export default function Tabs({ tabs, defaultTab, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id);
  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className={cn("w-full min-w-0", className)}>
      <div className="inline-flex flex-wrap gap-1 rounded-[10px] bg-[#E9F0F7] p-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "min-w-[80px] sm:min-w-[120px] px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-[8px] transition-colors",
                isActive
                  ? "bg-white text-slate-700 shadow-sm"
                  : "bg-transparent text-slate-400 hover:text-slate-600"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 min-w-0 w-full">{activeContent}</div>
    </div>
  );
}
