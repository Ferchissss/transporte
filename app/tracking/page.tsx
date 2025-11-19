'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

export default function Tracking() {
  const [trackingCode, setTrackingCode] = useState('')

  const mockTracking = {
    'TB001': {
      status: 'En tránsito',
      origin: 'El Alto, Bolivia',
      destination: 'Tarija, Bolivia',
      progress: 65,
      date: '15 Nov 2025',
    },
  }

  const handleTrack = () => {
    console.log('Tracking:', trackingCode)
  }

  return (
    <section id="tracking" className="py-20 md:py-32 bg-gradient-to-br from-[#152342] to-[#1a2f4a] text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Rastrear tu Envío
        </h2>
        <p className="text-lg text-gray-300 text-center mb-10">
          Ingresa tu código de seguimiento para conocer el estado real de tu carga en tiempo real.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="flex gap-2 mb-6">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Código de rastreo (ej: TB001)"
                value={trackingCode}
                onChange={(e) => setTrackingCode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ec3b3]"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <button
              onClick={handleTrack}
              className="px-6 py-3 bg-[#4ec3b3] text-[#152342] rounded-xl font-bold hover:bg-opacity-90 transition-all hover:scale-105"
            >
              Rastrear
            </button>
          </div>

          {trackingCode === 'TB001' && (
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Progreso del envío</span>
                    <span className="text-[#4ec3b3]">65%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-r from-[#4ec3b3] to-[#2a9b8d]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <span className="text-gray-400 text-sm">Origen</span>
                    <p className="font-semibold">{mockTracking.TB001.origin}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Destino</span>
                    <p className="font-semibold">{mockTracking.TB001.destination}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Estado</span>
                    <p className="font-semibold text-[#4ec3b3]">{mockTracking.TB001.status}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Fecha</span>
                    <p className="font-semibold">{mockTracking.TB001.date}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
