'use client'

import React, { useState, useEffect, useCallback, useRef } from "react"
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
}

const allWorks: Artwork[] = [
  { id: "alonso-1",  imageUrl: "/images/obras/zinnia/obra1z.jpg",  titulo: "BLANCO SINUOSO",          medidas: "183 cm x 123 cm",  tecnica: "Acrílico sobre tabla" },
  { id: "alonso-2",  imageUrl: "/images/obras/zinnia/obra2z.jpg",  titulo: "NEGRO DECIDIDO",           medidas: "183 cm x 123 cm",  tecnica: "Acrílico sobre tabla" },
  { id: "alonso-3",  imageUrl: "/images/obras/zinnia/obra3z.jpg",  titulo: "NUEVO NEGRO",              medidas: "123 cm x 191 cm",  tecnica: "Acrílico sobre tabla Tríptico" },
  { id: "alonso-4",  imageUrl: "/images/obras/zinnia/obra4z.jpg",  titulo: "LINEA APASIONADA",         medidas: "123 cm x 183 cm",  tecnica: "Acrílico sobre tabla" },
  { id: "alonso-5",  imageUrl: "/images/obras/zinnia/obra5z.jpg",  titulo: "ECO",                      medidas: "122 x 191 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-6",  imageUrl: "/images/obras/zinnia/obra6z.jpg",  titulo: "PINGÜI",                   medidas: "123 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-7",  imageUrl: "/images/obras/zinnia/obra7z.jpg",  titulo: "VUÉLAME",                  medidas: "122 x 196 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-8",  imageUrl: "/images/obras/zinnia/obra8z.jpg",  titulo: "DENTRO DEL AIRE",          medidas: "183 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-9",  imageUrl: "/images/obras/zinnia/obra9z.jpg",  titulo: "LÍNEAS SENTIMENTALES",     medidas: "183 x 122 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-10", imageUrl: "/images/obras/zinnia/obra10z.jpg", titulo: "EL INDÓMITO",              medidas: "123 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-11", imageUrl: "/images/obras/zinnia/obra11z.jpg", titulo: "LA LÍNEA QUE HUYE",        medidas: "183 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-12", imageUrl: "/images/obras/zinnia/obra12z.jpg", titulo: "SÓLO NOSOTROS DOS",        medidas: "150 x 244 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-13", imageUrl: "/images/obras/zinnia/obra13z.jpg", titulo: "LÍNEAS DE VERANO",         medidas: "122 x 244 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-14", imageUrl: "/images/obras/zinnia/obra14z.jpg", titulo: "TIZA TURQUESA",            medidas: "123 x 196 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-15", imageUrl: "/images/obras/zinnia/obra15z.jpg", titulo: "DEJA QUE SEA",             medidas: "150 x 245 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-16", imageUrl: "/images/obras/zinnia/obra16z.jpg", titulo: "MEDITERRÁNEO",             medidas: "183 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-17", imageUrl: "/images/obras/zinnia/obra17z.jpg", titulo: "BIENVENIDO",               medidas: "163 x 123 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-18", imageUrl: "/images/obras/zinnia/obra18z.jpg", titulo: "SALVAJE AZUL",             medidas: "183 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-19", imageUrl: "/images/obras/zinnia/obra19z.jpg", titulo: "VIENTO BLANCO",            medidas: "123 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-20", imageUrl: "/images/obras/zinnia/obra20z.jpg", titulo: "LA LILA",                  medidas: "150 x 245 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-21", imageUrl: "/images/obras/zinnia/obra21z.jpg", titulo: "DÍA FELIZ",                medidas: "123 x 203 cm",     tecnica: "Acrílico sobre tabla Tríptico" },
  { id: "alonso-22", imageUrl: "/images/obras/zinnia/obra22z.jpg", titulo: "A TRAVÉS DEL BLANCO",      medidas: "123 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-23", imageUrl: "/images/obras/zinnia/obra23z.jpg", titulo: "LAS LÍNEAS QUE ENCUENTRO", medidas: "123 x 198 cm",     tecnica: "Acrílico sobre tabla Tríptico" },
  { id: "alonso-24", imageUrl: "/images/obras/zinnia/obra24z.jpg", titulo: "LÍNEA CELOSA",             medidas: "122 x 198 cm",     tecnica: "Acrílico sobre tabla Tríptico" },
  { id: "alonso-25", imageUrl: "/images/obras/zinnia/obra25z.jpg", titulo: "EL ROMÁNTICO",             medidas: "150 x 240 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-26", imageUrl: "/images/obras/zinnia/obra26z.jpg", titulo: "EN ALGÚN LUGAR",           medidas: "122 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-27", imageUrl: "/images/obras/zinnia/obra27z.jpg", titulo: "CAMINANDO III",            medidas: "122 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-28", imageUrl: "/images/obras/zinnia/obra28z.jpg", titulo: "EL IMPARABLE",             medidas: "123 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-29", imageUrl: "/images/obras/zinnia/obra29z.jpg", titulo: "LÍNEAS DE PRIMAVERA",      medidas: "123 x 183 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-30", imageUrl: "/images/obras/zinnia/obra30z.jpg", titulo: "LÍNEA ARRIESGADA",         medidas: "122 x 180 cm",     tecnica: "Acrílico sobre tabla Díptico" },
  { id: "alonso-31", imageUrl: "/images/obras/zinnia/obra31z.jpg", titulo: "MEDIANOCHE",               medidas: "122 x 122 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-32", imageUrl: "/images/obras/zinnia/obra32z.jpg", titulo: "NOCHE AZUL",               medidas: "122 x 122 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-33", imageUrl: "/images/obras/zinnia/obra33z.jpg", titulo: "SORPRESA",                 medidas: "122 x 122 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-34", imageUrl: "/images/obras/zinnia/obra34z.jpg", titulo: "LÍNEAS DE SEPTIEMBRE I",   medidas: "122 x 122 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-35", imageUrl: "/images/obras/zinnia/obra35z.jpg", titulo: "LÍNEAS DE SEPTIEMBRE II",  medidas: "122 x 122 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-36", imageUrl: "/images/obras/zinnia/obra36z.jpg", titulo: "AZUL TOZUDO",              medidas: "150 x 122 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-37", imageUrl: "/images/obras/zinnia/obra37z.jpg", titulo: "EN SILENCIO II",           medidas: "150 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-38", imageUrl: "/images/obras/zinnia/obra38z.jpg", titulo: "EN SILENCIO I",            medidas: "150 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-39", imageUrl: "/images/obras/zinnia/obra39z.jpg", titulo: "EN SILENCIO III",          medidas: "150 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-40", imageUrl: "/images/obras/zinnia/obra40z.jpg", titulo: "EL DESPRENDIDO",           medidas: "123 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-41", imageUrl: "/images/obras/zinnia/obra41z.jpg", titulo: "EL INEXPLICABLE",          medidas: "123 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-42", imageUrl: "/images/obras/zinnia/obra42z.jpg", titulo: "EL LIBERADO",              medidas: "123 x 123 cm",     tecnica: "Acrílico sobre tabla" },
  { id: "alonso-43", imageUrl: "/images/obras/zinnia/obra43z.jpg", titulo: "SOÑANDO LÍNEAS",           medidas: "123 x 123 cm",     tecnica: "Acrílico sobre tabla" },
]

const WORKS_PER_PAGE = 12

export default function ZinniaPage() {
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
    name: "ZINNIA CLAVO",
    image: "/images/featured/artwork10.jpg",
    bio: `La obra pictórica de Zinnia está en constante evolución. No deja de investigar y ahondar en su técnica definiendo un lenguaje propio difícil de catalogar. Una visión abstracta y desconceptualizada del mundo, conseguida a través de un intenso trabajo y una fuerte carga emocional que acaban formando un universo personal y único.

La abstracción me ofrece posibilidades infinitas, una gran libertad. Busco el máximo de expresión a través de la oposición de elementos. Me fascina la relación entre caos y equilibrio, entre movimiento y estabilidad, entre desasosiego y armonía.

Me interesan los juegos de luces y sombras, los contrastes, el dinamismo, las texturas, las transparencias. La relación entre las líneas rectas que el hombre ha creado, junto a las líneas ondulantes de la Naturaleza.

Reducir el color a blanco y negro me ayuda a desarrollar mi intención, a concentrarme en la expresividad y en el propio acto de pintar. Historia del Arte. Filosofía y Letras. Universidad Autónoma de Madrid (1979-1984). Master Bellas Artes en la Universidad Jagellonska de Cracovia (1985-1987).`,
    imageCredit: "Imagen cortesía del artista",
  }

  // Cerrar modal con Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  // Bloquear scroll al abrir modal
  useEffect(() => {
    if (selectedWork) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
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
    if (isDragging) {
      setDragOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
    }
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
            {/* Bio + CTAs */}
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
                  onClick={() => handlePDFOpen("/exposiciones/exposzinnia.pdf")}
                  className="group flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-800 hover:border-gray-800 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">Ver Exposiciones</span>
                </motion.button>

                <motion.button
                  onClick={() => handlePDFOpen("/exposiciones/portfoliozinnia.pdf")}
                  className="group flex items-center gap-3 px-6 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">Descargar Portfolio</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Artist Image */}
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
          {/* Header con contador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">
                OBRAS
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {allWorks.length} obras · Página {currentPage} de {totalPages}
              </p>
            </div>
          </motion.div>

          {/* Grid 3 columnas */}
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
                  {/* Overlay hover con icono lupa */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900 tracking-wide">{artwork.titulo}</p>
                  <p className="text-xs text-gray-500">{artwork.tecnica}</p>
                  <p className="text-xs text-gray-400">{artwork.medidas}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Paginación ── */}
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

      {/* ── CTA: Explorar más obras ── */}
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
              {/* Ver todas las obras */}
              <Link
                href="/obras"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gray-900 text-white hover:bg-black transition-all duration-300"
              >
                <span className="text-sm uppercase tracking-wider font-medium">Catálogo completo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              {/* Ver otros artistas */}
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
                  {selectedWork.titulo || "Sin título"}
                </p>
                <span className="text-white/20">·</span>
                <p className="text-white/40 text-xs">{artist.name}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cuerpo principal: imagen izquierda + panel derecho */}
            <div className="flex flex-1 overflow-hidden">

              {/* ── Columna izquierda: imagen con zoom ── */}
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

                {/* Zoom controls flotantes sobre la imagen */}
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

              {/* ── Columna derecha: ficha + miniaturas ── */}
              <div className="w-64 shrink-0 border-l border-white/10 flex flex-col bg-[#111111] overflow-y-auto">

                {/* Ficha técnica */}
                <div className="p-5 border-b border-white/10 space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(234,0,0,0.5)" }}>Obra</p>
                    <p className="text-sm font-light leading-snug" style={{ color: "#EA0000" }}>{selectedWork.titulo || "Sin título"}</p>
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

                {/* Obras relacionadas — miniaturas pequeñas */}
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
                        {/* Miniatura */}
                        <div className="relative w-12 h-12 shrink-0 overflow-hidden bg-white/5">
                          <Image
                            src={w.imageUrl}
                            alt={w.titulo}
                            fill
                            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                            sizes="48px"
                          />
                        </div>
                        {/* Título */}
                        <div className="min-w-0">
                          <p className="text-white/60 group-hover:text-white/90 text-[11px] font-light leading-snug line-clamp-2 transition-colors duration-150">
                            {w.titulo || "Sin título"}
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