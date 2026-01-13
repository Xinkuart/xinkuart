"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Playfair_Display, Raleway } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

const heroImages = [
  {
    left: "/images/hero/he11.png",
    right: "/images/hero/he9.png",
  },
  {
    left: "/images/hero/he5.png",
    right: "/images/hero/he10.png",
  },
  {
    left: "/images/hero/he1.png",
    right: "/images/hero/he2.png",
  },
  {
    left: "/images/hero/he7.png",
    right: "/images/hero/he8.png",
  },
];

const TOTAL_STEPS = 6;
const SCROLL_COOLDOWN = 150;

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [scrollStep, setScrollStep] = useState<number>(0);
  const [isHeroComplete, setIsHeroComplete] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

  const leftControls = useAnimation();
  const rightControls = useAnimation();
  const opacityControls = useAnimation();

  // Cambio automático de imágenes
  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev: number) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Actualizar animaciones cuando cambia el paso
  useEffect(() => {
    const slideProgress = Math.min(scrollStep, 5) / 5;
    const slideDistance = scrollStep >= 6 ? 1200 : 1000 * slideProgress;
    const overlayOpacity = scrollStep < 6 ? 1 : 0;

    leftControls.start({
      x: -slideDistance,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    });

    rightControls.start({
      x: slideDistance,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    });

    opacityControls.start({
      opacity: overlayOpacity,
      transition: { duration: 0.5, ease: "easeOut" },
    });

    if (scrollStep >= TOTAL_STEPS) {
      setIsHeroComplete(true);
    } else {
      setIsHeroComplete(false);
    }
  }, [scrollStep, leftControls, rightControls, opacityControls]);

  // Función para manejar el cambio de paso
  const handleStepChange = useCallback((direction: "up" | "down") => {
    const now = Date.now();
    if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
    lastScrollTime.current = now;

    if (direction === "down") {
      setScrollStep((prev: number) => Math.min(TOTAL_STEPS, prev + 1));
    } else {
      setScrollStep((prev: number) => Math.max(0, prev - 1));
    }
  }, []);

  // Scroll hijacking
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const isInHero = rect.top >= -10 && rect.top <= 10;

      if (isHeroComplete && e.deltaY > 0) {
        return;
      }

      if (e.deltaY < 0 && window.scrollY < 50) {
        e.preventDefault();
        handleStepChange("up");
        return;
      }

      if (isInHero && !isHeroComplete) {
        e.preventDefault();
        if (e.deltaY > 0) {
          handleStepChange("down");
        } else {
          handleStepChange("up");
        }
      }
    };

    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const isInHero = rect.top >= -10 && rect.top <= 10;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      const timeDiff = Date.now() - touchStartTime;

      if (Math.abs(deltaY) > 50 && timeDiff < 300) {
        if (isHeroComplete && deltaY > 0) {
          return;
        }

        if (deltaY < 0 && window.scrollY < 50) {
          e.preventDefault();
          handleStepChange("up");
          touchStartY = touchY;
          return;
        }

        if (isInHero && !isHeroComplete) {
          e.preventDefault();
          if (deltaY > 0) {
            handleStepChange("down");
          } else {
            handleStepChange("up");
          }
          touchStartY = touchY;
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isHeroComplete, handleStepChange]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* CONTENIDO BASE - SE REVELA AL HACER SCROLL */}
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

          {/* COLUMNA DERECHA - Contenido tipográfico más compacto */}
          <div className="col-span-12 md:col-span-5 relative flex items-center justify-center bg-black px-6 sm:px-8 lg:px-12 py-12 md:py-0">
            
            {/* Línea decorativa vertical */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isLoaded ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.5, ease: "easeOut" }}
              className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-red-600/30 to-transparent origin-top hidden md:block"
            />

            <div className="max-w-md w-full relative z-10">
              {/* Eyebrow con estilo premium */}
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

              {/* Logo XinkuArt más compacto */}
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

              {/* Línea decorativa roja elegante */}
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

              {/* Subtítulo en una sola línea */}
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

              {/* CTAs más compactos */}
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
                    whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.6)" }}
                    whileTap={{ scale: 0.98 }}
                    className={`${raleway.className} border border-white/20 hover:bg-white/5 text-white/70 hover:text-white px-6 py-3 text-[10px] font-light uppercase tracking-[0.2em] transition-all duration-300`}
                  >
                    Nuestros Artistas
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Elemento decorativo flotante más sutil y pequeño */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 0.02 } : {}}
              transition={{
                duration: 2,
                delay: 2,
              }}
              className="absolute -right-20 -bottom-20 text-[300px] font-bold text-white select-none pointer-events-none"
            >
              X
            </motion.div>
          </div>
        </div>
      </div>

      {/* IMÁGENES DESLIZANTES - CAPA SUPERIOR */}
      <div className="absolute inset-0 pointer-events-none z-50">
        {/* Imagen Izquierda */}
        <motion.div
          animate={leftControls}
          initial={{ x: 0 }}
          className="absolute left-0 top-0 w-1/2 h-full"
        >
          <div className="relative w-full h-full bg-black">
            {heroImages.map((images, index) => (
              <motion.div
                key={`left-${index}`}
                initial={{ opacity: index === 0 ? 1 : 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images.left}
                  alt={`XinkuArt Gallery ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagen Derecha */}
        <motion.div
          animate={rightControls}
          initial={{ x: 0 }}
          className="absolute right-0 top-0 w-1/2 h-full"
        >
          <div className="relative w-full h-full bg-black">
            {heroImages.map((images, index) => (
              <motion.div
                key={`right-${index}`}
                initial={{ opacity: index === 0 ? 1 : 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images.right}
                  alt={`Arte Contemporáneo ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        

        {/* Logo, Indicador de progreso y "Descubre más" - OCULTO EN MÓVIL */}
        <motion.div
          animate={opacityControls}
          initial={{ opacity: 1 }}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-6"
        >
          {/* Logo pequeño */}
          <div className="relative w-[120px] sm:w-[150px] aspect-[3/1]">
            <Image
              src="/images/logo/logoxinkuart.png"
              alt="XinkuArt"
              fill
              className="object-contain opacity-90"
            />
          </div>

          {/* Barra de progreso elegante */}
          <div className="w-24 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-red-600"
              initial={{ width: "0%" }}
              animate={{ width: `${(Math.min(scrollStep, 5) / 5) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>

          {/* Texto e icono */}
          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-white"
          >
            <span
              className={`${raleway.className} text-[10px] uppercase tracking-[0.3em] text-white/60`}
            >
              Descubre más
            </span>
            <ChevronDown size={18} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}