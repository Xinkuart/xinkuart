"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Artist {
  name: string;
  imageUrl: string;
  slug: string;
}

export default function ArtistasPage() {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'represented' | 'list'>('represented');
  
  // Memoizar el array de artistas para evitar recreación en cada render
  const artists = React.useMemo<Artist[]>(() => [
    { name: 'Jose Manuel Ciria', imageUrl: '/images/featured/artwork1.jpg', slug: 'ciria' },
    { name: 'Manolo Oyonarte', imageUrl: '/images/featured/artwork2.jpg', slug: 'oyonarte' },
    { name: 'Aurelio Ayela', imageUrl: '/images/featured/artwork3.jpg', slug: 'ayela' },
    { name: 'Hilario Bravo', imageUrl: '/images/featured/artwork4.jpg', slug: 'bravo' },
    { name: 'Eduardo Infante', imageUrl: '/images/featured/artwork5.jpg', slug: 'infante' },
    { name: 'William Gaber', imageUrl: '/images/featured/artwork6.jpg', slug: 'gaber' },
    { name: 'Pedro Pasquín', imageUrl: '/images/featured/artwork7.jpg', slug: 'pasquin' },
    { name: 'Zinnia Clavo', imageUrl: '/images/featured/artwork10.jpg', slug: 'zinnia' },
    { name: 'Jesús del Peso', imageUrl: '/images/featured/artwork11.jpg', slug: 'delpeso' },
    { name: 'Lamo de Espinosa', imageUrl: '/images/featured/artwork9.jpg', slug: 'lamo' }
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
            onClick={() => setViewMode('represented')}
            className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
              viewMode === 'represented'
                ? 'text-black border-b border-black pb-1'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            LIST
          </button>
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
          
          
        </div>
      </div>

      {/* Content based on view mode */}
      {viewMode === 'list' ? (
        <RepresentedView 
          artists={artists} 
          hoveredArtist={hoveredArtist}
          setHoveredArtist={setHoveredArtist}
        />
      ) : (
        <ListView groupedArtists={groupedArtists} />
      )}
    </div>
  );
}

// Componente para la vista de imágenes (REPRESENTED)
interface RepresentedViewProps {
  artists: Artist[];
  hoveredArtist: string | null;
  setHoveredArtist: (slug: string | null) => void;
}

const RepresentedView = ({ artists, hoveredArtist, setHoveredArtist }: RepresentedViewProps) => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        {/* COLUMNA 1 */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <ArtistCard artist={artists[3]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[3].slug} />
            <ArtistCard artist={artists[2]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[2].slug} />
          </div>
          <ArtistCard artist={artists[1]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[1].slug} isLarge />
          <ArtistCard artist={artists[8]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[8].slug} isLarge />
        </div>

        {/* COLUMNA 2 */}
        <div className="space-y-6">
          <ArtistCard artist={artists[0]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[0].slug} isLarge />
          <ArtistCard artist={artists[5]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[5].slug} isLarge />
          <ArtistCard artist={artists[9]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[9].slug} isLarge />
        </div>

        {/* COLUMNA 3 */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">    
            <ArtistCard artist={artists[4]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[4].slug} />
            <ArtistCard artist={artists[6]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[6].slug} />
          </div>
          <ArtistCard artist={artists[7]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[7].slug} isLarge />
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:hidden">
        {artists.map((artist) => (
          <motion.div
            key={artist.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArtistCard 
              artist={artist}
              onHover={setHoveredArtist}
              isHovered={hoveredArtist === artist.slug}
              isLarge={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

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
                    {/* Línea animada que aparece al hover */}
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

interface ArtistCardProps {
  artist: Artist;
  onHover: (slug: string | null) => void;
  isHovered: boolean;
  isLarge?: boolean;
}

const ArtistCard = ({ artist, onHover, isHovered, isLarge = false }: ArtistCardProps) => {
  return (
    <div 
      className={`relative group ${isLarge ? 'h-[400px]' : 'h-[280px]'}`}
      onMouseEnter={() => onHover(artist.slug)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover object-center grayscale transition-all duration-700 ease-out transform group-hover:scale-[1.03] group-hover:grayscale-0"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : -20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute bottom-3 left-0 p-4 z-10">
            <div className="text-white text-lg font-light tracking-wider">
              {artist.name}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href={`/artistas/${artist.slug}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`
                  px-4 py-2
                  bg-white/10 backdrop-blur-sm
                  border border-white/50
                  hover:bg-white/20
                  text-white 
                  ${isLarge ? 'text-sm' : 'text-xs'}
                  tracking-wider
                  transition-all duration-300
                  flex items-center gap-2
                `}>
                  VER ARTISTA
                </div>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};