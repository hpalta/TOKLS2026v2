module.exports = [
  {
    id: "luz_1", subject: "science", station: "La Luz", type: "multiple",
    context: "La luz es una manifestación de la energía que nos permite observar los objetos.",
    prompt: "¿Qué nos permite diferenciar la luz en los objetos?",
    options: ["Su tamaño, color, apariencia y forma", "Su olor y sabor", "Su peso y textura"],
    correctAnswer: "Su tamaño, color, apariencia y forma",
    explain: "La luz nos permite ver todas estas características visuales."
  },
  {
    id: "luz_2", subject: "science", station: "La Luz", type: "match",
    context: "Los objetos interactúan de diferentes maneras con la luz.",
    prompt: "Relaciona el tipo de cuerpo con cómo deja pasar la luz:",
    pairs: [
      { id: "p2_1", left: "Cuerpos transparentes", right: "Dejan pasar toda la luz que les llega." },
      { id: "p2_2", left: "Cuerpos opacos", right: "No dejan pasar la luz que les llega." },
      { id: "p2_3", left: "Cuerpos luminosos", right: "Desprenden luz o son fuente de luz." }
    ],
    explain: "Dependiendo del material, los objetos pueden ser transparentes, translúcidos, opacos o luminosos."
  },
  {
    id: "luz_3", subject: "science", station: "La Luz", type: "multiple",
    context: "Existen diferentes fuentes de luz, algunas son naturales y otras creadas por el hombre.",
    prompt: "¿Cuál de los siguientes es un ejemplo de un cuerpo luminoso natural?",
    options: ["El Sol", "Una linterna", "Una vela encendida"],
    correctAnswer: "El Sol",
    explain: "El Sol emite luz natural, mientras que la linterna y la vela son artificiales."
  },
  {
    id: "luz_4", subject: "science", station: "La Luz", type: "label",
    context: "Las fuentes de luz pueden emitir luz a su alrededor.",
    prompt: "Identifica la fuente de luz",
    svg: "<svg viewBox=\"0 0 100 100\" width=\"100\" height=\"100\"><circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"#FFD700\"/></svg>",
    labels: [
      { id: "l4_1", x: 50, y: 50, text: "Fuente Luminosa" }
    ],
    explain: "Un objeto que emite su propia luz es una fuente luminosa."
  },
  {
    id: "luz_5", subject: "science", station: "La Luz", type: "multiple",
    context: "María quiere comprar una tela para la cortina de su sala y quiere que entre poca luz.",
    prompt: "¿Qué tipo de tela debe seleccionar?",
    options: ["Tela translúcida", "Tela transparente", "Tela invisible"],
    correctAnswer: "Tela translúcida",
    explain: "La tela translúcida permite el paso de poca luz, lo ideal para su necesidad."
  },
  {
    id: "luz_6", subject: "science", station: "La Luz", type: "multiple",
    context: "María luego decidió comprar una cortina transparente para su cuarto, deseando que entre poca luz.",
    prompt: "¿Fue acertada la elección de María?",
    options: ["No, porque una cortina transparente deja pasar toda la luz", "Sí, porque es bonita", "No, porque la cortina opaca deja pasar toda la luz"],
    correctAnswer: "No, porque una cortina transparente deja pasar toda la luz",
    explain: "Si quería poca luz, la tela transparente fue una mala elección."
  },
  {
    id: "luz_7", subject: "science", station: "La Luz", type: "match",
    context: "Clasifica los siguientes objetos según su interacción con la luz.",
    prompt: "Relaciona el objeto con su característica:",
    pairs: [
      { id: "p7_1", left: "Linterna", right: "Cuerpo luminoso" },
      { id: "p7_2", left: "Madera", right: "Cuerpo opaco" },
      { id: "p7_3", left: "Vidrio limpio", right: "Cuerpo transparente" }
    ],
    explain: "Cada objeto interactúa diferente con la luz dependiendo de qué esté hecho."
  },
  {
    id: "luz_8", subject: "science", station: "La Luz", type: "multiple",
    context: "Algunos objetos no desprenden luz propia pero pueden reflejarla.",
    prompt: "¿Qué tipo de cuerpos son aquellos que no desprenden luz, pero reflejan la luz que les llega?",
    options: ["Cuerpos no luminosos", "Cuerpos artificiales", "Cuerpos translúcidos"],
    correctAnswer: "Cuerpos no luminosos",
    explain: "Estos objetos necesitan una fuente de luz para poder ser vistos."
  },
  {
    id: "luz_9", subject: "science", station: "La Luz", type: "label",
    context: "Un objeto opaco bloquea la luz y forma una sombra.",
    prompt: "Identifica qué ocurre cuando la luz choca con un objeto opaco",
    svg: "<svg viewBox=\"0 0 100 100\"><rect x=\"40\" y=\"20\" width=\"20\" height=\"60\" fill=\"#8B4513\"/><ellipse cx=\"80\" cy=\"80\" rx=\"20\" ry=\"10\" fill=\"gray\"/></svg>",
    labels: [
      { id: "l9_1", x: 80, y: 80, text: "Sombra" }
    ],
    explain: "La sombra se produce porque el objeto opaco no deja pasar la luz."
  },
  {
    id: "luz_10", subject: "science", station: "La Luz", type: "multiple",
    context: "Las velas y las linternas son útiles cuando se va la energía eléctrica.",
    prompt: "¿Qué tipo de cuerpos son las velas y linternas?",
    options: ["Cuerpos luminosos artificiales", "Cuerpos luminosos naturales", "Cuerpos transparentes"],
    correctAnswer: "Cuerpos luminosos artificiales",
    explain: "Son creados por el ser humano para emitir luz."
  },
  {
    id: "luz_11", subject: "science", station: "La Luz", type: "multiple",
    context: "En la noche, podemos ver la luna brillando en el cielo.",
    prompt: "¿La luna emite luz propia o refleja la del sol?",
    options: ["Refleja la luz del Sol (no luminosa)", "Emite su propia luz (luminosa)", "Es transparente"],
    correctAnswer: "Refleja la luz del Sol (no luminosa)",
    explain: "La luna es un cuerpo no luminoso que refleja la luz que le llega del Sol."
  },
  {
    id: "luz_12", subject: "science", station: "La Luz", type: "match",
    context: "Recuerda las propiedades de la luz y los cuerpos.",
    prompt: "Une el concepto con su efecto:",
    pairs: [
      { id: "p12_1", left: "Cuerpo Opaco", right: "Crea una sombra oscura" },
      { id: "p12_2", left: "Cuerpo Transparente", right: "Permite ver claramente a través de él" },
      { id: "p12_3", left: "Cuerpo Translúcido", right: "Permite ver borroso a través de él" }
    ],
    explain: "Esta es la forma en que los materiales interactúan con la luz."
  },
  {
    id: "luz_13", subject: "science", station: "La Luz", type: "multiple",
    context: "Mateo quiere leer un libro en su cuarto oscuro.",
    prompt: "¿Qué necesita Mateo para poder ver las letras del libro?",
    options: ["Una fuente de energía luminosa", "Una fuente de energía sonora", "Un cuerpo opaco"],
    correctAnswer: "Una fuente de energía luminosa",
    explain: "La luz nos permite observar los objetos y sus detalles."
  },
  {
    id: "luz_14", subject: "science", station: "La Luz", type: "multiple",
    context: "Estás haciendo un experimento con papel celofán de colores.",
    prompt: "¿Qué tipo de material es el papel celofán?",
    options: ["Translúcido", "Opaco", "Luminoso natural"],
    correctAnswer: "Translúcido",
    explain: "El celofán deja pasar algo de luz, pero a menudo tiñe o difumina lo que hay detrás."
  },
  {
    id: "luz_15", subject: "science", station: "La Luz", type: "label",
    context: "La luz puede viajar a través de los lentes de tus gafas.",
    prompt: "Señala la parte transparente",
    svg: "<svg viewBox=\"0 0 100 100\"><circle cx=\"30\" cy=\"50\" r=\"20\" fill=\"#ADD8E6\" opacity=\"0.5\"/><circle cx=\"70\" cy=\"50\" r=\"20\" fill=\"#ADD8E6\" opacity=\"0.5\"/></svg>",
    labels: [
      { id: "l15_1", x: 30, y: 50, text: "Lente Transparente" }
    ],
    explain: "Los lentes deben ser transparentes para dejar pasar la luz a nuestros ojos."
  },
  {
    id: "luz_16", subject: "science", station: "La Luz", type: "match",
    context: "Asocia cada fuente de luz.",
    prompt: "Relaciona la fuente de luz con su tipo:",
    pairs: [
      { id: "p16_1", left: "Fuego / Fogata", right: "Luminoso" },
      { id: "p16_2", left: "Sol", right: "Luminoso Natural" },
      { id: "p16_3", left: "Bombillo", right: "Luminoso Artificial" }
    ],
    explain: "El fuego y el sol son ejemplos naturales (o creados químicamente), el bombillo es artificial."
  },
  {
    id: "luz_17", subject: "science", station: "La Luz", type: "multiple",
    context: "Si te pones frente a un espejo, puedes ver tu reflejo.",
    prompt: "¿Qué hace el espejo con la luz?",
    options: ["La refleja", "La absorbe toda", "Produce su propia luz"],
    correctAnswer: "La refleja",
    explain: "El espejo es un cuerpo no luminoso que refleja casi toda la luz que le llega."
  },
  {
    id: "luz_18", subject: "science", station: "La Luz", type: "multiple",
    context: "En un día nublado, las nubes tapan el sol pero aún hay claridad.",
    prompt: "¿Qué tipo de cuerpo actúan las nubes en este caso?",
    options: ["Cuerpos translúcidos", "Cuerpos transparentes", "Cuerpos luminosos"],
    correctAnswer: "Cuerpos translúcidos",
    explain: "Las nubes dejan pasar parte de la luz del Sol, por lo que son translúcidas."
  },
  {
    id: "luz_19", subject: "science", station: "La Luz", type: "match",
    context: "Repaso final de materiales.",
    prompt: "Relaciona el material con su comportamiento con la luz:",
    pairs: [
      { id: "p19_1", left: "Agua limpia", right: "Transparente" },
      { id: "p19_2", left: "Pared de ladrillo", right: "Opaco" },
      { id: "p19_3", left: "Papel mantequilla", right: "Translúcido" }
    ],
    explain: "Diferentes materiales, diferentes interacciones con la luz."
  },
  {
    id: "luz_20", subject: "science", station: "La Luz", type: "multiple",
    context: "La luz es vital para nosotros.",
    prompt: "La luz es una manifestación de la...",
    options: ["Energía", "Materia", "Fuerza magnética"],
    correctAnswer: "Energía",
    explain: "La luz es una manifestación de la energía que nos permite observar."
  }
];
