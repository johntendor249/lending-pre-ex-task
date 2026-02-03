import { Section, Card, Button, Badge } from '../ui'
import { siteContent } from '../../data/content'

export function Pricing() {
  const { pricing } = siteContent

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="pricing" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Прозрачные цены
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Выберите план, который подходит вашей команде. Отменить можно в любой момент.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricing.map((plan) => (
          <Card key={plan.name} highlighted={plan.highlighted} className="flex flex-col">
            {plan.highlighted && (
              <Badge variant="accent" className="self-start mb-4">
                Популярный выбор
              </Badge>
            )}
            <h3 className="text-xl font-bold text-secondary-900 mb-1">
              {plan.name}
            </h3>
            <p className="text-secondary-500 mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-secondary-900">
                {plan.price === '0' ? 'Бесплатно' : plan.price !== 'По запросу' ? `₽${plan.price}` : plan.price}
              </span>
              {plan.period && (
                <span className="text-secondary-500">/{plan.period}</span>
              )}
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-secondary-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={plan.highlighted ? 'primary' : 'outline'}
              className="w-full"
              onClick={scrollToForm}
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      <p className="text-center text-sm text-secondary-500 mt-8">
        Все цены указаны без НДС. 14 дней бесплатного пробного периода для всех платных планов.
      </p>
    </Section>
  )
}
