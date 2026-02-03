import { Container } from '../ui'
import { siteContent } from '../../data/content'

export function Footer() {
  const { footer, brand } = siteContent

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-white hover:text-primary-400 transition-colors">
              {brand.name}
            </a>
            <p className="text-secondary-400 mt-1 text-sm">{footer.copyright}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-secondary-400 hover:text-white transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
