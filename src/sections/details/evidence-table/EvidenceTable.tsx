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
import { evidenceTableData } from "@/mock/details.mock";
import { cn } from "@/shared/lib/cn";

type EvidenceRow = (typeof evidenceTableData)[0];

const columnHelper = createColumnHelper<EvidenceRow>();

const columns = [
  columnHelper.accessor("documentNumber", {
    header: "Document Number",
    cell: (info) => (
      <span className="text-[#1D3557]">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("documentName", {
    header: "Document Name",
    cell: (info) => (
      <span className="text-[#1D3557] hover:text-[#4CAF50] hover:underline cursor-pointer transition-colors">
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor("documentLead", {
    header: "Document Lead",
    cell: (info) => (
      <span className="text-[#1D3557]">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("documentPreparer", {
    header: "Document Preparer",
    cell: (info) => (
      <span className="text-[#1D3557]">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => (
      <span className="text-[#1D3557]">{info.getValue()}</span>
    ),
  }),
  columnHelper.accessor("dueDate", {
    header: "Due Date",
    cell: (info) => (
      <span className="text-[#1D3557]">{info.getValue()}</span>
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
              : "bg-slate-400 text-white"
          )}
        >
          {status}
        </span>
      );
    },
  }),
];

export default function EvidenceTable() {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: evidenceTableData,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <Card className="p-0 min-w-0 w-full max-w-full overflow-x-auto">
      <div className="min-w-max">
        <CustomTable table={table} embedded hidePagination />
      </div>
    </Card>
  );
}