'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'

export default function Quote() {
  const [weight, setWeight] = useState('')
  const [destination, setDestination] = useState('tarija')

  const destinations = [
    { value: 'tarija', label: 'Tarija' },
    { value: 'bermejo', label: 'Bermejo' },
  ]

  const baseRate = 25 // Bs por kg
  const quote = weight ? (parseFloat(weight) * baseRate).toFixed(2) : '0'

  return (
    <section id="quote" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Cotizador de Envíos
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-10">
          Calcula el costo de tu envío de forma rápida e instantánea.
        </p>

        <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Peso de la carga (kg)
              </label>
              <input
                type="number"
                placeholder="Ingresa el peso"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:border-[#4ec3b3] focus:outline-none font-semibold"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Destino
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground focus:border-[#4ec3b3] focus:outline-none font-semibold"
              >
                {destinations.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-gradient-to-br from-[#152342] to-[#1a2f4a] rounded-xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-300 text-sm">Costo estimado</span>
                  <div className="text-4xl font-bold mt-2">{quote} Bs</div>
                  <span className="text-xs text-gray-400">Tarifa base: 25 Bs/kg</span>
                </div>
                <Calculator className="w-12 h-12 text-[#4ec3b3] opacity-50" />
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-[#4ec3b3] text-[#152342] rounded-lg font-bold hover:bg-opacity-90 transition-all hover:scale-105">
              Confirmar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
