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
    year: "2019",
    exhibitions: ["Secuencia de inútiles. Madrid."],
  },
  {
    year: "2013",
    exhibitions: [
      " Feria de Arte Strarta. Londres. Saatchi Galery- Marita Segovia Galería de Arte",
    ],
  },
  {
    year: "2009",
    exhibitions: ["Galería Éboli. Madrid."],
  },
  {
    year: "2004",
    exhibitions: ["Feria de Arte Contemporáneo ACTIVARTE. Barcelona."],
  },
  {
    year: "2002",
    exhibitions: [
      "Exposición 10º Aniversario Galería Rina Bouwen. Madrid.",
      "Exposición Señales Arte en la carretera. Cuenca.",
    ],
  },
  {
    year: "2000",
    exhibitions: [
      " Tránsito. Feria de Arte Moderno de Toledo. (Galería Rina Bouwen). Toledo.",
    ],
  },
  {
    year: "1999 - 1973",
    exhibitions: [
      "ART AL. Hotel Feria del Arte Moderno. (Galería Rina Bouwen). Valencia.",
      "FLASH ART. Feria de Arte Moderno. Hotel Majestic. Barcelona.",
      "Casa de Vacas del Retiro. Madrid.",
      "Museo de los Ángeles. Turégano. (Segovia).",
      "Galería Ignacio Várez. Madrid.",
      "Galería Pilar Parra. Madrid.",
      "Galería Carmen de la Guerra. Madrid.",
      "ARCO 91. Galería 10 Negritos. Madrid.",
      "ARCO 90. Galería Término. Madrid.",
      "Tres genios cuatro pintores. Galería Término. Madrid.",
      "Museo Antonio López. Tomelloso (Castilla La Mancha).",
      "Muestra Punto. Centro Colón. Madrid.",
      "Fondos del Ateneo de Madrid.",
      "Muestra de Arte Joven.  Universidad de Granada.",
      " Ayuntamiento de Valladolid Delegación de Gobierno País Vasco- Bilbao",
      "Caja de Ahorros de León.",
      " Ayuntamiento de Palma de Mallorca.",
      "Casa de la CulturA de Zaragoza y de La Coruña",
      "Muestra de Arte Joven. Círculo de Bellas Artes Madrid. Museo Provincial de Bellas Artes. Vitoria. Casa de Cultura. Zamora.",
      "Ateneo, Sala Santa Catalina. Madrid.",
      "Exposición itinerante Derechos Humanos. Madrid.",
      "Exposición Colegio Virgen del cortijo. Madrid.",
      "Exposición Club de Golf de La Moraleja. Madrid.",
      "Bienal del deporte en las Bellas Artes. Madrid.",
      "Escuela de Cerámica de Madrid. Madrid.",
      "Galería Bética. Madrid.",
      "Exposición Real Academia de Bellas Artes de San Fernando. Madrid.",
    ],
  },

];

const exposicionesIndividuales: ExposicionIndividual[] = [
  {
    year: "2015",
    exhibitions: ["Galería Theredoom. Madrid. Título: El ser y la nada."],
  },
  {
    year: "2013",
    exhibitions: [
      " Marita Segovia Galería de Arte. Madrid. Título: Rabbits",
      "Centro Ruso de Ciencia y Cultura. Madrid. Título: Después de las flores.",
      " Realización de la performance Después de las flores. Centro Ruso de Ciencia y Cultura. Madrid.",
    ],
  },
  {
    year: "2006",
    exhibitions: ["Fundación Caja Rioja. Logroño. Título: Serie Blanca."],
  },
  {
    year: "2004",
    exhibitions: [" Galería Trama. Madrid. Título: Incertidumbre."],
  },
  {
    year: "2000",
    exhibitions: [" Galería Rina Bouwen. Madrid. Título: Geografía."],
  },
  {
    year: "1995 - 1986",
    exhibitions: [
      "Galería Ignacio Várez. Madrid. Título: La esperanza matemática.",
      "Galería Espacio 40. Vitoria. Sin título.",
      "Galería Ravecca. Génova (Italia) Título: La memoria de los sentidos.",
      "Galería Término. Madrid. Título: Estelas de la memoria.",
      " Galería Estampa. Madrid. Título: Factorías.",
      "Exposición itinerante. Caja de Ahorros de Asturias (Oviedo, Gijón, Avilés, Mieres, La Felguera). Título: Factorías.",
    ],
  },

  // ... resto de las exposiciones
];

const CiriaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/alonso/alonso2.jpg",
      title: "Procesión",
      year: "2016",
    },
    {
      url: "/images/obras/alonso/alonso4.jpg",
      title: "Tres figuras",
      year: "2015",
    },
    {
      url: "/images/obras/alonso/alonso6.jpg",
      title: "El Cristo",
      year: "2016",
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
      Jaime Sánchez Alonso
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
<p className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto font-light italic leading-relaxed mt-6">
  "El arte tiene más valor que la verdad por ser afirmador de la vida
  del ser humano."
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
                imagen: "/images/obras/alonso/alonso1.jpg",
                titulo: "La Montaña Rusa",
                tecnica: "Pintura en técnica mixta sobre tela",
                medidas: "189 cm x 105 cm",
              },
              {
                imagen: "/images/obras/alonso/alonso8.jpg",
                titulo: "Hierbas 11",
                tecnica: "Técnica mixta sobre madera",
                medidas: "120 x 120 cm",
              },
              {
                imagen: "/images/obras/alonso/alonso5.jpg",
                titulo: "Así habló Zaratustra",
                tecnica: "Obra en técnica mixta sobre tela.",
                medidas: "250 x 200 cm",
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
