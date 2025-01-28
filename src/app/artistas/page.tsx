"use client";

import { motion, MotionProps } from 'framer-motion'; // Añadimos MotionProps
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Artist {
  name: string;
  imageUrl: string;
  slug: string;
}

// Definimos las interfaces para los props con motion
interface MotionDivProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

export default function ArtistasPage() {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [selectedObra, setSelectedObra] = useState<null | any>(null);
  
  const artists: Artist[] = [
    { name: 'Jose Manuel Ciria', imageUrl: '/images/featured/artwork1.jpg', slug: 'ciria' },
    { name: 'Manolo Oyonarte', imageUrl: '/images/featured/artwork2.jpg', slug: 'oyonarte' },
    { name: 'Aurelio Ayela', imageUrl: '/images/featured/artwork3.jpg', slug: 'ayela' },
    { name: 'Hilario Bravo', imageUrl: '/images/featured/artwork4.jpg', slug: 'bravo' },
    { name: 'Eduardo Infante', imageUrl: '/images/featured/artwork5.jpg', slug: 'infante' },
    { name: 'William Gaber', imageUrl: '/images/featured/artwork6.jpg', slug: 'gaber' },
    { name: 'Pedro Pasquín', imageUrl: '/images/featured/artwork7.jpg', slug: 'pasquin' },
    { name: 'Jaime Sánchez Alonso', imageUrl: '/images/featured/artwork8.jpg', slug: 'alonso' },
    { name: 'José María Lamo de Espinosa', imageUrl: '/images/featured/artwork9.jpg', slug: 'lamo' }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-2xl mx-auto text-center px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            Artistas Representados
          </h1>
          <p className="text-gray-600 font-light">
            Descubre nuestra selecta colección de artistas contemporáneos
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
            <ArtistCard artist={artists[3]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[3].slug} />
            <ArtistCard artist={artists[2]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[2].slug} />
            </div>
            <ArtistCard artist={artists[1]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[1].slug} isLarge />
            <ArtistCard artist={artists[8]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[8].slug} isLarge />
        </div>

        <div className="space-y-6">
            <ArtistCard artist={artists[0]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[0].slug} isLarge />
            <ArtistCard artist={artists[5]} onHover={setHoveredArtist} isHovered={hoveredArtist === artists[5].slug} isLarge />
        </div>

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
    </div>
  );
}
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