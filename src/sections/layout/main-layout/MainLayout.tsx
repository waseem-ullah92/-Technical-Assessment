"use client";

import { useState } from "react";
import { Sidebar } from "../sidebar";
import { Topbar } from "../topbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((prev) => !prev)}
      />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 sm:p-6 overflow-auto min-w-0">
          <div className="min-w-0 w-full">{children}</div>
        </main>
      </div>
    </div>
  )
}
