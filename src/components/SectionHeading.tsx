import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectionHeadingProps {
  title: string
  href: string
}

export function SectionHeading({ title, href }: SectionHeadingProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Link
        href={href}
        className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
      >
        View All
        <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  )
}
