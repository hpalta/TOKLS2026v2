module.exports = [
  {
    id: "sis_1", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "El cuerpo humano está conformado por un conjunto de sistemas que permiten llevar a cabo funciones vitales.",
    prompt: "¿Qué conforman las células especializadas que se agrupan?",
    options: ["Los tejidos", "Los huesos", "La piel únicamente"],
    correctAnswer: "Los tejidos",
    explain: "Las células iguales se juntan para formar los tejidos."
  },
  {
    id: "sis_2", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "match",
    context: "Existen niveles de organización en el cuerpo humano.",
    prompt: "Relaciona el nivel de organización del más pequeño al más grande:",
    pairs: [
      { id: "p2_1", left: "Nivel 1 (Más pequeño)", right: "Célula" },
      { id: "p2_2", left: "Nivel 3", right: "Órgano" },
      { id: "p2_3", left: "Nivel 4", right: "Sistema" }
    ],
    explain: "Célula -> Tejido -> Órgano -> Sistema."
  },
  {
    id: "sis_3", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Varios órganos trabajando juntos forman un nivel superior.",
    prompt: "¿Qué se forma cuando varios órganos trabajan juntos para una función común?",
    options: ["Un Sistema", "Una Célula", "Un Tejido"],
    correctAnswer: "Un Sistema",
    explain: "Por ejemplo, el estómago y los intestinos forman el Sistema Digestivo."
  },
  {
    id: "sis_4", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "label",
    context: "El corazón es un órgano muy importante.",
    prompt: "Identifica si es un órgano o un sistema",
    svg: "<svg viewBox=\"0 0 100 100\"><path d=\"M50,30 A20,20 0 0,0 10,50 C10,70 50,90 50,90 C50,90 90,70 90,50 A20,20 0 0,0 50,30 Z\" fill=\"red\"/></svg>",
    labels: [
      { id: "l4_1", x: 50, y: 60, text: "Órgano" }
    ],
    explain: "El corazón es un órgano del sistema circulatorio."
  },
  {
    id: "sis_5", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Respiramos aire para obtener oxígeno.",
    prompt: "¿A qué sistema pertenecen los pulmones?",
    options: ["Sistema Respiratorio", "Sistema Digestivo", "Sistema Óseo"],
    correctAnswer: "Sistema Respiratorio",
    explain: "Los pulmones son los órganos principales del sistema respiratorio."
  },
  {
    id: "sis_6", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "El sistema digestivo transforma los alimentos que comemos.",
    prompt: "¿Cuál de estos órganos pertenece al sistema digestivo?",
    options: ["El estómago", "Los pulmones", "El cerebro"],
    correctAnswer: "El estómago",
    explain: "El estómago digiere los alimentos que consumimos."
  },
  {
    id: "sis_7", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "match",
    context: "Une cada órgano con el sistema al que pertenece.",
    prompt: "Relaciona el órgano con su sistema:",
    pairs: [
      { id: "p7_1", left: "Pulmones", right: "Sistema Respiratorio" },
      { id: "p7_2", left: "Estómago", right: "Sistema Digestivo" },
      { id: "p7_3", left: "Esqueleto humano", right: "Sistema Óseo" }
    ],
    explain: "Cada órgano es parte de un sistema mayor."
  },
  {
    id: "sis_8", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Al masticar una manzana, empieza un proceso en nuestro cuerpo.",
    prompt: "¿Qué función cumple el sistema digestivo?",
    options: ["Procesar los alimentos para obtener nutrientes", "Tomar el oxígeno del aire", "Bombear sangre"],
    correctAnswer: "Procesar los alimentos para obtener nutrientes",
    explain: "Tritura y deshace los alimentos para que el cuerpo los aproveche."
  },
  {
    id: "sis_9", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "label",
    context: "Cuando tomamos aire, este entra a nuestro cuerpo.",
    prompt: "Identifica los órganos principales de la respiración",
    svg: "<svg viewBox=\"0 0 100 100\"><ellipse cx=\"35\" cy=\"50\" rx=\"15\" ry=\"25\" fill=\"pink\"/><ellipse cx=\"65\" cy=\"50\" rx=\"15\" ry=\"25\" fill=\"pink\"/></svg>",
    labels: [
      { id: "l9_1", x: 50, y: 50, text: "Pulmones" }
    ],
    explain: "Los pulmones se llenan de aire cuando respiras."
  },
  {
    id: "sis_10", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Un hueso como el fémur de tu pierna.",
    prompt: "¿Es un órgano o un sistema?",
    options: ["Es un órgano", "Es un sistema", "Es una célula"],
    correctAnswer: "Es un órgano",
    explain: "Un solo hueso es un órgano, todos juntos forman el sistema óseo."
  },
  {
    id: "sis_11", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Diferencia entre órganos y sistemas.",
    prompt: "¿Cuál es la característica principal de un sistema del cuerpo?",
    options: ["Está formado por varios órganos trabajando juntos", "Es la parte más pequeña del cuerpo", "Solo tiene una célula"],
    correctAnswer: "Está formado por varios órganos trabajando juntos",
    explain: "El trabajo en equipo de los órganos forma los sistemas."
  },
  {
    id: "sis_12", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "match",
    context: "Conecta la acción con el sistema correspondiente.",
    prompt: "Une lo que haces con el sistema que usas:",
    pairs: [
      { id: "p12_1", left: "Comer un pan", right: "Sistema Digestivo" },
      { id: "p12_2", left: "Inhalar aire profundamente", right: "Sistema Respiratorio" },
      { id: "p12_3", left: "Correr usando músculos y huesos", right: "Sistema Locomotor" }
    ],
    explain: "Usamos diferentes sistemas para diferentes actividades."
  },
  {
    id: "sis_13", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Después de tragar la comida, llega al estómago.",
    prompt: "¿A dónde va la comida después de salir del estómago para seguir digiriéndose?",
    options: ["A los intestinos", "A los pulmones", "Al corazón"],
    correctAnswer: "A los intestinos",
    explain: "Los intestinos absorben los nutrientes de la comida."
  },
  {
    id: "sis_14", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "El cuerpo necesita deshacerse de lo que no sirve del aire que respiramos.",
    prompt: "¿Qué gas expulsamos al exhalar (botar el aire)?",
    options: ["Dióxido de carbono", "Oxígeno puro", "Agua potable"],
    correctAnswer: "Dióxido de carbono",
    explain: "Exhalamos dióxido de carbono como desecho."
  },
  {
    id: "sis_15", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "label",
    context: "Este es el tubo por el que pasa la comida hasta el estómago.",
    prompt: "Identifica este órgano digestivo",
    svg: "<svg viewBox=\"0 0 100 100\"><rect x=\"45\" y=\"10\" width=\"10\" height=\"40\" fill=\"#CD853F\"/><ellipse cx=\"50\" cy=\"60\" rx=\"20\" ry=\"15\" fill=\"#FFA07A\"/></svg>",
    labels: [
      { id: "l15_1", x: 50, y: 30, text: "Esófago" }
    ],
    explain: "El esófago conecta la boca con el estómago."
  },
  {
    id: "sis_16", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "match",
    context: "Ayuda a repasar los niveles de organización.",
    prompt: "Relaciona el ejemplo con su nivel:",
    pairs: [
      { id: "p16_1", left: "Sistema Nervioso Completo", right: "Sistema" },
      { id: "p16_2", left: "El Cerebro", right: "Órgano" },
      { id: "p16_3", left: "Célula de la piel", right: "Célula" }
    ],
    explain: "Entender los niveles nos ayuda a comprender cómo estamos construidos."
  },
  {
    id: "sis_17", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "El aire entra por la nariz.",
    prompt: "¿Por qué tubo baja el aire hacia los pulmones?",
    options: ["La tráquea", "El esófago", "Las venas"],
    correctAnswer: "La tráquea",
    explain: "La tráquea es el conducto del sistema respiratorio."
  },
  {
    id: "sis_18", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Todos los sistemas del cuerpo humano se comunican.",
    prompt: "¿Podría un sistema vivir sin los demás?",
    options: ["No, todos trabajan en equipo para mantenernos vivos", "Sí, cada uno es independiente", "Solo el digestivo puede"],
    correctAnswer: "No, todos trabajan en equipo para mantenernos vivos",
    explain: "Nuestros sistemas están interconectados y dependen unos de otros."
  },
  {
    id: "sis_19", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "match",
    context: "Último repaso de órganos importantes.",
    prompt: "Relaciona cada órgano con su característica:",
    pairs: [
      { id: "p19_1", left: "Pulmones", right: "Se inflan como globos" },
      { id: "p19_2", left: "Estómago", right: "Bolsa que mezcla la comida" },
      { id: "p19_3", left: "Intestinos", right: "Tubos largos que absorben nutrientes" }
    ],
    explain: "Cada órgano tiene una forma perfecta para su función."
  },
  {
    id: "sis_20", subject: "science", station: "Sistemas Digestivo y Respiratorio", type: "multiple",
    context: "Para finalizar, recordemos.",
    prompt: "¿Cuál es el nivel más pequeño de organización del que estamos hechos?",
    options: ["Las células", "Los sistemas", "La sangre"],
    correctAnswer: "Las células",
    explain: "Somos millones y millones de células organizadas."
  }
];
