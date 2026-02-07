export const dashboardStats = [
  { label: "Total Projects", value: "12", icon: "projects" },
  { label: "In Progress", value: "8", icon: "progress" },
  { label: "Completed", value: "4", icon: "completed" },
  { label: "Audit Ready", value: "3", icon: "audit" },
];

export const recentActivities = [
  { id: 1, text: "Roadmap_Version1.Docx Uploaded By Rami AlSharif", time: "5 Mins Ago" },
  { id: 2, text: "KPI_Framework.Xlsx Uploaded By Mona Hamed", time: "20 Mins Ago" },
  { id: 3, text: "Digital_Transformation_Plan.Pdf Approved By Advisory Team", time: "1 Hour Ago" },
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
];
