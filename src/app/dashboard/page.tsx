import { SummaryCards } from "@/sections/dashboard/summary-card";
import { ProjectTimeline } from "@/sections/dashboard/project-timeline";
import ProgressByPerspective from "@/sections/dashboard/progress-by-perspective/ProgressByPerspective";
import RecentActivities from "@/sections/dashboard/recent-activities/RecentActivities";
import { AuditReadiness } from "@/sections/dashboard/audit-readiness";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

      <SummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProjectTimeline />
        <ProgressByPerspective />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities />
        <AuditReadiness />
      </div>
    </div>
  );
}
