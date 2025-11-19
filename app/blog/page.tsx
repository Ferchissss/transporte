import { ArrowRight, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Consejos para empacar tu carga de forma segura',
      excerpt: 'Aprende las mejores prácticas para preparar tu encomienda y garantizar que llegue en perfecto estado a su destino.',
      content: 'El embalaje correcto es fundamental para proteger tu carga durante el transporte. Utiliza materiales resistentes, asegura bien los paquetes con cinta, y etiqueta claramente tu envío. En Beluga, recomendamos utilizar cajas de cartón reforzado, papel burbuja y espuma de protección para artículos frágiles. No olvides indicar el contenido de tu paquete y los datos de contacto de remitente y destinatario.',
      author: 'Equipo Beluga',
      date: '15 de Noviembre, 2024',
      category: 'Consejos'
    },
    {
      id: 2,
      title: 'Rutas principales y tiempos de entrega',
      excerpt: 'Conoce nuestras principales rutas de transporte y los tiempos estimados de entrega para cada una.',
      content: 'Nuestras rutas principales conectan El Alto con Tarija y Bermejo, garantizando entregas en 2 días hábiles desde la salida del camión. Operamos con regularidad en estas rutas, asegurando que tu carga llegue puntualmente. Para consultar tiempos específicos y disponibilidad de viajes, contáctanos directamente o utiliza nuestro cotizador en línea. Contamos con salidas programadas semanalmente en cada ruta.',
      author: 'Departamento de Rutas',
      date: '10 de Noviembre, 2024',
      category: 'Operaciones'
    },
    {
      id: 3,
      title: 'Documentación requerida para envíos internacionales',
      excerpt: 'Todo lo que necesitas saber sobre los requisitos documentales para envíos fuera de Bolivia.',
      content: 'Para envíos a nivel internacional, es imprescindible contar con la documentación completa: facturas comerciales, pólizas de seguros, documentos de aduanas y permisos especiales si es necesario. En Beluga, nos encargamos de guiarte en este proceso. Nuestro equipo de logística está capacitado para manejar toda la documentación requerida y asegurar que tu carga cumpla con los requisitos legales de cada país de destino.',
      author: 'Equipo de Logística',
      date: '5 de Noviembre, 2024',
      category: 'Documentación'
    },
    {
      id: 4,
      title: 'Seguridad en el transporte: nuestro compromiso',
      excerpt: 'Descubre cómo Beluga garantiza la seguridad de tu carga en cada etapa del viaje.',
      content: 'La seguridad es nuestra prioridad máxima. Todos nuestros conductores están altamente capacitados y cuentan con años de experiencia. Nuestros vehículos están equipados con sistemas de rastreo GPS en tiempo real, garantizando que siempre sepas dónde está tu carga. Realizamos inspecciones regulares de mantenimiento a toda la flota y contamos con pólizas de seguros completas para proteger tu mercancía. Con Beluga, tu envío está en las mejores manos.',
      author: 'Equipo de Seguridad',
      date: '1 de Noviembre, 2024',
      category: 'Seguridad'
    },
    {
      id: 5,
      title: 'Nuestra flota: vehículos de última generación',
      excerpt: 'Conoce los camiones Volvo y Nissan que conforman nuestra moderna flota de transporte.',
      content: 'Contamos con una flota moderna compuesta por camiones Volvo y Nissan, seleccionados por su confiabilidad, eficiencia y seguridad. Cada vehículo está diseñado para optimizar el transporte de carga, con capacidad de carga limitada por volumen hasta 4.20 metros de altura según las regulaciones legales. Nuestros camiones están regularmente mantenidos y equipados con las últimas tecnologías de seguridad para garantizar entregas en tiempo y forma.',
      author: 'Equipo Técnico',
      date: '28 de Octubre, 2024',
      category: 'Flota'
    },
    {
      id: 6,
      title: 'Cómo funciona nuestro sistema de rastreo',
      excerpt: 'Sigue tu carga en tiempo real con nuestro sistema de rastreo GPS integrado en cada vehículo.',
      content: 'El rastreo en tiempo real es una de nuestras características más valoradas. Puedes monitorear el progreso de tu envío en cada momento del viaje. Nuestro sistema GPS proporciona actualizaciones continuas de ubicación, permitiéndote planificar mejor la recepción de tu carga. Accede a la información de rastreo desde cualquier dispositivo, en cualquier momento. La transparencia y la confianza son valores clave en Beluga.',
      author: 'Equipo Técnico',
      date: '20 de Octubre, 2024',
      category: 'Tecnología'
    }
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#152342] via-[#1a3a52] to-[#0f2a3f] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Blog de Beluga</h1>
            <p className="text-xl text-white/80">Mantente informado con artículos sobre transporte, logística, seguridad y consejos prácticos para tus envíos.</p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-[#1a2a3a] rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Post Header */}
                <div className="p-6 bg-gradient-to-r from-[#4ec3b3]/10 to-transparent dark:from-[#4ec3b3]/5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-[#4ec3b3]/20 text-[#2a9b8d] dark:text-[#4ec3b3] text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-balance">{post.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                </div>

                {/* Post Content */}
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.content}</p>
                </div>

                {/* Post Meta */}
                <div className="px-6 py-4 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link href="#" className="text-[#4ec3b3] hover:text-[#2a9b8d] font-medium inline-flex items-center gap-1">
                    Leer <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#4ec3b3] to-[#2a9b8d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes una pregunta?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">No dudes en contactarnos. Nuestro equipo está disponible para resolver cualquier duda sobre nuestros servicios.</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-[#2a9b8d] font-bold rounded-lg hover:bg-opacity-90 transition-all">
            Contáctanos Ahora
          </Link>
        </div>
      </section>
    </main>
  )
}
