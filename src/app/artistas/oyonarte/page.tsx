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
    { id: 'colecciones', label: 'Colecciones y Museos', icon: <Award size={10} /> }
  ];

  const obras = [
    { 
      id: 1, 
      imagen:"/images/obras/oyonarte/obra1.jpg",
            titulo: "Realidades sin Nombre.Z1",
            dimensiones: "200 x 200 cm",
            tecnica: "Técnica mixta",
    },
    { 
      id: 2, 
      imagen: "/images/obras/oyonarte/obra2.jpg",
              titulo: "Realidades sin Nombre.Z3",
              dimensiones: "200 x 200 cm",
              tecnica: "Técnica mixta sobre lienzo",
    },
    { 
        id: 3, 
        imagen: "/images/obras/oyonarte/obra3.jpg",
              titulo: "Realidades sin Nombre.Z4",
              dimensiones: "200 x 200 cm",
              tecnica: "Técnica mixta", 
    },
    { 
        id: 4, 
        imagen: "/images/obras/oyonarte/obra4.jpg",
              titulo: "Realidades sin Nombre.Z6",
              dimensiones: "200 x 200 cm",
              tecnica: "Técnica mixta", 
    },
    { 
        id: 5, 
        imagen: "/images/obras/oyonarte/obra5.jpg",
            titulo: "Realidades sin Nombre.Z5",
            dimensiones: "200 x 200 cm",
            tecnica: "Técnica mixta", 
    },
    { 
        id: 6, 
        imagen: "/images/obras/oyonarte/obra6.jpg",
            titulo: "Realidades sin Nombre.Z7",
            dimensiones: "200 x 200 cm",
            tecnica: "Técnica mixta", 
    },
    { 
        id: 7, 
        imagen: "/images/obras/oyonarte/obra7.jpg",
            titulo: "Realidades sin Nombre.Z11",
            dimensiones: "200 x 200 cm",
            tecnica: "Técnica mixta",
    },
    { 
        id: 8, 
        imagen: "/images/obras/oyonarte/obra8.jpg",
            titulo: "Realidades sin Nombre.Z10",
            dimensiones: "200 x 200 cm",
            tecnica: "Técnica mixta", 
    },
    { 
        id: 9, 
        imagen: "/images/obras/oyonarte/obra9.jpg",
            titulo: "Realidades sin Nombre.Z13",
            dimensiones: "200 x 200 cm",
            tecnica: "Técnica mixta",
            año: "2021" 
    },
    // ... más obras
  ];
  const exposicionesIndividuales: ExposicionData[] = [
    {
      year: "2019",
      exhibitions: [
        "Espacio de Producción y Difusión de Arte Contemporáneo (ECPDAC), Ciudad de México",
        "Galería Christopher Cutts, Toronto",
        "Galería Baert, Los Ángeles"
      ]
    },
    {
      year: "2018",
      exhibitions: [
        "Museo C.A.V. La Neomudéjar, Madrid",
        "Ateneo Español de México A.C., Ciudad de México",
        "Museo Vostell-Malpartida de Cáceres",
        "Galería Blanca Soto, Madrid"
      ]
    },
    {
        year: "2017",
        exhibitions: [
          "Galería Baert, Los Ángeles (Estados Unidos).",
          
        ]
    },
    {
        year: "2015",
        exhibitions: [
          "Centro de Arte Mark Rothko, Daugavpils (Letonia).",
          "TEA Tenerife Espacio de las Artes, Tenerife.",
          "Galería Alicia Winters, Arnhem (Holanda).",
          
        ]
    },
    {
        year: "2014",
        exhibitions: [
          "Tabacalera – Centro Promoción del Arte, Ministerio de Cultura, Madrid.",
          "Museo Fundación Memorial de América Latina, Sâo Paulo (Brasil).",
                   
        ]
    },
    {
        year: "2013",
        exhibitions: [
          "Museo de Arte Moderno (MAMBA), Buenos Aires (Argentina).",
          "Galería Kornfeld, Berlin (Alemania).",
          "St. James Cavalier Center for Creativity, Valleta (Malta).",
          "Sala de Exposiciones del Gobierno de Andorra, Andorra la Vella.",
                   
        ]
    },
    {
        year: "2012",
        exhibitions: [
          "Museo Nacional de Arte Contemporáneo (MNAC), Bucarest (Rumanía).",
          "Museo Raúl Anguiano (MURA), Guadalajara (Mexico).",
          "Museo del Patrimonio (MUPAM), Málaga.",
          "Galería Gema Llamazares, Gijón.",
          "Galería Christopher Cutts, Toronto (Canadá).",
                   
        ]
    },
    {
        year: "2011",
        exhibitions: [
          "Instituto Valenciano de Arte Moderno (IVAM), Valencia.",
          "Museo de Arte de Amarillo (AMoA), Amarillo (Texas).",
          "Galería Cordeiros, Oporto (Portugal).",
          "Galería Gema Llamazares, Gijón.",
          "Galería Stefan Stux, Nueva York (Estados Unidos).",
                   
        ]
    },
    {
        year: "2010",
        exhibitions: [
          "Museo de Arte Moderno (MAMM), Medellín (Colombia).",
          "Monasterio de Prado, Consejería de Cultura, Junta de Castilla y León, Valladolid.",
          "Círculo de Bellas Artes, Madrid.",
          "Palacio Simeón, Diputación de Orense, Orense.",
          "Espacio ArteInversión, Madrid.",
          "Edificio Miramar, Sitges.",
                   
        ]
    },
    {
        year: "2009",
        exhibitions: [
          "Zoellner Arts Center, LUAG Lehigh University, Bethelhem (Estados Unidos).",
          "Museo de Arte de El Salvador (MARTE), San Salvador (El Salvador).",
          "Museo Antropológico y de Arte Contemporáneo (MAAC), Guayaquil (Ecuador).",
          "Museo de Arte Contemporáneo (MAC), Santiago de Chile (Chile).",
          "Instituto Cervantes, Chicago (Estados Unidos).",
          "Kursaal. Sala Kubo – Kutxa Espacio, (junto a José Zugasti), San Sebastián.",
          "Galería Christopher Cutts, Toronto (Canadá).",
          "Annta Gallery, Madrid.",
          "BEYOND THE BORDER”. Galería Christopher Cutts, San Diego (Estados Unidos).",
          "Galería Couteron, París (Francia).",
                   
        ]
    },
    {
        year: "2008",
        exhibitions: [
          "Museo da Alfândega, Oporto (Portugal).",
          "Galería Cordeiros, Oporto (Portugal).",
          "Ayuntamiento de París, Salle des Fétes, París (Francia).",
          "Fundación Carlos de Amberes, Madrid.",
          "Museo de Arte Moderno (MAM), Santo Domingo (República Dominicana).",
          "National Gallery, Kingston (Jamaica).",
          "Galería Gema Llamazares, Gijón.",
          "Galería Art Rouge, Miami (Estados Unidos).",
        ]
    },
    {
        year: "2007",
        exhibitions: [
          "Museo Nacional de Bellas Artes (MNBA), Buenos Aires (Argentina).",
          "Museo Nacional de Bellas Artes (MNBA), Neuquén (Argentina).",
          "Iglesia de San Esteban, Murcia.",
          "Galería Christopher Cutts, Toronto (Canadá).",
          "C. C. Caixanova, Pontevedra.",
          "C. C. Caixanova, Vigo.",
          "Galería Gema Llamazares, Gijón.",
        ]
    },
    {
        year: "2006",
        exhibitions: [
          "Museo de Arte Contemporáneo Ateneo de Yucatán (MACAY), Mérida (México).",
          "Galería Fernando Silió, Santander.",
          "Galería Pedro Peña, Marbella.",
        ]
    },
    {
        year: "2005",
        exhibitions: [
          "Kunsthalle Museo Centro de Arte PasquArt, Berna (Suiza).",
          "Museo del Grabado Español Contemporáneo (MGEC), Marbella.",
          "Galería Pedro Peña, Marbella.",
        ]
    },
    {
        year: "2004",
        exhibitions: [
          "Museo Estatal Galería Tretyakov, Moscú (Rusia).",
          "Museo Nacional de Polonia, Palacio Królikarnia, Varsovia (Polonia).",
          "Galería Estiarte, Madrid.",
          "Museo de la Ciudad, Valencia.",
          "Galería Antonio Prates, Lisboa (Portugal).",
        ]
    },
    {
        year: "2003",
        exhibitions: [
          "Museo de Bellas Artes de Asturias, Oviedo.",
          "Galería MPA, Pamplona.",
          "Sala de Exposiciones La Lonja, Alicante.",
          "Casal Solleric, Palma de Mallorca.",
          "Museo de Arte Contemporáneo, Ibiza.",
          "Galería Pedro Peña, Marbella.",
          "Galería Fernando Silió, Santander.",
          "Galería Manuel Ojeda, Las Palmas de Gran Canaria.",
        ]
    },
    {
        year: "2002",
        exhibitions: [
          "Museo de Arte Contemporáneo de Herzliya, Tel Aviv (Israel).",
          "Bach Quatre Arte Contemporáneo, Barcelona.",
          "Galería Italia, Alicante.",
          
        ]
    },
    {
        year: "2001",
        exhibitions: [
          "Sala Rekalde, Bilbao.",
          "Galería Estiarte, Madrid.",
          "Dasto Centro de Arte, Oviedo.",
          "Museo Pablo Serrano, Zaragoza.",
          "Galería Zaragoza Gráfica, Zaragoza.",
          "C.C. Recoleta, Buenos Aires (Argentina).",
          "Museo-Teatro Givatayim, Tel Aviv (Israel).",
          
        ]
    },
    {
        year: "2000",
        exhibitions: [
          "Museo Extremeño e Iberoamericano de Arte Contemporáneo (MEIAC), Badajoz.",
          "Colegio de Arquitectos, Málaga.",
          "Bach Quatre Arte Contemporáneo, Barcelona.",
          "Galería Artim, Estrasburgo (Francia).",
          "Galería Antonio Prates, Lisboa (Portugal).",
          "Galería Athena Art, Kortrijk (Bélgica).",
          "Galería Salvador Díaz, Madrid.",
          "Galería Bores & Mallo, Cáceres.",
          
        ]
    }
    // Puedes añadir más años aquí
  ];
  const exposicionesColectivas: ExposicionData[] = [
    {
      year: "2022",
      exhibitions: [
        "Colección Arte Abstracto del Centro de Arte Mark Rothko, Daugavpils",
        "Resistencias ante la estupidez humana. Museo La Neomudéjar, Madrid",
        "Luis Cernuda (La realidad y el deseo). Sala de Exposiciones del Castell de Cornellá",
        "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”.Sala Ágora, Ayuntamiento de Cambrils, Cambrils."
      ]
    },
    {
      year: "2021",
      exhibitions: [
        "Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán. Palacio de Condestable, Pamplona",
        "Casa de Cultura-Palau dels Barons de Santa Bárbara, Ontinyent"
      ]
    },
    {
        year: "2020",
        exhibitions: [
          "“El fin de la Modernidad”. Centro de Arte Contemporáneo Rafael Botí, Córdoba.",
          "“Exposición Internacional de Artes Plásticas de Valdepeñas (Medalla de Oro al Mérito en las Bellas Artes)”. Centro Cultural “La Confianza”, Valdepeñas."
        ]
    },
    {
        year: "2019",
        exhibitions: [
          "BIENAL LA HABANA’13. “Detrás del Muro”. La Habana (Cuba).",
          "PHOTOESPAÑA’19. “Social Subjetiva”. Ateneo de Madrid, Madrid.",
          "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Sala de Exposiciones Temporales del MACE, Elche. Biblioteca",
          "Central, Gandía. Claustros de Santo Domingo, Jerez de la Frontera. Festival du Polar, Villeneuve Lez Avignon (Francia).",
          "“Luis Cernuda (La realidad y el deseo)”. Centro Cultural Generación del 27, Málaga.",
          "“Territorio común. Nuevas incorporaciones a la Colección MAMM”. Museo de Arte Moderno de Medellín (Colombia).",
        ]
    },
    {
        year: "2018",
        exhibitions: [
            
            "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Sala de Exposiciones de la Universidad de Oviedo, Oviedo.",

            "Sala de Ca l’Anitas de Roses (Gerona). Museo de Bellas Artes, Castellón. Auditorio Municipal, Vinaros. Sala de exposiciones temporales de Can Rocamora, Sitges. Sala de exposiciones del Museo Soler Blasco, Jávea.",
            
            "Galería Cordeiros, Oporto (Portugal)."
        ]
    },
    {
        year: "2017",
        exhibitions: [
            
            "“La colección: una visión contemporánea”. Colección de Arte de Alcoy. La Capilla del Antiguo Asilo, Alcoy.",

            "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Biblioteca Jaume Fuster, Barcelona. Castell Palau de la Bisbal",
            
            "d’Empordà, Gerona. Castell de Cornellá, Cornellá de Llobregat. Biblioteca Carles Rahola, Girona. Casa de la Cultura,",
            "LLoret de Mar. Edificio Badajoz Siglo XXI, Badajoz. Biblioteca Municipal Mestre Martí Tauler, Rubí.",
            "Colección Ars Fundum. Bodegas Portia, Gumiel de Izán."
        ]
    },
    {
        year: "2016",
        exhibitions: [
            
            "ART MIAMI’16. Galería Cordeiros, Galería Christopher Cutts, Miami (Estados Unidos).",

            "“Pluralia Tantum”. Galería Cordeiros, Oporto (Portugal).",
            
            "“Made in Spain”. Museo de Arte de la Diputación (MAD), Antequera.",
            "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Palau Falguera, Sant Feliu de Llobregat. Centro Municipal Integrado, Gijón",
            
        ]
    },
    {
        year: "2015",
        exhibitions: [
            
            "“Arte Contemporáneo en Palacio. Pintura y Escultura en las Colecciones Reales”. Palacio Real, Madrid.",

            "KUNSTRAI’15 ART FAIR. Galeria Alicia Winters, Amsterdam (Holanda).",
            
            "“La revelación de la pintura”. Colección de Arte Contemporáneo de la Fundación CAM. Museo de Arte Contemporáneo de Alicante (MACA).",
            "”Made in Spain”. Centro de Arte Contemporáneo (CAC), Málaga.",
            "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Instituto Cervantes, Hamburgo (Alemania). Instituto Cervantes, Múnich (Alemania).",
            "“Los valores de Suárez”. Museo Adolfo Suárez (MAST), Ávila.",
            "ART MARBELLA’15. Galeria Gema Llamazares, Marbella.",
            
        ]
    },
    {
        year: "2015 - 1984 ",
        exhibitions: [
            "SAGA´93. Galería Adriana Schmidt, París (Francia).",
            "ART MIAMI´94. Galería Heller, Miami (Estados Unidos).",
            "ARCO´92. Galería Marie Louise Wirth, Zurich.",
            "ARCO´93. Galería Ad Hoc, Madrid.",
            "ARCO´96. Fundación AENA y Galería May Moré, Madrid.",
            "ARCO´97. Galería Estiarte y Galería May Moré. Madrid.",
            "ARCO´98. Galería Salvador Díaz y Galería Antonio Prates, Madrid..",
            "ARCO´99. Galería Salvador Díaz, Madrid.",
            "ARCO´00. Galería Salvador Díaz y Galería Bores & Mallo, Madrid.",
            "ARCO´01. Galería Estiarte y Galería Bores & Mallo, Madrid.",
            "ARCO´02. Galería Estiarte, Galería Bores & Mallo y Galería Salvador Díaz, Madrid.",
            "ARCO´03. Museo de Arte Contemporáneo Unión Fenosa, Galería Metta, Galería Estiarte, Galería Bores & Mallo y Galería Italia, Madrid.",
            "ARCO´04. Galería Moisés Pérez de Albeniz (MPA), Galería Estiarte, Galería Bores & Mallo, Galería Italia y Galería Fernando Silió, Madrid.",
            "ARCO´05. Galería Moisés Pérez de Albeniz (MPA), Galería Estiarte y Galería Bores & Mallo, Madrid.",
            "ARCO´06. Galería Moisés Pérez de Albeniz (MPA) y Galería Estiarte, Madrid.",
            "ENTRE OTRAS MUCHAS...",


        ]
    }
    // Puedes añadir más años aquí
  ];

  return (
    <div className="min-h-screen bg-white">
       <section className="relative h-[60vh] bg-black overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
  <div className="relative h-full flex flex-col items-center justify-center text-center z-10 px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-7xl md:text-8xl font-light tracking-wider text-white mb-6"
    >
      MANOLO OYONARTE
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "Solo cuando no sé qué ha sucedido en el proceso artístico, sé que la obra es profunda…"
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
                src="/images/featured/artwork2.jpg" // Cambia esta ruta
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
              Mis obras se conciben como una estructura espacial abstracta donde conviven formas, colores, líneas, letras números., figuras geométricas y elemento figurativos. Todos ellos tratados en el mismo plano de importancia. No hay un tema definido, ni pretendo comunicar nada, aunque, no sé por qué, el ser humano ha estado siempre presente en mis composiciones.
              </p>
              <br />
              <p className="text-xl leading-relaxed text-gray-700">
              Al principio arrojo formas y colores de manera automática al soporte, después contemplo el resultado e intento adivinar qué es lo que está apareciendo. Si experimento un pequeño sobrecogimiento en lo que percibo, sigo por ese camino, si no arrojo más materiales…
              </p>
              <br />
              <p className="text-xl leading-relaxed text-gray-700">
              Sólo cuando no he sido consciente de lo que ha sucedido en el proceso sé que la obra es profunda. Lo más importante es conseguir desconcentrarme para que mi parte racional no se apodere del proceso. Como decía Ghandi: when the ego dies the soul awakens, no es sencillo mantener mi ego (razón más sentimientos) fuera de la experiencia estética, pero es la única manera… Intento pintar desde las tripas.
              </p>
              
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setActiveTab('bio')}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            >
              Leer más sobre Ciria
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
                            MANOLO OYONARTE 
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
        src="/images/obras/oyonarte/obra4.jpg"
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
          Manolo Oyonarte
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 max-w-3xl"
        >
         Madrid (España), 28 de abril de 1957. Arquitecto destacado de su promoción y Master por E.T.S. de Arquitectura de Madrid.
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
        Oyonarte experimentó y colaboró en el ámbito de la Nueva Figuración española, siendo uno de los fundadores del grupo artístico “Tres-en-realidad” alineado con el Arte pop europeo. La obra de Oyonarte tiene una estructura abstracta que define la espacialidad mediante colores, formas, letras, números, figuras geométricas y otros elementos, definidos con un nivel similar de importancia. 
        <br /><br />
        En sus obras la fragmentación presenta dos escalas, los personajes principales están dibujados a tamaño mayor que lo secundario, los trozos de paisajes, cielos o escenas accidentales que aparecen, formando una obra que aspira a llegar a nuestro inconsciente de forma subliminal. La densidad, se expresa con cambios de color y cambios de textura, dotando al cuadro de una comunicación diversa hacia lo esencial.
        </p>
        <br />
        
        <p className="text-lg leading-relaxed text-gray-700">
        Es miembro del grupo visual de la Asociación de Artistas Plásticos de Madrid. Desde 2003 es Académico por la Academia italiana Internazionale Gentilicia “Il Marzocco” de Florencia, desde 2005 por la Academia Internazionale “Greci-Marino” de Vercelli. Ha recibido varios premios de pintura, sobre todo en España e Italia.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/oyonarte/obra1.jpg"
          alt="Obra de Ciria"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>

    {/* Sección de Evolución Artística */}
    <div className="bg-gray-50 rounded-3xl p-12 space-y-12">
      <h3 className="text-3xl font-light text-center">Evolución Artística</h3>
      <p className="text-gray-600">
     
          </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
          
        >
          <div className="aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/obras/oyonarte/obra3.jpg"
              alt="Primera etapa"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">1998-2010</h4>
          <p className="text-gray-600">
          En el año 1998 funda el grupo artístico “Tres en realidad”, en 2009 el espacio de arte Ra del Rey. nueva etapa en Madrid.
          <br />
          <br />
          En 2010 el grupo de arte “El Emperador Desnudo” que gestiona Al Marge Espai d’art en Javea. Miembro de la Asociación de Artistas Plásticos de Madrid (AVAM), de la asociación VEGAP y de Artistas sin Fronteras de Madrid.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/obras/oyonarte/obra5.jpg"
              alt="Segunda etapa"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">2011-2017</h4>
          <p className="text-gray-600">
          De 2011 a 2017 realiza una investigación sobre la objetividad de la obra de arte, que concluye con un nuevo modelo de experiencia estética creativa basado en el de los pensadores vitalistas y existencialistas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/obras/oyonarte/obra3.jpg"
              alt="Etapa actual"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">2021-Actualidad</h4>
          <p className="text-gray-600">
          En el año 2021 se estrena el documental sobre su obra y pensamiento estético “caminando en lo innombrable” dirigido por Llimy Llamas.
          </p>
        </motion.div>
      </div>
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

{activeTab === 'colecciones' && (
  <motion.div
    key="colecciones"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-8"
  >
    <div className="rounded-2xl bg-gray-50 p-8">
      <h3 className="text-3xl font-light mb-8 text-gray-900">Colecciones y Museos</h3>
      
      {/* Grid de categorías */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Museos Nacionales */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Museos Nacionales</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Museo Nacional Centro de Arte Reina Sofía (MNCARS), Madrid</li>
            <li className="text-gray-600">Instituto Valenciano de Arte Moderno (IVAM), Valencia</li>
            <li className="text-gray-600">Museo Extremeño e Iberoamericano del Arte Contemporáneo (MEIAC), Badajoz</li>
            <li className="text-gray-600">Museo Municipal de Arte Contemporáneo, Madrid</li>
            <li className="text-gray-600">Museo de Bellas Artes de Asturias, Oviedo</li>
            <li className="text-gray-600">Museo de Arte Contemporáneo Unión Fenosa, La Coruña</li>
          </ul>
        </div>

        {/* Museos Internacionales */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Museos Internacionales</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Museo Estatal Galería Tretyakov, Moscú (Rusia)</li>
            <li className="text-gray-600">Albertina Museum, Viena (Austria)</li>
            <li className="text-gray-600">Museo-Teatro Givatayim, Tel Aviv (Israel)</li>
            <li className="text-gray-600">Museo de Arte de Amarillo (AMoA), Texas (Estados Unidos)</li>
            <li className="text-gray-600">Museo de Arte Moderno (MAMM), Medellín (Colombia)</li>
            <li className="text-gray-600">National Gallery, Kinsgton (Jamaica)</li>
          </ul>
        </div>

        {/* Instituciones y Patrimonio */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Instituciones y Patrimonio</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Patrimonio Nacional. Palacio Real, Madrid</li>
            <li className="text-gray-600">Calcografía Nacional, Madrid</li>
            <li className="text-gray-600">Chase Manhattan Bank, Nueva York (Estados Unidos)</li>
            <li className="text-gray-600">Ministerio de Asuntos Exteriores, Madrid</li>
            <li className="text-gray-600">Academia Española, Roma (Italia)</li>
          </ul>
        </div>

        {/* Colecciones */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Colecciones Destacadas</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Colección Municipal de Arte Contemporáneo, Madrid</li>
            <li className="text-gray-600">Colección ADT, Madrid</li>
            <li className="text-gray-600">Colección AENA, Alicante</li>
            <li className="text-gray-600">Colección Arte y Patrimonio, Madrid</li>
            <li className="text-gray-600">Colección Banco Portugués de Negocios (BPN), Oporto (Portugal)</li>
            <li className="text-gray-600">Colección Caja Madrid, Madrid</li>
          </ul>
        </div>
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