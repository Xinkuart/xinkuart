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
  { id: "infante-11", imageUrl: "/images/obras/infante/infante1.jpg",  titulo: "Invocación De Eones",          medidas: "200 x 160 cm", tecnica: "Gesso, Enamel and oil on canvas" },
  { id: "infante-12", imageUrl: "/images/obras/infante/infante2.jpg",  titulo: "Flores Crudas",                medidas: "200 x 160 cm", tecnica: "Gesso, Enamel and oil on canvas" },
  { id: "infante-13", imageUrl: "/images/obras/infante/infante3.jpg",  titulo: "SW",                           medidas: "150 x 200 cm", tecnica: "Gesso, Enamel and oil on canvas" },
  { id: "infante-14", imageUrl: "/images/obras/infante/infante4.jpg",  titulo: "Still Warrior",                medidas: "150 x 100 cm", tecnica: "Vinylic on canvas" },
  { id: "infante-15", imageUrl: "/images/obras/infante/infante5.jpg",  titulo: "Ocean of Night",               medidas: "140 x 110 cm", tecnica: "Gesso, Enamel and oil on canvas" },
  { id: "infante-16", imageUrl: "/images/obras/infante/infante6.jpg",  titulo: "Italo Wings",                  medidas: "150 x 165 cm", tecnica: "Gesso, gouache, spray sobre papel" },
  { id: "infante-17", imageUrl: "/images/obras/infante/infante7.jpg",  titulo: "Adventure",                    medidas: "100 x 70 cm",  tecnica: "Gesso, pastel, gouache sobre papel" },
  { id: "infante-18", imageUrl: "/images/obras/infante/infante8.jpg",  titulo: "Sunnydale",                    medidas: "96 x 75 cm",   tecnica: "Gesso, Enamel and oil on canvas" },
  { id: "infante-19", imageUrl: "/images/obras/infante/infante9.jpg",  titulo: "Resize",                       medidas: "50 x 40 cm",   tecnica: "Gesso, Enamel, spray Paint and oil on canvas" },
  { id: "infante-20", imageUrl: "/images/obras/infante/infante10.jpg", titulo: "Flores y Centellas",           medidas: "50 x 70 cm",   tecnica: "Ink and pastel on paper" },
  { id: "infante-21", imageUrl: "/images/obras/infante/infante11.jpg", titulo: "Flores y Centellas II",        medidas: "50 x 70 cm",   tecnica: "Ink and pastel on paper" },
  { id: "infante-22", imageUrl: "/images/obras/infante/infante12.jpg", titulo: "Flores y Centellas III",       medidas: "50 x 70 cm",   tecnica: "Ink and pastel on paper" },
  { id: "infante-23", imageUrl: "/images/obras/infante/infante13.jpg", titulo: "Latveria",                     medidas: "70 x 100 cm",  tecnica: "Gesso, pastel, gouache sobre papel" },
  { id: "infante-24", imageUrl: "/images/obras/infante/infante14.jpg", titulo: "La Primera Rima",              medidas: "50 x 50 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-25", imageUrl: "/images/obras/infante/infante15.jpg", titulo: "Lo siguiente es oro",          medidas: "50 x 50 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-26", imageUrl: "/images/obras/infante/infante16.jpg", titulo: "Los Siglos",                   medidas: "30 x 40 cm",   tecnica: "Tinta, spray y pastel sobre lienzo" },
  { id: "infante-27", imageUrl: "/images/obras/infante/infante17.jpg", titulo: "The Romantic Warrior",         medidas: "50 x 40 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-28", imageUrl: "/images/obras/infante/infante18.jpg", titulo: "Cuatro acordes y la verdad",   medidas: "45 x 38 cm",   tecnica: "Tinta, spray y pastel sobre lienzo" },
  { id: "infante-29", imageUrl: "/images/obras/infante/infante19.jpg", titulo: "Pulsar",                       medidas: "30 x 24 cm",   tecnica: "Tinta, spray y pastel sobre lienzo" },
  { id: "infante-30", imageUrl: "/images/obras/infante/infante20.jpg", titulo: "Hölderlin",                    medidas: "22 x 29 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-31", imageUrl: "/images/obras/infante/infante21.jpg", titulo: "Mission",                      medidas: "40 x 30 cm",   tecnica: "Tinta, spray y pastel sobre lienzo" },
  { id: "infante-32", imageUrl: "/images/obras/infante/infante22.jpg", titulo: "Los Abismos De Yupi",          medidas: "30 x 24 cm",   tecnica: "Gesso y acrílico sobre lienzo" },
  { id: "infante-33", imageUrl: "/images/obras/infante/infante23.jpg", titulo: "Judas Priest",                 medidas: "30 x 24 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-34", imageUrl: "/images/obras/infante/infante24.jpg", titulo: "Song",                         medidas: "30 x 24 cm",   tecnica: "Gesso y acrílico sobre lienzo" },
  { id: "infante-35", imageUrl: "/images/obras/infante/infante25.jpg", titulo: "Mayo en Junio",                medidas: "24 x 17 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-36", imageUrl: "/images/obras/infante/infante26.jpg", titulo: "Pink Dead Redemption",         medidas: "70 x 100 cm",  tecnica: "Pastel on paper" },
  { id: "infante-2",  imageUrl: "/images/obras/obra21.jpg",            titulo: "Go Nagai's Cutie Honey",       medidas: "40 x 40 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-3",  imageUrl: "/images/obras/obra22.jpg",            titulo: "Hounds Of Love",               medidas: "50 x 40 cm",   tecnica: "Pintura metálica y acrílico sobre lienzo" },
  { id: "infante-4",  imageUrl: "/images/obras/obra23.jpg",            titulo: "Los Dioses Del Placer",        medidas: "40 x 30 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-5",  imageUrl: "/images/obras/obra24.jpg",            titulo: "La tercera noche",             medidas: "50 x 40 cm",   tecnica: "Pintura metálica y acrílico sobre lienzo" },
  { id: "infante-6",  imageUrl: "/images/obras/obra25.jpg",            titulo: "Physical Avant-Garde",         medidas: "40 x 30 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-7",  imageUrl: "/images/obras/obra26.jpg",            titulo: "The Harvest",                  medidas: "50 x 40 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-8",  imageUrl: "/images/obras/obra27.jpg",            titulo: "Tecnocisne",                   medidas: "50 x 40 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-9",  imageUrl: "/images/obras/obra28.jpg",            titulo: "The Romantic Warrior",         medidas: "50 x 40 cm",   tecnica: "Acrílico sobre lienzo" },
  { id: "infante-10", imageUrl: "/images/obras/obra29.jpg",            titulo: "The Witch",                    medidas: "50 x 40 cm",   tecnica: "Acrílico sobre lienzo" },
]

const WORKS_PER_PAGE = 12

export default function InfantePage() {
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
    name: "EDUARDO INFANTE",
    image: "/images/featured/artwork5.jpg",
    bio: `Se podría decir que la canción es mi unidad de medida pictórica. Para mí, una pintura se compone de información plástica descomprimida de manera que el que la contempla pueda disfrutar de esa información no de una vez sino a lo largo del tiempo, como si fuese música.

Los simbolistas ya en el tramo final del romanticismo fueron conscientes de que necesitaban un nuevo lenguaje plástico si querían estar a la altura de las obras de Wagner y Strauss. La ficción no es un mero simulacro, es un lenguaje, que como decía Wilde nos permite contar mentiras que son verdad.

Mi intención, aunque parezca muy ambiciosa, en el fondo solo pretende crear para la atención un objeto digno de aprecio. Al final, la letra y la música son cosas distintas que si confluyen de manera feliz pueden dar lugar a una nueva, simple y gloriosa canción.

El arte contemporáneo necesita recuperar su capacidad de seducción y fascinación, su poder de convocar emociones profundas a través de la contemplación estética.`,
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
                  onClick={() => handlePDFOpen("/exposiciones/exposinfante.pdf")}
                  className="group flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">Ver Exposiciones</span>
                </motion.button>

                <motion.button
                  onClick={() => handlePDFOpen("/exposiciones/portfolioinfante.pdf")}
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