"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
});
interface ExposicionIndividual {
  year: string;
  exhibitions: string[];
}
interface ExposicionColectiva {
  year: string;
  exhibitions: string[];
}

// Luego continúa con tus constantes
const exposicionesColectivas: ExposicionColectiva[] = [
  {
    year: "2021 ",
    exhibitions: [
      "XXI Concurso Encuentros de Arte Contemporáneo (EAC), Museo de la Universidad de Alicante (MUA).",
    ],
  },
  {
    year: "2020",
    exhibitions: [
      "Paisatges Quotidians” Colección de Arte Contemporáneo de la Generalitat, Palau de Altea, Alicante.",
      "“Art Contemporani de la Generalitat Valenciana / Primers moments”, Lonja del Pescado, Alicante. ",
      "18 historias de un encierro, exposición virtual Sede Universitaria Ciudad de Alicante.",
    ],
  },
  {
    year: "2018",
    exhibitions: [
      "“A paisagem no século XXI”, Museo Nacional Frei Manuel do Cenáculo, Évora, Portugal. ",
      "“Art Contemporani de la Generalitat Valenciana ",
      "Primers moments”, Centre del Carme Cultura Contemporània, Valencia.",
    ],
  },
  {
    year: " 2017",
    exhibitions: [
      "II Salón de otoño del museo de Guarda, Portugal. FabULab, Colegio de Arquitectos de Alicante.",
    ],
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
    ],
  },
  {
    year: "2015 ",
    exhibitions: [
      "“Vidas cruzadas” Festival de Vidocreación, Galería Paula Alonso, Madrid.",
      "“Arte Cisoria”, Galleria d’Arte Contemporanea del Liceo Artistico F. Figari, Sassari, Cerdeña, Italia.",
      "IAC Juan Gil-Albert, Alicante; Palazzo Regio de Cagliari, Cerdeña, Italia.",
    ],
  },
  {
    year: "2014",
    exhibitions: [
      "Agorafilia”, Espai Ágora, Alcoy.",
      "“hinterlandmark  /el pavelló”, Addaya Centre d’Art Contemporani y Casal Son Tugores, Mallorca.",
      "“Dibujo contemporáneo en la Colección DKV”, Domus Artium 2002 (DA2), Salamanca.",
      "“Des de dins”, Museo de la Universidad de Alicante (MUA). “Arte Cisoria”, Museo Arqueológico y de Historia de Elche (MAHE)",
      "Centre d’Art Taller d’Ivars, Benissa; Museo de la Cuchillería, Albacete.",
    ],
  },
  {
    year: "2013",
    exhibitions: [
      "AFFORDABLE ART FAIR ‘13”, Art Angler Gallery, New York City.",
      "“Colección de dibujos DKV”, Centro de Arte y Naturaleza (CDAN), Huesca",
      "Fundación Valentín de Madariaga, Sevilla",
      "Casal Solleric, Palma.",
      "Diálogos” Museo Patio Herreriano de Valladolid.",
      "“The Parking Collection 2013”, Parking Gallery, Alicante.",
    ],
  },
  {
    year: "2012",
    exhibitions: [
      "“ARTE Y SALUD. Artistas de la colección DKV” Centro del Carmen, Valencia.",
      "“Col·lecció Addaya” Centre d´Art Sa Quartera, Inca.",
    ],
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
    ],
  },
  {
    year: "2010",
    exhibitions: [
      "“La memoria en el Laberinto” Homenaje en el Centenario de Miguel Hernández. Centro de Congresos, Elche.",
      "“Cartografías de la Creatividad. 100% Valencianos” Centro del Carmen, Valencia y Museo de Arte Moderno de Santo Domingo.",
      "“Imatges Raonades ‘10” Galería Addaya, Alaró, Mallorca.",
      "“ARTE Y SALUD. Artistas de la colección DKV” Museo de Arte Contemporáneo Gas Natural Unión FENOSA, La Coruña.",
    ],
  },
  {
    year: "2009",
    exhibitions: [
      "Transpop” Estudio Interproyectos, Altea. “Nit de l’Art ‘09” Galería Addaya, Palma. “Gràfic” Artjaen ‘09.",
    ],
  },
  {
    year: "2008",
    exhibitions: [
      "“Gràfic” Artistas de la Colección DKV. Univ. de Valencia, Elche. y Castellón.",
      "“No somos esto ni lo otro”  Galería Distrito Quinto, Barcelona.",
      "“Colección de dibujos Tomás Ruiz”,  Monasterio de Veruela, Dip. De Zaragoza.",
    ],
  },
  {
    year: "2007",
    exhibitions: [
      "“ARCO’07” Galería Vacío 9, Madrid.",
      "“Arbórea Arte Contemporáneo” Sala de exposiciones Centro Cultural La Petxina, Valencia.",
      "“ART-BRUXELLS ’07” Galería Vacío 9, Bruselas. “SWAB ‘07” Galería Vacio 9, Reials Drassanes, Barcelona.",
      "Bienal Internacional del Deporte en el Arte “BIDA ‘07”, Centro Cultural Antiguo Instituto, Gijón.",
    ],
  },
  {
    year: "2006",
    exhibitions: [
      "“Ocaso Vulture” Jardines de Viveros, Valencia. ",
      "“30 pintores alicantinos” Sala de exposiciones Horizon One, El Cairo.",
    ],
  },
  {
    year: "2005",
    exhibitions: [
      "”Valencia.art” Feria de Arte. Hotel Puerta Valencia, Valencia. ",
      "Valencia …en movimiento” propuesta de boart, Villa Serena, Bolonia.",
    ],
  },
  {
    year: "2004",
    exhibitions: [
      "El rostro efímero” arte público, obra seriada sobre soporte publicitario urbano, Alicante.",
    ],
  },
  {
    year: "2003",
    exhibitions: [
      "“Perdidos en el espacio” Muestra Nacional de Arte Contemporáneo Ciudad de Yecla, Murcia.",
    ],
  },
  {
    year: "2002",
    exhibitions: [
      "“VIII Festival Internacional de las Artes” San José de Costa Rica.",
    ],
  },
  {
    year: "2001",
    exhibitions: [
      "Instalaciones para“10 De cada” , sala de exposiciones CAM de Elche",
      "Sala exposiciones del Palacio de la Diputación de Alicante.",
      "Colección de Arte Bibendum” de la Fundación Michelin, en la edición 2001 de la Primavera del Disseny.Capella dels Angels,Barcelona.",
    ],
  },
  {
    year: "2000",
    exhibitions: [
      "Exposición de Arte Erótico, Galería La Santa, Barcelona.",
      "“Cine de Papel”,Sala Damiá Forment del Centre Cultural Bancaixa, Valencia",
      "5ª Primavera Cinematográfica de Lorca, Murcia.",
    ],
  },
];

const exposicionesIndividuales: ExposicionIndividual[] = [
  {
    year: "2021 ",
    exhibitions: [
      "bri(c)ks”, Casa Bardín, IAC Juan Gil-Albert, Alicante.",
      "Hipogea_el hueco interior, Museo de Aguas de Alicante – Pozos de Garrigós.",
    ],
  },
  {
    year: " 2015-16",
    exhibitions: ["ARMAGETON”, Mustang Art Gallery, Elche."],
  },
  {
    year: "2015",
    exhibitions: [
      "Estados salvajes de la razón/razones de estado de lo salvaje” ciclo Pumps Project, Las Cigarreras Cultura  Contemporánea, Alicante.",
    ],
  },
  {
    year: "2014",
    exhibitions: [
      "“El tamaño importa”, con Antonio Alonso y Jesús Zuazo. Galería La habitación, Alicante.",
    ],
  },
  {
    year: "2013",
    exhibitions: ["In Fraganti”, Traza, Alicante."],
  },
  {
    year: "2012",
    exhibitions: ["Bala de goma”, Sala Lametro, FGV. Valencia."],
  },
  {
    year: "2011 ",
    exhibitions: [
      "”Blood Bubble”, Sala de exposiciones CAM, Alicante.",
      "“Contar la lluvia” y “Ser la lluvia”, intervenciones murales en las salas de Oncología y Hemodiálisis del Hospital Marina Salud de Denia.",
    ],
  },
  {
    year: "2009",
    exhibitions: [
      "”Santuario” con Eduardo Infante. Galería Addaya, Alaró y Palma, Mallorca.",
    ],
  },
  {
    year: "2006",
    exhibitions: [
      "La vida es un bosque de semáforos en ámbar”, con Luis Gordillo. Sala Tabernas del SEA, castillo Sta. Bárbara . Galería Aural, Alicante.",
    ],
  },
  {
    year: "2005",
    exhibitions: [
      "“Flat Mountain”, Sala Lonja del Pescado, Alicante y Casa Grande del Jardín de la Música, Elda.",
      "Intervención mural en la Feria Internacional de Turismo de Bruselas.",
    ],
  },
  {
    year: "2004",
    exhibitions: ["“Dibujos”, Hotel Prince Park, Benidorm."],
  },
  {
    year: "2003",
    exhibitions: ["“There’s a treasure everywhere”. Galería Aural, Alicante."],
  },
  {
    year: "2002",
    exhibitions: [
      "Waiting for Godzilla”, Casa de Cultura de El Campello, Alicante.",
    ],
  },
  {
    year: "2001",
    exhibitions: ["La geisha aerodinámica”, Galería Dipòsit 19, Alicante."],
  },
  {
    year: "2000",
    exhibitions: ["Mi gurú se llama alpiste”, Centro 14, Alicante."],
  },

  // ... resto de las exposiciones
];

const CiriaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/ayela/obra15.jpg",
      title: "Polinizador",
    },
    {
      url: "/images/obras/ayela/obra12.jpg",
      title: "Flat Mountain nº 34",
    },
    {
      url: "/images/obras/ayela/obra13.jpg",
      title: "Antiente",
      year: "2023",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#262626]">
      {/* Hero Section Dinámico */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex].url}
              alt={heroImages[currentImageIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-24 px-4" // Aumentado de space-y-12 a space-y-24
          >
            {/* Logo con margen aumentado */}
            <div className="relative w-[280px] sm:w-[400px] md:w-[500px] mx-auto mb-12">
              {" "}
              {/* Añadido mb-12 */}
              <Image
                src="/images/logo/logoxinkuart.png"
                alt="XinkuArt Logo"
                width={500}
                height={167}
                className="object-contain"
              />
            </div>

            <div className="space-y-6">
            <motion.h1
  className={`relative text-7xl sm:text-8xl md:text-9xl text-white ${montserrat.className}`}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  <div className="relative inline-block">
    <div className="flex flex-col items-start">
      <span className="font-light tracking-[0.15em] mt-2 relative">
      Aurelio Ayela
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute -bottom-2 right-0 w-3/4 h-[2px] bg-[#FF0000] transform origin-right"
        />
      </span>
    </div>
  </div>
</motion.h1>
              <p className="text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto font-light italic leading-relaxed">
                "Queriendo extraer experiencia desde lo concreto y significado
                desde la experiencia, la obra se definirá desde lo procesual
                como exploración abierta del entorno y de los medios."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Indicadores de Imagen */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentImageIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </section>

      {/* Introducción Biográfica */}
      {/* Introducción Biográfica */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
          >
            {/* Columna de Texto */}
            <div className="space-y-12">
              {/* Encabezado */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                  BIOGRAFÍA
                </h2>
                <div className="w-20 h-0.5 bg-[#FF0000]" />
              </motion.div>

              {/* Contenido Biográfico */}
              <div className="space-y-8">
                {/* Formación */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-lg max-w-none"
                >
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    La aparente simplicidad de las imágenes, así como la carga
                    de humor y sentido de lo lúdico, esconden, sin embargo,
                    claves interpretativas complejas que cuestionan las
                    dicotomías entre peso y levedad, épico y trivial, tangible e
                    ilusorio.»
                  </p>
                  <br />
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                    Esto tiene entre otros sentidos revisar la exacerbada
                    confusión entre realidad y signo, clarificar e intentar
                    evidenciar su conflicto de sustitución. Queriendo extraer
                    experiencia desde lo concreto y significado desde la
                    experiencia, la obra se definirá desde lo procesual como
                    exploración abierta del entorno y de los medios. Se trata de
                    activar, a través de la imaginación, la naturaleza dinámica
                    de lo real frente al reduccionismo de los condicionamientos
                    mediáticos del cliché y la inercia cultural.
                  </p><br />
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Y aprender por contacto, no por conciencia.
                  </p>
                  <br />
                  <p className="text-lg text-gray-700 font-light leading-relaxed">
                  A partir del uso heterodoxo de materiales comunes y la investigación de otros alternativos, o la combinación de medios tecnológicos con manualidades rudimentarias, procuro conectar, desde el ensayo de los estilos, con la fenomenología esencial de la expresión estética. No solo como motor de significado sino, sobre todo, como motor de realidad.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Columna de Imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 h-full" // Modificado para mejor control del espacio
            >
              <div className="relative h-[calc(100vh-200px)] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/obras/ayela/obra13.jpg"
                  alt="William Gaber"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Obras Destacadas */}
      <section className="relative py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Obras <span className="text-[#FF0000]">Destacadas</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          {/* Grid de Obras */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                imagen: "/images/obras/ayela/obra10.jpg",
                titulo: "Undo Sistemas",
                tecnica: "Acrílico y rotulador sobre tabla",
                medidas: "242 x 247 cm",
              },
              {
                imagen: "/images/obras/ayela/obra16.jpg",
                titulo: "Gran pelea.",
                tecnica: "Técnica mixta en Papel sobre dibond",
                medidas: "207 x 148 cm",
              },
              {
                imagen: "/images/obras/ayela/obra19.jpg",
                titulo: "Soul Crafts",
                tecnica: "Acrílico y cinta adhesiva sobre lienzo",
                medidas: "140 x 200 cm",
              },
            ].map((obra, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Marco de la Obra */}
                <div className="relative aspect-square bg-white p-4 shadow-lg rounded-sm">
                  {/* Contenedor de la Imagen con efecto de marco */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={obra.imagen}
                      alt={obra.titulo}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    {/* Overlay con degradado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Información de la Obra */}
                    <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="space-y-3">
                        <motion.h3
                          className="text-2xl font-light text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                        >
                          {obra.titulo}
                        </motion.h3>
                        <div className="h-px w-12 bg-[#FF0000]" />
                        <p className="text-white/90 font-light">
                          {obra.tecnica}
                        </p>
                        <p className="text-white/80 font-light text-sm">
                          {obra.medidas}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Borde decorativo */}
                  <div className="absolute inset-0 border border-gray-100 group-hover:border-[#FF0000]/20 transition-colors duration-300" />
                </div>

                {/* Sombra inferior */}
                <div className="absolute inset-x-4 bottom-0 h-8 bg-gradient-to-t from-black/5 to-transparent -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Botón Ver Más */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Link href="/obras">
              <motion.button
                className="group relative inline-flex items-center px-8 py-4 bg-[#FF0000] text-white overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2 font-light">
                  Ver Todas las Obras
                  <svg
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Línea de Tiempo de Exposiciones */}
      {/* Sección de Exposiciones */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              COLECCIÓN DE EXPOSICIONES
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          {/* Exposiciones Individuales */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light text-gray-900 mb-12"
            >
              Exposiciones Individuales
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {/* Primera Columna */}
              <div className="space-y-12">
                {exposicionesIndividuales
                  .slice(0, Math.ceil(exposicionesIndividuales.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
                              {exhibition}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Segunda Columna */}
              <div className="space-y-12">
                {exposicionesIndividuales
                  .slice(Math.ceil(exposicionesIndividuales.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
                              {exhibition}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>

          {/* Exposiciones Colectivas */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light text-gray-900 mb-12"
            >
              Exposiciones Colectivas
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {/* Primera Columna */}
              <div className="space-y-12">
                {exposicionesColectivas
                  .slice(0, Math.ceil(exposicionesColectivas.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
                              {exhibition}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Segunda Columna */}
              <div className="space-y-12">
                {exposicionesColectivas
                  .slice(Math.ceil(exposicionesColectivas.length / 2))
                  .map((yearGroup, index) => (
                    <motion.div
                      key={yearGroup.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center mb-4">
                        <h4 className="text-4xl font-light text-gray-900">
                          {yearGroup.year}
                        </h4>
                        <div className="ml-4 h-px flex-grow bg-gradient-to-r from-[#FF0000]/20 to-transparent" />
                      </div>
                      <div className="space-y-3">
                        {yearGroup.exhibitions.map((exhibition, i) => (
                          <motion.div
                            key={i}
                            className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                          >
                            <p className="text-gray-700 font-light">
                              {exhibition}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Botón de Contacto */}
      <section className="relative py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/contacto">
            <motion.button
              className="group relative px-8 py-4 bg-[#FF0000] text-white overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2 font-light">
                Solicitar Información
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] w-full bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CiriaPage;
