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
          {activeTab === 'obras' && (
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
                    className="group relative rounded-xl overflow-hidden shadow-lg"
                    onHoverStart={() => setHoveredImage(obra.id)}
                    onHoverEnd={() => setHoveredImage(null)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={obra.imagen}
                        alt={obra.titulo}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`
                        absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        transition-opacity duration-300
                        ${hoveredImage === obra.id ? 'opacity-100' : 'opacity-0'}
                      `}>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-light mb-2">{obra.titulo}</h3>
                          <p className="text-sm font-light opacity-90">{obra.tecnica}</p>
                          <p className="text-sm font-light opacity-90">{obra.dimensiones}</p>
                          <p className="text-sm font-light opacity-90">{obra.año}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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