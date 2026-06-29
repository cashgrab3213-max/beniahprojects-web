import { useState } from 'react'
import { Building2 } from 'lucide-react'

export default function Portafolio() {
  const [filtro, setFiltro] = useState('todos')

  const proyectos = [
    {
      id: 1,
      titulo: 'Residencial Monterrey',
      categoria: 'residencial',
      desc: 'Desarrollo de 150 unidades habitacionales con control de calidad integral.',
      year: '2023',
      color: 'from-accent-orange to-primary-900',
    },
    {
      id: 2,
      titulo: 'Centro Comercial',
      categoria: 'comercial',
      desc: 'Gestión de 3 niveles de centros comerciales con múltiples arrendatarios.',
      year: '2023',
      color: 'from-primary-900 to-green-600',
    },
    {
      id: 3,
      titulo: 'Planta de Resilinit',
      categoria: 'industrial',
      desc: 'Construcción de planta con especificaciones técnicas de procesos.',
      year: '2025',
      color: 'from-accent-orange to-accent-orange-dark',
    },
    {
      id: 4,
      titulo: 'Conjunto Residencial Barrio Antiguo',
      categoria: 'residencial',
      desc: 'Restauración y ampliación respetando arquitectura histórica.',
      year: '2022',
      color: 'from-accent-orange to-accent-gold',
    },
    {
      id: 5,
      titulo: 'Oficinas Corporativas',
      categoria: 'comercial',
      desc: 'Diseño y construcción de 5 pisos de oficinas para multinacional.',
      year: '2022',
      color: 'from-primary-900 to-accent-orange',
    },
    {
      id: 6,
      titulo: 'Torre de usos mixtos Centrito Valle',
      categoria: 'residencial',
      desc: 'Construcción de 1 torre, 18 pisos. Llave en mano.',
      year: '2018',
      color: 'from-green-600 to-primary-900',
    },
  ]
  {
   id: 7,
      titulo: 'Edificio industrial Symrise',
      categoria: 'industrial',
      desc: 'Construcción de edificio industrial con especificaciones técnicas de procesos.',
      year: '2023',
      color: 'from-accent-orange to-accent-orange-dark',
     },
  const categorias = [
    { valor: 'todos', label: 'Todos' },
    { valor: 'residencial', label: 'Residencial' },
    { valor: 'comercial', label: 'Comercial' },
    { valor: 'industrial', label: 'Industrial' },
  ]

  const proyectosFiltrados =
    filtro === 'todos'
      ? proyectos
      : proyectos.filter((p) => p.categoria === filtro)

  const stats = [
    { number: '150+', label: 'Proyectos Completados' },
    { number: '$500M+', label: 'Valor Total Gestionado' },
    { number: '98%', label: 'En Tiempo y Presupuesto' },
    { number: '400+', label: 'Empleados Supervisados' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-900 to-accent-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nuestro Portafolio</h1>
          <p className="text-xl text-white text-opacity-90">
            Proyectos exitosos que hablan de nuestra experiencia
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-neutral-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((cat) => (
              <button
                key={cat.valor}
                onClick={() => setFiltro(cat.valor)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filtro === cat.valor
                    ? 'bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white shadow-lg'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-accent-orange hover:text-accent-orange'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Proyectos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto, index) => (
              <div
                key={proyecto.id}
                className="bg-white rounded-xl overflow-hidden shadow-md card-hover animate-fade-in-up border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagen Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${proyecto.color} flex items-center justify-center`}
                >
                  <Building2 className="text-white opacity-50" size={64} />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <p className="text-accent-orange text-sm font-bold uppercase tracking-wide mb-2">
                    {proyecto.categoria} • {proyecto.year}
                  </p>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {proyecto.desc}
                  </p>
                  <p className="text-accent-orange font-bold">
                    Presupuesto: {proyecto.presupuesto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-accent-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Por Números
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20 backdrop-blur-md card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-5xl font-bold text-accent-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-white text-opacity-90 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-dark">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Descubre cómo podemos ayudarte a lograrlo con éxito
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white font-semibold rounded-lg hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
          >
            Contacta con Nosotros
          </a>
        </div>
      </section>
    </div>
  )
}
