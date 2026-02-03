import type { FormEvent } from 'react'
import { useState } from 'react'
import { Section, Card, Button, Input } from '../ui'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePhone = (phone: string) => {
    if (!phone) return true
    return /^[\d\s+()-]{10,}$/.test(phone)
  }

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Некорректный email'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Некорректный телефон'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')

    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', formData)

    setStatus('success')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  if (status === 'success') {
    return (
      <Section id="lead-form" background="gray">
        <Card className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-2">Спасибо!</h3>
          <p className="text-secondary-600 mb-6">
            Мы получили вашу заявку и свяжемся с вами в ближайшее время.
          </p>
          <Button variant="outline" onClick={() => setStatus('idle')}>
            Отправить ещё
          </Button>
        </Card>
      </Section>
    )
  }

  return (
    <Section id="lead-form" background="gray">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Получите демо
          </h2>
          <p className="text-lg text-secondary-600">
            Оставьте заявку и мы покажем, как продукт решит ваши задачи
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Имя"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <Input
              label="Email *"
              type="email"
              placeholder="email@company.com"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) setErrors({ ...errors, email: undefined })
              }}
              error={errors.email}
            />

            <Input
              label="Телефон"
              type="tel"
              placeholder="+7 (999) 123-45-67"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value })
                if (errors.phone) setErrors({ ...errors, phone: undefined })
              }}
              error={errors.phone}
            />

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Сообщение
              </label>
              <textarea
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                rows={4}
                placeholder="Расскажите о вашей задаче..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Отправка...' : 'Отправить заявку'}
            </Button>

            <p className="text-xs text-secondary-500 text-center">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="#" className="text-primary-600 hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </Card>
      </div>
    </Section>
  )
}
