'use client';


import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ObraGrid from '@/components/obras/ObraGrid';


// Función para mezclar array aleatoriamente
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


export default function ObrasPage() {
  const [artistaSeleccionado, setArtistaSeleccionado] = useState('');
  const [obrasAleatorias, setObrasAleatorias] = useState<any[]>([]);


  const artistas = [
    {
      id: 'ciria',
      nombre: "Jose Manuel Ciria",
      obras: [
        {
          id: "ciria-1",
          titulo: "Antes",
          artista: "Ciria",
          imageUrl: "/images/obras/ciria/ciria1.jpg",
          medidas: "250 x 250 cm",
          tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
          año: "2022"
        },
        {
            id: "ciria-2",
            titulo: "Apuntado en algún cuaderno",
            imageUrl: "/images/obras/ciria/ciria2.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
            año: "2022"
          },
          {
            id: "ciria-3",
            titulo: "Teatral ante la línea (No recuerdo)",
            imageUrl: "/images/obras/ciria/ciria3.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
            año: "2022"
          },
          {
            id: "ciria-4",
            titulo: "Máquina de coser",
            imageUrl: "/images/obras/ciria/ciria4.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta y óleo sobre lienzo",
            año: "2022"
          },
          {
            id: "ciria-5",
            titulo: "Musa y Venus (Rebelión)",
            imageUrl: "/images/obras/ciria/ciria5.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
            año: "2022"
          }, 
          {
            id: "ciria-6",
            titulo: "Habitación llena de batallas navales",
            imageUrl: "/images/obras/ciria/ciria6.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Óleo sobre liezo con impresión digital",
            año: "2022"
          },
          {
            id: "ciria-7",
            titulo: "Cortado sobre la página de un cómic",
            imageUrl: "/images/obras/ciria/ciria7.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
            año: "2022"
          }, 
          {
            id: "ciria-8",
            titulo: "El Deseo Eterno",
            imageUrl: "/images/obras/ciria/ciria8.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta y óleo sobre lienzo",
            año: "2022"
          },
          {
            id: "ciria-9",
            titulo: "Habitación cerrada de Lovecraft y Auster",
            imageUrl: "/images/obras/ciria/ciria9.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta, óleo y grafito sobre lienzo",
            año: "2022"
          },
          {
            id: "ciria-10",
            titulo: "Inmensas discrepancias",
            imageUrl: "/images/obras/ciria/ciria9.jpg",
            medidas: "250 x 250 cm",
            tecnica: "Técnica mixta y óleo sobre lienzo",
            año: "2022"
          },

        // ... resto de obras
      ]
    },
    {
        id: 'oyonarte',
        nombre: "Manolo Oyonarte",
        obras: [
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
          {
            id: "oyonarte-9",
            titulo: "Realidades sin Nombre.Z13",
            imageUrl: "/images/obras/oyonarte/obra9.jpg",
            medidas: "200 x 200 cm",
            tecnica: "Técnica mixta sobre lienzo",
          },
          
  
          // ... resto de obras
        ]
      },
      {
        id: 'gaber',
        nombre: "William Gaber",
        obras: [
          {
            id: "gaber-1",
            titulo: "Monumento #P13",
            imageUrl: "/images/obras/gaber/obra40.jpg",
            medidas: "150 x 200 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
          },
          {
            id: "gaber-2",
            titulo: "Monumento #P16",
            imageUrl: "/images/obras/gaber/obra39.jpg",
            medidas: "180 x 130 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
          },
          {
            id: "gaber-3",
            titulo: "Monumento #P07",
            imageUrl: "/images/obras/gaber/obra38.jpg",
            medidas: "180 x 130 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
          },
          {
            id: "gaber-4",
            titulo: "Monumento #P01",
            imageUrl: "/images/obras/gaber/obra37.jpg",
            medidas: "190 x 150 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
          },
          {
            id: "gaber-5",
            titulo: "Como construir un monumento #1",
            imageUrl: "/images/obras/gaber/obra36.jpg",
            medidas: "191 x 425 cm",
            tecnica: "Óleo sobre tela",
            año: "2023"
          },
          {
            id: "gaber-6",
            titulo: "Whole Nº3",
            imageUrl: "/images/obras/gaber/obra35.jpg",
            medidas: "150 x 150 cm",
            tecnica: "Acrílico sobre lino",
            año: "2021"
          },
          {
            id: "gaber-7",
            titulo: "Whole Nº2",
            imageUrl: "/images/obras/gaber/obra34.jpg",
            medidas: "160 x 220 cm",
            tecnica: "Acrílico sobre lino",
            año: "2021"
          },
          {
            id: "gaber-8",
            titulo: "Whole Nº1",
            imageUrl: "/images/obras/gaber/obra33.jpg",
            medidas: "150 x 190 cm",
            tecnica: "Acrílico sobre lino",
            año: "2021"
          },
          {
            id: "gaber-9",
            titulo: "Colindancias III",
            imageUrl: "/images/obras/gaber/obra32.jpg",
            medidas: "150 x 200 cm ",
            tecnica: "Óleo sobre tela",
            año: "2023"
          },
          {
            id: "gaber-10",
            titulo: "Colindancias II",
            imageUrl: "/images/obras/gaber/obra31.jpg",
            medidas: "180 x 130 cm ",
            tecnica: "Óleo sobre tela",
            año: "2023"
          },
          {
            id: "gaber-11",
            titulo: "Colindancias I",
            imageUrl: "/images/obras/obra30.jpg",
            medidas: "180 x 130 cm ",
            tecnica: "Óleo sobre tela",
            año: "2023"
          }
          // ... resto de obras
        ]
      },
      {
        id: 'ayela',
        nombre: "Aurelio Ayela",
        obras: [
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
            año: "2023"
          },
          
          // ... resto de obras
        ]
      },
      {
        id: 'bravo',
        nombre: "Hilario Bravo",
        obras: [
          {
            id: "bravo-1",
            imageUrl: "/images/obras/bravo/bravo1.jpg",
            titulo: "Tratado de Dunhuang",
            medidas: "195 x 162 cm",
            tecnica: "Óleo, lápiz y collage sobre tela",
            año: "2021"
          },
          {
            id: "bravo-2",
            imageUrl: "/images/obras/bravo/bravo2.jpg",
            titulo: "Tratado de Oort",
            medidas: "146 x 114 cm",
            tecnica: "Óleo, carbón, pan de oro y collage sobre tela",
          },
          {
            id: "bravo-3",
            imageUrl: "/images/obras/bravo/bravo3.jpg",
            titulo: "Tratado de las estrellas. 7",
            medidas: "175 x 80 cm",
            tecnica: "Collage sobre Tela",
          },
          {
            id: "bravo-4",
            imageUrl: "/images/obras/bravo/bravo4.jpg",
            titulo: "Tratado de las estrellas. 11",
            medidas: "175 x 80 cm",
            tecnica: "Collage sobre Tela", 
          },
          {
            id: "bravo-5",
            imageUrl: "/images/obras/bravo/bravo5.jpg",
            titulo: "Tratado de las estrellas. 18",
            medidas: "175 x 80 cm",
            tecnica: "Collage sobre Tela",
          },
          {
            id: "bravo-6",
            imageUrl: "/images/obras/bravo/bravo6.jpg",
            titulo: "Tratado de las estrellas. 22",
            medidas: "175 x 80 cm",
            tecnica: "Collage sobre Tela",
          },
          {
            id: "bravo-7",
            imageUrl: "/images/obras/bravo/bravo7.jpg",
            titulo: "Tratado de las estrellas. 24",
            medidas: "175 x 80 cm",
            tecnica: "Collage sobre Tela", 
          },
          {
            id: "bravo-8",
            imageUrl: "/images/obras/bravo/bravo8.jpg",
            titulo: "Tratado de las estrellas. 26",
            medidas: "175 x 80 cm",
            tecnica: "Collage sobre Tela", 
          },
          {
            id: "bravo-9",
            imageUrl: "/images/obras/bravo/bravo9.jpg",
            titulo: "Runas del comienzo",
            medidas: "89 x 38 (cada panel)",
            tecnica: "Carboncillo, pan de oro y collage sobre tela",
          },
          {
            id: "bravo-10",
            imageUrl: "/images/obras/bravo/bravo10.jpg",
            titulo: "Tríptico de Freya",
            medidas: "89 x 38 (cada panel)",
            tecnica: "Óleo, carboncillo, pan de oro y collage sobre tela", 
          },
        
          
          // ... resto de obras
        ]
      },
      {
        id: 'infante',
        nombre: "Eduardo Infante",
        obras: [
          {
            id: "infante-1",
            imageUrl: "/images/obras/obra20.jpg",
            titulo: "The Romantic Warrior",
            medidas: "50 x 60 cm",
            tecnica: "Acrílico sobre lienzo",
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
        ]
      },
      {
        id: 'alonso',
        nombre: "Jaime Sánchez Alonso",
        obras: [
          {
            id: "alonso-1",
            imageUrl: "/images/obras/alonso/alonso1.jpg",
            titulo: "La Montaña Rusa",
            medidas: "189 cm x 105 cm",
            tecnica: "Pintura en técnica mixta sobre tela",
          },
          {
            id: "alonso-2",
            imageUrl: "/images/obras/alonso/alonso2.jpg",
            titulo: "Procesión",
            medidas: "250 cm x 200 cm",
            tecnica: "Pintura en técnica mixta sobre tela",
          },  
          {
            id: "alonso-3",
            imageUrl: "/images/obras/alonso/alonso3.jpg",
            titulo: "Tetris",
            medidas: "150  cm x 150 cm",
            tecnica: "Pintura en técnica mixta sobre tela ",
          },
          {
            id: "alonso-4",
            imageUrl: "/images/obras/alonso/alonso4.jpg",
            titulo: "Tres figuras",
            medidas: " 200 cm x 200 cm",
            tecnica: "Acrílico sobre lienzo",
          },
          {
            id: "alonso-5",
            imageUrl: "/images/obras/alonso/alonso5.jpg",
            titulo: "Así habló Zaratustra",
            medidas: "250 x 200 cm ",
            tecnica: "Obra en técnica mixta sobre tela.",
          },
          {
            id: "alonso-6",
            imageUrl: "/images/obras/alonso/alonso6.jpg",
            titulo: "El Cristo",
            medidas: "250 x 200 cm ",
            tecnica: "Obra en técnica mixta sobre tela.",
          },
          {
            id: "alonso-7",
            imageUrl: "/images/obras/alonso/alonso7.jpg",
            titulo: "Equilibrio",
            medidas: "250 x 200 cm ",
            tecnica: "Obra en técnica mixta sobre tela.",
          },
          {
            id: "alonso-8",
            imageUrl: "/images/obras/alonso/alonso8.jpg",
            titulo: "Hierbas 11",
            medidas: "120 x 120 cm ",
            tecnica: "Pintura- técnica mixta sobre madera",
          },
          {
            id: "alonso-9",
            imageUrl: "/images/obras/alonso/alonso9.jpg",
            titulo: "Hierbas 3",
            medidas: "120 x 120 cm ",
            tecnica: "Pintura- técnica mixta sobre madera",
          },
          {
            id: "alonso-10",
            imageUrl: "/images/obras/alonso/alonso10.jpg",
            titulo: "Hierbas 4",
            medidas: "120 x 120 cm ",
            tecnica: "Pintura- técnica mixta sobre madera",
          }    
          // ... resto de obras
        ]
      },
      {
        id: 'lamo',
        nombre: "José María Lamo de Espinosa",
        obras: [
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
            id: "lamo-8",
            imageUrl: "/images/obras/lamo/lamo8.jpg",
            titulo: "Hierbas 11",
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
              
          // ... resto de obras
        ]
      },
      {
        id: 'pasquin',
        nombre: "Pedro Pasquín",
        obras: [
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
        ]
      },
    // ... resto de artistas
  ];


  // Mezclar obras aleatoriamente al cargar la página
  useEffect(() => {
    const todasLasObras = artistas.flatMap(artista =>
      artista.obras.map(obra => ({
        ...obra,
        artistaNombre: artista.nombre
      }))
    );
    setObrasAleatorias(shuffleArray(todasLasObras));
  }, []);


  // Obtener las obras a mostrar según el filtro
  const obrasAMostrar = artistaSeleccionado
    ? artistas.find(artista => artista.nombre === artistaSeleccionado)?.obras || []
    : obrasAleatorias;


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/obras/lamo/lamo10.jpg')] opacity-50 bg-cover bg-center" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white space-y-4 px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-light tracking-wider"
            >
              Obras
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl font-light max-w-2xl mx-auto"
            >
              Colección de arte contemporáneo
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* Filtro de artistas */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-light text-gray-800">
            Navegue por artista
          </h2>
          <div className="relative">
            <select
              value={artistaSeleccionado}
              onChange={(e) => setArtistaSeleccionado(e.target.value)}
              className="appearance-none bg-white border-2 border-black px-6 py-3 pr-12
                min-w-[280px] focus:outline-none hover:bg-black hover:text-white transition-colors
                cursor-pointer text-lg font-light"
            >
              <option value="">Todos los artistas</option>
              {artistas.map(artista => (
                <option key={artista.id} value={artista.nombre}>
                  {artista.nombre}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>


      {/* Grid de obras */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-20"> {/* Reducido de 2000px a 1600px */}
  <ObraGrid obras={obrasAMostrar} />
</section>
    </div>
  );
}

