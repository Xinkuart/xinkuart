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

interface ExposicionData {
  year: string;
  exhibitions: string[];
}

// Exposiciones de Jesús del Peso organizadas por año
const exposiciones: ExposicionData[] = [
  {
    year: "2024",
    exhibitions: [
      "Galería ArtDealerMiami. exposición Behind the Lines, Miami, EEUUU."
    ],
  },
  {
    year: "2023",
    exhibitions: [
      "Certamen Nacional de Pintura Pozuelo de Alarcón, Madrid, España.",
      "The Pool, Marbella, España.",
      "Expo Algarve, Portimao, Portugal."
    ],
  },
  {
    year: "2022",
    exhibitions: [
      "Certamen Nacional de Pintura Pozuelo de Alarcón, Madrid, España.",
      "Certamen Pequeño Formato escultura, Madrid, España.",
      "89º Salón de Otoño AEPE, Casa de Vacas, Madrid, España."
    ],
  },
  {
    year: "2021",
    exhibitions: [
      "6º Salón de Arte Abstracto AEPE, Madrid, España.",
      "Místicos, Galería Espacio Primavera, Madrid, España.",
      "ARTESON VI Mombeltran, Ávila, España.",
      "88º Salón de Otoño AEPE, Casa de Vacas, Madrid, España.",
      "Exposición El Silo de Hortaleza, Madrid, España.",
      "Exposición OPA, Sede COAM, Madrid, España."
    ],
  },
  {
    year: "2019",
    exhibitions: [
      "Espacios de convergencia de la línea y el plano, Galería Le Petit Atelier, Lérida, España.",
      "ART3F París, Porte de Versailles, París, Francia.",
      "Exposición Grupo MTG Centro de Artes Buero Vallejo Alcorcón, Madrid, España.",
      "Exposición Grupo MTG Escultura y Ciudad, UPM ETSAM Madrid, España.",
      "International Fair World Art Dubai FAIR. Dubai World Trade Center, Dubai, EAU.",
      "Artista invitado Galería Espacio Primavera, Madrid, España.",
      "Geometrías Abiertas, Exposición individual Sede del COAATM, Madrid, España.",
      "Migraciones, Grupo MTG San Lorenzo de El Escorial, Madrid, España.",
      "Convergencia de la Línea y el Plano, Sala Chicharro AEPE, Madrid, España.",
      "86º Salón de Otoño AEPE, Casa de Vacas, Madrid, España.",
      "5º Salón de Arte Abstracto AEPE, Madrid, España.",
      "QAIF QATAR INTERNATIONAL, Doha, Qatar."
    ],
  },
  {
    year: "2018",
    exhibitions: [
      "Exposición GNOSIS Grupo MTG San Lorenzo de El Escorial, Madrid, España.",
      "ART3F LYON, Halle Tony Garnier, Lyon, Francia.",
      "85º Salón de Otoño AEPE, Casa de Vacas, Madrid, España.",
      "SOLOARTE AEPE, Sala Primavera, Madrid, España.",
      "Crisolart Gallerries, Barcelona, España.",
      "ART3FLUXEMBOURG, Luxexpo The Box, Luxemburgo."
    ],
  }
];

const JesusDelPesoPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/delpeso/delpeso7.jpg",
      title: "Escultura en Acero",
    },
    {
      url: "/images/obras/delpeso/delpeso23.jpg",
      title: "Geometrías del Metal",
    },
    {
      url: "/images/obras/delpeso/delpeso6.jpg",
      title: "Abstracción Escultórica",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  },);

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
            className="text-center space-y-24 px-4"
          >
            {/* Logo con margen aumentado */}
            <div className="relative w-[280px] sm:w-[400px] md:w-[500px] mx-auto mb-12">
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
                className={`relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white ${montserrat.className}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="relative inline-block">
                  <div className="flex flex-col items-start">
                    <span className="font-light tracking-[0.15em] mt-2 relative">
                      Jesús del Peso
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
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto font-light italic leading-relaxed px-4">
                La pintura abstracta busca revelar el equilibrio de las partes del objeto 
                y su dinámica interna, crear la forma ideal, el cuerpo físico ideal.
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
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-wide">
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
                  Con sus esculturas de metal, Jesús Del Peso continúa la tradición establecida en
                  la primera mitad del siglo XX por Henry Moore y luego desarrollada por maestros
                  como Ellsworth Kelly, Tony Smith, Barnett Newman y otros.
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
                    <h3 className="text-2xl font-light text-[#FF0000]">El Metal como Protagonista</h3>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                      Pliegues, cortes, reflejos y sombras del metal juegan el papel principal en la obra
                      de Del Peso. La obra de arte entra en diálogo con la iluminación, permitiendo
                      crear efectos de luces y sombras, contornos expresivos y siluetas. Jesús Del Peso
                      muestra la diferente naturaleza del metal, utilizando su color, textura y pátina.
                    </p>
                  </div>

                  {/* Segunda Sección */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-[#FF0000]">Raíces Cubistas</h3>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                      Los orígenes de estas esculturas se encuentran en los descubrimientos del cubismo,
                      con su descomposición de la forma en facetas y líneas, con la búsqueda
                      de la construcción de cada cosa en el mundo. Revelar el equilibrio de las partes
                      del objeto y su dinámica interna, filtrar detalles menores y, como resultado, crear
                      la forma ideal, el cuerpo físico ideal es el objetivo final de la escultura abstracta.
                    </p>
                  </div>

                  {/* Tercera Sección */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-[#FF0000]">Espacios Místicos</h3>
                    <p className="text-lg text-gray-700 font-light leading-relaxed">
                      La obra de Jesús Del Peso se cataloga desde una sensibilidad extrema que
                      vincula Arte y Arquitectura mediante la construcción de volúmenes que definen
                      vacíos y espacios recónditos, haciendo partícipe al espectador de los
                      mismos a través de la imaginación. Espacios sugerentes, místicos, envueltos
                      por las sombras activas y etéreas que en ellos se generan.
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
                  src="/images/obras/delpeso/delpeso15.jpg"
                  alt="Jesús del Peso - Escultura"
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
                      PINTOR/ESCULTOR
                    </p>
                    <p className="text-white text-xl font-light">
                      JESÚS DEL PESO
                    </p>
                    <p className="text-white/70 text-sm font-light">
                      Arte Abstracto • Escultura en Metal
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

            {/* Sección Filosofía Artística */}
            <section className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              FILOSOFÍA <span className="text-[#FF0000]">ARTÍSTICA</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#FF0000]">
                <h3 className="text-2xl font-light text-gray-900 mb-4">Equilibrio y Dinamismo</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  El binomio equilibrio/desequilibrio presente en estas esculturas surge de una
                  relación dialéctica en la que entran en juego masas y proporciones. Se trata
                  de un incesante descubrimiento de perspectivas y apariencias diversas, sobre
                  las que se fijan sorpresas para crear situaciones cada vez más diferentes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-[#FF0000]">
                <h3 className="text-2xl font-light text-gray-900 mb-4">Lucha con los Materiales</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Lucha constante con los materiales, el acero principalmente confiere a la escultura
                  una ligereza impropia de su naturaleza. El artista siente un gran respeto
                  por los materiales que utiliza y los aborda con sinceridad y sin artificios.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/obras/delpeso/delpeso21.jpg"
                alt="Filosofía Artística - Jesús del Peso"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de Exposiciones */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              TRAYECTORIA EXPOSITIVA
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          {/* Grid de Exposiciones por Año */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Primera Columna */}
            <div className="space-y-12">
              {exposiciones
                .slice(0, Math.ceil(exposiciones.length / 2))
                .map((yearGroup, index) => (
                  <motion.div
                    key={yearGroup.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center mb-6">
                      <h4 className="text-4xl font-light text-gray-900">
                        {yearGroup.year}
                      </h4>
                      <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                    </div>
                    <div className="space-y-4">
                      {yearGroup.exhibitions.map((exhibition, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 hover:bg-gray-100"
                        >
                          <p className="text-gray-700 font-light leading-relaxed">
                            {exhibition}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Segunda Columna */}
            <div className="space-y-12">
              {exposiciones
                .slice(Math.ceil(exposiciones.length / 2))
                .map((yearGroup, index) => (
                  <motion.div
                    key={yearGroup.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center mb-6">
                      <h4 className="text-4xl font-light text-gray-900">
                        {yearGroup.year}
                      </h4>
                      <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                    </div>
                    <div className="space-y-4">
                      {yearGroup.exhibitions.map((exhibition, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300 hover:bg-gray-100"
                        >
                          <p className="text-gray-700 font-light leading-relaxed">
                            {exhibition}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
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

export default JesusDelPesoPage;