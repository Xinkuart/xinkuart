'use client'

export default function Cookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-[#a0a0a0]">
      <h1 className="text-3xl font-['Cinzel',serif] text-white mb-8">Política de Cookies</h1>
      
      <section className="space-y-6">
        <h2 className="text-xl text-white mt-8 mb-4">1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en su ordenador o dispositivo móvil cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
        </p>

        <h2 className="text-xl text-white mt-8 mb-4">2. Cookies que utilizamos</h2>
        <p>
          Nuestro sitio web utiliza los siguientes tipos de cookies:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-white">Cookies técnicas:</span> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.
          </li>
          <li>
            <span className="text-white">Cookies de análisis:</span> Son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.
          </li>
          <li>
            <span className="text-white">Cookies de personalización:</span> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas.
          </li>
        </ul>

        <h2 className="text-xl text-white mt-8 mb-4">3. Detalle de cookies utilizadas</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-white">
                <th className="border border-gray-600 px-4 py-2">Cookie</th>
                <th className="border border-gray-600 px-4 py-2">Tipo</th>
                <th className="border border-gray-600 px-4 py-2">Duración</th>
                <th className="border border-gray-600 px-4 py-2">Finalidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-600 px-4 py-2">_ga</td>
                <td className="border border-gray-600 px-4 py-2">Análisis</td>
                <td className="border border-gray-600 px-4 py-2">2 años</td>
                <td className="border border-gray-600 px-4 py-2">Registra una ID única para generar datos estadísticos</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">_gid</td>
                <td className="border border-gray-600 px-4 py-2">Análisis</td>
                <td className="border border-gray-600 px-4 py-2">24 horas</td>
                <td className="border border-gray-600 px-4 py-2">Registra una ID única para generar datos estadísticos</td>
              </tr>
              <tr>
                <td className="border border-gray-600 px-4 py-2">session</td>
                <td className="border border-gray-600 px-4 py-2">Técnica</td>
                <td className="border border-gray-600 px-4 py-2">Sesión</td>
                <td className="border border-gray-600 px-4 py-2">Gestión de la sesión del usuario</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl text-white mt-8 mb-4">4. Cómo gestionar las cookies</h2>
        <p>
          Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Por ejemplo:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:underline">
              Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:underline">
              Firefox
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:underline">
              Edge
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:underline">
              Safari
            </a>
          </li>
        </ul>

        <h2 className="text-xl text-white mt-8 mb-4">5. Actualizaciones y cambios</h2>
        <p>
          LANZA ARTE MCH, S.L. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
        </p>
      </section>
    </div>
  );
}