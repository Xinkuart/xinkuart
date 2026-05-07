'use client'

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Download, FileText, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

type Artwork = {
  id: string
  titulo: string
  tecnica: string
  medidas: string
  imageUrl: string
  año?: string
  vendido?: boolean
}

const allWorks: Artwork[] = [
  { id: "ayela-11", imageUrl: "/images/obras/ayela/obra20.jpg", titulo: "Acéfalo Panadhesivo",                    medidas: "200 x 160 cm",  tecnica: "Acrílico y spray/papel sobre tela",                          año: "2008" },
  { id: "ayela-12", imageUrl: "/images/obras/ayela/obra21.jpg", titulo: "Flor del paraíso nº2",                   medidas: "150 x 200 cm",  tecnica: "Pastel, spray y collage/papel",                               año: "2002" },
  { id: "ayela-13", imageUrl: "/images/obras/ayela/obra22.jpg", titulo: "Linterna Verde",                         medidas: "150 x 200 cm",  tecnica: "Acrílico sobre Lienzo",                                       año: "2002" },
  { id: "ayela-14", imageUrl: "/images/obras/ayela/obra23.jpg", titulo: "The talker beyond understanding",         medidas: "70 x 100 cm",   tecnica: "Rotulador/papel",                                             año: "2007" },
  { id: "ayela-15", imageUrl: "/images/obras/ayela/obra24.jpg", titulo: "The young sleigh driver",                medidas: "100 x 140 cm",  tecnica: "Acrílico/papel",                                              año: "2008" },
  { id: "ayela-16", imageUrl: "/images/obras/ayela/obra25.jpg", titulo: "Segundo la cabeza, después lo primero",  medidas: "70 x 100 cm",   tecnica: "Vinilo adhesivo/papel",                                       año: "2009" },
  { id: "ayela-17", imageUrl: "/images/obras/ayela/obra26.jpg", titulo: "Prototótem",                             medidas: "70 x 100 cm",   tecnica: "Vinilo adhesivo/papel",                                       año: "2009" },
  { id: "ayela-18", imageUrl: "/images/obras/ayela/obra27.jpg", titulo: "Total rescue",                           medidas: "114 x 130 cm",  tecnica: "Acrílico y rotulador/lienzo",                                 año: "2008" },
  { id: "ayela-19", imageUrl: "/images/obras/ayela/obra28.jpg", titulo: "Rescue",                                 medidas: "160 x 200 cm",  tecnica: "Acrílico y spray sobre lienzo",                               año: "2008" },
  { id: "ayela-20", imageUrl: "/images/obras/ayela/obra29.jpg", titulo: "Fisherman's Garrotte",                   medidas: "114 x 130 cm",  tecnica: "Acrílico y rotulador/lienzo",                                 año: "2008" },
  { id: "ayela-21", imageUrl: "/images/obras/ayela/obra30.jpg", titulo: "Light dispersion",                       medidas: "200 x 266 cm",  tecnica: "Acrílico y rotulador/lienzo",                                 año: "2008" },
  { id: "ayela-22", imageUrl: "/images/obras/ayela/obra31.jpg", titulo: "Triste Rey Billie",                      medidas: "70 x 100 cm",   tecnica: "Vinilo adhesivo y blondas/papel",                             año: "2009" },
  { id: "ayela-23", imageUrl: "/images/obras/ayela/obra32.jpg", titulo: "Babero carlanca",                        medidas: "200 x 150 cm",  tecnica: "Tinta y rotulador/papel de arroz",                            año: "2008" },
  { id: "ayela-24", imageUrl: "/images/obras/ayela/obra33.jpg", titulo: "Exactly like you",                       medidas: "130 x 270 cm",  tecnica: "Ensamblaje, collage, esténcil e impresión digital/diversos",  año: "2010" },
  { id: "ayela-25", imageUrl: "/images/obras/ayela/obra34.jpg", titulo: "Vientre Probeta",                        medidas: "91,5 x 61 cm",  tecnica: "Rotulador y acuarela sobre papel",                            año: "2006" },
  { id: "ayela-26", imageUrl: "/images/obras/ayela/obra35.jpg", titulo: "Flor del paraíso nº1",                   medidas: "88 x 82 cm",    tecnica: "Pastel sobre papel cosido",                                   año: "2002" },
  { id: "ayela-27", imageUrl: "/images/obras/ayela/obra36.jpg", titulo: "Bailarina pinocha",                      medidas: "33 x 23 cm",    tecnica: "Agujas de pino (pinocha) y tintas de plóter sobre papel",     año: "2017" },
  { id: "ayela-28", imageUrl: "/images/obras/ayela/obra37.jpg", titulo: "The rise of Pibody",                     medidas: "50 x 40 cm",    tecnica: "Rotulador y collage/papel",                                   año: "2011" },
  { id: "ayela-29", imageUrl: "/images/obras/ayela/obra38.jpg", titulo: "Ni fe ni promesas",                      medidas: "162 x 114 cm",  tecnica: "Acrílico sobre lienzo",                                       año: "2017" },
  { id: "ayela-30", imageUrl: "/images/obras/ayela/obra39.jpg", titulo: "Patrón japonés The natural Way",         medidas: "80 x 55 cm",    tecnica: "Acrílico, rotulador y collage sobre papel",                   año: "2011" },
  { id: "ayela-31", imageUrl: "/images/obras/ayela/obra40.jpg", titulo: "Blood bubble landscape 1",               medidas: "61 x 91,5 cm",  tecnica: "Rotulador y pastel sobre papel",                              año: "2006" },
  { id: "ayela-32", imageUrl: "/images/obras/ayela/obra41.jpg", titulo: "Blood bubble landscape 2",               medidas: "61 x 91,5 cm",  tecnica: "Rotulador y pastel sobre papel",                              año: "2006" },
  { id: "ayela-1",  imageUrl: "/images/obras/ayela/obra10.jpg", titulo: "Undo Sistemas",                          medidas: "242 x 247 cm",  tecnica: "Acrílico y rotulador sobre tabla" },
  { id: "ayela-2",  imageUrl: "/images/obras/ayela/obra11.jpg", titulo: "Perfect Score",                          medidas: "100 x 175 cm",  tecnica: "Rotulador y pastel sobre papel" },
  { id: "ayela-3",  imageUrl: "/images/obras/ayela/obra12.jpg", titulo: "Flat Mountain nº 34",                    medidas: "150 x 200 cm",  tecnica: "Spray, rotulador y collage sobre papel" },
  { id: "ayela-4",  imageUrl: "/images/obras/ayela/obra13.jpg", titulo: "Antiente",                               medidas: "100 x 118 cm",  tecnica: "Acrílico y collage sobre papel" },
  { id: "ayela-5",  imageUrl: "/images/obras/ayela/obra14.jpg", titulo: "Waiting for Godzilla",                   medidas: "165 x 208 cm",  tecnica: "Acrílico y collage sobre tabla y tela" },
  { id: "ayela-6",  imageUrl: "/images/obras/ayela/obra15.jpg", titulo: "Polinizador",                            medidas: "114 x 130 cm",  tecnica: "Acrílico sobre lienzo" },
  { id: "ayela-7",  imageUrl: "/images/obras/ayela/obra16.jpg", titulo: "Gran pelea",                             medidas: "207 x 148 cm",  tecnica: "Técnica mixta en Papel sobre dibond" },
  { id: "ayela-8",  imageUrl: "/images/obras/ayela/obra17.jpg", titulo: "Gran despojo",                           medidas: "207 x 148 cm",  tecnica: "Técnica mixta en Papel sobre dibond" },
  { id: "ayela-9",  imageUrl: "/images/obras/ayela/obra18.jpg", titulo: "Doble hocico flor",                      medidas: "200 x 150 cm",  tecnica: "Acrílico y carboncillo sobre lienzo" },
  { id: "ayela-10", imageUrl: "/images/obras/ayela/obra19.jpg", titulo: "Soul Crafts",                            medidas: "140 x 200 cm",  tecnica: "Acrílico y cinta adhesiva sobre lienzo" },
]

const WORKS_PER_PAGE = 12

export default function AyelaPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedWork, setSelectedWork] = useState<Artwork | null>(null)
  const [relatedWorks, setRelatedWorks] = useState<Artwork[]>([])
  const [zoom, setZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const worksGridRef = useRef<HTMLElement>(null)

  const totalPages = Math.ceil(allWorks.length / WORKS_PER_PAGE)
  const paginatedWorks = allWorks.slice(
    (currentPage - 1) * WORKS_PER_PAGE,
    currentPage * WORKS_PER_PAGE
  )

  const artist = {
    name: "AURELIO AYELA",
    image: "/images/featured/artwork3.jpg",
    bio: `La aparente simplicidad de las imágenes, así como la carga de humor y sentido de lo lúdico, esconden, sin embargo, claves interpretativas complejas que cuestionan las dicotomías entre peso y levedad, épico y trivial, tangible e ilusorio.

Esto tiene entre otros sentidos revisar la exacerbada confusión entre realidad y signo, clarificar e intentar evidenciar su conflicto de sustitución. Queriendo extraer experiencia desde lo concreto y significado desde la experiencia, la obra se definirá desde lo procesual como exploración abierta del entorno y de los medios.

Se trata de activar, a través de la imaginación, la naturaleza dinámica de lo real frente al reduccionismo de los condicionamientos mediáticos del cliché y la inercia cultural. Y aprender por contacto, no por conciencia.

A partir del uso heterodoxo de materiales comunes y la investigación de otros alternativos, o la combinación de medios tecnológicos con manualidades rudimentarias, procuro conectar, desde el ensayo de los estilos, con la fenomenología esencial de la expresión estética. No solo como motor de significado sino, sobre todo, como motor de realidad.`,
    imageCredit: "Imagen cortesía del artista",
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal() }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedWork ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selectedWork])

  const openModal = (work: Artwork) => {
    const related = allWorks
      .filter((w) => w.id !== work.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
    setRelatedWorks(related)
    setSelectedWork(work)
    setZoom(1)
    setDragOffset({ x: 0, y: 0 })
  }

  const closeModal = () => {
    setSelectedWork(null)
    setZoom(1)
    setDragOffset({ x: 0, y: 0 })
  }

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 3))
  const handleZoomOut = () => setZoom((z) => {
    const next = Math.max(z - 0.5, 1)
    if (next === 1) setDragOffset({ x: 0, y: 0 })
    return next
  })

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y })
    }
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) setDragOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
  }
  const handleMouseUp = () => setIsDragging(false)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setTimeout(() => {
      worksGridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  const handlePDFOpen = (pdfPath: string) => window.open(pdfPath, "_blank")

  return (
    <main className="bg-white min-h-screen pt-20">

      {/* ── Artist Header ── */}
      <section className="px-6 lg:px-16 pt-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-wide mb-12"
          >
            {artist.name}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4 text-gray-900 leading-relaxed">
                {artist.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg font-light">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <motion.button
                  onClick={() => handlePDFOpen("/exposiciones/exposaurelio.pdf")}
                  className="group flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">Ver Exposiciones</span>
                </motion.button>

                <motion.button
                  onClick={() => handlePDFOpen("/exposiciones/portfolioaurelio.pdf")}
                  className="group flex items-center gap-3 px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">Descargar Portfolio</span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square relative overflow-hidden shadow-lg">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">{artist.imageCredit}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Works Grid ── */}
      <section ref={worksGridRef} className="px-6 lg:px-16 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">OBRAS</h2>
              <p className="text-sm text-gray-500 mt-1">
                {allWorks.length} obras · Página {currentPage} de {totalPages}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedWorks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 12) * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openModal(artwork)}
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={artwork.imageUrl}
                    alt={artwork.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900 tracking-wide">{artwork.titulo}</p>
                  <p className="text-xs text-gray-500">{artwork.tecnica}</p>
                  <p className="text-xs text-gray-400">{artwork.medidas}</p>
                  {artwork.vendido && (
                    <div className="flex items-center gap-1.5 pt-0.5">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#EA0000" }} />
                      <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "#EA0000" }}>Vendido</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-9 h-9 text-sm font-medium transition-all duration-200 ${
                    currentPage === page
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 lg:px-16 py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide mb-2">
                Descubre más arte
              </h3>
              <p className="text-gray-500 font-light text-sm md:text-base max-w-md">
                Explora el catálogo completo de la galería o conoce el trabajo de otros artistas que representamos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/obras"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gray-900 text-white hover:bg-black transition-all duration-300"
              >
                <span className="text-sm uppercase tracking-wider font-medium">Catálogo completo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/artistas"
                className="group inline-flex items-center gap-3 px-7 py-3.5 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <span className="text-sm uppercase tracking-wider font-medium">Otros artistas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Nav back ── */}
      <section className="px-6 lg:px-16 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/artistas"
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span className="text-sm uppercase tracking-wider font-medium">Volver a Artistas</span>
          </Link>
        </div>
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a]"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <p className="font-light tracking-widest text-xs uppercase" style={{ color: "#EA0000" }}>
                  {selectedWork.titulo}
                </p>
                <span className="text-white/20">·</span>
                <p className="text-white/40 text-xs">{artist.name}</p>
              </div>
              <button onClick={closeModal} className="p-2 text-white/50 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cuerpo: imagen izquierda + panel derecho */}
            <div className="flex flex-1 overflow-hidden">

              {/* Imagen con zoom */}
              <div
                className="flex-1 overflow-hidden flex items-center justify-center relative bg-[#0a0a0a]"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
              >
                <div
                  style={{
                    transform: `scale(${zoom}) translate(${dragOffset.x / zoom}px, ${dragOffset.y / zoom}px)`,
                    transition: isDragging ? "none" : "transform 0.3s ease",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <Image
                    src={selectedWork.imageUrl}
                    alt={selectedWork.titulo}
                    fill
                    className="object-contain"
                    sizes="75vw"
                    priority
                    draggable={false}
                  />
                </div>

                {/* Zoom controls flotantes */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <button
                    onClick={handleZoomOut}
                    disabled={zoom <= 1}
                    className="text-white/60 hover:text-white disabled:opacity-30 transition-colors p-0.5"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-white/50 text-xs w-8 text-center">{Math.round(zoom * 100)}%</span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoom >= 3}
                    className="text-white/60 hover:text-white disabled:opacity-30 transition-colors p-0.5"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Panel derecho */}
              <div className="w-64 shrink-0 border-l border-white/10 flex flex-col bg-[#111111] overflow-y-auto">

                {/* Ficha técnica */}
                <div className="p-5 border-b border-white/10 space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(234,0,0,0.5)" }}>Obra</p>
                    <p className="text-sm font-light leading-snug" style={{ color: "#EA0000" }}>{selectedWork.titulo}</p>
                    {selectedWork.vendido && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#EA0000" }} />
                        <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "#EA0000" }}>Vendido</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(234,0,0,0.6)" }}>Técnica</p>
                    <p className="text-white/70 text-xs font-light leading-relaxed">{selectedWork.tecnica}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(234,0,0,0.6)" }}>Dimensiones</p>
                    <p className="text-white/70 text-xs font-light">{selectedWork.medidas}</p>
                  </div>
                  {selectedWork.año && (
                    <div>
                      <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(234,0,0,0.6)" }}>Año</p>
                      <p className="text-white/70 text-xs font-light">{selectedWork.año}</p>
                    </div>
                  )}
                </div>

                {/* Adquirir obra */}
                {!selectedWork.vendido && (
                  <div className="p-5 border-b border-white/10">
                    <Link
                      href="/contacto"
                      onClick={closeModal}
                      className="flex items-center justify-center w-full py-2.5 text-[11px] uppercase tracking-widest font-medium transition-all duration-200"
                      style={{ backgroundColor: "#EA0000", color: "#fff" }}
                    >
                      Adquirir obra
                    </Link>
                  </div>
                )}

                {/* Obras relacionadas */}
                <div className="p-5 flex-1">
                  <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: "rgba(234,0,0,0.6)" }}>Más obras</p>
                  <div className="flex flex-col gap-3">
                    {relatedWorks.map((w) => (
                      <button
                        key={w.id}
                        onClick={() => {
                          const newRelated = allWorks
                            .filter((x) => x.id !== w.id)
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 3)
                          setRelatedWorks(newRelated)
                          setSelectedWork(w)
                          setZoom(1)
                          setDragOffset({ x: 0, y: 0 })
                        }}
                        className="group flex items-center gap-3 text-left hover:bg-white/5 rounded p-1 -mx-1 transition-colors duration-150"
                      >
                        <div className="relative w-12 h-12 shrink-0 overflow-hidden bg-white/5">
                          <Image
                            src={w.imageUrl}
                            alt={w.titulo}
                            fill
                            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                            sizes="48px"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="text-white/60 group-hover:text-white/90 text-[11px] font-light leading-snug line-clamp-2 transition-colors duration-150">
                            {w.titulo}
                          </p>
                          <p className="text-white/30 text-[10px] mt-0.5">{w.medidas}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}