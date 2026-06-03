import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoProyecto: '',
    presupuesto: '',
    mensaje: '',
    terminos: false,
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar campos requeridos
    if (!formData.nombre || !formData.email || !formData.tipoProyecto || !formData.mensaje || !formData.terminos) {
      alert('Por favor completa todos los campos requeridos')
      return
    }

    // Crear mailto link
    const asunto = `Nueva Consulta de ${formData.nombre}`
    const cuerpo = `
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Empresa: ${formData.empresa}
Tipo de Proyecto: ${formData.tipoProyecto}
Presupuesto: ${formData.presupuesto}

Mensaje:
${formData.mensaje}
    `.trim()

    const mailtoLink = `mailto:contacto@beniahprojects.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
    window.location.href = mailtoLink

    setEnviado(true)
    setTimeout(() => {
      setEnviado(false)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        tipoProyecto: '',
        presupuesto: '',
        mensaje: '',
        terminos: false,
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-900 to-accent-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-white text-opacity-90">
            Cuéntanos sobre tu proyecto
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-neutral-dark mb-8">
                Información de Contacto
              </h2>

              {/* Teléfono */}
              <div className="mb-8 p-6 bg-neutral-light rounded-lg border border-gray-200 hover:border-accent-orange transition-colors">
                <div className="flex items-start space-x-4">
                  <Phone className="text-accent-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-1">Teléfono</h3>
                    <a
                      href="tel:+528188688391"
                      className="text-accent-orange font-semibold hover:text-accent-orange-dark"
                    >
                      +52 81 88688391
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Disponible de Lunes a Viernes, 8:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 p-6 bg-neutral-light rounded-lg border border-gray-200 hover:border-accent-orange transition-colors">
                <div className="flex items-start space-x-4">
                  <Mail className="text-accent-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-1">Email</h3>
                    <a
                      href="mailto:contacto@beniahprojects.com"
                      className="text-accent-orange font-semibold hover:text-accent-orange-dark"
                    >
                      contacto@beniahprojects.com
                    </a>
                    <p className="text-sm text-gray-600 mt-2">
                      Respuesta en 24 horas máximo
                    </p>
                  </div>
                </div>
              </div>

              {/* Ubicación */}
              <div className="mb-8 p-6 bg-neutral-light rounded-lg border border-gray-200 hover:border-accent-orange transition-colors">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-accent-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-1">Ubicación</h3>
                    <p className="text-gray-700">Monterrey, Nuevo León</p>
                    <p className="text-gray-700">México</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Disponible para atender proyectos en toda la región norte
                    </p>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="p-6 bg-neutral-light rounded-lg border border-gray-200 hover:border-accent-orange transition-colors">
                <div className="flex items-start space-x-4">
                  <Clock className="text-accent-orange flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-neutral-dark mb-1">Horario</h3>
                    <p className="text-gray-700">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-gray-700">Sábados: 9:00 - 13:00</p>
                    <p className="text-gray-700">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-light p-8 rounded-xl border border-gray-200">
                <h2 className="text-3xl font-bold text-neutral-dark mb-8">
                  Envíanos un Mensaje
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block font-semibold text-neutral-dark mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-semibold text-neutral-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block font-semibold text-neutral-dark mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="empresa" className="block font-semibold text-neutral-dark mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Tipo de Proyecto */}
                  <div>
                    <label htmlFor="tipoProyecto" className="block font-semibold text-neutral-dark mb-2">
                      Tipo de Proyecto *
                    </label>
                    <select
                      id="tipoProyecto"
                      name="tipoProyecto"
                      value={formData.tipoProyecto}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Presupuesto */}
                  <div>
                    <label htmlFor="presupuesto" className="block font-semibold text-neutral-dark mb-2">
                      Presupuesto Estimado
                    </label>
                    <select
                      id="presupuesto"
                      name="presupuesto"
                      value={formData.presupuesto}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="menor">Menor a $500K USD</option>
                      <option value="medio">$500K - $2M USD</option>
                      <option value="alto">$2M - $5M USD</option>
                      <option value="mayor">Mayor a $5M USD</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block font-semibold text-neutral-dark mb-2">
                      Cuéntanos sobre tu Proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-accent-orange focus:outline-none transition-colors"
                      required
                    ></textarea>
                  </div>

                  {/* Términos */}
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="terminos"
                      name="terminos"
                      checked={formData.terminos}
                      onChange={handleChange}
                      className="w-5 h-5 rounded cursor-pointer"
                      required
                    />
                    <label htmlFor="terminos" className="text-gray-700 cursor-pointer">
                      Acepto la política de privacidad *
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white font-bold rounded-lg hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                  >
                    Enviar Consulta
                  </button>

                  {/* Mensaje de éxito */}
                  {enviado && (
                    <div className="p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center">
                      ¡Mensaje enviado! Nos pondremos en contacto pronto.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por Qué Contactarnos */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-neutral-dark">
            ¿Por Qué Contactarnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 card-hover animate-fade-in-up">
              <p className="text-4xl mb-4">⚡</p>
              <h4 className="font-bold text-neutral-dark mb-2 text-lg">Respuesta Rápida</h4>
              <p className="text-gray-600">Contestamos dentro de 24 horas</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 card-hover animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl mb-4">💼</p>
              <h4 className="font-bold text-neutral-dark mb-2 text-lg">Profesionalismo</h4>
              <p className="text-gray-600">Equipo experto y certificado</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-4xl mb-4">📋</p>
              <h4 className="font-bold text-neutral-dark mb-2 text-lg">Consulta Gratuita</h4>
              <p className="text-gray-600">Análisis sin compromiso</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg border border-gray-200 card-hover animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl mb-4">✅</p>
              <h4 className="font-bold text-neutral-dark mb-2 text-lg">Resultados Probados</h4>
              <p className="text-gray-600">10+ años de éxito</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">¿Prefieres contactar por WhatsApp?</h2>
          <p className="text-xl mb-8 text-white text-opacity-90">
            Envíanos un mensaje ahora y hablaremos sobre tu proyecto
          </p>
          <a
            href="https://wa.me/528188688391?text=Hola%20BENIAH%20Projects,%20me%20interesa%20conocer%20m%C3%A1s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
