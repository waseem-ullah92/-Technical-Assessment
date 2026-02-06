'use client'
export default function Progress({ value }: { value: number }) {
  return (
    <div className="w-full bg-slate-200 rounded h-2">
      <div
        className="bg-green-500 h-2 rounded"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
