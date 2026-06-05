import { useState } from 'react'
import { CheckCircle, Building2, Home, Factory, ShoppingCenter } from 'lucide-react'

export default function Portafolio() {
  const [filtroActivo, setFiltroActivo] = useState('todos')

  const alcanceServicios = [
    {
      titulo: 'Alcance de servicios prestados',
      items: [
        'Gerencia completa de proyectos desde diseño hasta entrega',
        'Supervisión de obra en etapas específicas',
        'Consultoría en planeación y programación',
        'Auditorías de avance y premusualidad'
      ]
    },
    {
      titulo: 'Especialidades coordinadas',
      items: [
        'Estructura, arquitectura y acabados',
        'Instalaciones eléctricas, hidráulica y de gas',
        'Sistemas de climatización y ventilación',
        'Obra exterior, urbanización y vallados',
        'Sistemas especiales (sistemas, control de acceso, AV)'
      ]
    }
  ]

  const tiposProyectos = [
    {
      id: 'corporativo',
      icono: Building2,
      titulo: 'Edificios Corporativos',
      descripcion: 'Gerencia de proyectos de oficinas y edificios de uso corporativo, desde conceptualización hasta ocupación.',
      servicios: [
        'Supervisión de obra',
        'Control de presupuesto',
        'Coordinación de especialidades'
      ]
    },
    {
      id: 'residencial',
      icono: Home,
      titulo: 'Desarrollos Residenciales',
      descripcion: 'Administración de proyectos residenciales de mediana y alta densidad, obras de urbanización.',
      servicios: [
        'Planeación de obras',
        'Control de calidad',
        'Gestión de proveedores'
      ]
    },
    {
      id: 'industrial',
      icono: Factory,
      titulo: 'Proyectos Industriales',
      descripcion: 'Gerencia de construcción de naves industriales, bodegas y plantas de manufactura con enfoque en tiempos de entrega.',
      servicios: [
        'Programación detallada',
        'Fast track execution',
        'Control de costos'
      ]
    },
    {
      id: 'comercial',
      icono: ShoppingCenter,
      titulo: 'Proyectos Comerciales',
      descripcion: 'Administración de centros comerciales, locales comerciales y proyectos de renovación de espacios existentes.',
      servicios: [
        'Coordinación multiproyecto',
        'Control de interferencias',
        'Gestión de cambios'
      ]
    }
  ]

  const proyectos = [
    {
      titulo: 'Residencial Monterrey',
      tipo: 'residencial',
      monto: '$2.5M',
      descripcion: 'Conjunto residencial de 150 unidades'
    },
    {
      titulo: 'Centro Comercial Sura',
      tipo: 'comercial',
      monto: '$1.8M',
      descripcion: 'Centro comercial con 25,000 m²'
    },
    {
      titulo: 'Planta de Manufactura',
      tipo: 'industrial',
      monto: '$3.2M',
      descripcion: 'Nave industrial de 40,000 m²'
    },
    {
      titulo: 'Conjunto Residencial Barrio Antiguo',
      tipo: 'residencial',
      monto: '$950K',
      descripcion: 'Desarrollo residencial en zona histórica'
    },
    {
      titulo: 'Oficinas Corporativas',
      tipo: 'corporativo',
      monto: '$4.1M',
      descripcion: 'Torre de oficinas clase A'
    },
    {
      titulo: 'Torres Residenciales Valle Poniente',
      tipo: 'residencial',
      monto: '$5.8M',
      descripcion: 'Complejo de 3 torres residenciales'
    }
  ]

  const proyectosFiltrados = filtroActivo === 'todos' 
    ? proyectos 
    : proyectos.filter(p => p.tipo === filtroActivo)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-900 to-accent-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-accent-gold">Portafolio</span>
          </h1>
          <p className="text-lg text-white/90">
            Experiencia comprobada en proyectos de diversa envergadura y tipología
          </p>
        </div>
      </section>

      {/* Alcance de Servicios */}
      <section className="py-16 md:py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {alcanceServicios.map((seccion, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-accent-orange transition-colors"
              >
                <h3 className="text-xl font-bold text-neutral-dark mb-6 pb-4 border-b-2 border-accent-orange">
                  {seccion.titulo}
                </h3>
                <ul className="space-y-4">
                  {seccion.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary-900 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Proyectos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Especialidades por <span className="text-primary-900">Tipología</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-accent-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tiposProyectos.map((tipo) => {
              const IconComponent = tipo.icono
              return (
                <div
                  key={tipo.id}
                  className="bg-neutral-light p-8 rounded-xl border-l-4 border-accent-orange hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <IconComponent className="text-accent-orange flex-shrink-0" size={32} />
                    <h3 className="text-xl font-bold text-neutral-dark">{tipo.titulo}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{tipo.descripcion}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-primary-900 mb-2">Servicios incluidos:</p>
                    <ul className="space-y-2">
                      {tipo.servicios.map((servicio, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent-orange rounded-full mr-2"></span>
                          {servicio}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-16 md:py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-8">
              Proyectos <span className="text-primary-900">Realizados</span>
            </h2>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                onClick={() => setFiltroActivo('todos')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filtroActivo === 'todos'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-dark border-2 border-gray-200 hover:border-primary-900'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFiltroActivo('residencial')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filtroActivo === 'residencial'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-dark border-2 border-gray-200 hover:border-primary-900'
                }`}
              >
                Residencial
              </button>
              <button
                onClick={() => setFiltroActivo('comercial')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filtroActivo === 'comercial'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-dark border-2 border-gray-200 hover:border-primary-900'
                }`}
              >
                Comercial
              </button>
              <button
                onClick={() => setFiltroActivo('industrial')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filtroActivo === 'industrial'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-dark border-2 border-gray-200 hover:border-primary-900'
                }`}
              >
                Industrial
              </button>
              <button
                onClick={() => setFiltroActivo('corporativo')}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  filtroActivo === 'corporativo'
                    ? 'bg-primary-900 text-white'
                    : 'bg-white text-neutral-dark border-2 border-gray-200 hover:border-primary-900'
                }`}
              >
                Corporativo
              </button>
            </div>
          </div>

          {/* Grid de Proyectos */}
          <div className="grid md:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-200"
              >
                <div className="h-32 bg-gradient-to-br from-primary-900 to-accent-orange rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{proyecto.monto}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-600 text-sm mb-4">{proyecto.descripcion}</p>
                <span className="inline-block px-3 py-1 bg-accent-gold/20 text-primary-900 text-xs font-semibold rounded-full">
                  {tiposProyectos.find(t => t.id === proyecto.tipo)?.titulo}
                </span>
              </div>
            ))}
          </div>

          {proyectosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No hay proyectos en esta categoría</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-accent-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tu proyecto necesita especialistas en PMO?
          </h2>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Contacta con nosotros
          </a>
        </div>
      </section>
    </div>
  )
}
