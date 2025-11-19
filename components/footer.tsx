import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#152342] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4ec3b3] to-[#2a9b8d] rounded-lg flex items-center justify-center font-bold">
                Bt
              </div>
              <span className="font-bold">Trans Beluga</span>
            </div>
            <p className="text-gray-400 text-sm">
              Conectando Bolivia con confianza y seguridad desde hace años.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Rápido</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#4ec3b3] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#tracking" className="text-gray-400 hover:text-[#4ec3b3] transition-colors">
                  Rastreo
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="text-gray-400 hover:text-[#4ec3b3] transition-colors">
                  Flota
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4ec3b3] transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4ec3b3] transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#4ec3b3] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ec3b3] hover:text-[#152342] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ec3b3] hover:text-[#152342] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ec3b3] hover:text-[#152342] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ec3b3] hover:text-[#152342] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {year} Trans Beluga. Todos los derechos reservados.</p>
            <p>Hecho con ❤️ en Bolivia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
