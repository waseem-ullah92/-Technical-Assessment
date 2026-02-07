"use client";

import { useMemo, useState } from "react";
import { projectTimelineData } from "@/mock/dashboard.mock";

type TimelineItem = (typeof projectTimelineData)[number];

export function useProjectTimeline() {
  const years = useMemo(
    () =>
      Array.from(new Set(projectTimelineData.map((item) => item.year))).sort(
        (a, b) => a - b
      ),
    []
  );

  const [selectedYear, setSelectedYear] = useState<number>(
    years[0] ?? new Date().getFullYear()
  );

  const items = useMemo(
    () =>
      projectTimelineData.filter((item) => item.year === selectedYear),
    [selectedYear]
  );

  const completedCount = useMemo(
    () => items.filter((item) => item.status === "completed").length,
    [items]
  );

  const progressPercentage = useMemo(() => {
    if (items.length <= 1) return 100;
    if (completedCount === 0) return 0;
    // Green bar extends to last completed marker (first 2 white dots)
    return (completedCount / (items.length - 1)) * 100;
  }, [items.length, completedCount]);

  return {
    years,
    selectedYear,
    setSelectedYear,
    items,
    progressPercentage,
  };
}

