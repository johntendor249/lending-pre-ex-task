import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  highlighted?: boolean
}

export function Card({ children, className = '', highlighted = false }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-6
        ${highlighted
          ? 'ring-2 ring-primary-500 shadow-xl'
          : 'border border-secondary-200 shadow-sm hover:shadow-md'
        }
        transition-shadow duration-200
        ${className}
      `}
    >
      {children}
    </div>
  )
}
