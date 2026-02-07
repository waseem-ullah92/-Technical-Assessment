"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/cn";

type SidebarProps = {
  collapsed?: boolean;
  onToggle?: () => void;
};

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: "dashboard" },
  { label: "Details", path: "/details/1", icon: "perspectives" },
  { label: "Tracking", path: "/tracking", icon: "tasks" },
];

const iconMap: Record<string, React.ReactNode> = {
  dashboard: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  ),
  perspectives: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  tasks: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
};

const ChevronLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "relative flex-shrink-0 bg-[#1D3557] text-white flex flex-col min-w-0 transition-[width] duration-200 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className={cn("p-5 border-b border-[#1D3557]", collapsed && "px-3 py-4")}>
        {!collapsed && (
          <>
            <h2 className="text-xl font-bold">TAHWUL</h2>
            <p className="text-xs text-white/70 mt-0.5">Leading Digital Transformation</p>
          </>
        )}
        {collapsed && (
          <div className="w-8 h-8 flex items-center justify-center">
            <span className="text-lg font-bold">T</span>
          </div>
        )}
      </div>

      <nav className={cn("flex-1 p-4 space-y-2", collapsed && "px-2")}>
        {navItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path === "/details/1" && pathname.startsWith("/details"));
          return (
            <Link
              key={item.path + item.label}
              href={item.path}
              className={cn(
                "flex items-center gap-[10px] h-10 rounded-[8px] text-white text-[14px] leading-4 font-medium capitalize",
                collapsed ? "justify-center px-0 w-10" : "px-[10px] w-[208px]",
                isActive
                  ? "bg-[#98AEC01A]"
                  : "bg-transparent hover:bg-[#98AEC01A]"
              )}
              title={collapsed ? item.label : undefined}
            >
              {iconMap[item.icon]}
              {!collapsed && <span className="align-middle">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={onToggle}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="absolute w-8 h-8 rounded-full bg-white flex items-center justify-center p-2 gap-2.5 text-slate-700 hover:bg-slate-50 transition-colors z-10"
        style={{
          top: 14,
          left: collapsed ? 16 : 240,
          boxShadow: "0px 0px 2px 0px #0000001A",
        }}
      >
        {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </button>
    </aside>
  );
}
