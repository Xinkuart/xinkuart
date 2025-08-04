"use client";

import React, {} from "react";
import {
  motion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Raleway } from "next/font/google";

// Definir la fuente Raleway
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});
// Tipo para las exposiciones
type Exhibition = {
  id: number;
  title: string;
  artist: string;
  dates: string;
  image: string;
  isVirtual: boolean;
};

// Tipo para noticias
type NewsItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
};

// Componente principal de la página de inicio
export default function HomePage() {
  // Exposiciones actuales y próximas
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
      title: "Bloques de Construcción",
      artist: "William Gaber",
      dates: "ABRIL 2024",
      image: "/images/obras/gaber/gaber1.jpg",
      isVirtual: true,
    },
  ];
  // Noticias de actualidad
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Manolo Oyonarte presenta 'Nenúfares y Twombly' en La Neomudéjar",
      description:
        "El reconocido artista Manolo Oyonarte inaugura su última exposición 'Nenúfares y Twombly' en el emblemático museo La Neomudéjar.",
      date: "26 Enero 2025",
      image: "/images/obras/oyonarte/oyonarte1.jpg",
      category: "Exposiciones",
    },
    {
      id: 2,
      title:
        "'Las Venas del Dragón': Nueva obra literaria de José Manuel Ciria",
      description:
        "Casa de Vacas se convierte en el escenario de presentación del nuevo libro de José Manuel Ciria, 'Las Venas del Dragón'.",
      date: "11 Noviembre 2024",
      image: "/images/obras/ciria/librociria.jpg",
      category: "Presentación",
    },
    {
      id: 3,
      title: "Ciria lleva su obra a la Sala Vaquero Poblador de Badajoz",
      description:
        "La Sala de Exposiciones Vaquero Poblador en Badajoz acoge una impresionante muestra del trabajo de José Manuel Ciria, uno de los artistas más influyentes del arte contemporáneo español.",
      date: "06 Septiembre 2024",
      image: "/images/obras/ciria/expociria1.jpg",
      category: "Exposiciones",
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
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section con imagen de fondo, logo y títulos */}
      <section className="relative h-[100vh] w-full m-0 p-0">
        {/* Imagen de fondo con efecto parallax sutil */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/obras/ciria/ciria4.jpg"
              alt="XinkuArt Gallery"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover object-center"
            />
          </motion.div>

          {/* Overlay con gradiente optimizado */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-black/0" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center space-y-16"
          >
            {/* Logo Container */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              className="relative w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[500px] mx-auto"
            >
              <div className="relative w-full aspect-[3/1]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/logo/logoxinkuart.png"
                    alt="XinkuArt Logo"
                    fill
                    priority
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 350px, (max-width: 1280px) 400px, 500px"
                    className="object-contain"
                  />
                </div>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, delay: 1, ease: "easeInOut" }}
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent"
                />
              </div>
            </motion.div>

            {/* Contenido principal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="space-y-8 max-w-4xl mx-auto"
            >
              {/* Subtítulo en una sola línea */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <h1
                  className={`text-lg md:text-xl lg:text-2xl font-medium tracking-[0.15em] uppercase text-white 
            ${raleway.className} drop-shadow-md whitespace-nowrap`}
                >
                  Espacio de Arte Contemporáneo
                </h1>
              </motion.div>

              {/* Texto descriptivo */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="max-w-2xl mx-auto text-white text-lg sm:text-xl font-normal leading-relaxed drop-shadow-lg"
              >
                Descubre obras de artistas consolidados y emergentes en un
                espacio virtual único
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Indicador "Descubre más" con flecha */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full text-center"
        >
          <div className="flex flex-col items-center gap-3">
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/80 text-sm tracking-widest uppercase font-light"
            >
              Descubre más
            </motion.p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/80"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </section>
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

        {/* Elemento decorativo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute -left-40 top-1/2 transform -translate-y-1/2 text-[400px] font-bold text-white opacity-5 select-none hidden lg:block"
        >
          ART
        </motion.div>
      </section>
{/* Sección CTA - Explorar colección - Versión Moderna */}
<section className="relative py-32 px-6 lg:px-16 overflow-hidden">
  {/* Fondo con mejoras de legibilidad */}
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
    {/* Overlay de gradiente para mejor legibilidad */}
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
      {/* Título con mejor legibilidad */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-shadow-sm">
        Descubre el arte{" "}
        <span className="text-red-600 font-normal">contemporáneo</span>{" "}
        <span className="block mt-2">desde una nueva perspectiva</span>
      </h2>
      
      {/* Separador sutil */}
      <div className="w-24 h-px bg-red-600/60 mx-auto mb-8"></div>
      
      {/* Texto descriptivo con mejor contraste */}
      <p className="text-white text-lg mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide">
        Explora nuestra colección de artistas reconocidos y emergentes a
        través de exposiciones virtuales inmersivas y contenido exclusivo.
      </p>
      
      {/* Botón modernizado */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href="/obras">
          <button className="group relative bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-sm overflow-hidden transition-all duration-300 shadow-lg hover:shadow-red-600/30">
            <span className="relative z-10 flex items-center gap-3 text-lg font-light tracking-wider">
              Explorar colección
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

  {/* Elemento decorativo modernizado */}
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

{/* Estilos adicionales para agregar al globals.css para la sombra del texto */}
<style jsx global>{`
  .text-shadow-sm {
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }
`}</style>
      {/* Sección de Obras Destacadas Interactivas con diseño asimétrico - Versión optimizada para evitar recargas */}
      <section className="relative py-20 px-6 lg:px-16 bg-[#151515] overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/10 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
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

          {/* Galería interactiva con diseño asimétrico */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* ---- COLUMNA 1 ---- */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Obra grande horizontal (fila 1, columna 1) */}
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden relative aspect-[16/9] rounded-sm shadow-lg border border-white/5">
                  <Image
                    src="/images/obras/lamo/lamo6.jpg"
                    alt="Pequeñas Decisiones - José Manuel Ciria"
                    fill
                    priority={true}
                    quality={90}
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay con gradiente elegante */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Información de la obra (aparece al hover) */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-col space-y-1 text-white/70 text-sm">
                        <p>Fotografía</p>
                        <p>100 x 70 cm</p>
                        <p>2022</p>
                      </div>
                    </div>
                  </div>

                  {/* Línea decorativa roja al hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>

                {/* Nombre del artista visible siempre */}
                <div className="mt-3 mb-4">
                  <p className="text-white/80 font-light text-xs tracking-wider">
                    José María Lamo de Espinosa
                  </p>
                  <h5 className="text-white font-light truncate">
                    LA PIRÁMIDE DE MADRID
                  </h5>
                </div>
              </div>

              {/* Contenedor para las dos obras cuadradas (fila 2, columna 1) */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="relative group cursor-pointer">
                  <div className="overflow-hidden relative aspect-square rounded-sm shadow-lg border border-white/5">
                    <Image
                      src="/images/obras/delpeso/delpeso12.jpg"
                      alt="Alice´s antimirror. E1J - Manolo Oyonarte"
                      fill
                      priority={true}
                      quality={90}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />

                    {/* Overlay con gradiente elegante */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Información de la obra (aparece al hover) */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-col space-y-1 text-white/70 text-xs">
                          <p>Acrílico sobre lienzo</p>
                          <p>70 x 70 cm</p>
                          <p></p>
                        </div>
                      </div>
                    </div>

                    {/* Línea decorativa roja al hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>

                  {/* Nombre del artista visible siempre */}
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
                      alt="LINEA APASIONADA - Zinnia Clavo"
                      fill
                      priority={true}
                      quality={90}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />

                    {/* Overlay con gradiente elegante */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Información de la obra (aparece al hover) */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-col space-y-1 text-white/70 text-xs">
                          <p>Técnica mixta sobre papel</p>
                          <p>100 x 70 cm</p>
                          <p>2019</p>
                        </div>
                      </div>
                    </div>

                    {/* Línea decorativa roja al hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>

                  {/* Nombre del artista visible siempre */}
                  <div className="mt-3 mb-4">
                    <p className="text-white/80 font-light text-xs tracking-wider">
                      Hilario Bravo
                    </p>
                    <h5 className="text-white font-light truncate">Senda, I</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- COLUMNA 2 ---- */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Contenedor para las dos obras cuadradas (fila 1, columna 2) */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="relative group cursor-pointer">
                  <div className="overflow-hidden relative aspect-square rounded-sm shadow-lg border border-white/5">
                    <Image
                      src="/images/obras/ciria/ciria22.jpg"
                      alt="Acéfalo Panadhesivo - Aurelio Ayela"
                      fill
                      priority={true}
                      quality={90}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />

                    {/* Overlay con gradiente elegante */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Información de la obra (aparece al hover) */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-col space-y-1 text-white/70 text-xs">
                          <p>Técnica mixta, óleo y grafito sobre lienzo</p>
                          <p>250 x 250 cm</p>
                          <p>2022</p>
                        </div>
                      </div>
                    </div>

                    {/* Línea decorativa roja al hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>

                  {/* Nombre del artista visible siempre */}
                  <div className="mt-3 mb-4">
                    <p className="text-white/80 font-light text-xs tracking-wider">
                      CIRIA
                    </p>
                    <h5 className="text-white font-light truncate">
                      CAMAMESA
                    </h5>
                  </div>
                </div>

                <div className="relative group cursor-pointer">
                  <div className="overflow-hidden relative aspect-square rounded-sm shadow-lg border border-white/5">
                    <Image
                      src="/images/obras/gaber/obra41.jpg"
                      alt="Tratado de las estrellas. 7 - Hilario Bravo"
                      fill
                      priority={true}
                      quality={90}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />

                    {/* Overlay con gradiente elegante */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Información de la obra (aparece al hover) */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-col space-y-1 text-white/70 text-xs">
                          <p>Óleo sobre lienzo</p>
                          <p>180 x 130 cm</p>
                          <p>2023</p>
                        </div>
                      </div>
                    </div>

                    {/* Línea decorativa roja al hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>

                  {/* Nombre del artista visible siempre */}
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

              {/* Obra grande horizontal (fila 2, columna 2) */}
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden relative aspect-[16/9] rounded-sm shadow-lg border border-white/5">
                  <Image
                    src="/images/obras/oyonarte/obra10.jpg"
                    alt="Cortado sobre la página de un cómic - José Manuel Ciria"
                    fill
                    priority={true}
                    quality={90}
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay con gradiente elegante */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Información de la obra (aparece al hover) */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-col space-y-1 text-white/70 text-sm">
                        <p>Técnica Mixta sobre lienzo</p>
                        <p>110 x 150 cm</p>
                      </div>
                    </div>
                  </div>

                  {/* Línea decorativa roja al hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>

                {/* Nombre del artista visible siempre */}
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

          {/* Botón para ver más obras */}
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
{/* Sección de Artistas Destacados - Versión Elegante y Refinada con Links */}
<section className="py-24 px-6 lg:px-16 bg-black overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Encabezado */}
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
    
    {/* Líneas de artistas deslizantes */}
    <div className="overflow-hidden py-4 relative">
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

      {/* Primera Línea */}
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
          {Array(2)
            .fill(0)
            .map((_, arrayIndex) => (
              <React.Fragment key={`artist-row-1-${arrayIndex}`}>
                <Link href="/artistas/delpeso">
                  <motion.span 
                    className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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

      {/* Segunda Línea */}
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
          {Array(2)
            .fill(0)
            .map((_, arrayIndex) => (
              <React.Fragment key={`artist-row-2-${arrayIndex}`}>
                <Link href="/artistas/gaber">
                  <motion.span 
                    className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white/80 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group relative inline-block"
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
                    whileHover={{ 
                      color: "rgba(255, 255, 255, 0.95)",
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
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
    {/* Botón */}
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

      {/* Sección de Actualidad */}
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
  );
}
