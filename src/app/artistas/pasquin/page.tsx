"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Book, Image as ImageIcon, Grid } from 'lucide-react';
interface ExposicionData {
    year: string;
    exhibitions: string[];
  }

const CiriaPage = () => {
  const [activeTab, setActiveTab] = useState('obras');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [selectedObra, setSelectedObra] = useState<null | any>(null);

  const tabItems = [
    { id: 'obras', label: 'Obras del Artista', icon: <Grid size={10} /> },
    { id: 'bio', label: 'Biografía', icon: <Book size={10} /> },

  ];

  const obras = [
    { 
      id: 1, 
          imagen: "/images/obras/obra47.jpg",
            titulo: "Walkers in New York II",
            dimensiones: "100 x 100 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    { 
      id: 2, 
      imagen: "/images/obras/obra49.jpg",
            titulo: "Walkers in New York III",
            dimensiones: "100 x 150 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 3, 
        imagen: "/images/obras/obra42.jpg",
            titulo: "Reflejos de la percepción",
            dimensiones: "100 x 150 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 4, 
        imagen: "/images/obras/obra44.jpg",
        titulo: "Casa Milá",
        dimensiones: "100 x 100 cm",
        tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 5, 
        imagen: "/images/obras/obra43.jpg",
            titulo: "El Pátio",
            dimensiones: "100 x 100 cm",
            tecnica: "Acrílico sobre lienzo",
            año:"2024"
    },
    { 
      id: 6, 
      imagen: "/images/obras/obra41.jpg",
      titulo: "La Terraza",
      dimensiones: "100 x 100 cm",
      tecnica: "Acrílico sobre lienzo",
    },
    { 
      id: 7, 
      imagen: "/images/obras/obra45.jpg",
            titulo: "La Fachada",
            dimensiones: "100 x 100 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    { 
      id: 8, 
      imagen: "/images/obras/obra48.jpg",
            titulo: "Paris",
            dimensiones: "100 x 100 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    
    
    
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-black overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
  <div className="relative h-full flex flex-col items-center justify-center text-center z-10 px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-7xl md:text-8xl font-light tracking-wider text-white mb-6"
    >
      PEDRO PASQUÍN
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "A veces es necesario PARAR y REFLEXIONAR el camino a seguir, buscando un cambio que fortalezca el alma y no la mente, aislándose del mundo exterior" 
    </motion.p>
    
    {/* Nuevo botón de contacto */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Link 
        href="/contacto"
        className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF0000] text-white rounded-full 
          hover:bg-[#cc0000] transition-colors duration-300 font-light text-lg"
      >
        QUIERO INFORMACIÓN SOBRE UNA OBRA
        <ArrowRight size={20} />
      </Link>
    </motion.div>
  </div>
</section>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 py-20">
    {/* Navegación por pestañas */}
    <nav className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {tabItems.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-light text-lg
                  transition-all duration-300 ${activeTab === tab.id 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </nav>

        {/* Contenido de las pestañas */}
        <AnimatePresence mode="wait">
        {activeTab === "obras" && (
            <motion.div
              key="obras"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {obras.map((obra) => (
                  <motion.div
                    key={obra.id}
                    className="group relative aspect-[3/4] rounded-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Imagen de la obra */}
                    <div className="relative h-full w-full">
                      <Image
                        src={obra.imagen}
                        alt={obra.titulo}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay con degradado */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {/* Título y detalles */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-2xl text-white font-light mb-2">
                            {obra.titulo}
                          </h3>
                          <p className="text-white/80 text-sm font-light">
                            {obra.tecnica}
                          </p>
                        </div>

                        {/* Botón Ver Obra mejorado */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <button
                            onClick={() => setSelectedObra(obra)}
                            className="relative overflow-hidden group bg-white/10 backdrop-blur-sm border border-white/20 
                    px-8 py-3 text-white font-light hover:border-white transition-all duration-300 
                    opacity-0 group-hover:opacity-100"
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Ver Obra
                              <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </span>
                            <div
                              className="absolute inset-0 bg-[#FF0000] transform -translate-x-full 
                      group-hover:translate-x-0 transition-transform duration-300"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Modal de obra */}
              {selectedObra && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
                  <div className="relative w-full h-full flex flex-col lg:flex-row">
                    {/* Botón cerrar mejorado */}
                    <button
                      onClick={() => setSelectedObra(null)}
                      className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm 
              border border-white/20 text-white hover:bg-[#FF0000] hover:border-[#FF0000] 
              transition-all duration-300 flex items-center justify-center rounded-full"
                    >
                      ✕
                    </button>

                    {/* Contenedor de la imagen */}
                    <div className="flex-1 relative h-full lg:h-screen p-4 lg:p-12">
                      <div className="relative h-full w-full">
                        <Image
                          src={selectedObra.imagen}
                          alt={selectedObra.titulo}
                          fill
                          className="object-contain"
                          priority
                          quality={100}
                        />
                      </div>
                    </div>

                    {/* Panel de información mejorado */}
                    <div className="w-full lg:w-[400px] bg-[#1a1a1a] p-8 lg:p-12 overflow-y-auto">
                      <div className="space-y-8">
                        {/* Autor */}
                        <div className="space-y-1">
                          <p className="text-[#FF0000] text-lg font-light">
                            PEDRO PASQUÍN 
                          </p>
                          <div className="w-12 h-0.5 bg-[#FF0000]" />
                        </div>

                        {/* Título */}
                        <h2 className="text-3xl text-white font-light leading-tight">
                          {selectedObra.titulo}
                        </h2>

                        {/* Detalles */}
                        <div className="space-y-6 pt-4">
                          <div>
                            <h3 className="text-sm text-[#FF0000] mb-2 tracking-wider">
                              TÉCNICA
                            </h3>
                            <p className="text-white/90 font-light">
                              {selectedObra.tecnica}
                            </p>
                          </div>

                          <div>
                            <h3 className="text-sm text-[#FF0000] mb-2 tracking-wider">
                              DIMENSIONES
                            </h3>
                            <p className="text-white/90 font-light">
                              {selectedObra.dimensiones}
                            </p>
                          </div>

                          {selectedObra.año && (
                            <div>
                              <h3 className="text-sm text-[#FF0000] mb-2 tracking-wider">
                                AÑO
                              </h3>
                              <p className="text-white/90 font-light">
                                {selectedObra.año}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Botón de contacto mejorado */}
                        <div className="pt-8">
                          <Link href="/contacto">
                            <button className="relative w-full overflow-hidden group">
                              <div
                                className="relative bg-[#FF0000] px-8 py-4 transition-transform duration-300 
                      group-hover:-translate-y-[200%]"
                              >
                                <span className="text-white font-light">
                                  Solicitar Información
                                </span>
                              </div>
                              <div
                                className="absolute inset-0 bg-white transition-transform duration-300 
                      translate-y-[100%] group-hover:translate-y-0"
                              >
                                <span className="absolute inset-0 flex items-center justify-center text-black font-light">
                                  Contactar
                                </span>
                              </div>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

{activeTab === 'bio' && (
  <motion.div
    key="bio"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="space-y-20"
  >
    {/* Sección Héroe de Biografía */}
    <div className="relative h-[60vh] rounded-3xl overflow-hidden">
      <Image
        src="/images/obras/obra42.jpg"
        alt="José Manuel Ciria"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-light text-white mb-6"
        >
          Pedro Pasquín
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 max-w-3xl"
        >
          
        </motion.p>
      </div>
    </div>

    {/* Sección de Trayectoria */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-light">Trayectoria Artística</h3>
        <p className="text-lg leading-relaxed text-gray-700">
        Desde el año 2000 he hecho del estudio de la luz y la composición a través de la cámara el objetivo de mi producción. La fascinación ejercida por los juegos de luz, la atracción por el color, la plasticidad de los materiales pictóricos y los avances de la tecnología digital me han llevado a explorar nuevas áreas en las que aplicar mis descubrimientos y seguir investigando.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-700">
        La unión entre mi faceta artística y tecnológica abre nuevos campos de posibilidades como el arte generativo dentro del mundo NFT, donde ya he incursionado. Fotografía, pintura, obra digital y avances en la fusión del arte y la tecnología serán mis objetivos principales en los años venideros.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-700">
        De mi formación académica destaca el Master de fotografía en la universidad Juan Carlos I. Estudios de dibujo y pintura al óleo de la mano de María Jose Perrón y de los maestros Juan Pedro Sáez y Antonio Cerrato. Carrera y Master en Informática, especialidad en desarrollo.
        </p>
        <br />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/obra43.jpg"
          alt="Obra de Ciria"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
    
  </motion.div>
)}
           
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CiriaPage;    