'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import Image from 'next/image';
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#262626]">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="/images/obras/ciria/ciria11.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#262626]" />
        
        <div className="relative h-full flex flex-col items-center justify-center">
          <motion.div 
            className="text-center space-y-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-6xl text-white font-light tracking-[0.2em] uppercase ${raleway.className}`}>
                ¿Hablamos de Arte?
              </h1>
              <div className="w-20 h-1 bg-[#FF0000] mx-auto" />
            </div>
            <p className="text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Descubre cómo podemos ayudarte a encontrar la obra perfecta para tu espacio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative min-h-[60vh] flex flex-col justify-between py-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-24"
          >
            <div className="relative w-[300px] h-[100px]">
              <Image
                src="/images/logo/logoxinkuart.png"
                alt="XinkuArt Logo"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Contact Grid - Centered */}
          <div className="flex justify-center mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-4xl">
              <motion.div 
                className="flex items-start gap-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-16 h-16 rounded-lg bg-[#FF0000]/10 flex items-center justify-center
                  group-hover:bg-[#FF0000] transition-colors duration-300">
                  <Mail className="w-7 h-7 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl text-white font-light">Email</h3>
                  <a href="mailto:info@xinkuart.com" 
                    className="text-xl text-white/70 hover:text-[#FF0000] transition-colors duration-300">
                    info@xinkuart.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-16 h-16 rounded-lg bg-[#FF0000]/10 flex items-center justify-center
                  group-hover:bg-[#FF0000] transition-colors duration-300">
                  <Phone className="w-7 h-7 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl text-white font-light">Teléfono</h3>
                  <a href="tel:+34635914646" 
                    className="text-xl text-white/70 hover:text-[#FF0000] transition-colors duration-300">
                    +34 635 914 646
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-16 h-16 rounded-lg bg-[#FF0000]/10 flex items-center justify-center
                  group-hover:bg-[#FF0000] transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl text-white font-light">Ubicación</h3>
                  <p className="text-xl text-white/70">Madrid, España</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-8 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-16 h-16 rounded-lg bg-[#FF0000]/10 flex items-center justify-center
                  group-hover:bg-[#FF0000] transition-colors duration-300">
                  <Globe className="w-7 h-7 text-[#FF0000] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl text-white font-light">Galería Virtual</h3>
                  <p className="text-xl text-white/70">Disponible 24/7</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Closing Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-2xl text-white/90 font-light italic">
              "El arte es la expresión de los sueños más profundos, una ventana a las emociones que nos conectan con el mundo"
            </p>
            <div className="w-16 h-1 bg-[#FF0000] mx-auto mt-8" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}