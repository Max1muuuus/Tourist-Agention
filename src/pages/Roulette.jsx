import { useState } from 'react'
import { Dices, RotateCw, ArrowRight } from 'lucide-react'
import Button from '../components/Button'

const destinations = [
    'Туреччина',
    'Єгипет',
    'Греція',
    'Іспанія',
    'Італія',
    'Франція',
    'Грузія',
    'Чорногорія',
    'Таїланд',
    'Карпати',
]

export default function Roulette() {
    const [result, setResult] = useState('')
    const [spinning, setSpinning] = useState(false)

    const spin = () => {
        if (spinning) {
            return
        }

        setSpinning(true)
        setResult('')

        window.setTimeout(() => {
            const chosen = destinations[Math.floor(Math.random() * destinations.length)]
            setResult(chosen)
            setSpinning(false)
        }, 1800)
    }

    return (
        <main>
            <section className="roulette-page">
                <div className="roulette-copy">
                    <span className="eyebrow">Трохи магії</span>
                    <h1>
                        Куди <em>полетіти?</em>
                    </h1>
                    <p>
                        Закрийте очі, довіртеся випадку — і дозвольте нам обрати наступну історію для вашого альбому.
                    </p>
                </div>

                <div className={`roulette-wheel-wrap ${spinning ? 'is-spinning' : ''}`}>
                    <div className="wheel-pointer">▼</div>

                    <div className="roulette-wheel">
                        {destinations.map((destination, index) => (
                            <span key={destination} style={{ '--angle': `${index * 36}deg` }}>
                                {destination}
                            </span>
                        ))}

                        <div className="wheel-center">
                            {spinning ? <RotateCw className="spin-icon" /> : <Dices />}
                        </div>
                    </div>
                </div>

                <div className="roulette-actions">
                    <Button onClick={spin} disabled={spinning}>
                        {spinning ? 'Обираємо...' : result ? 'Спробувати ще раз' : 'Куди летимо?'}
                        <Dices size={18} />
                    </Button>

                    {result && (
                        <Button to="/tours" variant="outline">
                            Переглянути тури <ArrowRight size={17} />
                        </Button>
                    )}
                </div>

                {result && (
                    <div className="roulette-result">
                        <span>Ваш напрямок:</span>
                        <strong>{result}</strong>
                    </div>
                )}
            </section>
        </main>
    )
}
