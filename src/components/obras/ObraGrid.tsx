'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

interface Obra {
  id: string;
  imageUrl: string;
  titulo: string;
  medidas: string;
  artista: string;
  tecnica: string;
  año?: string;
  artistaNombre: string;
}

interface ObraGridProps {
  obras: Obra[];
}

const ObraGrid: React.FC<ObraGridProps> = ({ obras: initialObras }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [obras, setObras] = useState<Obra[]>([]);
  const [selectedObra, setSelectedObra] = useState<Obra | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactObra, setContactObra] = useState<Obra | null>(null);
  const [clickedObraId, setClickedObraId] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 15;
  const totalPages = Math.ceil(obras.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setObras(initialObras);
  }, [initialObras]);

  const getCurrentPageObras = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return obras.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative" ref={gridRef}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {getCurrentPageObras().map((obra, index) => {
            const isClicked = clickedObraId === obra.id;
            
            return (
              <motion.div
                key={obra.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden cursor-pointer"
                onClick={() => setSelectedObra(obra)}
              >
                <Image
                  src={obra.imageUrl}
                  alt={obra.titulo}
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out 
                    ${isClicked ? 'scale-125' : 'group-hover:scale-110'}`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                
                {/* Overlay optimizado para móvil */}
                <div className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80
                  transition-all duration-500 flex flex-col justify-between p-3 sm:p-4 md:p-6
                  opacity-0 group-hover:opacity-100`}>
                  <div className="flex flex-col justify-between h-full">
                    <div className="text-white text-center">
                      <p className="text-white font-light mb-1 sm:mb-2 tracking-wider text-sm sm:text-base">
                        {obra.artistaNombre}
                      </p>
                      <h3 className="font-light tracking-wider leading-tight text-base sm:text-lg md:text-xl mb-1 sm:mb-2 line-clamp-2">
                        {obra.titulo}
                      </h3>
                      <div className="space-y-0.5 sm:space-y-1">
                        <p className="text-gray-200 font-light text-xs sm:text-sm">
                          {obra.medidas}
                        </p>
                        <p className="text-gray-300 font-light text-xs sm:text-sm line-clamp-2">
                          {obra.tecnica}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedObra(obra);
                      }}
                      className="w-full py-2 bg-white/10 backdrop-blur-sm border border-white/20 
                        text-white text-sm sm:text-base flex items-center justify-center gap-2
                        transition-all duration-300 hover:bg-white hover:text-black mt-2 sm:mt-0"
                    >
                      <ZoomIn size={16} className="sm:w-5 sm:h-5" />
                      Ver obra
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Navegación */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-12 gap-8">
          <button
            onClick={() => handlePageChange((currentPage - 1 + totalPages) % totalPages)}
            className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800
              transition-colors duration-300 text-sm sm:text-base"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>

          <span className="text-lg font-light">
            {currentPage + 1} / {totalPages}
          </span>

          <button
            onClick={() => handlePageChange((currentPage + 1) % totalPages)}
            className="flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800
              transition-colors duration-300 text-sm sm:text-base"
          >
            Siguiente
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* El resto del código del modal se mantiene igual */}
      <AnimatePresence>
        {selectedObra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div 
              className="absolute inset-0 bg-black/95"
              onClick={() => setSelectedObra(null)}
            />
            
            <motion.div 
              className="relative w-[95%] h-[90vh] max-w-[1600px] mx-auto bg-[#1a1a1a] rounded-lg overflow-hidden z-10"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
            >
              <button
                onClick={() => setSelectedObra(null)}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/50 hover:bg-[#FF0000] transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="h-full flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-3/4 h-[50vh] lg:h-full bg-black/50">
                  <Image
                    src={selectedObra.imageUrl}
                    alt={selectedObra.titulo}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    quality={100}
                    priority
                  />
                </div>

                <div className="relative w-full lg:w-1/4 p-8 overflow-y-auto">
                  <div className="space-y-10">
                    <div className="border-l-2 border-[#FF0000] pl-6">
                      <p className="text-[#FF0000] text-xl font-light mb-3">
                        {selectedObra.artistaNombre}
                      </p>
                      <h2 className="text-3xl text-white font-light">
                        {selectedObra.titulo}
                      </h2>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h3 className="text-[#FF0000] text-sm tracking-wider mb-3">TÉCNICA</h3>
                        <p className="text-white/80 font-light leading-relaxed">
                          {selectedObra.tecnica}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-[#FF0000] text-sm tracking-wider mb-3">DIMENSIONES</h3>
                        <p className="text-white/80 font-light">
                          {selectedObra.medidas}
                        </p>
                      </div>
                      
                      {selectedObra.año && (
                        <div>
                          <h3 className="text-[#FF0000] text-sm tracking-wider mb-3">AÑO</h3>
                          <p className="text-white/80 font-light">
                            {selectedObra.año}
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setShowContactModal(true);
                        setContactObra(selectedObra);
                      }}
                      className="w-full py-4 mt-8 bg-[#FF0000] text-white font-light
                               hover:bg-red-700 transition-colors duration-300"
                    >
                      Solicitar Información
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {contactObra && (
        <ContactModal
          isOpen={showContactModal}
          onClose={() => {
            setShowContactModal(false);
            setContactObra(null);
          }}
          obra={contactObra}
        />
      )}
    </div>
  );
};

export default ObraGrid;