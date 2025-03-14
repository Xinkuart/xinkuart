"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
});


// Luego continúa con tus constantes


const CiriaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/lamo/lamo9.jpg",
      title: "HIBISCUS ABIERTO",
    },
    {
      url: "/images/obras/lamo/lamo7.jpg",
      title: "La Silla y el Espejo",
    },
    {
      url: "/images/obras/lamo/lamo2.jpg",
      title: "Escalera o Precipicio",
      year: "2021",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#262626]">
      {/* Hero Section Dinámico */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex].url}
              alt={heroImages[currentImageIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-24 px-4" // Aumentado de space-y-12 a space-y-24
          >
            {/* Logo con margen aumentado */}
            <div className="relative w-[280px] sm:w-[400px] md:w-[500px] mx-auto mb-12">
              {" "}
              {/* Añadido mb-12 */}
              <Image
                src="/images/logo/logoxinkuart.png"
                alt="XinkuArt Logo"
                width={500}
                height={167}
                className="object-contain"
              />
            </div>

            <div className="space-y-6">
            <motion.h1
  className={`relative text-7xl sm:text-8xl md:text-9xl text-white ${montserrat.className}`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  <div className="relative inline-block">
    <div className="flex flex-col items-start">
      <span className="font-light tracking-[0.15em] mt-2 relative">
      Lamo de Espinosa
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute -bottom-2 right-0 w-3/4 h-[2px] bg-[#FF0000] transform origin-right"
        />
      </span>
    </div>
  </div>
</motion.h1>
              <p className="text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto font-light italic leading-relaxed">
                El mundo es como es y yo veo lo que veo. Todos lo percibimos de forma diferente.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Indicadores de Imagen */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentImageIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </section>

      {/* Introducción Biográfica */}
      {/* Introducción Biográfica */}
      <section className="relative py-32 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
    >
      {/* Columna de Texto */}
      <div className="space-y-16">
        {/* Encabezado con diseño mejorado */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-[#FF0000] to-transparent" />
          <div className="pl-6">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-wide">
              BIOGRAFÍA
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mt-4" />
          </div>
        </motion.div>

        {/* Introducción destacada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-lg border-l-2 border-[#FF0000]"
        >
          <p className="text-xl text-gray-700 font-light leading-relaxed italic">
          ¿Blanco y negro? ¿Color? Lo vemos todo en color, pero a veces satura nuestros sentidos, nos confunde, distrae nuestra atención de lo esencial. En blanco y negro es más fácil transmitir una idea, un sentimiento… siempre y cuando el color no sea parte esencial.
          </p>
        </motion.div>

        {/* Secciones de Contenido */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Primera Sección */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-[#FF0000]">INICIOS</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
              En mis primeros años como fotógrafo – años setenta del siglo pasado – publiqué varias fotos como portadas de una colección de libros así como las fotos de las memorias anuales del Banco Cantábrico (hoy desaparecido).
              </p>
            </div>

            {/* Segunda Sección */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-[#FF0000]">El Concepto de la Fotografía</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
              Es a partir de principios de los años 2000 que mi relación loa fotografía empieza a cambiar, culminando a finales de 2021 en que tomé la decisión de salir del área de confort de mis cámaras y ordenador y exponer, primero en una exposición colectiva en mayo de 2022 en Madrid – BADA MADRID y recientemente (febrero 2023) en ARTIST 360 en Madrid. Ambas experiencias únicas e inolvidables.
              </p>
            </div>

            {/* Tercera Sección */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-light leading-relaxed">
              Me gusta la geometría, la arquitectura, los reflejos y transparencias, la ciudad y sus calles, sus gentes. Me gusta la naturaleza, lo grande y lo pequeño. Recientemente, a causa de un problema en mi ojo derecho me gusta analizar, mostrar, las deformaciones visuales, cómo creemos ver las cosas como son y realmente percibimos una realidad reprocesada por nuestros ojos, cerebros, subjetividad y los medios, instrumentos que nos permiten alcanzar esa percepción.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Columna de Imagen con efectos mejorados */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:sticky lg:top-32"
      >
        <div className="relative h-[800px] rounded-lg overflow-hidden">
          <Image
            src="/images/obras/lamo/lamo5.jpg"
            alt="William Gaber"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          
          {/* Información del artista */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="space-y-2">
              <p className="text-white/80 text-sm font-light tracking-wider">
                ARTISTA
              </p>
              <p className="text-white text-xl font-light">
                Lamo de Espinosa
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Obras Destacadas */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Obras <span className="text-[#FF0000]">Destacadas</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          {/* Grid de Obras */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                imagen: "/images/obras/lamo/lamo1.jpg",
                titulo: "DECOSTRUYENDO LA ESTRUCTURA",
                tecnica: "FOTOGRAFÍA",
                medidas: "100 x 70 cm",
              },
              {
                imagen: "/images/obras/lamo/lamo8.jpg",
                titulo: "BLANCO Y NEGRO",
                tecnica: "FOTOGRAFÍA",
                medidas: "70 x 100 cm",
              },
              {
                imagen: "/images/obras/lamo/lamo10.jpg",
                titulo: "HIBISCUS CERRADO",
                tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
                medidas: "100 x 120 cm",
              },
            ].map((obra, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Marco de la Obra */}
                <div className="relative aspect-square bg-white p-4 shadow-lg rounded-sm">
                  {/* Contenedor de la Imagen con efecto de marco */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={obra.imagen}
                      alt={obra.titulo}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay con degradado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Información de la Obra */}
                    <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="space-y-3">
                        <motion.h3
                          className="text-2xl font-light text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                        >
                          {obra.titulo}
                        </motion.h3>
                        <div className="h-px w-12 bg-[#FF0000]" />
                        <p className="text-white/90 font-light">
                          {obra.tecnica}
                        </p>
                        <p className="text-white/80 font-light text-sm">
                          {obra.medidas}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Borde decorativo */}
                  <div className="absolute inset-0 border border-gray-100 group-hover:border-[#FF0000]/20 transition-colors duration-300" />
                </div>

                {/* Sombra inferior */}
                <div className="absolute inset-x-4 bottom-0 h-8 bg-gradient-to-t from-black/5 to-transparent -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Botón Ver Más */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link href="/obras">
              <motion.button
                className="group relative inline-flex items-center px-8 py-4 bg-[#FF0000] text-white overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 font-light">
                  Ver Todas las Obras
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Botón de Contacto */}
      <section className="relative py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/contacto">
            <motion.button
              className="group relative px-8 py-4 bg-[#FF0000] text-white overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2 font-light">
                Solicitar Información
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CiriaPage;
