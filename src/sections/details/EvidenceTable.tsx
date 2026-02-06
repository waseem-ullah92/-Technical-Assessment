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
import { evidenceTableData } from "@/mock/details.mock";
import { cn } from "@/shared/lib/cn";

type EvidenceRow = (typeof evidenceTableData)[0];

const columnHelper = createColumnHelper<EvidenceRow>();

const columns = [
  columnHelper.accessor("documentNumber", {
    header: "Document Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("documentName", {
    header: "Document Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("documentLead", {
    header: "Document Lead",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("documentPreparer", {
    header: "Document Preparer",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("dueDate", {
    header: "Due Date",
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
              : "bg-amber-100 text-amber-700"
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

  return <CustomTable table={table} />;
}
