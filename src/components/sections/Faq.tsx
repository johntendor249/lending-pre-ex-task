import { useState } from 'react'
import { Section } from '../ui'
import { siteContent } from '../../data/content'

export function Faq() {
  const { faq } = siteContent
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
          Часто задаваемые вопросы
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Ответы на популярные вопросы о нашем продукте
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faq.map((item, index) => (
          <div
            key={index}
            className="border border-secondary-200 rounded-xl overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-secondary-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-secondary-900 pr-4">
                {item.question}
              </span>
              <svg
                className={`w-5 h-5 text-secondary-500 transition-transform flex-shrink-0 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-secondary-50 border-t border-secondary-200">
                <p className="text-secondary-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
