'use client'

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Download, FileText } from "lucide-react"

type Artwork = {
  id: string
  title: string
  year: string
  technique: string
  dimensions: string
  image: string
}

export default function AyelaPage() {
  // Datos del artista
  const artist = {
    name: "AURELIO AYELA",
    slug: "ayela",
    image: "/images/featured/artwork3.jpg",
    bio: `La aparente simplicidad de las imágenes, así como la carga de humor y sentido de lo lúdico, esconden, sin embargo, claves interpretativas complejas que cuestionan las dicotomías entre peso y levedad, épico y trivial, tangible e ilusorio.

    Esto tiene entre otros sentidos revisar la exacerbada confusión entre realidad y signo, clarificar e intentar evidenciar su conflicto de sustitución. Queriendo extraer experiencia desde lo concreto y significado desde la experiencia, la obra se definirá desde lo procesual como exploración abierta del entorno y de los medios. 
    
    Se trata de activar, a través de la imaginación, la naturaleza dinámica de lo real frente al reduccionismo de los condicionamientos mediáticos del cliché y la inercia cultural. Y aprender por contacto, no por conciencia.

    A partir del uso heterodoxo de materiales comunes y la investigación de otros alternativos, o la combinación de medios tecnológicos con manualidades rudimentarias, procuro conectar, desde el ensayo de los estilos, con la fenomenología esencial de la expresión estética. No solo como motor de significado sino, sobre todo, como motor de realidad.`,
    imageCredit: "Imagen cortesía del artista"
  }

  // Obras seleccionadas del artista
  const selectedWorks: Artwork[] = [
    {
      id: 'ayela-1',
      title: 'Acéfalo Panadhesivo',
      year: '2008',
      technique: 'Acrílico y spray/papel sobre tela',
      dimensions: '200 x 160 cm',
      image: '/images/obras/ayela/obra20.jpg'
    },
    {
      id: 'ayela-2',
      title: 'Flor del paraíso nº2',
      year: '2002',
      technique: 'Pastel, spray y collage/papel',
      dimensions: '150 x 200 cm',
      image: '/images/obras/ayela/obra21.jpg'
    },
    {
      id: 'ayela-3',
      title: 'Linterna Verde',
      year: '2002',
      technique: 'Acrílico sobre Lienzo',
      dimensions: '150 x 200 cm',
      image: '/images/obras/ayela/obra22.jpg'
    },
    {
      id: 'ayela-4',
      title: 'Polinizador',
      year: '2008',
      technique: 'Acrílico sobre lienzo',
      dimensions: '114 x 130 cm',
      image: '/images/obras/ayela/obra15.jpg'
    },
    {
      id: 'ayela-5',
      title: 'Flat Mountain nº 34',
      year: '2005',
      technique: 'Spray, rotulador y collage sobre papel',
      dimensions: '150 x 200 cm',
      image: '/images/obras/ayela/obra12.jpg'
    },
    {
      id: 'ayela-6',
      title: 'Antiente',
      year: '2004',
      technique: 'Acrílico y collage sobre papel',
      dimensions: '100 x 118 cm',
      image: '/images/obras/ayela/obra13.jpg'
    }
  ]

  // Función para abrir PDFs en nueva ventana
  const handlePDFOpen = (pdfPath: string) => {
    window.open(pdfPath, '_blank')
  }

  return (
    <main className="bg-white min-h-screen pt-20">
      {/* Artist Header Section */}
      <section className="px-6 lg:px-16 pt-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 tracking-wide mb-12"
          >
            {artist.name}
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Artist Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4 text-gray-900 leading-relaxed">
                {artist.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg font-light">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              {/* PDF Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-6 mb-8"
              >
                {/* Botón Exposiciones */}
                <motion.button
                  onClick={() => handlePDFOpen('/exposiciones/exposaurelio.pdf')}
                  className="group relative flex items-center gap-3 px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-800 hover:border-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                  <span className="font-medium text-sm uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                    Ver Exposiciones
                  </span>
                  <div className="w-2 h-2 bg-current rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                {/* Botón Portfolio */}
                <motion.button
                  onClick={() => handlePDFOpen('/exposiciones/portfolioaurelio.pdf')}
                  className="group relative flex items-center gap-3 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium text-sm uppercase tracking-wide">
                    Descargar Portfolio
                  </span>
                  <div className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Artist Image - alineada con la biografía */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/4] relative overflow-hidden shadow-lg">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">
                {artist.imageCredit}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="px-6 lg:px-16 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-wide">
              OBRAS SELECCIONADAS
            </h2>
          </motion.div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedWorks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {/* Artwork Image */}
                <div className="aspect-square relative overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Artwork Info */}
                <div className="space-y-2">
                  <p className="text-sm text-gray-900">
                    {artist.name}, <span className="italic">{artwork.title}</span>, {artwork.year}
                  </p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>{artwork.technique}</p>
                    <p>{artwork.dimensions}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Works Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/obras?artist=ayela" 
              className="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              <span className="text-sm uppercase tracking-wider font-medium">Ver Todas las Obras</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <section className="px-6 lg:px-16 py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/artistas" 
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm uppercase tracking-wider font-medium">Volver a Artistas</span>
          </Link>
        </div>
      </section>
    </main>
  )
}