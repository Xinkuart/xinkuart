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
    year: "2022 ",
    exhibitions: [
      "‘Art Contemporani de la Generalitat Valenciana V’.CCCC. Centre Del Carme. Valencia.",
      "“Volcados con la palma” Lonja del Pescado. Alicante",
    ],
  },
  {
    year: " 2021",
    exhibitions: [
      " Ficciones Compartidas” Proyecto de Rubén Gomez Radioboy. Secadero- CC.CIGARRERAS. Alicante.",
    ],
  },
  {
    year: "2020 ",
    exhibitions: [
      "El ensayo antes de la actuación” Proyecto de Diana Guijarro. CC.CIGARRERAS. Alicante.",
    ],
  },
  {
    year: " 2016 ",
    exhibitions: [
      "The Ultimate First Experience” HS LAB. Hiroshima.",
      "La où le ciel et la terre se touchent, le paysage” Espace St Remí. Bourdeaux.",
      "“Arte Cisoria”, Centro Cultural Clavijero, Michoacán, Mexico, y Simposio Internacional de Arte Contemporáneo de Guarda, Portugal.",
    ],
  },
  {
    year: "2015",
    exhibitions: [
      "“Vidas cruzadas” Festival de Vidocreación, Galería Paula Alonso, Madrid.",
      "Arte Cisoria”, Galleria d’Arte Contemporanea del Liceo Artistico F. Figari, Sassari, Cerdeña, Italia.",
      "IAC Juan Gil-Albert, Alicante;",
      "Palazzo Regio de Cagliari, Cerdeña, Italia. ",
      "“Paisajes protegidos, de Folquer a São Paulo” MARTE. Castellón. ",
    ],
  },
  {
    year: "2014",
    exhibitions: [
      "Agorafilia”, Espai Ágora, Alcoy.",
      "“hinterlandmark  /el pavelló”, Addaya Centre d’Art Contemporani y Casal Son Tugores, Mallorca",
      "“Summer Lounge»(Con Addaya) Antiga estació. Sineu. Mallorca. ",
      "“Des de dins”, Museo de la Universidad de Alicante (MUA).",
      "“Arte Cisoria”, Museo Arqueológico y de Historia de Elche (MAHE)",
      "Centre d’Art Taller d’Ivars, Benissa; Museo de la Cuchillería, Albacete.",
    ],
  },
  {
    year: "2013",
    exhibitions: [
      "“AFFORDABLE ART FAIR ‘13”, Art Angler Gallery, New York City.",
      "“SUMMA 2013” con Parking Gallery. Madrid.",
      "“The Parking Collection 2013”, Parking Gallery, Alicante.",
      " “Arthamptons 2013” Con la Galería Art Angler. Nueva York.",
      " Drawing Now París” Con la Galería Pascal Polar. París.",
    ],
  },
  {
    year: "2012",
    exhibitions: [
      "“La vie en rose” Galerie Pascal Polar. Bruselas.",
      "Col·lecció Addaya” Centre d´Art Sa Quartera, Inca.",
    ],
  },
  {
    year: "2011",
    exhibitions: [
      "ContenporaryNew figuration ” Galerie Pascal Polar. Bruselas.",
      "“Gabinet de papers” Centro Municipal de Exposiciones, Elche.",
      "“Gràfic” Artistas de la Colección DKV, Mustang Art Gallery, Elche.",
    ],
  },
  {
    year: "2010 ",
    exhibitions: ["“Imatges Raonades II” Galería Addaya, Alaró, Mallorca."],
  },
  {
    year: "2009",
    exhibitions: [
      "“Transpop” Estudio Interproyectos, Altea. “Nit de l’Art ‘09” Galería Addaya, Palma.",
    ],
  },
  {
    year: "2008",
    exhibitions: [
      "No somos esto ni lo otro”  Galería Distrito Quinto, Barcelona.",
      "“Imatges raonades” Addaya Centre D’Art Contemporani. Alaró. Mallorca.",
    ],
  },
  {
    year: "2007",
    exhibitions: [
      "“Collaboration Unity” Espai Ubu. Barcelona.",
      "“Soles Negros” La escocesa. Barcelona.",
      "“Video Crashcats” con Xavier Gavín para el concierto de inauguración «imágenes del fin del mundo» MUSAC. León.",
    ],
  },
  {
    year: "2006",
    exhibitions: [
      "“Obert en Canal” Muestra de arte contemporáneo de Esparraguera. Barcelona.",
    ],
  },
  {
    year: "2005",
    exhibitions: [
      "”Valencia.art” Feria de Arte. Hotel Puerta Valencia, Valencia.",
    ],
  },
  {
    year: "2004",
    exhibitions: ["“Letras para las niñas”  Club Diario Información, Alicante"],
  },
  {
    year: "2003",
    exhibitions: [
      "“Perdidos en el espacio” Muestra Nacional de Arte Contemporáneo Ciudad de Yecla, Murcia.",
    ],
  },
  {
    year: "2002",
    exhibitions: ["“Pintura contemporánea” Galeria Aural. Alicante"],
  },
];

const exposicionesIndividuales: ExposicionIndividual[] = [
  {
    year: "2015",
    exhibitions: [
      "«Cotton in Furs» Palau Altea Centre D´Arts. Altea. Alicante.",
    ],
  },
  {
    year: " 2014",
    exhibitions: ["«El mar es más que el cielo» Parking Gallery. Alicante."],
  },
  {
    year: "2012",
    exhibitions: ["“El árbol en el agua” KUR Art Gallery. San Sebastían"],
  },
  {
    year: "2011",
    exhibitions: ["“CEMENTOFLOR” Parking Gallery. Alicante."],
  },
  {
    year: "2010",
    exhibitions: [
      "“1973” Belaza Gallery. Bilbao.",
      "“CONQUEST” Magatzen Wall&Video.Valencia.",
    ],
  },
  {
    year: "2009",
    exhibitions: [
      "”Santuario” con Aurelio Ayela. Galería Addaya, Alaró y Palma, Mallorca.",
    ],
  },
  {
    year: "2008",
    exhibitions: ["“Amanecer Sanguina” Antigua casa Haiku. Barcelona."],
  },
  {
    year: "2007",
    exhibitions: ["“Teaser” Archivo Municipal de Sarriá. Barcelona."],
  },
  {
    year: "2006",
    exhibitions: [
      "“Tengo una vida/ MiniyoS.L.(segunda parte)”, con Pablo Bellot. Sala Club Diario Información. Alicante.",
      "“Belleza Extrema”, Hotel Prince Park, Benidorm. Alicante.",
    ],
  },
  {
    year: "2005",
    exhibitions: [
      "Tengo una vida/ Miniyo S.L.”, con Pablo Bellot,. Sala Aifos. Universidad de Alicante.",
    ],
  },
  {
    year: "2004 ",
    exhibitions: [
      "“Barsoom” Galería ADN. Barcelona.",
      "“Japanium”, Centro 14, Alicante.",
    ],
  },
  {
    year: "2003",
    exhibitions: ["“El templo de Afrodita”. Galería Aural, Alicante.."],
  },
  {
    year: "1999",
    exhibitions: ["“Dibujo Libre” Noténom. Barcelona."],
  },
  {
    year: "1997-98",
    exhibitions: [
      "¿Por qué lo llaman Arte cuando quieren decir Walter?” Macro-instalación. C 14, Alicante. CAL ART, Los Angeles, USA.(Equipo Gloria).",
    ],
  },

  // ... resto de las exposiciones
];

const CiriaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/obra24.jpg",
      title: "La tercera noche",
    },
    {
      url: "/images/obras/obra20.jpg",
      title: "The Romantic Warrior",
    },
    {
      url: "/images/obras/obra21.jpg",
      title: "Go Nagai’s Cutie Honey",
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
      Eduardo Infante
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
                "Al final, la letra y la música son cosas distintas que si
                confluyen de manera feliz pueden dar lugar a una nueva, simple y
                gloriosa canción."
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
            "Se podría decir que la canción es mi unidad de medida pictórica. Para mí, 
            una pintura se compone de información plástica descomprimida..."
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
              <h3 className="text-2xl font-light text-[#FF0000]">La Perspectiva Artística</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Los simbolistas ya en el tramo final del romanticismo fueron conscientes 
                de que necesitaban un nuevo lenguaje plástico si querían estar a la altura 
                de las obras de Wagner y Strauss...
              </p>
            </div>

            {/* Segunda Sección */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-[#FF0000]">El Concepto de Ficción</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                La ficción no es un mero simulacro, es un lenguaje, que como decía Wilde 
                nos permite contar mentiras que son verdad...
              </p>
            </div>

            {/* Tercera Sección */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-[#FF0000]">Intención Artística</h3>
              <p className="text-lg text-gray-700 font-light leading-relaxed">
                MI intención, aunque parezca muy ambiciosa, en el fondo solo pretende crear 
                para la atención un objeto digno de aprecio...
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
            src="/images/obras/obra20.jpg"
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
                EDUARDO INFANTE
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
                imagen: "/images/obras/obra24.jpg",
                titulo: "La tercera noche",
                tecnica: "Pintura metálica y acrílico sobre lienzo",
                medidas: "50 x 40 cm",
              },
              {
                imagen: "/images/obras/obra20.jpg",
                titulo: "The Romantic Warrior",
                tecnica: "Acrílico sobre lienzo",
                medidas: "50 x 60 cm",
              },
              {
                imagen: "/images/obras/obra21.jpg",
                titulo: "Go Nagai’s Cutie Honey",
                tecnica: "Acrílico sobre lienzo",
                medidas: "40 × 40 cm",
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
