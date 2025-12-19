import React from 'react';
import { ThemePoint, GlossaryItem, MatrixData } from './types';

export const THEME_LIST = [
  "ORIGEN",
  "EVOLUCIÓN",
  "INTERFAZ",
  "METÁFORAS",
  "ESTILOS",
  "ÍCONOS",
  "PÍXEL",
  "RESOLUCIÓN",
  "COMUNICACIÓN",
  "TENDENCIAS"
];

export const FULL_LABELS: Record<string, string> = {
  "ORIGEN": "Origen de los Sistemas Gráficos",
  "EVOLUCIÓN": "Evolución de las Interfaces",
  "INTERFAZ": "Interfaz (Modelo U–T–A)",
  "METÁFORAS": "Metáforas Digitales",
  "ESTILOS": "Skeuomorfismo y Estilos Visuales",
  "ÍCONOS": "Íconos (Principios y Uso)",
  "PÍXEL": "Píxel (La Unidad Mínima)",
  "RESOLUCIÓN": "Resolución y Formatos",
  "COMUNICACIÓN": "Comunicación Visual y Composición",
  "TENDENCIAS": "Tendencias y Design Systems"
};

export const THEMES_CONTENT: Record<string, ThemePoint> = {
  "ORIGEN": {
    def: "La base histórica que define cómo el paso del hardware de texto al bit-mapping permitió la creación de la primera matriz de puntos direccionable.",
    points: ["Bit-mapping original", "Hardware de refresco", "Xerox Alto"],
    example: "El paso de terminales de fósforo verde a pantallas con mapas de bits.",
    error: "No entender que el hardware actual sigue las mismas reglas lógicas.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
  },
  "EVOLUCIÓN": {
    def: "El análisis de cómo las interfaces han pasado de ser puramente técnicas a ser herramientas de democratización masiva.",
    points: ["CLI vs GUI", "Democratización", "Evolución táctil"],
    example: "La transición de MS-DOS a Windows 95.",
    error: "Diseñar sin considerar los modelos mentales heredados.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  },
  "INTERFAZ": {
    def: "El triángulo funcional Usuario-Tarea-Artefacto (U-T-A) que mide la efectividad de una mediación digital.",
    points: ["Mediación técnica", "Feedback constante", "Flujo de tarea"],
    example: "Un cajero automático que prioriza la tarea 'retirar' sobre la estética.",
    error: "Enamorarse de la herramienta y olvidar la necesidad del usuario.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
  },
  "METÁFORAS": {
    def: "El uso de analogías físicas para reducir la carga cognitiva al interactuar con conceptos abstractos digitales.",
    points: ["Mapeo mental", "Familiaridad", "Curva de aprendizaje"],
    example: "El concepto de 'carpetas' y 'escritorio' en un sistema operativo.",
    error: "Usar metáforas obsoletas que no tienen anclaje en la realidad del usuario.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
  },
  "ESTILOS": {
    def: "La gramática visual que define el 'sentir' de la interfaz, desde el realismo táctil hasta el minimalismo plano.",
    points: ["Skeuomorfismo", "Flat Design", "Material Design"],
    example: "El botón que parece real en iOS 6 vs el botón plano en iOS 7.",
    error: "Elegir un estilo solo por tendencia sin considerar el affordance.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
  },
  "ÍCONOS": {
    def: "Signos gráficos que sintetizan funciones. Su éxito depende de la universalidad y la simplicidad (Regla KISS).",
    points: ["Síntesis visual", "Consistencia", "Regla KISS"],
    example: "El icono de lupa que universalmente significa 'Buscar'.",
    error: "Saturar un icono con detalles que se pierden en tamaños pequeños.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
  },
  "PÍXEL": {
    def: "La unidad mínima direccionable. Entender el píxel es entender la resolución, la densidad y la nitidez.",
    points: ["RGB Sub-pixels", "Densidad (PPI)", "Matriz de puntos"],
    example: "Alinear una línea de 1px al grid de la pantalla para evitar blur.",
    error: "Diseñar elementos sin 'pixel perfect', causando bordes borrosos.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="6" height="6"/></svg>
  },
  "RESOLUCIÓN": {
    def: "La relación entre la cantidad de píxeles y el espacio físico. Define la calidad de salida y el peso del archivo.",
    points: ["Vectores vs Bitmaps", "PPI vs DPI", "Compresión"],
    example: "Un logotipo en SVG que no se pixela al escalarlo.",
    error: "Usar imágenes de baja resolución en pantallas de alta densidad (Retina).",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
  },
  "COMUNICACIÓN": {
    def: "El uso estratégico de jerarquía, contraste y equilibrio para guiar la lectura visual del usuario.",
    points: ["Leyes de Gestalt", "Contraste cromático", "Jerarquía tipográfica"],
    example: "Un titular gigante que capta la atención antes que el cuerpo de texto.",
    error: "Falta de contraste que hace la interfaz inaccesible.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="18" y2="18"/></svg>
  },
  "TENDENCIAS": {
    def: "Hacia dónde se dirige el diseño: sistemas escalables (Design Systems) y accesibilidad universal (WCAG).",
    points: ["Sistemas de diseño", "Accesibilidad", "Escalabilidad"],
    example: "Carbon de IBM o Material Design de Google.",
    error: "Crear componentes aislados que no forman un sistema coherente.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
  }
};

export const GLOSSARY_ITEMS: GlossaryItem[] = THEME_LIST.map((theme, index) => {
  const content = THEMES_CONTENT[theme];
  return {
    id: index + 1,
    title: FULL_LABELS[theme],
    definition: content.def,
    example: content.example,
    icon: content.icon,
    keyPoints: content.points,
    realApplication: [content.example, "Diseño de Interfaces Modernas"],
    reflection: `Entender el concepto de ${theme} me permitió ver el diseño no como arte, sino como una solución técnica estructurada.`
  };
});

// MATRIX CONTENT GENERATION
export const MATRIX_CONTENT: MatrixData = {};

const relationTags: Record<string, string> = {
  diagonal: "TEMA CENTRAL",
  roots: "RAÍCES",
  logic: "LÓGICA",
  visual: "ESTILO",
  tech: "TÉCNICA",
  ux: "UX/UI",
  hierarchy: "ORDEN",
  scale: "ESCALA",
  signo: "SIGNO"
};

THEME_LIST.forEach((t1, i) => {
  THEME_LIST.forEach((t2, j) => {
    const key = `${t1}-${t2}`;
    const name1 = FULL_LABELS[t1];
    const name2 = FULL_LABELS[t2];

    if (i === j) {
      const c = THEMES_CONTENT[t1];
      MATRIX_CONTENT[key] = {
        tag: relationTags.diagonal,
        titulo: name1,
        explicacion: `Este nodo constituye el núcleo teórico de ${name1}. En la arquitectura del diseño digital, este eje no es meramente una definición, sino un paradigma que rige la interacción. Se analiza cómo su implementación profunda permite que el sistema mantenga una integridad estructural. Al centrarnos en ${name1}, descubrimos que su dominio es el que permite que las demás capas de la interfaz (desde lo visual hasta lo funcional) operen sobre una base lógica irrefutable. Sin este pilar, la experiencia del usuario se fragmentaría en decisiones arbitrarias sin respaldo técnico.`,
        ejemplo: `La manifestación más clara de ${t1.toLowerCase()} en la actualidad es la estandarización de procesos que garantizan que el artefacto sea predecible y eficiente para el usuario final, como se ve en ${c.example}.`,
        aporteUX: "Garantiza una base técnica sólida, eliminando la incertidumbre del sistema y proporcionando un marco de trabajo que respeta las limitaciones y potencias del hardware direccionable."
      };
    } else {
      let tag = relationTags.ux;
      let expl = `La intersección entre ${name1} y ${name2} representa una de las sinergias más críticas del diseño moderno. Mientras que ${name1} aporta la estructura y las reglas de juego de ${t1.toLowerCase()}, ${name2} proporciona el lenguaje y el vehículo de ${t2.toLowerCase()} para que esa estructura sea perceptible. Esta relación binaria es lo que permite que una idea abstracta se convierta en una herramienta táctil y visual. Es aquí donde la técnica pura se encuentra con la psicología del usuario, creando un puente de comunicación que traduce bits y matrices en significado y acción.`;
      let ej = `Un caso de estudio relevante es la integración de ${t1.toLowerCase()} en el desarrollo de componentes de ${t2.toLowerCase()}, asegurando que cada interacción tenga un respaldo en la lógica de datos y una representación visual coherente.`;
      let ux = `Esta interdependencia reduce drásticamente el esfuerzo mental del usuario (carga cognitiva) al alinear las capacidades técnicas del sistema con las expectativas visuales, resultando en una interfaz que se siente 'natural' e intuitiva.`;

      if (i === 0 || j === 0) {
        tag = relationTags.roots;
        const other = t1 === 'ORIGEN' ? name2 : name1;
        expl = `Como uno de los vectores en juego es el Origen de los Sistemas Gráficos, esta relación nos obliga a mirar hacia atrás para entender el presente. La conexión entre la génesis técnica y ${other} demuestra que los principios de visualización (como el bit-mapping) siguen vigentes. No podemos hablar de ${other} sin reconocer que su existencia depende de la evolución de la memoria de video y la capacidad de refresco de los primeros monitores direccionables. Es una lección de humildad técnica: el diseño de vanguardia sigue operando sobre los hombros de gigantes del hardware de los años 70.`;
        ej = `La configuración de grids modernos en ${other} que, aunque parecen fluidos, siguen respondiendo a la naturaleza discreta y matricial de los primeros sistemas Xerox.`;
        ux = "Fomenta una robustez sistémica al aplicar patrones de eficiencia heredados que han demostrado su validez durante décadas de evolución tecnológica.";
      } else if (i === 6 || j === 6) {
        tag = relationTags.tech;
        const other = t1 === 'PÍXEL' ? name2 : name1;
        expl = `Al involucrar el Píxel (la unidad atómica de la luz digital), esta relación se traslada al terreno de la precisión física. Define cómo la arquitectura de ${other} debe someterse a la rejilla de la pantalla. Es el punto donde el diseño abandona lo conceptual para convertirse en coordenadas RGB. Cada decisión en ${other} debe ser filtrada por la densidad de píxeles (PPI), asegurando que la intención del diseñador no se pierda en el 'blur' de una mala alineación. Es el rigor del 'Pixel Perfect' aplicado a la complejidad de ${other}.`;
        ej = "Optimización de micro-interacciones y bordes de componentes para que coincidan exactamente con la rejilla física de dispositivos de alta densidad.";
        ux = "Mejora la legibilidad y la fatiga visual del usuario al entregar una interfaz nítida que aprovecha al máximo la capacidad del hardware de visualización.";
      } else if (i === 8 || j === 8) {
        tag = relationTags.hierarchy;
        const other = t1 === 'COMUNICACIÓN' ? name2 : name1;
        expl = `Esta relación es el motor del Orden y la Jerarquía. Explica cómo las leyes de la Comunicación Visual actúan como un sistema operativo para los conceptos de ${other}. Sin esta guía, los elementos de ${other} competirían por la atención del usuario de manera caótica. Aquí es donde aplicamos contraste, equilibrio y leyes de Gestalt para que la complejidad de ${other} se convierta en una narrativa visual simple. Es el triunfo de la claridad sobre el ruido informativo, transformando datos en significado.`;
        ej = "Uso de pesos tipográficos y contraste cromático para destacar las funciones principales de la interfaz sobre el ruido de fondo del sistema.";
        ux = "Crea un camino de menor resistencia para el usuario, permitiendo que complete sus tareas sin distracciones y con una sensación constante de control y orientación.";
      }

      MATRIX_CONTENT[key] = {
        tag,
        titulo: `${name1} ↔ ${name2}`,
        explicacion: expl,
        ejemplo: ej,
        aporteUX: ux
      };
    }
  });
});
