import { Section, Button } from '../ui'
import { siteContent } from '../../data/content'

export function Cta() {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section background="gradient">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Готовы начать?
        </h2>
        <p className="text-lg text-secondary-600 mb-8">
          Присоединяйтесь к тысячам команд, которые уже работают эффективнее с {siteContent.brand.name}.
          Начните бесплатно сегодня.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToForm}>
            {siteContent.hero.cta.primary}
          </Button>
          <Button variant="secondary" size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            Сравнить планы
          </Button>
        </div>
      </div>
    </Section>
  )
}
