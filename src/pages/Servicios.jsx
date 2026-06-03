import { CheckCircle, BarChart3, Users, TrendingUp, Shield, Award } from 'lucide-react'

export default function Servicios() {
  const servicios = [
    {
      icon: BarChart3,
      title: 'Planificación Estratégica',
      description: 'Diseñamos la estructura completa de tu proyecto desde su concepción.',
      items: [
        'Análisis de viabilidad técnica y financiera',
        'Cronograma detallado con hitos críticos',
        'Presupuesto base con contingencias',
        'Identificación de riesgos y planes de mitigación',
        'Desglose de alcance (WBS) y responsabilidades',
      ],
    },
    {
      icon: Users,
      title: 'Coordinación y Gestión de Recursos',
      description: 'Administramos la orquestación de todos los actores del proyecto.',
      items: [
        'Selección y contratación de proveedores',
        'Gestión de nómina y administración de personal',
        'Coordinación de seguridad en obra (SGSSO)',
        'Logística de materiales y suministros',
        'Licencias, permisos y trámites regulatorios',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento y Control',
      description: 'Monitoreo en tiempo real del desempeño del proyecto.',
      items: [
        'Reportes semanales de avance físico',
        'Control de costos vs. presupuesto (EVM)',
        'Análisis de desviaciones y correcciones',
        'Gestión del flujo de caja',
        'Dashboard interactivo de métricas clave',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Aseguramiento de Calidad',
      description: 'Garantizamos estándares de excelencia en toda la ejecución.',
      items: [
        'Inspecciones técnicas y pruebas de calidad',
        'Cumplimiento de especificaciones y normativas',
        'Documentación fotográfica y registro de avances',
        'Gestión de cambios y variaciones',
        'Cierre de proyecto y entrega formal',
      ],
    },
    {
      icon: Shield,
      title: 'Gestión de Riesgos & EHS',
      description: 'Implementamos sistemas de seguridad integral.',
      items: [
        'Plan de seguridad y salud ocupacional',
        'Identificación y mitigación de riesgos',
        'Capacitación y entrenamiento',
        'Auditorías de cumplimiento',
        'Reportes de incidentes y lecciones aprendidas',
      ],
    },
    {
      icon: Award,
      title: 'Mejora Continua',
      description: 'Optimizamos procesos y resultados constantemente.',
      items: [
        'Análisis de desempeño post-proyecto',
        'Documentación de lecciones aprendidas',
        'Benchmarking con estándares de la industria',
        'Implementación de mejoras operacionales',
        'Capacitación y desarrollo de equipos',
      ],
    },
  ]

  const metodologia = [
    { num: 1, title: 'Diagnóstico', desc: 'Entendemos tu proyecto en profundidad' },
    { num: 2, title: 'Planificación', desc: 'Diseñamos la estrategia de ejecución' },
    { num: 3, title: 'Ejecución', desc: 'Coordinamos y supervisamos el trabajo' },
    { num: 4, title: 'Seguimiento', desc: 'Reportamos avances y controlamos desviaciones' },
    { num: 5, title: 'Cierre', desc: 'Entregamos proyecto dentro de especificaciones' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary-900 to-accent-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-white text-opacity-90">
            Soluciones integrales de gestión de proyectos para construcción
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicios.map((servicio, index) => {
              const IconComponent = servicio.icon
              return (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-primary-900" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-dark">{servicio.title}</h3>
                      <p className="text-gray-600 mt-1">{servicio.description}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 ml-18">
                    {servicio.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="text-accent-orange flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Nuestra Metodología</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {metodologia.map((paso, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Línea conectora */}
                {index < metodologia.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent-orange to-transparent"></div>
                )}

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-orange to-accent-orange-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg">
                    {paso.num}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-2">{paso.title}</h3>
                  <p className="text-gray-600 text-sm">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estándares */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Certificaciones y Estándares</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-primary-50 rounded-lg border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">PMI</h3>
              <p className="text-gray-600">Project Management Institute</p>
              <p className="text-sm text-gray-500 mt-4">Metodologías y estándares internacionales</p>
            </div>

            <div className="text-center p-8 bg-primary-50 rounded-lg border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">ISO 9001</h3>
              <p className="text-gray-600">Gestión de Calidad</p>
              <p className="text-sm text-gray-500 mt-4">Control y mejora continua</p>
            </div>

            <div className="text-center p-8 bg-primary-50 rounded-lg border-2 border-primary-200">
              <h3 className="text-2xl font-bold text-primary-900 mb-2">OHSAS 18001</h3>
              <p className="text-gray-600">Salud y Seguridad Ocupacional</p>
              <p className="text-sm text-gray-500 mt-4">Protección y bienestar de personal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
