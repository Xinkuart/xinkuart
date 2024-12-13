'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function QuienesSomosPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section a pantalla completa */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
        <Image
          src="/images/obras/lamo/lamo7.jpg"
          alt="XinkuArt Gallery"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="relative w-[300px] h-[80px] mx-auto">
                <Image
                  src="/images/logo/logoxinkuart.png"
                  alt="XinkuArt Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Slogan */}
            <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Donde el Arte{' '}
              <span className="text-[#FF0000]">
                Conecta
              </span>
              <br />
              con su Destino
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-gray-200"
            >
              Descubre un espacio donde los artistas contemporáneos más destacados
              encuentran a sus coleccionistas ideales
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="/obras"
                className="px-8 py-4 bg-[#FF0000] text-white hover:bg-red-700 
                  transition-colors duration-300 min-w-[200px] text-lg"
              >
                Descubrir Obras
              </Link>
              <Link 
                href="/artistas"
                className="px-8 py-4 border-2 border-white text-white 
                  hover:bg-white hover:text-black transition-colors duration-300 
                  min-w-[200px] text-lg"
              >
                Nuestros Artistas
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator con click */}
          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer 
              hover:transform hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to content"
          >
            <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-1 h-3 bg-white rounded-full"
              />
            </div>
          </motion.button>
        </div>
      </section>

      {/* Sección Nuestra Visión del Arte */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Nuestra Visión del Arte
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creemos en el poder transformador del arte contemporáneo y en su
              capacidad para conectar culturas, ideas y personas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Selección de Artistas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/obras/ciria/ciria3.jpg"
                  alt="Selección de Artistas"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light">Selección de Artistas</h3>
              <p className="text-gray-600 leading-relaxed">
                Trabajamos con artistas contemporáneos cuidadosamente
                seleccionados, cada uno con una visión única y una trayectoria
                sólida en el mundo del arte. Buscamos talentos que no solo
                destaquen por su técnica, sino también por su capacidad de
                innovación y su compromiso con la excelencia artística.
              </p>
            </motion.div>

            {/* Proceso Curatorial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/images/obras/ciria/ciria11.jpg"
                  alt="Proceso Curatorial"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-light">Proceso Curatorial</h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestro proceso curatorial se centra en crear diálogos
                significativos entre las obras y los espacios. Cada exposición
                está cuidadosamente diseñada para ofrecer una experiencia
                inmersiva que destaque la singularidad de cada pieza y su
                contribución al arte contemporáneo.
              </p>
            </motion.div>
          </div>

          {/* Compromiso con el Arte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-light mb-4">Apoyo al Artista</h4>
              <p className="text-gray-600">
                Proporcionamos a nuestros artistas el respaldo necesario para
                desarrollar su trabajo en las mejores condiciones, facilitando
                su crecimiento y proyección internacional.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-light mb-4">
                Conexión con Coleccionistas
              </h4>
              <p className="text-gray-600">
                Establecemos vínculos duraderos entre artistas y coleccionistas,
                garantizando que cada obra encuentre su lugar ideal y contribuya
                a enriquecer colecciones significativas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-light mb-4">Innovación Digital</h4>
              <p className="text-gray-600">
                Aprovechamos la tecnología para crear experiencias artísticas
                inmersivas, permitiendo que el arte sea accesible y apreciado en
                nuevas formas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Nuestra Misión */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                En XinkuArt, nos dedicamos a tender puentes entre artistas
                contemporáneos excepcionales y coleccionistas apasionados.
                Nuestra misión es proporcionar una plataforma donde el arte
                contemporáneo puede florecer y encontrar su hogar perfecto.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabajamos estrechamente con cada artista para asegurar que sus
                obras alcancen su máximo potencial en el mercado del arte,
                mientras ayudamos a los coleccionistas a descubrir piezas que
                resonarán con su visión y colección.
              </p>
            </div>
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/obras/ciria/ciria2.jpg" // Necesitaremos una imagen de la galería
                alt="XinkuArt Gallery Interior"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            ¿Interesado en nuestro trabajo?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Descubra nuestra colección de obras o contáctenos para obtener más
            información.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/obras"
              className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Ver Obras
            </Link>
            <Link
              href="/contacto"
              className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
