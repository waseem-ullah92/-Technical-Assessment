"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/cn";

import logoImage from "@/shared/images/Tahwul_01@3x 1.png";

type SidebarProps = {
  collapsed?: boolean;
  onToggle?: () => void;
};

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: "dashboard" },
  { label: "Details", path: "/details", icon: "reports" },
  { label: "Tracking", path: "/tracking", icon: "timeline" },
];

const iconClassName = "w-4 h-4 flex-shrink-0";
const iconStyle = { color: "#FFFFFF" };

const iconMap: Record<string, React.ReactNode> = {
  dashboard: (
    <svg className={iconClassName} style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  reports: (
    <svg className={iconClassName} style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 1h1m-1-1h1m-1 1h1m2-1h1m-1-1h1m-1 1h1m2-1h1m-1 1H9m2 0h1" />
    </svg>
  ),
  perspectives: (
    <svg className={iconClassName} style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  tasks: (
    <svg className={iconClassName} style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  timeline: (
    <svg className={iconClassName} style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M6 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
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
          <Image
            src={logoImage}
            alt="TAHWUL"
            width={100}
            height={40}
            className="object-contain object-left"
            priority
          />
        )}
        {collapsed && (
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <Image
              src={logoImage}
              alt="TAHWUL"
              width={100}
              height={40}
              className="h-8 w-auto max-w-full object-contain"
              priority
            />
          </div>
        )}
      </div>

      <nav className={cn("flex-1 p-4 space-y-2", collapsed && "px-2")}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path + item.label}
              href={item.path}
              prefetch={false}
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
