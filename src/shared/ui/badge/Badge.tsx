export function Badge({ text }: { text: string }) {
  return (
    <span className="px-2 py-1 text-xs rounded bg-slate-100">
      {text}
    </span>
  )
}
