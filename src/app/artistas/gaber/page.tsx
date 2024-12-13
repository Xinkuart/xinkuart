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
    { id: 'exposiciones', label: 'Exposiciones Individuales', icon: <ImageIcon size={10} /> },
    { id: 'exposiciones 2', label: 'Exposiciones Colectivas', icon: <ImageIcon size={10} /> },

  ];

  const obras = [
    { 
      id: 1, 
            imagen: "/images/obras/gaber/obra40.jpg",
            titulo: "Monumento #P13",
            dimensiones: "150 x 200 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
    },
    { 
      id: 2, 
            imagen: "/images/obras/gaber/obra39.jpg",
            titulo: "Monumento #P16",
            dimensiones: "180 x 130 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
    },
    { 
        id: 3, 
            imagen: "/images/obras/gaber/obra38.jpg",
            titulo: "Monumento #P07",
            dimensiones: "180 x 130 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
    },
    { 
        id: 4, 
            imagen: "/images/obras/gaber/obra37.jpg",
            titulo: "Monumento #P01",
            dimensiones: "190 x 150 cm",
            tecnica: "Óleo sobre tela",
            año: "2023" 
    },
    { 
        id: 5, 
        imagen: "/images/obras/gaber/obra36.jpg",
        titulo: "Como construir un monumento #1",
        dimensiones: "191 x 425 cm",
        tecnica: "Óleo sobre tela",
        año: "2023" 
    },
    { 
        id: 6, 
        imagen: "/images/obras/gaber/obra35.jpg",
        titulo: "Whole Nº3",
        dimensiones: "150 x 150 cm",
        tecnica: "Acrílico sobre lino",
        año: "2021"
    },
    { 
        id: 7, 
        imagen: "/images/obras/gaber/obra34.jpg",
        titulo: "Whole Nº2",
        dimensiones: "160 x 220 cm",
        tecnica: "Acrílico sobre lino",
        año: "2021"
    },
    { 
        id: 8, 
            imagen: "/images/obras/gaber/obra33.jpg",
                titulo: "Whole Nº1",
                dimensiones: "150 x 190 cm",
                tecnica: "Acrílico sobre lino",
                año: "2021" 
    },
    { 
        id: 9, 
            imagen: "/images/obras/gaber/obra32.jpg",
            titulo: "Colindancias III",
            dimensiones: "150 x 200 cm",
            tecnica: "Óleo sobre tela",
            año: "2023" 
    },
    { 
        id: 10, 
        imagen: "/images/obras/gaber/obra31.jpg",
            titulo: "Colindancias II",
            dimensiones: "180 x 130 cm",
            tecnica: "Óleo sobre tela",
            año: "2023" 
    },
    { 
        id: 11, 
            imagen: "/images/obras/obra30.jpg",
              titulo: "Colindancias I",
              dimensiones: "180 x 130 cm",
              tecnica: "Óleo sobre tela",
              año: "2023"
    },
    
  ];
  const exposicionesIndividuales: ExposicionData[] = [
    {
      year: "Diciembre 2023 ",
      exhibitions: [
        "«Monumento» Gran Museo del Mundo Maya, Mérida, México.",
        "William Gaber, Kuna Galería, San Miguel de Allende, México"
      ]
    },
    {
      year: " Septiembre 2023",
      exhibitions: [
        "«Monumento» Galería Alfredo Ginocchio, CDMX.",
      ]
    },
    {
        year: "Octubre 2022",
        exhibitions: [
          "«Lo que dejamos pasar» CC Olimpo, Mérida, México", 
        ]
    },
    {
        year: "Septiembre 2022",
        exhibitions: [
          " «Lo que dejamos pasar» Embajada de México en España, ICME",
        ]
    },
    {
        year: "Agosto 2021",
        exhibitions: [
          "¿Qué estará haciendo Houdini? ” Centro de Arte Casa de Indias, Cádiz, España",        
        ]
    },
    {
        year: "Septiembre 2019",
        exhibitions: [
          "“ Sacred Places ” Centro de Arte Casa de Indias, Cádiz, España",      
        ]
    },
    {
        year: "Enero 2019",
        exhibitions: [
          "“ En la mirada del observador ” Fundación Pons, Madrid, España",
                   
        ]
    },
    {
        year: "Septiembre 2016",
        exhibitions: [
          "“ La Maqueta Humana ” Galería Casa Gotxicoa, Monterrey México.",             
        ]
    },
    // Puedes añadir más años aquí
  ];
  const exposicionesColectivas: ExposicionData[] = [
    {
      year: "Febrero 2024 ",
      exhibitions: [
        "“ Reflejos Ocultos ” Maison Celeste. CDMX",
      ]
    },
    {
      year: " Junio 2023",
      exhibitions: [
        " The summer exhibition ” Galería Lux Perpetua. Mérida, Yucatán",
      ]
    },
    {
        year: "Febrero 2022",
        exhibitions: [
          "“ Carajillo ” Nave Oporto, Madrid, España",
        ]
    },
    {
        year: " Junio 2020",
        exhibitions: [
          " Corriente Alterna / Corriente Continua ” Galería Nueva, Madrid, España",
        ]
    },
    {
        year: "Diciembre 2019",
        exhibitions: [
            
            "PEN Projects, Miami, Florida",
            "Aqua Art Miami, Rubber Stamp Art Projects, Miami, Florida.",
            "Espacio Mannach, Ciudad de México."


        ]
    },
    {
        year: "Octubre 2018 ",
        exhibitions: [
            
            "Galería Pandea Cartesiano, Puebla, México.",
            "Museo Vostell MalparAda, MalparAda de Cáceres, España."
        ]
    },
    {
        year: "Agosto 2017",
        exhibitions: [
            
            "Royal College of Art, Londres, Inglaterra.",
            
        ]
    },
    
    // Puedes añadir más años aquí
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
      WILLIAM GABER
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "El trabajo de William Gaber explora diferentes medios como la pintura, el dibujo, y la escultura."     
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
        {/* Introducción del Artista */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/featured/artwork6.jpg" // Cambia esta ruta
                alt="Artista Ciria"
                fill
                className="object-cover"
                />
            </motion.div>
          </div>
          <div className="md:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl leading-relaxed text-gray-700">
              Gaber ha desarrollado su vocación de manera autodidacta, a la vez que ha estudiado bajo la tutela de diferentes maestros en México, así como en ayudantías en talleres de artistas reconocidos. Sus cursos más recientes incluyen los Talleres del Museo del Prado en Madrid y en el Royal College of Art de Londres.
              </p>
              <br />
              <p className="text-xl leading-relaxed text-gray-700">
              El trabajo de William Gaber explora diferentes medios como la pintura, el dibujo, y la escultura. La elección y diversidad de medios en su lenguaje es parte integral de su identidad como artista, no sigue al capricho o al azar, sino que lo ubica como un artista de su tiempo y un agudo e ingenioso observador de la realidad «
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setActiveTab('bio')}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            >
              Leer más sobre William Gaber
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </div>
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
        src="/images/obras/gaber/obra32.jpg"
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
          William Gaber
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 max-w-3xl"
        >
          México (1968) es un artista que divide su tiempo entre Ciudad de México, Yucatán y Madrid (España).
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
          Desde que en 1984 realizara su primera muestra individual en la galería parisina La Ferrière, Ciria ha trazado una amplia trayectoria jalonada por numerosas exposiciones y premios.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
        Gaber ha desarrollado su vocación de manera autodidacta, a la vez que ha estudiado bajo la tutela de diferentes maestros en México, así como en ayudantías en talleres de artistas reconocidos. Sus cursos más recientes incluyen los Talleres del Museo del Prado en Madrid y en el Royal College of Art de Londres. Su estudio en Madrid se encuentra dentro del colectivo de la Nave de Oporto.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
        El trabajo de William Gaber explora diferentes medios como la pintura, el dibujo, y la escultura. La elección y diversidad de medios en su lenguaje es parte integral de su identidad como artista, no sigue al capricho o al azar, sino que lo ubica como un artista de su tiempo y un agudo e ingenioso observador de la realidad
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/gaber/obra35.jpg"
          alt="Obra de Ciria"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
    
  </motion.div>
)}

          {activeTab === 'exposiciones' && (
            <motion.div
                key="exposiciones"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
            >
            {/* Exposiciones Individuales */}
                <div className="rounded-2xl bg-white shadow-lg p-8">
                <h3 className="text-3xl font-light text-gray-900 mb-8">Exposiciones Individuales</h3>
                <div className="space-y-8">
                    {exposicionesIndividuales.map((yearGroup) => (
                    <div key={yearGroup.year} className="border-b border-gray-100 pb-6 last:border-0">
                        <h4 className="text-2xl font-light text-gray-800 mb-4">{yearGroup.year}</h4>
                        <div className="space-y-2">
                        {yearGroup.exhibitions.map((exhibition, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                            {exhibition}
                            </p>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </motion.div>
            )}
           {activeTab === 'exposiciones 2' && (
            <motion.div
                key="exposiciones 2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
            >
            {/* Exposiciones Colectivas */}
                <div className="rounded-2xl bg-white shadow-lg p-8">
                <h3 className="text-3xl font-light text-gray-900 mb-8">Exposiciones Colectivas</h3>
                <div className="space-y-8">
                    {exposicionesColectivas.map((yearGroup) => (
                    <div key={yearGroup.year} className="border-b border-gray-100 pb-6 last:border-0">
                        <h4 className="text-2xl font-light text-gray-800 mb-4">{yearGroup.year}</h4>
                        <div className="space-y-2">
                        {yearGroup.exhibitions.map((exhibition, index) => (
                            <p key={index} className="text-gray-600 leading-relaxed">
                            {exhibition}
                            </p>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </motion.div>
            )} 
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CiriaPage;    