// components/obras/ObraGrid.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ============================================
// TIPOS
// ============================================

interface Obra {
  id: string;
  titulo: string;
  artista?: string; // ✅ OPCIONAL
  imageUrl: string;
  medidas: string;
  tecnica: string;
  año?: string;
  artistaNombre?: string;
}

interface ObraGridProps {
  obras: Obra[];
}

// ============================================
// COMPONENTE
// ============================================

export default function ObraGrid({ obras }: ObraGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {obras.map((obra, index) => (
        <motion.div
          key={obra.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <Link
            href={`/obras/${obra.id}`}
            className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Imagen de la obra */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <Image
                src={obra.imageUrl}
                alt={obra.titulo}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              
              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm uppercase tracking-wider">
                  Ver detalles
                </span>
              </div>
            </div>

            {/* Información de la obra */}
            <div className="p-5 space-y-2">
              <h3 className="font-medium text-gray-900 text-lg line-clamp-2 group-hover:text-[#FF0000] transition-colors">
                {obra.titulo}
              </h3>
              
              {obra.artistaNombre && (
                <p className="text-sm text-gray-600">
                  {obra.artistaNombre}
                </p>
              )}
              
              <div className="pt-2 space-y-1">
                <p className="text-xs text-gray-500">{obra.medidas}</p>
                <p className="text-xs text-gray-500">{obra.tecnica}</p>
                {obra.año && (
                  <p className="text-xs text-gray-500">{obra.año}</p>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}