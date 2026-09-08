import { Link } from 'react-router-dom'
import { Camera, Globe2, Send, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><Link className="logo logo-light" to="/"><span className="logo-mark">М</span><span>Мандри<span className="logo-accent">UA</span></span></Link><p>Подорожі, які залишаються з вами назавжди.</p><div className="socials"><a href="https://instagram.com" aria-label="Instagram"><Camera size={18} /></a><a href="https://facebook.com" aria-label="Facebook"><Globe2 size={18} /></a><a href="https://t.me" aria-label="Telegram"><Send size={18} /></a></div></div>
    <div><h3>Навігація</h3><div className="footer-links"><Link to="/">Головна</Link><Link to="/about">Про нас</Link><Link to="/team">Команда</Link><Link to="/tours">Тури</Link><Link to="/contacts">Контакти</Link></div></div>
    <div><h3>Зв’язок</h3><div className="footer-contact"><span><MapPin size={16} /> Київ, вул. Велика Васильківська, 72</span><a href="tel:+380671234567"><Phone size={16} /> +38 (067) 123-45-67</a><a href="mailto:hello@mandry.ua"><Mail size={16} /> hello@mandry.ua</a></div></div>
  </div><div className="container footer-bottom"><span>© 2024 МандриUA. Подорожуйте з сенсом.</span><span>Створюємо маршрути з турботою</span></div></footer>
}
