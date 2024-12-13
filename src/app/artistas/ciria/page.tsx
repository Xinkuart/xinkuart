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
    { id: 'colecciones', label: 'Colecciones y Museos', icon: <Award size={10} /> }
  ];

  const obras = [
    { 
      id: 1, 
      titulo: 'Antes', 
      imagen: '/images/obras/ciria/ciria1.jpg', // Cambia esta ruta
      año: '2022', 
      tecnica: 'Técnica Mixta, óleo y grafito sobre lienzo', 
      dimensiones: '250 x 250 cm' 
    },
    { 
      id: 2, 
      titulo: 'Apuntado en algún cuaderno', 
      imagen: '/images/obras/ciria/ciria2.jpg', // Cambia esta ruta
      año: '2023', 
      tecnica: 'Técnica mixta, óleo y grafito sobre lienzo', 
      dimensiones: '250 x 250 cm' 
    },
    { 
        id: 3, 
        titulo: 'Teatral ante la línea (No recuerdo) ', 
        imagen: '/images/obras/ciria/ciria3.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Técnica mixta, óleo y grafito sobre lienzo', 
        dimensiones: '250 x 250 cm' 
    },
    { 
        id: 4, 
        titulo: 'Máquina de coser', 
        imagen: '/images/obras/ciria/ciria4.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Técnica mixta y óleo sobre lienzo', 
        dimensiones: '250 x 250 cm' 
    },
    { 
        id: 5, 
        titulo: 'Musa y Venus (Rebelión)', 
        imagen: '/images/obras/ciria/ciria5.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Técnica mixta, óleo y grafito sobre lienzo', 
        dimensiones: '250 x 250 cm' 
    },
    { 
        id: 6, 
        titulo: 'Habitación llena de batallas navales', 
        imagen: '/images/obras/ciria/ciria6.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Óleo sobre liezo con impresión digital', 
        dimensiones: '175 x 175 cm' 
    },
    { 
        id: 7, 
        titulo: 'Cortado sobre la página de un cómic', 
        imagen: '/images/obras/ciria/ciria7.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Técnica mixta, óleo y grafito sobre lienzo', 
        dimensiones: '250 x 250 cm' 
    },
    { 
        id: 8, 
        titulo: 'El Deseo Eterno', 
        imagen: '/images/obras/ciria/ciria8.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Técnica mixta y óleo sobre lienzo', 
        dimensiones: '250 x 250 cm' 
    },
    { 
        id: 9, 
        titulo: 'Habitación cerrada de Lovecraft y Auster', 
        imagen: '/images/obras/ciria/ciria9.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Técnica mixta, óleo y grafito sobre lienzo', 
        dimensiones: '250 x 250 cm' 
    },
    { 
        id: 10, 
        titulo: 'Inmensas discrepancias', 
        imagen: '/images/obras/ciria/ciria10.jpg', // Cambia esta ruta
        año: '2022', 
        tecnica: 'Técnica mixta y óleo sobre lienzo', 
        dimensiones: '250 x 250 cm' 
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
      CIRIA
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "El anhelo de atrapar ese lugar y no otro. Hacer pinturas, que antes de otra cosa, me produzcan “dolor” de estomago."   
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
                src="/images/featured/artwork1.jpg" // Cambia esta ruta
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
                En ocasiones, quizá las mejores cuando enfrentamos la obra de un artista se produce una profunda sensación de extrañeza, de desubicación, de desplazamiento o disloque, que puede estar sustentada en lo que ya conocemos, en lo que es común, en algo asimilado y que no resulta sorprendente, pero que sin saber explicar su porqué es capaz de atenazarnos y pegársenos profundamente a las tripas.
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
                José Manuel Ciria nace en Manchester el 3 de Febrero de 1960, de padres españoles (Santiago y Gloria), permanece en Inglaterra hasta la edad de los ocho años; momento en que sus padres deciden regresar a Madrid.
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
        src="/images/obras/ciria/ciria4.jpg"
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
          José Manuel Ciria
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 max-w-3xl"
        >
          Es uno de los artistas más destacados de su generación y una figura central en el heterogéneo panorama de la pintura española de las tres últimas décadas.
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
          En los últimos años, su figura ha adquirido una amplia proyección internacional a través de sus muestras individuales en prestigiosos museos alrededor del mundo.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/ciria/momento1.jpg"
          alt="Obra de Ciria"
          fill
          className="object-cover"
        />
      </motion.div>
    </div>

    {/* Sección de Evolución Artística */}
    <div className="bg-gray-50 rounded-3xl p-12 space-y-12">
      <h3 className="text-3xl font-light text-center">Evolución Artística</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="aspect-square rounded-xl overflow-hidden">
            <Image
              src="/images/obras/ciria/ciria10.jpg"
              alt="Primera etapa"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">Inicios Figurativos</h4>
          <p className="text-gray-600">
            Primera etapa ligada a una figuración de carácter expresionista
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
              src="/images/obras/ciria/momento2.jpg"
              alt="Segunda etapa"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">Años 90</h4>
          <p className="text-gray-600">
            Diálogo entre el fluir azaroso de la mancha y el rigor de la geometría
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
              src="/images/obras/ciria/ciria7.jpg"
              alt="Etapa actual"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">Nueva York</h4>
          <p className="text-gray-600">
            Enfriamiento pictórico y recuperación de la línea como armazón compositivo
          </p>
        </motion.div>
      </div>
    </div>

    {/* Cronología Personal */}
    <div className="space-y-12">
      <h3 className="text-3xl font-light text-center">Momentos Clave</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {[
          {
            año: "1960",
            evento: "Nace en Manchester, Inglaterra",
            detalle: "De padres españoles (Santiago y Gloria)"
          },
          {
            año: "1968",
            evento: "Regreso a Madrid",
            detalle: "La familia decide regresar a España"
          },
          {
            año: "1977",
            evento: "Formación Artística",
            detalle: "Ingresa en la Facultad de Bellas Artes de Madrid"
          },
          {
            año: "1994-1995",
            evento: "Becas Internacionales",
            detalle: "Obtiene las Becas de París y Roma"
          },
          {
            año: "2001",
            evento: "Beca en Israel",
            detalle: "Prepara exposiciones en Museos de Tel Aviv"
          },
          {
            año: "2013",
            evento: "Documental en el MoMA",
            detalle: "'Ciria, Pronunced Thiria' en Nueva York y Berlín"
          }
        ].map((item, index) => (
          <motion.div
            key={item.año}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-6"
          >
            <div className="text-2xl font-light text-[#FF0000] whitespace-nowrap">
              {item.año}
            </div>
            <div>
              <h4 className="text-xl font-light mb-2">{item.evento}</h4>
              <p className="text-gray-600">{item.detalle}</p>
            </div>
          </motion.div>
        ))}
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

      {/* Nota adicional */}
      <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
        <p className="text-gray-500 italic">
          La obra de Ciria está presente en numerosas instituciones y colecciones adicionales alrededor del mundo, 
          incluyendo múltiples ayuntamientos, fundaciones y colecciones privadas.
        </p>
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