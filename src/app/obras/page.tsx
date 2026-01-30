"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ObraGrid from "@/components/obras/ObraGrid";

// Función para mezclar array aleatoriamente
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// ============================================
// TIPOS - SOLUCIÓN A LOS ERRORES
// ============================================

interface Obra {
  id: string;
  titulo: string;
  artista?: string;
  imageUrl: string;
  medidas?: string;      // ✅ AÑADE EL ?
  tecnica?: string;      // ✅ AÑADE EL ?
  año?: string;
  artistaNombre?: string;
}

export default function ObrasPage() {
  const [artistaSeleccionado, setArtistaSeleccionado] = useState("");
  const [obrasAleatorias, setObrasAleatorias] = useState<Obra[]>([]); // ✅ CORREGIDO
  const artistas = [
    {
      id: "ciria",
      nombre: "Jose Manuel Ciria",
      obras: [
        {
          id: "ciria-28",
          titulo: "Fosfeno mezclado con otro tiempo",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/momento3.jpg",
          medidas: "175 x 175 cm",
          tecnica: "Óleo sobre lienzo con impresión digital",
          año: "2022",
        },
        {
          id: "ciria-27",
          titulo: "La china el pocolomo y la ventana negra",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/momento2.jpg",
          medidas: "175 x 175 cm",
          tecnica: "Óleo sobre lienzo con impresión digital",
          año: "2022",
        },
        {
          id: "ciria-25",
          titulo: "Bretón, Eluard, Ernst y la luna",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria25.jpg",
          medidas: "175 x 175 cm",
          tecnica: "Óleo sobre lienzo con impresión digital",
          año: "2022",
        },
        {
          id: "ciria-24",
          titulo: "Ventana girada",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria24.jpg",
          medidas: "175 x 175 cm",
          tecnica: "Óleo sobre lienzo con impresión digital",
          año: "2022",
        },
        {
          id: "ciria-23",
          titulo: "La puerta de Ishtar",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria23.jpg",
          medidas: "175 x 175 cm",
          tecnica: "Óleo sobre lienzo con impresión digital",
          año: "2022",
        },
        {
          id: "ciria-22",
          titulo: "Camamesa",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria22.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-21",
          titulo: "Pequeñas Decisiones",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria21.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-20",
          titulo: "Ansiedad",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria20.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo y collage de tejidos diversos sobre madera",
          año: "2022",
        },
        {
          id: "ciria-19",
          titulo: "Diana II",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria19.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo y collage de tejidos diversos sobre madera",
          año: "2022",
        },
        {
          id: "ciria-18",
          titulo: "Mis Arboles",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria18.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-17",
          titulo: "Bola Blanca",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria17.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo y collage de tejidos diversos sobre madera",
          año: "2022",
        },
        {
          id: "ciria-16",
          titulo: "Viñetas",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria16.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo y collage de tejidos diversos sobre madera",
          año: "2022",
        },
        {
          id: "ciria-14",
          titulo: "Escalones",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/momento1.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-15",
          titulo: "Nueva Ventana",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria15.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo y collage de tejidos diversos sobre madera",
          año: "2022",
        },
        {
          id: "ciria-11",
          titulo: "Dos Paisajes",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria12.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo y collage de tejidos diversos sobre madera",
          año: "2022",
        },
        {
          id: "ciria-12",
          titulo: "Recolector de Miradas",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria13.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-13",
          titulo: "Estructura Collage",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria14.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo y collage de tejidos diversos sobre madera",
          año: "2022",
        },
        {
          id: "ciria-1",
          titulo: "Antes",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria1.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-2",
          titulo: "Apuntado en algún cuaderno",
          imageUrl: "/images/obras/ciria/ciria2.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-3",
          titulo: "Teatral ante la línea (No recuerdo)",
          imageUrl: "/images/obras/ciria/ciria3.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-26",
          titulo: "Cajas Mentales y Aureola",
          imageUrl: "/images/obras/ciria/ciria26.jpg",
          medidas: "175 x 175 cm",
          tecnica: "Óleo sobre lienzo con impresión digital",
          año: "2022",
        },
        {
          id: "ciria-4",
          titulo: "Máquina de coser",
          imageUrl: "/images/obras/ciria/ciria4.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta y óleo sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-5",
          titulo: "Musa y Venus (Rebelión)",
          imageUrl: "/images/obras/ciria/ciria5.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-6",
          titulo: "Habitación llena de batallas navales",
          imageUrl: "/images/obras/ciria/ciria6.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Óleo sobre liezo con impresión digital",
          año: "2022",
        },
        {
          id: "ciria-7",
          titulo: "Cortado sobre la página de un cómic",
          imageUrl: "/images/obras/ciria/ciria7.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-8",
          titulo: "El Deseo Eterno",
          imageUrl: "/images/obras/ciria/ciria8.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta y óleo sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-9",
          titulo: "Habitación cerrada de Lovecraft y Auster",
          imageUrl: "/images/obras/ciria/ciria9.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022",
        },
        {
          id: "ciria-10",
          titulo: "Inmensas discrepancias",
          imageUrl: "/images/obras/ciria/ciria10.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta y óleo sobre lienzo",
          año: "2022",
        },

        // ... resto de obras
      ],
    },
    {
      id: "oyonarte",
      nombre: "Manolo Oyonarte",
      obras: [
        {
          id: "oyonarte-29",
          titulo: "Evidencia imposible E10F",
          imageUrl: "/images/obras/oyonarte/obra30.jpg",
          medidas: "60 x 60 cm",
          tecnica: "Técnica Mixta sobre lienzo",
        },
        {
          id: "oyonarte-28",
          titulo: "Evidencia imposible E4J",
          imageUrl: "/images/obras/oyonarte/obra29.jpg",
          medidas: "60 x 60 cm",
          tecnica: "Técnica Mixta sobre lienzo",
        },
        {
          id: "oyonarte-27",
          titulo: "Actions and erosions E1G",
          imageUrl: "/images/obras/oyonarte/obra28.jpg",
          tecnica: "Técnica Mixta sobre lienzo",
        },
        {
          id: "oyonarte-26",
          titulo: "Nenufares y Twombly. Diptico",
          imageUrl: "/images/obras/oyonarte/obra27.jpg",
          medidas: "160 x 315 cm",
          tecnica: "Técnica Mixta sobre lienzo",
        },
        {
          id: "oyonarte-9",
          titulo: "Alice´s antimirror. E3J",
          imageUrl: "/images/obras/oyonarte/obra10.jpg",
          medidas: "110 x 150 cm",
          tecnica: "Técnica Mixta sobre lienzo",
        },
        {
          id: "oyonarte-10",
          titulo: "Alice´s antimirror. E1J",
          imageUrl: "/images/obras/oyonarte/obra11.jpg",
          medidas: "120 x 120 cm",
          tecnica: "Técnica Mixta sobre lienzo",
        },
        {
          id: "oyonarte-11",
          titulo: "Evidencia imposible E1B",
          imageUrl: "/images/obras/oyonarte/obra12.jpg",
          medidas: "60 x 60 cm",
          tecnica: "Técnica Mixta sobre lienzo",
        },
        {
          id: "oyonarte-12",
          titulo: "Formas encontradas E5H",
          imageUrl: "/images/obras/oyonarte/obra13o.jpg",
          medidas: "100 x 100 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-13",
          titulo: "Lethal pink E1E",
          imageUrl: "/images/obras/oyonarte/obra14.jpg",
          medidas: "160 x 270 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-14",
          titulo: "Lethal harmony E20",
          imageUrl: "/images/obras/oyonarte/obra15.jpg",
          medidas: "100 x 100 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-16",
          titulo: "Lethal harmony. E8F",
          imageUrl: "/images/obras/oyonarte/obra19.jpeg",
          medidas: "100 x 100 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-17",
          titulo: "Lethal harmony. E12H",
          imageUrl: "/images/obras/oyonarte/obra20.jpg",
          medidas: "130 x 194 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-18",
          titulo: "Alice's Antimirror",
          imageUrl: "/images/obras/oyonarte/obra21.jpg",
          medidas: "130 x 194 cm",
          tecnica: "Técnica Mixta sobre Lienzo Tríptico",
        },
        {
          id: "oyonarte-19",
          titulo: "Evidencia Inasible E5F",
          imageUrl: "/images/obras/oyonarte/obra22.png",
          medidas: "60 x 60 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-20",
          titulo: "Evidencia Inasible E4J",
          imageUrl: "/images/obras/oyonarte/oyonarte4.jpg",
          medidas: "60 x 60 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-22",
          titulo: "Presencias Intangibles E5H",
          imageUrl: "/images/obras/oyonarte/obra23.jpg",
          medidas: "120 x 120 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-23",
          titulo: "Mundos Encontrados E4F",
          imageUrl: "/images/obras/oyonarte/obra24.jpg",
          medidas: "120 x 120 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-24",
          titulo: "Lethal Pink E3F",
          imageUrl: "/images/obras/oyonarte/obra25.jpg",
          medidas: "95 x 160 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-25",
          titulo: "Los Nenúfares y Twombly",
          imageUrl: "/images/obras/oyonarte/obra26.jpg",
          medidas: "190 x 600 cm",
          tecnica: "Técnica Mixta sobre Lienzo",
        },
        {
          id: "oyonarte-1",
          titulo: "Realidades sin Nombre.Z1",
          imageUrl: "/images/obras/oyonarte/obra1.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta",
        },
        {
          id: "oyonarte-2",
          titulo: "Realidades sin Nombre.Z3",
          imageUrl: "/images/obras/oyonarte/obra2.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta sobre lienzo",
        },
        {
          id: "oyonarte-3",
          titulo: "Realidades sin Nombre.Z4",
          imageUrl: "/images/obras/oyonarte/obra3.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta sobre lienzo",
        },
        {
          id: "oyonarte-4",
          titulo: "Realidades sin Nombre.Z6",
          imageUrl: "/images/obras/oyonarte/obra4.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta sobre lienzo",
        },
        {
          id: "oyonarte-5",
          titulo: "Realidades sin Nombre.Z5",
          imageUrl: "/images/obras/oyonarte/obra5.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta sobre lienzo",
        },
        {
          id: "oyonarte-6",
          titulo: "Realidades sin Nombre.Z7",
          imageUrl: "/images/obras/oyonarte/obra6.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta sobre lienzo",
        },
        {
          id: "oyonarte-7",
          titulo: "Realidades sin Nombre.Z11",
          imageUrl: "/images/obras/oyonarte/obra7.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta sobre lienzo",
        },
        {
          id: "oyonarte-8",
          titulo: "Realidades sin Nombre.Z10",
          imageUrl: "/images/obras/oyonarte/obra8.jpg",
          medidas: "200 x 200 cm",
          tecnica: "Técnica mixta sobre lienzo",
        },

        // ... resto de obras
      ],
    },
    {
      id: "gaber",
      nombre: "William Gaber",
      obras: [
        {
          id: "gaber-31",
          titulo: "Miraba mi reflejo desde el agua",
          imageUrl: "/images/obras/gaber/obra64.jpg",
          medidas: "130 x 180 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-30",
          titulo: "Un agujero que conecta el agua con el cielo",
          imageUrl: "/images/obras/gaber/obra63.jpg",
          medidas: "150 x 150 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-29",
          titulo: "Siempre quise un espacio III",
          imageUrl: "/images/obras/gaber/obra62.jpg",
          medidas: "130 x 180 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-28",
          titulo: "Siempre quise un espacio II",
          imageUrl: "/images/obras/gaber/obra61.jpg",
          medidas: "130 x 180 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-27",
          titulo: "Siempre quise un espacio",
          imageUrl: "/images/obras/gaber/obra60.jpg",
          medidas: "130 x 180 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-26",
          titulo: "Veo y quiero ver más",
          imageUrl: "/images/obras/gaber/obra59.jpg",
          medidas: "150 x 150 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-25",
          titulo: "Buena Piel",
          imageUrl: "/images/obras/gaber/obra58.jpg",
          medidas: "60 x 60 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-24",
          titulo: "Belleza Inhabitable",
          imageUrl: "/images/obras/gaber/obra57.jpg",
          medidas: "60 x 60 cm",
          tecnica: "Óleo sobre Tela",
          año: "2024",
        },
        {
          id: "gaber-16",
          titulo: "Monumento #P8",
          imageUrl: "/images/obras/gaber/obra45.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-13",
          titulo: "Monumento #P1",
          imageUrl: "/images/obras/gaber/obra41.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-17",
          titulo: "Monumento #P9",
          imageUrl: "/images/obras/gaber/obra46.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-21",
          titulo: "Monumento #P17",
          imageUrl: "/images/obras/gaber/obra54.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-22",
          titulo: "Monumento #P18",
          imageUrl: "/images/obras/gaber/obra55.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-23",
          titulo: "Monumento #P19",
          imageUrl: "/images/obras/gaber/obra56.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-20",
          titulo: "Monumento #P12",
          imageUrl: "/images/obras/gaber/obra50.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-19",
          titulo: "Monumento #P11",
          imageUrl: "/images/obras/gaber/obra49.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-18",
          titulo: "Monumento #P10",
          imageUrl: "/images/obras/gaber/obra47.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        
        {
          id: "gaber-15",
          titulo: "Monumento #P6",
          imageUrl: "/images/obras/gaber/obra44.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-14",
          titulo: "Monumento #P5",
          imageUrl: "/images/obras/gaber/obra43.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        {
          id: "gaber-12",
          titulo: "Monumento #P4",
          imageUrl: "/images/obras/gaber/obra42.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre Lienzo",
          año: "2023",
        },
        
        {
          id: "gaber-1",
          titulo: "Monumento #P13",
          imageUrl: "/images/obras/gaber/obra51.jpg",
          medidas: "150 x 200 cm",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        {
          id: "gaber-2",
          titulo: "Monumento #P16",
          imageUrl: "/images/obras/gaber/obra52.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        {
          id: "gaber-3",
          titulo: "Monumento #P07",
          imageUrl: "/images/obras/gaber/obra38.jpg",
          medidas: "180 x 130 cm",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        {
          id: "gaber-4",
          titulo: "Monumento #P01",
          imageUrl: "/images/obras/gaber/obra37.jpg",
          medidas: "190 x 150 cm",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        {
          id: "gaber-5",
          titulo: "Como construir un monumento #1",
          imageUrl: "/images/obras/gaber/obra53.jpg",
          medidas: "191 x 425 cm",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        {
          id: "gaber-6",
          titulo: "Whole Nº3",
          imageUrl: "/images/obras/gaber/obra35.jpg",
          medidas: "150 x 150 cm",
          tecnica: "Acrílico sobre lino",
          año: "2021",
        },
        {
          id: "gaber-7",
          titulo: "Whole Nº2",
          imageUrl: "/images/obras/gaber/obra34.jpg",
          medidas: "160 x 220 cm",
          tecnica: "Acrílico sobre lino",
          año: "2021",
        },
        {
          id: "gaber-8",
          titulo: "Whole Nº1",
          imageUrl: "/images/obras/gaber/obra33.jpg",
          medidas: "150 x 190 cm",
          tecnica: "Acrílico sobre lino",
          año: "2021",
        },
        {
          id: "gaber-9",
          titulo: "Colindancias III",
          imageUrl: "/images/obras/gaber/obra32.jpg",
          medidas: "150 x 200 cm ",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        {
          id: "gaber-10",
          titulo: "Colindancias II",
          imageUrl: "/images/obras/gaber/obra31.jpg",
          medidas: "180 x 130 cm ",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        {
          id: "gaber-11",
          titulo: "Colindancias I",
          imageUrl: "/images/obras/obra30.jpg",
          medidas: "180 x 130 cm ",
          tecnica: "Óleo sobre tela",
          año: "2023",
        },
        // ... resto de obras
      ],
    },
    {
      id: "murrieta",
      nombre: "Rivelino Murrieta",
      obras: [
        {
          id: "murrieta-1",
          titulo: "FRIDA Y EL SOL",
          imageUrl: "/images/obras/murrieta/obra1.jpg",
          medidas: "120 x 120 cm",
          tecnica: "Técnica: Mixta (Óleo/Acrílico/Carbones)",
          año: "2024",
        },
        {
          id: "murrieta-2",
          titulo: "EL SOL DE DALÍ",
          imageUrl: "/images/obras/murrieta/obra2.jpg",
          medidas: "120 x 120 cm",
          tecnica: "Técnica: Mixta (Óleo/Acrílico/Carbones)",
          año: "2024",
        },
        {
          id: "murrieta-3",
          titulo: "YO SOY YOKO",
          imageUrl: "/images/obras/murrieta/obra3.jpg",
          medidas: "120 x 80 cm",
          tecnica: "Técnica: Mixta (Óleo/Acrílico/Carbones)",
          año: "2024",
        },
        {
          id: "murrieta-4",
          titulo: "YO SOY ALFREDO",
          imageUrl: "/images/obras/murrieta/obra4.jpg",
          medidas: "120 x 80 cm",
          tecnica: "Técnica: Mixta (Óleo/Acrílico/Carbones)",
          año: "2024",
        },
        {
          id: "murrieta-5",
          titulo: "MI MONALISA",
          imageUrl: "/images/obras/murrieta/obra5.jpg",
          medidas: "120 x 80 cm",
          tecnica: "Técnica: Mixta (Óleo/Acrílico/Carbones)",
          año: "2024",
        },
        {
          id: "murrieta-6",
          titulo: "ABSTRACTO EN FLOR ROJA",
          imageUrl: "/images/obras/murrieta/obra6.jpg",
          medidas: "120 x 80 cm",
          tecnica: "Técnica: Mixta (Acrílico/Acuarela/Carbones)",
          año: "2024",
        },
        {
          id: "murrieta-7",
          titulo: "CÓSMICA",
          imageUrl: "/images/obras/murrieta/obra7.jpg",
          medidas: "200 x 100 cm",
          tecnica: "Técnica: Acrílico sobre Tela",
          año: "2024",
        },
        {
          id: "murrieta-8",
          titulo: "LA PUERTA DE FRIDA",
          imageUrl: "/images/obras/murrieta/obra8.jpg",
          medidas: "180 x 80 cm",
          tecnica: "Técnica: Mixta sobre Retablo",
          año: "2024",
        },
        {
          id: "murrieta-9",
          titulo: "EL OJO IZQUIERDO DE FRIDA",
          imageUrl: "/images/obras/murrieta/obra9.jpg",
          medidas: "180 x 80 cm",
          tecnica: "Técnica: Mixta sobre Retablo",
          año: "2024",
        },
        
      ],
    },
    {
      id: "ayela",
      nombre: "Aurelio Ayela",
      obras: [
        {
          id: "ayela-11",
          imageUrl: "/images/obras/ayela/obra20.jpg",
          titulo: "Acéfalo Panadhesivo",
          medidas: "200 x 160 cm",
          tecnica: "Acrílico y spray/ papel sobre tela",
          año: "2008",
        },
        {
          id: "ayela-12",
          imageUrl: "/images/obras/ayela/obra21.jpg",
          titulo: "Flor del paraÍso nº2",
          medidas: "150 x 200 cm",
          tecnica: "Pastel, spray y collage/papel",
          año: "2002",
        },
        {
          id: "ayela-13",
          imageUrl: "/images/obras/ayela/obra22.jpg",
          titulo: "Linterna Verde",
          medidas: "150 x 200 cm",
          tecnica: "Acrílico sobre Lienzo",
          año: "2002",
        },
        {
          id: "ayela-14",
          imageUrl: "/images/obras/ayela/obra23.jpg",
          titulo: "The talker beyond understanding",
          medidas: " 70 x 100 cm",
          tecnica: "Rotulador/papel",
          año: "2007",
        },
        {
          id: "ayela-15",
          imageUrl: "/images/obras/ayela/obra24.jpg",
          titulo: "The young sleigh driver",
          medidas: " 100 x 140 cm",
          tecnica: "Acrílico/papel",
          año: "2008",
        },
        {
          id: "ayela-16",
          imageUrl: "/images/obras/ayela/obra25.jpg",
          titulo: "Segundo la cabeza, después lo primero",
          medidas: " 70 x 100 cm",
          tecnica: "Vinilo adhesivo/papel",
          año: "2009",
        },
        {
          id: "ayela-17",
          imageUrl: "/images/obras/ayela/obra26.jpg",
          titulo: "Prototótem",
          medidas: " 70 x 100 cm",
          tecnica: "Vinilo adhesivo/papel",
          año: "2009",
        },
        {
          id: "ayela-18",
          imageUrl: "/images/obras/ayela/obra27.jpg",
          titulo: "Total rescue",
          medidas: " 114 x 130 cm",
          tecnica: "Acrílico y rotulador/lienzo",
          año: "2008",
        },
        {
          id: "ayela-19",
          imageUrl: "/images/obras/ayela/obra28.jpg",
          titulo: "Rescue",
          medidas: " 160 x 200 cm",
          tecnica: "Acrílico y spray sobre lienzo",
          año: "2008",
        },
        {
          id: "ayela-20",
          imageUrl: "/images/obras/ayela/obra29.jpg",
          titulo: "Fisherman&#39;s Garrotte",
          medidas: " 114 x 130 cm",
          tecnica: "Acrílico y rotulador/lienzo",
          año: "2008",
        },
        {
          id: "ayela-21",
          imageUrl: "/images/obras/ayela/obra30.jpg",
          titulo: "Light dispersion",
          medidas: " 200 x 266 cm",
          tecnica: "Acrílico y rotulador/lienzo",
          año: "2008",
        },
        {
          id: "ayela-22",
          imageUrl: "/images/obras/ayela/obra31.jpg",
          titulo: "Triste Rey Billie",
          medidas: " 70 x 100 cm",
          tecnica: " Vinilo adhesivo y blondas/papel",
          año: "2009",
        },
        {
          id: "ayela-23",
          imageUrl: "/images/obras/ayela/obra32.jpg",
          titulo: "Babero carlanca",
          medidas: "  200 x 150 cm",
          tecnica: " Tinta y rotulador/papel de arroz",
          año: "2008",
        },
        {
          id: "ayela-24",
          imageUrl: "/images/obras/ayela/obra33.jpg",
          titulo: "Exactly like you",
          medidas: "  130 x 270 cm",
          tecnica:
            "  Ensamblaje, collage, esténcil e impresión digital/diversos soportes",
          año: "2010",
        },
        {
          id: "ayela-25",
          imageUrl: "/images/obras/ayela/obra34.jpg",
          titulo: "Vientre Probeta",
          medidas: "91,5 x 61 cm",
          tecnica: "Rotulador y acuarela sobre papel",
          año: "2006",
        },
        {
          id: "ayela-26",
          imageUrl: "/images/obras/ayela/obra35.jpg",
          titulo: "Flor del paraíso nº1",
          medidas: "88 x 82 cm",
          tecnica: "Pastel sobre papel cosido",
          año: "2002",
        },
        {
          id: "ayela-27",
          imageUrl: "/images/obras/ayela/obra36.jpg",
          titulo: "Bailarina pinocha",
          medidas: " 33 x 23 cm",
          tecnica: "Agujas de pino (pinocha) y tintas de plóter sobre papel",
          año: "2017",
        },
        {
          id: "ayela-28",
          imageUrl: "/images/obras/ayela/obra37.jpg",
          titulo: "The rise of Pibody",
          medidas: "50 x 40 cm",
          tecnica: "Rotulador y collage/papel",
          año: "2011",
        },
        {
          id: "ayela-29",
          imageUrl: "/images/obras/ayela/obra38.jpg",
          titulo: "Ni fe ni promesas",
          medidas: "162 x 114 cm",
          tecnica: "Acrílico sobre lienzo",
          año: "2017",
        },
        {
          id: "ayela-30",
          imageUrl: "/images/obras/ayela/obra39.jpg",
          titulo: "Patrón japonés The natural Way",
          medidas: "80 x 55 cm",
          tecnica: "Acrílico, rotulador y collage sobre papel",
          año: "2011",
        },
        {
          id: "ayela-31",
          imageUrl: "/images/obras/ayela/obra40.jpg",
          titulo: "Blood bubble landscape 1",
          medidas: "61 x 91,5 cm",
          tecnica: "Rotulador y pastel sobre papel",
          año: "2006",
        },
        {
          id: "ayela-32",
          imageUrl: "/images/obras/ayela/obra41.jpg",
          titulo: "Blood bubble landscape 2",
          medidas: "61 x 91,5 cm",
          tecnica: "Rotulador y pastel sobre papel",
          año: "2006",
        },
        {
          id: "ayela-1",
          imageUrl: "/images/obras/ayela/obra10.jpg",
          titulo: "Undo Sistemas",
          medidas: "242 x 247 cm",
          tecnica: "Acrílico y rotulador sobre tabla",
        },
        {
          id: "ayela-2",
          imageUrl: "/images/obras/ayela/obra11.jpg",
          titulo: "Perfect Score",
          medidas: "100 × 175 cm",
          tecnica: "Rotulador y pastel sobre papel",
        },
        {
          id: "ayela-3",
          imageUrl: "/images/obras/ayela/obra12.jpg",
          titulo: "Flat Mountain nº 34",
          medidas: "150 x 200 cm",
          tecnica: "Spray, rotulador y collage sobre papel",
        },
        {
          id: "ayela-4",
          imageUrl: "/images/obras/ayela/obra13.jpg",
          titulo: "Antiente.",
          medidas: "100 x 118 cm",
          tecnica: "Acrílico y collage sobre papel",
        },
        {
          id: "ayela-5",
          imageUrl: "/images/obras/ayela/obra14.jpg",
          titulo: "Waiting for Godzilla",
          medidas: "165 x 208 cm",
          tecnica: "Acrílico y collage sobre tabla y tela",
        },
        {
          id: "ayela-6",
          imageUrl: "/images/obras/ayela/obra15.jpg",
          titulo: " Polinizador",
          medidas: "114 x 130 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "ayela-7",
          imageUrl: "/images/obras/ayela/obra16.jpg",
          titulo: "Gran pelea.",
          medidas: "207 x 148 cm",
          tecnica: "Técnica mixta en Papel sobre dibond",
        },
        {
          id: "ayela-8",
          imageUrl: "/images/obras/ayela/obra17.jpg",
          titulo: "Gran despojo.",
          medidas: "207 x 148 cm",
          tecnica: "Técnica mixta en Papel sobre dibond",
        },
        {
          id: "ayela-9",
          imageUrl: "/images/obras/ayela/obra18.jpg",
          titulo: "Doble hocico flor",
          medidas: "200 x 150 cm",
          tecnica: "Acrílico y carboncillo sobre lienzo",
        },
        {
          id: "ayela-10",
          imageUrl: "/images/obras/ayela/obra19.jpg",
          titulo: "Soul Crafts.",
          medidas: "140 x 200 cm",
          tecnica: "Acrílico y cinta adhesiva sobre lienzo",
        },

        // ... resto de obras
      ],
    },
    {
      id: "bravo",
      nombre: "Hilario Bravo",
      obras: [
        {
          id: "bravo-11",
          imageUrl: "/images/obras/bravo/bravo11.jpg",
          titulo: "Senda, I",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-12",
          imageUrl: "/images/obras/bravo/bravo12.jpg",
          titulo: "Ventana, V",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-13",
          imageUrl: "/images/obras/bravo/bravo13.jpg",
          titulo: "Tormenta I",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-14",
          imageUrl: "/images/obras/bravo/bravo14.jpg",
          titulo: "Tormenta II",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-15",
          imageUrl: "/images/obras/bravo/bravo15.jpg",
          titulo: "Tormenta III",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-16",
          imageUrl: "/images/obras/bravo/bravo16.jpg",
          titulo: "Tormenta V",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-17",
          imageUrl: "/images/obras/bravo/bravo17.jpg",
          titulo: "Halo V",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-18",
          imageUrl: "/images/obras/bravo/bravo18.jpg",
          titulo: "Tormenta Romántica",
          medidas: "50 x 34,5",
          tecnica: "Collage y aluminio sobre papel",
          año: "2019",
        },
        {
          id: "bravo-19",
          imageUrl: "/images/obras/bravo/bravo19.jpg",
          titulo: "Ventana VI",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-20",
          imageUrl: "/images/obras/bravo/bravo20.jpg",
          titulo: "Ventana VII",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-21",
          imageUrl: "/images/obras/bravo/bravo21.jpg",
          titulo: "Luvia I",
          medidas: "100 x 70",
          tecnica: "Técnica mixta sobre papel",
          año: "2019",
        },
        {
          id: "bravo-22",
          imageUrl: "/images/obras/bravo/bravo22.jpg",
          titulo: "Naufragio al sol",
          medidas: "200 x 500",
          tecnica: "Assemblage",
          año: "2024",
        },
        {
          id: "bravo-23",
          imageUrl: "/images/obras/bravo/bravo23.jpg",
          titulo: "La ventana de Malevich. Atardecer",
          medidas: "250 x 164",
          tecnica: "Óleo sobre madera y caña sobre collage de telas",
        },
        {
          id: "bravo-24",
          imageUrl: "/images/obras/bravo/bravo24.jpg",
          titulo: "Rayuela roja",
          medidas: "118 x 55",
          tecnica: "Ramas, tela y plástico",
        },
        {
          id: "bravo-25",
          imageUrl: "/images/obras/bravo/bravo25.jpg",
          titulo: "La ventana de Malevich. Hielo",
          medidas: "224 x 115",
          tecnica: "Madera y óleo sobre tela y plástico",
        },
        {
          id: "bravo-26",
          imageUrl: "/images/obras/bravo/bravo26.jpg",
          titulo: "Rayuela azul",
          medidas: "110 x 48",
          tecnica: "Ramas, tela y plástico",
        },

        {
          id: "bravo-1",
          imageUrl: "/images/obras/bravo/bravo27.jpg",
          titulo: "Axis mundi",
          medidas: "270 x 130",
          tecnica: "Ramas, cuerda, plumas y tela",
        },
        {
          id: "bravo-2",
          imageUrl: "/images/obras/bravo/bravo28.jpg",
          titulo: "Escala. Candencias",
          medidas: "Variable",
          tecnica: "Cuerda, trapos, etc.",
        },
        {
          id: "bravo-3",
          imageUrl: "/images/obras/bravo/bravo29.jpg",
          titulo: "Haiku: Camino",
          medidas: "90 x 60 ",
          tecnica: "Madera, plástico y telas",
        },
        {
          id: "bravo-4",
          imageUrl: "/images/obras/bravo/bravo30.jpg",
          titulo: "Haiku: Cielo azul",
          medidas: "116 x 80",
          tecnica: "Madera, plástico y telas",
        },
        {
          id: "bravo-5",
          imageUrl: "/images/obras/bravo/bravo31.jpg",
          titulo: "Haiku: Humo blanco",
          medidas: "68 x 34,5 x 10,5",
          tecnica: "Madera, cinco láminas de plástico e hilos",
        },
        {
          id: "bravo-6",
          imageUrl: "/images/obras/bravo/bravo32.jpg",
          titulo: "Haiku: Humo negro",
          medidas: "70 x 34,5 x 10,5",
          tecnica: "Madera, tres láminas de plástico y estropajo",
        },
        {
          id: "bravo-7",
          imageUrl: "/images/obras/bravo/bravo33.jpg",
          titulo: "Haiku: La pira roja",
          medidas: "195 x 122",
          tecnica: "Madera, ramas, tela, paja y plástico",
        },
        {
          id: "bravo-8",
          imageUrl: "/images/obras/bravo/bravo34.jpg",
          titulo: "Los juguetes de Malevich",
          medidas: "139 x 93",
          tecnica: "Rama, tela, cuerda y plástico",
        },
        {
          id: "bravo-9",
          imageUrl: "/images/obras/bravo/bravo35.jpg",
          titulo: "Nao Odisea",
          medidas: "135 x 70",
          tecnica: "Ramas, tela, madera, cristal, cuerda y gesso",
        },
        {
          id: "bravo-10",
          imageUrl: "/images/obras/bravo/bravo36.jpg",
          titulo: "Rayuela de la memoria",
          medidas: "205 x 115",
          tecnica: "Ramas, tela, plástico e hilos",
        },
        {
          id: "bravo-27",
          imageUrl: "/images/obras/bravo/bravo37.jpg",
          titulo: "Recinto cantábrico",
          medidas: "206 x 98",
          tecnica: "Tela, plástico y óleo",
        },
        {
          id: "bravo-28",
          imageUrl: "/images/obras/bravo/bravo38.jpg",
          titulo: "Recinto de la niebla",
          medidas: "202 x 122",
          tecnica: "Madera, ramas, tela y plástico",
        },
        {
          id: "bravo-29",
          imageUrl: "/images/obras/bravo/bravo39.jpg",
          titulo: "Recinto de la noche",
          medidas: "146 x 53",
          tecnica: "Madera, cartón, tela, plástico, acrílico y óleo",
        },
        {
          id: "bravo-30",
          imageUrl: "/images/obras/bravo/bravo44.jpg",
          titulo: "Recinto de la tormenta",
          medidas: "290 x 218",
          tecnica: "Rama, óleo y acrílico sobre plástico, tela y madera",
        },
        {
          id: "bravo-31",
          imageUrl: "/images/obras/bravo/bravo41.jpg",
          titulo: "Recinto del fuego",
          medidas: "300 x 200",
          tecnica: "Tela, madera, cuerda, plástico, óleo y ceniza",
        },
        {
          id: "bravo-32",
          imageUrl: "/images/obras/bravo/bravo42.jpg",
          titulo: "Recinto. Gnosis",
          medidas: "160 x 69",
          tecnica: "Técnica mixta sobre tela, madera y cartón",
        },
        {
          id: "bravo-33",
          imageUrl: "/images/obras/bravo/bravo43.jpg",
          titulo: "Ventana suspendida",
          medidas: "34 x 43 x 30",
          tecnica: "Ramas, tela y alambre",
        },

        // ... resto de obras
      ],
    },
    {
      id: "infante",
      nombre: "Eduardo Infante",
      obras: [
        {
          id: "infante-11",
          imageUrl: "/images/obras/infante/infante1.jpg",
          titulo: "Invocación De Eones",
          medidas: "200 x 160 cm",
          tecnica: "Gesso, Enamel and oil on canvas",
        },
        {
          id: "infante-12",
          imageUrl: "/images/obras/infante/infante2.jpg",
          titulo: "Flores Crudas",
          medidas: "200 x 160 cm",
          tecnica: "Gesso, Enamel and oil on canvas",
        },
        {
          id: "infante-13",
          imageUrl: "/images/obras/infante/infante3.jpg",
          titulo: "SW",
          medidas: "150 x 200 cm",
          tecnica: "Gesso, Enamel and oil on canvas",
        },
        {
          id: "infante-14",
          imageUrl: "/images/obras/infante/infante4.jpg",
          titulo: "Still Warrior",
          medidas: "150 x 100",
          tecnica: "Vinylic on canvas",
        },
        {
          id: "infante-15",
          imageUrl: "/images/obras/infante/infante5.jpg",
          titulo: "Ocean of Night",
          medidas: "140 x 110 cm",
          tecnica: "Gesso, Enamel and oil on canvas",
        },
        {
          id: "infante-16",
          imageUrl: "/images/obras/infante/infante6.jpg",
          titulo: "Italo Wings",
          medidas: "150 x 165 cm",
          tecnica: "Gesso, gouache, spray sobre papel",
        },
        {
          id: "infante-17",
          imageUrl: "/images/obras/infante/infante7.jpg",
          titulo: " Adventure",
          medidas: " 100 x 70 cm",
          tecnica: "Gesso, pastel, gouache sobre papel",
        },
        {
          id: "infante-18",
          imageUrl: "/images/obras/infante/infante8.jpg",
          titulo: "Sunnydale",
          medidas: " 96 x 75 cm",
          tecnica: "Gesso, Enamel and oil on canvas",
        },
        {
          id: "infante-19",
          imageUrl: "/images/obras/infante/infante9.jpg",
          titulo: "Resize",
          medidas: " 50 x 40 cm",
          tecnica: "Gesso, Enamel , spray Paint and oil on canvas",
        },
        {
          id: "infante-20",
          imageUrl: "/images/obras/infante/infante10.jpg",
          titulo: "Flores y Centellas",
          medidas: "50 x 70 cm",
          tecnica: "Ink and pastel on paper",
        },
        {
          id: "infante-21",
          imageUrl: "/images/obras/infante/infante11.jpg",
          titulo: "Flores y Centellas II",
          medidas: "50 x 70 cm",
          tecnica: "Ink and pastel on paper",
        },
        {
          id: "infante-22",
          imageUrl: "/images/obras/infante/infante12.jpg",
          titulo: "Flores y Centellas III",
          medidas: "50 x 70 cm",
          tecnica: "Ink and pastel on paper",
        },
        {
          id: "infante-23",
          imageUrl: "/images/obras/infante/infante13.jpg",
          titulo: "Latveria",
          medidas: "70 x 100 cm",
          tecnica: "Gesso, pastel, gouache sobre papel",
        },
        {
          id: "infante-24",
          imageUrl: "/images/obras/infante/infante14.jpg",
          titulo: "La Primera Rima",
          medidas: "50 x 50 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-25",
          imageUrl: "/images/obras/infante/infante15.jpg",
          titulo: "Lo siguiente es oro",
          medidas: "50 x 50 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-26",
          imageUrl: "/images/obras/infante/infante16.jpg",
          titulo: "Los Siglos",
          medidas: "30 x 40 cm",
          tecnica: "Tinta, spray y pastel sobre lienzo",
        },
        {
          id: "infante-27",
          imageUrl: "/images/obras/infante/infante17.jpg",
          titulo: " The Romantic Warrior",
          medidas: "50 x 40 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-28",
          imageUrl: "/images/obras/infante/infante18.jpg",
          titulo: " Cuatro acordes y la verdad",
          medidas: "45 x 38 cm",
          tecnica: "Tinta, spray y pastel sobre lienzo",
        },
        {
          id: "infante-29",
          imageUrl: "/images/obras/infante/infante19.jpg",
          titulo: "Pulsar",
          medidas: " 30 x 24",
          tecnica: "Tinta, spray y pastel sobre lienzo",
        },
        {
          id: "infante-30",
          imageUrl: "/images/obras/infante/infante20.jpg",
          titulo: "Hölderlin",
          medidas: " 22 x 29 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-31",
          imageUrl: "/images/obras/infante/infante21.jpg",
          titulo: "Mission",
          medidas: "40 x 30 cm",
          tecnica: "Tinta, spray y pastel sobre lienzo",
        },
        {
          id: "infante-32",
          imageUrl: "/images/obras/infante/infante22.jpg",
          titulo: "Los Abismos De Yupi",
          medidas: "30 x 24 cm",
          tecnica: "Gesso y acrílico sobre lienzo",
        },
        {
          id: "infante-33",
          imageUrl: "/images/obras/infante/infante23.jpg",
          titulo: " Judas Priest",
          medidas: "30 x 24 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-34",
          imageUrl: "/images/obras/infante/infante24.jpg",
          titulo: "Song",
          medidas: "30 x 24 cm",
          tecnica: "Gesso y acrílico sobre lienzo",
        },
        {
          id: "infante-35",
          imageUrl: "/images/obras/infante/infante25.jpg",
          titulo: "Mayo en Junio",
          medidas: "24 x 17 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-36",
          imageUrl: "/images/obras/infante/infante26.jpg",
          titulo: "Pink Dead Redemption",
          medidas: "70 x 100 cm",
          tecnica: "Pastel on paper",
        },
        {
          id: "infante-2",
          imageUrl: "/images/obras/obra21.jpg",
          titulo: "Go Nagai’s Cutie Honey",
          medidas: "40 × 40 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-3",
          imageUrl: "/images/obras/obra22.jpg",
          titulo: "Hounds Of Love",
          medidas: "50 x 40 cm",
          tecnica: "Pintura metálica y acrílico sobre lienzo",
        },
        {
          id: "infante-4",
          imageUrl: "/images/obras/obra23.jpg",
          titulo: "Los Dioses Del Placer",
          medidas: "40 x 30 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-5",
          imageUrl: "/images/obras/obra24.jpg",
          titulo: "La tercera noche",
          medidas: "50 x 40 cm",
          tecnica: "Pintura metálica y acrílico sobre lienzo",
        },
        {
          id: "infante-6",
          imageUrl: "/images/obras/obra25.jpg",
          titulo: "Physical Avant-Garde",
          medidas: "40 x 30 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-7",
          imageUrl: "/images/obras/obra26.jpg",
          titulo: "The Harvest",
          medidas: "50 x 40 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-8",
          imageUrl: "/images/obras/obra27.jpg",
          titulo: "Tecnocisne",
          medidas: "50 x 40 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-9",
          imageUrl: "/images/obras/obra28.jpg",
          titulo: "The Romantic Warrior",
          medidas: "50 x 40 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "infante-10",
          imageUrl: "/images/obras/obra29.jpg",
          titulo: "The Witch",
          medidas: "50 x 40 cm",
          tecnica: "Acrílico sobre lienzo",
        },

        // ... resto de obras
      ],
    },
    {
      id: "alonso",
      nombre: "Zinnia Clavo",
      obras: [
        {
          id: "alonso-1",
          imageUrl: "/images/obras/zinnia/obra1z.jpg",
          titulo: "BLANCO SINUOSO",
          medidas: "183 cm x 123 cm",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-2",
          imageUrl: "/images/obras/zinnia/obra2z.jpg",
          titulo: "NEGRO DECIDIDO",
          medidas: "183 cm x 123 cm",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-3",
          imageUrl: "/images/obras/zinnia/obra3z.jpg",
          titulo: "NUEVO NEGRO",
          medidas: "123  cm x 191 cm",
          tecnica: "Acrílico sobre tabla Tríptico",
        },
        {
          id: "alonso-4",
          imageUrl: "/images/obras/zinnia/obra4z.jpg",
          titulo: "LINEA APASIONADA",
          medidas: " 123 cm x 183 cm",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-5",
          imageUrl: "/images/obras/zinnia/obra5z.jpg",
          titulo: "ECO",
          medidas: "122 x 191 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-6",
          imageUrl: "/images/obras/zinnia/obra6z.jpg",
          titulo: "PINGÜI",
          medidas: "123 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-7",
          imageUrl: "/images/obras/zinnia/obra7z.jpg",
          titulo: "VUÉLAME",
          medidas: "122 x 196 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-8",
          imageUrl: "/images/obras/zinnia/obra8z.jpg",
          titulo: "DENTRO DEL AIRE",
          medidas: "183 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-9",
          imageUrl: "/images/obras/zinnia/obra9z.jpg",
          titulo: "LÍNEAS SENTIMENTALES",
          medidas: "183 x 122 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-10",
          imageUrl: "/images/obras/zinnia/obra10z.jpg",
          titulo: "EL INDÓMITO",
          medidas: "123 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-11",
          imageUrl: "/images/obras/zinnia/obra11z.jpg",
          titulo: "LA LÍNEA QUE HUYE",
          medidas: "183 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-12",
          imageUrl: "/images/obras/zinnia/obra12z.jpg",
          titulo: "SÓLO NOSOTROS DOS",
          medidas: "150 x 244 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-13",
          imageUrl: "/images/obras/zinnia/obra13z.jpg",
          titulo: "LÍNEAS DE VERANO",
          medidas: "122 x 244 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-14",
          imageUrl: "/images/obras/zinnia/obra14z.jpg",
          titulo: "TIZA TURQUESA",
          medidas: "123 x 196 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-15",
          imageUrl: "/images/obras/zinnia/obra15z.jpg",
          titulo: "DEJA QUE SEA",
          medidas: "150 x 245 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-16",
          imageUrl: "/images/obras/zinnia/obra16z.jpg",
          titulo: "MEDITERRÁNEO",
          medidas: "183 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-17",
          imageUrl: "/images/obras/zinnia/obra17z.jpg",
          titulo: "BIENVENIDO",
          medidas: "163 x 123 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-18",
          imageUrl: "/images/obras/zinnia/obra18z.jpg",
          titulo: "SALVAJE AZUL",
          medidas: "183 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-19",
          imageUrl: "/images/obras/zinnia/obra19z.jpg",
          titulo: "VIENTO BLANCO",
          medidas: "123 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-20",
          imageUrl: "/images/obras/zinnia/obra20z.jpg",
          titulo: "LA LILA",
          medidas: "150 x 245 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-21",
          imageUrl: "/images/obras/zinnia/obra21z.jpg",
          titulo: "DÍA FELIZ",
          medidas: "123 x 203 cm ",
          tecnica: "Acrílico sobre tabla Tríptico",
        },
        {
          id: "alonso-22",
          imageUrl: "/images/obras/zinnia/obra22z.jpg",
          titulo: "A TRAVÉS DEL BLANCO",
          medidas: "123 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-23",
          imageUrl: "/images/obras/zinnia/obra23z.jpg",
          titulo: "LAS LÍNEAS QUE ENCUENTRO",
          medidas: "123 x 198 cm ",
          tecnica: "Acrílico sobre tabla Tríptico",
        },
        {
          id: "alonso-24",
          imageUrl: "/images/obras/zinnia/obra24z.jpg",
          titulo: "LÍNEA CELOSA",
          medidas: "122 x 198 cm ",
          tecnica: "Acrílico sobre tabla Tríptico",
        },
        {
          id: "alonso-25",
          imageUrl: "/images/obras/zinnia/obra25z.jpg",
          titulo: "EL ROMÁNTICO",
          medidas: "150 x 240 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-26",
          imageUrl: "/images/obras/zinnia/obra26z.jpg",
          titulo: "EN ALGÚN LUGAR",
          medidas: "122 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-27",
          imageUrl: "/images/obras/zinnia/obra27z.jpg",
          titulo: "CAMINANDO III",
          medidas: "122 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-28",
          imageUrl: "/images/obras/zinnia/obra28z.jpg",
          titulo: "EL IMPARABLE",
          medidas: "123 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-29",
          imageUrl: "/images/obras/zinnia/obra29z.jpg",
          titulo: "LÍNEAS DE PRIMAVERA",
          medidas: "123 x 183 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-30",
          imageUrl: "/images/obras/zinnia/obra30z.jpg",
          titulo: "LÍNEA ARRIESGADA",
          medidas: "122 x 180 cm ",
          tecnica: "Acrílico sobre tabla Díptico",
        },
        {
          id: "alonso-31",
          imageUrl: "/images/obras/zinnia/obra31z.jpg",
          titulo: "MEDIANOCHE",
          medidas: "122 x 122 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-32",
          imageUrl: "/images/obras/zinnia/obra32z.jpg",
          titulo: "NOCHE AZUL",
          medidas: "122 x 122 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-33",
          imageUrl: "/images/obras/zinnia/obra33z.jpg",
          titulo: "SORPRESA",
          medidas: "122 x 122 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-34",
          imageUrl: "/images/obras/zinnia/obra34z.jpg",
          titulo: "LÍNEAS DE SEPTIEMBRE I",
          medidas: "122 x 122 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-35",
          imageUrl: "/images/obras/zinnia/obra35z.jpg",
          titulo: "LÍNEAS DE SEPTIEMBRE II",
          medidas: "122 x 122 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-36",
          imageUrl: "/images/obras/zinnia/obra36z.jpg",
          titulo: "AZUL TOZUDO",
          medidas: "150 x 122 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-37",
          imageUrl: "/images/obras/zinnia/obra37z.jpg",
          titulo: "EN SILENCIO II",
          medidas: "150 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-38",
          imageUrl: "/images/obras/zinnia/obra38z.jpg",
          titulo: "EN SILENCIO I",
          medidas: "150 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-39",
          imageUrl: "/images/obras/zinnia/obra39z.jpg",
          titulo: "EN SILENCIO III",
          medidas: "150 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-40",
          imageUrl: "/images/obras/zinnia/obra40z.jpg",
          titulo: "EL DESPRENDIDO",
          medidas: "123 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-41",
          imageUrl: "/images/obras/zinnia/obra41z.jpg",
          titulo: "EL INEXPLICABLE",
          medidas: "123 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-42",
          imageUrl: "/images/obras/zinnia/obra42z.jpg",
          titulo: "EL LIBERADO",
          medidas: "123 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        {
          id: "alonso-43",
          imageUrl: "/images/obras/zinnia/obra43z.jpg",
          titulo: "SOÑANDO LÍNEAS",
          medidas: "123 x 123 cm ",
          tecnica: "Acrílico sobre tabla",
        },
        // ... resto de obras
      ],
    },
    {
      id: "jesus",
      nombre: "Jesús del Peso",
      obras: [
        {
          id: "jesus-19",
          imageUrl: "/images/obras/delpeso/delpeso12.jpg",
          titulo: "Apertura del cubo I",
          medidas: "70 x 70 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-20",
          imageUrl: "/images/obras/delpeso/delpeso13.jpg",
          titulo: "Apertura del cubo II",
          medidas: "70 x 70 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-21",
          imageUrl: "/images/obras/delpeso/delpeso14.jpg",
          titulo: "Apertura del cubo III",
          medidas: "70 x 70 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-22",
          imageUrl: "/images/obras/delpeso/delpeso10.jpg",
          titulo: "Vibración Espacial IV",
          medidas: "70 x 50 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-23",
          imageUrl: "/images/obras/delpeso/delpeso7.jpg",
          titulo: "Vibración Espacial I",
          medidas: "70 x 70 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-1",
          imageUrl: "/images/obras/delpeso/delpeso6.jpg",
          titulo: "Apertura de la esfera en el plano",
          medidas: "150 x 90 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-2",
          imageUrl: "/images/obras/delpeso/delpeso4.jpg",
          titulo: "",
          medidas: "162 x 114 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-3",
          imageUrl: "/images/obras/delpeso/delpeso5.jpg",
          titulo: "",
          medidas: "100 x 81 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-4",
          imageUrl: "/images/obras/delpeso/delpeso24.jpg",
          titulo: "Horizonte Vertical I",
          medidas: "195 x 130 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-5",
          imageUrl: "/images/obras/delpeso/delpeso20.jpg",
          titulo: "Babylon",
          medidas: "110 x 89 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-6",
          imageUrl: "/images/obras/delpeso/delpeso3.jpg",
          titulo: "",
          medidas: "130 x 60 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-7",
          imageUrl: "/images/obras/delpeso/delpeso2.jpg",
          titulo: "",
          medidas: "130 x 60 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-8",
          imageUrl: "/images/obras/delpeso/delpeso8.jpg",
          titulo: "Vibración Espacial III",
          medidas: "80 x 30 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-9",
          imageUrl: "/images/obras/delpeso/delpeso9.jpg",
          titulo: "Vibración Espacial II",
          medidas: "80 x 30 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-10",
          imageUrl: "/images/obras/delpeso/delpeso21.jpg",
          titulo: "",
          medidas: "70 x 50 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-11",
          imageUrl: "/images/obras/delpeso/delpeso22.jpg",
          titulo: "",
          medidas: "60 x 60 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-12",
          imageUrl: "/images/obras/delpeso/delpeso15.jpg",
          titulo: "Orión",
          medidas: "195 x 195 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-13",
          imageUrl: "/images/obras/delpeso/delpeso23.jpg",
          titulo: "Géminis",
          medidas: "114 x 162 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-14",
          imageUrl: "/images/obras/delpeso/delpeso17.jpg",
          titulo: "",
          medidas: "116 x 97 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-15",
          imageUrl: "/images/obras/delpeso/delpeso25.jpg",
          titulo: "",
          medidas: "116 x 97 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-16",
          imageUrl: "/images/obras/delpeso/delpeso19.jpg",
          titulo: "",
          medidas: "195 x 130 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-17",
          imageUrl: "/images/obras/delpeso/delpeso16.jpg",
          titulo: "",
          medidas: "132 x 114 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "jesus-18",
          imageUrl: "/images/obras/delpeso/delpeso16.jpg",
          titulo: "",
          medidas: "132 x 114 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        // ... resto de obras
      ],
    },
    {
      id: "lamo",
      nombre: "José María Lamo de Espinosa",
      obras: [
        {
          id: "lamo-25",
          imageUrl: "/images/obras/lamo/lamo26.jpg",
          titulo: "REALIDAD DESCOMPUESTA",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-24",
          imageUrl: "/images/obras/lamo/lamo25.jpg",
          titulo: "CAMINO",
          medidas: "70 x 100 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-23",
          imageUrl: "/images/obras/lamo/lamo24.jpg",
          titulo: "ESPEJO CONFUSO",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-22",
          imageUrl: "/images/obras/lamo/lamo23.jpg",
          titulo: "AL FINAL DEL TUNEL",
          medidas: "70 x 100 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-21",
          imageUrl: "/images/obras/lamo/lamo22.jpg",
          titulo: "RADIO CITY",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-20",
          imageUrl: "/images/obras/lamo/lamo21.jpg",
          titulo: "CAMBIO DE AGUJAS",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-19",
          imageUrl: "/images/obras/lamo/lamo20.jpg",
          titulo: "ESTACIÓN DE ATOCHA",
          medidas: "70 x 100 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-18",
          imageUrl: "/images/obras/lamo/lamo19.jpg",
          titulo: "REALIDAD Y APARENCIA",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-17",
          imageUrl: "/images/obras/lamo/lamo18.jpg",
          titulo: "MIRANDO POR UNA RENDIJA",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-16",
          imageUrl: "/images/obras/lamo/lamo17.jpg",
          titulo: "OTRO PUNTO DE VISTA",
          medidas: "70 x 100 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-1",
          imageUrl: "/images/obras/lamo/lamo1.jpg",
          titulo: "DECOSTRUYENDO LA ESTRUCTURA",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-2",
          imageUrl: "/images/obras/lamo/lamo2.jpg",
          titulo: "ESCALERA O PRECIPICIO",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-3",
          imageUrl: "/images/obras/lamo/lamo3.jpg",
          titulo: "REFLEJOS EN EL LOUVRE",
          medidas: "70 x 100 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-4",
          imageUrl: "/images/obras/lamo/lamo4.jpg",
          titulo: "LA TORRE DE MADRID",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-5",
          imageUrl: "/images/obras/lamo/lamo5.jpg",
          titulo: "HOTEL OSLO",
          medidas: "100 x 70 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-6",
          imageUrl: "/images/obras/lamo/lamo6.jpg",
          titulo: "LA PIRAMIDE DE MADRID",
          medidas: "70 x 100 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-7",
          imageUrl: "/images/obras/lamo/lamo7.jpg",
          titulo: "LA SILLA Y EL ESPEJO",
          medidas: "70 x 100 cm",
          tecnica: "FOTOGRAFÍA",
        },
        {
          id: "lamo-9",
          imageUrl: "/images/obras/lamo/lamo9.jpg",
          titulo: "HIBISCUS ABIERTO",
          medidas: "100 x 120 cm ",
          tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
        },
        {
          id: "lamo-10",
          imageUrl: "/images/obras/lamo/lamo10.jpg",
          titulo: "HIBISCUS CERRADO",
          medidas: "100 x 120 cm ",
          tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
        },
        {
          id: "lamo-11",
          imageUrl: "/images/obras/lamo/lamo12.jpg",
          titulo: "Calles de Coimbra",
          medidas: "100 x 70 cm ",
          tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
        },
        {
          id: "lamo-12",
          imageUrl: "/images/obras/lamo/lamo15.jpg",
          titulo: "Cúpula Santiago de Compostela",
          medidas: "100 x 70 cm ",
          tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
        },
        {
          id: "lamo-13",
          imageUrl: "/images/obras/lamo/lamo13.jpg",
          titulo: "DOCK IN THE MYST",
          medidas: "100 x 70 cm ",
          tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
        },
        {
          id: "lamo-14",
          imageUrl: "/images/obras/lamo/lamo14.jpg",
          titulo: "Contraste Lamentable",
          medidas: "70 x 100 cm ",
          tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
        },
        {
          id: "lamo-15",
          imageUrl: "/images/obras/lamo/lamo16.jpg",
          titulo: "Elixir de Vida",
          medidas: "100 x 70 cm ",
          tecnica: "FOTOGRAFÍA PIEZA ÚNICA",
        },

        // ... resto de obras
      ],
    },
    {
      id: "pasquin",
      nombre: "Pedro Pasquín",
      obras: [
        {
          id: "pasquin-9",
          imageUrl: "/images/obras/obra52.jpg",
          titulo: "Umbrales",
          medidas: "200 x 200 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-1",
          imageUrl: "/images/obras/obra47.jpg",
          titulo: "Walkers in New York II",
          medidas: "100 x 100 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-2",
          imageUrl: "/images/obras/obra49.jpg",
          titulo: "Walkers in New York III",
          medidas: "100 x 150 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-3",
          imageUrl: "/images/obras/obra42.jpg",
          titulo: "Reflejos de la percepción",
          medidas: "100 x 150 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-4",
          imageUrl: "/images/obras/obra44.jpg",
          titulo: "Casa Milá",
          medidas: "100 x 100 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-5",
          imageUrl: "/images/obras/obra43.jpg",
          titulo: "El Pátio",
          medidas: "100 x 100 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-6",
          imageUrl: "/images/obras/obra41.jpg",
          titulo: "La Terraza",
          medidas: "100 x 100 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-7",
          imageUrl: "/images/obras/obra45.jpg",
          titulo: "La Fachada",
          medidas: "100 x 100 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        {
          id: "pasquin-8",
          imageUrl: "/images/obras/obra48.jpg",
          titulo: "Paris",
          medidas: "100 x 100 cm",
          tecnica: "Acrílico sobre lienzo",
        },
        // ... resto de obras
      ],
    },
    // ... resto de artistas
  ];

  // Mezclar obras aleatoriamente al cargar la página
  useEffect(() => {
    const todasLasObras = artistas.flatMap((artista) =>
      artista.obras.map((obra) => ({
        ...obra,
        artistaNombre: artista.nombre,
      }))
    );
    setObrasAleatorias(shuffleArray(todasLasObras));
  }, []);

  // Obtener las obras a mostrar según el filtro
  const obrasAMostrar = artistaSeleccionado
    ? artistas.find((artista) => artista.nombre === artistaSeleccionado)
        ?.obras || []
    : obrasAleatorias;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* Hero Section mejorado para la página de Obras */}
      <section className="relative h-[60vh] overflow-hidden">
        {/* Fondo con overlay de gradiente */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/obras/ciria/ciria5.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        </div>

        <div className="relative container mx-auto h-full flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            {/* Línea decorativa superior */}
            <div className="w-12 h-1 bg-[#FF0000] mx-auto mb-2" />

            <h1 className="text-5xl md:text-7xl font-light tracking-wider text-white">
              Colección de <span className="text-[#FF0000]">Obras</span>
            </h1>

            <p className="text-xl font-light text-white/80 max-w-2xl mx-auto">
              Descubra nuestra selección de arte contemporáneo de artistas
              nacionales e internacionales con trayectorias consolidadas
            </p>

            {/* Indicador de scroll animado */}
            <motion.div
              className="absolute bottom-12"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Degradado inferior */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#f8f8f8] to-transparent" />
      </section>

      {/* Sección de navegación y filtros mejorada */}
      <section className="bg-[#f8f8f8] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Panel informativo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-light text-gray-800 flex items-center gap-3">
                <span className="w-6 h-1 bg-[#FF0000] inline-block"></span>
                Nuestra Colección
              </h2>
              <p className="text-gray-600 text-lg font-light max-w-xl">
                XinkuArt presenta una cuidada selección de obras de artistas
                reconocidos internacionalmente y emergentes con gran proyección.
              </p>

              {/* Estadísticas */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="space-y-1">
                  <p className="text-4xl font-light text-[#FF0000]">
                    {artistas.length}
                  </p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Artistas
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-light text-[#FF0000]">
                    {artistas.reduce(
                      (total, artista) => total + artista.obras.length,
                      0
                    )}
                  </p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Obras
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-light text-[#FF0000]">7</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Técnicas
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Filtro de artistas mejorado */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-6">
                Filtrar por artista
              </h3>

              <div className="relative">
                <select
                  value={artistaSeleccionado}
                  onChange={(e) => setArtistaSeleccionado(e.target.value)}
                  className="w-full appearance-none bg-white border-2 border-gray-300 px-6 py-4 pr-12
              focus:outline-none focus:border-[#FF0000] hover:border-[#FF0000] transition-colors
              cursor-pointer text-lg font-light rounded-md"
                >
                  <option value="">Todos los artistas</option>
                  {artistas.map((artista) => (
                    <option key={artista.id} value={artista.nombre}>
                      {artista.nombre}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                  <svg
                    className="fill-current h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              {/* Botones rápidos de artistas específicos */}
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-500 mb-2">Acceso rápido:</p>
                <div className="flex flex-wrap gap-2">
                  {/* Artistas específicos indicados */}
                  <button
                    onClick={() => setArtistaSeleccionado("Jose Manuel Ciria")}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      artistaSeleccionado === "Jose Manuel Ciria"
                        ? "bg-[#FF0000] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Ciria
                  </button>

                  <button
                    onClick={() => setArtistaSeleccionado("Manolo Oyonarte")}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      artistaSeleccionado === "Manolo Oyonarte"
                        ? "bg-[#FF0000] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Oyonarte
                  </button>

                  <button
                    onClick={() => setArtistaSeleccionado("Aurelio Ayela")}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      artistaSeleccionado === "Aurelio Ayela"
                        ? "bg-[#FF0000] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Ayela
                  </button>

                  <button
                    onClick={() =>
                      setArtistaSeleccionado("Zinnia Clavo")
                    }
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      artistaSeleccionado === "Zinnia Clavo"
                        ? "bg-[#FF0000] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Zinnia
                  </button>

                  <button
                    onClick={() => setArtistaSeleccionado("")}
                    className={`px-4 py-2 text-sm rounded-full transition-colors ${
                      artistaSeleccionado === ""
                        ? "bg-[#FF0000] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Ver todos
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cabecera de resultados */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center border-b border-gray-200 pb-6 mb-10">
            <div>
              <h2 className="text-2xl font-light text-gray-800">
                {artistaSeleccionado
                  ? `Obras de ${artistaSeleccionado}`
                  : "Todas las obras"}
              </h2>
              <p className="text-gray-500 mt-1">
                Mostrando {obrasAMostrar.length} obras
              </p>
            </div>

            {artistaSeleccionado && (
              <button
                onClick={() => setArtistaSeleccionado("")}
                className="flex items-center gap-2 text-[#FF0000] hover:text-[#cc0000] transition-colors"
              >
                <span>Ver todas las obras</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Se mantiene el grid original de obras */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ObraGrid obras={obrasAMostrar} />
      </section>
    </div>
  );
}
