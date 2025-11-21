'use client'

import { useEffect, useRef, useState } from 'react'

export default function BoliviaAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const container = canvasRef.current.parentElement
        if (container) {
          setDimensions({
            width: container.clientWidth,
            height: container.clientHeight,
          })
        }
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let animationId: number
    let time = 0

    const primaryColor = '#4ec3b3'
    const darkColor = '#152342'

    const cities = {
      elAlto: { x: 0.35, y: 0.25, name: 'El Alto' },
      tarija: { x: 0.65, y: 0.75, name: 'Tarija' },
      bermejo: { x: 0.75, y: 0.85, name: 'Bermejo' },
    }

    // Convert percentages to canvas coordinates
    const getCoords = (city: { x: number; y: number }) => ({
      x: city.x * canvas.width,
      y: city.y * canvas.height,
    })

    class CargoBox {
      route: number // 0: El Alto -> Tarija, 1: Tarija -> Bermejo, 2: Bermejo -> El Alto
      progress: number // 0 to 1
      size: number

      constructor(route: number) {
        this.route = route
        this.progress = Math.random()
        this.size = 12
      }

      update(deltaTime: number) {
        this.progress += deltaTime * 0.15
        if (this.progress > 1) this.progress = 0
      }

      getPosition() {
        let start, end
        if (this.route === 0) {
          start = cities.elAlto
          end = cities.tarija
        } else if (this.route === 1) {
          start = cities.tarija
          end = cities.bermejo
        } else {
          start = cities.bermejo
          end = cities.elAlto
        }

        const startCoords = getCoords(start)
        const endCoords = getCoords(end)

        return {
          x: startCoords.x + (endCoords.x - startCoords.x) * this.progress,
          y: startCoords.y + (endCoords.y - startCoords.y) * this.progress,
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pos = this.getPosition()
        ctx.fillStyle = primaryColor
        ctx.globalAlpha = 0.9
        ctx.fillRect(pos.x - this.size / 2, pos.y - this.size / 2, this.size, this.size)

        // Glow effect
        ctx.globalAlpha = 0.3
        ctx.fillStyle = primaryColor
        ctx.fillRect(pos.x - this.size / 2 - 4, pos.y - this.size / 2 - 4, this.size + 8, this.size + 8)
      }
    }

    const cargos = Array.from({ length: 6 }, (_, i) => new CargoBox(i % 3))

    const drawBoliviaMap = () => {
      // Simple Bolivia map outline (simplified for visualization)
      ctx.strokeStyle = primaryColor
      ctx.globalAlpha = 0.2
      ctx.lineWidth = 2

      // Draw a simplified rectangle representing Bolivia's territory
      const mapLeft = dimensions.width * 0.1
      const mapTop = dimensions.height * 0.1
      const mapWidth = dimensions.width * 0.8
      const mapHeight = dimensions.height * 0.8

      ctx.strokeRect(mapLeft, mapTop, mapWidth, mapHeight)

      // Add some internal divisions to suggest map
      ctx.globalAlpha = 0.1
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(mapLeft + mapWidth * 0.5, mapTop)
      ctx.lineTo(mapLeft + mapWidth * 0.5, mapTop + mapHeight)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(mapLeft, mapTop + mapHeight * 0.5)
      ctx.lineTo(mapLeft + mapWidth, mapTop + mapHeight * 0.5)
      ctx.stroke()
    }

    const drawCities = () => {
      Object.entries(cities).forEach(([key, city]) => {
        const coords = getCoords(city)

        // Pulsing city circle
        ctx.globalAlpha = 0.4
        const pulseSize = 15 + Math.sin(time * 2 + Object.keys(cities).indexOf(key)) * 8
        ctx.strokeStyle = primaryColor
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(coords.x, coords.y, pulseSize, 0, Math.PI * 2)
        ctx.stroke()

        // City center
        ctx.globalAlpha = 1
        ctx.fillStyle = primaryColor
        ctx.beginPath()
        ctx.arc(coords.x, coords.y, 6, 0, Math.PI * 2)
        ctx.fill()

        // City label
        ctx.globalAlpha = 0.8
        ctx.fillStyle = primaryColor
        ctx.font = 'bold 12px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(city.name, coords.x, coords.y - 30)
      })
    }

    const drawRoutes = () => {
      const routePairs = [
        { from: cities.elAlto, to: cities.tarija },
        { from: cities.tarija, to: cities.bermejo },
        { from: cities.bermejo, to: cities.elAlto },
      ]

      routePairs.forEach((route, index) => {
        const fromCoords = getCoords(route.from)
        const toCoords = getCoords(route.to)

        // Animated dashed route line
        ctx.globalAlpha = 0.3
        ctx.strokeStyle = primaryColor
        ctx.lineWidth = 2
        ctx.setLineDash([5, 5])

        // Animate dash offset
        ctx.lineDashOffset = -(time * 100) % 10

        ctx.beginPath()
        ctx.moveTo(fromCoords.x, fromCoords.y)
        ctx.lineTo(toCoords.x, toCoords.y)
        ctx.stroke()

        ctx.setLineDash([])
      })
    }

    const animate = () => {
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#152342')
      gradient.addColorStop(1, '#1a2f4a')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.016

      // Draw map and routes
      drawBoliviaMap()
      drawRoutes()
      drawCities()

      // Update and draw cargo boxes
      cargos.forEach(cargo => {
        cargo.update(0.016)
        cargo.draw(ctx)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [dimensions])

  return (
    <div className="relative h-full w-full" ref={containerRef}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#152342]/30 to-transparent pointer-events-none"></div>
    </div>
  )
}
