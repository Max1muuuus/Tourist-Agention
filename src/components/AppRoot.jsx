import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Tours from '../pages/Tours'
import Contacts from '../pages/Contacts'
import Roulette from '../pages/Roulette'

function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.replace('#', ''))

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                return
            }
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [pathname, hash])

    return null
}

export default function AppRoot() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="app-shell">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/tours" element={<Tours />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/roulette" element={<Roulette />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}
