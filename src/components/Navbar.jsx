import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Contacto', path: '/contacto' },
  ]

  return (
    <nav className="sticky top-0 z-1000 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-900 to-accent-orange bg-clip-text text-transparent">
              BENIAH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-gray-700 font-medium hover:text-accent-orange transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Social Icons & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/beniahprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              title="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/beniahprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex space-x-2 px-4 pt-2">
              <a
                href="https://www.facebook.com/beniahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/beniahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
