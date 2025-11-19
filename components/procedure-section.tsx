'use client'

import { FileText, Package, Truck, CheckCircle } from 'lucide-react'

export default function ProcedureSection() {
  const steps = [
    {
      icon: FileText,
      step: '1',
      title: 'Documentación',
      description: 'Presenta tu encomienda en nuestra oficina central en El Alto con facturas o pólizas según el origen.',
    },
    {
      icon: Package,
      step: '2',
      title: 'Embalaje y Registro',
      description: 'Registramos y verificamos el peso, volumen y estado de tu carga. Asegúrate de cumplir con los pesos máximos permitidos.',
    },
    {
      icon: Truck,
      step: '3',
      title: 'Transporte',
      description: 'Tu carga se transporta hacia Tarija y Bermejo. El tiempo de entrega es de 2 días después de la salida.',
    },
    {
      icon: CheckCircle,
      step: '4',
      title: 'Entrega y Confirmación',
      description: 'Recibimos confirmación de entrega en destino y te notificamos del cumplimiento exitoso.',
    },
  ]

  return (
    <section id="procedure" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Procedimiento para Envíos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Sigue estos pasos sencillos para enviar tu carga de manera segura y confiable.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((stepInfo, index) => {
            const Icon = stepInfo.icon
            return (
              <div key={index} className="flex gap-6">
                {/* Step Circle */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#152342] border-2 border-[#4ec3b3] flex items-center justify-center dark:bg-[#4ec3b3] dark:border-[#152342]">
                      <Icon className="w-8 h-8 text-[#4ec3b3] dark:text-[#152342]" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-[#4ec3b3] to-transparent opacity-30"></div>
                    )}
                  </div>
                </div>

                {/* Step Content */}
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {stepInfo.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stepInfo.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Important Notes */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#152342] to-[#1a2f4a] border border-[#4ec3b3] border-opacity-30">
          <h3 className="text-xl font-bold text-white mb-6">Requisitos Importantes</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[#4ec3b3] font-semibold mb-4">Documentación Requerida</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#4ec3b3] font-bold mt-1">✓</span>
                  <span className="text-gray-300">Factura o póliza de origen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4ec3b3] font-bold mt-1">✓</span>
                  <span className="text-gray-300">Identificación del remitente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4ec3b3] font-bold mt-1">✓</span>
                  <span className="text-gray-300">Descripción detallada de la carga</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#4ec3b3] font-semibold mb-4">Restricciones</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#4ec3b3] font-bold mt-1">•</span>
                  <span className="text-gray-300">Solo se aceptan cargas dentro del marco legal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4ec3b3] font-bold mt-1">•</span>
                  <span className="text-gray-300">Altura máxima: 4.20 metros (por ley)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4ec3b3] font-bold mt-1">•</span>
                  <span className="text-gray-300">Servicio de ida: El Alto → Tarija/Bermejo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
