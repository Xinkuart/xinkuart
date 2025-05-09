"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type NoticiaProps = {
  titulo: string;
  imagen: string;
  descripcion: string;
  fecha?: string;
  tiempoLectura?: string;
  categoria?: string;
  esVideo?: boolean;
  videoPath?: string;
};

const VideoModal = ({ isOpen, onClose, videoPath }: { isOpen: boolean; onClose: () => void; videoPath: string }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <video
            className="w-full aspect-video"
            controls
            autoPlay
            src={videoPath}
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const NoticiaDetalleModal = ({ isOpen, onClose, noticia }: { 
  isOpen: boolean; 
  onClose: () => void; 
  noticia: NoticiaProps;
}) => {
  // Función para verificar si es la nota de prensa de Roberto Espacios
  const esNotaRoberto = noticia.descripcion.includes("Roberto Espacios");
  
  // Eliminar la mención de Roberto Espacios de la descripción para mostrarla mejor formateada después
  const descripcionSinFirma = esNotaRoberto 
    ? noticia.descripcion.replace(". Nota de prensa por Roberto Espacios.", "") 
    : noticia.descripcion;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-start justify-center bg-black/80 p-4 overflow-y-auto"
          style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden my-8 mx-auto"
            style={{ 
              marginTop: '4rem',
              marginBottom: '4rem',
              maxHeight: 'calc(100vh - 8rem)',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 right-0 w-full flex justify-end p-4 bg-gradient-to-b from-black/50 to-transparent z-10">
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative aspect-video">
              <Image
                src={noticia.imagen}
                alt={noticia.titulo}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-4 mb-4">
                  {noticia.categoria && (
                    <span className="px-3 py-1 text-sm text-red-600 bg-white rounded-full font-serif">
                      {noticia.categoria}
                    </span>
                  )}
                  <span className="text-sm text-white/90 font-serif">{noticia.fecha}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">
                  {noticia.titulo}
                </h2>
              </div>
            </div>

            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <div className="font-serif text-xl text-gray-600 leading-relaxed space-y-6">
                  {descripcionSinFirma.split('. ').map((parrafo, index) => (
                    <p key={index}>{parrafo}.</p>
                  ))}
                </div>
                
                {/* Firma si es la nota de Roberto Espacios */}
                {esNotaRoberto && (
                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <p className="text-right italic text-gray-500 font-serif">
                      Nota de prensa por <span className="font-medium">Roberto Espacios</span>
                    </p>
                  </div>
                )}
                
                {noticia.esVideo && (
                  <div className="mt-8 border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-serif text-gray-900 mb-4">
                      Contenido multimedia relacionado
                    </h3>
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <video
                        className="w-full"
                        controls
                        src={noticia.videoPath}
                      >
                        Tu navegador no soporta el elemento de video.
                      </video>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const NoticiaArticle = ({ noticia, index }: { noticia: NoticiaProps; index: number }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isDetalleOpen, setIsDetalleOpen] = useState(false);

  const handleArticleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button')) return;
    setIsDetalleOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <article 
        onClick={handleArticleClick}
        className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image 
            src={noticia.imagen}
            alt={noticia.titulo}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {noticia.esVideo && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsVideoOpen(true);
              }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 text-white"
              >
                <Play className="w-8 h-8" />
              </motion.div>
            </button>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            {noticia.categoria && (
              <span className="px-3 py-1 text-sm text-red-600 bg-red-50 rounded-full font-serif">
                {noticia.categoria}
              </span>
            )}
            <span className="text-sm text-gray-500 font-serif">{noticia.fecha}</span>
          </div>

          <h3 className="text-2xl font-serif text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors">
            {noticia.titulo}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-3 font-serif">
            {noticia.descripcion}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500 font-serif">
              <Clock className="w-4 h-4 mr-1" />
              <span>{noticia.tiempoLectura}</span>
            </div>
            
            <motion.div
              whileHover={{ x: 5 }}
              className="text-red-600 font-serif text-sm flex items-center gap-1"
            >
              Leer más <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </article>

      {noticia.esVideo && noticia.videoPath && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoPath={noticia.videoPath}
        />
      )}

      <NoticiaDetalleModal
        isOpen={isDetalleOpen}
        onClose={() => setIsDetalleOpen(false)}
        noticia={noticia}
      />
    </motion.div>
  );
};

const ActualidadPage = () => {
  const noticias = [
    {
      titulo: "Oyonarte, Alicia y los espejos llega a Casa de Vacas",
      imagen: "/images/obras/oyonarte/oyonarte31.jpg",
      descripcion: "El Centro Cultural Casa de Vacas del parque del Retiro de Madrid se viste de gala para acoger, del 29 de abril al 26 de mayo, la exposición 'Oyonarte, Alicia y los espejos', una muestra del artista Manolo Oyonarte que busca dar un paso más allá del de Alicia a través del espejo. Una treintena de obras de expresionismo abstracto que no intentan comunicar nada, ni hacer reflexionar sobre ningún aspecto de la vida. 'No hay que entenderlas, las formas, líneas y colores que las estructuran solo buscan mostrar la evidencia de lo que son en realidad, desvelar su auténtica apariencia', explica el artista. El recorrido se inicia a la vez que lo hace un bucle musical, una composición del músico, compositor y productor español, Luis Carlos Esteban, concebida como una obra total junto a las obras que se contemplan, respetando los tiempos musicales que permiten disfrutar plenamente de ella. Nota de prensa por Roberto Espacios.",
      fecha: "28 Abril, 2025",
      categoria: "Exposición",
      tiempoLectura: "7 min lectura",
      esVideo: false
    },
    {
      titulo: "Manolo Oyonarte presenta 'Nenúfares y Twombly' en La Neomudéjar",
      imagen: "/images/obras/oyonarte/oyonarte1.jpg",
      descripcion: "El reconocido artista Manolo Oyonarte inaugura su última exposición 'Nenúfares y Twombly' en el emblemático museo La Neomudéjar. Esta muestra representa un diálogo fascinante entre la naturaleza y el arte contemporáneo, donde Oyonarte explora la intersección entre los elementos naturales y la abstracción moderna, rindiendo un sutil homenaje a dos grandes influencias: las representaciones de nenúfares de Monet y el expresionismo gestual de Cy Twombly.",
      fecha: "26 Enero, 2025",
      categoria: "Exposiciones",
      tiempoLectura: "5 min lectura",
      esVideo: true,
      videoPath: "/images/obras/entrevistaoyonartedef.mp4"
    },
    {
      titulo: "'Las Venas del Dragón': Nueva obra literaria de José Manuel Ciria",
      imagen: "/images/obras/ciria/librociria.jpg",
      descripcion: "Casa de Vacas se convierte en el escenario de presentación del nuevo libro de José Manuel Ciria, 'Las Venas del Dragón'. Esta obra literaria representa un viaje introspectivo a través del proceso creativo del artista, revelando las conexiones profundas entre su práctica pictórica y su pensamiento teórico. El libro ofrece una perspectiva única sobre la evolución del arte contemporáneo y la búsqueda constante de innovación en la expresión artística.",
      fecha: "11 Noviembre, 2024",
      categoria: "Literatura",
      tiempoLectura: "4 min lectura",
      esVideo: false
    },
    {
      titulo: "Ciria lleva su obra a la Sala Vaquero Poblador de Badajoz",
      imagen: "/images/obras/ciria/expociria1.jpg",
      descripcion: "La Sala de Exposiciones Vaquero Poblador en Badajoz acoge una impresionante muestra del trabajo de José Manuel Ciria, uno de los artistas más influyentes del arte contemporáneo español. La exposición presenta una selección cuidadosamente curada de sus obras más recientes, destacando su característico estilo que combina abstracción gestual con una profunda investigación sobre el color y la forma. Esta exhibición representa una oportunidad única para el público extremeño de experimentar de primera mano la potencia y originalidad del trabajo de Ciria.",
      fecha: "6 Septiembre, 2024",
      categoria: "Exposiciones",
      tiempoLectura: "6 min lectura",
      esVideo: true,
      videoPath: "/images/obras/ciria/ciriavideo1.mp4"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="relative bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center border-b border-gray-200 pb-8">
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-px bg-gray-300" />
              <span className="mx-4 text-gray-500 text-sm font-serif">
                Edición Digital
              </span>
              <div className="w-16 h-px bg-gray-300" />
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl text-gray-900 mb-4">
              XinkuArt
            </h1>
            
            <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
              <span>Madrid, España</span>
              <span>•</span>
              <span>{new Date().toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>

          <div className="mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-red-600 font-serif text-lg">Última Hora</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2 mb-4 leading-tight">
                Actualidad y Noticias del Arte Contemporáneo
              </h2>
              <p className="text-xl text-gray-600 font-serif leading-relaxed">
                Descubre las últimas novedades, entrevistas exclusivas y eventos destacados 
                del mundo del arte en nuestra galería virtual.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-gray-200 opacity-50" />
        <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-gray-200 opacity-50" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-gray-200 opacity-50" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gray-200 opacity-50" />
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <NoticiaArticle key={index} noticia={noticia} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ActualidadPage;