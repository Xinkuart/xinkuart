"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { Montserrat, Raleway, Playfair_Display } from "next/font/google";

// Montserrat: solo para el título "UMBRALES" del hero. Declaración idéntica a
// la de la home (src/app/page.tsx) para que next/font reutilice la misma
// configuración ya validada en producción.
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

// Raleway: eyebrows, texto de lectura y etiquetas — igual que en el resto de la web.
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

// Playfair Display: títulos y citas. Declaración idéntica a la de /about
// (src/app/about/page.tsx) para que next/font reutilice la misma
// configuración ya validada en producción.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

/* ============================================================
   Tipos técnicos (no hace falta entender esto para editar la
   página — baja hasta el banner "ZONA EDITABLE").
   ============================================================ */

type Ajuste = "cover" | "contain";
type Enfoque = "centro" | "arriba" | "abajo" | "izquierda" | "derecha";
type FotoLado = "izquierda" | "derecha";
type FormatoCaja = "vertical" | "cuadrado";
type TamanoFoto = "auto" | "pequena" | "mediana" | "grande";
type AlineacionTexto = "arriba" | "centro" | "abajo";
type Fondo = "blanco" | "crema" | "oscuro";
type TamanoTexto = "normal" | "grande" | "muyGrande";

type FotoBloque = {
  src: string;
  alt: string;
  pie?: string;
  ajuste: Ajuste;
  enfoque: Enfoque;
};

type SeccionExposicion = {
  id: string;
  visible: boolean;
  fotoLado: FotoLado;
  formatoCaja: FormatoCaja;
  tamanoFoto: TamanoFoto;
  alineacionTexto: AlineacionTexto;
  fondo: Fondo;
  eyebrow?: string;
  titulo?: string;
  textos: string[];
  cita?: string;
  foto: FotoBloque;
  // Solo el bloque "sobre-el-artista" usa estos dos campos:
  retrato?: { src: string; alt: string };
  biografia?: string[];
};

type ObraEditable = {
  id: string;
  serie: string;
  titulo: string;
  tecnica: string;
  medidas: string;
  anio: string;
  foto: string;
};

type CVEntry = { year: string; text: string };

/* ================================================================================
   ================================================================================
   ZONA EDITABLE: aquí cambias textos, fotos y diseño
   ================================================================================
   Todo lo que ves hasta el banner "FIN ZONA EDITABLE" es lo único que necesitas
   tocar. Cambia un valor, guarda el archivo y la página se actualiza sola.

   REGLA DE ORO: las fotos SIEMPRE se escriben con la ruta completa entre
   comillas, empezando por "/images/...", por ejemplo:
     "/images/obras/gaber/umbrales/um1.jpg"
   ================================================================================
   ================================================================================ */

/* ----------------------------------------------------------------
   0) AJUSTES_DISENO — controla el tamaño general de la pestaña "La
   exposición".
   - anchoMaximoPagina: ancho máximo, en píxeles, del contenido de la
     página (texto + foto juntos). 1920 por defecto — la pestaña usa
     toda la pantalla, con márgenes pequeños a los lados.
   - anchoFoto: ancho máximo, en píxeles, de la caja de foto, según su
     tamanoFoto ("pequena" | "mediana" | "grande").
   - umbralesPalabras: a partir de cuántas palabras de texto (textos +
     cita) una foto pasa de "pequena" a "mediana", y de "mediana" a
     "grande", cuando tamanoFoto está en "auto". Por debajo de
     umbralesPalabras.pequena → pequena; hasta umbralesPalabras.mediana
     → mediana; por encima → grande.
   - tamanoTexto: "normal" | "grande" | "muyGrande" — tamaño del texto
     de lectura (los párrafos). "grande" es el recomendado.
   ---------------------------------------------------------------- */
const AJUSTES_DISENO = {
  anchoMaximoPagina: 1920,
  anchoFoto: {
    pequena: 340,
    mediana: 460,
    grande: 600,
  },
  umbralesPalabras: {
    pequena: 150,
    mediana: 300,
  },
  tamanoTexto: "grande" as TamanoTexto,
};

const TAMANO_TEXTO_CLASES: Record<TamanoTexto, string> = {
  normal: "text-base md:text-lg",
  grande: "text-lg md:text-xl",
  muyGrande: "text-xl md:text-2xl",
};

/* ----------------------------------------------------------------
   1) HERO — la franja oscura de arriba del todo, con la foto grande
   de fondo, el título y los datos de la exposición.

   Si "horario" se deja como cadena vacía (""), esa línea no se muestra.
   ---------------------------------------------------------------- */
const HERO = {
  foto: "/images/obras/gaber/umbrales/um60.jpg",
  titulo: "UMBRALES",
  artista: "William Gaber",
  lugar: "Centro Cultural Casa de Vacas · Parque de El Retiro, Madrid",
  fechas: "Del 2 al 25 de octubre de 2026",
  horario: "Todos los días de 10:00 a 21: 00 horas", // cadena vacía = no se muestra esta línea
  logo: "/images/logo/logoxinkuart.png",
};

/* ----------------------------------------------------------------
   2) SECCIONES_EXPOSICION — cada apartado de la pestaña "La exposición",
   EN EL ORDEN EN QUE SE VEN EN LA PÁGINA. Para reordenar un apartado,
   corta su bloque entero ({ ... }) y pégalo en otra posición del array.

   Para ocultar un apartado sin borrarlo, pon  visible: false.

   Cada bloque es SIEMPRE una fila de dos columnas en pantallas grandes
   (texto y foto) y una columna en móvil (foto primero, texto debajo).
   Solo hay dos variantes posibles, según fotoLado:
     "izquierda" → foto a la izquierda, texto a la derecha
     "derecha"   → texto a la izquierda, foto a la derecha

   Campos de cada bloque:
   - id: nombre interno (no se ve en la página).
   - visible: true / false.
   - fotoLado: "izquierda" | "derecha".
   - formatoCaja: "cuadrado" (hoy todas las cajas son cuadradas) o
     "vertical", por si en el futuro quieres una caja alta en algún
     bloque.
   - tamanoFoto: "auto" (recomendado — el tamaño se calcula solo según
     cuánto texto tiene el bloque) o fuerza uno fijo: "pequena" |
     "mediana" | "grande".
   - alineacionTexto: "arriba" | "centro" | "abajo" — a qué altura se
     ancla el texto respecto a la caja de la foto.
   - fondo: "blanco" | "crema" | "oscuro".
   - eyebrow: etiqueta pequeña en mayúsculas (ej. "Serie 02").
   - titulo: título del apartado.
   - textos: TODOS los párrafos del apartado, completos y literales.
   - cita: frase destacada opcional (no se usa en ningún bloque ahora
     mismo; añádela si quieres resaltar una frase).
   - foto: { src: "ruta completa", alt: "texto alternativo",
             pie: "pie de foto opcional (o quita la línea)",
             ajuste: "cover" (rellena la caja recortando) o "contain"
               (se ve entera, sin recortar),
             enfoque: "centro" | "arriba" | "abajo" | "izquierda" |
               "derecha" — qué zona de la foto se prioriza cuando
               ajuste es "cover" }

   IMPORTANTE: esta foto es independiente de las de OBRAS (más abajo).
   Cambiarla aquí no afecta a la pestaña "Obras" ni al visor, y viceversa.

   Ejemplo real ya migrado:
     {
       id: "cada-quien-su-isla",
       visible: true,
       fotoLado: "derecha",
       formatoCaja: "cuadrado",
       tamanoFoto: "auto",
       alineacionTexto: "abajo",
       fondo: "crema",
       eyebrow: "Serie 02",
       titulo: "Cada quien su isla",
       textos: ["La instalación propone una reflexión...", "..."],
       foto: {
         src: "/images/obras/gaber/umbrales/um12.jpg",
         alt: "Cada quien su isla",
         ajuste: "contain",
         enfoque: "centro",
       },
     }
   ---------------------------------------------------------------- */
const SECCIONES_EXPOSICION: SeccionExposicion[] = [
  // ---- 1. Apertura (Presentación) ----
  {
    id: "apertura",
    visible: true,
    fotoLado: "izquierda",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "blanco",
    titulo: "Presentación",
    textos: [
      "La obra de William Gaber nace de una experiencia vivida desde adentro: la de quien ha habitado dos mundos, y ha descubierto en esa tensión no una fractura, sino una forma de ver.",
      "UMBRALES es el resultado de esa mirada, una mirada que no divide, sino que observa los espacios de encuentro donde las personas, las lenguas y las memorias se reconocen mutuamente sin necesidad de explicación.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um11.jpg",
      alt: "William Gaber en el estudio",
      ajuste: "cover",
      enfoque: "centro",
    },
  },

  // ---- 2. Umbrales — Serie 01 (introducción) ----
  {
    id: "umbrales-intro",
    visible: true,
    fotoLado: "derecha",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "crema",
    eyebrow: "Serie 01",
    titulo: "Umbrales",
    textos: [
      "Peter Handke escribió que quien siente el dolor de los umbrales no es un turista. La frase encierra una intuición sencilla: las transformaciones importantes rara vez suceden de forma brusca. Antes de todo cambio existe una zona intermedia, un espacio ambiguo donde una realidad se desvanece mientras otra todavía no ha terminado de aparecer.",
      "La obra de William Gaber nace precisamente de esa experiencia. De quien ha habitado distintos territorios, distintas lenguas y distintas formas de pertenencia, descubriendo en ese tránsito no una fractura, sino una manera de mirar. Umbrales es el resultado de esa mirada: una mirada que se detiene en los espacios de encuentro donde las personas, las lenguas y las memorias se reconocen mutuamente sin necesidad de explicación.",
      "Más que hablar de lugares definidos, estas obras se sitúan en los procesos de transformación. Habitan ese territorio intermedio donde las categorías pierden rigidez y las diferencias dejan de funcionar como barreras para convertirse en experiencias compartidas. Es una idea cercana a la que Walter Benjamin atribuía al umbral: no una línea de separación, sino un espacio de tránsito, un lugar donde algo está dejando de ser para convertirse en otra cosa.",
      "A lo largo de los últimos años, Gaber ha desarrollado un vocabulario visual propio compuesto por figuras que se repiten y se transforman constantemente. Como las palabras dentro de una lengua viva, estas formas adquieren significado a través de sus relaciones. Círculos, líneas, estructuras arquitectónicas, sombras y pájaros reaparecen una y otra vez, configurando una gramática donde cada elemento parece contener la memoria del anterior y la posibilidad del siguiente.",
      "Las obras no se presentan aquí como elementos aislados, sino como partes de una misma conversación. Una forma conduce a otra, una estructura sostiene a la siguiente, una imagen parece anticipar aquello que todavía está por suceder. Arquitectura, lenguaje, juego y comunidad aparecen como expresiones de una misma materia invisible.",
      "En un momento histórico marcado por la velocidad, la obra de Gaber dirige la atención hacia aquello que suele permanecer fuera de foco: los vínculos que conectan experiencias, los espacios compartidos que existen entre las categorías establecidas y las estructuras invisibles que sostienen toda forma de convivencia.",
      "En estas obras nada permanece completamente inmóvil. Las formas se desplazan, los símbolos cambian de significado y las estructuras revelan relaciones que antes parecían invisibles. Como la luz que atraviesa una celosía o la sombra que modifica un espacio, el sentido aparece aquí siempre en movimiento, siempre a punto de transformarse.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um4.jpg",
      alt: "UMBRAL #06",
      ajuste: "cover",
      enfoque: "centro",
    },
  },

  // ---- 3. Cada quien su isla — Serie 02 ----
  {
    id: "cada-quien-su-isla",
    visible: true,
    fotoLado: "izquierda",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "blanco",
    eyebrow: "Serie 02",
    titulo: "Cada quien su isla",
    textos: [
      "La instalación propone una reflexión sobre las estructuras invisibles que organizan la vida en común. Las reglas, los límites y las normas que rigen nuestras sociedades no son fenómenos naturales; son construcciones humanas. Alguien las estableció, alguien definió qué era posible y qué no, qué debía permanecer dentro y qué debía quedar fuera. Como ocurre en cualquier juego, existen unas reglas previas que condicionan los movimientos de quienes participan en él.",
      "A primera vista, cada pájaro parece ocupar un territorio propio. Se sitúan sobre estructuras independientes, separados unos de otros, como si cada uno habitara una pequeña isla dentro de un paisaje compartido. Sin embargo, esa percepción inicial pronto se revela más compleja.",
      "Las delicadas estructuras de cobre evocan ese andamiaje social que sostiene nuestras relaciones cotidianas. Aunque cada elemento mantiene su singularidad, ninguno existe de forma completamente aislada. El conjunto depende de la presencia de cada una de sus partes, del mismo modo que cada individuo encuentra sentido dentro de una estructura colectiva más amplia.",
      "La figura del pájaro, recurrente en la obra de William Gaber, remite al Thó, ave profundamente vinculada al imaginario cultural de Yucatán y convertida por el artista en un símbolo de memoria, refugio y pertenencia. Suspendidos sobre una trama abierta que recuerda tanto a planos arquitectónicos como a redes de relación, los pájaros habitan un espacio donde lo individual y lo común permanecen en constante equilibrio.",
      "Lejos de representar una suma de elementos aislados, la instalación revela una condición compartida. Cada presencia parece ocupar su propio lugar, pero encuentra sentido dentro de una estructura mayor que la sostiene. Como ocurre con las ciudades, los lenguajes o las comunidades, lo que permanece visible es apenas una parte de una trama más extensa de relaciones, acuerdos y dependencias mutuas. Allí donde aparentemente sólo hay individuos, emerge silenciosamente la forma de un conjunto.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um3.jpg",
      alt: "Cada quien su isla",
      ajuste: "contain",
      enfoque: "centro",
    },
  },

  // ---- 4. Vecino — Serie 03 ----
  {
    id: "vecino",
    visible: true,
    fotoLado: "derecha",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "crema",
    eyebrow: "Serie 03",
    titulo: "Vecino",
    textos: [
      "Compuesta por ocho paneles, Vecino se articula como una secuencia de aperturas visuales donde la mirada nunca accede a una totalidad, sino a fragmentos. La obra toma como referencia la celosía, un elemento arquitectónico concebido para regular la relación entre interior y exterior, entre lo visible y lo oculto, permitiendo que la luz atraviese el muro sin llegar a disolverlo.",
      "Más que una barrera, el muro aparece aquí como una construcción ambigua. Desde tiempos remotos, los seres humanos han levantado límites para protegerse, delimitar territorios y establecer un sentido de orden frente a lo desconocido. Sin embargo, toda separación contiene una paradoja: aquello que pretende aislar nunca consigue hacerlo por completo. La celosía encarna precisamente esa tensión. Protege sin cerrar, delimita sin impedir el paso total, filtra la luz sin llegar a detenerla. Entre sus vacíos comienzan a aparecer las formas que constituyen el vocabulario visual del artista, como si la propia estructura revelara que todo límite es, al mismo tiempo, una posibilidad de conexión. La obra habita así ese espacio intermedio donde protección y apertura, refugio y tránsito, permanecen en constante equilibrio.",
      "Las formas que generan la celosía están muy vinculadas al vocabulario visual que William Gaber ha desarrollado a lo largo de los últimos años. Integradas dentro de una gramática compuesta por dieciocho elementos recurrentes, estas figuras reaparecen aquí como unidades capaces de generar múltiples combinaciones y significados. Como ocurre con las palabras dentro de una lengua, su sentido no reside únicamente en cada forma aislada, sino en las relaciones que establecen entre sí. Vecino constituye uno de los momentos en los que ese lenguaje comienza a hacerse visible, emergiendo desde la propia arquitectura de la obra.",
      "El historiador del arte Georges Didi-Huberman señala que toda imagen es, al mismo tiempo, una aparición y un ocultamiento. Vecino parece habitar precisamente ese lugar ambiguo. La obra propone una visión compleja, donde la luz, la geometría y la mirada construyen un espacio de relación. Lo que permanece al otro lado nunca termina de mostrarse por completo, pero tampoco desaparece. Permanece presente como huella, como indicio y como posibilidad. Como ocurre con los propios muros, lo más significativo no siempre reside en aquello que muestran, sino en todo aquello que dejan entrever.",
      "Es una única obra (políptico de 8 piezas) mostrada en dos imágenes, cada una con la mitad del conjunto.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um13.jpg",
      alt: "Vecino (vista 1 de 2)",
      ajuste: "contain",
      enfoque: "centro",
    },
  },

  // ---- 5. Umbrales — Serie 04 (serie de pinturas) ----
  {
    id: "umbrales-pinturas",
    visible: true,
    fotoLado: "izquierda",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "blanco",
    eyebrow: "Serie 04",
    titulo: "Umbrales",
    textos: [
      "Toda arquitectura destinada a protegernos contiene una paradoja. Aquello que delimita un espacio también determina nuestra manera de habitarlo; aquello que ofrece refugio establece igualmente una forma de distancia. Entre ambas condiciones surge un territorio ambiguo donde la separación y el encuentro dejan de ser categorías opuestas.",
      "Las piezas que integran la serie Umbrales parecen situarse precisamente en ese lugar. Sus estructuras recuerdan simultáneamente a celosías, planos arquitectónicos, diagramas o fragmentos de una escritura todavía por descifrar. Nada en ellas se presenta como una imagen estable. Las formas se reorganizan, cambian de posición, generan nuevas relaciones y desplazan continuamente el lugar desde el que la mirada construye sentido.",
      "Existe en estas obras una extraña condición de permanencia y transformación. Los mismos elementos reaparecen una y otra vez, pero nunca llegan a ocupar exactamente el mismo lugar. Como ocurre con las palabras dentro de una lengua viva, su significado parece depender menos de su forma individual que de las relaciones que establecen con aquello que las rodea.",
      "En una época caracterizada por la búsqueda constante de entornos previsibles y controlados, estas estructuras parecen recordar que toda construcción permanece incompleta. Algunas piezas muestran una misma configuración observada desde posiciones diferentes; otras convierten el límite en un espacio de tránsito. No es la forma la que cambia, sino la manera en que accedemos a ella.",
      "Tal vez por eso estas arquitecturas mínimas producen una sensación difícil de fijar. Sus formas parecen contener simultáneamente la promesa del refugio y la posibilidad del desplazamiento. Como ocurre con las celosías, la mirada oscila constantemente entre aquello que construye la estructura y aquello que ésta permite revelar. Las formas, los intervalos, las aperturas y las relaciones que emergen entre ellas configuran un espacio en permanente transformación.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um15.jpg",
      alt: "UMBRAL #04",
      ajuste: "cover",
      enfoque: "centro",
    },
  },

  // ---- 6. Una raya en el agua — Serie 05 ----
  {
    id: "una-raya-en-el-agua",
    visible: true,
    fotoLado: "derecha",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "crema",
    eyebrow: "Serie 05",
    titulo: "Una raya en el agua",
    textos: [
      "Compuesta por treinta y seis módulos idénticos, Una raya en el agua se construye a partir de un principio aparentemente sencillo: las mismas formas son capaces de generar configuraciones distintas según la posición que ocupan dentro del conjunto. Nada cambia y, sin embargo, todo se transforma.",
      "La obra toma su título de una expresión que alude a la imposibilidad de fijar un límite estable sobre una superficie en movimiento. Cualquier línea trazada sobre el agua aparece y desaparece de forma inmediata, revelando la fragilidad de aquello que creemos permanente. Los contornos existen, pero sólo durante un instante.",
      "Esta condición encuentra resonancia en el pensamiento de Zygmunt Bauman, quien describió la contemporaneidad como una realidad líquida, caracterizada por la inestabilidad de las estructuras, los vínculos y las categorías que tradicionalmente organizaban la experiencia humana. En este contexto, los límites dejan de entenderse como certezas para convertirse en acuerdos temporales, siempre susceptibles de ser desplazados o redefinidos.",
      "Las treinta y seis pinturas que conforman el políptico funcionan como una metáfora visual de esta condición. Cada módulo conserva su identidad, pero el significado del conjunto depende de las relaciones que se establecen entre las partes.",
      "Las formas se desplazan, se reorganizan y generan nuevas lecturas sin alterar los elementos que las constituyen. Como ocurre con los mapas, los lenguajes o las comunidades, el sentido emerge de la estructura que los articula y no únicamente de los componentes individuales.",
      "De algún modo, la obra parece dialogar también con aquella intuición atribuida a Heráclito según la cual nadie se baña dos veces en el mismo río. No porque el río cambie únicamente, sino porque toda experiencia se encuentra atravesada por una transformación constante. Una raya en el agua convierte esa condición efímera en imagen: una composición que parece buscar el orden al mismo tiempo que evidencia su carácter inevitablemente transitorio.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um8.jpg",
      alt: "Una raya en el agua",
      ajuste: "cover",
      enfoque: "centro",
    },
  },

  // ---- 7. Piedra sobre piedra — Serie 06 ----
  {
    id: "piedra-sobre-piedra",
    visible: true,
    fotoLado: "izquierda",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "blanco",
    eyebrow: "Serie 06",
    titulo: "Piedra sobre piedra (Se construye un muro)",
    textos: [
      "Los muros rara vez comienzan siendo muros. Antes fueron apenas una primera piedra, un gesto casi imperceptible, una decisión que parecía no tener consecuencias. Sólo con el tiempo, cuando cada nueva pieza encuentra apoyo en la anterior, la construcción adquiere la apariencia de algo sólido e inevitable.",
      "Las obras que integran esta serie parecen detenerse en ese proceso de formación. Las capas permanecen visibles y ninguna llega a borrar completamente la anterior. Cada nueva forma modifica el conjunto sin ocultar aquello sobre lo que se sostiene, como si toda construcción conservara la memoria de sus propios cimientos.",
      "Algo semejante ocurre con las ideas. Ninguna forma de comprender el mundo aparece de manera repentina. Se construye lentamente, a través de palabras, imágenes, relatos y pequeñas afirmaciones que se repiten hasta adquirir la apariencia de una evidencia. Lo que comenzó siendo una posibilidad termina convirtiéndose, casi sin advertirlo, en una forma de mirar.",
      "Estas obras parecen situarse precisamente en ese umbral donde toda construcción permanece todavía abierta.",
      "Allí donde cada nueva piedra modifica el conjunto y donde aún resulta posible detenerse un instante para preguntarse qué piedra aceptamos colocar.",
      "Quizá sea en esa acumulación casi imperceptible donde comienza a definirse la forma del mundo que habitamos.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um1.jpg",
      alt: "Piedra sobre piedra #01",
      ajuste: "cover",
      enfoque: "centro",
    },
  },

  // ---- 8. Es solo un juego — Serie 07 ----
  {
    id: "es-solo-un-juego",
    visible: true,
    fotoLado: "derecha",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "crema",
    eyebrow: "Serie 07",
    titulo: "Es solo un juego",
    textos: [
      "Antes de comenzar, el espacio ya ha sido dividido. Existen posiciones, recorridos posibles y lugares que no deben ser atravesados. Una línea basta para transformar el territorio y establecer un orden allí donde antes sólo había superficie.",
      "A partir de ese momento, cada movimiento adquiere un sentido. Estar dentro o fuera, avanzar o retroceder, acertar o equivocarse son posibilidades que sólo existen porque previamente se ha aceptado una estructura. Las reglas hacen posible el juego, pero también determinan la manera en que aprendemos a movernos dentro de él.",
      "Hay algo profundamente humano en esa necesidad de establecer límites, nombrar posiciones y acordar sistemas desde los que ordenar la experiencia. Con el tiempo, aquello que comenzó siendo una decisión puede adquirir la solidez de una certeza. Las líneas permanecen, los movimientos se repiten y resulta cada vez más difícil imaginar el espacio antes de que fueran trazadas.",
      "Es solo un juego se detiene en ese momento de aparente estabilidad. Las formas ocupan su lugar, las líneas organizan la superficie y todo parece responder a un orden reconocible. Sin embargo, basta un ligero desplazamiento para que aparezca una fisura. Recordar que toda regla tuvo un comienzo implica admitir que también podría haber sido formulada de otra manera.",
      "Quizá el juego nunca haya consistido únicamente en aprender sus reglas, sino en conservar la capacidad de volver a mirarlas como si las encontráramos por primera vez.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um41.jpg",
      alt: "Es solo un juego I",
      ajuste: "cover",
      enfoque: "centro",
    },
  },

  // ---- 9. Permeabilidad — Serie 08 ----
  {
    id: "permeabilidad",
    visible: true,
    fotoLado: "izquierda",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "blanco",
    eyebrow: "Serie 08",
    titulo: "Permeabilidad",
    textos: [
      "Hay herencias que se transmiten con las manos y otras que sólo pueden ofrecerse proyectándose hacia el futuro. Algunas no adoptan la forma de un objeto, sino la de una sombra capaz de alcanzar a quienes todavía no han llegado.",
      "Un árbol no nace ofreciendo sombra. Antes necesita tiempo, cuidado y la paciencia de quienes entendieron que crecer nunca es un acto exclusivamente individual. Sólo después su presencia comienza a extenderse más allá de sí mismo.",
      "Las obras reunidas bajo el título Permeabilidad parecen detenerse en ese instante. La luz atraviesa las estructuras y las proyecta más allá de su propia materialidad. Lo visible no concluye en el objeto. Continúa en aquello que alcanza, modifica y pone en relación.",
      "Algo parecido ocurre con las culturas. Ninguna nace aislada, del mismo modo que ninguna permanece intacta. Cada una hereda conocimientos, formas de habitar, maneras de construir y de comprender el mundo que continúan transformándose al entrar en contacto con otras.",
      "Lo que hoy entendemos como propio es también el resultado de múltiples influencias que siguen proyectándose sobre el presente, como una sombra que no pertenece únicamente a quien la produjo, sino también a quienes continúan habitándola.",
      "Las formas que atraviesan estas pinturas parecen participar de esa misma condición. No buscan fijar una imagen definitiva, sino permanecer disponibles para seguir estableciendo relaciones. Como ocurre con los árboles, quizá su verdadera dimensión no se encuentre únicamente en la forma que ocupan, sino en aquello que son capaces de proyectar mucho después de que su presencia haya dejado de ser el centro de la mirada.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um49.jpg",
      alt: "Permeabilidad 3",
      ajuste: "cover",
      enfoque: "centro",
    },
  },

  // ---- 10. Monumentos — Serie 09 ----
  {
    id: "monumentos",
    visible: true,
    fotoLado: "derecha",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "oscuro",
    eyebrow: "Serie 09",
    titulo: "Monumentos",
    textos: [
      "Todo monumento es una idea que un día encontró la forma de convertirse en materia.",
      "Las sociedades dejan visibles sus ideas levantándolas en el espacio. Algunas adoptan la forma de leyes, otras de relatos y otras encuentran en el monumento la posibilidad de permanecer más allá de quienes las imaginaron.",
      "Los monumentos no sólo hablan del tiempo en que fueron construidos; hablan, sobre todo, del tiempo desde el que vuelven a ser mirados. Cambian las generaciones, cambian las preguntas y cambia también la forma de relacionarnos con aquello que hemos recibido.",
      "Quizá ningún monumento sea completamente estable. La piedra permanece, pero la historia nunca deja de desplazarse bajo sus cimientos.",
      "Las obras reunidas bajo el título Monumentos invitan a detenerse en esa condición cambiante. Toda sociedad construye imágenes para representar aquello que considera valioso, pero también vuelve sobre ellas desde nuevas sensibilidades y nuevas formas de comprender el presente. Lo que parecía inamovible descubre entonces su fragilidad: no la de la piedra, sino la de las ideas que un día le dieron sentido.",
      "George Steiner entendía la cultura como una conversación que nunca concluye. Ninguna identidad nace de un único origen, del mismo modo que ninguna cultura puede comprenderse eliminando las capas que la constituyen. Aquello que hoy reconocemos como propio es el resultado de tiempos, encuentros y desplazamientos que siguen conviviendo en el presente, incluso cuando dejamos de advertir su origen.",
      "Las pinturas de William Gaber invitan a habitar esa conversación de hacer visible que toda cultura permanece en constante relectura. Quizá la permanencia no consista en conservar intacto aquello que recibimos, sino en mantener abierta la conversación desde la que una sociedad continúa pensándose a sí misma.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/um59.jpg",
      alt: "Monumento #P14",
      ajuste: "contain",
      enfoque: "centro",
    },
  },

  // ---- 11. Sobre el artista ----
  {
    id: "sobre-el-artista",
    visible: true,
    fotoLado: "izquierda",
    formatoCaja: "cuadrado",
    tamanoFoto: "auto",
    alineacionTexto: "centro",
    fondo: "crema",
    eyebrow: "El artista",
    titulo: "William Gaber",
    textos: [],
    retrato: {
      src: "/images/featured/artwork6.jpg",
      alt: "William Gaber",
    },
    biografia: [
      "William Gaber (México, 1968), es un artista que divide su tiempo entre la Ciudad de México, Madrid, España y Yucatán.",
      "Ha desarrollado su vocación de manera autodidacta, complementando su formación bajo la tutela de diversos maestros en México, así como mediante asistencias en talleres de artistas reconocidos. Entre sus estudios más recientes destacan los Talleres del Prado en Madrid y el Royal College of Art de Londres.",
    ],
    foto: {
      src: "/images/obras/gaber/umbrales/william-gaber-retrato.jpg",
      alt: "William Gaber",
      ajuste: "cover",
      enfoque: "centro",
    },
  },
];

/* ----------------------------------------------------------------
   3) OBRAS — todas las obras de la pestaña "Obras" y del visor a
   pantalla completa. Cada obra es independiente de SECCIONES_EXPOSICION.

   Campos: id, serie, titulo, tecnica, medidas, anio, foto (ruta completa).
   ---------------------------------------------------------------- */
const OBRAS: ObraEditable[] = [
  { id: "cada-quien-su-isla", serie: "Cada quien su isla (instalación)", titulo: "Cada quien su isla", tecnica: "Tubos de cobre y pájaros en impresión 3D", medidas: "1000 x 400 x 170 cm (aprox.)", anio: "2026", foto: "/images/obras/gaber/umbrales/um12.jpg" },
  { id: "vecino-1", serie: "Vecino", titulo: "Vecino (vista 1 de 2)", tecnica: "Acrílico sobre tela. Políptico (8 piezas)", medidas: "100 x 800 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um13.jpg" },
  { id: "vecino-2", serie: "Vecino", titulo: "Vecino (vista 2 de 2)", tecnica: "Acrílico sobre tela. Políptico (8 piezas)", medidas: "100 x 800 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um14.jpg" },
  { id: "umbral-01", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #01", tecnica: "Acrílico sobre tela", medidas: "60 x 60 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um15.jpg" },
  { id: "umbral-02", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #02", tecnica: "Acrílico sobre tela", medidas: "60 x 60 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um16.jpg" },
  { id: "umbral-03", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #03", tecnica: "Acrílico sobre tela", medidas: "60 x 60 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um17.jpg" },
  { id: "umbral-04", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #04", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um18.jpg" },
  { id: "umbral-05", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #05", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um19.jpg" },
  { id: "umbral-06", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #06", tecnica: "Grafito y acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um20.jpg" },
  { id: "umbral-07", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #07", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um21.jpg" },
  { id: "umbral-13", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #13", tecnica: "Acrílico, lápices de colores y grafito sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um22.jpg" },
  { id: "umbral-08", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #08", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um23.jpg" },
  { id: "umbral-09", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #09", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um24.jpg" },
  { id: "umbral-10", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #10", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um25.jpg" },
  { id: "umbral-11", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #11", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um26.jpg" },
  { id: "umbral-12", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #12", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um27.jpg" },
  { id: "umbral-14", serie: "Umbrales (serie de pinturas)", titulo: "UMBRAL #14", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um28.jpg" },
  { id: "celosias-anfitrion-1", serie: "Umbrales (serie de pinturas)", titulo: "Celosías anfitrión I", tecnica: "Acrílico sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um29.jpg" },
  { id: "celosias-anfitrion-2", serie: "Umbrales (serie de pinturas)", titulo: "Celosías anfitrión II", tecnica: "Acrílico sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um30.jpg" },
  { id: "una-raya-en-el-agua", serie: "Una raya en el agua", titulo: "Una raya en el agua", tecnica: "Acrílico sobre tela. Políptico (36 piezas)", medidas: "300 x 300 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um31.jpg" },
  { id: "piedra-sobre-piedra-01", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #01", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um32.jpg" },
  { id: "piedra-sobre-piedra-02", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #02", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um33.jpg" },
  { id: "piedra-sobre-piedra-03", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #03", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um34.jpg" },
  { id: "piedra-sobre-piedra-04", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #04", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um35.jpg" },
  { id: "piedra-sobre-piedra-05", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #05", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um36.jpg" },
  { id: "piedra-sobre-piedra-06", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #06", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um37.jpg" },
  { id: "piedra-sobre-piedra-07", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #07", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um38.jpg" },
  { id: "piedra-sobre-piedra-08", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #08", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um39.jpg" },
  { id: "piedra-sobre-piedra-09", serie: "Piedra sobre piedra (Se construye un muro)", titulo: "Piedra sobre piedra (Se construye un muro) #09", tecnica: "Óleo sobre tela", medidas: "50 x 50 cm", anio: "2025", foto: "/images/obras/gaber/umbrales/um40.jpg" },
  { id: "es-solo-un-juego-1", serie: "Es solo un juego", titulo: "Es solo un juego I", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um41.jpg" },
  { id: "es-solo-un-juego-2", serie: "Es solo un juego", titulo: "Es solo un juego II", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um42.jpg" },
  { id: "es-solo-un-juego-3", serie: "Es solo un juego", titulo: "Es solo un juego III", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um43.jpg" },
  { id: "es-solo-un-juego-4", serie: "Es solo un juego", titulo: "Es solo un juego IV", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um44.jpg" },
  { id: "es-solo-un-juego-5", serie: "Es solo un juego", titulo: "Es solo un juego V", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um45.jpg" },
  { id: "es-solo-un-juego-6", serie: "Es solo un juego", titulo: "Es solo un juego VI", tecnica: "Acrílico sobre tela", medidas: "100 x 100 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um46.jpg" },
  { id: "permeabilidad-1", serie: "Permeabilidad", titulo: "Permeabilidad 1", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um47.jpg" },
  { id: "permeabilidad-2", serie: "Permeabilidad", titulo: "Permeabilidad 2", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um48.jpg" },
  { id: "permeabilidad-3", serie: "Permeabilidad", titulo: "Permeabilidad 3", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um49.jpg" },
  { id: "permeabilidad-4", serie: "Permeabilidad", titulo: "Permeabilidad 4", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um50.jpg" },
  { id: "permeabilidad-5", serie: "Permeabilidad", titulo: "Permeabilidad 5", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um51.jpg" },
  { id: "permeabilidad-6", serie: "Permeabilidad", titulo: "Permeabilidad 6", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um52.jpg" },
  { id: "permeabilidad-7", serie: "Permeabilidad", titulo: "Permeabilidad 7", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um53.jpg" },
  { id: "permeabilidad-8", serie: "Permeabilidad", titulo: "Permeabilidad 8", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um54.jpg" },
  { id: "permeabilidad-9", serie: "Permeabilidad", titulo: "Permeabilidad 9", tecnica: "Acrílico sobre tela", medidas: "80 x 80 cm", anio: "2026", foto: "/images/obras/gaber/umbrales/um55.jpg" },
  { id: "monumento-p7", serie: "Monumentos", titulo: "Monumento #P7", tecnica: "Acrílico sobre tela", medidas: "180 x 130 cm", anio: "2023", foto: "/images/obras/gaber/umbrales/um56.jpg" },
  { id: "monumento-p14", serie: "Monumentos", titulo: "Monumento #P14", tecnica: "Acrílico sobre tela", medidas: "190 x 150 cm", anio: "2023", foto: "/images/obras/gaber/umbrales/um57.jpg" },
  { id: "monumento-s6", serie: "Monumentos", titulo: "Monumento #S6", tecnica: "Acero y pintura electrostática", medidas: "64.5 x 33 x 12 cm", anio: "2023", foto: "/images/obras/gaber/umbrales/um58.png" },
];

/* ----------------------------------------------------------------
   4) CATALOGO — la pestaña "Catálogo": portada, título, descripción
   y el PDF descargable.
   ---------------------------------------------------------------- */
const CATALOGO = {
  titulo: "UMBRALES",
  descripcion:
    "Catálogo oficial de la exposición UMBRALES, con las nueve series de la muestra, las fichas técnicas de cada obra y el recorrido curatorial completo de William Gaber en el Centro Cultural Casa de Vacas.",
  portada: "/images/obras/gaber/umbrales/um61.jpg",
  pdf: "/exposiciones/gaberumbrales.pdf",
};

/* ----------------------------------------------------------------
   5) CV — Colecciones, Exposiciones y Becas del artista, que se
   muestran en el bloque "Sobre el artista".
   ---------------------------------------------------------------- */
const CV = {
  colecciones: [
    "Fundación PONS, Madrid, España",
    "Colección Centro Cultural Casa de Indias, Cádiz, España",
    'Museo del Ferrocarril, Permanent collection "Entre el juego y el progreso", Mérida, México. Monumental Sculpture',
    'Cultural heritage of the City of Mérida, Mexico. "What we let through". Monumental Sculpture',
    'Inmobilia Collection, Mérida, Mexico. "Monument #SL05", Monumental Sculpture',
  ] as string[],
  becas: [
    { year: "2025", text: "Residencia anfitrión, Marbella, Spain. Production grant" },
    { year: "2024", text: "Off line Ventures, Onomichi, Japan. Art residency" },
    { year: "2023", text: "Casa Lool, Production grant, multiples. Mexico" },
  ] as CVEntry[],
  exposicionesIndividuales: [
    { year: "2026", text: '"Casa Pilar", Galería Alejandra Topete, Mexico City' },
    { year: "2025", text: '"Un pueblo por un Euro", Galleria Gotxicoa, Monterrey, Mexico' },
    { year: "2025", text: '"You are who you practice being", Galleria Alejandra Topete, Mexico City' },
    { year: "2025", text: '"A roof over my head", Galería Lux Perpetua, Mérida, México' },
    { year: "2024", text: '"Monumentos", Embajada de México en Japón, Tokio, Japón' },
    { year: "2023", text: '"Monuments", Gran Museo del Mundo Maya, Mérida, Mx' },
    { year: "2023", text: '"Monument", Galería Alfredo Ginocchio, Mexico City' },
    { year: "2022", text: '"What we let through", Centro Cultural Olimpo, Mérida, Mexico' },
    { year: "2022", text: '"What we let through", Mexican Embassy in Spain, ICME' },
    { year: "2021", text: '"Whole", PEN Projects, Miami, Florida' },
    { year: "2021", text: '"¿Qué estará haciendo Houdini?", Centro de Arte Casa de Indias, Cádiz, Spain' },
    { year: "2016", text: '"Sacred Places", PEN Projects, Miami, Florida' },
    { year: "2016", text: '"In the eye of the beholder", Fundación Pons, Madrid, Spain' },
    { year: "2016", text: '"La Maqueta Humana", Galería Casa Gotxicoa, Monterrey, Mexico' },
  ] as CVEntry[],
  exposicionesColectivas: [
    { year: "2026", text: "Intaglio, Galería Lux Perpetua, Mérida, Mexico" },
    { year: "2025", text: "The Shape of Thought, Alejandra Topete Gallery, Mexico City" },
    { year: "2024", text: "Reflejos Ocultos, Mexico City. Maison Celeste" },
    { year: "2023", text: "Kuna Gallery, San Miguel de Allende, Mexico" },
    { year: "2023", text: '"The summer exhibition", Galería Lux Perpetua, Mérida, Yucatán' },
    { year: "2022", text: '"Carajillo", Nave Oporto, Madrid, Spain' },
    { year: "2020", text: '"Corriente Alterna / Corriente Continua", Galería Nueva, Madrid, Spain' },
    { year: "2018", text: "Galería Pandea Cartesiano, Puebla, Mexico" },
    { year: "2018", text: "Museo Vostell Malpartida, Malpartida de Cáceres, Spain" },
    { year: "2017", text: "Royal College of Art, London, England" },
    { year: "2016", text: "PEN Projects, Miami, Florida" },
    { year: "2016", text: "Aqua Art Miami, Rubber Stamp Art Projects, Miami, Florida" },
    { year: "2016", text: "Espacio Mannach, Mexico City" },
  ] as CVEntry[],
};

/* ================================================================================
   FIN ZONA EDITABLE: no hace falta tocar nada más abajo
   (son las funciones que dibujan la página a partir de los datos de arriba).
   ================================================================================ */

const CATALOGO_PDF = CATALOGO.pdf;

/* ============================================================
   PALABRAS Y TAMAÑO DE FOTO AUTOMÁTICO
   ============================================================ */

function contarPalabras(seccion: SeccionExposicion): number {
  const texto = [...seccion.textos, seccion.cita ?? ""].join(" ");
  return texto.trim().split(/\s+/).filter(Boolean).length;
}

function resolverTamanoFoto(seccion: SeccionExposicion): "pequena" | "mediana" | "grande" {
  if (seccion.tamanoFoto !== "auto") return seccion.tamanoFoto;
  const n = contarPalabras(seccion);
  if (n < AJUSTES_DISENO.umbralesPalabras.pequena) return "pequena";
  if (n <= AJUSTES_DISENO.umbralesPalabras.mediana) return "mediana";
  return "grande";
}

function enfoqueClass(e: Enfoque): string {
  if (e === "arriba") return "object-top";
  if (e === "abajo") return "object-bottom";
  if (e === "izquierda") return "object-left";
  if (e === "derecha") return "object-right";
  return "object-center";
}

/* ============================================================
   CAJA DE FOTO — formato fijo, tamaño según la cantidad de texto.
   Si falla, muestra la ruta que falla dentro de la misma caja.
   ============================================================ */

function CajaFoto({
  foto,
  formato,
  tamano,
  fondoOscuro,
}: {
  foto: FotoBloque;
  formato: FormatoCaja;
  tamano: "pequena" | "mediana" | "grande";
  fondoOscuro: boolean;
}) {
  const [error, setError] = useState(false);
  const aspecto = formato === "cuadrado" ? "aspect-square" : "aspect-[3/4]";
  const anchoMax = AJUSTES_DISENO.anchoFoto[tamano];
  const bg = fondoOscuro ? "bg-[#1b1b1b]" : "bg-[#f1efec]";

  return (
    <div className="w-full">
      <div className={`relative w-full ${aspecto} ${bg} overflow-hidden`} style={{ maxHeight: "80vh" }}>
        {error ? (
          <div className="absolute inset-0 flex items-center justify-center border border-dashed border-gray-300 p-4 text-center">
            <p className={`${raleway.className} text-gray-400 text-[11px] uppercase tracking-widest break-all`}>
              {foto.src}
            </p>
          </div>
        ) : (
          <Image
            src={foto.src}
            alt={foto.alt}
            fill
            loading="lazy"
            sizes={`(max-width: 768px) 100vw, ${anchoMax}px`}
            className={`${foto.ajuste === "cover" ? "object-cover" : "object-contain"} ${enfoqueClass(foto.enfoque)}`}
            onError={() => setError(true)}
          />
        )}
      </div>
      {foto.pie && <p className={`${raleway.className} text-gray-500 text-[15px] md:text-base mt-3`}>{foto.pie}</p>}
    </div>
  );
}

/** Imagen de obra (pestaña Obras / visor): si falla, muestra la ruta. */
function ObraImage({
  obra,
  className,
  sizes,
}: {
  obra: Pick<ObraEditable, "foto" | "titulo">;
  className?: string;
  sizes: string;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="absolute inset-0 flex items-center justify-center border border-dashed border-gray-300 p-3 text-center">
        <p className={`${raleway.className} text-gray-400 text-[10px] uppercase tracking-widest break-all`}>
          {obra.foto}
        </p>
      </div>
    );
  }
  return (
    <Image
      src={obra.foto}
      alt={obra.titulo}
      fill
      loading="lazy"
      className={className || "object-contain"}
      sizes={sizes}
      onError={() => setError(true)}
    />
  );
}

function ReadingParagraphs({ parrafos, tono = "claro" }: { parrafos: string[]; tono?: "claro" | "oscuro" }) {
  const tamano = TAMANO_TEXTO_CLASES[AJUSTES_DISENO.tamanoTexto];
  const color = tono === "oscuro" ? "text-white/95" : "text-[#1a1a1a]";
  return (
    <>
      {parrafos.map((p, i) => (
        <p key={i} className={`${raleway.className} font-normal ${color} ${tamano} leading-[1.85] mb-5 last:mb-0`}>
          {p}
        </p>
      ))}
    </>
  );
}

/* ============================================================
   ANIMACIÓN (fade al entrar en pantalla, respeta reduced-motion)
   ============================================================ */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CVList({ title, entries, tono = "claro" }: { title: string; entries: CVEntry[]; tono?: "claro" | "oscuro" }) {
  const colorTitulo = tono === "oscuro" ? "text-white" : "text-[#111111]";
  const colorTexto = tono === "oscuro" ? "text-white/95" : "text-[#1a1a1a]";
  return (
    <div>
      <h3 className={`${playfair.className} font-medium ${colorTitulo} text-xl md:text-2xl mb-5`}>{title}</h3>
      <ul className="space-y-3">
        {entries.map((entry, i) => (
          <li key={i} className="flex gap-4">
            <span className={`${raleway.className} text-[#FF0000] text-sm font-medium shrink-0 w-12`}>{entry.year}</span>
            <span className={`${raleway.className} ${colorTexto} text-base leading-relaxed font-normal`}>{entry.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   HELPERS DE MAQUETACIÓN
   ============================================================ */

function fondoClass(f: Fondo): string {
  if (f === "crema") return "bg-[#faf9f7]";
  if (f === "oscuro") return "bg-black";
  return "bg-white";
}

function justifyClass(a?: AlineacionTexto): string {
  if (a === "centro") return "justify-center";
  if (a === "abajo") return "justify-end";
  return "justify-start";
}

/** Solo para el texto mostrado en los chips de filtro de la pestaña Obras: quita la coletilla entre paréntesis sin tocar el valor real de `serie` (los datos de OBRAS no cambian). */
function etiquetaSerie(serie: string): string {
  return serie.replace(/\s*\([^)]*\)\s*$/, "");
}

function Eyebrow({ text }: { text: string }) {
  return (
    <span className={`${raleway.className} block text-sm uppercase tracking-[0.25em] text-[#FF0000] font-medium mb-3`}>
      {text}
    </span>
  );
}

/* ============================================================
   LAS DOS ÚNICAS COMPOSICIONES
   ============================================================ */

/** Fila de dos columnas a ancho completo: foto pegada a su margen + texto flexible. */
function SeccionBloque({ seccion }: { seccion: SeccionExposicion }) {
  const esIzquierda = seccion.fotoLado === "izquierda";
  const oscuro = seccion.fondo === "oscuro";
  const colorTitulo = oscuro ? "text-white" : "text-[#111111]";
  const tamanoTexto = TAMANO_TEXTO_CLASES[AJUSTES_DISENO.tamanoTexto];
  const tamanoFoto = resolverTamanoFoto(seccion);
  const anchoPx = AJUSTES_DISENO.anchoFoto[tamanoFoto];

  const fotoOrder = esIzquierda ? "" : "lg:order-2";
  const textoOrder = esIzquierda ? "" : "lg:order-1";

  return (
    <section className={fondoClass(seccion.fondo)}>
      <div
        className={`mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 py-16 md:py-24 grid grid-cols-1 ${
          esIzquierda
            ? "lg:grid-cols-[var(--foto-w)_1fr] gap-12 lg:gap-20"
            : "lg:grid-cols-[1fr_var(--foto-w)] gap-12 lg:gap-20"
        } items-start`}
        style={
          {
            maxWidth: AJUSTES_DISENO.anchoMaximoPagina,
            "--foto-w": `${anchoPx}px`,
          } as React.CSSProperties
        }
      >
        <div className={`order-1 ${fotoOrder} w-full lg:sticky lg:top-28 lg:self-start`}>
          <FadeIn className="w-full block">
            <CajaFoto foto={seccion.foto} formato={seccion.formatoCaja} tamano={tamanoFoto} fondoOscuro={oscuro} />
          </FadeIn>
        </div>

        <FadeIn
          className={`order-2 ${textoOrder} flex flex-col ${justifyClass(seccion.alineacionTexto)} max-w-[62rem]`}
          delay={0.1}
        >
          {seccion.eyebrow && <Eyebrow text={seccion.eyebrow} />}
          {seccion.titulo && (
            <h2 className={`${playfair.className} font-normal ${colorTitulo} text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-left`}>
              {seccion.titulo}
            </h2>
          )}
          {seccion.textos.map((p, i) => (
            <p
              key={i}
              className={`${raleway.className} font-normal text-left ${
                oscuro ? "text-white/95" : "text-[#1a1a1a]"
              } ${tamanoTexto} leading-[1.85] mb-5 last:mb-0`}
            >
              {p}
            </p>
          ))}
          {seccion.cita && (
            <p className={`${playfair.className} italic text-left ${colorTitulo} text-2xl md:text-3xl leading-snug mt-2`}>
              “{seccion.cita}”
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

/** El único bloque especial: retrato + biografía (misma fila de dos columnas) y, debajo, el CV a ancho completo. */
function LayoutSobreElArtista({
  seccion,
  cvExpanded,
  onToggleCv,
}: {
  seccion: SeccionExposicion;
  cvExpanded: boolean;
  onToggleCv: () => void;
}) {
  const esIzquierda = seccion.fotoLado === "izquierda";
  const oscuro = seccion.fondo === "oscuro";
  const colorTitulo = oscuro ? "text-white" : "text-[#111111]";
  const tamanoFoto = resolverTamanoFoto(seccion);
  const anchoPx = AJUSTES_DISENO.anchoFoto[tamanoFoto];

  const fotoOrder = esIzquierda ? "" : "lg:order-2";
  const textoOrder = esIzquierda ? "" : "lg:order-1";

  const individualesRecientes = CV.exposicionesIndividuales.slice(0, 5);
  const individualesResto = CV.exposicionesIndividuales.slice(5);
  const colectivasRecientes = CV.exposicionesColectivas.slice(0, 5);
  const colectivasResto = CV.exposicionesColectivas.slice(5);

  return (
    <section className={fondoClass(seccion.fondo)}>
      <div
        className="mx-auto px-5 sm:px-8 lg:px-14 xl:px-20 py-16 md:py-24"
        style={{ maxWidth: AJUSTES_DISENO.anchoMaximoPagina }}
      >
        <div
          className={`grid grid-cols-1 ${
            esIzquierda
              ? "lg:grid-cols-[var(--foto-w)_1fr] gap-12 lg:gap-20"
              : "lg:grid-cols-[1fr_var(--foto-w)] gap-12 lg:gap-20"
          } items-start mb-16`}
          style={{ "--foto-w": `${anchoPx}px` } as React.CSSProperties}
        >
          <div className={`order-1 ${fotoOrder} w-full lg:sticky lg:top-28 lg:self-start`}>
            <FadeIn className="w-full block">
              {seccion.retrato && (
                <CajaFoto
                  foto={{ src: seccion.retrato.src, alt: seccion.retrato.alt, ajuste: "cover", enfoque: "centro" }}
                  formato={seccion.formatoCaja}
                  tamano={tamanoFoto}
                  fondoOscuro={oscuro}
                />
              )}
            </FadeIn>
          </div>

          <FadeIn className={`order-2 ${textoOrder} flex flex-col justify-center max-w-[62rem]`} delay={0.1}>
            {seccion.eyebrow && <Eyebrow text={seccion.eyebrow} />}
            {seccion.titulo && (
              <h2 className={`${playfair.className} font-normal ${colorTitulo} text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-left`}>
                {seccion.titulo}
              </h2>
            )}
            <ReadingParagraphs parrafos={seccion.biografia ?? []} tono={oscuro ? "oscuro" : "claro"} />
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className={`${playfair.className} font-medium ${colorTitulo} text-xl md:text-2xl mb-5`}>Colecciones</h3>
              <ul className="space-y-3">
                {CV.colecciones.map((c, i) => (
                  <li
                    key={i}
                    className={`${raleway.className} ${oscuro ? "text-white/95" : "text-[#1a1a1a]"} text-base leading-relaxed font-normal flex gap-3`}
                  >
                    <span className="text-[#FF0000] shrink-0">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CVList title="Becas y residencias" entries={CV.becas} tono={oscuro ? "oscuro" : "claro"} />
            <CVList title="Exposiciones individuales" entries={individualesRecientes} tono={oscuro ? "oscuro" : "claro"} />
            <CVList title="Exposiciones colectivas" entries={colectivasRecientes} tono={oscuro ? "oscuro" : "claro"} />
          </div>

          <AnimatePresence initial={false}>
            {cvExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-12">
                  <CVList title="Exposiciones individuales (resto)" entries={individualesResto} tono={oscuro ? "oscuro" : "claro"} />
                  <CVList title="Exposiciones colectivas (resto)" entries={colectivasResto} tono={oscuro ? "oscuro" : "claro"} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={onToggleCv}
            className="mt-8 inline-flex items-center gap-2 text-[#FF0000] hover:opacity-80 transition-opacity duration-300 text-xs uppercase tracking-[0.2em] font-medium"
          >
            {cvExpanded ? "Ver menos" : "Ver CV completo"}
            <ChevronDown size={14} className={`transition-transform duration-300 ${cvExpanded ? "rotate-180" : ""}`} />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

/** Renderizador principal: recorre SECCIONES_EXPOSICION y pinta cada bloque visible. */
function SeccionRenderer({
  seccion,
  cvExpanded,
  onToggleCv,
}: {
  seccion: SeccionExposicion;
  cvExpanded: boolean;
  onToggleCv: () => void;
}) {
  if (seccion.id === "sobre-el-artista") {
    return <LayoutSobreElArtista seccion={seccion} cvExpanded={cvExpanded} onToggleCv={onToggleCv} />;
  }
  return <SeccionBloque seccion={seccion} />;
}

/* ============================================================
   OBRAS — tarjeta de la pestaña "Obras"
   ============================================================ */

function ObrasCard({ obra, onClick }: { obra: ObraEditable; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square overflow-hidden bg-[#f1efec] mb-4">
        <ObraImage
          obra={obra}
          className="object-contain transition-transform duration-500 group-hover:scale-105 p-3"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="space-y-1">
        <p className={`${playfair.className} font-normal text-[#111111] text-lg md:text-xl leading-snug`}>{obra.titulo}</p>
        <p className={`${raleway.className} text-gray-600 text-sm`}>
          {obra.tecnica} · {obra.medidas} · {obra.anio}
        </p>
      </div>
    </motion.div>
  );
}

/* ============================================================
   PESTAÑAS
   ============================================================ */

type TabId = "exposicion" | "obras" | "catalogo";
const TABS: { id: TabId; label: string }[] = [
  { id: "exposicion", label: "La exposición" },
  { id: "obras", label: "Obras" },
  { id: "catalogo", label: "Catálogo" },
];

function isTabId(v: string): v is TabId {
  return v === "exposicion" || v === "obras" || v === "catalogo";
}

/* ============================================================
   PÁGINA PRINCIPAL
   ============================================================ */

export default function UmbralesPage() {
  const [activeTab, setActiveTab] = useState<TabId>("exposicion");
  const [cvExpanded, setCvExpanded] = useState(false);
  const [filtroSerie, setFiltroSerie] = useState<string>("todas");
  const [lightbox, setLightbox] = useState<{ index: number } | null>(null);

  const tabPanelRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<Record<TabId, HTMLButtonElement | null>>({
    exposicion: null,
    obras: null,
    catalogo: null,
  });
  const isFirstRender = useRef(true);
  const touchStartX = useRef<number | null>(null);

  /* --- sincronización con el hash de la URL --- */
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      setActiveTab(isTabId(h) ? h : "exposicion");
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const selectTab = (id: TabId) => {
    if (window.location.hash.replace("#", "") === id) {
      setActiveTab(id);
    } else {
      window.location.hash = id;
    }
  };

  /* --- volver al inicio del contenido si el usuario está más abajo --- */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const el = tabPanelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < 0) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  const handleTablistKeyDown = (e: React.KeyboardEvent) => {
    const idx = TABS.findIndex((t) => t.id === activeTab);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = TABS[(idx + 1) % TABS.length];
      selectTab(next.id);
      tabButtonRefs.current[next.id]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = TABS[(idx - 1 + TABS.length) % TABS.length];
      selectTab(prev.id);
      tabButtonRefs.current[prev.id]?.focus();
    }
  };

  const seriesConObras = useMemo(() => Array.from(new Set(OBRAS.map((o) => o.serie))), []);

  const obrasFiltradas = useMemo(
    () => (filtroSerie === "todas" ? OBRAS : OBRAS.filter((o) => o.serie === filtroSerie)),
    [filtroSerie]
  );

  const currentObra = lightbox ? obrasFiltradas[lightbox.index] : undefined;

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const goNext = useCallback(() => {
    setLightbox((prev) => (prev ? { index: (prev.index + 1) % obrasFiltradas.length } : prev));
  }, [obrasFiltradas.length]);
  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev ? { index: (prev.index - 1 + obrasFiltradas.length) % obrasFiltradas.length } : prev));
  }, [obrasFiltradas.length]);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 60) goPrev();
    else if (delta < -60) goNext();
    touchStartX.current = null;
  };

  return (
    <main className="bg-white min-h-screen">
      {/* ============ HERO (fino) ============ */}
      <section className="relative h-[46vh] min-h-[360px] max-h-[520px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image src={HERO.foto} alt={`${HERO.titulo} - ${HERO.artista}`} fill priority quality={90} className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center px-6 sm:px-10 lg:px-16 pt-16">
          <div className="max-w-xl">
            <div className="relative w-[190px] h-[95px] mb-6">
              <Image src={HERO.logo} alt="XinkuArt Logo" fill className="object-contain object-left opacity-90" />
            </div>

            <h1
              className={`${montserrat.className} font-black text-white text-4xl sm:text-5xl md:text-6xl leading-[1.3] tracking-tight mb-2`}
            >
              {HERO.titulo}
            </h1>
            <p className={`${raleway.className} text-white text-base sm:text-lg uppercase tracking-[0.25em] font-normal mb-5`}>
              {HERO.artista}
            </p>

            <div className="space-y-1.5">
              <p className={`${raleway.className} text-white/95 text-sm`}>{HERO.lugar}</p>
              <p className={`${raleway.className} text-white/95 text-sm`}>{HERO.fechas}</p>
              {HERO.horario && <p className={`${raleway.className} text-white/95 text-sm`}>{HERO.horario}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PESTAÑAS (sticky) ============ */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div
          role="tablist"
          aria-label="Secciones de la exposición UMBRALES"
          onKeyDown={handleTablistKeyDown}
          className="px-5 sm:px-8 lg:px-14 xl:px-20 flex gap-8"
        >
          {TABS.map((tab) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabButtonRefs.current[tab.id] = el;
                }}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(tab.id)}
                className={`${raleway.className} relative py-4 text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-200 ${
                  selected ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {selected && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-px h-[2px] bg-[#FF0000]"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div ref={tabPanelRef}>
        <AnimatePresence mode="wait">
          {/* ============ PESTAÑA: LA EXPOSICIÓN ============ */}
          {activeTab === "exposicion" && (
            <motion.div
              key="exposicion"
              id="panel-exposicion"
              role="tabpanel"
              aria-labelledby="tab-exposicion"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {SECCIONES_EXPOSICION.filter((s) => s.visible).map((seccion) => (
                <SeccionRenderer key={seccion.id} seccion={seccion} cvExpanded={cvExpanded} onToggleCv={() => setCvExpanded((v) => !v)} />
              ))}

              {/* Invitación a Catálogo */}
              <section className="px-5 sm:px-8 lg:px-14 xl:px-20 py-16 bg-black text-center">
                <p className={`${raleway.className} text-white/90 text-sm uppercase tracking-[0.3em] mb-4`}>¿Quieres llevártelo?</p>
                <h3 className={`${playfair.className} font-normal text-white text-2xl sm:text-3xl mb-6`}>
                  Descarga el catálogo completo de UMBRALES
                </h3>
                <button
                  onClick={() => selectTab("catalogo")}
                  className="inline-flex items-center gap-2 bg-[#FF0000] hover:opacity-90 text-white px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-opacity duration-300"
                >
                  <Download size={16} />
                  Ir al catálogo
                </button>
              </section>
            </motion.div>
          )}

          {/* ============ PESTAÑA: OBRAS ============ */}
          {activeTab === "obras" && (
            <motion.div
              key="obras"
              id="panel-obras"
              role="tabpanel"
              aria-labelledby="tab-obras"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-5 sm:px-8 lg:px-14 xl:px-20 py-16 md:py-20"
            >
              <div className="mx-auto" style={{ maxWidth: AJUSTES_DISENO.anchoMaximoPagina }}>
                <div className="flex flex-wrap gap-3 mb-12">
                  <button
                    onClick={() => setFiltroSerie("todas")}
                    className={`${raleway.className} px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-colors duration-200 ${
                      filtroSerie === "todas"
                        ? "bg-gray-900 text-white border-gray-900"
                        : "text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900"
                    }`}
                  >
                    Todas
                  </button>
                  {seriesConObras.map((s) => (
                    <button
                      key={s}
                      onClick={() => setFiltroSerie(s)}
                      className={`${raleway.className} px-4 py-2 text-xs uppercase tracking-wider font-medium border transition-colors duration-200 ${
                        filtroSerie === s
                          ? "bg-gray-900 text-white border-gray-900"
                          : "text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900"
                      }`}
                    >
                      {etiquetaSerie(s)}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
                  {obrasFiltradas.map((obra, index) => (
                    <ObrasCard key={obra.id} obra={obra} onClick={() => setLightbox({ index })} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ============ PESTAÑA: CATÁLOGO ============ */}
          {activeTab === "catalogo" && (
            <motion.div
              key="catalogo"
              id="panel-catalogo"
              role="tabpanel"
              aria-labelledby="tab-catalogo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-5 sm:px-8 lg:px-14 xl:px-20 py-16 md:py-24"
            >
              <div className="mx-auto" style={{ maxWidth: AJUSTES_DISENO.anchoMaximoPagina }}>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-center">
                  <CajaFoto
                    foto={{ src: CATALOGO.portada, alt: `Portada del catálogo ${CATALOGO.titulo}`, ajuste: "cover", enfoque: "centro" }}
                    formato="cuadrado"
                    tamano="pequena"
                    fondoOscuro={false}
                  />

                  <div>
                    <Eyebrow text="Catálogo" />
                    <h2 className={`${playfair.className} font-normal text-[#111111] text-3xl sm:text-4xl mb-6`}>
                      {CATALOGO.titulo}
                    </h2>
                    <p className={`${raleway.className} text-[#1a1a1a] text-lg leading-[1.85] font-normal mb-8`}>
                      {CATALOGO.descripcion}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={CATALOGO_PDF}
                        download
                        className="inline-flex items-center justify-center gap-2 bg-[#FF0000] hover:opacity-90 text-white px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-opacity duration-300"
                      >
                        <Download size={16} />
                        Descargar PDF
                      </a>
                      <a
                        href={CATALOGO_PDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        Abrir en nueva pestaña
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {lightbox && currentObra && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
              <p className={`${raleway.className} text-white/60 text-xs`}>
                {lightbox.index + 1} / {obrasFiltradas.length}
              </p>
              <button onClick={closeLightbox} className="p-2 text-white/70 hover:text-white transition-colors" aria-label="Cerrar">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4">
              {obrasFiltradas.length > 1 && (
                <button
                  onClick={goPrev}
                  className="absolute left-2 sm:left-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Obra anterior"
                >
                  <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
              )}

              <div className="relative w-full h-full max-w-5xl">
                <ObraImage obra={currentObra} className="object-contain" sizes="90vw" />
              </div>

              {obrasFiltradas.length > 1 && (
                <button
                  onClick={goNext}
                  className="absolute right-2 sm:right-6 z-10 p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Obra siguiente"
                >
                  <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
                </button>
              )}
            </div>

            <div className="px-6 py-5 border-t border-white/10 shrink-0 text-center">
              <p className={`${playfair.className} font-normal text-white text-lg`}>{currentObra.titulo}</p>
              <p className={`${raleway.className} text-white/90 text-sm mt-1`}>
                {currentObra.serie} · {currentObra.tecnica} · {currentObra.medidas} · {currentObra.anio}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
