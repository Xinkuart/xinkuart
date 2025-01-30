"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Raleway } from "next/font/google";

interface Noticia {
  id: number;
  titulo: string;
  imagen: string;
  fecha: string;
  categoria: string;
  extracto: string;
}
const servicios = [
  {
    id: 1,
    titulo: "Obras Prestigiosas",
    descripcion: "Accede a una cuidada selección de obras de artistas reconocidos internacionalmente, con trayectorias consolidadas y proyección futura.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" className="fill-current"/>
      </svg>
    )
  },
  {
    id: 2,
    titulo: "Exposiciones Virtuales 3D",
    descripcion: "Experimenta el arte de una manera única con nuestras exposiciones virtuales 3D, que te permiten explorar las obras como si estuvieras allí.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" className="fill-current"/>
      </svg>
    )
  },
  {
    id: 3,
    titulo: "Asesoramiento Experto",
    descripcion: "Recibe orientación personalizada de nuestro equipo de expertos para tomar las mejores decisiones en tus adquisiciones artísticas.",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H7L12 23L17 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" className="fill-current"/>
      </svg>
    )
  }
];

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
      imagen: "/images/obras/obra45.jpg",
      titulo: "La Fachada",
      artista: "PEDRO PASQUÍN",
      tecnica: "Acrílico sobre lienzo",
      medidas: "100 x 100 cm",
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
      medidas: "189 cm x 105 cm",
      tecnica: "Pintura en técnica mixta sobre tela",
    },
    {
      id: 10,
      imagen: "/images/obras/ciria/ciria5.jpg",
      artista: "CIRIA ",
      titulo: "Musa y Venus (Rebelión)",
      medidas: "250 x 250 cm",
      tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
    },
    {
      id: 11,
      imagen: "/images/obras/obra43.jpg",
      artista: "PEDRO PASQUÍN",
      titulo: "El Patio",
      medidas: "100 x 100 cm",
      tecnica: "Acrílico sobre Lienzo",
    },
    {
      id: 12,
      imagen: "/images/obras/oyonarte/obra9.jpg",
      artista: "MANOLO OYONARTE",
      titulo: "Realidades sin Nombre.Z13",
      medidas: "200 x 200 cm",
      tecnica: "Técnica mixta sobre lienzo",
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

  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: "Manolo Oyonarte presenta 'Nenúfares y Twombly'",
      imagen: "/images/obras/oyonarte/oyonarte1.jpg",
      fecha: "26 Enero, 2025",
      categoria: "Exposiciones",
      extracto:
        "Nueva exposición en el museo La Neomudéjar, un diálogo entre naturaleza y arte contemporáneo.",
    },
    {
      id: 2,
      titulo: "'Las Venas del Dragón' de José Manuel Ciria",
      imagen: "/images/obras/ciria/librociria.jpg",
      fecha: "11 Noviembre, 2024",
      categoria: "Literatura",
      extracto:
        "Presentación del nuevo libro en Casa de Vacas, una obra que explora el proceso creativo del artista.",
    },
    {
      id: 3,
      titulo: "Ciria en la Sala Vaquero Poblador",
      imagen: "/images/obras/ciria/expociria1.jpg",
      fecha: "6 Septiembre, 2024",
      categoria: "Exposiciones",
      extracto:
        "Exposición en Badajoz que muestra la última colección del artista.",
    },
  ];
  const [selectedObra, setSelectedObra] = useState(null);
  const [currentObrasIndex, setCurrentObrasIndex] = useState(0);
  const obrasPerPage = 4;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

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
            className="text-center space-y-20"
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
              className="relative w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] mx-auto px-4 sm:px-0"
            >
              <div className="relative w-full aspect-[3/1]">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/logo/logoxinkuart.png"
                    alt="XinkuArt Logo"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 
               (max-width: 768px) 400px, 
               (max-width: 1024px) 500px, 
               (max-width: 1280px) 600px, 
               700px"
                    className="object-contain"
                  />
                </div>
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
      <section className="relative py-20 sm:py-32 overflow-hidden bg-[#262626]">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF0000]/5 rounded-full filter blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF0000]/5 rounded-full filter blur-[100px]" />
        </div>

        <motion.div
          className="relative max-w-6xl mx-auto px-4 sm:px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Columna de Texto */}
            <div className="relative">
              {/* Línea decorativa */}
              <motion.div
                className="absolute -left-4 top-0 w-1 h-32 bg-gradient-to-b from-[#FF0000] to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />

              {/* Título Principal */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[#FF0000] text-lg tracking-wider font-light">
                  GALERÍA DE ARTE CONTEMPORÁNEO
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
                  Bienvenidos a
                  <motion.span
                    className="text-[#FF0000] block mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    XinkuArt
                  </motion.span>
                </h2>
              </motion.div>

              {/* Contenido */}
              <motion.div
                className="mt-8 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="space-y-6">
                  <p className="text-xl text-white/80 font-light leading-relaxed">
                    XinkuArt está compuesto por artistas seleccionados con unas
                    trayectorias consolidadas y que empiezan a tener una gran
                    promoción internacional.
                  </p>

                  <p className="text-xl text-white/80 font-light leading-relaxed">
                    En Xinkuart nos dedicamos integramente a la promoción de
                    artistas consolidados y emergentes
                  </p>
                </div>

                {/* Características clave de XinkuArt - Reemplaza la sección de estadísticas */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-t border-b border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Arte Consolidado */}
                  <div className="group space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#FF0000]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </motion.svg>
                    </div>
                    <h3 className="text-white font-light text-lg">
                      Arte Selecto
                    </h3>
                    <p className="text-white/60 font-light text-sm leading-relaxed">
                      Selección exclusiva de obras de artistas consolidados a
                      nivel internacional
                    </p>
                  </div>

                  {/* Innovación */}
                  <div className="group space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#FF0000]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                        />
                      </motion.svg>
                    </div>
                    <h3 className="text-white font-light text-lg">
                      Experiencia Virtual 3D
                    </h3>
                    <p className="text-white/60 font-light text-sm leading-relaxed">
                      Innovadoras exposiciones virtuales 3D para una experiencia
                      inmersiva del arte
                    </p>
                  </div>

                  {/* Alcance Global */}
                  <div className="group space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-[#FF0000]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </motion.svg>
                    </div>
                    <h3 className="text-white font-light text-lg">
                      Alcance Internacional
                    </h3>
                    <p className="text-white/60 font-light text-sm leading-relaxed">
                      Conexión con coleccionistas y amantes del arte de todo el
                      mundo
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Slider de imágenes mejorado */}
            <div className="relative">
              <motion.div
                className="aspect-square relative rounded-xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 1,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={
                        [
                          "/images/obras/ciria/ciria6.jpg",
                          "/images/obras/oyonarte/obra4.jpg",
                          "/images/obras/obra43.jpg",
                          "/images/obras/obra21.jpg",
                          "/images/obras/ayela/obra15.jpg",
                        ][currentImageIndex]
                      }
                      alt="Arte contemporáneo"
                      fill
                      className="object-cover transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Indicadores mejorados */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        currentImageIndex === index
                          ? "w-8 bg-[#FF0000]"
                          : "w-2 bg-white/50 hover:bg-white/70"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Sección Exposiciones Virtuales */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a]" />

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#262626] to-[#1a1a1a]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FF0000]/5 rounded-full blur-[100px] animate-pulse" />

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
                    Explorar Más Exposiciones
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
      <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Fondo y elementos decorativos */}
      <div className="absolute inset-0 bg-neutral-900" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      <div className="relative w-full px-2 sm:px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 lg:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Obras <span className="text-[#FF0000]">Destacadas</span>
          </h2>
          <p className="text-xl text-white/70 font-light">
            Explora nuestra selección de obras más representativas
          </p>
        </motion.div>

        {/* Grid de obras */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 max-w-[95vw] mx-auto">
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
                {/* Contenedor cuadrado */}
                <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-800 shadow-xl">
                  {/* Imagen */}
                  <Image
                    src={obra.imagen}
                    alt={obra.titulo}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 22vw"
                  />
                  
                  {/* Overlay con información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-3 lg:p-4 flex flex-col justify-end">
                      <p className="text-red-500 font-light text-sm tracking-wider mb-1">
                        {obra.artista}
                      </p>
                      <h3 className="text-base lg:text-lg text-white font-light line-clamp-2 mb-2">
                        {obra.titulo}
                      </h3>
                      <p className="text-white/90 text-xs lg:text-sm font-light line-clamp-1 mb-1">
                        {obra.tecnica}
                      </p>
                      <p className="text-white/70 text-xs lg:text-sm font-light">
                        {obra.medidas}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Botón Ver Todas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/obras">
            <motion.button
              className="group relative px-8 py-4 bg-[#FF0000] text-white rounded-lg overflow-hidden hover:bg-[#FF0000] transition-colors duration-300"
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
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
    <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF0000]/5 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF0000]/5 rounded-full filter blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Últimas <span className="text-[#FF0000]">Noticias</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Mantente al día con las últimas novedades y eventos de nuestros artistas
            </p>
            <div className="w-20 h-1 bg-[#FF0000]/20 mx-auto" />
          </motion.div>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="/actualidad" className="group block">
                <article className="bg-[#262626] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-white/5">
                  {/* Contenedor de imagen */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Etiqueta de categoría */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 text-sm bg-[#FF0000] text-white rounded-full font-light">
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Contenido de la noticia */}
                  <div className="p-6 bg-[#262626]">
                    <time className="block text-sm text-gray-400 mb-3">
                      {noticia.fecha}
                    </time>

                    <h3 className="text-xl font-light text-white mb-2 group-hover:text-[#FF0000] transition-colors">
                      {noticia.titulo}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-2 font-light">
                      {noticia.extracto}
                    </p>

                    <div className="flex items-center text-[#FF0000] font-light transition-transform group-hover:translate-x-2">
                      Ver Noticia
                      <svg 
                        className="w-4 h-4 ml-2" 
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
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Todas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/actualidad">
            <motion.button
              className="group relative px-8 py-4 bg-[#FF0000] text-white overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2 font-light">
                Ver Todas las Noticias
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
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
      {/* Sección de Servicios */}
    <section className="relative py-24 bg-[#262626] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Servicios <span className="text-[#FF0000]">Exclusivos</span>
          </h2>
          <div className="w-40 h-0.5 bg-[#FF0000] mx-auto mt-4" />
        </motion.div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group h-full"
            >
              <div className="flex flex-col h-full p-8 bg-[#1E1E1E] rounded-lg transition-all duration-300 group-hover:translate-y-[-8px]">
                {/* Icono */}
                <div className="w-16 h-16 bg-[#FF0000] rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <div className="text-white">
                    {servicio.icon}
                  </div>
                </div>

                {/* Título y Descripción */}
                <h3 className="text-2xl text-white font-light mb-4">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed flex-grow">
                  {servicio.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón de Más Información */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/contacto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-[#FF0000] text-white rounded hover:bg-opacity-90 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 font-light">
                Más Información
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
    </main>
  );
}
