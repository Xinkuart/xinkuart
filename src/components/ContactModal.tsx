'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Mail, Phone } from 'lucide-react';

interface Obra {
  id: string;
  imageUrl: string;
  titulo: string;
  medidas: string;
  tecnica: string;
  año?: string;
  artistaNombre: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  obra: Obra;
}

export default function ContactModal({ isOpen, onClose, obra }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Header con botón de cerrar */}
            <div className="sticky top-0 h-14 sm:h-16 bg-gray-50 flex items-center px-4 sm:px-6 z-10">
              <h2 className="text-lg sm:text-xl font-light text-gray-800">
                Información de contacto
              </h2>
              <button
                onClick={onClose}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 
                  hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Información de la obra */}
              <div className="p-4 sm:p-6 bg-gray-50">
                <div className="aspect-square relative rounded overflow-hidden mb-4 sm:mb-6">
                  <Image
                    src={obra.imageUrl}
                    alt={obra.titulo}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-gray-800 mb-1">
                      {obra.titulo}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600">
                      {obra.artistaNombre}
                    </p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Medidas:</span> {obra.medidas}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Técnica:</span> {obra.tecnica}
                    </p>
                    {obra.año && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Año:</span> {obra.año}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="p-4 sm:p-6 bg-white">
                <div className="h-full flex flex-col justify-center items-center space-y-6 sm:space-y-8">
                  <div className="text-center">
                    <p className="text-base sm:text-lg text-gray-700 mb-2">
                      Si está interesado en esta obra, contacte con nosotros:
                    </p>
                    <p className="text-sm text-gray-500">
                      Le proporcionaremos todo tipo de información
                    </p>
                  </div>

                  <div className="space-y-4 w-full max-w-sm">
                    <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Teléfono</p>
                        <p className="text-base sm:text-lg text-gray-800">+34 635 914 646</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF0000]" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Email</p>
                        <p className="text-base sm:text-lg text-gray-800 break-all">xinkuart@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}