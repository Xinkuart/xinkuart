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
interface ExposicionIndividual {
  year: string;
  exhibitions: string[];
}
interface ExposicionColectiva {
  year: string;
  exhibitions: string[];
}

// Luego continúa con tus constantes
const exposicionesColectivas: ExposicionColectiva[] = [
  {
    year: "Febrero 2024 ",
    exhibitions: ["“ Reflejos Ocultos ” Maison Celeste. CDMX"],
  },
  {
    year: " Junio 2023",
    exhibitions: [
      " The summer exhibition ” Galería Lux Perpetua. Mérida, Yucatán",
    ],
  },
  {
    year: "Febrero 2022",
    exhibitions: ["“ Carajillo ” Nave Oporto, Madrid, España"],
  },
  {
    year: " Junio 2020",
    exhibitions: [
      " Corriente Alterna / Corriente Continua ” Galería Nueva, Madrid, España",
    ],
  },
  {
    year: "Diciembre 2019",
    exhibitions: [
      "PEN Projects, Miami, Florida",
      "Aqua Art Miami, Rubber Stamp Art Projects, Miami, Florida.",
      "Espacio Mannach, Ciudad de México.",
    ],
  },
  {
    year: "Octubre 2018 ",
    exhibitions: [
      "Galería Pandea Cartesiano, Puebla, México.",
      "Museo Vostell MalparAda, MalparAda de Cáceres, España.",
    ],
  },
  {
    year: "Agosto 2017",
    exhibitions: ["Royal College of Art, Londres, Inglaterra."],
  },
];

const exposicionesIndividuales: ExposicionIndividual[] = [
  {
    year: "Diciembre 2023 ",
    exhibitions: [
      "«Monumento» Gran Museo del Mundo Maya, Mérida, México.",
      "William Gaber, Kuna Galería, San Miguel de Allende, México",
    ],
  },
  {
    year: " Septiembre 2023",
    exhibitions: ["«Monumento» Galería Alfredo Ginocchio, CDMX."],
  },
  {
    year: "Octubre 2022",
    exhibitions: ["«Lo que dejamos pasar» CC Olimpo, Mérida, México"],
  },
  {
    year: "Septiembre 2022",
    exhibitions: [" «Lo que dejamos pasar» Embajada de México en España, ICME"],
  },
  {
    year: "Agosto 2021",
    exhibitions: [
      "¿Qué estará haciendo Houdini? ” Centro de Arte Casa de Indias, Cádiz, España",
    ],
  },
  {
    year: "Septiembre 2019",
    exhibitions: [
      "“ Sacred Places ” Centro de Arte Casa de Indias, Cádiz, España",
    ],
  },
  {
    year: "Enero 2019",
    exhibitions: [
      "“ En la mirada del observador ” Fundación Pons, Madrid, España",
    ],
  },
  {
    year: "Septiembre 2016",
    exhibitions: [
      "“ La Maqueta Humana ” Galería Casa Gotxicoa, Monterrey México.",
    ],
  },
  // ... resto de las exposiciones
];

const CiriaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/gaber/obra40.jpg",
      title: "Monumento #P13",
      year: "2023",
    },
    {
      url: "/images/obras/gaber/obra39.jpg",
      title: "Monumento #P16",
      year: "2023",
    },
    {
      url: "/images/obras/gaber/obra38.jpg",
      title: "Monumento #P07",
      year: "2023",
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
      William Gaber
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
                "El trabajo de William Gaber explora diferentes medios como la
                pintura, el dibujo, y la escultura."
              </p>
            </div>

            {/* Obra Actual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-2">
                Obra Actual
              </p>
              <p className="text-white text-xl font-light">
                {heroImages[currentImageIndex].title}
              </p>
              <p className="text-white/80 text-sm">
                {heroImages[currentImageIndex].year}
              </p>
            </motion.div>
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
            <div className="space-y-12">
              {/* Encabezado */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                  BIOGRAFÍA
                </h2>
                <div className="w-20 h-0.5 bg-[#FF0000]" />
              </motion.div>

              {/* Contenido Biográfico */}
              <div className="space-y-8">
                {/* Formación */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-lg max-w-none"
                >
                  <h3 className="text-2xl font-light text-gray-800 mb-4">
                    Formación Artística
                  </h3>
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Gaber ha desarrollado su vocación de manera autodidacta,
                    estudiando bajo la tutela de diferentes maestros en México y
                    participando en ayudantías en talleres de artistas
                    reconocidos. Su formación más reciente incluye los
                    prestigiosos Talleres del Museo del Prado en Madrid y el
                    Royal College of Art de Londres.
                  </p>
                </motion.div>

                {/* Práctica Artística */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="prose prose-lg max-w-none"
                >
                  <h3 className="text-2xl font-light text-gray-800 mb-4">
                    Práctica Artística
                  </h3>
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    El trabajo de William Gaber se caracteriza por la
                    exploración de diversos medios artísticos, incluyendo
                    pintura, dibujo y escultura. Esta diversidad no es casual,
                    sino que forma parte integral de su identidad como artista
                    contemporáneo y observador agudo de la realidad.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Columna de Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-full" // Modificado para mejor control del espacio
            >
              <div className="relative h-[calc(100vh-200px)] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/obras/gaber/obra37.jpg"
                  alt="William Gaber"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
                imagen: "/images/obras/gaber/obra32.jpg",
                titulo: "Colindancias III",
                tecnica: "Óleo sobre tela",
                medidas: "150 x 200 cm",
              },
              {
                imagen: "/images/obras/gaber/obra35.jpg",
                titulo: "Whole Nº3",
                tecnica: "Acrílico sobre lino",
                medidas: "150 x 150 cm",
              },
              {
                imagen: "/images/obras/gaber/obra34.jpg",
                titulo: "Whole Nº2",
                tecnica: "Acrílico sobre lino",
                medidas: "160 x 220 cm",
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

      {/* Línea de Tiempo de Exposiciones */}
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
              COLECCIÓN DE EXPOSICIONES
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          {/* Exposiciones Individuales */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light text-gray-900 mb-12"
            >
              Exposiciones Individuales
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {/* Primera Columna */}
              <div className="space-y-12">
                {exposicionesIndividuales
                  .slice(0, Math.ceil(exposicionesIndividuales.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
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
                {exposicionesIndividuales
                  .slice(Math.ceil(exposicionesIndividuales.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
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

          {/* Exposiciones Colectivas */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light text-gray-900 mb-12"
            >
              Exposiciones Colectivas
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {/* Primera Columna */}
              <div className="space-y-12">
                {exposicionesColectivas
                  .slice(0, Math.ceil(exposicionesColectivas.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
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
                {exposicionesColectivas
                  .slice(Math.ceil(exposicionesColectivas.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
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
