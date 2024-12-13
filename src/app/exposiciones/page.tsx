'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Exposicion {
  id: string;
  artista: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  urlIframe: string;
  imagenPreview: string;
  numeroObras: number;
}

const exposiciones: Exposicion[] = [
  {
    id: '1',
    artista: 'José Manuel Ciria',
    titulo: 'ABRASAR LOS OJOS',
    descripcion: 'Una exploración visual a través del color y las formas abstractas, donde el artista plasma su interpretación del espacio y el movimiento.',
    fecha: 'DICIEMBRE 2024',
    urlIframe: 'https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17858',
    imagenPreview: '/images/obras/ciria/ciria1.jpg',
    numeroObras: 32
  },
  {
    id: '2',
    artista: 'William Gaber',
    titulo: 'BLOQUES DE CONSTRUCIÓN',
    descripcion: 'La exposición Bloques de construcción presenta una inmersión en la obra del artista William Gaber, quien, a través de la abstracción geométrica, explora dos temas centrales.',
    fecha: 'ABRIL 2024',
    urlIframe: 'https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=15277',
    imagenPreview: '/images/obras/gaber/obra32.jpg',
    numeroObras: 34
  },
  {
    id: '3',
    artista: 'Jaime Sánchez Alonso',
    titulo: 'FRAGMENTOS',
    descripcion: 'La mayoría de su trabajo se desarrolla en series en las que a partir de un tema explora las posibilidades creativas sobre variaciones de un mismo contenido. ',
    fecha: 'MAYO 2024',
    urlIframe: 'https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17542',
    imagenPreview: '/images/obras/alonso/alonso1.jpg',
    numeroObras: 45
  },
  {
    id: '4',
    artista: 'José María Lamo de Espinosa',
    titulo: '',
    descripcion: 'A través del blanco y negro, José María Lamo de Espinosa nos presenta una serie fotográfica donde la arquitectura se convierte en protagonista de una narrativa visual única.  ',
    fecha: 'SEPTIEMBRE 2024',
    urlIframe: 'https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17510',
    imagenPreview: '/images/obras/lamo/lamo10.jpg',
    numeroObras: 19
  },
  {
    id: '5',
    artista: 'Pedro Pasquín',
    titulo: 'CALMA TOTAL',
    descripcion: 'Calma se adentra en tus pensamientos, el autor quiere que te tomes unos minutos para olvidarte de tus problemas y te invita a reflexionar y disfrutar de esta exposición',
    fecha: 'DICIEMBRE 2024',
    urlIframe: 'https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=18174',
    imagenPreview: '/images/obras/obra44.jpg',
    numeroObras: 10
  }
];

export default function ExposicionesPage() {
  const [selectedExpo, setSelectedExpo] = useState<Exposicion | null>(null);

  return (
    <div className="min-h-screen bg-white pt-25">
      {/* Hero Section */}

      {/* Sección de Introducción */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-light text-gray-900 leading-tight"
              >
                Una Nueva Forma de<br />
                Experimentar el Arte
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nuestras exposiciones virtuales en 3D te permiten sumergirte en un recorrido interactivo por las obras de nuestros artistas más destacados.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Explora cada pieza desde cualquier ángulo, acércate a los detalles y disfruta de una experiencia única que combina la tecnología con el arte contemporáneo.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <div className="flex items-center gap-8 text-gray-500">
                  <div className="text-center">
                    <p className="text-3xl font-light text-gray-900">360°</p>
                    <p className="text-sm mt-1">Vista Completa</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-light text-gray-900">HD</p>
                    <p className="text-sm mt-1">Alta Calidad</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-light text-gray-900">24/7</p>
                    <p className="text-sm mt-1">Acceso Total</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setSelectedExpo(exposiciones[0])}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <Image
                src={exposiciones[0].imagenPreview}
                alt={exposiciones[0].titulo}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm font-medium mb-2">{exposiciones[0].fecha}</p>
                <h3 className="text-2xl font-light mb-2">{exposiciones[0].titulo}</h3>
                <p className="text-lg opacity-90">{exposiciones[0].artista}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg
                    hover:bg-[#FF0000] transition-all duration-300 text-sm
                    flex items-center gap-2 w-fit"
                >
                  <span>Explorar en 3D</span>
                  <ExternalLink size={16} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Grid de Exposiciones */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exposiciones.map((expo) => (
            <div
              key={expo.id}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedExpo(expo)}
            >
              {/* Contenedor de la imagen y contenido */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={expo.imagenPreview}
                  alt={expo.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay con gradiente para mejor legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
                
                {/* Contenido */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-white/90 text-sm font-semibold tracking-wider">
                      {expo.fecha}
                    </p>
                    <h3 className="text-white text-2xl font-light">
                      {expo.titulo}
                    </h3>
                    <p className="text-white/90 text-xl">
                      {expo.artista}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-white/90 text-sm leading-relaxed">
                      {expo.descripcion}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">
                        {expo.numeroObras} obras
                      </span>
                      <button
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 
                          rounded-lg backdrop-blur-sm transition-all duration-300
                          text-white text-sm flex items-center gap-2 group-hover:bg-[#FF0000]"
                      >
                        <span>Explorar en 3D</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    {/* Modal de Exposición */}
    <AnimatePresence>
        {selectedExpo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedExpo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[95vw] h-[95vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/90 to-transparent
                px-8 py-6 flex justify-between items-start"
              >
                <div className="space-y-2">
                  <h3 className="text-3xl font-light text-white">
                    {selectedExpo.titulo}
                  </h3>
                  <div className="flex items-center gap-4 text-white/90">
                    <p className="text-lg">{selectedExpo.artista}</p>
                    <span>•</span>
                    <p className="text-sm">{selectedExpo.fecha}</p>
                    <span>•</span>
                    <p className="text-sm">{selectedExpo.numeroObras} obras</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExpo(null)}
                  className="p-2 rounded-full bg-black/20 hover:bg-[#FF0000] 
                    transition-colors duration-300 text-white backdrop-blur-sm"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Iframe de Artplacer */}
              <div className="w-full h-full bg-white">
                <iframe
                  src={selectedExpo.urlIframe}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title={`Exposición virtual: ${selectedExpo.titulo}`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}  