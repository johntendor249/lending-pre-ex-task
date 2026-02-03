import type { ReactNode } from 'react'
import { Container } from './Container'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient'
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-secondary-50',
  gradient: 'bg-gradient-to-br from-primary-50 to-white',
}

export function Section({
  id,
  children,
  className = '',
  background = 'white',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  )
}
