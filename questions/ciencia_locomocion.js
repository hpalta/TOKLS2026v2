module.exports = [
  {
    id: "loc_1", subject: "science", station: "Locomoción", type: "multiple",
    context: "El cuerpo humano está compuesto por músculos que nos ayudan a realizar funciones vitales.",
    prompt: "¿Cuál es la función principal de los músculos?",
    options: ["Permitir el movimiento mediante la contracción", "Digerir los alimentos", "Proteger el cerebro"],
    correctAnswer: "Permitir el movimiento mediante la contracción",
    explain: "Los músculos se contraen y relajan para permitirnos mover."
  },
  {
    id: "loc_2", subject: "science", station: "Locomoción", type: "match",
    context: "Anita aprendió que todos los músculos son distintos y se clasifican en 3 grupos.",
    prompt: "Relaciona el tipo de músculo con su nombre correcto:",
    pairs: [
      { id: "p2_1", left: "Músculo que se une a los huesos", right: "Músculo Esquelético" },
      { id: "p2_2", left: "Músculo del corazón", right: "Músculo Cardíaco" },
      { id: "p2_3", left: "Músculo de los intestinos", right: "Músculo Liso" }
    ],
    explain: "Cada tipo de músculo se encuentra en lugares específicos del cuerpo."
  },
  {
    id: "loc_3", subject: "science", station: "Locomoción", type: "multiple",
    context: "El corazón es un órgano muy importante que no deja de latir.",
    prompt: "¿Qué tipo de músculo forma el corazón?",
    options: ["Músculo Cardíaco", "Músculo Liso", "Músculo Esquelético"],
    correctAnswer: "Músculo Cardíaco",
    explain: "El músculo cardíaco es exclusivo del corazón."
  },
  {
    id: "loc_4", subject: "science", station: "Locomoción", type: "label",
    context: "Los músculos recubren nuestros huesos.",
    prompt: "Identifica el músculo esquelético",
    svg: "<svg viewBox=\"0 0 100 100\"><path d=\"M20,50 Q50,20 80,50 Q50,80 20,50\" fill=\"#CD5C5C\"/><line x1=\"20\" y1=\"50\" x2=\"10\" y2=\"50\" stroke=\"#F5DEB3\" stroke-width=\"4\"/></svg>",
    labels: [
      { id: "l4_1", x: 50, y: 50, text: "Músculo Esquelético" }
    ],
    explain: "Los músculos esqueléticos nos permiten correr, saltar y caminar."
  },
  {
    id: "loc_5", subject: "science", station: "Locomoción", type: "multiple",
    context: "El estómago y los intestinos se mueven solos para digerir la comida.",
    prompt: "¿Qué tipo de músculo tienen los órganos internos como el estómago?",
    options: ["Músculo Liso", "Músculo Cardíaco", "Músculo Esquelético"],
    correctAnswer: "Músculo Liso",
    explain: "El músculo liso recubre nuestros órganos internos y funciona sin que lo pensemos."
  },
  {
    id: "loc_6", subject: "science", station: "Locomoción", type: "multiple",
    context: "Algunos músculos los movemos porque queremos, y otros se mueven solos (independientes).",
    prompt: "¿Los músculos lisos y cardíacos funcionan de manera independiente (involuntaria)?",
    options: ["Sí, funcionan automáticamente para mantenernos vivos", "No, nosotros los controlamos al pensar", "Solo cuando dormimos"],
    correctAnswer: "Sí, funcionan automáticamente para mantenernos vivos",
    explain: "No tenemos que pensar para que el corazón lata o el estómago digiera."
  },
  {
    id: "loc_7", subject: "science", station: "Locomoción", type: "match",
    context: "Une el músculo con su comportamiento.",
    prompt: "Relaciona el tipo de músculo con cómo se mueve:",
    pairs: [
      { id: "p7_1", left: "Músculo Esquelético", right: "Voluntario (tú lo controlas)" },
      { id: "p7_2", left: "Músculo Cardíaco", right: "Involuntario (late solo)" },
      { id: "p7_3", left: "Músculo Liso", right: "Involuntario (mueve los órganos solos)" }
    ],
    explain: "Solo podemos controlar a voluntad los músculos esqueléticos."
  },
  {
    id: "loc_8", subject: "science", station: "Locomoción", type: "multiple",
    context: "Cuando pateas un balón o levantas la mano para participar en clase.",
    prompt: "¿Qué músculo estás utilizando?",
    options: ["Músculo Esquelético", "Músculo Cardíaco", "Músculo Liso"],
    correctAnswer: "Músculo Esquelético",
    explain: "Los usamos para movimientos voluntarios."
  },
  {
    id: "loc_9", subject: "science", station: "Locomoción", type: "label",
    context: "Este órgano late muchas veces por minuto.",
    prompt: "Identifica el órgano hecho de músculo cardíaco",
    svg: "<svg viewBox=\"0 0 100 100\"><path d=\"M50,30 A20,20 0 0,0 10,50 C10,70 50,90 50,90 C50,90 90,70 90,50 A20,20 0 0,0 50,30 Z\" fill=\"red\"/></svg>",
    labels: [
      { id: "l9_1", x: 50, y: 60, text: "Corazón" }
    ],
    explain: "El corazón es de puro músculo cardíaco."
  },
  {
    id: "loc_10", subject: "science", station: "Locomoción", type: "multiple",
    context: "Un grupo de científicos en Bogotá estudia los músculos.",
    prompt: "El cuerpo humano realiza funciones vitales y se mueve, ¿a través de qué acción muscular?",
    options: ["La contracción", "La evaporación", "La respiración"],
    correctAnswer: "La contracción",
    explain: "Los músculos se contraen y se relajan para tirar de los huesos y generar movimiento."
  },
  {
    id: "loc_11", subject: "science", station: "Locomoción", type: "multiple",
    context: "Si queremos escribir con un lápiz, usamos nuestras manos.",
    prompt: "¿Qué músculos se encuentran en los brazos y las manos?",
    options: ["Esqueléticos", "Lisos", "Cardíacos"],
    correctAnswer: "Esqueléticos",
    explain: "Recubren los huesos de nuestro esqueleto."
  },
  {
    id: "loc_12", subject: "science", station: "Locomoción", type: "match",
    context: "Relaciona para qué nos sirven estos músculos.",
    prompt: "Une el músculo con su función:",
    pairs: [
      { id: "p12_1", left: "Músculo cardíaco", right: "Bombear la sangre por el cuerpo" },
      { id: "p12_2", left: "Músculo esquelético", right: "Permitir caminar, saltar y correr" },
      { id: "p12_3", left: "Músculo liso", right: "Mover los alimentos en el estómago" }
    ],
    explain: "Todos son vitales, pero hacen trabajos distintos."
  },
  {
    id: "loc_13", subject: "science", station: "Locomoción", type: "multiple",
    context: "Sin los músculos, nuestro cuerpo no podría moverse, aunque tuviéramos huesos.",
    prompt: "¿Qué sistema forma el conjunto de todos nuestros músculos?",
    options: ["El sistema muscular", "El sistema digestivo", "El sistema nervioso"],
    correctAnswer: "El sistema muscular",
    explain: "El sistema muscular, junto con el esqueleto, forma nuestro sistema locomotor."
  },
  {
    id: "loc_14", subject: "science", station: "Locomoción", type: "multiple",
    context: "Cuando sonreímos usamos músculos en nuestra cara.",
    prompt: "¿Estos músculos de la cara son voluntarios o involuntarios?",
    options: ["Voluntarios (esqueléticos)", "Involuntarios (lisos)", "Involuntarios (cardíacos)"],
    correctAnswer: "Voluntarios (esqueléticos)",
    explain: "Podemos decidir cuándo sonreír."
  },
  {
    id: "loc_15", subject: "science", station: "Locomoción", type: "label",
    context: "Los órganos del sistema digestivo.",
    prompt: "Identifica el lugar donde se halla el músculo liso",
    svg: "<svg viewBox=\"0 0 100 100\"><path d=\"M30,30 Q60,10 70,50 Q80,80 40,70\" fill=\"#FFA07A\" stroke=\"#FF8C00\"/></svg>",
    labels: [
      { id: "l15_1", x: 55, y: 50, text: "Estómago/Intestinos" }
    ],
    explain: "Estos órganos internos tienen músculo liso."
  },
  {
    id: "loc_16", subject: "science", station: "Locomoción", type: "match",
    context: "Identifica qué puedes controlar y qué no.",
    prompt: "Une la acción con el tipo de control muscular:",
    pairs: [
      { id: "p16_1", left: "Latido del corazón", right: "No lo controlo" },
      { id: "p16_2", left: "Correr en el parque", right: "Sí lo controlo" },
      { id: "p16_3", left: "Digerir el almuerzo", right: "No lo controlo" }
    ],
    explain: "Esquelético es controlado, cardíaco y liso son independientes."
  },
  {
    id: "loc_17", subject: "science", station: "Locomoción", type: "multiple",
    context: "Los músculos esqueléticos se unen a algo para poder mover nuestro cuerpo.",
    prompt: "¿A qué se unen los músculos esqueléticos?",
    options: ["A los huesos", "Al corazón", "Al estómago"],
    correctAnswer: "A los huesos",
    explain: "Se unen a los huesos mediante tendones."
  },
  {
    id: "loc_18", subject: "science", station: "Locomoción", type: "multiple",
    context: "Si los músculos no existieran en nuestro cuerpo...",
    prompt: "¿Podríamos estar de pie?",
    options: ["No, seríamos como gelatina sobre los huesos", "Sí, los huesos se mueven solos", "Sí, la piel nos sostendría"],
    correctAnswer: "No, seríamos como gelatina sobre los huesos",
    explain: "Los músculos y huesos trabajan juntos para darnos soporte y movimiento."
  },
  {
    id: "loc_19", subject: "science", station: "Locomoción", type: "match",
    context: "Anita organizó sus apuntes de los músculos.",
    prompt: "Ayuda a Anita emparejando la palabra clave con su definición:",
    pairs: [
      { id: "p19_1", left: "Músculo", right: "Órgano que se contrae para generar movimiento" },
      { id: "p19_2", left: "Contracción", right: "Acción de apretarse o acortarse de un músculo" },
      { id: "p19_3", left: "Esqueleto", right: "Conjunto de huesos al que se unen los músculos" }
    ],
    explain: "Los músculos, al contraerse, mueven nuestro esqueleto."
  },
  {
    id: "loc_20", subject: "science", station: "Locomoción", type: "multiple",
    context: "¿Cuál es una excelente forma de mantener nuestros músculos sanos?",
    prompt: "Selecciona la mejor opción:",
    options: ["Hacer ejercicio y comer saludable", "Estar sentado todo el día viendo TV", "Comer solo dulces"],
    correctAnswer: "Hacer ejercicio y comer saludable",
    explain: "El ejercicio fortalece nuestros músculos."
  }
];
