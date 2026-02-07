export const dashboardStats = [
  { label: "Active Projects", value: "4", icon: "active" },
  { label: "Ongoing Audits", value: "3", icon: "ongoing" },
  { label: "Upcoming Tasks", value: "2", icon: "upcoming" },
  { label: "Overdue Items", value: "1", icon: "overdue" },
];

export const recentActivities = [
  { id: 1, text: "Digital Transformation Program", time: "5 Mins Ago" },
  { id: 2, text: "Data Transformation Project", time: "20 Mins Ago" },
  { id: 3, text: "Governance Framework Update", time: "1 Hour Ago" },
];

export const projectTimelineData = [
  // 2026 timeline – exact content from design
  {
    id: 1,
    year: 2026,
    phase: "Kickoff Workshop",
    dateLabel: "Mar 17",
    status: "completed" as const,
  },
  {
    id: 2,
    year: 2026,
    phase: "Data Collection",
    dateLabel: "March 18",
    status: "completed" as const,
  },
  {
    id: 3,
    year: 2026,
    phase: "Initial Phase",
    dateLabel: "May 8",
    status: "current" as const,
  },
  {
    id: 4,
    year: 2026,
    phase: "Verification",
    dateLabel: "May 9-July 12",
    status: "upcoming" as const,
  },
  {
    id: 5,
    year: 2026,
    phase: "Completion Reviews",
    dateLabel: "July 13",
    status: "upcoming" as const,
  },
  {
    id: 6,
    year: 2026,
    phase: "Cycle Conclusion",
    dateLabel: "August 21",
    status: "upcoming" as const,
  },

  // 2025 (for year filter demo)
  {
    id: 7,
    year: 2025,
    phase: "Planning",
    dateLabel: "Jan–Feb",
    status: "completed" as const,
  },
  {
    id: 8,
    year: 2025,
    phase: "Execution",
    dateLabel: "Mar–Jun",
    status: "completed" as const,
  },
  {
    id: 9,
    year: 2025,
    phase: "Close-out",
    dateLabel: "Jul–Aug",
    status: "current" as const,
  },

  // 2027 (for year filter demo)
  {
    id: 10,
    year: 2027,
    phase: "Planning",
    dateLabel: "Jan 15",
    status: "upcoming" as const,
  },
  {
    id: 11,
    year: 2027,
    phase: "Kickoff",
    dateLabel: "Feb 20",
    status: "upcoming" as const,
  },
  {
    id: 12,
    year: 2027,
    phase: "Execution",
    dateLabel: "Mar–Sep",
    status: "upcoming" as const,
  },
];

export const timelineYears = [2025, 2026, 2027] as const;
