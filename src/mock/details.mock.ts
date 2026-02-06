export const evidenceSummaryData = [
  { label: "Total Evidence", value: 4, icon: "total" },
  { label: "Under Review Evidence", value: 3, icon: "review" },
  { label: "In Progress Evidence", value: 2, icon: "progress" },
  { label: "Completed Evidence", value: 1, icon: "completed" },
];

export const evidenceTableData = [
  {
    id: 1,
    documentNumber: "5.4.1.1",
    documentName: "Digital_Transformation_Plan.Pdf",
    documentLead: "Ahmed Khaled",
    documentPreparer: "Ahmed Khaled",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Approved",
  },
  {
    id: 2,
    documentNumber: "5.4.1.2",
    documentName: "KPI_Framework.Xlsx",
    documentLead: "Mona Hamed",
    documentPreparer: "Mona Hamed",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Pending Review",
  },
  {
    id: 3,
    documentNumber: "5.4.1.3",
    documentName: "Roadmap_Version1.Docx",
    documentLead: "Rami AlSharif",
    documentPreparer: "Rami AlSharif",
    date: "2025-08-01",
    dueDate: "2025-08-01",
    status: "Pending Review",
  },
];

export const commentsData = [
  {
    id: 1,
    author: "Sara Ibrahim",
    initials: "SI",
    date: "2025-08-05",
    text: "Ensure The Plan Includes A Clear Governance Model.",
  },
  {
    id: 2,
    author: "Mona Hamed",
    initials: "MH",
    date: "2025-08-05",
    text: "The KPI framework needs alignment with strategic objectives.",
  },
];

export const recentActivitiesDetails = [
  { id: 1, text: "Roadmap_Version1.Docx Uploaded By Rami AlSharif", time: "5 Mins Ago" },
  { id: 2, text: "KPI_Framework.Xlsx Uploaded By Mona Hamed", time: "20 Mins Ago" },
  { id: 3, text: "Digital_Transformation_Plan.Pdf Approved By Advisory Team", time: "1 Hour Ago" },
];

export const leadersData = [
  { name: "Ahmed Khaled", role: "Project Lead", avatar: "AK" },
  { name: "Mona Hamed", role: "Document Preparer", avatar: "MH" },
  { name: "Rami AlSharif", role: "Technical Lead", avatar: "RA" },
];

export const overviewContent = {
  objective: "Develop comprehensive strategic plans for digital transformation aligned with organizational goals.",
  requirements: [
    "Define clear governance model for digital initiatives",
    "Establish KPI framework aligned with strategic objectives",
    "Create phased roadmap with measurable milestones",
  ],
  scope: "Covers all digital transformation initiatives across the organization including technology, processes, and people.",
};
