import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Portafolio from './pages/Portafolio'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
