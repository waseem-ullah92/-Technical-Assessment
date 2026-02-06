import { TrackingTable, TrackingSummary } from "@/sections/tracking";

export default function TrackingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Tracking</h1>
        <p className="text-sm text-slate-500 mt-1">
          Monitor document status and compliance tracking
        </p>
      </div>

      <TrackingSummary />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TrackingTable />
        </div>
        <aside className="space-y-4">
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-3">Status Overview</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Approved</span>
                <span className="font-medium text-green-600">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Pending Review</span>
                <span className="font-medium text-amber-600">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">In Progress</span>
                <span className="font-medium text-slate-600">1</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
