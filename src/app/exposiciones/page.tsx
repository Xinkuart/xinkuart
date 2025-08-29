"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { X, Eye, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Exposicion {
  id: string;
  artista: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  urlIframe: string;
  imagenPreview: string;
  numeroObras: number;
}

const exposiciones: Exposicion[] = [
  {
    id: "1",
    artista: "José Manuel Ciria",
    titulo: "Abrasar los Ojos",
    descripcion:
      "Una exploración visual a través del color y las formas abstractas, donde el artista plasma su interpretación del espacio y el movimiento.",
    fecha: "DICIEMBRE 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17858",
    imagenPreview: "/images/obras/ciria/ciria11.jpg",
    numeroObras: 32,
  },
  {
    id: "8",
    artista: "Manolo Oyonarte",
    titulo: "Metáfora de la Libertad",
    descripcion:
      "En la obra de Manuel Oyonarte encuentro la dimensión de lo infantil, entendiendo que el niño es una metáfora de la libertad, del placer del juego y también representa la ironía radical, la absoluta capacidad de asombro y la actitud indisciplinada.",
    fecha: "MARZO 2025",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=19661",
    imagenPreview: "/images/obras/oyonarte/oyonarte5.jpg",
    numeroObras: 20,
  },
  {
    id: "3",
    artista: "Zinnia Clavo",
    titulo: "Linea Apasionada",
    descripcion:
      "Mi trabajo es un desafío diario conmigo misma. Si todo sale bien, es que algo va mal. No te puedes conformar con lo que ya sabes, tienes que seguir aprendiendo, buscar nuevos caminos, ideas, formas, líneas…",
    fecha: "MARZO 2025",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=19677",
    imagenPreview: "/images/obras/zinnia/obra45z.jpg",
    numeroObras: 32,
  },
  
  {
    id: "2",
    artista: "William Gaber",
    titulo: "Bloques de Construcción",
    descripcion:
      "La exposición Bloques de construcción presenta una inmersión en la obra del artista William Gaber, quien, a través de la abstracción geométrica, explora dos temas centrales.",
    fecha: "ABRIL 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=15277",
    imagenPreview: "/images/obras/gaber/gaber1.jpg",
    numeroObras: 34,
  },
  {
    id: "10",
    artista: "Jesús del Peso",
    titulo: "Fragmentos del Espacio",
    descripcion:
      "Jesús del Peso nos invita a una exploración íntima de la geometría como lenguaje poético, donde cada obra funciona como un fragmento de una realidad espacial más amplia que trasciende los límites físicos del lienzo.",
    fecha: "AGOSTO 2025",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=21538",
    imagenPreview: "/images/obras/delpeso/delpeso26.jpg",
    numeroObras: 27,
  },
  {
    id: "6",
    artista: "Aurelio Ayela",
    titulo: "Tanga Paciencia",
    descripcion:
      "Intentar resumir en pocas líneas una muestra antológica como esta, que reúne obras tan diversas de mi profucción, es problamemente un absurdo. Pero teniendo en cuenta la importancia que el absurdo y el esperpento han tenido desde siempre en mi concepción del arte, es un absurdo que me estimula.",
    fecha: "FEBRERO 2025",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=19248",
    imagenPreview: "/images/obras/ayela/obra42.jpg",
    numeroObras: 34,
  },
  {
    id: "7",
    artista: "Hilario Bravo",
    titulo: "Recintos y Escaleras",
    descripcion:
      "Todas las ideas parecen tener planos/relieve, como si fuesen diferentes cristales superpuestos donde las facetas creadas por la propia consecución de los planos muestran profundidad real del espacio.",
    fecha: "ENERO 2025",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=19208",
    imagenPreview: "/images/obras/bravo/bravo45.jpg",
    numeroObras: 32,
  },
  {
    id: "9",
    artista: "Eduardo Infante",
    titulo: "Álbum",
    descripcion:
      "Álbum, como esas partituras encuadernadas que pueden devenir en cajas donde guardan discos de pizarra, hasta llegar al conjunto de canciones grabadas en cualquier soporte físico o virtual.",
    fecha: "FEBRERO 2025",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=19326",
    imagenPreview: "/images/obras/infante/infante27.jpg",
    numeroObras: 23,
  },
  
  {
    id: "4",
    artista: "José María Lamo de Espinosa",
    titulo: "Espacios y Formas",
    descripcion:
      "A través del blanco y negro, José María Lamo de Espinosa nos presenta una serie fotográfica donde la arquitectura se convierte en protagonista de una narrativa visual única.",
    fecha: "SEPTIEMBRE 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=17510",
    imagenPreview: "/images/obras/lamo/lamo11.jpg",
    numeroObras: 19,
  },
  {
    id: "5",
    artista: "Pedro Pasquín",
    titulo: "Calma Total",
    descripcion:
      "Calma se adentra en tus pensamientos, el autor quiere que te tomes unos minutos para olvidarte de tus problemas y te invita a reflexionar y disfrutar de esta exposición",
    fecha: "DICIEMBRE 2024",
    urlIframe:
      "https://d7mntklkfre1v.cloudfront.net/virtual-exhibitions/?i=18174",
    imagenPreview: "/images/obras/obra50.jpg",
    numeroObras: 10,
  },
];

export default function ExposicionesPage() {
  const [selectedExpo, setSelectedExpo] = useState<Exposicion | null>(null);
  const [, setIsFullscreen] = useState(false);
  const [hoveredExpo, setHoveredExpo] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Función para entrar/salir de pantalla completa
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Manejar ESC para salir de pantalla completa
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);


  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Hero Section con imagen de exposición virtual de fondo */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        {/* Imagen de fondo de exposición virtual */}
        <div className="absolute inset-0">
          <Image
            src="/images/obras/ciria/ciria11.jpg"
            alt="Exposición Virtual"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay con gradiente para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0f0f0f]" />

          {/* Efecto de partículas o puntos 3D para simular ambiente virtual (opcional) */}
          <div
            className="absolute inset-0 opacity-30 mix-blend-screen"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "15px 15px",
            }}
          />
        </div>

        {/* Contenido Hero */}
        <div className="relative h-full flex flex-col items-center justify-center max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8 sm:space-y-12"
          >
            {/* Logo con animación */}
            <motion.div
              className="relative w-[200px] sm:w-[300px] md:w-[400px] mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <Image
                src="/images/logo/logoxinkuart.png"
                alt="XinkuArt Logo"
                width={400}
                height={133}
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Título principal */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-light tracking-tight px-4 sm:px-0 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                EXPOSICIONES <span className="text-[#FF0000]">VIRTUALES </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl mx-auto text-xl text-white font-light drop-shadow-lg"
              >
                Una nueva forma de experimentar el arte con tecnología de
                vanguardia
              </motion.p>
            </div>

            {/* Características con animación mejorada y con más contraste */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 mt-8 sm:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#FF0000]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M3.51562 9H20.4844"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3.51562 15H20.4844"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 3C14.0683 3 15.9184 7.11159 15.9184 12C15.9184 16.8884 14.0683 21 12 21C9.93171 21 8.08163 16.8884 8.08163 12C8.08163 7.11159 9.93171 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                  title: "Vista 360°",
                  desc: "Explora cada sala desde cualquier ángulo",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#FF0000]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3L4 7.5L12 12L20 7.5L12 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 16.5L12 21L20 16.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 12L12 16.5L20 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  title: "Experiencia 3D",
                  desc: "Sumérgete en un entorno virtual de última generación",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#FF0000]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 10V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 10H19C20.1046 10 21 10.8954 21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V12C3 10.8954 3.89543 10 5 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="16" r="1" fill="currentColor" />
                    </svg>
                  ),
                  title: "Acceso Ilimitado",
                  desc: "Visita la exposición cuando y donde quieras",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center
              border border-white/20 group-hover:border-[#FF0000]/50 
              group-hover:bg-[#FF0000]/20 transition-all duration-300"
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl text-white mt-4 font-medium drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white mt-2 max-w-[200px] mx-auto drop-shadow-md">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Botón de explorar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.button
                onClick={() =>
                  document
                    .getElementById("exposiciones")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-8 sm:mt-16 px-6 sm:px-8 py-3 sm:py-4 bg-[#FF0000] 
            text-white relative overflow-hidden group hover:bg-[#FF0000]/90 transition-colors duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  Explorar Exposiciones
                  <motion.svg
                    className="w-5 h-5"
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
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Sección de introducción con efecto parallax */}
      <section
        ref={containerRef}
        className="relative py-20 sm:py-32 overflow-hidden"
        id="exposiciones"
      >
        <div className="absolute inset-0 bg-[#0f0f0f]" />

        {/* Elementos decorativos */}
        <motion.div
          style={{ opacity: opacityParallax, y: yParallax }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ opacity: opacityParallax, y: yParallax }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF0000]/5 rounded-full blur-[100px]"
        />

        {/* Líneas decorativas */}
        <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Columna de texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-block text-[#FF0000] text-sm tracking-widest uppercase px-3 py-1 bg-[#FF0000]/10 border border-[#FF0000]/20 rounded-full">
                  TECNOLOGÍA DE VANGUARDIA
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light leading-tight">
                  El Arte en una Nueva{" "}
                  <span className="text-[#FF0000]">Dimensión</span>
                </h2>
              </div>

              <p className="text-white/70 text-lg font-light leading-relaxed">
                Las exposiciones virtuales 3D representan la revolución digital
                en el mundo del arte, fusionando la creatividad artística con la
                tecnología más avanzada. En XinkuArt, estamos a la vanguardia de
                esta transformación, ofreciendo experiencias inmersivas que
                trascienden las limitaciones físicas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full" />
                    <h3 className="text-white text-xl font-light">
                      Libertad Total
                    </h3>
                  </div>
                  <p className="text-white/60 pl-4">
                    Olvídate de los horarios y las distancias. Explora las obras
                    a tu ritmo, desde cualquier lugar del mundo.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#FF0000] rounded-full" />
                    <h3 className="text-white text-xl font-light">
                      Detalle Excepcional
                    </h3>
                  </div>
                  <p className="text-white/60 pl-4">
                    Acércate a las obras como nunca antes, descubriendo detalles
                    imperceptibles en una experiencia física tradicional.
                  </p>
                </div>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#FF0000] hover:text-white group"
              >
                <span className="text-lg">Más sobre nuestra tecnología</span>
                <div className="w-8 h-8 rounded-full border border-[#FF0000] flex items-center justify-center group-hover:bg-[#FF0000] transition-colors duration-300">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>

            {/* Columna de imagen */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/obras/ciria/momento2.jpg"
                  alt="Exposición virtual 3D"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    {/* Grid de todas las exposiciones */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f0f0f]" />

        {/* Elementos decorativos */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#FF0000]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#FF0000]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light">
              Todas las <span className="text-[#FF0000]">Exposiciones</span>
            </h2>
            <p className="text-white/60 text-lg mt-4 max-w-2xl mx-auto">
              Explora nuestra colección de exposiciones virtuales y vive una
              experiencia única desde cualquier dispositivo
            </p>
          </motion.div>

          {/* Grid responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {exposiciones.map((expo, index) => (
              <motion.div
                key={expo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden 
                  border border-white/10 hover:border-[#FF0000]/20 
                  hover:bg-gradient-to-b hover:from-[#FF0000]/10 hover:to-transparent 
                  transition-all duration-500"
                onMouseEnter={() => setHoveredExpo(expo.id)}
                onMouseLeave={() => setHoveredExpo(null)}
              >
                {/* Imagen de la exposición */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={expo.imagenPreview}
                    alt={expo.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 
                      group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Badge en la esquina */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                    {expo.fecha}
                  </div>

                  {/* Botón play */}
                  <motion.button
                    onClick={() => setSelectedExpo(expo)}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={
                      hoveredExpo === expo.id
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.8, opacity: 0 }
                    }
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF0000]/80 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </motion.button>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl text-white font-light group-hover:text-[#FF0000] transition-colors">
                    {expo.titulo || expo.artista}
                  </h3>

                  <p className="text-white/80">{expo.artista}</p>

                  <p className="text-white/60 text-sm line-clamp-2">
                    {expo.descripcion}
                  </p>

                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#FF0000] rounded-full" />
                      <span className="text-white/50 text-sm">
                        {expo.numeroObras} obras
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedExpo(expo)}
                      className="text-[#FF0000] flex items-center gap-1 group/btn"
                    >
                      <span>Explorar</span>
                      <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para visualizar la exposición 3D */}
      <AnimatePresence>
        {selectedExpo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedExpo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-[95vw] h-[90vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del modal */}
              <div
                className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-8 py-4 sm:py-6
                bg-gradient-to-b from-black via-black/80 to-transparent"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1 sm:space-y-2">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xl sm:text-3xl font-light text-white"
                    >
                      {selectedExpo.titulo}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-white/80"
                    >
                      <p>{selectedExpo.artista}</p>
                      <span className="hidden sm:inline">•</span>
                      <p>{selectedExpo.fecha}</p>
                      <span className="hidden sm:inline">•</span>
                      <p>{selectedExpo.numeroObras} obras</p>
                    </motion.div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleFullscreen}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                        transition-colors duration-300"
                      aria-label="Pantalla completa"
                    >
                      <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>

                    <button
                      onClick={() => setSelectedExpo(null)}
                      className="p-2 rounded-full bg-white/10 hover:bg-[#FF0000] 
                        transition-colors duration-300"
                      aria-label="Cerrar"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Iframe con la exposición virtual */}
              <iframe
                src={selectedExpo.urlIframe}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title={selectedExpo.titulo}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
