import { Section, Badge } from '../ui'
import { siteContent } from '../../data/content'

export function Demo() {
  const { demo } = siteContent

  return (
    <Section id="demo" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          {demo.title}
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Простой процесс из трёх шагов
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {demo.steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">
              {step.title}
            </h3>
            <p className="text-secondary-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="bg-secondary-100 rounded-2xl aspect-video flex items-center justify-center">
          <div className="text-center text-secondary-400">
            <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Видео демонстрация</p>
          </div>
        </div>

        <div>
          <Badge className="mb-4">Возможности</Badge>
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">
            Всё для продуктивной работы
          </h3>
          <ul className="space-y-4">
            {demo.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-secondary-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
