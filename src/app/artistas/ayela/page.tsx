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
      imagen: "/images/obras/ayela/obra10.jpg",
      titulo: "Undo Sistemas",
      dimensiones: "242 x 247 cm",
      tecnica: "Acrílico y rotulador sobre tabla",
    },
    { 
      id: 2, 
      imagen: "/images/obras/ayela/obra11.jpg",
      titulo: "Perfect Score",
      dimensiones: "100 × 175 cm",
      tecnica: "Rotulador y pastel sobre papel",
    },
    { 
        id: 3, 
        imagen: "/images/obras/ayela/obra12.jpg",
        titulo: "Flat Mountain nº 34",
        dimensiones: "150 x 200 cm",
        tecnica: "Spray, rotulador y collage sobre papel",
    },
    { 
        id: 4, 
        imagen: "/images/obras/ayela/obra13.jpg",
        titulo: "Antiente.",
        dimensiones: "100 x 118 cm",
        tecnica: "Acrílico y collage sobre papel",
    },
    { 
        id: 5, 
            imagen: "/images/obras/ayela/obra14.jpg",
            titulo: "Waiting for Godzilla",
            dimensiones: "165 x 208 cm",
            tecnica: "Acrílico y collage sobre tabla y tela",
    },
    { 
        id: 6, 
            imagen: "/images/obras/ayela/obra15.jpg",
            titulo: " Polinizador",
            dimensiones: "114 x 130 cm",
            tecnica: "Acrílico sobre lienzo",
    },
    { 
        id: 7, 
            imagen: "/images/obras/ayela/obra16.jpg",
            titulo: "Gran pelea.",
            dimensiones: "207 x 148 cm",
            tecnica: "Técnica mixta en Papel sobre dibond",
    },
    { 
        id: 8, 
        imagen: "/images/obras/ayela/obra17.jpg",
        titulo: "Gran despojo.",
        dimensiones: "207 x 148 cm",
        tecnica: "Técnica mixta en Papel sobre dibond",
    },
    { 
        id: 9, 
        imagen: "/images/obras/ayela/obra18.jpg",
        titulo: "Doble hocico flor",
        dimensiones: "200 x 150 cm",
        tecnica: "Acrílico y carboncillo sobre lienzo", 
    },
    { 
        id: 10, 
            imagen: "/images/obras/ayela/obra19.jpg",
            titulo: "Soul Crafts.",
            dimensiones: "140 x 200 cm",
            tecnica: "Acrílico y cinta adhesiva sobre lienzo",
            año: "2023"
            
    },

    
  ];
  const exposicionesIndividuales: ExposicionData[] = [
    {
      year: "2021 ",
      exhibitions: [
        "bri(c)ks”, Casa Bardín, IAC Juan Gil-Albert, Alicante.",
        "Hipogea_el hueco interior, Museo de Aguas de Alicante – Pozos de Garrigós."
      ]
    },
    {
      year: " 2015-16",
      exhibitions: [
        "ARMAGETON”, Mustang Art Gallery, Elche.",
      ]
    },
    {
        year: "2015",
        exhibitions: [
          "Estados salvajes de la razón/razones de estado de lo salvaje” ciclo Pumps Project, Las Cigarreras Cultura  Contemporánea, Alicante.", 
        ]
    },
    {
        year: "2014",
        exhibitions: [
          "“El tamaño importa”, con Antonio Alonso y Jesús Zuazo. Galería La habitación, Alicante.",
        ]
    },
    {
        year: "2013",
        exhibitions: [
          "In Fraganti”, Traza, Alicante.",        
        ]
    },
    {
        year: "2012",
        exhibitions: [
          "Bala de goma”, Sala Lametro, FGV. Valencia.",      
        ]
    },
    {
        year: "2011 ",
        exhibitions: [
          "”Blood Bubble”, Sala de exposiciones CAM, Alicante.",
          "“Contar la lluvia” y “Ser la lluvia”, intervenciones murales en las salas de Oncología y Hemodiálisis del Hospital Marina Salud de Denia.",
                   
        ]
    },
    {
        year: "2009",
        exhibitions: [
          "”Santuario” con Eduardo Infante. Galería Addaya, Alaró y Palma, Mallorca.",             
        ]
    },
    {
        year: "2006",
        exhibitions: [
          "La vida es un bosque de semáforos en ámbar”, con Luis Gordillo. Sala Tabernas del SEA, castillo Sta. Bárbara . Galería Aural, Alicante.",             
        ]
    },
    {
        year: "2005",
        exhibitions: [
          "“Flat Mountain”, Sala Lonja del Pescado, Alicante y Casa Grande del Jardín de la Música, Elda.", 
          "Intervención mural en la Feria Internacional de Turismo de Bruselas."            
        ]
    },
    {
        year: "2004",
        exhibitions: [
          "“Dibujos”, Hotel Prince Park, Benidorm.",             
        ]
    },
    {
        year: "2003",
        exhibitions: [
          "“There’s a treasure everywhere”. Galería Aural, Alicante.",             
        ]
    },
    {
        year: "2002",
        exhibitions: [
          "Waiting for Godzilla”, Casa de Cultura de El Campello, Alicante.",             
        ]
    },
    {
        year: "2001",
        exhibitions: [
          "La geisha aerodinámica”, Galería Dipòsit 19, Alicante.",             
        ]
    },
    {
        year: "2000",
        exhibitions: [
          "Mi gurú se llama alpiste”, Centro 14, Alicante.",             
        ]
    },
    
    // Puedes añadir más años aquí
  ];
  const exposicionesColectivas: ExposicionData[] = [
    {
      year: "2021 ",
      exhibitions: [
        "XXI Concurso Encuentros de Arte Contemporáneo (EAC), Museo de la Universidad de Alicante (MUA).",
      ]
    },
    {
      year: "2020",
      exhibitions: [
        "Paisatges Quotidians” Colección de Arte Contemporáneo de la Generalitat, Palau de Altea, Alicante.",
        "“Art Contemporani de la Generalitat Valenciana / Primers moments”, Lonja del Pescado, Alicante. ",
        "18 historias de un encierro, exposición virtual Sede Universitaria Ciudad de Alicante.",
      ]
    },
    {
        year: "2018",
        exhibitions: [
          "“A paisagem no século XXI”, Museo Nacional Frei Manuel do Cenáculo, Évora, Portugal. ",
          "“Art Contemporani de la Generalitat Valenciana ",
          "Primers moments”, Centre del Carme Cultura Contemporània, Valencia.",

        ]
    },
    {
        year: " 2017",
        exhibitions: [
          "II Salón de otoño del museo de Guarda, Portugal. FabULab, Colegio de Arquitectos de Alicante.",
        ]
    },
    {
        year: "2016",
        exhibitions: [
            
            "“Silicio en la paleta”, Galería Fernando Pradilla, Madrid.",
            "Hoy es un día cualquiera, a mediados del 2030”, Círculo de Bellas Artes y Espacio Urg3l, Madrid. ",
            "“Lenguajes en el dibujo”, Torre DKV, Zaragoza.",
            "“Arte Cisoria”, Centro Cultural Clavijero, Michoacán, Mexico",
            "Simposio Internacional de Arte Contemporáneo de Guarda, Portugal.",
            "XVI Concurso Encuentros de Arte Contemporáneo (EAC), Museo de la Universidad de Alicante (MUA).",
        ]
    },
    {
        year: "2015 ",
        exhibitions: [
            
            "“Vidas cruzadas” Festival de Vidocreación, Galería Paula Alonso, Madrid.",
            "“Arte Cisoria”, Galleria d’Arte Contemporanea del Liceo Artistico F. Figari, Sassari, Cerdeña, Italia.",
            "IAC Juan Gil-Albert, Alicante; Palazzo Regio de Cagliari, Cerdeña, Italia.",
        ]
    },
    {
        year: "2014",
        exhibitions: [
            
            "Agorafilia”, Espai Ágora, Alcoy.",
            "“hinterlandmark  /el pavelló”, Addaya Centre d’Art Contemporani y Casal Son Tugores, Mallorca.",
            "“Dibujo contemporáneo en la Colección DKV”, Domus Artium 2002 (DA2), Salamanca.",
            "“Des de dins”, Museo de la Universidad de Alicante (MUA). “Arte Cisoria”, Museo Arqueológico y de Historia de Elche (MAHE)",
            "Centre d’Art Taller d’Ivars, Benissa; Museo de la Cuchillería, Albacete."
            
        ]
    },
    {
        year: "2013",
        exhibitions: [
            
            "AFFORDABLE ART FAIR ‘13”, Art Angler Gallery, New York City.",
            "“Colección de dibujos DKV”, Centro de Arte y Naturaleza (CDAN), Huesca",
            "Fundación Valentín de Madariaga, Sevilla",
            "Casal Solleric, Palma.",
            "Diálogos” Museo Patio Herreriano de Valladolid.",
            "“The Parking Collection 2013”, Parking Gallery, Alicante."
            
        ]
    },
    {
        year: "2012",
        exhibitions: [
            
            "“ARTE Y SALUD. Artistas de la colección DKV” Centro del Carmen, Valencia.",
            "“Col·lecció Addaya” Centre d´Art Sa Quartera, Inca.",
        ]
    },
    {
        year: "2011",
        exhibitions: [
            
            "“The natural way” Parking Gallery, Alicante.",
            "Papers Privats” Colección Tomás Ruiz, Sala de exposiciones de la UPV y Sala Cuidart del Hospital de Denia.",
            "“Travesías CAM” Ses Voltes, Palma.",
            "“SWAB ‘11” Galería Paz y Comedias, Barcelona.",
            "Works on paper” Galería Paz y Comedias, Valencia.",
            "“Gabinet de papers” Centro Municipal de Exposiciones, Elche. ",
            "“Gràfic” Artistas de la Colección DKV, Mustang Art Gallery, Elche. ",
            "“Cartografías de la Creatividad. 100% Valencianos” Centro de Desarrollo de las Artes Visuales de La Habana, Cuba. ",


        ]
    },
    {
        year: "2010",
        exhibitions: [
            
            "“La memoria en el Laberinto” Homenaje en el Centenario de Miguel Hernández. Centro de Congresos, Elche.",
            "“Cartografías de la Creatividad. 100% Valencianos” Centro del Carmen, Valencia y Museo de Arte Moderno de Santo Domingo.",
            "“Imatges Raonades ‘10” Galería Addaya, Alaró, Mallorca.",
            "“ARTE Y SALUD. Artistas de la colección DKV” Museo de Arte Contemporáneo Gas Natural Unión FENOSA, La Coruña."
        ]
    },
    {
        year: "2009",
        exhibitions: [
            
            "Transpop” Estudio Interproyectos, Altea. “Nit de l’Art ‘09” Galería Addaya, Palma. “Gràfic” Artjaen ‘09.",
            
        ]
    },
    {
        year: "2008",
        exhibitions: [
            
            "“Gràfic” Artistas de la Colección DKV. Univ. de Valencia, Elche. y Castellón.",
           "“No somos esto ni lo otro”  Galería Distrito Quinto, Barcelona.",
            "“Colección de dibujos Tomás Ruiz”,  Monasterio de Veruela, Dip. De Zaragoza."
            
        ]
    },
    {
        year: "2007",
        exhibitions: [
            
            "“ARCO’07” Galería Vacío 9, Madrid.",
            "“Arbórea Arte Contemporáneo” Sala de exposiciones Centro Cultural La Petxina, Valencia.",
            "“ART-BRUXELLS ’07” Galería Vacío 9, Bruselas. “SWAB ‘07” Galería Vacio 9, Reials Drassanes, Barcelona.",
            "Bienal Internacional del Deporte en el Arte “BIDA ‘07”, Centro Cultural Antiguo Instituto, Gijón."
            
        ]
    },
    {
        year: "2006",
        exhibitions: [
            
            "“Ocaso Vulture” Jardines de Viveros, Valencia. ",
            "“30 pintores alicantinos” Sala de exposiciones Horizon One, El Cairo.",
            
        ]
    },
    {
        year: "2005",
        exhibitions: [
            
            "”Valencia.art” Feria de Arte. Hotel Puerta Valencia, Valencia. ",
            "Valencia …en movimiento” propuesta de boart, Villa Serena, Bolonia.",
            
        ]
    },
    {
        year: "2004",
        exhibitions: [
            
            "El rostro efímero” arte público, obra seriada sobre soporte publicitario urbano, Alicante.",
            
            
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
            
            "“VIII Festival Internacional de las Artes” San José de Costa Rica.",

            
        ]
    },
    {
        year: "2001",
        exhibitions: [
            
            "Instalaciones para“10 De cada” , sala de exposiciones CAM de Elche",
            "Sala exposiciones del Palacio de la Diputación de Alicante.",
            "Colección de Arte Bibendum” de la Fundación Michelin, en la edición 2001 de la Primavera del Disseny.Capella dels Angels,Barcelona."

            
        ]
    },
    {
        year: "2000",
        exhibitions: [
            
            "Exposición de Arte Erótico, Galería La Santa, Barcelona.",
            "“Cine de Papel”,Sala Damiá Forment del Centre Cultural Bancaixa, Valencia",
            "5ª Primavera Cinematográfica de Lorca, Murcia.",

            
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
      AURELIO AYELA
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
    >
      "Queriendo extraer experiencia desde lo concreto y significado desde la experiencia, la obra se definirá desde lo procesual como exploración abierta del entorno y de los medios."  
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
                src="/images/featured/artwork3.jpg" // Cambia esta ruta
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
              La aparente simplicidad de las imágenes, así como la carga de humor y sentido de lo lúdico, esconden, sin embargo, claves interpretativas complejas que cuestionan las dicotomías entre peso y levedad, épico y trivial, tangible e ilusorio.» 
              </p>
            
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setActiveTab('bio')}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            >
              Leer más sobre Aurelio Ayela
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
        src="/images/obras/ayela/obra12.jpg"
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
          Aurelio Ayela
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 max-w-3xl"
        >
          Mi trabajo parte de la observación de lo fenomenológico en relación con las estructuras del imaginario cultural.
          
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
        Esto tiene entre otros sentidos revisar la exacerbada confusión entre realidad y signo, clarificar e intentar evidenciar su conflicto de sustitución.
        <br />
        Queriendo extraer experiencia desde lo concreto y significado desde la experiencia, la obra se definirá desde lo procesual como exploración abierta del entorno y de los medios.
        <br />
        Se trata de activar, a través de la imaginación, la naturaleza dinámica de lo real frente al reduccionismo de los condicionamientos mediáticos del cliché y la inercia cultural.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
        Y aprender por contacto, no por conciencia.
        <br />
        <br />
        A partir del uso heterodoxo de materiales comunes y la investigación de otros alternativos, o la combinación de medios tecnológicos con manualidades rudimentarias, procuro conectar, desde el ensayo de los estilos, con la fenomenología esencial de la expresión estética. No solo como motor de significado sino, sobre todo, como motor de realidad.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
        “(…)el signo era la cosa que se podía pensar y el signo de la cosa pensada, o sea de sí mismo.” Italo Calvino Un signo en el espacio
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/obras/ayela/obra15.jpg"
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