import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Globe } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Header Section */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ec3b3]/10 text-[#4ec3b3] font-medium text-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ec3b3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ec3b3]"></span>
          </span>
          Atención en Línea
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
          Hablemos de tu <span className="text-[#4ec3b3]">Próximo Envío</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Elige tu canal preferido y conecta directamente con nuestro equipo
          logístico en tiempo real.
        </p>
      </div>

      <div className="container mx-auto px-4">
        {/* Direct Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp - Primary CTA */}
          <a
            href="https://wa.link/fbjshv"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageCircle className="w-24 h-24 text-[#25D366]" />
            </div>
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#25D366]/20 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">WhatsApp</h3>
            <p className="text-muted-foreground mb-6">Chat directo para cotizaciones rápidas y consultas de rastreo.</p>
            <span className="text-[#25D366] font-bold flex items-center gap-2 mt-auto">
              Chatear ahora <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+59122481234"
            className="group p-8 rounded-3xl bg-card border border-border hover:border-[#4ec3b3]/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Phone className="w-24 h-24 text-foreground" />
            </div>
            <div className="w-16 h-16 bg-[#152342] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-[#4ec3b3]" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Llámanos</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+59122481234" className="text-[#4ec3b3] font-bold hover:underline">
                La Paz: +591 2 248 1234
              </a>
              <a href="tel:+59133765432" className="text-[#4ec3b3] font-bold hover:underline">
                Santa Cruz: +591 3 376 5432
              </a>
              <a href="tel:+59141234567" className="text-[#4ec3b3] font-bold hover:underline">
                Cochabamba: +591 4 123 4567
              </a>
            </div>
          </a>

          {/* Email */}
          <a
            href="trasnbeluga2025@gmail.com"
            className="group p-8 rounded-3xl bg-card border border-border hover:border-[#4ec3b3]/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Mail className="w-24 h-24 text-foreground" />
            </div>
            <div className="w-16 h-16 bg-[#152342] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-[#4ec3b3]" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Correo</h3>
            <p className="text-muted-foreground mb-6">Para cuentas corporativas, facturación y reclamos formales.</p>
            <span className="text-[#4ec3b3] font-bold flex items-center gap-2 mt-auto">
              trasnbeluga2025@gmail.com <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Offices & Hours Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Offices */}
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-foreground">
              <div className="p-2 bg-[#4ec3b3]/10 rounded-lg">
                <MapPin className="w-6 h-6 text-[#4ec3b3]" />
              </div>
              Nuestras Oficinas
            </h3>
            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#4ec3b3] to-transparent opacity-30 hidden md:block"></div>

              <div className="flex gap-6 relative">
                <div className="w-10 h-10 bg-[#152342] rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-background">
                  <span className="text-[#4ec3b3] font-bold text-xs">LP</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-foreground">El Alto (Central)</h4>
                  <p className="text-muted-foreground mb-2">Villa Bolivar B Calle Ross Telles Y #125</p>
                  <a href="#" className="text-sm text-[#4ec3b3] hover:underline flex items-center gap-1">
                    Ver en mapa <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex gap-6 relative">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-background">
                  <span className="text-muted-foreground font-bold text-xs">TJ</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-foreground">Tarija</h4>
                </div>
              </div>

              <div className="flex gap-6 relative">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-background">
                  <span className="text-muted-foreground font-bold text-xs">BJ</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-foreground">Bermejo</h4>
                  <p className="text-muted-foreground mb-2">Calle Real Madrid y cochabamba</p>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#4ec3b3] transition-colors flex items-center gap-1"
                  >
                    Ver en mapa <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Map Placeholder */}
          <div className="space-y-6">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-foreground">
                <div className="p-2 bg-[#4ec3b3]/10 rounded-lg">
                  <Clock className="w-6 h-6 text-[#4ec3b3]" />
                </div>
                Horarios de Atención
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-4 border-dashed">
                  <span className="font-medium text-foreground">Lunes a Viernes</span>
                  <span className="text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-4 border-dashed">
                  <span className="font-medium text-foreground">Sábados</span>
                  <span className="text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm">08:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Domingos y Feriados</span>
                  <span className="text-[#ef4444] font-medium bg-[#ef4444]/10 px-3 py-1 rounded-full text-sm">
                    Cerrado
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Map Link */}
            <div className="group relative overflow-hidden rounded-3xl min-h-[200px] flex items-center justify-center bg-[#152342] cursor-pointer">
              <div className="absolute inset-0 opacity-40 bg-[url('/images/attachments-gen-images-public-el-alto-bolivia-city-mountains.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#152342]/90 to-transparent"></div>
              <div className="relative z-10 text-center p-6">
                <Globe className="w-10 h-10 text-[#4ec3b3] mx-auto mb-3" />
                <h4 className="text-white text-xl font-bold mb-2">Cobertura Nacional</h4>
                <p className="text-gray-300 text-sm mb-4">Explora nuestras rutas y puntos de entrega</p>
                <span className="inline-flex items-center gap-2 bg-[#4ec3b3] text-[#152342] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors">
                  Ver Mapa Interactivo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
