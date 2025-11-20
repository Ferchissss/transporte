import { Truck, Heart, Shield, Smile, Zap, Globe, Droplet, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const vehicles = [
    {
      model: 'Volvo FH16',
      capacity: '25 toneladas',
      status: 'Disponible',
      image: '/volvo-truck-loading-cargo.jpg',
    },
    {
      model: 'Nissan UD700',
      capacity: '16 toneladas',
      status: 'Disponible',
      image: '/nissan-truck-transport.jpg',
    },
    {
      model: 'Volvo FH12',
      capacity: '18 toneladas',
      status: 'En ruta',
      image: '/truck-highway-transport.jpg',
    },
  ]

  const values = [
    {
      icon: Zap,
      title: 'Puntualidad',
      description: 'Cumplimos con los tiempos establecidos para que cada viaje sea confiable y organizado.'
    },
    {
      icon: Heart,
      title: 'Respeto',
      description: 'Valoramos a cada persona y cada carga como única e importante.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Priorizamos el bienestar de nuestros pasajeros, colaboradores y bienes transportados.'
    },
    {
      icon: Smile,
      title: 'Amabilidad',
      description: 'Nuestra atención se basa en el trato humano y cordial en todo momento.'
    },
    {
      icon: Heart,
      title: 'Responsabilidad',
      description: 'Asumimos con seriedad el compromiso que implica transportar personas y objetos.'
    }
  ]

  const concepts = [
    {
      icon: Droplet,
      title: 'Seriedad con Calidez',
      description: 'Aunque somos estrictos en nuestros procesos, la amabilidad y el trato humano están siempre presentes.'
    },
    {
      icon: Zap,
      title: 'Fluidez y Fuerza',
      description: 'Como la beluga en el mar, nos movemos con suavidad pero con firmeza, llevando a cada destino confianza y eficacia.'
    },
    {
      icon: MapPin,
      title: 'Conexión Territorial',
      description: 'No solo conectamos ciudades, sino también historias, personas y oportunidades.'
    },
    {
      icon: Globe,
      title: 'Inspiración Natural',
      description: 'El nombre "Beluga" evoca una imagen limpia, pacífica y poderosa, ideal para transmitir confiabilidad y serenidad en movimiento.'
    }
  ]

  const advantages = [
    'Experiencia de años en transporte interurbano',
    'Flota moderna y bien mantenida',
    'Seguimiento en tiempo real de envíos',
    'Equipo profesional y capacitado',
    'Cobertura en rutas principales',
    'Tarifas competitivas y transparentes',
    'Documentación clara y segura',
    'Atención al cliente disponible'
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-background via-background to-[#4ec3b3]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Somos <span className="text-[#4ec3b3]">Beluga</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transporte interurbano de cargas y encomiendas con altos estándares de puntualidad, seguridad y respeto. Conectamos El Alto con Tarija y Bermejo, garantizando una experiencia eficiente, amable y confiable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="px-8 py-3 bg-[#4ec3b3] text-[#152342] font-bold rounded-lg hover:bg-opacity-90 transition-all text-center">
                Conoce Más
              </Link>
              <Link href="/contact" className="px-8 py-3 border-2 border-[#4ec3b3] text-[#4ec3b3] font-bold rounded-lg hover:bg-[#4ec3b3]/10 transition-all text-center">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Misión */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-8 h-8 text-[#4ec3b3]" />
                <h3 className="text-2xl font-bold text-foreground">Nuestra Misión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Brindar servicios de transporte interurbano de cargas y pasajeros con altos estándares de puntualidad, seguridad y respeto, garantizando una experiencia eficiente, amable y confiable para cada uno de nuestros clientes.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-[#4ec3b3]" />
                <h3 className="text-2xl font-bold text-foreground">Nuestra Visión</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Ser la empresa de transporte líder en Bolivia reconocida por su excelencia operativa, su compromiso humano y su impacto positivo en las rutas que conectamos, expandiéndonos con responsabilidad y constancia a nivel nacional e internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptos Fundamentales */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestros Conceptos Fundamentales
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los pilares que definen quiénes somos y cómo trabajamos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((concept, index) => {
              const Icon = concept.icon
              return (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-[#4ec3b3] mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{concept.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{concept.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
<section className="py-20 md:py-32">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Nuestro Equipo
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Profesionales comprometidos que hacen posible cada envío exitoso.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Gerente General */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/team/gerente-general.jpg"
            alt="Gerente General"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Carlos Mendoza</h3>
          <p className="text-[#4ec3b3] font-semibold mb-3">Gerente General</p>
          <p className="text-sm text-muted-foreground">Responsable de la operación y estrategia de la empresa con más de 15 años de experiencia en transporte.</p>
        </div>
      </div>

      {/* Encargados de Logística */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/team/encargados-logistica.jpg"
            alt="Encargados de Logística"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Ana Rodríguez & Marco López</h3>
          <p className="text-[#4ec3b3] font-semibold mb-3">Encargados de Logística</p>
          <p className="text-sm text-muted-foreground">Coordinan operaciones y rutas desde La Paz, asegurando la eficiencia en cada envío.</p>
        </div>
      </div>

      {/* Cargadores y Descargadores */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/team/equipo-carga.jpg"
            alt="Equipo de Carga"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Equipo de Carga</h3>
          <p className="text-[#4ec3b3] font-semibold mb-3">5 Especialistas</p>
          <p className="text-sm text-muted-foreground">Profesionales en La Paz y Bermejo especializados en el manejo seguro de carga.</p>
        </div>
      </div>

      {/* Conductores */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/team/conductores.jpg"
            alt="Conductores"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Juan Pérez & Luis García</h3>
          <p className="text-[#4ec3b3] font-semibold mb-3">Conductores Profesionales</p>
          <p className="text-sm text-muted-foreground">Choferes con amplia experiencia en rutas nacionales y manejo seguro.</p>
        </div>
      </div>

      {/* Secretaria */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/team/secretaria.jpg"
            alt="Secretaria"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">María Fernández</h3>
          <p className="text-[#4ec3b3] font-semibold mb-3">Secretaria Administrativa</p>
          <p className="text-sm text-muted-foreground">Atención al cliente y gestión administrativa en nuestra oficina de Bermejo.</p>
        </div>
      </div>

      {/* Equipo Completo */}
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow group">
        <div className="relative h-64 overflow-hidden">
          <img
            src="/team/equipo-completo.jpg"
            alt="Equipo Completo Beluga"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Familia Beluga</h3>
          <p className="text-[#4ec3b3] font-semibold mb-3">11 Profesionales</p>
          <p className="text-sm text-muted-foreground">Un equipo unido comprometido con brindar el mejor servicio de transporte.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Por Qué Elegirnos */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              ¿Por Qué Elegirnos?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex gap-4">
                  <Zap className="w-6 h-6 text-[#4ec3b3] flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground font-medium">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Flota */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestra Flota
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Vehículos modernos y bien mantenidos, con capacidad limitada a 4.20 metros de altura según normativa vigente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow group border border-border"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={vehicle.image || "/placeholder.svg?height=192&width=384&query=cargo truck"}
                    alt={vehicle.model}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {vehicle.model}
                      </h3>
                      <p className="text-sm text-muted-foreground">Capacidad: {vehicle.capacity}</p>
                    </div>
                    <Truck className="w-6 h-6 text-[#4ec3b3]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        vehicle.status === 'Disponible'
                          ? 'bg-green-500'
                          : 'bg-orange-500'
                      }`}
                    ></div>
                    <span className="text-sm font-medium text-foreground">
                      {vehicle.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#4ec3b3] to-[#2a9b8d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para confiar tus envíos en Beluga?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre por qué empresas en Bolivia confían en nosotros para sus cargas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="px-8 py-3 bg-white text-[#152342] font-bold rounded-lg hover:bg-gray-100 transition-all text-center">
              Solicitar Cotización
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-center">
              Ver Contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
