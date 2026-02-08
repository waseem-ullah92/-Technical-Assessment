"use client"

import { flexRender } from "@tanstack/react-table"
import { CustomTableI } from "./CustomTable.interface"
import { cn } from "@/shared/lib/cn"

export default function CustomTable<T>({
  table,
  hidePagination,
  className,
  embedded,
}: CustomTableI<T>) {
  const totalPages = table.getPageCount()
  const showPagination = !hidePagination && totalPages > 1

  return (
  <div
  className={cn(
    "bg-white min-w-0 w-full",
    embedded ? "rounded-none border-none" : "rounded-xl border border-[#E0E8ED]",
    className
  )}
  style={{ maxWidth: '100%', overflow: 'hidden' }}
>
  {/* Responsive Scroll Wrapper */}
  <div 
    className="overflow-x-auto"
    style={{ 
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'thin'
    }}
  >
    <table className="min-w-[900px] w-full text-sm">
      <thead className="bg-[#F5F8FA] border-b border-[#E0E8ED]">
        {table.getHeaderGroups().map((hg: any) => (
          <tr key={hg.id}>
            {hg.headers.map((header: any) => (
              <th
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                className="px-4 py-3.5 text-left cursor-pointer select-none font-semibold text-[#1D3557] whitespace-nowrap"
              >
                <span className="inline-flex items-center gap-1.5">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  <span className="text-[#8597A8] text-[10px]">
                    {header.column.getIsSorted() === "asc"
                      ? " ↑"
                      : header.column.getIsSorted() === "desc"
                      ? " ↓"
                      : " ↕"}
                  </span>
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row: any) => (
          <tr
            key={row.id}
            className="border-b border-[#E0E8ED] last:border-none hover:bg-slate-50/50"
          >
            {row.getVisibleCells().map((cell: any) => (
              <td key={cell.id} className="px-4 py-3 whitespace-nowrap">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {showPagination && (
    <div className="flex justify-between items-center p-3 border-t border-[#E0E8ED] bg-[#F5F8FA]">
      <span className="text-sm text-[#6B7280]">
        Page {table.getState().pagination.pageIndex + 1} of {totalPages}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1.5 border border-[#E0E8ED] rounded-lg text-sm font-medium text-[#1A202C] disabled:opacity-40 hover:bg-white transition-colors"
        >
          Prev
        </button>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1.5 border border-[#E0E8ED] rounded-lg text-sm font-medium text-[#1A202C] disabled:opacity-40 hover:bg-white transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )}
</div>

  )
}
