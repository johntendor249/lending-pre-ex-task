import { Section, Button, Badge } from '../ui'
import { siteContent } from '../../data/content'

export function Hero() {
  const { hero } = siteContent

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section background="gradient" className="pt-32 md:pt-40">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Badge variant="accent" className="mb-4">Новинка 2026</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={scrollToForm}>
              {hero.cta.primary}
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToDemo}>
              {hero.cta.secondary}
            </Button>
          </div>

          <div className="flex gap-8 mt-10 pt-10 border-t border-secondary-200">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-4 aspect-video flex items-center justify-center border border-secondary-100">
            <div className="text-center text-secondary-400">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p>Скриншот продукта</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
            Попробуйте бесплатно
          </div>
        </div>
      </div>
    </Section>
  )
}
