'use client'

export default function AvisoLegal() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-[#a0a0a0]">
      <h1 className="text-3xl font-['Cinzel',serif] text-white mb-8">Aviso Legal</h1>
      
      <section className="space-y-6">
        <h2 className="text-xl text-white mt-8 mb-4">1. Datos identificativos</h2>
        <p>
          En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Razón social: LANZA ARTE MCH, S.L.</li>
          <li>CIF: B-70931720</li>
          <li>Domicilio: Pº de la Castellana nº 123, esc dcha 5º C, 28056 Madrid, España</li>
          <li>Correo electrónico: info@xinkuart.com</li>
          <li>Sitio Web: www.xinkuart.com</li>
        </ul>

        <h2 className="text-xl text-white mt-8 mb-4">2. Objeto</h2>
        <p>
          El presente aviso legal regula el uso y utilización del sitio web www.xinkuart.com, del que es titular LANZA ARTE MCH, S.L.
          La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
        </p>

        <h2 className="text-xl text-white mt-8 mb-4">3. Propiedad intelectual e industrial</h2>
        <p>
          Los derechos de propiedad intelectual e industrial derivados de todos los textos, imágenes, así como de los medios y formas de presentación y montaje de sus páginas pertenecen, por sí o como cesionaria, a LANZA ARTE MCH, S.L. Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español.
        </p>

        <h2 className="text-xl text-white mt-8 mb-4">4. Responsabilidad</h2>
        <p>
          LANZA ARTE MCH, S.L. no se hace responsable del mal uso que se realice de los contenidos de su página web, reservándose el derecho a actualizarlos, eliminarlos, establecer limitaciones o restringir su acceso en cualquier momento, de manera temporal o permanente.
        </p>

        <h2 className="text-xl text-white mt-8 mb-4">5. Legislación aplicable y jurisdicción</h2>
        <p>
          Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Madrid.
        </p>
      </section>
    </div>
  );
}