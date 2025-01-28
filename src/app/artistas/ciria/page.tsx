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
      "Colección Arte Abstracto del Centro de Arte Mark Rothko, Daugavpils",
      "Resistencias ante la estupidez humana. Museo La Neomudéjar, Madrid",
      "Luis Cernuda (La realidad y el deseo). Sala de Exposiciones del Castell de Cornellá",
      "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”.Sala Ágora, Ayuntamiento de Cambrils, Cambrils.",
    ],
  },
  {
    year: "2021",
    exhibitions: [
      "Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán. Palacio de Condestable, Pamplona",
      "Casa de Cultura-Palau dels Barons de Santa Bárbara, Ontinyent",
    ],
  },
  {
    year: "2020",
    exhibitions: [
      "“El fin de la Modernidad”. Centro de Arte Contemporáneo Rafael Botí, Córdoba.",
      "“Exposición Internacional de Artes Plásticas de Valdepeñas (Medalla de Oro al Mérito en las Bellas Artes)”. Centro Cultural “La Confianza”, Valdepeñas.",
    ],
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
    ],
  },
  {
    year: "2018",
    exhibitions: [
      "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Sala de Exposiciones de la Universidad de Oviedo, Oviedo.",

      "Sala de Ca l’Anitas de Roses (Gerona). Museo de Bellas Artes, Castellón. Auditorio Municipal, Vinaros. Sala de exposiciones temporales de Can Rocamora, Sitges. Sala de exposiciones del Museo Soler Blasco, Jávea.",

      "Galería Cordeiros, Oporto (Portugal).",
    ],
  },
  {
    year: "2017",
    exhibitions: [
      "“La colección: una visión contemporánea”. Colección de Arte de Alcoy. La Capilla del Antiguo Asilo, Alcoy.",

      "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Biblioteca Jaume Fuster, Barcelona. Castell Palau de la Bisbal",

      "d’Empordà, Gerona. Castell de Cornellá, Cornellá de Llobregat. Biblioteca Carles Rahola, Girona. Casa de la Cultura,",
      "LLoret de Mar. Edificio Badajoz Siglo XXI, Badajoz. Biblioteca Municipal Mestre Martí Tauler, Rubí.",
      "Colección Ars Fundum. Bodegas Portia, Gumiel de Izán.",
    ],
  },
  {
    year: "2016",
    exhibitions: [
      "ART MIAMI’16. Galería Cordeiros, Galería Christopher Cutts, Miami (Estados Unidos).",

      "“Pluralia Tantum”. Galería Cordeiros, Oporto (Portugal).",

      "“Made in Spain”. Museo de Arte de la Diputación (MAD), Antequera.",
      "“Pepe Carvalho: Homenaje a Manuel Vázquez Montalbán”. Palau Falguera, Sant Feliu de Llobregat. Centro Municipal Integrado, Gijón",
    ],
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
    ],
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
    ],
  },
];

const exposicionesIndividuales: ExposicionIndividual[] = [
  {
    year: "2024",
    exhibitions: [
      "El Hospital-Centro Vivo. Diputación de Badajoz, Badajoz",
      "Fundación Enaire. Naves de Gamazo, Santander",
      "Balta Gallery, Santander",
      "Nexos, Arte Iberoamericano Contemporáneo. Palacio de Barrantes-Cervantes, Trujillo",
    ],
  },
  {
    year: "2023",
    exhibitions: [
      "Espacio Bodegas Portia, Burgos",
      "Zapadores Museo Siglo XXI, Madrid",
      "Museo C.A.V. La Neumudéjar, Madrid",
      "Más allá de la Frivolidad en los Ochenta. Galería Aldama Fabre Bilbao",
      "Colección Fundación Mediterráneo. Musea de Arte Contemporánero de Alicante (MACA), ALicante",
      "Todo lo demás; CentroCentro, Madrid",
      "30 años del Certamen de Dibujo Gregorio Prieto; Casa de Vacas, Madrid",
      "Formas de Ver. Persèctiva Satélite. Colección de la Fundación Alberto Jiménez-Arellano Alonso de la universidad de Valladolid",
      "Sala de exposiciones, Buitrago de Lozoya",
      "Centro Cultural Pérez de la Riva, Las Rozas",
      "Centro Cultural La Pocilga, Galapagar",
      "Centro Cultural Federico García Lorca, Rivas-Vaciamadrid",
      "Centro Cultural Moralzarzal",
      "20 aniversario de FASHION ART. Can Marfà-Museo de Marató",
    ],
  },
  {
    year: "2022",
    exhibitions: [
      "Templarios. Sala de Exposiciones del Centro Cultural Gran Capitán, Granada",
      "Dinamismo e Interactividad, (junto a Jorge Oteiza), Galería David Bardía",
      "Simposium 'La Moda Vive'. Hotel Real, Santander",
      "Colección Arte Abstracto del Centro de Arte Mark Rothko, Daugavplis (Letonia)",
      "Resistencias ante la estupidez humana. Museo La Neumudéjar, Madrid",
      "ARCO'22 Fashionartinstitute: Stand RTVE, Madrid",
      "Luis Cernuda (La realidad y el deseo). Sala de Exposiciones del Castell de Cornellá",
      "Cornellá del Llobregat. Biblioteca Municipal Lloret del Mar, Lloret del Mar",
      "Pepe Carvalho : Homenaje a Manuel Vázquez Montalbán. Sala Ágora, Ayuntamiento de Cambrils, Cambrils",
    ],
  },
  {
    year: "2021",
    exhibitions: [
      "Pepe Carvalho: Homenaje a Manuel Velázquez Montalbán. Palacio de Condestable, Pamplona",
      "Casa de Cultura-Palau dels Barons de Santa Bárbara, Ontinyent (Valencia)",
    ],
  },
  {
    year: "2020",
    exhibitions: [
      "El fin de la Modernidad. Centro de Arte Contemporánero Rafael Botí, Córdoba",
      "Exposición Internacional de Artes Plásticas de Valdepeñas (Medalla de Oro al Mérito en las Bellas Artes. Centro Cultural 'La Confianza', Valdepeñas",
    ],
  },
  {
    year: "2019",
    exhibitions: [
      "Espacio de Producción y Difusión de Arte Contemporáneo (ECPDAC), Ciudad de México",
      "Galería Christopher Cutts, Toronto",
      "Galería Baert, Los Ángeles",
    ],
  },
  {
    year: "2018",
    exhibitions: [
      "Museo C.A.V. La Neomudéjar, Madrid",
      "Ateneo Español de México A.C., Ciudad de México",
      "Museo Vostell-Malpartida de Cáceres",
      "Galería Blanca Soto, Madrid",
    ],
  },
  {
    year: "2017",
    exhibitions: ["Galería Baert, Los Ángeles (Estados Unidos)."],
  },
  {
    year: "2015",
    exhibitions: [
      "Centro de Arte Mark Rothko, Daugavpils (Letonia).",
      "TEA Tenerife Espacio de las Artes, Tenerife.",
      "Galería Alicia Winters, Arnhem (Holanda).",
    ],
  },
  {
    year: "2014",
    exhibitions: [
      "Tabacalera – Centro Promoción del Arte, Ministerio de Cultura, Madrid.",
      "Museo Fundación Memorial de América Latina, Sâo Paulo (Brasil).",
    ],
  },
  {
    year: "2013",
    exhibitions: [
      "Museo de Arte Moderno (MAMBA), Buenos Aires (Argentina).",
      "Galería Kornfeld, Berlin (Alemania).",
      "St. James Cavalier Center for Creativity, Valleta (Malta).",
      "Sala de Exposiciones del Gobierno de Andorra, Andorra la Vella.",
    ],
  },
  {
    year: "2012",
    exhibitions: [
      "Museo Nacional de Arte Contemporáneo (MNAC), Bucarest (Rumanía).",
      "Museo Raúl Anguiano (MURA), Guadalajara (Mexico).",
      "Museo del Patrimonio (MUPAM), Málaga.",
      "Galería Gema Llamazares, Gijón.",
      "Galería Christopher Cutts, Toronto (Canadá).",
    ],
  },
  {
    year: "2011",
    exhibitions: [
      "Instituto Valenciano de Arte Moderno (IVAM), Valencia.",
      "Museo de Arte de Amarillo (AMoA), Amarillo (Texas).",
      "Galería Cordeiros, Oporto (Portugal).",
      "Galería Gema Llamazares, Gijón.",
      "Galería Stefan Stux, Nueva York (Estados Unidos).",
    ],
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
    ],
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
    ],
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
    ],
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
    ],
  },
  {
    year: "2006",
    exhibitions: [
      "Museo de Arte Contemporáneo Ateneo de Yucatán (MACAY), Mérida (México).",
      "Galería Fernando Silió, Santander.",
      "Galería Pedro Peña, Marbella.",
    ],
  },
  {
    year: "2005",
    exhibitions: [
      "Kunsthalle Museo Centro de Arte PasquArt, Berna (Suiza).",
      "Museo del Grabado Español Contemporáneo (MGEC), Marbella.",
      "Galería Pedro Peña, Marbella.",
    ],
  },
  {
    year: "2004",
    exhibitions: [
      "Museo Estatal Galería Tretyakov, Moscú (Rusia).",
      "Museo Nacional de Polonia, Palacio Królikarnia, Varsovia (Polonia).",
      "Galería Estiarte, Madrid.",
      "Museo de la Ciudad, Valencia.",
      "Galería Antonio Prates, Lisboa (Portugal).",
    ],
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
    ],
  },
  {
    year: "2002",
    exhibitions: [
      "Museo de Arte Contemporáneo de Herzliya, Tel Aviv (Israel).",
      "Bach Quatre Arte Contemporáneo, Barcelona.",
      "Galería Italia, Alicante.",
    ],
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
    ],
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
    ],
  },
  // ... resto de las exposiciones
];

const CiriaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/ciria/ciria3.jpg",
      title: "Teatral ante la línea (No recuerdo)",
      year: "2022",
    },
    {
      url: "/images/obras/ciria/ciria7.jpg",
      title: "Cortado sobre la página de un cómic",
      year: "2022",
    },
    {
      url: "/images/obras/ciria/ciria5.jpg",
      title: "Musa y Venus (Rebelión)",
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
      Ciria
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
                "El anhelo de atrapar ese lugar y no otro. Hacer pinturas, que
                antes de otra cosa, me produzcan "dolor" de estomago."
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900">
                  Biografía
                </h2>
                <div className="w-20 h-0.5 bg-[#FF0000]" />
              </div>
              <div className="space-y-6">
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                  José Manuel Ciria nace en Manchester el 3 de Febrero de 1960,
                  de padres españoles (Santiago y Gloria), permaneciendo en
                  Inglaterra hasta la edad de los ocho años, momento en que sus
                  padres deciden regresar a Madrid.
                </p>
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                  Es uno de los artistas más destacados de su generación y una
                  figura central en el heterogéneo panorama de la pintura
                  española de las tres últimas décadas. Desde que en 1984
                  realizara su primera muestra individual en la galería parisina
                  La Ferrière, Ciria ha trazado una amplia trayectoria jalonada
                  por numerosas exposiciones y premios.
                </p>
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                  En los últimos años, su figura ha adquirido una amplia
                  proyección internacional a través de sus muestras individuales
                  en prestigiosos museos alrededor del mundo.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/obras/ciria/momento1.jpg"
                alt="José Manuel Ciria"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Sección de Evolución Artística */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Inicios Artísticos
                </h3>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Su primera etapa estuvo ligada a una figuración de carácter
                  expresionista. Durante este período, Ciria exploró diferentes
                  técnicas y estilos, sentando las bases de lo que más tarde
                  sería su característica abstracción.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Desarrollo Estilístico
                </h3>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  En los años 90, su obra se caracterizó por el diálogo entre el
                  fluir azaroso de la mancha y el rigor de la geometría,
                  estableciendo un lenguaje único que lo distinguiría en la
                  escena artística internacional.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-4">
                  Etapa de Madurez
                </h3>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Su período en Nueva York marcó un punto de inflexión en su
                  carrera, caracterizado por un enfriamiento pictórico y la
                  recuperación de la línea como armazón compositivo, elementos
                  que definen su obra actual.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sección de Reconocimientos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 bg-gray-50 rounded-2xl p-12"
          >
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              Reconocimientos y Logros
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  A lo largo de su carrera, Ciria ha recibido numerosos
                  reconocimientos y becas, incluyendo las Becas de París y Roma
                  (1994-1995) y la Beca en Israel (2001), que han contribuido a
                  su desarrollo artístico y proyección internacional.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  En 2013, su trabajo fue objeto de un documental titulado
                  'Ciria, Pronounced Thiria', presentado en el MoMA de Nueva
                  York y en Berlín, consolidando su posición como uno de los
                  artistas españoles más influyentes de su generación.
                </p>
              </div>
            </div>
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
                  "Museo Nacional Centro de Arte Reina Sofía (MNCARS), Madrid",
                  "Instituto Valenciano de Arte Moderno (IVAM), Valencia",
                  "Museo Extremeño e Iberoamericano del Arte Contemporáneo (MEIAC), Badajoz",
                  "Museo Municipal de Arte Contemporáneo, Madrid",
                  "Museo de Bellas Artes de Asturias, Oviedo",
                  "Museo de Arte Contemporáneo Unión Fenosa, La Coruña",
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
                Museos Internacionales
              </h3>
              <div className="space-y-4">
                {[
                  "Museo Estatal Galería Tretyakov, Moscú (Rusia)",
                  "Albertina Museum, Viena (Austria)",
                  "Museo-Teatro Givatayim, Tel Aviv (Israel)",
                  "Museo de Arte de Amarillo (AMoA), Texas (Estados Unidos)",
                  "Museo de Arte Moderno (MAMM), Medellín (Colombia)",
                  "National Gallery, Kingston (Jamaica)",
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
                Instituciones y Patrimonio
              </h3>
              <div className="space-y-4">
                {[
                  "Patrimonio Nacional. Palacio Real, Madrid",
                  "Calcografía Nacional, Madrid",
                  "Chase Manhattan Bank, Nueva York (Estados Unidos)",
                  "Ministerio de Asuntos Exteriores, Madrid",
                  "Academia Española, Roma (Italia)",
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

            {/* Colecciones Destacadas */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light text-gray-900 pb-4 border-b border-gray-200">
                Colecciones Destacadas
              </h3>
              <div className="space-y-4">
                {[
                  "Colección Municipal de Arte Contemporáneo, Madrid",
                  "Colección ADT, Madrid",
                  "Colección AENA, Alicante",
                  "Colección Arte y Patrimonio, Madrid",
                  "Colección Banco Portugués de Negocios (BPN), Oporto (Portugal)",
                  "Colección Caja Madrid, Madrid",
                ].map((coleccion, index) => (
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
                      {coleccion}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Nota al pie */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 italic text-center mt-20 max-w-3xl mx-auto"
          >
            La obra de Ciria está presente en numerosas instituciones y
            colecciones adicionales alrededor del mundo, incluyendo múltiples
            ayuntamientos, fundaciones y colecciones privadas.
          </motion.p>
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
