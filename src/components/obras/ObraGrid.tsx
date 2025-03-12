'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {X, ChevronLeft, ChevronRight, ArrowRight, Shuffle } from 'lucide-react';
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
  const [relatedObras, setRelatedObras] = useState<Obra[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  // Configuración de paginación - ajustada para mostrar obras en tamaño cuadrado
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 12; // xl - 4 filas de 3
      if (window.innerWidth >= 1024) return 9; // lg - 3 filas de 3
      if (window.innerWidth >= 768) return 9; // md - 3 filas de 3
      return 6; // sm and below - 3 filas de 2
    }
    return 9; // Default para server
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(obras.length / itemsPerPage);

  useEffect(() => {
    setObras(initialObras);
  }, [initialObras]);

  // Efecto para seleccionar obras relacionadas aleatorias
  useEffect(() => {
    if (selectedObra) {
      // Filtrar obras del mismo artista excluyendo la obra seleccionada
      const artistWorks = obras.filter(o => 
        o.artistaNombre === selectedObra.artistaNombre && 
        o.id !== selectedObra.id
      );
      
      // Seleccionar 3 obras aleatorias o menos si no hay suficientes
      if (artistWorks.length <= 3) {
        setRelatedObras(artistWorks);
      } else {
        // Mezclar el array y tomar los primeros 3 elementos
        const shuffled = [...artistWorks].sort(() => 0.5 - Math.random());
        setRelatedObras(shuffled.slice(0, 3));
      }
    }
  }, [selectedObra, obras]);

  const getCurrentPageObras = () => {
    const startIndex = currentPage * itemsPerPage;
    return obras.slice(startIndex, startIndex + itemsPerPage);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Función para obtener nuevas obras relacionadas aleatorias
  const refreshRelatedObras = () => {
    if (selectedObra) {
      const artistWorks = obras.filter(o => 
        o.artistaNombre === selectedObra.artistaNombre && 
        o.id !== selectedObra.id
      );
      
      if (artistWorks.length > 3) {
        const shuffled = [...artistWorks].sort(() => 0.5 - Math.random());
        setRelatedObras(shuffled.slice(0, 3));
      }
    }
  };

  return (
    <div className="relative" ref={gridRef}>
      {/* Contador de obras */}
      <div className="mb-8">
        <p className="text-gray-500 text-sm">Mostrando {getCurrentPageObras().length} de {obras.length} obras</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {getCurrentPageObras().map((obra, index) => (
            <motion.div
              key={obra.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedObra(obra)}
            >
              {/* Contenedor cuadrado para la imagen */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={obra.imageUrl}
                  alt={obra.titulo}
                  fill
                  className="object-cover transition-all duration-700 ease-in-out 
                    group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
                />
                
                {/* Overlay con información que aparece al pasar el cursor */}
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-4
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <p className="text-[#FF0000] text-sm mb-1">
                      {obra.artistaNombre}
                    </p>
                    <h3 className="text-white text-lg font-light mb-1 line-clamp-2">
                      {obra.titulo}
                    </h3>
                    <p className="text-white/80 text-sm mb-1">
                      {obra.medidas}
                    </p>
                    <p className="text-white/70 text-sm line-clamp-2">
                      {obra.tecnica}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navegación de paginación */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            Página {currentPage + 1} de {totalPages}
          </p>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className={`w-10 h-10 flex items-center justify-center rounded 
                ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800 hover:bg-gray-100'}`}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center">
              {/* Botones de paginación */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Lógica para mostrar números cercanos a la página actual
                let pageToShow = i;
                if (totalPages > 5) {
                  if (currentPage > 1 && currentPage < totalPages - 2) {
                    pageToShow = currentPage - 2 + i;
                  } else if (currentPage >= totalPages - 2) {
                    pageToShow = totalPages - 5 + i;
                  }
                }
                
                if (pageToShow < totalPages) {
                  return (
                    <button
                      key={pageToShow}
                      onClick={() => handlePageChange(pageToShow)}
                      className={`w-10 h-10 flex items-center justify-center rounded 
                        ${currentPage === pageToShow 
                          ? 'bg-[#FF0000] text-white' 
                          : 'text-gray-800 hover:bg-gray-100'}`}
                    >
                      {pageToShow + 1}
                    </button>
                  );
                }
                return null;
              })}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={`w-10 h-10 flex items-center justify-center rounded 
                ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800 hover:bg-gray-100'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Modal de vista detallada */}
      <AnimatePresence>
        {selectedObra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
              onClick={() => setSelectedObra(null)}
            />
            
            <motion.div 
              className="relative w-full max-w-[1600px] max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl z-10"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setSelectedObra(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-md 
                  hover:bg-[#FF0000]/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                {/* Columna de imagen a la izquierda */}
                <div className="relative lg:w-3/4 h-[50vh] lg:h-[90vh] bg-black flex items-center justify-center">
                  <div className="relative w-full h-full">
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
                </div>

                {/* Panel de información a la derecha */}
                <div className="relative lg:w-1/4 bg-black p-6 lg:p-8 overflow-y-auto">
                  <div className="space-y-8">
                    {/* Cabecera con título y artista */}
                    <div className="border-l-4 border-[#FF0000] pl-4">
                      <p className="text-[#FF0000] font-medium mb-2">
                        {selectedObra.artistaNombre}
                      </p>
                      <h2 className="text-2xl text-white font-medium">
                        {selectedObra.titulo}
                      </h2>
                    </div>

                    {/* Datos técnicos */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-[#FF0000] text-sm font-medium tracking-wider uppercase mb-2">Técnica</h3>
                        <p className="text-white/90 leading-relaxed">
                          {selectedObra.tecnica}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-[#FF0000] text-sm font-medium tracking-wider uppercase mb-2">Dimensiones</h3>
                        <p className="text-white/90">
                          {selectedObra.medidas}
                        </p>
                      </div>
                      
                      {selectedObra.año && (
                        <div>
                          <h3 className="text-[#FF0000] text-sm font-medium tracking-wider uppercase mb-2">Año</h3>
                          <p className="text-white/90">
                            {selectedObra.año}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Otras obras del artista - con aleatorización */}
                    {relatedObras.length > 0 && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-[#FF0000] text-sm font-medium tracking-wider uppercase">
                            Más del artista
                          </h3>
                          
                          {relatedObras.length > 3 && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                refreshRelatedObras();
                              }}
                              className="text-white/70 hover:text-[#FF0000] p-1 transition-colors"
                              title="Ver otras obras"
                            >
                              <Shuffle size={16} />
                            </button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2">
                          {relatedObras.map((obra) => (
                            <div 
                              key={obra.id} 
                              className="aspect-square relative rounded overflow-hidden cursor-pointer border border-white/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedObra(obra);
                              }}
                            >
                              <Image
                                src={obra.imageUrl}
                                alt={obra.titulo}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-300"
                                sizes="(max-width: 1024px) 20vw, 10vw"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Botón de contacto */}
                    <button
                      onClick={() => {
                        setShowContactModal(true);
                        setContactObra(selectedObra);
                      }}
                      className="w-full py-3 bg-[#FF0000] text-white font-medium rounded
                               hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Solicitar Información</span>
                      <ArrowRight size={18} />
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