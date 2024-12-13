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

  const ITEMS_PER_PAGE = 20; // 4x5 grid
  const totalPages = Math.ceil(obras.length / ITEMS_PER_PAGE);

  useEffect(() => {
    // Mezclar obras aleatoriamente al inicio
    const shuffledObras = [...initialObras].sort(() => Math.random() - 0.5);
    setObras(shuffledObras);
  }, [initialObras]);

  const getCurrentPageObras = () => {
    const startIndex = currentPage * ITEMS_PER_PAGE;
    return obras.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Scroll al inicio
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleObraClick = (obra: Obra) => {
    if (window.innerWidth >= 1024) {
      if (clickedObraId === obra.id) {
        setClickedObraId(null);
      } else {
        setClickedObraId(obra.id);
      }
    }
  };

  const handleContactClick = (e: React.MouseEvent, obra: Obra) => {
    e.stopPropagation();
    setContactObra(obra);
    setShowContactModal(true);
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
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
                onClick={() => handleObraClick(obra)}
              >
                <Image
                  src={obra.imageUrl}
                  alt={obra.titulo}
                  fill
                  className={`object-cover transition-all duration-700 ease-in-out 
                    ${isClicked ? 'scale-125' : 'group-hover:scale-110'}`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                
                {/* Overlay con nombre del artista y detalles */}
                <div className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80
                  transition-all duration-500 flex flex-col justify-between p-3 md:p-6
                  ${isClicked ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  
                  <div className={`text-white text-center transition-all duration-500 ease-out
                    ${isClicked ? 'scale-100 translate-y-0' : 'group-hover:translate-y-0 translate-y-4'}`}>
                    {/* Nombre del artista */}
                    <p className={`text-white font-light mb-2 tracking-wider
                      transition-all duration-300
                      ${isClicked ? 'lg:text-xl' : 'text-sm md:text-base'}`}>
                      {obra.artistaNombre}
                    </p>
                    <h3 className={`font-light mb-1 md:mb-2 tracking-wider leading-tight
                      transition-all duration-300
                      ${isClicked ? 'lg:text-3xl' : 'text-base md:text-xl'}`}>
                      {obra.titulo}
                    </h3>
                    <div className={`space-y-0.5 md:space-y-1 transition-all duration-300
                      ${isClicked ? 'lg:space-y-3' : ''}`}>
                      <p className={`text-gray-200 font-light
                        transition-all duration-300
                        ${isClicked ? 'lg:text-xl' : 'text-xs md:text-sm'}`}>
                        {obra.medidas}
                      </p>
                      <p className={`text-gray-300 font-light line-clamp-2
                        transition-all duration-300
                        ${isClicked ? 'lg:text-lg lg:line-clamp-none' : 'text-xs md:text-sm'}`}>
                        {obra.tecnica}
                      </p>
                      {obra.año && (
                        <p className={`text-gray-400 font-light
                          transition-all duration-300
                          ${isClicked ? 'lg:text-lg' : 'text-xs md:text-sm'}`}>
                          {obra.año}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className={`space-y-2 transition-all duration-500 ease-out
                    ${isClicked ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedObra(obra);
                      }}
                      className="w-full py-2 bg-white/10 backdrop-blur-sm border border-white/20 
                        text-white text-sm md:text-base flex items-center justify-center gap-2
                        transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      <ZoomIn size={16} className="md:w-5 md:h-5" />
                      Ver obra
                    </button>
                    <button
                      onClick={(e) => handleContactClick(e, obra)}
                      className="w-full py-2 bg-[#FF0000] text-white text-sm md:text-base
                        transition-colors duration-300 hover:bg-red-700"
                    >
                      Solicitar Información
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
              transition-colors duration-300 text-sm md:text-base"
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
              transition-colors duration-300 text-sm md:text-base"
          >
            Siguiente
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Modal de vista completa */}
      <AnimatePresence>
        {selectedObra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedObra(null)}
          >
            <button
              onClick={() => setSelectedObra(null)}
              className="absolute top-4 right-4 text-white p-2 rounded-full 
                bg-black/50 hover:bg-[#FF0000] transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="relative w-[90vw] h-[90vh]">
              <Image
                src={selectedObra.imageUrl}
                alt={selectedObra.titulo}
                fill
                className="object-contain"
                sizes="90vw"
                quality={100}
                priority
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <p className="text-[#FF0000] text-xl font-light mb-2">
                {selectedObra.artistaNombre}
              </p>
              <h3 className="text-2xl font-light mb-2">{selectedObra.titulo}</h3>
              <p className="text-gray-300">
                {selectedObra.medidas} - {selectedObra.tecnica}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal de contacto */}
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