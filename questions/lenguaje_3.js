const svgCartel = `**Cartel de Reciclaje de la Escuela:**
<div style="text-align:center; margin: 15px 0; background:white; padding:10px; border-radius:8px;">
  <svg width="300" height="120" viewBox="0 0 300 120">
    <rect x="20" y="20" width="60" height="80" rx="5" fill="#3498db"/>
    <rect x="15" y="10" width="70" height="10" rx="2" fill="#2980b9"/>
    <text x="50" y="60" fill="white" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold">PLÁSTICO</text>
    <rect x="120" y="20" width="60" height="80" rx="5" fill="#7f8c8d"/>
    <rect x="115" y="10" width="70" height="10" rx="2" fill="#95a5a6"/>
    <text x="150" y="60" fill="white" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold">PAPEL</text>
    <rect x="220" y="20" width="60" height="80" rx="5" fill="#2ecc71"/>
    <rect x="215" y="10" width="70" height="10" rx="2" fill="#27ae60"/>
    <text x="250" y="60" fill="white" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold">COMIDA</text>
  </svg>
</div>
*Nota: 'El camión recolector pasa los días viernes.'*`;

module.exports = [
  // --- ESTACIÓN A: TEXTO DESCRIPTIVO E INFORMATIVO ---
  {
    "id": "len3_1",
    "subject": "lenguaje",
    "station": "Textos Informativos",
    "type": "multiple",
    "context": "**El Colibrí Esmeralda**\n\nEl colibrí esmeralda es un ave muy pequeña y rápida que vive en los bosques de Colombia. Sus plumas son brillantes y coloridas. Este animalito se alimenta del dulce néctar de las flores usando su pico largo y delgado.",
    "prompt": "En el texto, las palabras 'pequeña', 'rápida', 'brillantes' y 'coloridas' cumplen la función de:",
    "options": [
      "Adjetivos, porque describen cómo es el colibrí y sus plumas.",
      "Verbos, porque indican las acciones que hace el colibrí.",
      "Sustantivos propios, porque son el nombre específico del ave.",
      "Artículos, porque acompañan a las flores."
    ],
    "correctAnswer": "Adjetivos, porque describen cómo es el colibrí y sus plumas.",
    "explain": "Los adjetivos son palabras que expresan cualidades o características de los sustantivos."
  },
  {
    "id": "len3_2",
    "subject": "lenguaje",
    "station": "Textos Informativos",
    "type": "multiple",
    "context": "**El Colibrí Esmeralda**\n\nEl colibrí esmeralda es un ave muy pequeña y rápida que vive en los bosques de Colombia. Sus plumas son brillantes y coloridas. Este animalito se alimenta del dulce néctar de las flores usando su pico largo y delgado.",
    "prompt": "Identifica la opción que clasifica correctamente los sustantivos extraídos del texto:",
    "options": [
      "Colombia (Sustantivo propio) / bosques (Sustantivo común)",
      "Colibrí (Sustantivo propio) / ave (Sustantivo propio)",
      "Plumas (Sustantivo propio) / flores (Sustantivo común)",
      "Néctar (Sustantivo propio) / Colombia (Sustantivo común)"
    ],
    "correctAnswer": "Colombia (Sustantivo propio) / bosques (Sustantivo común)",
    "explain": "Colombia es el nombre propio de un país (lleva mayúscula). 'Bosques' es un nombre común de un lugar."
  },
  {
    "id": "len3_3",
    "subject": "lenguaje",
    "station": "Textos Informativos",
    "type": "match",
    "context": "Las palabras se dividen en sílabas según sus golpes de voz.",
    "prompt": "Relaciona cada palabra del texto con su clasificación según el número de sílabas:",
    "pairs": [
      {
        "id": "p_sil1",
        "left": "Ave (a-ve)",
        "right": "Bisílaba"
      },
      {
        "id": "p_sil2",
        "left": "Luz (luz)",
        "right": "Monosílaba"
      },
      {
        "id": "p_sil3",
        "left": "Pájaro (pá-ja-ro)",
        "right": "Trisílaba"
      },
      {
        "id": "p_sil4",
        "left": "Coloridas (co-lo-ri-das)",
        "right": "Polisílaba"
      }
    ],
    "explain": "1: Monosílaba. 2: Bisílaba. 3: Trisílaba. 4 o más: Polisílaba."
  },
  {
    "id": "len3_4",
    "subject": "lenguaje",
    "station": "Textos Informativos",
    "type": "multiple",
    "context": "En la frase extraída del texto: '...pico largo y delgado.'",
    "prompt": "Si cambiáramos la palabra 'pico' (masculino, singular) por 'alas' (femenino, plural), ¿cómo debe escribirse para mantener la concordancia de género y número?",
    "options": [
      "...alas largas y delgadas.",
      "...alas largo y delgado.",
      "...alas largos y delgados.",
      "...alas largas y delgado."
    ],
    "correctAnswer": "...alas largas y delgadas.",
    "explain": "El sustantivo 'alas' es femenino y plural, por lo tanto, los adjetivos deben ser femeninos y plurales ('largas', 'delgadas')."
  },

  // --- ESTACIÓN B: TEXTO INSTRUCTIVO ---
  {
    "id": "len3_5",
    "subject": "lenguaje",
    "station": "Textos Instructivos",
    "type": "multiple",
    "context": "**Instrucciones para plantar una semilla:**\n1. Buscar una maceta limpia.\n2. Llenar la maceta con tierra húmeda.\n3. Colocar la semilla en el centro.\n4. Regar con un poco de agua todos los días.",
    "prompt": "¿Qué tienen en común las palabras 'Buscar', 'Llenar', 'Colocar' y 'Regar' del texto instructivo?",
    "options": [
      "Son verbos en forma infinitiva porque terminan en -ar y -er.",
      "Son adjetivos porque describen cómo es la semilla.",
      "Son sustantivos comunes que nombran objetos de jardinería.",
      "Son verbos en tiempo pasado porque la acción ya terminó."
    ],
    "correctAnswer": "Son verbos en forma infinitiva porque terminan en -ar y -er.",
    "explain": "Los verbos que terminan en -ar, -er, -ir y no están conjugados se llaman infinitivos."
  },
  {
    "id": "len3_6",
    "subject": "lenguaje",
    "station": "Textos Instructivos",
    "type": "multiple",
    "context": "**Instrucciones para plantar una semilla:**\n(...)\nJuan siguió las instrucciones la semana pasada. Él dice: 'Yo sembré una semilla de girasol.'",
    "prompt": "En la oración de Juan, ¿en qué tiempo verbal se encuentra la palabra 'sembré'?",
    "options": [
      "Pasado.",
      "Presente.",
      "Futuro.",
      "Infinitivo."
    ],
    "correctAnswer": "Pasado.",
    "explain": "La acción ya se realizó, por lo tanto el verbo está en tiempo pasado."
  },
  {
    "id": "len3_7",
    "subject": "lenguaje",
    "station": "Textos Instructivos",
    "type": "order_words",
    "context": "Juan imagina cómo será su planta en el futuro usando el verbo 'crecer'.",
    "prompt": "Ordena las palabras para formar una oración correcta en tiempo futuro:",
    "words": [
      "Mi",
      "hermosa",
      "planta",
      "crecerá",
      "mañana."
    ],
    "explain": "Mi hermosa planta (sujeto) crecerá mañana (predicado en tiempo futuro)."
  },
  {
    "id": "len3_8",
    "subject": "lenguaje",
    "station": "Textos Instructivos",
    "type": "multiple",
    "context": "Después de plantar, Juan le dice a su amiga:\n'¡Qué divertida es la jardinería!'",
    "prompt": "¿A qué clase de oración corresponde la frase de Juan?",
    "options": [
      "Exclamativa, porque expresa una emoción fuerte.",
      "Interrogativa, porque le está haciendo una pregunta a su amiga.",
      "Negativa, porque está negando algo.",
      "Informativa, porque da unas instrucciones."
    ],
    "correctAnswer": "Exclamativa, porque expresa una emoción fuerte.",
    "explain": "Las oraciones exclamativas se usan para expresar sorpresa, alegría o dolor, y llevan los signos (¡!)."
  },

  // --- ESTACIÓN C: TEXTO DISCONTINUO Y ORACIÓN ---
  {
    "id": "len3_9",
    "subject": "lenguaje",
    "station": "Textos Discontinuos",
    "type": "multiple",
    "context": svgCartel,
    "prompt": "Este tipo de texto se llama 'discontinuo' porque combina gráficos, esquemas y textos cortos. Según la información del cartel, ¿dónde debes botar una botella de agua vacía?",
    "options": [
      "En la caneca azul (Plástico).",
      "En la caneca gris (Papel).",
      "En la caneca verde (Comida).",
      "En el camión recolector los jueves."
    ],
    "correctAnswer": "En la caneca azul (Plástico).",
    "explain": "Las botellas de agua están hechas de plástico, por lo que deben ir en la caneca azul."
  },
  {
    "id": "len3_10",
    "subject": "lenguaje",
    "station": "Textos Discontinuos",
    "type": "multiple",
    "context": "En el cartel de reciclaje leemos la siguiente oración:\n\n'El camión recolector pasa los días viernes.'",
    "prompt": "En esta oración, ¿cuál es el SUJETO (quién hace la acción o de quién se habla)?",
    "options": [
      "El camión recolector",
      "pasa",
      "los días viernes",
      "El camión recolector pasa"
    ],
    "correctAnswer": "El camión recolector",
    "explain": "El sujeto es 'El camión recolector', ya que es de él de quien se dice algo (que pasa los viernes)."
  },
  {
    "id": "len3_11",
    "subject": "lenguaje",
    "station": "Textos Discontinuos",
    "type": "multiple",
    "context": "En el cartel de reciclaje leemos la siguiente oración:\n\n'El camión recolector pasa los días viernes.'",
    "prompt": "En la misma oración, ¿cuál es el PREDICADO (lo que se dice del sujeto o la acción que realiza)?",
    "options": [
      "pasa los días viernes.",
      "El camión recolector",
      "los días viernes",
      "camión recolector pasa"
    ],
    "correctAnswer": "pasa los días viernes.",
    "explain": "El predicado siempre contiene el verbo y nos dice qué hace el sujeto."
  },
  {
    "id": "len3_12",
    "subject": "lenguaje",
    "station": "Textos Discontinuos",
    "type": "match",
    "context": "La concordancia entre el artículo (El, La, Los, Las) y el sustantivo es fundamental para que los avisos estén bien escritos.",
    "prompt": "Une el artículo correcto con su sustantivo correspondiente:",
    "pairs": [
      {
        "id": "p_art1",
        "left": "Las",
        "right": "botellas (Femenino plural)"
      },
      {
        "id": "p_art2",
        "left": "El",
        "right": "cartón (Masculino singular)"
      },
      {
        "id": "p_art3",
        "left": "Los",
        "right": "vidrios (Masculino plural)"
      },
      {
        "id": "p_art4",
        "left": "La",
        "right": "caneca (Femenino singular)"
      }
    ],
    "explain": "El artículo debe coincidir en género (masculino/femenino) y número (singular/plural) con el sustantivo."
  },
  {
    "id": "len3_13",
    "subject": "lenguaje",
    "station": "Textos Discontinuos",
    "type": "order_words",
    "context": "Forma una oración negativa sobre las reglas de limpieza de la escuela.",
    "prompt": "Ordena las palabras para formar la oración:",
    "words": [
      "Nosotros",
      "no",
      "tiramos",
      "basura",
      "al suelo."
    ],
    "explain": "Nosotros no tiramos basura al suelo. La palabra 'no' convierte la oración en negativa."
  }
];
