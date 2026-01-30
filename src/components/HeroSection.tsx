"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Playfair_Display, Raleway } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="grid grid-cols-12 gap-0 h-full">
          {/* COLUMNA IZQUIERDA - Imagen artística a sangre */}
          <div className="col-span-12 md:col-span-7 relative h-[50vh] md:h-full bg-black overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/hero/he14.png"
                  alt="XinkuArt - Arte Contemporáneo"
                  fill
                  className="object-cover object-left-top"
                  priority
                  quality={95}
                />
              </div>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA - Contenido tipográfico */}
          <div className="col-span-12 md:col-span-5 relative flex items-center justify-center bg-black px-6 sm:px-8 lg:px-12 py-12 md:py-0">
            {/* Línea decorativa vertical */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isLoaded ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-red-600/30 to-transparent origin-top hidden md:block"
            />

            <div className="max-w-md w-full relative z-10">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-4"
              >
                <span
                  className={`${raleway.className} text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-red-600 font-medium`}
                >
                  Galería de Arte Contemporáneo
                </span>
              </motion.div>

              {/* Logo XinkuArt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.2,
                  delay: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-4"
              >
                <div className="relative w-[200px] sm:w-[240px] lg:w-[280px] aspect-[3/1]">
                  <Image
                    src="/images/logo/logoxinkuart.png"
                    alt="XinkuArt Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Línea decorativa roja */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isLoaded ? { scaleX: 1 } : {}}
                transition={{
                  duration: 1.5,
                  delay: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-16 h-[2px] bg-gradient-to-r from-red-600 to-red-600/20 mb-5 origin-left"
              />

              {/* Título y descripción */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6"
              >
                <h1
                  className={`${playfair.className} text-xl sm:text-2xl lg:text-3xl font-normal text-white leading-tight tracking-wide mb-3 whitespace-nowrap`}
                >
                  Espacio de Arte Contemporáneo
                </h1>
                <p
                  className={`${raleway.className} text-xs sm:text-sm text-white/50 font-light leading-relaxed tracking-wide`}
                >
                  Descubre obras de artistas consolidados y emergentes en un
                  espacio virtual único.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <Link href="/obras">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${raleway.className} group relative overflow-hidden bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-all duration-500`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Explorar Obras
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </span>
                  </motion.button>
                </Link>

                <Link href="/artistas">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(255,255,255,0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`${raleway.className} border border-white/20 hover:bg-white/5 text-white/70 hover:text-white px-6 py-3 text-[10px] font-light uppercase tracking-[0.2em] transition-all duration-300`}
                  >
                    Nuestros Artistas
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Elemento decorativo flotante */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 0.02 } : {}}
              transition={{
                duration: 2,
                delay: 2,
              }}
              className="absolute -right-20 -bottom-20 text-[300px] font-bold text-white select-none pointer-events-none hidden md:block"
            >
              X
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}