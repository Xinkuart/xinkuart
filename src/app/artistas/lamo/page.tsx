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
      imagen: "/images/obras/lamo/lamo1.jpg",
              titulo: "DECOSTRUYENDO LA ESTRUCTURA",
              dimensiones: "100 x 70 cm",
              tecnica: "FOTOGRAFÍA",
    },
    { 
      id: 2, 
      imagen: "/images/obras/lamo/lamo2.jpg",
            titulo: "ESCALERA O PRECIPICIO",
            dimensiones: "100 x 70 cm",
            tecnica: "FOTOGRAFÍA",
    },
    { 
        id: 3, 
        imagen: "/images/obras/lamo/lamo3.jpg",
            titulo: "REFLEJOS EN EL LOUVRE",
            dimensiones: "70 x 100 cm",
            tecnica: "FOTOGRAFÍA",
    },
    { 
        id: 4, 
        imagen: "/images/obras/lamo/lamo4.jpg",
                titulo: "LA TORRE DE MADRID",
                dimensiones: "100 x 70 cm",
                tecnica: "FOTOGRAFÍA",
    },
    { 
        id: 5, 
        imagen: "/images/obras/lamo/lamo5.jpg",
            titulo: "HOTEL OSLO",
            dimensiones: "100 x 70 cm",
            tecnica: "FOTOGRAFÍA",
    },
    { 
        id: 6, 
        imagen: "/images/obras/lamo/lamo6.jpg",
        titulo: "LA PIRAMIDE DE MADRID",
        dimensiones: "70 x 100 cm",
        tecnica: "FOTOGRAFÍA",
        año: "2021"
            
    },
    { 
        id: 7, 
            imagen: "/images/obras/lamo/lamo7.jpg",
            titulo: "LA SILLA Y EL ESPEJO",
            dimensiones: "70 x 100 cm",
            tecnica: "FOTOGRAFÍA",
            
    },
    { 
        id: 8, 
        imagen: "/images/obras/lamo/lamo8.jpg",
        titulo: "Hierbas 11",
        dimensiones: "70 x 100 cm",
        tecnica: "FOTOGRAFÍA",
            
    },
    { 
        id: 9, 
            imagen: "/images/obras/lamo/lamo9.jpg",
            titulo: "HIBISCUS ABIERTO",
            dimensiones: "100 x 120 cm ",
            tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
    },
    { 
        id: 10, 
            imagen: "/images/obras/lamo/lamo10.jpg",
            titulo: "HIBISCUS CERRADO",
            dimensiones: "100 x 120 cm ",
            tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
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
      LAMO DE ESPINOSA
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "El mundo es como es y yo veo lo que veo. Todos lo percibimos de forma diferente.""
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
        QUIERO INFORMACIÓN SOBRE LAS OBRAS
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
        src="/images/obras/lamo/lamo10.jpg"
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
          José María Lamo de Espinosa
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
        En mis primeros años como fotógrafo – años setenta del siglo pasado – publiqué varias fotos como portadas de una colección de libros así como las fotos de las memorias anuales del Banco Cantábrico (hoy desaparecido).
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-700">
        Es a partir de principios de los años 2000 que mi relación loa fotografía empieza a cambiar, culminando a finales de 2021 en que tomé la decisión de salir del área de confort de mis cámaras y ordenador y exponer, primero en una exposición colectiva en mayo de 2022 en Madrid – BADA MADRID y recientemente (febrero 2023) en ARTIST 360 en Madrid. Ambas experiencias únicas e inolvidables.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-700">
        Me gusta la geometría, la arquitectura, los reflejos y transparencias, la ciudad y sus calles, sus gentes. Me gusta la naturaleza, lo grande y lo pequeño. Recientemente, a causa de un problema en mi ojo derecho me gusta analizar, mostrar, las deformaciones visuales, cómo creemos ver las cosas como son y realmente percibimos una realidad reprocesada por nuestros ojos, cerebros, subjetividad y los medios, instrumentos que nos permiten alcanzar esa percepción.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-gray-700">
        ¿Blanco y negro? ¿Color? Lo vemos todo en color, pero a veces satura nuestros sentidos, nos confunde, distrae nuestra atención de lo esencial. En blanco y negro es más fácil transmitir una idea, un sentimiento… siempre y cuando el color no sea parte esencial.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/lamo/lamo2.jpg"
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