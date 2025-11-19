'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Weight, Maximize2 as Maximize3, CheckCircle2 } from 'lucide-react'

export default function FleetSection() {
  const vehicles = [
    {
      brand: 'Volvo',
      type: 'Camión de Carga',
      specs: [
        { label: 'Capacidad de Volumen', value: 'Hasta 4.20 m de altura' },
        { label: 'Límite Legal', value: 'Altura máxima regulada' },
      ],
    },
    {
      brand: 'Nissan',
      type: 'Camión de Transporte',
      specs: [
        { label: 'Capacidad de Volumen', value: 'Hasta 4.20 m de altura' },
        { label: 'Límite Legal', value: 'Altura máxima regulada' },
      ],
    },
  ]

  return (
    <section className="py-24 bg-[#152342] text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-[#4ec3b3] rounded-full opacity-20 blur-3xl"></div>
            <img 
              src="/modern-truck.jpg" 
              alt="Nuestra Flota" 
              className="relative rounded-2xl shadow-2xl border border-white/10 z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-[#152342] p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm font-medium text-gray-600">Mantenimiento al día</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Tecnología y Potencia <br />
              <span className="text-[#4ec3b3]">En Movimiento</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Nuestra flota está equipada con la última tecnología en rastreo y seguridad. 
              Mantenemos nuestros vehículos bajo rigurosos estándares para garantizar 
              que tu carga llegue a tiempo y en perfectas condiciones.
            </p>
            
            <ul className="space-y-4">
              {[
                "Monitoreo GPS 24/7 en tiempo real",
                "Unidades refrigeradas para carga sensible",
                "Conductores certificados y capacitados",
                "Mantenimiento preventivo programado"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4ec3b3] flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-[#4ec3b3] hover:bg-[#3da89a] text-[#152342] font-bold rounded-full px-8 h-12 mt-4">
              <Link href="/fleet">
                Conocer Nuestra Flota
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
