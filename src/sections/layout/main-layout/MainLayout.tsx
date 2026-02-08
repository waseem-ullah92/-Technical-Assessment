"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "../sidebar";
import { Topbar } from "../topbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  // Default collapsed state based on screen size
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Set initial state based on screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setSidebarCollapsed(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((prev) => !prev)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto overflow-x-hidden min-w-0">
          <div className="min-w-0 w-full max-w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}