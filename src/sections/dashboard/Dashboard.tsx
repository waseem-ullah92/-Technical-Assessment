import { SummaryCards } from "@/sections/dashboard/summary-card";
import RecentActivities from "@/sections/dashboard/recent-activities/RecentActivities";
import { AuditReadiness } from "@/sections/dashboard/audit-readiness";
import { ProjectTimeline } from "@/sections/dashboard/project-timeline";
import ProgressByPerspective from "@/sections/dashboard/progress-by-perspective/ProgressByPerspectiveDynamic";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Alpha Transformation Strategic Planning
      </h1>

      <ProjectTimeline />

      <SummaryCards />

      <ProgressByPerspective />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivities />
        <AuditReadiness />
      </div>
    </div>
  );
}
