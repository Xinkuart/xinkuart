"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Artist {
  name: string;
  imageUrl: string;
  slug: string;
}

export default function ArtistasPage() {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'represented'>('represented');
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  
  const artists = React.useMemo<Artist[]>(() => [
    { name: 'Jose Manuel Ciria', imageUrl: '/images/featured/artwork1.jpg', slug: 'ciria' },    
    { name: 'Manolo Oyonarte', imageUrl: '/images/featured/artwork2.jpg', slug: 'oyonarte' },
    { name: 'Jesús del Peso', imageUrl: '/images/featured/artwork11.jpg', slug: 'delpeso' },  
    { name: 'William Gaber', imageUrl: '/images/featured/artwork6.jpg', slug: 'gaber' },
    { name: 'Rivelino Murrieta', imageUrl: '/images/featured/artwork12.jpg', slug: 'murrieta' },
    { name: 'Zinnia Clavo', imageUrl: '/images/featured/artwork10.jpg', slug: 'zinnia' },
    { name: 'Lamo de Espinosa', imageUrl: '/images/featured/artwork9.jpg', slug: 'lamo' },
    { name: 'Hilario Bravo', imageUrl: '/images/featured/artwork4.jpg', slug: 'bravo' },  
    { name: 'Aurelio Ayela', imageUrl: '/images/featured/artwork3.jpg', slug: 'ayela' },
    { name: 'Eduardo Infante', imageUrl: '/images/featured/artwork5.jpg', slug: 'infante' },
    { name: 'Pedro Pasquín', imageUrl: '/images/featured/artwork7.jpg', slug: 'pasquin' },
    
    
    
  ], []);

  // Ordenar artistas alfabéticamente para la vista de lista
  const sortedArtists = React.useMemo(() => {
    return [...artists].sort((a, b) => a.name.localeCompare(b.name));
  }, [artists]);

  // Agrupar artistas por columnas para la vista de lista (4 columnas)
  const groupedArtists = React.useMemo(() => {
    const groups = [];
    const itemsPerColumn = Math.ceil(sortedArtists.length / 4);
    
    for (let i = 0; i < 4; i++) {
      const start = i * itemsPerColumn;
      const end = start + itemsPerColumn;
      groups.push(sortedArtists.slice(start, end));
    }
    return groups;
  }, [sortedArtists]);

  // Crear columnas para la vista represented - 5 columnas con 2 artistas cada una
  const createColumns = () => {
    const columns = [];
    const artistsPerColumn = 2;
    
    for (let i = 0; i < Math.ceil(artists.length / artistsPerColumn); i++) {
      const startIndex = i * artistsPerColumn;
      const columnArtists = artists.slice(startIndex, startIndex + artistsPerColumn);
      
      // Determinar el tipo de columna basado en si es par o impar
      const columnType = (i % 2 === 0) ? 'odd' : 'even'; // 0,2,4 = odd | 1,3 = even
      
      columns.push({
        type: columnType,
        artists: columnArtists,
        index: i
      });
    }
    
    return columns;
  };

  const columns = createColumns();
  const maxVisibleColumns = 3; // Máximo 3 columnas visibles
  const maxColumnIndex = Math.max(0, columns.length - maxVisibleColumns);

  const nextColumn = () => {
    setCurrentColumnIndex(prev => Math.min(prev + 1, maxColumnIndex));
  };

  const prevColumn = () => {
    setCurrentColumnIndex(prev => Math.max(prev - 1, 0));
  };

  // Obtener las columnas visibles
  const getVisibleColumns = () => {
    return columns.slice(currentColumnIndex, currentColumnIndex + maxVisibleColumns);
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-2xl mx-auto text-center px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            ARTISTAS REPRESENTADOS
          </h1>
          <p className="text-gray-600 font-light">
            Descubre nuestra selecta colección de artistas contemporáneos
          </p>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex justify-center gap-8">
          <button
            onClick={() => setViewMode('list')}
            className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
              viewMode === 'list'
                ? 'text-black border-b border-black pb-1'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            REPRESENTED
          </button>
          <button
            onClick={() => setViewMode('represented')}
            className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
              viewMode === 'represented'
                ? 'text-black border-b border-black pb-1'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            LIST
          </button>
        </div>
      </div>

      {/* Content based on view mode */}
      {viewMode === 'represented' ? (
        <ListView groupedArtists={groupedArtists} />
      ) : (
        <RepresentedView 
          visibleColumns={getVisibleColumns()}
          hoveredArtist={hoveredArtist}
          setHoveredArtist={setHoveredArtist}
          currentColumnIndex={currentColumnIndex}
          maxColumnIndex={maxColumnIndex}
          nextColumn={nextColumn}
          prevColumn={prevColumn}
          totalColumns={columns.length}
        />
      )}
    </div>
  );
}

// Componente para la vista de lista (LIST)
interface ListViewProps {
  groupedArtists: Artist[][];
}

const ListView = ({ groupedArtists }: ListViewProps) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
      >
        {groupedArtists.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-8 lg:space-y-10">
            {column.map((artist, index) => (
              <motion.div
                key={artist.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link 
                  href={`/artistas/${artist.slug}`}
                  className="block group"
                >
                  <div className="relative overflow-hidden">
                    <div className="text-gray-400 group-hover:text-black transition-all duration-500 text-sm md:text-base lg:text-lg xl:text-xl tracking-wide uppercase font-light leading-relaxed transform group-hover:translate-x-1 group-hover:scale-[1.02] transition-transform">
                      {artist.name}
                    </div>
                    <div className="h-px bg-gradient-to-r from-red-500 to-transparent w-0 group-hover:w-full transition-all duration-500 mt-1"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Componente para la vista de columnas deslizantes (REPRESENTED)
interface RepresentedViewProps {
  visibleColumns: Array<{type: string; artists: Artist[]; index: number}>;
  hoveredArtist: string | null;
  setHoveredArtist: (slug: string | null) => void;
  currentColumnIndex: number;
  maxColumnIndex: number;
  nextColumn: () => void;
  prevColumn: () => void;
  totalColumns: number;
}

const RepresentedView = ({ 
  visibleColumns,
  hoveredArtist, 
  setHoveredArtist,
  currentColumnIndex,
  maxColumnIndex,
  nextColumn,
  prevColumn,
  totalColumns
}: RepresentedViewProps) => {

  return (
    <div className="w-full relative">
      {/* Navigation arrows - Solo mostrar si hay más columnas */}
      {totalColumns > 3 && (
        <>
          {currentColumnIndex > 0 && (
            <motion.button
              onClick={prevColumn}
              className="fixed left-8 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-black transition-all duration-300 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
            </motion.button>
          )}
          
          {currentColumnIndex < maxColumnIndex && (
            <motion.button
              onClick={nextColumn}
              className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 hover:border-black transition-all duration-300 flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 hover:text-black transition-colors" />
            </motion.button>
          )}
        </>
      )}

      {/* Columns Grid - Ocupar todo el ancho */}
      <div className="w-full h-screen overflow-hidden">
        <motion.div 
          className="w-full h-full grid grid-cols-3 gap-4 px-4"
          key={currentColumnIndex}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          {visibleColumns.map((column, columnIndex) => (
            <motion.div 
              key={`${currentColumnIndex}-${columnIndex}`} 
              className="h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: columnIndex * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <ColumnLayout
                column={column}
                hoveredArtist={hoveredArtist}
                setHoveredArtist={setHoveredArtist}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Componente para el layout de columnas
interface ColumnLayoutProps {
  column: {type: string; artists: Artist[]; index: number};
  hoveredArtist: string | null;
  setHoveredArtist: (slug: string | null) => void;
}

const ColumnLayout = ({ 
  column,
  hoveredArtist, 
  setHoveredArtist 
}: ColumnLayoutProps) => {
  const { type, artists } = column;

  if (type === 'odd') {
    // Columnas impares: imagen horizontal arriba + imagen cuadrada abajo
    return (
      <div className="h-full flex flex-col gap-4">
        {/* Imagen horizontal (60% de la altura) */}
        {artists[0] && (
          <div className="h-3/5">
            <ArtistCard
              artist={artists[0]}
              hoveredArtist={hoveredArtist}
              setHoveredArtist={setHoveredArtist}
              aspectRatio="horizontal"
            />
          </div>
        )}
        
        {/* Imagen cuadrada (40% de la altura) */}
        {artists[1] && (
          <div className="h-2/5">
            <ArtistCard
              artist={artists[1]}
              hoveredArtist={hoveredArtist}
              setHoveredArtist={setHoveredArtist}
              aspectRatio="square"
            />
          </div>
        )}
      </div>
    );
  } else {
    // Columnas pares: dos imágenes cuadradas
    return (
      <div className="h-full flex flex-col gap-4">
        {artists.slice(0, 2).map((artist,) => (
          <div key={artist.slug} className="h-1/2">
            <ArtistCard
              artist={artist}
              hoveredArtist={hoveredArtist}
              setHoveredArtist={setHoveredArtist}
              aspectRatio="square"
            />
          </div>
        ))}
      </div>
    );
  }
};

// Componente individual para cada artista
interface ArtistCardProps {
  artist: Artist;
  hoveredArtist: string | null;
  setHoveredArtist: (slug: string | null) => void;
  aspectRatio: 'horizontal' | 'square';
}

const ArtistCard = ({ 
  artist, 
  hoveredArtist, 
  setHoveredArtist,
}: ArtistCardProps) => {
  const isHovered = hoveredArtist === artist.slug;
  
  return (
    <motion.div
      className="relative group overflow-hidden h-full cursor-pointer bg-gray-100"
      onMouseEnter={() => setHoveredArtist(artist.slug)}
      onMouseLeave={() => setHoveredArtist(null)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/artistas/${artist.slug}`} className="block h-full">
        <div className="relative w-full h-full">
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            fill
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered ? 'grayscale-0 brightness-90' : 'grayscale brightness-100'
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          {/* Overlay oscuro */}
          <motion.div 
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Nombre del artista */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-white text-base md:text-lg font-light tracking-wider">
              {artist.name}
            </h3>
          </motion.div>

          {/* Botón "Ver Artista" */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white text-xs tracking-widest transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              VER ARTISTA
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};