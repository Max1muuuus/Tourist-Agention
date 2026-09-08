import { ArrowRight, HeartHandshake, Headphones, ShieldCheck, Sparkles, PlaneTakeoff, MapPinned } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import TourCard from '../components/TourCard'
import { tours } from '../data/tours'

const destinations = tours.slice(0, 6)
const benefits = [
  {
    icon: Sparkles,
    title: 'Лише ті маршрути, які реально хочеться пережити',
    text: 'Ми не продаємо “картинку”, а підбираємо напрямки, у яких є атмосфера, якість і комфорт від першого дня до повернення додому.',
  },
  {
    icon: HeartHandshake,
    title: 'Підходимо індивідуально',
    text: 'Слухаємо, що вам важливо: море, гори, сімейний відпочинок, романтика чи активний маршрут, і складаємо варіант під ваш ритм життя.',
  },
  {
    icon: Headphones,
    title: 'Підтримка без стресу',
    text: 'Від моменту звернення до повернення ви знаєте, кому написати, якщо знадобиться допомога: бронювання, зміни, питання в дорозі.',
  },
  {
    icon: ShieldCheck,
    title: 'Перевірені партнери і прозорий сервіс',
    text: 'Працюємо лише з надійними готелями, перевізниками та місцевими командами, щоб ви могли спокійно насолоджуватися відпочинком.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Зручний переліт і логістика',
    text: 'Дбаємо про оптимальні рейси, час прибуття і комфорт у дорозі, щоб ви не втрачали сили на дрібниці.',
  },
  {
    icon: MapPinned,
    title: 'Побачити більше, ніж “звичайний тур”',
    text: 'У маршруті є місця, які не виносять у туристичні буклети: локальні смаки, особливі маршрути, враження, що запам’ятовуються надовго.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image" />
        <div className="container hero-content">
          <span className="hero-kicker">Подорожуйте ширше</span>
          <h1>
            Подорож починається з <em>першого кроку</em>
          </h1>
          <p>
            Ми перетворюємо бажання побачити світ на продумані маршрути, де кожна деталь працює на ваші враження.
          </p>
          <div className="hero-actions">
            <Button to="/tours">
              Знайти свою подорож <ArrowRight size={18} />
            </Button>
            <Button to="/roulette" variant="ghost">
              Куди полетіти? <span className="play-icon">↗</span>
            </Button>
          </div>
        </div>
        <div className="hero-note">
          <span>01</span>
          <span>Подорожі, підібрані з турботою</span>
        </div>
      </section>

      <section className="section destinations">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Натхнення поруч</span>
              <h2>Популярні напрямки</h2>
            </div>
            <Link className="text-link" to="/tours">
              Дивитися всі тури <ArrowRight size={17} />
            </Link>
          </div>

          <div className="tour-grid home-tour-grid">
            {destinations.map((tour, index) => (
              <ScrollReveal key={tour.id} delay={index * 60}>
                <TourCard tour={tour} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits" id="why-us">
        <div className="container">
          <div className="benefits-intro">
            <span className="eyebrow">Чому саме ми</span>
            <h2>
              Від ідеї до квитків — <em>разом</em>
            </h2>
            <p>
              Подорож має дарувати передчуття радості, а не список організаційних справ. Ми беремо їх на себе.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <ScrollReveal key={title} delay={index * 80}>
                <article className="benefit">
                  <span className="benefit-number">0{index + 1}</span>
                  <Icon size={25} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Час пакувати валізи</span>
            <h2>
              Готові до нової <em>пригоди?</em>
            </h2>
          </div>
          <Button to="/contacts" variant="light">
            Поговорити про подорож <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </main>
  )
}
