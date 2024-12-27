"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Book,
  Image as ImageIcon,
  Grid,
  ZoomIn,
  X,
} from "lucide-react";
interface ExposicionData {
  year: string;
  exhibitions: string[];
}

const CiriaPage = () => {
  const [activeTab, setActiveTab] = useState("obras");
  const [selectedObra, setSelectedObra] = useState<null | any>(null);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const tabItems = [
    { id: "obras", label: "Obras del Artista", icon: <Grid size={10} /> },
    {
      id: "exposiciones",
      label: "Exposiciones Individuales",
      icon: <ImageIcon size={10} />,
    },
    {
      id: "exposiciones 2",
      label: "Exposiciones Colectivas",
      icon: <ImageIcon size={10} />,
    },
    {
      id: "colecciones",
      label: "Colecciones y Museos ",
      icon: <Award size={10} />,
    },
  ];

  const obras = [
    {
      id: 1,
      imagen: "/images/obras/alonso/alonso1.jpg",
      titulo: "La Montaña Rusa",
      dimensiones: "189 cm x 105 cm",
      tecnica: "Pintura en técnica mixta sobre tela",
      año: "2012",
    },
    {
      id: 2,
      imagen: "/images/obras/alonso/alonso2.jpg",
      titulo: "Procesión",
      dimensiones: "250 cm x 200 cm",
      tecnica: "Pintura en técnica mixta sobre tela",
      año: "2016",
    },
    {
      id: 3,
      imagen: "/images/obras/alonso/alonso3.jpg",
      titulo: "Tetris",
      dimensiones: "150  cm x 150 cm",
      tecnica: "Pintura en técnica mixta sobre tela ",
      año: "2016",
    },
    {
      id: 4,
      imagen: "/images/obras/alonso/alonso4.jpg",
      titulo: "Tres figuras",
      dimensiones: " 200 cm x 200 cm",
      tecnica: "Acrílico sobre lienzo",
      año: "2015",
    },
    {
      id: 5,
      imagen: "/images/obras/alonso/alonso5.jpg",
      titulo: "Así habló Zaratustra",
      dimensiones: "250 x 200 cm ",
      tecnica: "Obra en técnica mixta sobre tela.",
      año: "2016",
    },
    {
      id: 6,
      imagen: "/images/obras/alonso/alonso6.jpg",
      titulo: "El Cristo",
      dimensiones: "250 x 200 cm ",
      tecnica: "Obra en técnica mixta sobre tela.",
      año: "2016",
    },
    {
      id: 7,
      imagen: "/images/obras/alonso/alonso7.jpg",
      titulo: "Equilibrio",
      dimensiones: "250 x 200 cm ",
      tecnica: "Obra en técnica mixta sobre tela.",
      año: "2016",
    },
    {
      id: 8,
      imagen: "/images/obras/alonso/alonso8.jpg",
      titulo: "Hierbas 11",
      dimensiones: "120 x 120 cm ",
      tecnica: "Pintura- técnica mixta sobre madera",
      año: "2021",
    },
    {
      id: 9,
      imagen: "/images/obras/alonso/alonso9.jpg",
      titulo: "Hierbas 3",
      dimensiones: "120 x 120 cm ",
      tecnica: "Pintura- técnica mixta sobre madera",
      año: "2021",
    },
    {
      id: 10,
      imagen: "/images/obras/alonso/alonso10.jpg",
      titulo: "Hierbas 4",
      dimensiones: "120 x 120 cm ",
      tecnica: "Pintura- técnica mixta sobre madera",
      año: "2021",
    },
    // ... más obras
  ];
  const exposicionesIndividuales: ExposicionData[] = [
    {
      year: "2015",
      exhibitions: ["Galería Theredoom. Madrid. Título: El ser y la nada."],
    },
    {
      year: "2013",
      exhibitions: [
        " Marita Segovia Galería de Arte. Madrid. Título: Rabbits",
        "Centro Ruso de Ciencia y Cultura. Madrid. Título: Después de las flores.",
        " Realización de la performance Después de las flores. Centro Ruso de Ciencia y Cultura. Madrid.",
      ],
    },
    {
      year: "2006",
      exhibitions: ["Fundación Caja Rioja. Logroño. Título: Serie Blanca."],
    },
    {
      year: "2004",
      exhibitions: [" Galería Trama. Madrid. Título: Incertidumbre."],
    },
    {
      year: "2000",
      exhibitions: [" Galería Rina Bouwen. Madrid. Título: Geografía."],
    },
    {
      year: "1995 - 1986",
      exhibitions: [
        "Galería Ignacio Várez. Madrid. Título: La esperanza matemática.",
        "Galería Espacio 40. Vitoria. Sin título.",
        "Galería Ravecca. Génova (Italia) Título: La memoria de los sentidos.",
        "Galería Término. Madrid. Título: Estelas de la memoria.",
        " Galería Estampa. Madrid. Título: Factorías.",
        "Exposición itinerante. Caja de Ahorros de Asturias (Oviedo, Gijón, Avilés, Mieres, La Felguera). Título: Factorías.",
      ],
    },
    // Puedes añadir más años aquí
  ];
  const exposicionesColectivas: ExposicionData[] = [
    {
      year: "2019",
      exhibitions: ["Secuencia de inútiles. Madrid."],
    },
    {
      year: "2013",
      exhibitions: [
        " Feria de Arte Strarta. Londres. Saatchi Galery- Marita Segovia Galería de Arte",
      ],
    },
    {
      year: "2009",
      exhibitions: ["Galería Éboli. Madrid."],
    },
    {
      year: "2004",
      exhibitions: ["Feria de Arte Contemporáneo ACTIVARTE. Barcelona."],
    },
    {
      year: "2002",
      exhibitions: [
        "Exposición 10º Aniversario Galería Rina Bouwen. Madrid.",
        "Exposición Señales Arte en la carretera. Cuenca.",
      ],
    },
    {
      year: "2000",
      exhibitions: [
        " Tránsito. Feria de Arte Moderno de Toledo. (Galería Rina Bouwen). Toledo.",
      ],
    },
    {
      year: "1999 - 1973",
      exhibitions: [
        "ART AL. Hotel Feria del Arte Moderno. (Galería Rina Bouwen). Valencia.",
        "FLASH ART. Feria de Arte Moderno. Hotel Majestic. Barcelona.",
        "Casa de Vacas del Retiro. Madrid.",
        "Museo de los Ángeles. Turégano. (Segovia).",
        "Galería Ignacio Várez. Madrid.",
        "Galería Pilar Parra. Madrid.",
        "Galería Carmen de la Guerra. Madrid.",
        "ARCO 91. Galería 10 Negritos. Madrid.",
        "ARCO 90. Galería Término. Madrid.",
        "Tres genios cuatro pintores. Galería Término. Madrid.",
        "Museo Antonio López. Tomelloso (Castilla La Mancha).",
        "Muestra Punto. Centro Colón. Madrid.",
        "Fondos del Ateneo de Madrid.",
        "Muestra de Arte Joven.  Universidad de Granada.",
        " Ayuntamiento de Valladolid Delegación de Gobierno País Vasco- Bilbao",
        "Caja de Ahorros de León.",
        " Ayuntamiento de Palma de Mallorca.",
        "Casa de la CulturA de Zaragoza y de La Coruña",
        "Muestra de Arte Joven. Círculo de Bellas Artes Madrid. Museo Provincial de Bellas Artes. Vitoria. Casa de Cultura. Zamora.",
        "Ateneo, Sala Santa Catalina. Madrid.",
        "Exposición itinerante Derechos Humanos. Madrid.",
        "Exposición Colegio Virgen del cortijo. Madrid.",
        "Exposición Club de Golf de La Moraleja. Madrid.",
        "Bienal del deporte en las Bellas Artes. Madrid.",
        "Escuela de Cerámica de Madrid. Madrid.",
        "Galería Bética. Madrid.",
        "Exposición Real Academia de Bellas Artes de San Fernando. Madrid.",
      ],
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
            JAIME SÁNCHEZ ALONSO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mb-8"
          >
            "El arte tiene más valor que la verdad por ser afirmador de la vida
            del ser humano."
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
        {/* Navegación por pestañas */}
        <nav className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {tabItems.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-light text-lg
                  transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                            JAIME SÁNCHEZ ALONSO
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

          {activeTab === "exposiciones" && (
            <motion.div
              key="exposiciones"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Exposiciones Individuales */}
              <div className="rounded-2xl bg-white shadow-lg p-8">
                <h3 className="text-3xl font-light text-gray-900 mb-8">
                  Exposiciones Individuales
                </h3>
                <div className="space-y-8">
                  {exposicionesIndividuales.map((yearGroup) => (
                    <div
                      key={yearGroup.year}
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <h4 className="text-2xl font-light text-gray-800 mb-4">
                        {yearGroup.year}
                      </h4>
                      <div className="space-y-2">
                        {yearGroup.exhibitions.map((exhibition, index) => (
                          <p
                            key={index}
                            className="text-gray-600 leading-relaxed"
                          >
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
          {activeTab === "exposiciones 2" && (
            <motion.div
              key="exposiciones 2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Exposiciones Colectivas */}
              <div className="rounded-2xl bg-white shadow-lg p-8">
                <h3 className="text-3xl font-light text-gray-900 mb-8">
                  Exposiciones Colectivas
                </h3>
                <div className="space-y-8">
                  {exposicionesColectivas.map((yearGroup) => (
                    <div
                      key={yearGroup.year}
                      className="border-b border-gray-100 pb-6 last:border-0"
                    >
                      <h4 className="text-2xl font-light text-gray-800 mb-4">
                        {yearGroup.year}
                      </h4>
                      <div className="space-y-2">
                        {yearGroup.exhibitions.map((exhibition, index) => (
                          <p
                            key={index}
                            className="text-gray-600 leading-relaxed"
                          >
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

          {activeTab === "colecciones" && (
            <motion.div
              key="colecciones"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-3xl font-light mb-8 text-gray-900">
                  Colecciones y Museos
                </h3>

                {/* Grid de categorías */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Colecciones */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">
                      Colecciones Destacadas
                    </h4>
                    <ul className="space-y-2">
                      <li className="text-gray-600">
                        {" "}
                        Fundación Caja Rioja, Logroño.
                      </li>
                      <li className="text-gray-600">
                        Banco de Vitoria, Madrid.
                      </li>
                      <li className="text-gray-600">
                        Caja de Ahorros Castilla La Mancha.
                      </li>
                      <li className="text-gray-600">
                        {" "}
                        Museo de los Ángeles, Turégano.
                      </li>
                      <li className="text-gray-600">Agromán S.A.</li>
                      <li className="text-gray-600">
                        {" "}
                        Colección de Dibujos de la Biblioteca Nacional de
                        Madrid.
                      </li>
                      <li className="text-gray-600">
                        {" "}
                        Colección Ateneo de Madrid.
                      </li>
                      <li className="text-gray-600">
                        {" "}
                        Colección Real Academia de Bellas Artes de San Fernando.
                        Madrid.
                      </li>
                      <li className="text-gray-600">
                        {" "}
                        Fundación Real Madrid. Madrid.
                      </li>
                      <li className="text-gray-600">
                        {" "}
                        Colecciones particulares en: París, Londres, New York,
                        Los Ángeles, Walnut Creek, Zurich, Milán, Génova y
                        Verona.
                      </li>
                      <li className="text-gray-600">
                        {" "}
                        España: Madrid, Barcelona, Bilbao, Zaragoza, Segovia,
                        Logroño, Sevilla, Burgos y Oviedo.
                      </li>
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
