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
    { id: 'exposiciones', label: 'Exposiciones Individuales', icon: <ImageIcon size={10} /> },
    { id: 'exposiciones 2', label: 'Exposiciones Colectivas', icon: <ImageIcon size={10} /> },

  ];

  const obras = [
    { 
      id: 1, 
      imagen: "/images/obras/obra20.jpg",
      titulo: "The Romantic Warrior",
      dimensiones: "50 x 60 cm",
      tecnica: "Acrílico sobre lienzo",
    },
    { 
      id: 2, 
      imagen: "/images/obras/obra21.jpg",
      titulo: "Go Nagai’s Cutie Honey",
      dimensiones: "40 × 40 cm",
      tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 3, 
        imagen: "/images/obras/obra22.jpg",
        titulo: "Hounds Of Love",
        dimensiones: "50 x 40 cm",
        tecnica: "Pintura metálica y acrílico sobre lienzo",
    },
    { 
        id: 4, 
        imagen: "/images/obras/obra23.jpg",
        titulo: "Los Dioses Del Placer",
        dimensiones: "40 x 30 cm",
        tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 5, 
        imagen: "/images/obras/obra24.jpg",
        titulo: "La tercera noche",
        dimensiones: "50 x 40 cm",
        tecnica: "Pintura metálica y acrílico sobre lienzo",
    },
    { 
        id: 6, 
        imagen: "/images/obras/obra25.jpg",
            titulo: "Physical Avant-Garde",
            dimensiones: "40 x 30 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 7, 
        imagen: "/images/obras/obra26.jpg",
            titulo: "The Harvest",
            dimensiones: "50 x 40 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 8, 
        imagen: "/images/obras/obra27.jpg",
        titulo: "Tecnocisne",
        dimensiones: "50 x 40 cm",
        tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 9, 
        imagen: "/images/obras/obra28.jpg",
        titulo: "The Romantic Warrior",
        dimensiones: "50 x 40 cm",
        tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 10, 
        imagen: "/images/obras/obra29.jpg",
            titulo: "The Witch",
            dimensiones: "50 x 40 cm",
            tecnica: "Acrílico sobre lienzo",
            año: "2023"
    },
    
  ];
  const exposicionesIndividuales: ExposicionData[] = [
    {
      year: "2015",
      exhibitions: [
        "«Cotton in Furs» Palau Altea Centre D´Arts. Altea. Alicante.",
      ]
    },
    {
      year: " 2014",
      exhibitions: [
        "«El mar es más que el cielo» Parking Gallery. Alicante.",
      ]
    },
    {
        year: "2012",
        exhibitions: [
          "“El árbol en el agua” KUR Art Gallery. San Sebastían", 
        ]
    },
    {
        year: "2011",
        exhibitions: [
          "“CEMENTOFLOR” Parking Gallery. Alicante.",
        ]
    },
    {
        year: "2010",
        exhibitions: [
          "“1973” Belaza Gallery. Bilbao.",  
          "“CONQUEST” Magatzen Wall&Video.Valencia.",             
        ]
    },
    {
        year: "2009",
        exhibitions: [
          "”Santuario” con Aurelio Ayela. Galería Addaya, Alaró y Palma, Mallorca.",      
        ]
    },
    {
        year: "2008",
        exhibitions: [
          "“Amanecer Sanguina” Antigua casa Haiku. Barcelona.",
                   
        ]
    },
    {
        year: "2007",
        exhibitions: [
          "“Teaser” Archivo Municipal de Sarriá. Barcelona.",             
        ]
    },
    {
        year: "2006",
        exhibitions: [
          "“Tengo una vida/ MiniyoS.L.(segunda parte)”, con Pablo Bellot. Sala Club Diario Información. Alicante.",
          "“Belleza Extrema”, Hotel Prince Park, Benidorm. Alicante.",              
        ]
    },
    {
        year: "2005",
        exhibitions: [
          "Tengo una vida/ Miniyo S.L.”, con Pablo Bellot,. Sala Aifos. Universidad de Alicante.",             
        ]
    },
    {
        year: "2004 ",
        exhibitions: [
          "“Barsoom” Galería ADN. Barcelona.", 
          "“Japanium”, Centro 14, Alicante."            
        ]
    },
    {
        year: "2003",
        exhibitions: [
          "“El templo de Afrodita”. Galería Aural, Alicante..",             
        ]
    },
    {
        year: "1999",
        exhibitions: [
          "“Dibujo Libre” Noténom. Barcelona.",             
        ]
    },
    {
        year: "1997-98",
        exhibitions: [
          "¿Por qué lo llaman Arte cuando quieren decir Walter?” Macro-instalación. C 14, Alicante. CAL ART, Los Angeles, USA.(Equipo Gloria).",             
        ]
    },
    // Puedes añadir más años aquí
  ];
  const exposicionesColectivas: ExposicionData[] = [
    {
      year: "2022 ",
      exhibitions: [
        "‘Art Contemporani de la Generalitat Valenciana V’.CCCC. Centre Del Carme. Valencia.",
        "“Volcados con la palma” Lonja del Pescado. Alicante",
      ]
    },
    {
      year: " 2021",
      exhibitions: [
        " Ficciones Compartidas” Proyecto de Rubén Gomez Radioboy. Secadero- CC.CIGARRERAS. Alicante.",
      ]
    },
    {
        year: "2020 ",
        exhibitions: [
          "El ensayo antes de la actuación” Proyecto de Diana Guijarro. CC.CIGARRERAS. Alicante.",
        ]
    },
    {
        year: " 2016 ",
        exhibitions: [
          "The Ultimate First Experience” HS LAB. Hiroshima.",
          "La où le ciel et la terre se touchent, le paysage” Espace St Remí. Bourdeaux.",
          "“Arte Cisoria”, Centro Cultural Clavijero, Michoacán, Mexico, y Simposio Internacional de Arte Contemporáneo de Guarda, Portugal."
        ]
    },
    {
        year: "2015",
        exhibitions: [
            
            "“Vidas cruzadas” Festival de Vidocreación, Galería Paula Alonso, Madrid.",
            "Arte Cisoria”, Galleria d’Arte Contemporanea del Liceo Artistico F. Figari, Sassari, Cerdeña, Italia.",
            "IAC Juan Gil-Albert, Alicante;",
            "Palazzo Regio de Cagliari, Cerdeña, Italia. ",
            "“Paisajes protegidos, de Folquer a São Paulo” MARTE. Castellón. ",


        ]
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
        ]
    },
    {
        year: "2013",
        exhibitions: [
            
            "“AFFORDABLE ART FAIR ‘13”, Art Angler Gallery, New York City.",
            "“SUMMA 2013” con Parking Gallery. Madrid.",
            "“The Parking Collection 2013”, Parking Gallery, Alicante.",
            " “Arthamptons 2013” Con la Galería Art Angler. Nueva York.",
            " Drawing Now París” Con la Galería Pascal Polar. París.",
        ]
    },
    {
        year: "2012",
        exhibitions: [
            
            "“La vie en rose” Galerie Pascal Polar. Bruselas.",
            "Col·lecció Addaya” Centre d´Art Sa Quartera, Inca.",
        ]
    },
    {
        year: "2011",
        exhibitions: [
            
            "ContenporaryNew figuration ” Galerie Pascal Polar. Bruselas.",
            "“Gabinet de papers” Centro Municipal de Exposiciones, Elche.",
            "“Gràfic” Artistas de la Colección DKV, Mustang Art Gallery, Elche.",
        ]
    },
    {
        year: "2010 ",
        exhibitions: [
            
            "“Imatges Raonades II” Galería Addaya, Alaró, Mallorca.",
        ]
    },
    {
        year: "2009",
        exhibitions: [
            
            "“Transpop” Estudio Interproyectos, Altea. “Nit de l’Art ‘09” Galería Addaya, Palma.",
        ]
    },
    {
        year: "2008",
        exhibitions: [
            
            "No somos esto ni lo otro”  Galería Distrito Quinto, Barcelona.",
            "“Imatges raonades” Addaya Centre D’Art Contemporani. Alaró. Mallorca.",
        ]
    },
    {
        year: "2007",
        exhibitions: [
            
            "“Collaboration Unity” Espai Ubu. Barcelona.",
            "“Soles Negros” La escocesa. Barcelona.",
            "“Video Crashcats” con Xavier Gavín para el concierto de inauguración «imágenes del fin del mundo» MUSAC. León.",
        ]
    },
    {
        year: "2006",
        exhibitions: [
            
            "“Obert en Canal” Muestra de arte contemporáneo de Esparraguera. Barcelona.",
        ]
    },
    {
        year: "2005",
        exhibitions: [
            
            "”Valencia.art” Feria de Arte. Hotel Puerta Valencia, Valencia.",
        ]
    },
    {
        year: "2004",
        exhibitions: [
            
            "“Letras para las niñas”  Club Diario Información, Alicante",
        ]
    },
    {
        year: "2003",
        exhibitions: [
            
            "“Perdidos en el espacio” Muestra Nacional de Arte Contemporáneo Ciudad de Yecla, Murcia.",
        ]
    },
    {
        year: "2002",
        exhibitions: [
            
            "“Pintura contemporánea” Galeria Aural. Alicante",
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
      EDUARDO INFANTE
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "Al final, la letra y la música son cosas distintas que si confluyen de manera feliz pueden dar lugar a una nueva, simple y gloriosa canción."   
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
                src="/images/featured/artwork5.jpg" // Cambia esta ruta
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
              «Se podría decir que la canción es mi unidad de medida pictórica. Para mí, una pintura se compone de información plástica descomprimida, por lo tanto, hablar de ella obligaría por fuerza a volver a comprimir esa información, lo que nos devolvería a la casilla de salida. Podría entonces escribir un poema, por ser un medio análogo, pero ningún verdadero poema se rebajaría jamás a ser un subordinado explicativo.
              </p>
              <br />
              <p className="text-xl leading-relaxed text-gray-700">
              Al final, la letra y la música son cosas distintas que si confluyen de manera feliz pueden dar lugar a una nueva, simple y gloriosa canción.»
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setActiveTab('bio')}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            >
              Leer más sobre Eduardo Infante
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
                            EDUARDO INFANTE 
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
        src="/images/obras/obra22.jpg"
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
          Eduardo Infante
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 max-w-3xl"
        >
          Un objeto de atención digno de aprecio. El espíritu que anima este trabajo es la reflexión sobre uno de los momentos más inquietantes de la historia de la pintura y aunque he leído algunos ensayos y teorías que parecen apuntar en esa dirección, no es desde luego la visión más ortodoxa sobre la historia del arte reciente. La premisa simplificada, es algo fácil de comprobar objetivamente: La pintura del XVIII y principios del XIX, es decir la contemporánea al periodo que hemos dado en llamar Romanticismo, no estuvo, no supo estar a la altura de la gran música y la mejor poesía de su época.
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
        Los simbolistas ya en el tramo final del romanticismo fueron conscientes de que necesitaban un nuevo lenguaje plástico si querían estar a la altura de las obras de Wagner y Strauss, no es casualidad que fuera en las filas del simbolismo donde nacieran las primeras vanguardias, el caso es que casi otro siglo después, terminada la fase de deconstrucción de la imagen y teniendo ya la pintura los elementos plásticos necesarios liberados, por así decirlo, de la servidumbre literaria, salvo las incursiones solitarias de los jóvenes salvajes en los ochenta, todos los acercamientos al espíritu romántico han sido en clave irónica, es decir “ Por fin tenemos los medios, pero lo que no tenemos es nada ni remotamente parecido a un espíritu romántico”
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
        Las artes populares y los media no parecen tener ese problema ya que los cómics, las series, los videojuegos y la canción popular se alimentan principalmente de espíritu romántico. Creo que la clave es el concepto de Ficción. La ficción no es un mero simulacro, es un lenguaje, que como decía Wilde nos permite contar mentiras que son verdad.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
        La ficción, con sus propias reglas, permite puentear la ironía y el resabio y en pleno siglo XXI, tratar de crear imágenes pictóricas plenamente románticas. En estas obras que presento, la ficción es generalmente plástica o concreta como en la música, me vale el concepto de Bachelard de “imaginación material” ya que el gran protagonista, el héroe de este relato es la propia materia sujeta a transformación con la participación estelar de algunos atisbos figurativos en clave simbólica. MI intención, aunque parezca muy ambiciosa, en el fondo solo pretende crear para la atención un objeto digno de aprecio.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/obra20.jpg"
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