import { Section } from '../ui'
import { siteContent } from '../../data/content'

export function Stats() {
  const { stats } = siteContent

  return (
    <Section background="gradient">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Цифры говорят за нас
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
              {stat.value}
            </div>
            <div className="text-secondary-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <div className="px-4 py-2 bg-white rounded-lg border border-secondary-200 flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-medium text-secondary-700">Product Hunt #1</span>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg border border-secondary-200 flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-sm font-medium text-secondary-700">SOC 2 Certified</span>
        </div>
        <div className="px-4 py-2 bg-white rounded-lg border border-secondary-200 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium text-secondary-700">GDPR Compliant</span>
        </div>
      </div>
    </Section>
  )
}
