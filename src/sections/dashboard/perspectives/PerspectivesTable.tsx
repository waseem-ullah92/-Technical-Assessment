"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { CustomTable } from "@/shared/ui/table";
import { perspectivesTableData } from "@/mock/dashboard.mock";
import { cn } from "@/shared/lib/cn";

type PerspectiveRow = (typeof perspectivesTableData)[0];

const columnHelper = createColumnHelper<PerspectiveRow>();

const columns = [
  columnHelper.accessor("name", {
    header: "Project",
    cell: (info) => (
      <span className="font-medium text-[#1A202C]">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span
          className={cn(
            "inline-flex px-2.5 py-1 text-xs font-medium rounded-full",
            status === "In Progress"
              ? "bg-blue-100 text-blue-700"
              : status === "On Track"
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          )}
        >
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("progress", {
    header: "Progress",
    cell: (info) => {
      const value = info.getValue();
      return (
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-[#F5F8FA] rounded-full overflow-hidden max-w-[80px]">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium text-[#1A202C]">{value}%</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("timeframe", {
    header: "Timeframe",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("owner", {
    header: "Owner",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => (
      <button className="text-sm font-medium text-[#4CAF50] hover:underline">
        View
      </button>
    ),
  }),
];

export default function PerspectivesTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: perspectivesTableData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 5 } },
  });

  return <CustomTable table={table} />;
}
