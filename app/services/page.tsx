import { Truck, Package, Clock, Shield, MapPin, DollarSign, FileText, Layers, Zap, TrendingUp } from 'lucide-react'

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Truck,
      title: 'Carga General',
      description: 'Transporte de mercancías diversas adaptadas a tus necesidades con seguridad garantizada.',
      details: 'Aceptamos todo tipo de carga bajo el marco legal vigente.'
    },
    {
      icon: Package,
      title: 'Encomiendas',
      description: 'Servicio express de encomiendas desde El Alto a Tarija y Bermejo.',
      details: 'Entrega garantizada en 2 días después de la salida desde La Paz.'
    },
    {
      icon: Layers,
      title: 'Mercancías Especiales',
      description: 'Manejo especializado de cargas que requieren cuidados específicos.',
      details: 'Cumplimiento estricto de regulaciones y protocolos de seguridad.'
    },
    {
      icon: Shield,
      title: 'Seguridad Total',
      description: 'Priorizamos la integridad de tus bienes en todo momento.',
      details: 'Seguimiento continuo y protección garantizada durante el transporte.'
    },
  ]

  const coverage = [
    { city: 'El Alto', type: 'Origen', description: 'Punto de carga central' },
    { city: 'Tarija', type: 'Destino', description: 'Entrega en 2 días' },
    { city: 'Bermejo', type: 'Destino', description: 'Entrega en 2 días' },
  ]

  const procedure = [
    {
      step: 1,
      title: 'Presentar Documentación',
      description: 'Lleva tu encomienda a la oficina central en El Alto con facturas o pólizas según corresponda.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Embalaje y Pesaje',
      description: 'Verificamos que el embalaje sea adecuado. Peso máximo respeta regulaciones vigentes.',
      icon: Truck
    },
    {
      step: 3,
      title: 'Carga del Vehículo',
      description: 'Tu carga se asigna al próximo camión disponible respetando capacidades máximas.',
      icon: Package
    },
    {
      step: 4,
      title: 'Seguimiento y Entrega',
      description: 'Recibirás actualizaciones de tu envío hasta su llegada al destino final.',
      icon: MapPin
    },
  ]

  const vehicles = [
    {
      brand: 'Volvo',
      type: 'Camión de Carga',
      capacity: 'Capacidad limitada a 4.20m de altura',
      details: 'Especializado en cargas de volumen moderado a grande'
    },
    {
      brand: 'Nissan',
      type: 'Camión de Distribución',
      capacity: 'Capacidad limitada a 4.20m de altura',
      details: 'Ideal para encomiendas y cargas más pequeñas'
    }
  ]

  const pricing = [
    { category: 'Parámetro principal', items: ['Peso (kg)', 'Volumen (m³)', 'Distancia'] },
    { category: 'Restricciones', items: ['Altura máxima: 4.20m', 'Cumplimiento de marco legal', 'Documentación requerida'] },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Servicios de Transporte de Carga
            </h1>
            <p className="text-lg text-white/90 text-balance">
              Soluciones integrales de transporte desde El Alto hacia Tarija y Bermejo con profesionalismo, seguridad y puntualidad garantizada.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nuestros Servicios Principales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Cada servicio está diseñado para satisfacer tus necesidades específicas de transporte.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 border-t border-border pt-3">
                    {service.details}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coverage & Routes */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Cobertura de Rutas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Operamos exclusivamente en rutas cuidadosamente seleccionadas para garantizar eficiencia y confiabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coverage.map((route, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{route.city}</h3>
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full mb-3">
                  {route.type}
                </span>
                <p className="text-muted-foreground">{route.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/10 border border-accent/30 rounded-2xl">
            <p className="text-center text-foreground text-lg">
              <strong>Nota importante:</strong> El servicio opera únicamente en dirección El Alto → Tarija/Bermejo (ida). No realizamos transporte desde Bermejo hacia La Paz.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing & Parameters */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Tarifas y Parámetros
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Nuestras tarifas son variables y se calculan según múltiples factores para garantizar precios justos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricing.map((section, index) => (
              <div key={index} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {section.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-accent/10 border border-accent rounded-2xl">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Solicita tu cotización</h4>
                <p className="text-muted-foreground">
                  Para recibir una tarifa personalizada, contáctanos con los detalles de tu carga (peso, volumen, destino).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Procedimiento para Envíos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Sigue estos sencillos pasos para enviar tu carga de manera segura y confiable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {procedure.map((proc, index) => {
              const Icon = proc.icon
              return (
                <div key={index} className="relative">
                  <div className="p-6 rounded-2xl bg-background border border-border h-full flex flex-col">
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-lg">
                      {proc.step}
                    </div>
                    <Icon className="w-8 h-8 text-accent mb-4 mt-4" />
                    <h3 className="font-bold text-lg text-foreground mb-3">
                      {proc.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                  {index < procedure.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-accent/30" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Nuestra Flota de Vehículos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Contamos con vehículos de primera calidad y mantenimiento constante para garantizar tus envíos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{vehicle.brand}</h3>
                    <p className="text-muted-foreground text-sm">{vehicle.type}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Capacidad</p>
                    <p className="text-foreground font-medium">{vehicle.capacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Especialización</p>
                    <p className="text-foreground font-medium">{vehicle.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Mantenimiento preventivo</h4>
                <p className="text-muted-foreground">
                  Todos nuestros vehículos reciben mantenimiento regular para garantizar máxima confiabilidad y seguridad en cada viaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Confía en Nuestro Servicio
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 text-balance">
            Somos tu aliado confiable para transportar tu carga de manera segura, puntual y profesional.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </main>
  )
}
