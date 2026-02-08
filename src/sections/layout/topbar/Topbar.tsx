"use client";

export default function Topbar() {
  return (
    <header
      className="
        h-[60px] flex-shrink-0
        bg-white border-b border-[#E0E8ED]
        flex items-center px-6 justify-between
        gap-3
      "
    >
      <div className="w-full sm:w-[318px] h-[34px]">
        <div className="relative w-full h-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </span>
          <input
            type="search"
            placeholder="Search"
            className="w-full h-full pl-9 pr-4 bg-[#F5F8FA] border border-[#E0E8ED] rounded-[8px] text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors relative"
          aria-label="Notifications"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#F04438]" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 pl-2 border-l border-slate-200"
          aria-label="User menu"
        >
          <div className="flex items-center gap-2.5 py-2 px-3 rounded-[12px] bg-[#F5F8FA] hover:bg-[#E8EDF2] transition-colors">
            <img
              src="https://i.pravatar.cc/150?u=mo"
              alt="Mohamed"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <span className="hidden sm:inline text-sm font-medium text-[#1D3557]">Mohamed</span>
            <svg
              className="w-4 h-4 text-[#8597A8] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>
      </div>
    </header>
  );
}