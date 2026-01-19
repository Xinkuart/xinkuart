"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, } from "framer-motion";
import { Playfair_Display, Raleway } from "next/font/google";
import { ArrowRight, Sparkles, Target, Users, Lightbulb } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function QuienesSomosPage() {

  return (
    <div className="min-h-screen bg-black">
      {/* Sección Nuestra Misión con Split Screen */}
      <section className="relative h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[50vh] lg:h-full"
          >
            <Image
              src="/images/obras/ciria/ciria2.jpg"
              alt="XinkuArt Gallery"
              fill
              className="object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:to-black/80" />
          </motion.div>

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-black flex items-center justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0"
          >
            <div className="max-w-xl">
              <span
                className={`${raleway.className} text-xs uppercase tracking-[0.4em] text-red-600 font-medium mb-6 block`}
              >
                Quiénes Somos
              </span>
              <h2
                className={`${playfair.className} text-4xl md:text-5xl font-light text-white mb-8 leading-tight`}
              >
                Nuestra Misión
              </h2>

              <div className="space-y-6 mb-10">
                <p
                  className={`${raleway.className} text-lg text-white/80 leading-relaxed font-light`}
                >
                  En XinkuArt, nos dedicamos a tender puentes entre artistas
                  contemporáneos excepcionales y coleccionistas apasionados.
                  Nuestra misión es proporcionar una plataforma donde el arte
                  contemporáneo puede florecer y encontrar su hogar perfecto.
                </p>
                <p
                  className={`${raleway.className} text-lg text-white/80 leading-relaxed font-light`}
                >
                  Trabajamos estrechamente con cada artista para asegurar que
                  sus obras alcancen su máximo potencial en el mercado del arte,
                  mientras ayudamos a los coleccionistas a descubrir piezas que
                  resonarán con su visión y colección.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 text-white border-b-2 border-red-600 pb-2 hover:gap-5 transition-all duration-300 group"
                >
                  <span
                    className={`${raleway.className} text-sm uppercase tracking-[0.2em] font-medium`}
                  >
                    Contáctanos
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-red-600 group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sección Visión del Arte con Layout Asimétrico */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span
              className={`${raleway.className} text-xs uppercase tracking-[0.4em] text-red-600 font-medium mb-4 block`}
            >
              Nuestra Filosofía
            </span>
            <h2
              className={`${playfair.className} text-4xl md:text-5xl font-light text-black mb-6`}
            >
              Nuestra Visión del Arte
            </h2>
            <p
              className={`${raleway.className} text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed`}
            >
              Creemos en el poder transformador del arte contemporáneo y en su
              capacidad para conectar culturas, ideas y personas.
            </p>
          </motion.div>

          {/* Layout Asimétrico Innovador */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Imagen Grande Izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative h-[500px] lg:h-[700px] group overflow-hidden"
            >
              <Image
                src="/images/obras/ciria/ciria3.jpg"
                alt="Selección de Artistas"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3
                  className={`${playfair.className} text-3xl text-white mb-3`}
                >
                  Selección de Artistas
                </h3>
                <p
                  className={`${raleway.className} text-white/90 text-sm leading-relaxed font-light`}
                >
                  Trabajamos con artistas contemporáneos cuidadosamente
                  seleccionados, cada uno con una visión única y una trayectoria
                  sólida en el mundo del arte.
                </p>
              </div>
            </motion.div>

            {/* Contenido Derecha */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col justify-center space-y-8"
            >
              <div>
                <h3
                  className={`${playfair.className} text-3xl md:text-4xl font-light mb-6`}
                >
                  Excelencia Artística
                </h3>
                <p
                  className={`${raleway.className} text-gray-600 leading-relaxed font-light mb-6`}
                >
                  Buscamos talentos que no solo destaquen por su técnica, sino
                  también por su capacidad de innovación y su compromiso con la
                  excelencia artística.
                </p>
                <Link
                  href="/artistas"
                  className="inline-flex items-center gap-2 text-red-600 hover:gap-4 transition-all duration-300 group"
                >
                  <span
                    className={`${raleway.className} text-sm uppercase tracking-[0.2em] font-medium`}
                  >
                    Ver Artistas
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Tarjeta de estadística */}
              <div className="bg-black text-white p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <Sparkles className="text-red-600 mb-4" size={32} />
                  <h4
                    className={`${playfair.className} text-2xl mb-2 font-light`}
                  >
                    Trayectoria Internacional
                  </h4>
                  <p
                    className={`${raleway.className} text-white/70 text-sm font-light leading-relaxed`}
                  >
                    Nuestros artistas cuentan con reconocimiento en galerías y
                    museos de prestigio a nivel mundial.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Segunda Fila - Layout Invertido */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contenido Izquierda */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-center space-y-8 order-2 lg:order-1"
            >
              <div>
                <h3
                  className={`${playfair.className} text-3xl md:text-4xl font-light mb-6`}
                >
                  Proceso Curatorial
                </h3>
                <p
                  className={`${raleway.className} text-gray-600 leading-relaxed font-light mb-6`}
                >
                  Nuestro proceso curatorial se centra en crear diálogos
                  significativos entre las obras y los espacios. Cada exposición
                  está cuidadosamente diseñada para ofrecer una experiencia
                  inmersiva.
                </p>
                <Link
                  href="/exposiciones"
                  className="inline-flex items-center gap-2 text-red-600 hover:gap-4 transition-all duration-300 group"
                >
                  <span
                    className={`${raleway.className} text-sm uppercase tracking-[0.2em] font-medium`}
                  >
                    Ver Exposiciones
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Tarjeta de estadística */}
              <div className="bg-gray-50 p-8 relative overflow-hidden group border border-gray-100">
                <div className="relative z-10">
                  <Target className="text-red-600 mb-4" size={32} />
                  <h4
                    className={`${playfair.className} text-2xl mb-2 font-light`}
                  >
                    Experiencia Inmersiva
                  </h4>
                  <p
                    className={`${raleway.className} text-gray-600 text-sm font-light leading-relaxed`}
                  >
                    Destacamos la singularidad de cada pieza y su contribución
                    al arte contemporáneo mediante espacios cuidadosamente
                    diseñados.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Imagen Grande Derecha */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 relative h-[500px] lg:h-[700px] group overflow-hidden order-1 lg:order-2"
            >
              <Image
                src="/images/obras/ciria/ciria11.jpg"
                alt="Proceso Curatorial"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3
                  className={`${playfair.className} text-3xl text-white mb-3`}
                >
                  Curaduría de Excelencia
                </h3>
                <p
                  className={`${raleway.className} text-white/90 text-sm leading-relaxed font-light`}
                >
                  Cada exposición está meticulosamente curada para crear
                  narrativas visuales que conectan con el espectador a nivel
                  emocional e intelectual.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección Pilares con Iconos */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span
              className={`${raleway.className} text-xs uppercase tracking-[0.4em] text-red-600 font-medium mb-4 block`}
            >
              Nuestros Pilares
            </span>
            <h2
              className={`${playfair.className} text-4xl md:text-5xl font-light text-white mb-6`}
            >
              Compromiso con el Arte
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Apoyo al Artista",
                description:
                  "Proporcionamos a nuestros artistas el respaldo necesario para desarrollar su trabajo en las mejores condiciones, facilitando su crecimiento y proyección internacional.",
                delay: 0.1,
              },
              {
                icon: Target,
                title: "Conexión con Coleccionistas",
                description:
                  "Establecemos vínculos duraderos entre artistas y coleccionistas, garantizando que cada obra encuentre su lugar ideal y contribuya a enriquecer colecciones significativas.",
                delay: 0.2,
              },
              {
                icon: Lightbulb,
                title: "Innovación Digital",
                description:
                  "Aprovechamos la tecnología para crear experiencias artísticas inmersivas, permitiendo que el arte sea accesible y apreciado en nuevas formas.",
                delay: 0.3,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm p-10 h-full border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:bg-white/10">
                  <item.icon
                    className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300"
                    size={40}
                  />
                  <h4
                    className={`${playfair.className} text-2xl font-light text-white mb-4`}
                  >
                    {item.title}
                  </h4>
                  <p
                    className={`${raleway.className} text-white/70 leading-relaxed font-light text-sm`}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Espectacular */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`${playfair.className} text-4xl md:text-6xl font-light mb-6 leading-tight`}
            >
              ¿Interesado en nuestro trabajo?
            </h2>
            <p
              className={`${raleway.className} text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto leading-relaxed`}
            >
              Descubre nuestra colección de obras o contáctanos para obtener más
              información sobre nuestros artistas y servicios.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/obras">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${raleway.className} group px-10 py-5 bg-black text-white hover:bg-gray-800 
                    transition-all duration-300 min-w-[200px] text-sm uppercase tracking-[0.2em] font-medium`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Ver Obras
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </motion.button>
              </Link>

              <Link href="/contacto">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "rgba(0,0,0,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`${raleway.className} px-10 py-5 border-2 border-black/20 text-black 
                    hover:bg-black hover:text-white transition-all duration-300 min-w-[200px] 
                    text-sm uppercase tracking-[0.2em] font-light`}
                >
                  Contactar
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
