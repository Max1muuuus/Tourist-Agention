import { useEffect, useState } from 'react'
import { Clock3, Mail, MapPin, Phone, Send, Camera, Globe2 } from 'lucide-react'
import Button from '../components/Button'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  destination: '',
  message: '',
}

export default function Contacts() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    if (!seconds) {
      return undefined
    }

    const interval = setInterval(() => {
      setSeconds((value) => (value <= 1 ? 0 : value - 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])

  const update = (event) => {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const submit = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!form.name.trim()) {
      nextErrors.name = 'Вкажіть, будь ласка, ваше ім’я'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Введіть коректний email'
    }

    if (!form.phone.trim()) {
      nextErrors.phone = 'Вкажіть номер телефону'
    }

    if (!form.message.trim()) {
      nextErrors.message = 'Напишіть кілька слів про вашу подорож'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setSent(true)
    setSeconds(60)
    localStorage.setItem('mandry-contact', JSON.stringify(form))
    setForm(initialForm)
  }

  return (
    <main>
      <section className="page-hero contacts-hero">
        <div className="container page-hero-content">
          <span className="eyebrow">Будемо на зв’язку</span>
          <h1>
            Розкажіть нам
            <br />
            <em>про свою мрію</em>
          </h1>
          <p>Залиште заявку, і ми підготуємо перші ідеї вашої подорожі.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Контакти</span>
            <h2>
              Почнемо з кави
              <br />
              та хорошого <em>плану</em>
            </h2>
            <p>Напишіть або зателефонуйте нам. Відповідаємо протягом робочого дня.</p>

            <div className="contact-list">
              <a href="https://maps.google.com">
                <MapPin />
                <span>
                  <strong>Адреса</strong>Київ, вул. Велика Васильківська, 72
                </span>
              </a>

              <a href="tel:+380671234567">
                <Phone />
                <span>
                  <strong>Телефон</strong>+38 (067) 123-45-67
                </span>
              </a>

              <a href="mailto:hello@mandry.ua">
                <Mail />
                <span>
                  <strong>Email</strong>hello@mandry.ua
                </span>
              </a>

              <div>
                <Clock3 />
                <span>
                  <strong>Графік роботи</strong>Пн–Пт, 09:00–19:00
                </span>
              </div>
            </div>

            <div className="contact-socials">
              <span>Ми в соцмережах</span>
              <a href="https://instagram.com">
                <Camera size={18} />
              </a>
              <a href="https://facebook.com">
                <Globe2 size={18} />
              </a>
              <a href="https://t.me">
                <Send size={18} />
              </a>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h2>Дякуємо!</h2>
                <p>Ми зв’яжемося з вами найближчим часом.</p>

                {seconds > 0 ? (
                  <span>Запит буде оброблено через: {seconds} сек</span>
                ) : (
                  <span>Час очікування завершено.</span>
                )}

                <Button to="/tours" variant="outline">
                  Поки що подивитися тури
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={submit} noValidate>
                <h2>Залишити заявку</h2>
                <p>Заповніть форму, і ми повернемося з відповіддю.</p>

                <div className="form-row">
                  <label>
                    Ім’я
                    <input
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Ваше ім’я"
                    />
                    {errors.name && <small>{errors.name}</small>}
                  </label>

                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@example.com"
                    />
                    {errors.email && <small>{errors.email}</small>}
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Телефон
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      placeholder="+380 ..."
                    />
                    {errors.phone && <small>{errors.phone}</small>}
                  </label>

                  <label>
                    Бажаний напрям
                    <select name="destination" value={form.destination} onChange={update}>
                      <option value="">Оберіть напрям</option>
                      <option>Море</option>
                      <option>Гори</option>
                      <option>Європа</option>
                      <option>Ще не знаю</option>
                    </select>
                  </label>
                </div>

                <label>
                  Повідомлення
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="Розкажіть, яку подорож ви бажаєте..."
                    rows="5"
                  />
                  {errors.message && <small>{errors.message}</small>}
                </label>

                <Button type="submit">
                  Надіслати запит <Send size={17} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Карта розташування МандриUA"
          src="https://www.openstreetmap.org/export/embed.html?bbox=30.50%2C50.43%2C30.54%2C50.46&amp;layer=mapnik"
          loading="lazy"
        />
      </section>
    </main>
  )
}
