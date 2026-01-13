"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

interface IntroAnimationProps {
  onComplete?: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState<number>(0);
  // Fase 0: Inicial - imagen de fondo con overlay
  // Fase 1: Logo aparece con fade elegante
  // Fase 2: Línea decorativa se expande
  // Fase 3: Texto aparece letra por letra
  // Fase 4: Todo hace fade out elegante
  // Fase 5: Completo - se oculta

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Secuencia de animación
    const phase1 = setTimeout(() => setAnimationPhase(1), 600);
    const phase2 = setTimeout(() => setAnimationPhase(2), 1800);
    const phase3 = setTimeout(() => setAnimationPhase(3), 2400);
    const phase4 = setTimeout(() => setAnimationPhase(4), 4500);
    const phase5 = setTimeout(() => {
      setAnimationPhase(5);
      document.body.style.overflow = "";
      // Notificar que la intro terminó
      onComplete?.();
    }, 5800);
    
    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(phase4);
      clearTimeout(phase5);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Texto para animar letra por letra
  const text = "Espacio de Arte Contemporáneo";
  const letters = text.split("");

  return (
    <AnimatePresence>
      {animationPhase !== 5 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100]"
        >
          {/* Imagen de fondo con efecto parallax sutil */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/obras/ciria/ciria8.jpg"
              alt="XinkuArt"
              fill
              priority
              className="object-cover"
              quality={90}
            />
          </motion.div>

          {/* Overlay oscuro con gradiente elegante */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/20"
          />

          {/* Overlay adicional para profundidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

          {/* Efecto de viñeta */}
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)"
            }}
          />

          {/* Contenedor central */}
          <div className="absolute inset-0 flex items-center justify-center z-[104]">
            <motion.div 
              className="flex flex-col items-center"
              animate={animationPhase >= 4 ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              
              {/* Logo con animación de revelación elegante */}
              <div className="relative overflow-hidden mb-8 sm:mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={animationPhase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ 
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative w-[180px] sm:w-[260px] md:w-[340px] lg:w-[400px] aspect-[3/1]"
                >
                  <Image
                    src="/images/logo/logoxinkuart.png"
                    alt="XinkuArt"
                    fill
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Línea decorativa expandible */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  animationPhase >= 2 
                    ? { scaleX: 1, opacity: 1 } 
                    : { scaleX: 0, opacity: 0 }
                }
                transition={{ 
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="w-20 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent origin-center mb-8 sm:mb-10"
              />
              
              {/* Texto "Espacio de Arte Contemporáneo" - letra por letra */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={animationPhase >= 3 ? { opacity: 1 } : { opacity: 0 }}
                  className={`${raleway.className} text-white/90 text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-light flex justify-center`}
                >
                  {letters.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 25 }}
                      animate={
                        animationPhase >= 3 
                          ? { opacity: 1, y: 0 } 
                          : { opacity: 0, y: 25 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: index * 0.035,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className={letter === " " ? "w-2 sm:w-3" : ""}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Esquinas decorativas minimalistas */}
          {/* Superior izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 && animationPhase < 4 ? { opacity: 0.2 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-6 sm:top-10 left-6 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 z-[104]"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={animationPhase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-[1px] h-full bg-white origin-top"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={animationPhase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-[1px] bg-white origin-left"
            />
          </motion.div>

          {/* Superior derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 && animationPhase < 4 ? { opacity: 0.2 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-6 sm:top-10 right-6 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 z-[104]"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={animationPhase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-[1px] h-full bg-white origin-top"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={animationPhase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 right-0 w-full h-[1px] bg-white origin-right"
            />
          </motion.div>

          {/* Inferior izquierda */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 && animationPhase < 4 ? { opacity: 0.2 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 z-[104]"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={animationPhase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 w-[1px] h-full bg-white origin-bottom"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={animationPhase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-left"
            />
          </motion.div>

          {/* Inferior derecha */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 && animationPhase < 4 ? { opacity: 0.2 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 z-[104]"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              animate={animationPhase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-0 w-[1px] h-full bg-white origin-bottom"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={animationPhase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-0 w-full h-[1px] bg-white origin-right"
            />
          </motion.div>

          {/* Línea de progreso sutil en la parte inferior */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationPhase >= 1 && animationPhase < 4 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-[105]"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={animationPhase >= 1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 4.8, ease: "linear" }}
              className="h-full bg-gradient-to-r from-red-600/60 via-red-500/40 to-red-600/20 origin-left"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}