"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

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
    id: "1",
    artista: "José Manuel Ciria",
    titulo: "ABRASAR LOS OJOS",
    descripcion:
      "Una exploración visual a través del color y las formas abstractas, donde el artista plasma su interpretación del espacio y el movimiento.",
    fecha: "DICIEMBRE 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17858",
    imagenPreview: "/images/obras/ciria/ciria1.jpg",
    numeroObras: 32,
  },
  {
    id: "2",
    artista: "William Gaber",
    titulo: "BLOQUES DE CONSTRUCIÓN",
    descripcion:
      "La exposición Bloques de construcción presenta una inmersión en la obra del artista William Gaber, quien, a través de la abstracción geométrica, explora dos temas centrales.",
    fecha: "ABRIL 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=15277",
    imagenPreview: "/images/obras/gaber/obra32.jpg",
    numeroObras: 34,
  },
  {
    id: "3",
    artista: "Jaime Sánchez Alonso",
    titulo: "FRAGMENTOS",
    descripcion:
      "La mayoría de su trabajo se desarrolla en series en las que a partir de un tema explora las posibilidades creativas sobre variaciones de un mismo contenido. ",
    fecha: "MAYO 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17542",
    imagenPreview: "/images/obras/alonso/alonso1.jpg",
    numeroObras: 45,
  },
  {
    id: "4",
    artista: "José María Lamo de Espinosa",
    titulo: "",
    descripcion:
      "A través del blanco y negro, José María Lamo de Espinosa nos presenta una serie fotográfica donde la arquitectura se convierte en protagonista de una narrativa visual única.  ",
    fecha: "SEPTIEMBRE 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17510",
    imagenPreview: "/images/obras/lamo/lamo10.jpg",
    numeroObras: 19,
  },
  {
    id: "5",
    artista: "Pedro Pasquín",
    titulo: "CALMA TOTAL",
    descripcion:
      "Calma se adentra en tus pensamientos, el autor quiere que te tomes unos minutos para olvidarte de tus problemas y te invita a reflexionar y disfrutar de esta exposición",
    fecha: "DICIEMBRE 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=18174",
    imagenPreview: "/images/obras/obra44.jpg",
    numeroObras: 10,
  },
];

export default function ExposicionesPage() {
  const [selectedExpo, setSelectedExpo] = useState<Exposicion | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    "/images/hero/hero1.jpg",
    "/images/hero/hero2.jpg",
    "/images/hero/hero3.jpg",
    "/images/hero/hero4.jpg",
    "/images/obras/ciria/ciria11.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-[#262626]">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Exposiciones Virtuales"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#262626]" />
          </motion.div>
        </AnimatePresence>

        {/* Contenido Hero */}
        <div className="relative h-full flex flex-col items-center justify-center max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8 sm:space-y-12"
          >
            {/* Logo con animación */}
            <motion.div
              className="relative w-[200px] sm:w-[300px] md:w-[400px] mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src="/images/logo/logoxinkuart.png"
                alt="XinkuArt Logo"
                width={400}
                height={133}
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Título principal */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-light tracking-tight px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                EXPOSICIONES VIRTUALES{" "}
                <span className="text-[#FF0000]">3D</span>
              </motion.h1>
            </div>

            {/* Características con animación mejorada */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 mt-8 sm:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  icon: "360°",
                  title: "Vista Completa",
                  desc: "Explora cada obra desde cualquier ángulo",
                },
                {
                  icon: "3D",
                  title: "Experiencia Inmersiva",
                  desc: "Sumérgete en el espacio virtual",
                },
                {
                  icon: "HD",
                  title: "Alta Calidad",
                  desc: "Máximo detalle en cada obra",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white/5 rounded-xl flex items-center justify-center
                    group-hover:bg-[#FF0000]/10 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl text-[#FF0000] font-light">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl text-white mt-4 font-light">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-2 max-w-[200px] mx-auto">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Botón de ver exposiciones */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              onClick={() =>
                document
                  .getElementById("exposiciones")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 sm:mt-16 px-6 sm:px-8 py-3 sm:py-4 bg-[#FF0000] text-white relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2 font-light">
                Ver Todas las Exposiciones
                <motion.svg
                  className="w-5 h-5"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 
                transition-transform duration-300"/>
              <div className="absolute inset-0 bg-[#FF0000] transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
         {/* Nueva sección antes del grid */}
         <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden" id="exposiciones">
        <div className="absolute inset-0 bg-[#1a1a1a]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4 sm:space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-light">
              El Futuro del Arte está <span className="text-[#FF0000]">Aquí</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 font-light leading-relaxed">
              Descubre una forma revolucionaria de experimentar el arte. Nuestras exposiciones
              virtuales rompen las barreras tradicionales, permitiéndote explorar cada obra 
              con una libertad sin precedentes. Un espacio donde la tecnología y el arte 
              se fusionan para crear una experiencia única.
            </p>
            <div className="w-16 sm:w-20 h-1 bg-[#FF0000] mx-auto mt-6 sm:mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Grid de Exposiciones */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {exposiciones.map((expo, index) => (
            <motion.div
              key={expo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedExpo(expo)}
            >
              {/* Imagen con hover effect */}
              <div className="absolute inset-0 bg-black">
                <Image
                  src={expo.imagenPreview}
                  alt={expo.titulo}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 
                    transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent 
                opacity-90 group-hover:opacity-50 transition-all duration-500" />

              {/* Contenido */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                <div className="transform translate-y-0 group-hover:-translate-y-2 transition-all duration-500">
                  <p className="text-[#FF0000] text-xs sm:text-sm tracking-wider mb-2">
                    {expo.fecha}
                  </p>
                  <h3 className="text-xl sm:text-2xl text-white font-light mb-1">
                    {expo.titulo || expo.artista}
                  </h3>
                  <p className="text-base sm:text-lg text-white/80">{expo.artista}</p>
                </div>

                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 
                  group-hover:opacity-100 transition-all duration-500 space-y-3 sm:space-y-4">
                  <p className="text-white/70 text-xs sm:text-sm line-clamp-2">
                    {expo.descripcion}
                  </p>
                  <button className="relative overflow-hidden group/btn w-full sm:w-auto px-4 sm:px-6 py-2 
                    bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm flex items-center justify-center gap-2">
                    <span className="relative z-10">Explorar en 3D</span>
                    <div className="absolute inset-0 bg-[#FF0000] transform -translate-x-full 
                      group-hover/btn:translate-x-0 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedExpo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExpo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-[95vw] h-[90vh] sm:h-[95vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-8 py-4 sm:py-6
                bg-gradient-to-b from-black via-black/80 to-transparent">
                <div className="flex justify-between items-start">
                  <div className="space-y-1 sm:space-y-2">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xl sm:text-3xl font-light text-white"
                    >
                      {selectedExpo.titulo}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-white/80"
                    >
                      <p>{selectedExpo.artista}</p>
                      <span className="hidden sm:inline">•</span>
                      <p>{selectedExpo.fecha}</p>
                      <span className="hidden sm:inline">•</span>
                      <p>{selectedExpo.numeroObras} obras</p>
                    </motion.div>
                  </div>

                  <button
                    onClick={() => setSelectedExpo(null)}
                    className="p-2 rounded-full bg-white/10 hover:bg-[#FF0000] 
                      transition-colors duration-300"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <iframe
                src={selectedExpo.urlIframe}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}