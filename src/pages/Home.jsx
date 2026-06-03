import { Link } from 'react-router-dom'
import { BarChart3, Users, CheckCircle, Shield, TrendingUp, Award } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: BarChart3,
      title: 'PMO & Gerencia de Proyectos',
      description: 'Implementación de oficinas de proyectos bajo estándar PMI con gobierno, KPIs y control integral.',
    },
    {
      icon: Users,
      title: 'Dirección de Obra',
      description: 'Coordinación de contratistas, supervisión técnica y aseguramiento de calidad en sitio.',
    },
    {
      icon: TrendingUp,
      title: 'Construcción Industrial',
      description: 'Naves, plantas, ampliaciones y proyectos llave en mano para clientes corporativos.',
    },
    {
      icon: Shield,
      title: 'Gestión de Riesgos & EHS',
      description: 'Implementación de sistemas de seguridad, salud y ambiente según normativas.',
    },
    {
      icon: CheckCircle,
      title: 'Procura & Licitaciones',
      description: 'Gestión de adquisiciones, procesos competitivos y selección de proveedores.',
    },
    {
      icon: Award,
      title: 'Control de Costos y Tiempo',
      description: 'Análisis de desviaciones, earned value management y optimización de cronogramas.',
    },
  ]

  const stats = [
    { number: '150+', label: 'Proyectos Completados' },
    { number: '10+', label: 'Años de Experiencia' },
    { number: '98%', label: 'Satisfacción Cliente' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section con Background */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-dark">
        {/* Background Image con overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%23D97E3A" stroke-width="0.5" opacity="0.2"/></pattern></defs><rect width="1200" height="600" fill="%230F1011"/><rect width="1200" height="600" fill="url(%23grid)"/></svg>)',
            backgroundAttachment: 'fixed',
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent-orange bg-opacity-20 rounded-full border border-accent-orange border-opacity-30">
            <p className="text-accent-gold text-sm font-semibold uppercase tracking-wider">
              • PMO · GERENCIA DE PROYECTOS
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Construimos con <span className="text-accent-gold italic">precisión,</span>
            <br />
            entregamos con <span className="text-accent-orange italic">excelencia.</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            BENIAH Projects es una firma especializada en project management y gerencia de construcción.
            Coordinamos cada fase de su obra con metodología PMI, control total de costos y calidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="px-8 py-3 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white font-semibold rounded-lg hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              Iniciar Proyecto
            </Link>
            <Link
              to="/servicios"
              className="px-8 py-3 border-2 border-accent-gold text-accent-gold font-semibold rounded-lg hover:bg-accent-gold hover:text-neutral-dark transition-all duration-300"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-4xl font-bold text-accent-gold mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-orange text-sm font-semibold uppercase tracking-wider mb-4">
              Quiénes Somos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Una firma de <span className="text-accent-orange">project</span>
              <br />
              <span className="italic text-primary-900">management</span> con visión integral.
            </h2>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            En Beniah Projects dirigimos proyectos de construcción e infraestructura aplicando los más altos estándares del Project Management Institute (PMI). 
            Acompañamos a nuestros clientes desde la estrategia inicial hasta la entrega final, asegurando máxima eficiencia en tiempo, costo y calidad.
          </p>

          <div className="h-1 w-24 bg-gradient-to-r from-accent-orange to-accent-gold mx-auto mb-12"></div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Soluciones Integrales</h2>
            <p className="text-xl text-gray-600">
              Servicios especializados para cada fase del proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 card-hover shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                    <IconComponent className="text-primary-900" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white font-semibold rounded-lg hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-accent-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para Optimizar tu Proyecto?
          </h2>
          <p className="text-xl mb-8 text-white text-opacity-90">
            Contáctanos hoy para una consulta sin compromiso
          </p>
          <Link
            to="/contacto"
            className="inline-block px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
          >
            Agendar Consulta
          </Link>
        </div>
      </section>
    </div>
  )
}
