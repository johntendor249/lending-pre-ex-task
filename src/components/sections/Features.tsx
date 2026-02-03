import type { IconName } from '../ui'
import { Section, Card, Icon } from '../ui'
import { siteContent } from '../../data/content'

export function Features() {
  const { features } = siteContent

  return (
    <Section id="features" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Почему выбирают нас
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Всё необходимое для эффективной работы вашей команды в одном месте
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title}>
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <Icon name={feature.icon as IconName} className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-secondary-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
