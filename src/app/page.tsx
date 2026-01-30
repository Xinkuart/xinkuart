"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import {Playfair_Display, Raleway,} from "next/font/google";



const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

// Imágenes para el slider de bienvenida
const welcomeImages = [
  "/images/obras/hero/hs1.jpg",
  "/images/obras/hero/hs2.jpg",
  "/images/obras/hero/hs3.jpg",
];

// Tipos
type Exhibition = {
  id: number;
  title: string;
  artist: string;
  dates: string;
  image: string;
  isVirtual: boolean;
};

type NewsItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
};

export default function HomePage() {
  // Estados - ACTUALIZADO con showCurtain
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Verificar si ya se mostró la intro
  useEffect(() => {
    const isDevelopment = window.location.hostname === "localhost";
    
    if (!isDevelopment) {
      const introShown = sessionStorage.getItem("introShownV2");
      if (introShown === "true") {
        setShowIntro(false);
        setHeroLoaded(true);
      }
    }
  }, []);

  // Cambio automático de imágenes del slider
  useEffect(() => {
    if (showIntro && !isExiting) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % welcomeImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showIntro, isExiting]);

  // Manejar entrada al sitio - ACTUALIZADO con transición correcta
  const handleEnter = () => {
    setIsExiting(true);
    
    // Paso 1: Fade out de la intro (300ms)
    setTimeout(() => {
      setShowIntro(false);
      setShowCurtain(true); // Mostrar cortina negra
    }, 300);
    
    // Paso 2: Abrir cortina revelando hero (400ms después)
    setTimeout(() => {
      setHeroLoaded(true);
    }, 400);
    
    // Paso 3: Quitar cortina completamente (1000ms después de iniciar)
    setTimeout(() => {
      setShowCurtain(false);
      sessionStorage.setItem("introShownV2", "true");
    }, 1000);
  };

  // Datos
  const exhibitions: Exhibition[] = [
    {
      id: 1,
      title: "ABRASAR LOS OJOS",
      artist: "José Manuel Ciria",
      dates: "DICIEMBRE 2024",
      image: "/images/obras/ciria/ciria11.jpg",
      isVirtual: true,
    },
    {
      id: 2,
      title: "Oyonarte, Alicia y los espejos",
      artist: "Manolo Oyonarte",
      dates: "ABRIL 2025",
      image: "/images/obras/oyonarte/oyonarte31.jpg",
      isVirtual: false,
    },
    {
      id: 3,
      title: "Fragmentos del Espacio",
      artist: "Jesús del Peso",
      dates: "AGOSTO 2025",
      image: "/images/obras/delpeso/delpeso26.jpg",
      isVirtual: true,
    },
  ];

  const newsItems: NewsItem[] = [
    {
      id: 3,
      title: "Manolo Oyonarte presenta 'Oyonarte, Alicia y los Espejos' en Casa de Vacas",
      description: "Casa de Vacas del parque del Retiro de Madrid se convierte en el escenario de la presentación del nuevo libro de Manolo Oyonarte, que tendrá lugar el 16 de septiembre a las 19:00 horas.",
      date: "16 Septiembre 2025",
      image: "/images/obras/oyonarte/oyonarte32.jpg",
      category: "Literatura",
    },
    {
      id: 2,
      title: "Hilario Bravo y Moob Art Club presentan 'Haiku al cero' en Madrid",
      description: "La sede de Moob Art Club en Madrid acoge la exposición 'Haiku al cero' del artista extremeño Hilario Bravo, una muestra que constituye un hito dentro de su trayectoria artística.",
      date: "12 Septiembre 2025",
      image: "/images/obras/bravo/expohilario.jpg",
      category: "Exposiciones",
    },
    {
      id: 1,
      title: "Jesús del Peso representa a España en Hispanic Heritage Month",
      description: "Jesús del Peso ha sido seleccionado para representar a España en el prestigioso evento del Hispanic Heritage Month que se celebrará el próximo 16 de septiembre de 2025 en Miami.",
      date: "15 Agosto 2025",
      image: "/images/obras/delpeso/delpeso27.jpg",
      category: "Eventos Internacionales",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <>
      {/* ========================================
          PANTALLA DE BIENVENIDA - VERSIÓN FINAL
          ======================================== */}
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isExiting ? 0 : 1 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-black"
        >
          {/* Slider de Imágenes de Fondo */}
          <div className="absolute inset-0">
            {welcomeImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={`XinkuArt Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={95}
                />
              </motion.div>
            ))}
            {/* Overlay sutil solo en los bordes */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          </div>

          {/* Contenido Principal */}
          <div className="relative z-10 h-full flex flex-col justify-between px-6 sm:px-8 md:px-12 lg:px-16 py-12">
            {/* Contenido de texto - Abajo Izquierda en Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-auto mb-20 max-w-2xl text-center md:text-left mx-auto md:mx-0"
            >
              {/* Logo principal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <div className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[480px] h-[90px] sm:h-[110px] md:h-[130px] lg:h-[155px] mx-auto md:mx-0">
                  <Image
                    src="/images/logo/logoxinkuart.png"
                    alt="XinkuArt Logo"
                    fill
                    className="object-contain object-center md:object-left"
                    priority
                  />
                </div>
              </motion.div>

              {/* Línea decorativa */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                className="w-24 h-[1px] bg-white/40 mb-10 origin-left mx-auto md:mx-0"
              />

              {/* Botón Descubre la Galería */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.button
                  onClick={handleEnter}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`${raleway.className} group relative overflow-hidden px-12 py-5 bg-white/10 backdrop-blur-md text-white 
                    text-sm uppercase tracking-[0.25em] font-light transition-all duration-500
                    border border-white/20 hover:border-red-600 hover:bg-red-600`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Descubre la Galería
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={16} className="opacity-70 group-hover:opacity-100" />
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* CORTINA NEGRA CON APERTURA */}
      {showCurtain && (
        <div className="fixed inset-0 z-[60] pointer-events-none">
          {/* Cortina superior */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 h-1/2 bg-black origin-top"
          />
          {/* Cortina inferior */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-black origin-bottom"
          />
        </div>
      )}

      {/* CONTENIDO PRINCIPAL - HERO SECTION Y RESTO DE LA PÁGINA */}
      <main className="bg-black text-white overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden bg-black">
          <div className="absolute inset-0">
            <div className="grid grid-cols-12 gap-0 h-full">
              {/* COLUMNA IZQUIERDA - Imagen */}
              <div className="col-span-12 md:col-span-7 relative h-[50vh] md:h-full bg-black overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={heroLoaded ? { opacity: 1 } : {}}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero/he14.png"
                      alt="XinkuArt - Arte Contemporáneo"
                      fill
                      className="object-cover object-left-top"
                      priority
                      quality={95}
                    />
                  </div>
                </motion.div>
              </div>

              {/* COLUMNA DERECHA - Contenido */}
              <div className="col-span-12 md:col-span-5 relative flex items-center justify-center bg-black px-6 sm:px-8 lg:px-12 py-12 md:py-0">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={heroLoaded ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
                  className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-red-600/30 to-transparent origin-top hidden md:block"
                />

                <div className="max-w-md w-full relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-4"
                  >
                    <span
                      className={`${raleway.className} text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-red-600 font-medium`}
                    >
                      Galería de Arte Contemporáneo
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1.2,
                      delay: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-4"
                  >
                    <div className="relative w-[200px] sm:w-[240px] lg:w-[280px] aspect-[3/1]">
                      <Image
                        src="/images/logo/logoxinkuart.png"
                        alt="XinkuArt Logo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={heroLoaded ? { scaleX: 1 } : {}}
                    transition={{
                      duration: 1.5,
                      delay: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-16 h-[2px] bg-gradient-to-r from-red-600 to-red-600/20 mb-5 origin-left"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-6"
                  >
                    <h1
                      className={`${playfair.className} text-xl sm:text-2xl lg:text-3xl font-normal text-white leading-tight tracking-wide mb-3 whitespace-nowrap`}
                    >
                      Espacio de Arte Contemporáneo
                    </h1>
                    <p
                      className={`${raleway.className} text-xs sm:text-sm text-white/50 font-light leading-relaxed tracking-wide`}
                    >
                      Descubre obras de artistas consolidados y emergentes en un
                      espacio virtual único.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 1,
                      delay: 1.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <Link href="/obras">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`${raleway.className} group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-500`}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Explorar Obras
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-2 transition-transform duration-300"
                          />
                        </span>
                      </motion.button>
                    </Link>

                    <Link href="/artistas">
                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          borderColor: "rgba(255,255,255,0.6)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className={`${raleway.className} border border-white/20 hover:bg-white/5 text-white/70 hover:text-white px-6 py-3 text-[10px] font-light uppercase tracking-[0.2em] transition-all duration-300`}
                      >
                        Nuestros Artistas
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={heroLoaded ? { opacity: 0.02 } : {}}
                  transition={{
                    duration: 2,
                    delay: 2,
                  }}
                  className="absolute -right-20 -bottom-20 text-[300px] font-bold text-white select-none pointer-events-none hidden md:block"
                >
                  X
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        

        {/* RESTO DEL CONTENIDO DE LA HOME */}
        {/* Sección de Exposiciones Destacadas */}
        <section className="py-20 px-6 lg:px-16 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center justify-between mb-12"
            >
              <div>
                <h2 className="text-sm sm:text-base tracking-widest text-red-600 font-medium mb-2">
                  EXPERIENCIAS INMERSIVAS
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">
                  Exposiciones destacadas
                </h3>
              </div>
              <Link href="/exposiciones">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 md:mt-0 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  Ver todas <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {exhibitions.map((exhibition, i) => (
                <motion.div
                  key={exhibition.id}
                  custom={i}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="h-[400px] relative overflow-hidden">
                    <Image
                      src={exhibition.image}
                      alt={exhibition.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                    {exhibition.isVirtual && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1">
                        Exposición virtual
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <div className="flex items-center text-sm text-gray-300 mb-2">
                        <Calendar size={14} className="mr-2" />
                        <span>{exhibition.dates}</span>
                      </div>
                      <h4 className="text-xl font-medium mb-1">
                        {exhibition.title}
                      </h4>
                      <p className="text-gray-300">{exhibition.artist}</p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 origin-left"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Resto de secciones - se mantienen igual */}
        {/* CTA, Obras Destacadas, Split Screen, Artistas, Actualidad */}
        {/* (Tu código existente continúa aquí sin cambios) */}

        {/* Sección CTA - Explorar colección */}
        <section className="relative py-32 px-6 lg:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/obras/zinnia/obra9z.jpg"
              alt="Gallery background"
              fill
              priority
              quality={90}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10"></div>
          </div>

          <div className="container max-w-7xl mx-auto relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto backdrop-blur-sm py-12 px-8 rounded-sm bg-black/8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-shadow-sm">
                Descubre el arte{" "}
                <span className="text-red-600 font-normal">contemporáneo</span>{" "}
                <span className="block mt-2">desde una nueva perspectiva</span>
              </h2>

              <div className="w-24 h-px bg-red-600/60 mx-auto mb-8"></div>

              <p className="text-white text-lg mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide">
                Explora nuestra colección de artistas reconocidos y emergentes a
                través de exposiciones virtuales inmersivas y contenido exclusivo.
              </p>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block"
              >
                <Link href="/obras">
                  <button className="group relative bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm overflow-hidden transition-all duration-300 shadow-lg hover:shadow-red-600/30">
                    <span className="relative z-10 flex items-center gap-3 text-lg font-light tracking-wider">
                      Explorar Obras
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <ArrowRight size={22} />
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600 to-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></div>
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 0.07, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-20 right-0 text-[200px] sm:text-[300px] font-bold text-white select-none tracking-tighter"
          >
            XINKU
          </motion.div>
        </section>

        <style jsx global>{`
          .text-shadow-sm {
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          }
        `}</style>

        {/* Sección de Obras Destacadas */}
        <section className="relative py-20 px-6 lg:px-16 bg-[#151515] overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl opacity-40" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/10 to-transparent" />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-sm sm:text-base tracking-widest text-red-600 font-medium mb-2">
                SELECCIÓN EXCLUSIVA
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4">
                Obras destacadas
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explora una cuidada selección de obras representativas de nuestros
                artistas más destacados, capturando la esencia de su trabajo
                creativo.
              </p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-24 h-px bg-red-600/40 mx-auto mt-6"
              />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="relative group cursor-pointer">
                  <div className="overflow-hidden relative aspect-[16/9] rounded-sm shadow-lg border border-white/5">
                    <Image
                      src="/images/obras/lamo/lamo6.jpg"
                      alt="LA PIRÁMIDE DE MADRID"
                      fill
                      priority={true}
                      quality={90}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-col space-y-1 text-white/70 text-sm">
                          <p>Fotografía</p>
                          <p>100 x 70 cm</p>
                          <p>2022</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                  <div className="mt-3 mb-4">
                    <p className="text-white/80 font-light text-xs tracking-wider">
                      José María Lamo de Espinosa
                    </p>
                    <h5 className="text-white font-light truncate">
                      LA PIRÁMIDE DE MADRID
                    </h5>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="relative group cursor-pointer">
                    <div className="overflow-hidden relative aspect-square rounded-sm shadow-lg border border-white/5">
                      <Image
                        src="/images/obras/delpeso/delpeso12.jpg"
                        alt="Apertura de cubo I"
                        fill
                        priority={true}
                        quality={90}
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex flex-col space-y-1 text-white/70 text-xs">
                            <p>Acrílico sobre lienzo</p>
                            <p>70 x 70 cm</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="mt-3 mb-4">
                      <p className="text-white/80 font-light text-xs tracking-wider">
                        Jesús del Peso
                      </p>
                      <h5 className="text-white font-light truncate">
                        Apertura de cubo I
                      </h5>
                    </div>
                  </div>

                  <div className="relative group cursor-pointer">
                    <div className="overflow-hidden relative aspect-square rounded-sm shadow-lg border border-white/5">
                      <Image
                        src="/images/obras/bravo/bravo11.jpg"
                        alt="Senda, I"
                        fill
                        priority={true}
                        quality={90}
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex flex-col space-y-1 text-white/70 text-xs">
                            <p>Técnica mixta sobre papel</p>
                            <p>100 x 70 cm</p>
                            <p>2019</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="mt-3 mb-4">
                      <p className="text-white/80 font-light text-xs tracking-wider">
                        Hilario Bravo
                      </p>
                      <h5 className="text-white font-light truncate">Senda, I</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:gap-6">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <div className="relative group cursor-pointer">
                    <div className="overflow-hidden relative aspect-square rounded-sm shadow-lg border border-white/5">
                      <Image
                        src="/images/obras/ciria/ciria22.jpg"
                        alt="CAMAMESA"
                        fill
                        priority={true}
                        quality={90}
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex flex-col space-y-1 text-white/70 text-xs">
                            <p>Técnica mixta, óleo y grafito sobre lienzo</p>
                            <p>250 x 250 cm</p>
                            <p>2022</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="mt-3 mb-4">
                      <p className="text-white/80 font-light text-xs tracking-wider">
                        CIRIA
                      </p>
                      <h5 className="text-white font-light truncate">CAMAMESA</h5>
                    </div>
                  </div>

                  <div className="relative group cursor-pointer">
                    <div className="overflow-hidden relative aspect-square rounded-sm shadow-lg border border-white/5">
                      <Image
                        src="/images/obras/gaber/obra41.jpg"
                        alt="MONUMENTO #P1"
                        fill
                        priority={true}
                        quality={90}
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex flex-col space-y-1 text-white/70 text-xs">
                            <p>Óleo sobre lienzo</p>
                            <p>180 x 130 cm</p>
                            <p>2023</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                    <div className="mt-3 mb-4">
                      <p className="text-white/80 font-light text-xs tracking-wider">
                        William Gaber
                      </p>
                      <h5 className="text-white font-light truncate">
                        MONUMENTO #P1
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="relative group cursor-pointer">
                  <div className="overflow-hidden relative aspect-[16/9] rounded-sm shadow-lg border border-white/5">
                    <Image
                      src="/images/obras/oyonarte/obra10.jpg"
                      alt="Alice´s antimirror. E3J"
                      fill
                      priority={true}
                      quality={90}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-col space-y-1 text-white/70 text-sm">
                          <p>Técnica Mixta sobre lienzo</p>
                          <p>110 x 150 cm</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                  <div className="mt-3 mb-4">
                    <p className="text-white/80 font-light text-xs tracking-wider">
                      Manolo Oyonarte
                    </p>
                    <h5 className="text-white font-light truncate">
                      Alice´s antimirror. E3J
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link href="/obras">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-transparent border border-red-600 text-white overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 font-light">
                    Explorar toda la colección
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-red-600 group-hover:text-white transition-colors"
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 w-full h-full bg-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 z-0" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Split Screen Section */}
        <section className="relative h-[70vh] w-full flex">
          <div className="w-1/2 h-full" style={{ clipPath: "inset(0)" }}>
            <div className="fixed top-0 left-0 w-1/2 h-screen">
              <Image
                src="/images/hero/he12.png"
                alt="XinkuArt Gallery"
                fill
                className="object-cover object-center"
                priority
                quality={90}
              />
            </div>
          </div>

          <div className="w-1/2 h-full" style={{ clipPath: "inset(0)" }}>
            <div className="fixed top-0 right-0 w-1/2 h-screen flex items-center justify-center bg-black">
              <div className="flex flex-col items-center text-center px-8 max-w-lg">
                <div className="relative w-[250px] sm:w-[300px] aspect-[3/1] mb-8">
                  <Image
                    src="/images/logo/logoxinkuart.png"
                    alt="XinkuArt Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-16 h-[1px] bg-red-600 mb-8" />
                <p className={`${raleway.className} text-white/80 text-lg sm:text-xl font-light leading-relaxed tracking-wide mb-10`}>
                  El arte es el espejo del alma, una ventana hacia lo invisible
                  que transforma la manera en que vemos el mundo.
                </p>
                <Link href="/obras">
                  <button className={`${raleway.className} group bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 flex items-center gap-3`}>
                    Nuestra Colección
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Artistas Destacados */}
        <section className="py-24 px-6 lg:px-16 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 max-w-3xl"
            >
              <h2 className="text-sm tracking-widest text-red-600 font-light mb-3">
                TALENTOS EXTRAORDINARIOS
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light mb-4 text-white">
                Artistas destacados
              </h3>
              <p className="text-gray-400 font-light">
                XinkuArt presenta una selección de artistas contemporáneos de
                reconocida trayectoria nacional e internacional que representan la
                diversidad y riqueza del panorama artístico actual.
              </p>
            </motion.div>

            <div className="overflow-hidden py-4 relative">
              <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

              <motion.div
                initial={{ x: "-10%" }}
                whileInView={{ x: "-100%" }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                viewport={{ once: true }}
                className="flex whitespace-nowrap mb-10"
              >
                <div className="flex items-center space-x-14 px-4">
                  {Array(2).fill(0).map((_, arrayIndex) => (
                    <React.Fragment key={`artist-row-1-${arrayIndex}`}>
                      <Link href="/artistas/delpeso">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          Jesús del Peso
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                      <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                      <Link href="/artistas/oyonarte">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          Manolo Oyonarte
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                      <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                      <Link href="/artistas/ciria">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          José Manuel Ciria
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                      <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                      <Link href="/artistas/ayela">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          Aurelio Ayela
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: "-90%" }}
                whileInView={{ x: "0%" }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
                viewport={{ once: true }}
                className="flex whitespace-nowrap"
              >
                <div className="flex items-center space-x-14 px-4">
                  {Array(2).fill(0).map((_, arrayIndex) => (
                    <React.Fragment key={`artist-row-2-${arrayIndex}`}>
                      <Link href="/artistas/gaber">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          William Gaber
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                      <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                      <Link href="/artistas/bravo">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-40 hover:opacity-80 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          Hilario Bravo
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                      <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                      <Link href="/artistas/lamo">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-40 hover:opacity-80 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          José María Lamo
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                      <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                      <Link href="/artistas/zinnia">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          Zinnia Clavo
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                      <Link href="/artistas/pasquin">
                        <motion.span
                          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                          whileHover={{ color: "rgba(255, 255, 255, 0.95)", y: -2, transition: { duration: 0.2 } }}
                        >
                          Pedro Pasquín
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-red-600 origin-left"
                          />
                        </motion.span>
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/artistas">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-transparent border border-zinc-800 text-white/80 px-8 py-3 inline-flex items-center gap-2 hover:border-white hover:text-white transition-all duration-300"
                >
                  <span className="font-light">Descubrir todos los artistas</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight size={18} />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* Actualidad */}
        <section className="py-20 px-6 lg:px-16 bg-[#151515]">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center justify-between mb-12"
            >
              <div>
                <h2 className="text-sm sm:text-base tracking-widest text-red-600 font-medium mb-2">
                  NOTICIAS Y EVENTOS
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light">
                  Actualidad
                </h3>
              </div>
              <Link href="/actualidad">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 md:mt-0 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  Ver todas las noticias <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {newsItems.map((news, i) => (
                <motion.div
                  key={news.id}
                  custom={i}
                  variants={fadeInUp}
                  className="border-b border-zinc-800 pb-6 group"
                >
                  <Link href={`/actualidad/`}>
                    {news.image && (
                      <div className="h-52 relative overflow-hidden mb-4">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-400 mb-2">
                      <span className="bg-zinc-800 text-xs px-2 py-1 mr-3">
                        {news.category}
                      </span>
                      <span>{news.date}</span>
                    </div>
                    <h4 className="text-xl font-medium mb-2 group-hover:text-red-600 transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{news.description}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}