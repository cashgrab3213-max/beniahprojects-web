import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Home() {
  const servicios = [
    {
      icon: '📋',
      title: 'PMO & Gerencia de Proyectos',
      description: 'Implementación de oficinas de proyectos bajo estándar PMI con gobierno, KPIs y control integral.'
    },
    {
      icon: '🏗️',
      title: 'Dirección de Obra',
      description: 'Coordinación de contratistas, supervisión técnica y aseguramiento de calidad en sitio.'
    },
    {
      icon: '🏢',
      title: 'Construcción Industrial',
      description: 'Naves, plantas, ampliaciones y proyectos llave en mano para clientes corporativos.'
    },
    {
      icon: '📊',
      title: 'Control de Costos y Tiempo',
      description: 'Seguimiento exhaustivo con reportes de avance y presupuesto en tiempo real.'
    },
    {
      icon: '🛡️',
      title: 'Gestión de Riesgos & EHS',
      description: 'Auditorías de avance y premusualidad en protocolos de seguridad.'
    },
    {
      icon: '⚙️',
      title: 'Procura & Licitaciones',
      description: 'Gestión integral de proveedores y procesos de selección competitiva.'
    }
  ]

  const clientes = [

  {
    logo: '/assets/Cliente 1.png',
    alt: 'Cliente 1'
  },
  {
    logo: '/assets/Client 2.jfif',
    alt: 'Client 2'
  }
]
  

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden bg-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-59"
          style={{
           backgroundImage: 'url(/assets/hero.jpg.png)',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <div className="mb-4 inline-block">
            <span className="inline-block px-4 py-1.5 bg-accent-gold/20 text-accent-gold text-sm font-semibold rounded-full">
              • PMO · GERENCIA DE PROYECTOS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight">
            Construimos con <span className="text-accent-gold">precisión</span>,
            <br />
            entregamos con <span className="text-accent-gold">excelencia</span>.
          </h1>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            BENIAH Projects es una firma especializada en project management y gerencia de construcción. Coordinamos cada fase de su obra con metodología PMI, control total y estándares internacionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/portafolio"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver Proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="py-16 md:py-24 bg-neutral-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Una firma de <span className="text-primary-900">project management</span> con visión integral.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-orange to-accent-gold mx-auto"></div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed">
              En BENIAH Projects dirigimos proyectos de construcción e infraestructura aplicando los más altos estándares del Project Management Institute (PMI). Acompañamos a nuestros clientes desde la concepción de la idea hasta la puesta en marcha, asegurando que cada etapa se ejecute conforme a cronograma, presupuesto y especificaciones técnicas.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Nuestro equipo de profesionales certificados combina experiencia operativa en campo con disciplina administrativo-financiera, proporcionando soluciones que minimizan riesgos, optimizan recursos y maximizan retorno de inversión.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-dark mb-12">
            Soluciones integrales para cada fase del <span className="text-primary-900">proyecto</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-light rounded-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-4">{servicio.icon}</div>
                <h3 className="text-xl font-bold text-neutral-dark mb-3">{servicio.title}</h3>
                <p className="text-gray-600">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes - Reemplaza la cintilla de números */}
      <section className="py-16 md:py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent-gold font-semibold uppercase tracking-wide mb-2">Quiénes han compartido su confianza en nosotros</p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark">
              Nuestros <span className="text-primary-900">clientes</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {clientes.map((cliente, index) => (
              <div key={index} className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={cliente.logo}
                  alt={cliente.alt}
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-900 via-accent-orange to-accent-orange-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contáctanos hoy y descubre cómo BENIAH Projects puede optimizar la ejecución de tu obra.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Solicitar Información
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
