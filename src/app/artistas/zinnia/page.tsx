"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});


// Exposiciones individuales de Zinnia Clavo


// Exposiciones colectivas seleccionadas de Zinnia Clavo


const ZinniaPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "/images/obras/zinnia/obra3.jpg",
      title: "Abstracción en negro",
      year: "2020",
    },
    {
      url: "/images/obras/zinnia/obra4.jpg",
      title: "Líneas inquietas",
      year: "2019",
    },
    {
      url: "/images/obras/zinnia/obra7.jpg",
      title: "Buscando ritmos",
      year: "2021",
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
            className="text-center space-y-24 px-4"
          >
            {/* Logo con margen aumentado */}
            <div className="relative w-[280px] sm:w-[400px] md:w-[500px] mx-auto mb-12">
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
                      Zinnia Clavo
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
              <p className="text-xl sm:text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto font-light italic leading-relaxed mt-6">
                La abstracción me ofrece posibilidades infinitas, una gran libertad.
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

      {/* Biografía del Artista */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Sobre la <span className="text-[#FF0000]">Artista</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/featured/artwork10.jpg"
                  alt="Zinnia Clavo"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#FF0000] rounded-sm -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-700"
            >
              <h3 className="text-3xl font-light mb-6">Zinnia Clavo</h3>
              <div className="w-16 h-0.5 bg-[#FF0000] mb-8" />
              
              <div className="space-y-4 font-light">
                <p>
                  La obra pictórica de Zinnia está en constante evolución. No deja de investigar y ahondar en su técnica definiendo un lenguaje propio difícil de catalogar. Una visión abstracta y desconceptualizada del mundo, conseguida a través de un intenso trabajo y una fuerte carga emocional que acaban formando un universo personal y único.
                </p>
                <p>
                  La abstracción me ofrece posibilidades infinitas, una gran libertad. Busco el máximo de expresión a través de la oposición de elementos. Me fascina la relación entre caos y equilibrio, entre movimiento y estabilidad, entre desasosiego y armonía.
                </p>
                <p>
                  Me interesan los juegos de luces y sombras, los contrastes, el dinamismo, las texturas, las transparencias. La relación entre las líneas rectas que el hombre ha creado, junto a las líneas ondulantes de la Naturaleza.
                </p>
                <p>
                  Reducir el color a blanco y negro me ayuda a desarrollar mi intención, a concentrarme en la expresividad y en el propio acto de pintar.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Formación</h4>
                  <ul className="space-y-2 text-sm font-light">
                    <li>• Historia del Arte. Filosofía y Letras. Universidad Autónoma de Madrid (1979-1984)</li>
                    <li>• Master Bellas Artes en la Universidad Jagellonska de Cracovia (1985-1987)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Reconocimientos</h4>
                  <ul className="space-y-2 text-sm font-light">
                    <li>• Premio Revelación, VIII Premios Nacionales a las Artes Plásticas (1993)</li>
                    <li>• Accesit. XII Premio de Pintura Blanco y Negro, Madrid (1992)</li>
                    <li>• Accesit. IX Premio Durán, Madrid (1991)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Sección de Exposiciones */}
      {/* Sección de CV */}
      <section className="relative py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              TRAYECTORIA PROFESIONAL
            </h2>
            <div className="w-20 h-0.5 bg-[#FF0000] mx-auto" />
          </motion.div>

          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl text-center"
            >
              <p className="text-lg text-gray-700 mb-12 font-light">
                Zinnia Clavo cuenta con una amplia trayectoria artística que incluye exposiciones individuales en galerías de renombre en Madrid, París, Londres y Nueva York, así como numerosas exposiciones colectivas internacionales.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-light text-gray-900 mb-4">Exposiciones destacadas recientes</h3>
                <ul className="space-y-2 text-gray-700 font-light">
                  <li>• Ojos del Barroco, Granada (2024)</li>
                  <li>• Buscando ritmos. Max Laniado Fine Arts, Nueva York (2021)</li>
                  <li>• Paintings from Spain. 10 Hanover - Hus Gallery, Londres (2018)</li>
                </ul>
              </div>
              
              <div className="flex flex-col items-center mt-12">
                <p className="text-gray-700 mb-6">
                  Para consultar el currículum completo de la artista, puede descargar el PDF a continuación:
                </p>
                
                <motion.a
                  href="/images/obras/zinnia/cv-oficial-ES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-4 bg-white border border-gray-200 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-md"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex-shrink-0">
                    <svg className="w-12 h-12 text-[#FF0000]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-xl font-medium text-gray-900 mb-1">Currículum Vitae</h4>
                    <p className="text-sm text-gray-500">PDF • Completo historial de exposiciones</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-[#FF0000] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                </motion.a>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-12 text-center"
                >
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    
                    <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-light text-[#FF0000] mb-2">100+</div>
                      <p className="text-gray-600">Exposiciones Realizadas</p>
                    </div>
                    <div className="h-16 w-px bg-gray-200 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-light text-[#FF0000] mb-2">4</div>
                      <p className="text-gray-600">Países con Exposiciones</p>
                    </div>
                  </div>
                </motion.div>
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

export default ZinniaPage;