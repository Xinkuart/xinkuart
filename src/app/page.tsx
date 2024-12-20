"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export default function Home() {
  const [emblaRef] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
      letterSpacing: "0.6em",
    },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: "0.3em",
      transition: {
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
  const obrasDestacadas = [
    {
      id: 1,
      imagen: "/images/obras/obra46.jpg",
      titulo: "Reflejos de la percepción",
      artista: "PEDRO PASQUÍN",
      tecnica: "Acrílico sobre lienzo",
      medidas: "100 x 150 cm",
    },
    {
      id: 2,
      imagen: "/images/obras/ayela/obra12.jpg",
      titulo: "Flat Mountain nº 34",
      artista: "AURELIO AYELA",
      tecnica: "Spray, rotulador y collage sobre papel",
      medidas: "150 x 200 cm",
    },
    {
      id: 3,
      imagen: "/images/obras/obra24.jpg",
      titulo: "La tercera noche",
      artista: "EDUARDO INFANTE",
      tecnica: "Pintura metálica y acrílico sobre lienzo",
      medidas: "50 x 40 cm",
    },
    {
      id: 4,
      imagen: "/images/obras/oyonarte/obra4.jpg",
      titulo: "Realidades sin Nombre.Z6",
      artista: "MANOLO OYONARTE",
      tecnica: "Técnica mixta sobre lienzo",
      medidas: "200 x 200 cm",
    },
    {
      id: 5,
      imagen: "/images/obras/bravo/bravo3.jpg",
      titulo: "Tratado de las estrellas. 7",
      artista: "HILARIO BRAVO",
      tecnica: "Collage sobre tela",
      medidas: "175 x 80 cm",
    },
    {
      id: 6,
      imagen: "/images/obras/ciria/ciria7.jpg",
      titulo: "Cortado sobre la página de un cómic",
      artista: "JOSÉ MANUEL CIRIA",
      tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
      medidas: "250 x 250 cm ",
    },
    {
      id: 7,
      imagen: "/images/obras/gaber/obra32.jpg",
      titulo: "Colindancias III",
      artista: "WILLIAM GABER",
      tecnica: "Óleo sobre tela",
      medidas: "150 x 200 cm ",
    },
    {
      id: 8,
      imagen: "/images/obras/lamo/lamo9.jpg",
      titulo: "Hibiscus Abierto",
      artista: "LAMO DE ESPINOSA",
      tecnica: "Fotografía",
      medidas: "70 x 100 cm ",
    },
    {
      id: 9,
      imagen: "/images/obras/alonso/alonso1.jpg",
      artista: "JAIME SÁNCHEZ ALONSO ",
      titulo: "La Montaña Rusa",
      dimensiones: "189 cm x 105 cm",
      tecnica: "Pintura en técnica mixta sobre tela",
    },
  ];

  const slides = [
    {
      url: "/images/obras/ciria/ciria3.jpg",
      title: "Explorando el Arte Contemporáneo",
      subtitle: "Descubre nuestra colección única",
    },
    {
      url: "/images/obras/obra24.jpg",
      title: "Artistas Emergentes",
      subtitle: "El futuro del arte español",
    },
    {
      url: "/images/obras/obra22.jpg",
      title: "Experiencias Artísticas",
      subtitle: "Más allá de la galería tradicional",
    },
  ];
  const [currentObrasIndex, setCurrentObrasIndex] = useState(0);
  const obrasPerPage = 3;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentObrasIndex((prevIndex) =>
        prevIndex + obrasPerPage >= obrasDestacadas.length
          ? 0
          : prevIndex + obrasPerPage
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#262626]">
      <section className="relative h-[100vh] w-full m-0 p-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/obras/ciria/momento3.jpg"
            alt="XinkuArt Gallery"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />
        </motion.div>

        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center space-y-12"
          >
            {/* Logo Container */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              className="relative w-[500px] md:w-[600px] lg:w-[700px] mx-auto"
            >
              <div className="relative aspect-[3/1]">
                <Image
                  src="/images/logo/logoxinkuart.png"
                  alt="XinkuArt Logo"
                  fill
                  priority
                  className="object-contain"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  className="absolute -bottom-4 left-0 right-0 h-[1px] bg-white/20
                  transform origin-left"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className={`text-xl md:text-2xl font-light tracking-[0.25em] uppercase text-white/90 
              ${raleway.className}`}
            >
              Espacio de Arte Contemporáneo
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="block w-0.5 h-12 bg-white/50" />
            <span
              className={`text-white/70 text-sm tracking-[0.3em] uppercase ${raleway.className}`}
            >
              Scroll
            </span>
          </motion.div>
        </motion.div>
      </section>
      {/* Sección de Bienvenida Mejorada */}
      <section className="relative py-24 overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Bienvenidos a
                <span className="text-[#FF0000] block mt-2">XinkuArt</span>
              </motion.h2>

              <motion.p
                className="text-xl text-white/80 font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                XinkuArt está compuesto por artistas seleccionados con unas
                trayectorias consolidadas y que empiezan a tener una gran
                promoción internacional.
                <br />
                <br />
                En Xinkuart nos dedicamos integramente a la promoción de artistas consolidados y emergentes
              </motion.p>
            </div>

            <div className="relative">
              <motion.div
                className="aspect-square relative rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/obras/ciria/ciria1.jpg"
                  alt="Arte contemporáneo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Sección Exposiciones Virtuales */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Text Content */}
            <motion.div
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
                  Descubre Nuestras{" "}
                  <span className="text-[#FF0000]">Exposiciones Virtuales</span>
                </h2>
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  Sumérgete en una experiencia única a través de nuestras
                  exposiciones virtuales 3D.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-t-2 border-r-2 border-[#FF0000] rounded-full"
                    />
                  </div>
                  <p className="text-white/80">Experiencia inmersiva 3D</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                    <span className="text-[#FF0000]">360°</span>
                  </div>
                  <p className="text-white/80">Vista completa de cada obra</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                    <span className="text-[#FF0000]">HD</span>
                  </div>
                  <p className="text-white/80">Alta calidad de visualización</p>
                </div>
              </div>

              <Link href="/exposiciones">
                <motion.button
                  className="group relative px-8 py-4 bg-[#FF0000] text-white overflow-hidden mt-12"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2 font-light">
                    Explorar Exposiciones
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
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Exhibition Grid */}
            <motion.div
              className="lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Main Exhibition */}
              <motion.div
                className="col-span-2 relative aspect-video rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/obras/ciria/ciria11.jpg"
                  alt="Exposición Principal"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[#FF0000] font-light mb-2">
                    EXPOSICIÓN DESTACADA
                  </p>
                  <h3 className="text-2xl text-white font-light">
                    Abrasar los ojos / CIRIA
                  </h3>
                </div>
              </motion.div>

              {/* Secondary Exhibitions */}
              <motion.div
                className="relative aspect-square rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/obras/gaber/gaber1.jpg"
                  alt="Exposición Secundaria 1"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg text-white font-light">
                    Bloques de construcción / WILLIAM GABER
                  </h3>
                </div>
              </motion.div>

              <motion.div
                className="relative aspect-square rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/obras/lamo/lamo11.jpg"
                  alt="Exposición Secundaria 2"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg text-white font-light">
                    Exposición Virtual / José María Lamo de Espinosa
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección Obras Destacadas */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#262626]" />

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Obras <span className="text-[#FF0000]">Destacadas</span>
            </h2>
            <p className="text-xl text-white/70 font-light">
              Explora nuestra selección de obras más representativas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obrasDestacadas
              .slice(currentObrasIndex, currentObrasIndex + obrasPerPage)
              .map((obra) => (
                <motion.div
                  key={obra.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={obra.imagen}
                      alt={obra.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <p className="text-[#FF0000] font-light text-sm tracking-wider">
                            {obra.artista}
                          </p>
                          <h3
                            className="text-2xl text-white font-light transition-transform duration-300 
                group-hover:translate-x-2"
                          >
                            {obra.titulo}
                          </h3>
                        </div>

                        <div className="space-y-2">
                          <p className="text-white/90 text-sm font-light">
                            {obra.tecnica}
                          </p>
                          <p className="text-white/70 text-sm font-light">
                            {obra.medidas}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 rounded-lg ring-1 ring-white/10 
        group-hover:ring-[#FF0000]/20 transition-all duration-300"
                  />
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/obras">
              <motion.button
                className="group relative px-8 py-4 bg-[#FF0000] text-white overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 font-light">
                  Ver Todas las Obras
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
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="bg-[#1a1a1a] py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Encabezado de Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Servicios Exclusivos
            </h2>
            <div className="w-20 h-1 bg-[#FF0000] mx-auto" />
          </motion.div>

          {/* Grid de Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1: Obras Prestigiosas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden"
            >
              <div className="bg-[#262626] p-8 h-full transition-all duration-300 group-hover:bg-[#2a2a2a]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl text-white font-light ml-4">
                    Obras Prestigiosas
                  </h3>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  Accede a una cuidada selección de obras de artistas
                  reconocidos internacionalmente, con trayectorias consolidadas
                  y proyección futura.
                </p>
              </div>
            </motion.div>

            {/* Servicio 2: Exposiciones Virtuales 3D */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden"
            >
              <div className="bg-[#262626] p-8 h-full transition-all duration-300 group-hover:bg-[#2a2a2a]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl text-white font-light ml-4">
                    Exposiciones Virtuales 3D
                  </h3>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  Experimenta el arte de una manera única con nuestras
                  exposiciones virtuales 3D, que te permiten explorar las obras
                  como si estuvieras allí.
                </p>
              </div>
            </motion.div>

            {/* Servicio 3: Asesoramiento Personalizado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden"
            >
              <div className="bg-[#262626] p-8 h-full transition-all duration-300 group-hover:bg-[#2a2a2a]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl text-white font-light ml-4">
                    Asesoramiento Experto
                  </h3>
                </div>
                <p className="text-gray-400 font-light leading-relaxed">
                  Recibe orientación personalizada de nuestro equipo de expertos
                  para tomar las mejores decisiones en tus adquisiciones
                  artísticas.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Botón de Más Información */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link href="/contacto" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center px-8 py-3 bg-[#FF0000] text-white overflow-hidden group"
              >
                <span className="relative flex items-center gap-2 font-light tracking-wider transition-transform duration-300 group-hover:translate-x-2">
                  Más Información
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
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
                  </svg>
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
