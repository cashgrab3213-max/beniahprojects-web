import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-neutral-dark to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img 
              src="/src/assets/Logo.png" 
              alt="BENIAH Projects" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Especialistas en gestión profesional de proyectos de construcción.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent-orange">Navegación</h3>
            <nav className="space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors text-sm">
                Servicios
              </Link>
              <Link to="/portafolio" className="text-gray-400 hover:text-white transition-colors text-sm">
                Proyectos
              </Link>
              <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-accent-orange">Contacto</h3>
            <div className="space-y-3">
              <a
                href="tel:+528188688391"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone size={16} />
                <span>+52 81 88688391</span>
              </a>
              <a
                href="mailto:contacto@beniahprojects.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail size={16} />
                <span>contacto@beniahprojects.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Monterrey, Nuevo León</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Clock size={16} />
                <span>Lun - Vie: 8:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-accent-orange">Redes</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/beniahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent-orange hover:bg-accent-orange-dark transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/beniahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent-orange hover:bg-accent-orange-dark transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} BENIAH Projects. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
