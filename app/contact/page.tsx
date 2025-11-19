'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mensaje enviado. Nos contactaremos pronto.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ponte en Contacto
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              ¿Tienes preguntas? Nuestro equipo está listo para ayudarte. Contáctanos por cualquier medio.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#152342] rounded-xl flex items-center justify-center flex-shrink-0 dark:bg-[#4ec3b3]">
                  <Phone className="w-6 h-6 text-[#4ec3b3] dark:text-[#152342]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <p className="text-muted-foreground">+591 2 2481234 / +591 78901234</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#152342] rounded-xl flex items-center justify-center flex-shrink-0 dark:bg-[#4ec3b3]">
                  <Mail className="w-6 h-6 text-[#4ec3b3] dark:text-[#152342]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">info@transbeluga.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#152342] rounded-xl flex items-center justify-center flex-shrink-0 dark:bg-[#4ec3b3]">
                  <MapPin className="w-6 h-6 text-[#4ec3b3] dark:text-[#152342]" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Calle Principal 123, El Alto, Bolivia</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:border-[#4ec3b3] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:border-[#4ec3b3] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu teléfono"
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:border-[#4ec3b3] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-border bg-background text-foreground placeholder-muted-foreground focus:border-[#4ec3b3] focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#152342] to-[#1a2f4a] text-white rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
