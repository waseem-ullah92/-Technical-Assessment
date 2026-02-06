"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { CustomTable } from "@/shared/ui/table";
import { trackingRows } from "@/mock/tracking.mock";
import { cn } from "@/shared/lib/cn";

type TrackingRow = (typeof trackingRows)[0];

const columnHelper = createColumnHelper<TrackingRow>();

const columns = [
  columnHelper.accessor("document", {
    header: "Document",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => {
      const status = info.getValue();
      return (
        <span
          className={cn(
            "inline-flex px-2.5 py-1 text-xs font-medium rounded-full",
            status === "Approved"
              ? "bg-green-100 text-green-700"
              : status === "Pending Review"
              ? "bg-amber-100 text-amber-700"
              : "bg-slate-100 text-slate-700"
          )}
        >
          {status}
        </span>
      );
    },
  }),
  columnHelper.accessor("owner", {
    header: "Owner",
    cell: (info) => info.getValue(),
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
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <CustomTable table={table} />
    </div>
  );
}
