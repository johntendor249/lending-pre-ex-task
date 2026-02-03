import { Header } from './components/Header'
import {
  Hero,
  Features,
  Testimonials,
  Demo,
  Stats,
  Pricing,
  Cta,
  LeadForm,
  Faq,
  Contacts,
  Footer,
} from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Demo />
        <Stats />
        <Pricing />
        <Cta />
        <LeadForm />
        <Faq />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
