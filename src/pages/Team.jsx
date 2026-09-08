import ScrollReveal from '../components/ScrollReveal'
import TeamCard from '../components/TeamCard'
import { team } from '../data/team'

export default function Team() { return <main><section className="page-hero team-hero"><div className="container page-hero-content"><span className="eyebrow">Люди МандриUA</span><h1>Знайомтеся з тими,<br /><em>хто любить подорожі</em></h1><p>Команда консультантів, дослідників і мрійників, яка допомагає вам подорожувати впевненіше.</p></div></section><section className="section team-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Наша команда</span><h2>Ваші люди у світі мандрів</h2></div><p>У кожного з нас свій улюблений маршрут. Разом ми знаємо їх достатньо, щоб знайти ваш.</p></div><div className="team-grid">{team.map((member, index) => <ScrollReveal key={member.name} delay={index * 50}><TeamCard member={member} /></ScrollReveal>)}</div></div></section></main> }
