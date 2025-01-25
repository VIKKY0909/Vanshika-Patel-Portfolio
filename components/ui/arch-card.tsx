import { cn } from "@/lib/utils"

interface ArchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ArchCard({ children, className, ...props }: ArchCardProps) {
  return (
    <div className={cn("arch-frame", className)} {...props}>
      {children}
    </div>
  )
}