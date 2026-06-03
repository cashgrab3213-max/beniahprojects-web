import { Link } from 'react-router-dom'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-dark text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Logo />
              <span className="text-white font-bold text-lg">BENIAH</span>
            </Link>
            <p className="text-sm text-gray-400">
              PMO líder en construcción en el norte de México
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent-orange transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent-orange transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/portafolio" className="hover:text-accent-orange transition-colors">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-accent-orange transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:contacto@beniahprojects.com"
                className="flex items-center space-x-2 hover:text-accent-orange transition-colors"
              >
                <Mail size={16} />
                <span>contacto@beniahprojects.com</span>
              </a>
              <a
                href="tel:+528188688391"
                className="flex items-center space-x-2 hover:text-accent-orange transition-colors"
              >
                <Phone size={16} />
                <span>+52 81 88688391</span>
              </a>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Monterrey, Nuevo León<br />México</span>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/beniahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-primary-900 hover:bg-accent-orange transition-colors"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/beniahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-primary-900 hover:bg-accent-orange transition-colors"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} BENIAH Projects. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
