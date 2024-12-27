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
      imagen: "/images/obras/bravo/bravo1.jpg",
              titulo: "Tratado de Dunhuang",
              dimensiones: "195 x 162 cm",
              tecnica: "Óleo, lápiz y collage sobre tela",
              año: "2021"
    },
    { 
      id: 2, 
      imagen: "/images/obras/bravo/bravo2.jpg",
                titulo: "Tratado de Oort",
                dimensiones: "146 x 114 cm",
                tecnica: "Óleo, carbón, pan de oro y collage sobre tela",
    },
    { 
        id: 3, 
        imagen: "/images/obras/bravo/bravo3.jpg",
                titulo: "Tratado de las estrellas. 7",
                dimensiones: "175 x 80 cm",
                tecnica: "Collage sobre Tela",
    },
    { 
        id: 4, 
        imagen: "/images/obras/bravo/bravo4.jpg",
                titulo: "Tratado de las estrellas. 11",
                dimensiones: "175 x 80 cm",
                tecnica: "Collage sobre Tela", 
    },
    { 
        id: 5, 
        imagen: "/images/obras/bravo/bravo5.jpg",
            titulo: "Tratado de las estrellas. 18",
            dimensiones: "175 x 80 cm",
            tecnica: "Collage sobre Tela",
    },
    { 
        id: 6, 
        imagen: "/images/obras/bravo/bravo6.jpg",
            titulo: "Tratado de las estrellas. 22",
            dimensiones: "175 x 80 cm",
            tecnica: "Collage sobre Tela", 
    },
    { 
        id: 7, 
        imagen: "/images/obras/bravo/bravo7.jpg",
            titulo: "Tratado de las estrellas. 24",
            dimensiones: "175 x 80 cm",
            tecnica: "Collage sobre Tela", 
    },
    { 
        id: 8, 
        imagen: "/images/obras/bravo/bravo8.jpg",
            titulo: "Tratado de las estrellas. 26",
            dimensiones: "175 x 80 cm",
            tecnica: "Collage sobre Tela",
    },
    { 
        id: 9, 
        imagen: "/images/obras/bravo/bravo9.jpg",
            titulo: "Runas del comienzo",
            dimensiones: "89 x 38 (cada panel)",
            tecnica: "Carboncillo, pan de oro y collage sobre tela",
    },
    { 
        id: 10, 
        imagen: "/images/obras/bravo/bravo10.jpg",
            titulo: "Tríptico de Freya",
            dimensiones: "89 x 38 (cada panel)",
            tecnica: "Óleo, carboncillo, pan de oro y collage sobre tela", 
    },
    // ... más obras
  ];
  const exposicionesIndividuales: ExposicionData[] = [
    {
      year: "2021",
      exhibitions: [
        "«Los papiros de Nut». Espacio de Arte y Acción. Cáceres",
      ]
    },
    {
      year: "2019",
      exhibitions: [
        "«La ventana de Malevich». Galería Kernel. Cáceres",
      ]
    },
    {
        year: "2018",
        exhibitions: [
          "«Firmamento Europa». Parlamento Europeo, Bruselas.",
          
        ]
    },
    {
        year: "2017",
        exhibitions: [
          "«Estrellas y guijarros». Fundación Pons. Madrid.",
          "«Obra sobre papel». Galería Lemon y Coco. Cáceres.",
        ]
    },
    {
        year: "2016",
        exhibitions: [
          "«Firmamento Extremadura». Museo Vostell Malpartida. Cáceres."                   
        ]
    },
    {
        year: "2015",
        exhibitions: [
          "«Las paredes de la idea». Sala de Arte El Brocense. Cáceres; Sala de Cultura. Don Benito, Badajoz.",
        ]
    },
    {
        year: "2014",
        exhibitions: [
          "«Las paredes de la idea». Polvorín, Ciudadela. Pamplona;",
          "Sala Europa, Badajoz y Convento Santa Clara, Mérida.",
        ]
    },
    {
        year: "2012",
        exhibitions: [
          "«Icaria». Sala Croma. Cáceres.",         
        ]
    },
    {
        year: "2011",
        exhibitions: [
          "«La pluma y el espino». Homenaje a Carolina Coronado. Centro Cívico, Almendralejo; Complejo San Francisco, Cáceres y Sala de Columnas, Badajoz.",
          "«Pizarras de dicción». Centro cultural Capitol, Cáceres.",
          "«Ríos y laberintos». Galería La Tea. Plasencia, Cáceres.",
        ]
    },
    {
        year: "2010",
        exhibitions: [
          "«Tempus Amoris: Loving Cáceres». Espacio de Arte y Acción, Cáceres.",
          "Complejo Santa María. Plasencia, Cáceres.",
          "«Lágrimas y Brasas». Museo Pérez Comendador-Leroux. Hervás, Cáceres.",       
        ]
    },
    {
        year: "2009",
        exhibitions: [
          "«Ut Natura». Asamblea de Extremadura. Mérida.",
        ]
    },
    {
        year: "2008",
        exhibitions: [
          "«Cartas a una ninfa». Sala de Arte El Brocense.  Cáceres.",
          "«El bosque oculto». Palacio de Carvajal. Cáceres",
          "«Guardianes de los sueños». Casa Duró. Mieres, Asturias.",
        ]
    },
    {
        year: "2007",
        exhibitions: [
          "«Medusa y el laberinto». Centro El Descubrimiento. Cáceres",
        ]
    },
    {
        year: "2006",
        exhibitions: [
          "«Medusa y el laberinto». Capilla del Oidor. Fundación Colegio del Rey. Alcalá de Henares, Madrid.",
        ]
    },
    {
        year: "2005",
        exhibitions: [
          "«Jardín Mexica». Arróniz Arte Contemporáneo, México DF.",
          "«D.Quixote». Centro Portugués de Serigrafía (CPS), Lisboa.",
        ]
    },
    {
        year: "2004",
        exhibitions: [
          "«Pizarras de Dicción». Galería Astarté, Madrid.",
          "«Ninfa Gramatical». Galería Juan de Juanes, Alicante.",
          "«Puertas del Sueño». Museo de Cáceres.",
        ]      
    },
    {
        year: "2003",
        exhibitions: [
          "«Intersecciones (Suite Escocia)». Galeria Sâo Bento, Lisboa.",
          "«Semántica cautiva». Sala XIII. Torrelodones, Madrid.",
        ]
    },
    {
        year: "2001",
        exhibitions: [
          "«Las Cuentas de Caronte». Círculo de Bellas Artes, Madrid.",
          "Galería António Prates, Lisboa.",
          "Museo Extremeño e Iberoamericano de Arte Contemporáneo, Badajoz.",
          "Galería Raya Punto, Salamanca.",
        
        ]
    },
    {
        year: "2000",
        exhibitions: [
          "«Liturgia». Belarde 20. Arte Contemporáneo, Madrid.",
        ]
    },
    {
        year: "1999-1973",
        exhibitions: [
          "«Liturgia». Sala de Arte El Brocense, Cáceres.",
          "Galería Pilar Parra, Madrid.",
          "Orange Art Gallery, Milán.",
          "«Opvs Lvcis«. Basílica de Santa Lucía del Trampal, Monasterio de Yuste y Conventual San Benito de Alcántara, Cáceres; y Cripta de Santa Eulalia, Mérida.",
          "Asamblea de Extremadura, Mérida.",
          "«Cuadernos de viaje y tres objetos». Galería Nacional de Praga, Cáceres.",
          "Galería Pilar Parra, Madrid.",
          "«El Bosque de Diana. Modo Cultual». Colegio de Arquitectos, Cáceres.",
          "Palacio de San Jorge, Cáceres.",
          "«El Bosque de Diana. Modo Ritual». Galería Arroyazo, Don Benito.",
          "Galería Ray-Gun, Valencia.",
          "«Visiones de un chamán». Biblioteca Pública, Cáceres.",
          "Galería Término, Madrid..",
          "Galerie Artem, Quimper.",
          "«Dibujos, fotografías y collages». Sala El Brocense, Cáceres.",
          "Oeuvre sur papier. Galerie de la Rue en Pente. Bayona, Francia.",
          "Galerie Utopia. Bayona, Francia.",
          "Sala Garibay, San Sebastián.",
          "«Del amor y de la muerte». Aula de Cultura, Bilbao.",
          "Galería Alga, San Sebastián.",
          "Sala de Cultura, Pamplona.",
          "Arteder’ 82, Bilbao.",
          "Happening «Suceso». Plaza de la Trinidad. San  Sebastián.",
          "«Papeles rotos» A. A. G. Museo de San Telmo, San Sebastián."

        ]
    }
    // Puedes añadir más años aquí
  ];
  const exposicionesColectivas: ExposicionData[] = [
    {
      year: "2022",
      exhibitions: [
        "«Las edades del hombre. Spiritualitas in arte hodierna«. Centro Las Claras. Plasencia.",
        "«Hablan nuestros documentos. Alrededor de la lumbre». Archivo Histórico Provincial, Cáceres",
      ]
    },
    {
      year: "2021",
      exhibitions: [
        "«40 Años de la Sala de Arte El Brocense». Sala El Brocense. Cáceres.",
      ]
    },
    {
        year: "2019",
        exhibitions: [
          "«Hablan nuestros documentos. Los cofres de la memoria». Archivo Histórico Provincial, Cáceres",
        ]
    },
    {
        year: "2018",
        exhibitions: [
          "«Homenaje a Vázquez Montalbán». Edificio Histórico de la Universidad. Oviedo.",
          "	Centro Cultural Sto. Domingo, Mérida.",
          "Museu de Belles Arts. Castellón.",
        ]       
    },
    {
        year: "2017",
        exhibitions: [
            
            "«Trazos del Salón. Una obra abierta». Centro Cultural Las Claras. Plasencia.",

            "«Homenaje a Vázquez Montalbán». Biblioteca Mestre Martí Tauler. Rubí, Barcelona y Edificio Siglo XXI, Badajoz.",
            
            "«Arte en femenino: El juego de los contrarios». Palacio de la Isla. Cáceres."
        ]
    },
    {
        year: "2016",
        exhibitions: [
            
            "I Encuentro internacional de artistas. Parador Nacional. Alcalá de Henares, Madrid.",
        ]
    },
    {
        year: "2015",
        exhibitions: [
            
            "«Cum pictura poesis. Libros de artista». M.E.I.A.C. Museo Español e Iberoamericano de Arte Contemporáneo, Badajoz.",

            "«5 miradas, 1 destino: Extremadura». Palacio Toledo-Moctezuma, Cáceres y Sala Santa Clara. Plasencia, Cáceres."
            
        ]
    },
    {
        year: "2013",
        exhibitions: [
            
            "«Encuentro y diálogo». MEIAC, Badajoz. Museo de Santa Cruz, Toledo. Museo de Cáceres. ",

            "Casa de Cultura, Don Benito y Parlamento de Extremadura, Mérida.",
            
            "«La primavera eterna de la pintura». Fundación Pons, Madrid",
            "Sala de Exposiciones, Ayuntamiento de Tomares, Sevilla.",
            
        ]
    },
    {
        year: "2011 ",
        exhibitions: [
            "«Variaciones interiores». Obra gráfica del Museo de Grabado Español Contemporáneo. (MGEC).",
            "«Escrito en el tiempo. Escritura y escrituras en la colección del Museo de Cáceres».",
            "Foro Sur. Feria iberoamericana de arte contemporáneo. Iglesia de la Preciosa Sangre, Cáceres.",

        ]
    },
    {
        year: "2010 ",
        exhibitions: [
            "«Encuentros». Exposición hispano-cubana. Sala Retiro, Madrid.",
        ]
    },
    {
        year: "2009 ",
        exhibitions: [
            "«Jesienny salon malarstwa z plasencji«. Galería Pryzmat. Cracovia, Polonia.",
            "«La luce venuta da Roma. Artistas extremeños en la Academia de Roma». Roma, Cáceres, Badajoz, Mérida",
            "«Calle Mayor». Gran Teatro, Cáceres.",
            "«Una cierta figuración». Santa María la Rica. Alcalá de Henares, Madrid.",
            "«4 / 18 Oeste». Museo Pérez Comendador Lerroux, Hervás. Casa de la Cultura, Villafranca de los Barros. Complejo Santa María, Plasencia."

        ]
    },
    {
        year: "2008 ",
        exhibitions: [
            "«Artistas para una década, 1999 / 2008». Real Fábrica de Tapices. Madrid.",
            "«Internationaler Kunst-wettbewerb der Extremadura für Malerei«. Art Center, Berlín",
            "«El pulso del arte contemporáneo. Artistas en la colección de la Asamblea de Extremadura». Cáceres, Badajoz.",

        ]
    },
    {
        year: "2007 ",
        exhibitions: [
            "«Convergencias». Galería Libertad. Santiago de Querétaro, México.",
            "«Secuencias 76 / 06. Arte contemporáneo en las colecciones públicas». MEIAC. Badajoz.",
            "«Irrealidades. Dibujos y fotografías de la colección Castro-Barroso». Ateneo de Cáceres.",
            "«Contextos. La pintura de los ochenta en Extremadura». Bodegas Las granadas coronadas. Trujillo."

        ]
    },
    {
        year: "2006 ",
        exhibitions: [
            "«Impressôes múltiplas«. Museu da Agua. Lisboa.",
            "«Reconocimientos». Colección Miguel Logroño. Mercado del Este, Santander y Círculo de Bellas Artes, Madrid.",
            "Galería Naxica. México D. F.",
        ]
    },
    {
        year: "2005 ",
        exhibitions: [
            "«Arte en Democracia». Parlamento de Cantabria. Parlamento de La Rioja.",
            "«Sombra y Luz. Recorridos por el arte español». Instituto Cervantes: Berlín, Bruselas, Nueva York, Roma, Viena, Belgrado, Varsovia y Tel Aviv.",
            "«Naturalezas del presente». Museo Vostell. Malpartida de Cáceres.",
            "«Diálogo Ibérico». Centro Portugués de Serigrafía. Estampa 2005. Madrid."

        ]
    },
    {
        year: "2004 ",
        exhibitions: [
            "«Feira de Arte Contemporánea«. Galería António Prates. Lisboa.",
            "Estampa. Galería António Prates. Madrid.",
            "«Contemporaneidad y mística». Galería Dolores de Sierra, Madrid.",
        ]
    },
    {
        year: "2003 ",
        exhibitions: [
            "«Itinerario». MEIAC. Badajoz.",
        ]
    },
    {
        year: "2002 ",
        exhibitions: [
            "XVI Bienal de Pintura Ciudad de Zamora.",
            "«Antesala Tres». Sala XIII. Torrelodones. Madrid.",
            "«21 Artistas». Patio Noble Asamblea de Extremadura, Mérida.",
            "III Exposición de Obra Gráfica. Biblioteca Nacional, Madrid."

        ]
    },
    {
        year: "2001 ",
        exhibitions: [
            "«Nostalgia y encuentro de Roma». Asamblea de Extremadura, Mérida.",
            "Foro Sur, Cáceres.",
            "«Encuentros de poesía visual». Museo de Cáceres.",

        ]
    },
    {
        year: "2000 ",
        exhibitions: [
            "«Multigrafías. De la estampa a la fotografía». Galería Dasto, Oviedo.",
        ]
    },
    {
        year: "1999-1972 ",
        exhibitions: [
            "Hilario Bravo realizó un total de 30 exposiciones colecctivas en esos años",
        ]
    },
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
      HILARIO BRAVO
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "Explorador con un pensamiento que oscila entre la reflexión y la acción, en un aprendizaje continuado" 
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
                src="/images/featured/artwork4.jpg" // Cambia esta ruta
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
              Hilario Bravo ha mostrado sus trabajos en numerosas exposiciones en España, Francia, Italia, Alemania, Bélgica, Polonia, Estados Unidos, Israel o México y, más recientemente, en el Parlamento Europeo de Bruselas (2018) donde obtuvo el Alto Patrocinio de este organismo.»
              </p>
              <p className="text-xl leading-relaxed text-gray-700">
              La obra de Hilario Bravo es hoy la obra de un pintor maduro y reflexivo, consolidado en el mundo del arte, con la aprobación y el favor de historiadores de arte, especialistas, críticos e intelectuales.
              </p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setActiveTab('bio')}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            >
              Leer más sobre Hilario Bravo
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
                            HILARIO BRAVO
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
        src="/images/obras/bravo/bravo3.jpg"
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
          Hilario Bravo 
        </motion.h2>
        
        <motion.p 
        
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 max-w-3xl"

          
        >
           Puede definirse a este artista como un carácter inserto en nuevas búsquedas plásticas, y como explorador con un pensamiento que oscila entre la reflexión y la acción, en un aprendizaje continuado. En sus viajes testimonia sus experiencias e investigaciones en un buen número de cuadernos de campo.
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
        Nacido en Cáceres, en 1955, sus comienzos en el mundo del arte se manifiestan en el País Vasco con unas primeras incursiones en el arte conceptual y de acción, pero pronto el artista comenzaría a trasladar sus inquietudes al plano puramente plástico.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
        En 1983 viaja, becado por la Diputación Foral de Guipúzcoa, por todo Centroeuropa, y especialmente a Berlín
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/bravo/bravo10.jpg"
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
              src="/images/obras/bravo/bravo9.jpg"
              alt="Primera etapa"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">1983-1987</h4>
          <p className="text-gray-600">
          En 1983 viaja, becado por la Diputación Foral de Guipúzcoa, por todo Centroeuropa, y especialmente a Berlín. Los expresionistas alemanes provocan un impacto enorme en el espíritu creador del artista que le llevan a una recuperación del arte primitivo y su libertad e inmediatez. 
          </p>
          <p className="text-gray-600">
          A la par, sus estudios en los museos europeos sobre las culturas de los Mares del Sur, africanas y orientales hacen que este interés creciente y progresivo del artista respecto a otras culturas le lleve, en 1987, a profundizar y cultivar sus conocimientos sobre los sistemas religiosos y las actitudes cosmogónicas del ser humano.
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
              src="/images/obras/bravo/bravo7.jpg"
              alt="Segunda etapa"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">1988-2004</h4>
          <p className="text-gray-600">
          Enorme interés estético merecen algunos libros en los que vuelca su creación a partir de reflexiones sobre la literatura como «El agua incendiada. Jarchas mozárabes» (1997) o la más reciente «Odi et amo», sobre la obra amatoria de Catulo (2020).
          </p>
          <p className="text-gray-600">
          Su última exposición en el Parlamento Europeo de Bruselas, «Europe Firmament» (2018), que obtuvo el Alto Patrocinio de este organismo por parte de su Presidencia, ha estado precedida por numerosas exposiciones de carácter nacional e internacional en lugares como Madrid, Barcelona, Sevilla, Valencia, Bilbao, etc. así como en Francia, Italia, Alemania, Bélgica, Polonia, EE.UU, Israel, México, etc. Sus obras pueden admirarse en colecciones tan prestigiosas como las del Banco de España, Biblioteca Nacional, Ministerio de Cultura, Ministerio de Asuntos Exteriores, Fundación Colegio del Rey, Fundaçâo António Prates, Museo Vostell Malpartida, etc.
          </p>
    
          <p className="text-gray-600">
          Como grabador obtuvo el VI Premio Nacional Museo Español del Grabado Contemporáneo de Marbella (1999), con su obra «Escalera Interior». Como escultor cabe destacar su serie «Opus Lucis» (1996), como escritor «Cuaderno de Roma» (1997), escenógrafo en «Ácido lúdico» (1990), y como muralista su «Estella Lex» (2004).
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
              src="/images/obras/bravo/bravo5.jpg"
              alt="Etapa actual"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-light">ACTUALIDAD</h4>
          <p className="text-gray-600">
          La obra de Hilario Bravo se presenta hoy, avalada por premios y becas como la de la Academia Española de Bellas Artes en Roma (1995-96), la Diputación Foral de Guipúzcoa (1983), VII Certamen Nacional de Dibujo Gregorio Prieto (1997), Premio Constitución de la Junta de Extremadura (1991), Premio Extremadura a la Creación (1998), Creación Literaria Junta de Extremadura (2010), etc.
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Museos e Instituciones Nacionales */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Museos e Instituciones Nacionales</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Banco de España, Madrid</li>
            <li className="text-gray-600">Biblioteca Nacional, Sala Goya, Madrid</li>
            <li className="text-gray-600">Ministerio de Cultura, Madrid</li>
            <li className="text-gray-600">Ministerio de Asuntos Exteriores, Madrid</li>
            <li className="text-gray-600">Museo Español e Iberoamericano de Arte Contemporáneo, Badajoz</li>
            <li className="text-gray-600">Museo del Grabado Español Contemporáneo, Marbella</li>
            <li className="text-gray-600">Museo Casa de los Caballos, Cáceres</li>
            <li className="text-gray-600">Museo Vostell Malpartida MVM, Cáceres</li>
          </ul>
        </div>

        {/* Fundaciones y Entidades */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Fundaciones y Entidades</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Fundación Colegio del Rey, Alcalá de Henares</li>
            <li className="text-gray-600">Fundación Gregorio Prieto, Valdepeñas</li>
            <li className="text-gray-600">Fundación Pons, Madrid</li>
            <li className="text-gray-600">Fundaçâo António Prates, Ponte de Sor, Portugal</li>
            <li className="text-gray-600">Academia Española de Bellas Artes, Roma</li>
            <li className="text-gray-600">Kutxabank, San Sebastián</li>
            <li className="text-gray-600">Liberbank, Plasencia</li>
            <li className="text-gray-600">Universidad de Extremadura</li>
          </ul>
        </div>

        {/* Instituciones Regionales */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Instituciones Regionales</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Junta de Extremadura, Mérida</li>
            <li className="text-gray-600">Asamblea de Extremadura, Mérida</li>
            <li className="text-gray-600">Diputación de Cáceres</li>
            <li className="text-gray-600">Gabinete de iniciativas transfronterizas, Mérida</li>
            <li className="text-gray-600">Biblioteca Extremeña, Archivo de la Diputación, Cáceres</li>
            <li className="text-gray-600">Colegio Oficial de Arquitectos, Cáceres</li>
            <li className="text-gray-600">Ateneo de Cáceres</li>
          </ul>
        </div>

        {/* Otras Colecciones */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Otras Colecciones</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">Paradores Nacionales</li>
            <li className="text-gray-600">Subastas siglo XXI, Madrid</li>
            <li className="text-gray-600">Arte y Patrimonio, S.A. Madrid</li>
            <li className="text-gray-600">CADMO Conocimiento, Madrid</li>
            <li className="text-gray-600">Cruz Roja, Cáceres</li>
            <li className="text-gray-600">Ayuntamiento de Azuqueca de Henares</li>
            <li className="text-gray-600">Ayuntamiento de Mojácar</li>
            <li className="text-gray-600">Ayuntamiento de Mieres</li>
            <li className="text-gray-600">Ayuntamiento de Don Benito</li>
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