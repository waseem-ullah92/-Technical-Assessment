export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-slate-200 rounded w-2/3 max-w-md" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-24 bg-slate-200 rounded-[10px]" />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6 h-80 bg-slate-200 rounded-[10px]" />
        <div className="col-span-12 lg:col-span-6 h-80 bg-slate-200 rounded-[10px]" />
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 h-48 bg-slate-200 rounded-[10px]" />
        <div className="col-span-12 h-64 bg-slate-200 rounded-[10px]" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="h-48 bg-slate-200 rounded-[10px]" />
        <div className="h-48 bg-slate-200 rounded-[10px]" />
      </div>
    </div>
  );
}
