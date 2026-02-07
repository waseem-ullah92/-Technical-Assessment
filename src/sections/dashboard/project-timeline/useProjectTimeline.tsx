"use client";

import { useState, useMemo } from "react";
import { projectTimelineData, timelineYears } from "@/mock/dashboard.mock";

export interface TimelineEvent {
  id: string;
  date: string;
  label: string;
  status: "completed" | "current" | "upcoming";
}

export function useProjectTimeline() {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(
    timelineYears.includes(currentYear as (typeof timelineYears)[number])
      ? currentYear
      : timelineYears[0]
  );

  const events = useMemo(
    () =>
      projectTimelineData
        .filter((e) => e.year === selectedYear)
        .sort((a, b) => a.id - b.id)
        .map((e) => ({
          id: String(e.id),
          date: e.dateLabel,
          label: e.phase,
          status: e.status,
        })),
    [selectedYear]
  );

  const progressPercent = useMemo(() => {
    if (events.length === 0) return 0;
    const completedCount = events.filter(
      (e) => e.status === "completed" || e.status === "current"
    ).length;
    return (completedCount / events.length) * 100;
  }, [events]);

  const getDotLeft = (index: number) =>
    events.length <= 1 ? 0 : (index / (events.length - 1)) * 100;

  const isCompletedOrCurrent = (status: string) =>
    status === "completed" || status === "current";

  return {
    timelineYears,
    selectedYear,
    setSelectedYear,
    events,
    progressPercent,
    getDotLeft,
    isCompletedOrCurrent,
  };
}
