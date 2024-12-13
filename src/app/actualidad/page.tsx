"use client"
import Image from 'next/image';

type NoticiaProps = {
  titulo: string;
  imagen: string;
  descripcion: string;
};

const Noticia = ({ titulo, imagen, descripcion }: NoticiaProps) => (
  <div className="mb-8">
    <Image 
      src={imagen}
      alt={titulo}
      width={400}
      height={250}
      className="w-full h-auto rounded-lg shadow-md"
    />
    <h2 className="text-xl font-bold mt-4 mb-2">{titulo}</h2>
    <p className="text-gray-600">{descripcion}</p>
  </div>
);

const ActualidadPage = () => (
  <div className="py-12 bg-white pt-20"> {/* Agregamos un padding vertical de 12 unidades */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg p-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Noticias de XinkuArt</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Mantente al día con las últimas novedades, eventos y exhibiciones de nuestra galería de arte virtual. Descubre artistas emergentes y obras maestras en XinkuArt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Noticia
          titulo="Inauguración de la Exhibición 'Sueños Surrealistas'"
          imagen="/images/noticias/noticia1.jpg"
          descripcion="Acompáñanos en la gran apertura de nuestra nueva exhibición 'Sueños Surrealistas', con obras cautivadoras de artistas contemporáneos. La inauguración será este viernes a las 19h."
        />

        <Noticia 
          titulo="Entrevista con la Artista Emergente Lina Rodríguez"
          imagen="/images/noticias/noticia2.jpg"  
          descripcion="Conoce a Lina Rodríguez, una prometedora artista cuyas vibrantes pinturas abstractas están captando la atención del mundo del arte. Lee nuestra entrevista exclusiva."
        />

        <Noticia
          titulo="XinkuArt se Expande a Realidad Virtual" 
          imagen="/images/noticias/noticia3.jpg"
          descripcion="Estamos emocionados de anunciar que pronto lanzaremos tours de realidad virtual inmersivos de nuestras exhibiciones. Podrás explorar el arte como nunca antes."
        />
      </div>
    </div>
  </div>
);

export default ActualidadPage;