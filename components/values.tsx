import { Heart, Target, Handshake, AlertCircle, CheckCircle } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Puntualidad',
      description: 'Cumplimos con los tiempos establecidos para que cada viaje sea confiable y organizado.',
    },
    {
      icon: Heart,
      title: 'Respeto',
      description: 'Valoramos a cada persona y cada carga como única e importante.',
    },
    {
      icon: AlertCircle,
      title: 'Seguridad',
      description: 'Priorizamos el bienestar de pasajeros, colaboradores y bienes transportados.',
    },
    {
      icon: Handshake,
      title: 'Amabilidad',
      description: 'Nuestra atención se basa en el trato humano y cordial en todo momento.',
    },
    {
      icon: Target,
      title: 'Responsabilidad',
      description: 'Asumimos con seriedad el compromiso que implica transportar personas y objetos.',
    },
  ]

  return (
    <section id="values" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Los principios que guían cada una de nuestras acciones y definen quiénes somos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#4ec3b3] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-[#152342] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4ec3b3] transition-colors dark:bg-[#4ec3b3] dark:group-hover:bg-[#152342]">
                  <Icon className="w-6 h-6 text-[#4ec3b3] group-hover:text-[#152342] dark:text-[#152342] dark:group-hover:text-[#4ec3b3]" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
