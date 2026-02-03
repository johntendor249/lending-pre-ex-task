import { useState } from 'react'
import { Container } from './ui'
import { Button } from './ui'
import { siteContent } from '../data/content'

const navLinks = [
  { label: 'Преимущества', href: '#features' },
  { label: 'Как работает', href: '#demo' },
  { label: 'Цены', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-100">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl font-bold text-primary-600">
            {siteContent.brand.name}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary-600 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
              {siteContent.hero.cta.primary}
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-secondary-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-secondary-600 hover:text-primary-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                className="mt-2"
                onClick={() => {
                  setMobileMenuOpen(false)
                  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {siteContent.hero.cta.primary}
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}
