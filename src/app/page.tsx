"use client";

import { useEffect, useState, } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";

interface Noticia {
  id: number;
  titulo: string;
  imagen: string;
  fecha: string;
  categoria: string;
  extracto: string;
}
;

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export default function Home() {
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
      imagen: "/images/obras/zinnia/obra7z.jpg",
      artista: "ZINNIA CLAVO",
      titulo: "Vuélame",
      medidas: "122 cm x 196 cm",
      tecnica: "Acrílico sobre tabla",
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
  const [currentObrasIndex, setCurrentObrasIndex] = useState(0);
  const obrasPerPage = 4;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

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
      {/* Hero Section modificada con imagen fija */}
{/* Hero Section con Tipografía Mejorada */}
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
        src="/images/obras/ciria/ciria2.jpg"
        alt="XinkuArt Gallery"
        fill
        priority
        sizes="100vw"
        quality={100}
        className="object-cover object-center"
      />
    </motion.div>
    
    {/* Overlay con gradiente optimizado */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
  
  </div>

  <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-8">
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center space-y-16"
    >
      {/* Logo Container - TAMAÑO REDUCIDO */}
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
        {/* Subtítulo - AHORA EN UNA SOLA LÍNEA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h1 className={`text-lg md:text-xl lg:text-2xl font-medium tracking-[0.15em] uppercase text-white 
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
          Descubre obras de artistas consolidados y emergentes en un espacio virtual único
        </motion.p>

        {/* Botón CTA con efecto de hover mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="pt-6"
        >
          <Link href="/obras">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="px-8 py-4 bg-[#FF0000] text-white text-lg font-medium rounded-sm relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explorar Colección
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </motion.svg>
              </span>
              <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>

  {/* Indicador "Descubre más" con flecha en lugar de ratón */}
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
        transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
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
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </div>
  </motion.div>
</section>
{/* Sección de Últimas Novedades con Diseño Responsive Mejorado */}
<section className="relative py-20 bg-[#1a1a1a] overflow-hidden">
  {/* Elementos decorativos de fondo */}
  <div className="absolute inset-0">
    <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF0000]/5 rounded-full filter blur-[80px]" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF0000]/5 rounded-full filter blur-[80px]" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Encabezado de la sección */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
        Últimas <span className="text-[#FF0000]">Novedades</span>
      </h2>
      <p className="text-lg text-white/70 max-w-3xl mx-auto font-light">
        Mantente al día con las exposiciones y eventos más recientes de nuestra galería
      </p>
      <div className="w-24 h-1 bg-[#FF0000]/20 mx-auto mt-6" />
    </motion.div>

    {/* Contenedor principal - Responsivo */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Novedad 1 - Ocupará toda la anchura en móvil, mitad en tablet, 2/3 en desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group md:col-span-2"
      >
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-[16/9] relative">
            <Image
              src="/images/obras/zinnia/obra45z.jpg"
              alt="Nueva exposición virtual"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#FF0000] text-white text-sm rounded-full">
                Exposición Virtual Zinnia Clavo
              </span>
              <span className="text-white/70 text-sm">20 Marzo, 2025</span>
            </div>
            <h3 className="text-2xl text-white font-light mb-3 group-hover:text-[#FF0000] transition-colors">
              Nueva Exposición Virtual: Linea Apasionada
            </h3>
            <p className="text-white/80 mb-4 line-clamp-2">
              Explorando el arte abstracto contemporáneo a través de una experiencia inmersiva 3D. Una colaboración con artistas internacionales.
            </p>
            <Link href="/exposiciones" className="inline-flex items-center text-[#FF0000] group/link">
              <span className="font-light">Explorar Exposición</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
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
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Novedad 2 - Ocupará toda la anchura en móvil, mitad en tablet, 1/3 en desktop */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="group bg-[#262626] rounded-xl overflow-hidden h-full"
      >
        <div className="flex flex-col h-full">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/obras/ciria/librociria.jpg"
              alt="Libro de Ciria"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-0 right-0 m-4">
              <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">
                Publicación
              </span>
            </div>
          </div>
          
          <div className="p-4 flex-grow">
            <time className="text-xs text-white/60">5 Febrero, 2025</time>
            <h3 className="text-lg text-white font-light mt-2 mb-2 group-hover:text-[#FF0000] transition-colors">
              Las Venas del Dragón de José Manuel Ciria
            </h3>
            <p className="text-white/70 text-sm line-clamp-2 mb-3">
              Presentación del nuevo libro en Casa de Vacas que explora el proceso creativo del artista.
            </p>
            <Link href="/actualidad" className="text-[#FF0000] text-sm flex items-center group/link">
              <span>Leer más</span>
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Novedad 3 - Ocupará toda la anchura en móvil, mitad en tablet, 2/3 en desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="group md:col-span-2"
      >
        <div className="relative rounded-xl overflow-hidden">
          <div className="aspect-[16/9] relative">
            <Image
              src="/images/obras/oyonarte/oyonarte5.jpg"
              alt="Manolo Oyonarte"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                Exposición virtual Manolo Oyonarte
              </span>
              <span className="text-white/70 text-sm">15 Febrero, 2025</span>
            </div>
            <h3 className="text-2xl text-white font-light mb-3 group-hover:text-[#FF0000] transition-colors">
              Manolo Oyonarte presenta Metáfora de la Libertad
            </h3>
            <p className="text-white/80 mb-4 line-clamp-2">
              Explorando el arte abstracto contemporáneo a través de una experiencia inmersiva 3D. Una colaboración con artistas internacionales.
            </p>
            <Link href="/exposiciones" className="inline-flex items-center text-[#FF0000] group/link">
              <span className="font-light">Ver Exposición</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/link:translate-x-1" 
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
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Novedad 4 - Ocupará toda la anchura en móvil, mitad en tablet, 1/3 en desktop */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="group bg-[#262626] rounded-xl overflow-hidden h-full"
      >
        <div className="flex flex-col h-full">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/obras/oyonarte/oyonarte1.jpg"
              alt="William Gaber obra"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-0 right-0 m-4">
              <span className="px-3 py-1 bg-[#FF0000] text-white text-xs rounded-full">
                Evento
              </span>
            </div>
          </div>
          
          <div className="p-4 flex-grow">
            <time className="text-xs text-white/60">20 Enero, 2025</time>
            <h3 className="text-lg text-white font-light mt-2 mb-2 group-hover:text-[#FF0000] transition-colors">
              Manolo Oyonarte presenta Nenúfares y Twombly
            </h3>
            <p className="text-white/70 text-sm line-clamp-2 mb-3">
              Una nueva perspectiva sobre la naturaleza y el arte abstracto en el museo La Neomudéjar.
            </p>
            <Link href="/actualidad" className="text-[#FF0000] text-sm flex items-center group/link">
              <span>Explorar</span>
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* Sección de Bienvenida Modernizada con Slider Original */}
<section className="relative py-24 md:py-32 overflow-hidden bg-[#151515]">
  {/* Elementos decorativos de fondo */}
  <div className="absolute inset-0">
    {/* Gradiente de fondo sutil */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#262626]" />
    
    {/* Elementos gráficos abstractos */}
    <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF0000]/5 rounded-full filter blur-[120px] opacity-60" />
    <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#FF0000]/8 rounded-full filter blur-[100px] opacity-60" />
    
    {/* Líneas decorativas de fondo */}
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Columna de Texto Modernizada */}
      <div className="relative order-2 lg:order-1">
        {/* Línea decorativa vertical */}
        <motion.div
          className="absolute -left-4 top-0 w-[2px] h-32 bg-gradient-to-b from-[#FF0000] to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        {/* Título con animación mejorada */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-[#FF0000] text-lg tracking-wider font-light px-3 py-1 border border-[#FF0000]/20 rounded-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            GALERÍA DE ARTE CONTEMPORÁNEO
          </motion.span>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Bienvenidos a
            <motion.span
              className="text-[#FF0000] block mt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              XinkuArt
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Línea decorativa horizontal */}
        <motion.div 
          className="w-20 h-[1px] bg-gradient-to-r from-[#FF0000] to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* Contenido de texto con mejor espaciado y animación */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="space-y-6">
            <p className="text-xl text-white/80 font-light leading-relaxed">
              XinkuArt está compuesto por artistas seleccionados con unas
              trayectorias consolidadas y que empiezan a tener una gran
              promoción internacional.
            </p>

            <p className="text-xl text-white/80 font-light leading-relaxed">
              En Xinkuart nos dedicamos íntegramente a la promoción de
              artistas consolidados y emergentes, ofreciendo un espacio virtual donde el arte trasciende fronteras.
            </p>
          </div>

          {/* Características con nuevos iconos y diseño más limpio */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {/* Arte Selecto */}
            <motion.div 
              className="group space-y-4 relative" 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000]/20 to-[#FF0000]/5 flex items-center justify-center backdrop-blur-sm border border-white/5">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#FF0000]"
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
              <div>
                <h3 className="text-white font-light text-lg">
                  Arte Selecto
                </h3>
                <p className="text-white/60 font-light text-sm leading-relaxed mt-2">
                  Selección exclusiva de obras de artistas consolidados a
                  nivel internacional
                </p>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#FF0000]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-700" />
            </motion.div>

            {/* Experiencia Virtual */}
            <motion.div 
              className="group space-y-4 relative" 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000]/20 to-[#FF0000]/5 flex items-center justify-center backdrop-blur-sm border border-white/5">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#FF0000]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </motion.svg>
              </div>
              <div>
                <h3 className="text-white font-light text-lg">
                  Experiencia Virtual 3D
                </h3>
                <p className="text-white/60 font-light text-sm leading-relaxed mt-2">
                  Innovadoras exposiciones virtuales 3D para una experiencia
                  inmersiva del arte
                </p>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#FF0000]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-700" />
            </motion.div>

            {/* Alcance Global */}
            <motion.div 
              className="group space-y-4 relative" 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF0000]/20 to-[#FF0000]/5 flex items-center justify-center backdrop-blur-sm border border-white/5">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#FF0000]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </motion.svg>
              </div>
              <div>
                <h3 className="text-white font-light text-lg">
                  Alcance Internacional
                </h3>
                <p className="text-white/60 font-light text-sm leading-relaxed mt-2">
                  Conexión con coleccionistas y amantes del arte de todo el
                  mundo
                </p>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-[#FF0000]/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl blur-xl transition-opacity duration-700" />
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Botón de acción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Link href="/artistas">
            <motion.button
              className="group relative px-6 py-3 bg-gradient-to-r from-[#FF0000] to-[#FF0000]/80 text-white rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 font-light">
                Conoce a Nuestros Artistas
                <motion.svg 
                  className="w-5 h-5" 
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

      {/* Columna de Slider de Imágenes (Reincorporado del código original) */}
      <div className="relative order-1 lg:order-2">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Marco decorativo modernizado */}
          <motion.div
            className="absolute -inset-4 border border-white/10 rounded-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />
          
          {/* Slider de imágenes mejorado - Mantiene el original pero con mejor estilo */}
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
                
                {/* Overlay con gradiente mejorado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Información del artista */}
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                  >
                    <span className="text-[#FF0000] text-sm tracking-wider">ARTISTA DESTACADO</span>
                    <h3 className="text-2xl text-white font-light">
                      {currentImageIndex === 0 && "José Manuel Ciria"}
                      {currentImageIndex === 1 && "Manolo Oyonarte"}
                      {currentImageIndex === 2 && "Pedro Pasquín"}
                      {currentImageIndex === 3 && "Eduardo Infante"}
                      {currentImageIndex === 4 && "Aurelio Ayela"}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {currentImageIndex === 0 && "Técnica mixta, óleo y grafito sobre lienzo"}
                      {currentImageIndex === 1 && "Técnica mixta sobre lienzo"}
                      {currentImageIndex === 2 && "Acrílico sobre Lienzo"}
                      {currentImageIndex === 3 && "Pintura metálica y acrílico sobre lienzo"}
                      {currentImageIndex === 4 && "Spray, rotulador y collage sobre papel"}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Indicadores modernizados */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
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
        </motion.div>
      </div>
    </div>
  </div>
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
    </main>
  );
}
