"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Monoton } from "next/font/google";
import { Montserrat } from "next/font/google";

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const heroImages = [
  "/images/hero/hs1.jpg",
  "/images/hero/hs2.jpg",
  "/images/hero/hs3.jpg",
];

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Cambio automático de imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 1200); // Duración de la animación de salida
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 bg-black"
    >
      {/* Slider de Imágenes de Fondo */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {heroImages.map((image, index) =>
            index === currentImageIndex ? (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={`XinkuArt Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={95}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Overlay Gradiente para Legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8 md:p-12 lg:p-16">
        {/* Título y Slogan - Abajo Izquierda */}
        <div className="mt-auto mb-8 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            {/* Título XINKUART con tipografía retro */}
            <h1
              className={`${monoton.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-4 md:mb-6 tracking-wider`}
              style={{
                textShadow: "0 0 40px rgba(220, 38, 38, 0.6)",
              }}
            >
              XINKUART
            </h1>

            {/* Línea decorativa */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="w-32 h-[2px] bg-red-600 mb-6 md:mb-8 origin-left"
            />

            {/* Subtítulo Gallery */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`${montserrat.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-light uppercase tracking-[0.3em] mb-6 md:mb-8`}
            >
              Gallery
            </motion.p>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`${montserrat.className} text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-xl mb-8 md:mb-10`}
            >
              Donde el arte contemporáneo cobra vida y las emociones encuentran
              su expresión más pura
            </motion.p>

            {/* Botón Descubre Más */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${montserrat.className} group relative overflow-hidden px-8 sm:px-10 md:px-12 py-4 md:py-5 bg-red-600 text-white 
                  text-sm sm:text-base uppercase tracking-[0.2em] font-medium transition-all duration-300
                  hover:bg-red-700 backdrop-blur-sm`}
              >
                <span className="relative z-10">Descubre Más</span>

                {/* Efecto de brillo al hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Logo Central Inferior */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2"
        >
          <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px]">
            <Image
              src="/images/logo/logoxinkuart.png"
              alt="XinkuArt Logo"
              fill
              className="object-contain opacity-90"
              priority
            />
          </div>

          {/* Indicador de progreso elegante */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-6 flex justify-center gap-2"
          >
            {heroImages.map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  width: currentImageIndex === index ? "32px" : "8px",
                  backgroundColor:
                    currentImageIndex === index
                      ? "rgb(220, 38, 38)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="h-[2px] rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Elementos Decorativos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 border border-white/10 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.2 }}
          className="absolute bottom-32 right-16 sm:bottom-40 sm:right-20 md:bottom-48 md:right-24 hidden sm:block"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border border-red-600/20 rounded-full" />
        </motion.div>
      </div>

      {/* Transición de Salida Elegante */}
      {isExiting && (
        <>
          {/* Cortina desde arriba */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 h-1/2 bg-black origin-top z-50"
          />

          {/* Cortina desde abajo */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-black origin-bottom z-50"
          />

          {/* Logo que desaparece con elegancia */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center z-[60]"
          >
            <div className="relative w-[300px] h-[100px]">
              <Image
                src="/images/logo/logoxinkuart.png"
                alt="XinkuArt"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}