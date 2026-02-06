import { cn } from "@/shared/lib/cn"

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "bg-white p-5 rounded-[10px] border border-[#E0E8ED]",
        className
      )}
    >
      {children}
    </div>
  )
}
