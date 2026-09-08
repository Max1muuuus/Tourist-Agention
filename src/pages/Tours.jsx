import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import TourCard from '../components/TourCard'
import ScrollReveal from '../components/ScrollReveal'
import { tours } from '../data/tours'

const filters = ['Всі', 'Море', 'Гори', 'Екскурсії', 'Сімейні', 'Романтичні']

export default function Tours() {
    const [active, setActive] = useState('Всі')

    const filtered = useMemo(() => {
        if (active === 'Всі') {
            return tours
        }

        return tours.filter((tour) => tour.type === active)
    }, [active])

    return (
        <main>
            <section className="page-hero tours-hero">
                <div className="container page-hero-content">
                    <span className="eyebrow">Каталог вражень</span>
                    <h1>
                        Оберіть свою
                        <br />
                        <em>точку на карті</em>
                    </h1>
                    <p>Колекція маршрутів, які хочеться прожити, а не просто побачити на фото.</p>
                </div>
            </section>

            <section className="section tours-section">
                <div className="container">
                    <div className="filter-row">
                        <div className="filter-label">
                            <SlidersHorizontal size={17} /> Фільтрувати
                        </div>

                        <div className="filters">
                            {filters.map((filter) => (
                                <button
                                    className={active === filter ? 'active' : ''}
                                    key={filter}
                                    onClick={() => setActive(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <span className="tour-count">{filtered.length} напрямків</span>
                    </div>

                    <div className="tour-grid full-tour-grid">
                        {filtered.map((tour, index) => (
                            <ScrollReveal key={tour.id} delay={index % 4 * 60}>
                                <TourCard tour={tour} />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
