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
import { Card } from "@/shared/ui/card";
import { trackingRows } from "@/mock/tracking.mock";
import { cn } from "@/shared/lib/cn";

type TrackingRow = (typeof trackingRows)[0];

const columnHelper = createColumnHelper<TrackingRow>();

const columns = [
  columnHelper.accessor("document", {
    header: "Document",
    cell: (info) => (
      <span className="text-[#1D3557] hover:text-[#4CAF50] hover:underline cursor-pointer transition-colors">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span
          className={cn(
            "inline-flex px-3 py-1.5 text-xs font-medium rounded-full justify-center",
            status === "Approved"
              ? "bg-green-500 text-white"
              : status === "Pending Review"
              ? "bg-amber-500 text-white"
              : status === "In Progress"
              ? "bg-blue-500 text-white"
              : "bg-slate-400 text-white"
          )}
        >
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("owner", {
    header: "Owner",
    cell: (info) => (
      <span className="text-[#1D3557]">{info.getValue()}</span>
    ),
  }),
];

export function TrackingTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: trackingRows,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <Card className="p-0 overflow-hidden">
      <CustomTable table={table} embedded />
    </Card>
  );
}
