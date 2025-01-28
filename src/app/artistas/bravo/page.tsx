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
    year: "2022",
    exhibitions: [
      "«Las edades del hombre. Spiritualitas in arte hodierna«. Centro Las Claras. Plasencia.",
      "«Hablan nuestros documentos. Alrededor de la lumbre». Archivo Histórico Provincial, Cáceres",
    ],
  },
  {
    year: "2021",
    exhibitions: [
      "«40 Años de la Sala de Arte El Brocense». Sala El Brocense. Cáceres.",
    ],
  },
  {
    year: "2019",
    exhibitions: [
      "«Hablan nuestros documentos. Los cofres de la memoria». Archivo Histórico Provincial, Cáceres",
    ],
  },
  {
    year: "2018",
    exhibitions: [
      "«Homenaje a Vázquez Montalbán». Edificio Histórico de la Universidad. Oviedo.",
      " Centro Cultural Sto. Domingo, Mérida.",
      "Museu de Belles Arts. Castellón.",
    ],
  },
  {
    year: "2017",
    exhibitions: [
      "«Trazos del Salón. Una obra abierta». Centro Cultural Las Claras. Plasencia.",

      "«Homenaje a Vázquez Montalbán». Biblioteca Mestre Martí Tauler. Rubí, Barcelona y Edificio Siglo XXI, Badajoz.",

      "«Arte en femenino: El juego de los contrarios». Palacio de la Isla. Cáceres.",
    ],
  },
  {
    year: "2016",
    exhibitions: [
      "I Encuentro internacional de artistas. Parador Nacional. Alcalá de Henares, Madrid.",
    ],
  },
  {
    year: "2015",
    exhibitions: [
      "«Cum pictura poesis. Libros de artista». M.E.I.A.C. Museo Español e Iberoamericano de Arte Contemporáneo, Badajoz.",

      "«5 miradas, 1 destino: Extremadura». Palacio Toledo-Moctezuma, Cáceres y Sala Santa Clara. Plasencia, Cáceres.",
    ],
  },
  {
    year: "2013",
    exhibitions: [
      "«Encuentro y diálogo». MEIAC, Badajoz. Museo de Santa Cruz, Toledo. Museo de Cáceres. ",

      "Casa de Cultura, Don Benito y Parlamento de Extremadura, Mérida.",

      "«La primavera eterna de la pintura». Fundación Pons, Madrid",
      "Sala de Exposiciones, Ayuntamiento de Tomares, Sevilla.",
    ],
  },
  {
    year: "2011 ",
    exhibitions: [
      "«Variaciones interiores». Obra gráfica del Museo de Grabado Español Contemporáneo. (MGEC).",
      "«Escrito en el tiempo. Escritura y escrituras en la colección del Museo de Cáceres».",
      "Foro Sur. Feria iberoamericana de arte contemporáneo. Iglesia de la Preciosa Sangre, Cáceres.",
    ],
  },
  {
    year: "2010 ",
    exhibitions: [
      "«Encuentros». Exposición hispano-cubana. Sala Retiro, Madrid.",
    ],
  },
  {
    year: "2009 ",
    exhibitions: [
      "«Jesienny salon malarstwa z plasencji«. Galería Pryzmat. Cracovia, Polonia.",
      "«La luce venuta da Roma. Artistas extremeños en la Academia de Roma». Roma, Cáceres, Badajoz, Mérida",
      "«Calle Mayor». Gran Teatro, Cáceres.",
      "«Una cierta figuración». Santa María la Rica. Alcalá de Henares, Madrid.",
      "«4 / 18 Oeste». Museo Pérez Comendador Lerroux, Hervás. Casa de la Cultura, Villafranca de los Barros. Complejo Santa María, Plasencia.",
    ],
  },
  {
    year: "2008 ",
    exhibitions: [
      "«Artistas para una década, 1999 / 2008». Real Fábrica de Tapices. Madrid.",
      "«Internationaler Kunst-wettbewerb der Extremadura für Malerei«. Art Center, Berlín",
      "«El pulso del arte contemporáneo. Artistas en la colección de la Asamblea de Extremadura». Cáceres, Badajoz.",
    ],
  },
  {
    year: "2007 ",
    exhibitions: [
      "«Convergencias». Galería Libertad. Santiago de Querétaro, México.",
      "«Secuencias 76 / 06. Arte contemporáneo en las colecciones públicas». MEIAC. Badajoz.",
      "«Irrealidades. Dibujos y fotografías de la colección Castro-Barroso». Ateneo de Cáceres.",
      "«Contextos. La pintura de los ochenta en Extremadura». Bodegas Las granadas coronadas. Trujillo.",
    ],
  },
  {
    year: "2006 ",
    exhibitions: [
      "«Impressôes múltiplas«. Museu da Agua. Lisboa.",
      "«Reconocimientos». Colección Miguel Logroño. Mercado del Este, Santander y Círculo de Bellas Artes, Madrid.",
      "Galería Naxica. México D. F.",
    ],
  },
  {
    year: "2005 ",
    exhibitions: [
      "«Arte en Democracia». Parlamento de Cantabria. Parlamento de La Rioja.",
      "«Sombra y Luz. Recorridos por el arte español». Instituto Cervantes: Berlín, Bruselas, Nueva York, Roma, Viena, Belgrado, Varsovia y Tel Aviv.",
      "«Naturalezas del presente». Museo Vostell. Malpartida de Cáceres.",
      "«Diálogo Ibérico». Centro Portugués de Serigrafía. Estampa 2005. Madrid.",
    ],
  },
  {
    year: "2004 ",
    exhibitions: [
      "«Feira de Arte Contemporánea«. Galería António Prates. Lisboa.",
      "Estampa. Galería António Prates. Madrid.",
      "«Contemporaneidad y mística». Galería Dolores de Sierra, Madrid.",
    ],
  },
  {
    year: "2003 ",
    exhibitions: ["«Itinerario». MEIAC. Badajoz."],
  },
  {
    year: "2002 ",
    exhibitions: [
      "XVI Bienal de Pintura Ciudad de Zamora.",
      "«Antesala Tres». Sala XIII. Torrelodones. Madrid.",
      "«21 Artistas». Patio Noble Asamblea de Extremadura, Mérida.",
      "III Exposición de Obra Gráfica. Biblioteca Nacional, Madrid.",
    ],
  },
  {
    year: "2001 ",
    exhibitions: [
      "«Nostalgia y encuentro de Roma». Asamblea de Extremadura, Mérida.",
      "Foro Sur, Cáceres.",
      "«Encuentros de poesía visual». Museo de Cáceres.",
    ],
  },
  {
    year: "2000 ",
    exhibitions: [
      "«Multigrafías. De la estampa a la fotografía». Galería Dasto, Oviedo.",
    ],
  },
  {
    year: "1999-1972 ",
    exhibitions: [
      "Hilario Bravo realizó un total de 30 exposiciones colecctivas en esos años",
    ],
  },
];

const exposicionesIndividuales: ExposicionIndividual[] = [
  {
    year: "2021",
    exhibitions: ["«Los papiros de Nut». Espacio de Arte y Acción. Cáceres"],
  },
  {
    year: "2019",
    exhibitions: ["«La ventana de Malevich». Galería Kernel. Cáceres"],
  },
  {
    year: "2018",
    exhibitions: ["«Firmamento Europa». Parlamento Europeo, Bruselas."],
  },
  {
    year: "2017",
    exhibitions: [
      "«Estrellas y guijarros». Fundación Pons. Madrid.",
      "«Obra sobre papel». Galería Lemon y Coco. Cáceres.",
    ],
  },
  {
    year: "2016",
    exhibitions: [
      "«Firmamento Extremadura». Museo Vostell Malpartida. Cáceres.",
    ],
  },
  {
    year: "2015",
    exhibitions: [
      "«Las paredes de la idea». Sala de Arte El Brocense. Cáceres; Sala de Cultura. Don Benito, Badajoz.",
    ],
  },
  {
    year: "2014",
    exhibitions: [
      "«Las paredes de la idea». Polvorín, Ciudadela. Pamplona;",
      "Sala Europa, Badajoz y Convento Santa Clara, Mérida.",
    ],
  },
  {
    year: "2012",
    exhibitions: ["«Icaria». Sala Croma. Cáceres."],
  },
  {
    year: "2011",
    exhibitions: [
      "«La pluma y el espino». Homenaje a Carolina Coronado. Centro Cívico, Almendralejo; Complejo San Francisco, Cáceres y Sala de Columnas, Badajoz.",
      "«Pizarras de dicción». Centro cultural Capitol, Cáceres.",
      "«Ríos y laberintos». Galería La Tea. Plasencia, Cáceres.",
    ],
  },
  {
    year: "2010",
    exhibitions: [
      "«Tempus Amoris: Loving Cáceres». Espacio de Arte y Acción, Cáceres.",
      "Complejo Santa María. Plasencia, Cáceres.",
      "«Lágrimas y Brasas». Museo Pérez Comendador-Leroux. Hervás, Cáceres.",
    ],
  },
  {
    year: "2009",
    exhibitions: ["«Ut Natura». Asamblea de Extremadura. Mérida."],
  },
  {
    year: "2008",
    exhibitions: [
      "«Cartas a una ninfa». Sala de Arte El Brocense.  Cáceres.",
      "«El bosque oculto». Palacio de Carvajal. Cáceres",
      "«Guardianes de los sueños». Casa Duró. Mieres, Asturias.",
    ],
  },
  {
    year: "2007",
    exhibitions: ["«Medusa y el laberinto». Centro El Descubrimiento. Cáceres"],
  },
  {
    year: "2006",
    exhibitions: [
      "«Medusa y el laberinto». Capilla del Oidor. Fundación Colegio del Rey. Alcalá de Henares, Madrid.",
    ],
  },
  {
    year: "2005",
    exhibitions: [
      "«Jardín Mexica». Arróniz Arte Contemporáneo, México DF.",
      "«D.Quixote». Centro Portugués de Serigrafía (CPS), Lisboa.",
    ],
  },
  {
    year: "2004",
    exhibitions: [
      "«Pizarras de Dicción». Galería Astarté, Madrid.",
      "«Ninfa Gramatical». Galería Juan de Juanes, Alicante.",
      "«Puertas del Sueño». Museo de Cáceres.",
    ],
  },
  {
    year: "2003",
    exhibitions: [
      "«Intersecciones (Suite Escocia)». Galeria Sâo Bento, Lisboa.",
      "«Semántica cautiva». Sala XIII. Torrelodones, Madrid.",
    ],
  },
  {
    year: "2001",
    exhibitions: [
      "«Las Cuentas de Caronte». Círculo de Bellas Artes, Madrid.",
      "Galería António Prates, Lisboa.",
      "Museo Extremeño e Iberoamericano de Arte Contemporáneo, Badajoz.",
      "Galería Raya Punto, Salamanca.",
    ],
  },
  {
    year: "2000",
    exhibitions: ["«Liturgia». Belarde 20. Arte Contemporáneo, Madrid."],
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
      "«Papeles rotos» A. A. G. Museo de San Telmo, San Sebastián.",
    ],
  },

  // ... resto de las exposiciones
];

const CiriaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/bravo/bravo6.jpg",
      title: "Tratado de las estrellas. 22",
    },
    {
      url: "/images/obras/bravo/bravo3.jpg",
      title: "Tratado de las estrellas. 7",
    },
    {
      url: "/images/obras/bravo/bravo8.jpg",
      title: "Tratado de las estrellas. 26",
      year: "2022",
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
      Hilario Bravo
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
                "Explorador con un pensamiento que oscila entre la reflexión y
                la acción, en un aprendizaje continuado"
              </p>
            </div>

            {/* Obra Actual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center"
            >
              <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-2">
                Obra Actual
              </p>
              <p className="text-white text-xl font-light">
                {heroImages[currentImageIndex].title}
              </p>
              <p className="text-white/80 text-sm">
                {heroImages[currentImageIndex].year}
              </p>
            </motion.div>
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
    {/* Título con línea decorativa */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 relative"
    >
      <div className="absolute left-0 top-0 w-1 h-20 bg-gradient-to-b from-[#FF0000] to-transparent" />
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 pl-8">
        Biografía
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      {/* Columna de Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7 space-y-12"
      >
        {/* Introducción destacada */}
        <div className="border-l-2 border-[#FF0000] pl-6">
          <p className="text-2xl text-gray-800 font-light leading-relaxed">
            Hilario Bravo ha mostrado sus trabajos en numerosas exposiciones en España, Francia, Italia, Alemania, Bélgica, Polonia, Estados Unidos, Israel o México y, más recientemente, en el Parlamento Europeo de Bruselas (2018) donde obtuvo el Alto Patrocinio de este organismo.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-xl text-[#FF0000] font-light mb-4">Trayectoria Artística</h3>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              En 1983 viaja, becado por la Diputación Foral de Guipúzcoa, por todo Centroeuropa, y especialmente a Berlín. Los expresionistas alemanes provocan un impacto enorme en el espíritu creador del artista que le llevan a una recuperación del arte primitivo y su libertad e inmediatez.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-xl text-[#FF0000] font-light mb-4">Reconocimiento Internacional</h3>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              Su última exposición en el Parlamento Europeo de Bruselas, «Europe Firmament» (2018), ha estado precedida por numerosas exposiciones de carácter nacional e internacional en lugares como Madrid, Barcelona, Sevilla, Valencia, Bilbao, así como en Francia, Italia, Alemania, Bélgica, Polonia, EE.UU, Israel, México, etc.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-xl text-[#FF0000] font-light mb-4">Premios y Distinciones</h3>
            <p className="text-lg text-gray-700 font-light leading-relaxed">
              La obra de Hilario Bravo se presenta hoy, avalada por premios y becas como la de la Academia Española de Bellas Artes en Roma (1995-96), la Diputación Foral de Guipúzcoa (1983), VII Certamen Nacional de Dibujo Gregorio Prieto (1997), Premio Constitución de la Junta de Extremadura (1991), Premio Extremadura a la Creación (1998), Creación Literaria Junta de Extremadura (2010).
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Columna de Imagen y Datos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
      >
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="/images/obras/bravo/bravo1.jpg"
            alt="Hilario Bravo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Datos Rápidos */}
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h3 className="text-lg font-light text-[#FF0000]">Colecciones Destacadas</h3>
          <ul className="space-y-2 text-gray-700 font-light">
            <li>• Banco de España</li>
            <li>• Biblioteca Nacional</li>
            <li>• Ministerio de Cultura</li>
            <li>• Fundación Colegio del Rey</li>
            <li>• Museo Vostell Malpartida</li>
          </ul>
        </div>
      </motion.div>
    </div>
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

      {/* Museos y Colecciones */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Colecciones y Museos
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          {/* Grid Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {/* Museos Nacionales */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light text-gray-900 pb-4 border-b border-gray-200">
                Museos Nacionales
              </h3>
              <div className="space-y-4">
                {[
                  "Banco de España, Madrid",
                  "Biblioteca Nacional, Sala Goya, Madrid",
                  "Ministerio de Cultura, Madrid",
                  "Ministerio de Asuntos Exteriores, Madrid",
                  "Museo Español e Iberoamericano de Arte Contemporáneo, Badajoz",
                  "Museo del Grabado Español Contemporáneo, Marbella",
                  "Museo Casa de los Caballos, Cáceres",
                  "Museo Vostell Malpartida MVM, Cáceres"
                ].map((museo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <motion.span
                      className="text-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      •
                    </motion.span>
                    <p className="text-gray-700 font-light leading-relaxed">
                      {museo}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Museos Internacionales */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light text-gray-900 pb-4 border-b border-gray-200">
                Fundaciones y Entidades
              </h3>
              <div className="space-y-4">
                {[
                  "Fundación Colegio del Rey, Alcalá de Henares",
                  "Fundación Gregorio Prieto, Valdepeñas",
                  "Fundación Pons, Madrid",
                  "Fundaçâo António Prates, Ponte de Sor, Portugal",
                  "Academia Española de Bellas Artes, Roma",
                  "Kutxabank, San Sebastián",
                  "Liberbank, Plasencia",
                  "Universidad de Extremadura"
                ].map((museo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <motion.span
                      className="text-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      •
                    </motion.span>
                    <p className="text-gray-700 font-light leading-relaxed">
                      {museo}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Instituciones y Patrimonio */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light text-gray-900 pb-4 border-b border-gray-200">
                Instituciones Regionales
              </h3>
              <div className="space-y-4">
                {[
                  "Junta de Extremadura, Mérida",
                  "Asamblea de Extremadura, Mérida",
                  "Diputación de Cáceres",
                  "Gabinete de iniciativas transfronterizas, Mérida",
                  "Biblioteca Extremeña, Archivo de la Diputación, Cáceres",
                  "Colegio Oficial de Arquitectos, Cáceres",
                  "Ateneo de Cáceres",
                ].map((institucion, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-3 hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <motion.span
                      className="text-[#FF0000] opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.2 }}
                    >
                      •
                    </motion.span>
                    <p className="text-gray-700 font-light leading-relaxed">
                      {institucion}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
