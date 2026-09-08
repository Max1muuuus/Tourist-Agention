import { ArrowUpRight, Clock3 } from 'lucide-react'
import Button from './Button'

export default function TourCard({ tour }) {
  return (
    <article className="tour-card">
      <div className="tour-image-wrap">
        <img src={tour.image} alt={`${tour.country}: ${tour.title}`} loading="lazy" />

        <div className="tour-overlay">
          <Button to="/contacts" variant="light">
            Переглянути <ArrowUpRight size={16} />
          </Button>
        </div>

        <span className="tour-type">{tour.type}</span>
      </div>

      <div className="tour-card-body">
        <span className="eyebrow">{tour.country}</span>
        <h3>{tour.title}</h3>

        <div className="tour-meta">
          <span>
            <Clock3 size={15} /> {tour.days} днів
          </span>
          <strong>{tour.price}</strong>
        </div>

        <Button to="/contacts" variant="outline">
          Детальніше <ArrowUpRight size={16} />
        </Button>
      </div>
    </article>
  )
}
