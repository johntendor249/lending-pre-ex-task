import { Section, Card } from '../ui'
import { siteContent } from '../../data/content'

export function Testimonials() {
  const { testimonials, clients } = siteContent

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Нам доверяют
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Отзывы наших клиентов говорят сами за себя
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {clients.map((client) => (
          <div
            key={client}
            className="px-6 py-3 bg-white rounded-lg border border-secondary-200 text-secondary-500 font-medium"
          >
            {client}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-secondary-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-secondary-500">
                  {testimonial.role}
                </div>
              </div>
            </div>
            <p className="text-secondary-600 italic">"{testimonial.text}"</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
