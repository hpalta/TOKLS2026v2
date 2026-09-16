const fs = require('fs');
const path = require('path');

const file = path.join('questions', 'ciencia_t3tok1.js');
let data = require('./' + file);

const newQuestions = [
  {
    "id": "t3tok1_9",
    "type": "multiple",
    "subject": "science",
    "station": "T3TOK1",
    "prompt": "Según los documentos, ¿cuáles son algunas de las principales amenazas causadas por el humano hacia la naturaleza y sus especies?",
    "options": [
      "La tala de árboles, el tráfico de especies y la contaminación.",
      "El exceso de lluvia natural y los temblores de tierra.",
      "Que los animales comen demasiado y acaban su propio hábitat.",
      "El viento fuerte y la luz del sol en verano."
    ],
    "correctAnswer": "La tala de árboles, el tráfico de especies y la contaminación.",
    "explain": "Acciones humanas como la deforestación (tala), la agricultura sin control, la cacería y el tráfico ilegal ponen en gran riesgo los hábitats."
  },
  {
    "id": "t3tok1_10",
    "type": "true_false",
    "subject": "science",
    "station": "T3TOK1",
    "prompt": "Los microorganismos y los hongos, aunque no sean animales o plantas grandes, también son factores bióticos (con vida).",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explain": "A pesar de su tamaño, los hongos, las bacterias y otros microorganismos son seres vivos y, por lo tanto, forman parte de los factores bióticos."
  },
  {
    "id": "t3tok1_11",
    "type": "match",
    "subject": "science",
    "station": "T3TOK1",
    "prompt": "Clasifica los siguientes elementos como factores Bióticos o Abióticos:",
    "pairs": [
      { "id": "p1", "left": "El Ocelote", "right": "Biótico" },
      { "id": "p2", "left": "La luz solar", "right": "Abiótico" },
      { "id": "p3", "left": "Un hongo", "right": "Biótico" },
      { "id": "p4", "left": "El agua del río", "right": "Abiótico" }
    ],
    "explain": "Los seres vivos (animales, plantas, hongos) son bióticos. Los elementos no vivos necesarios para vivir (luz, agua, suelo) son abióticos."
  },
  {
    "id": "t3tok1_12",
    "type": "multiple",
    "subject": "science",
    "station": "T3TOK1",
    "prompt": "Los sapos y las ranas viven parte de su vida en el agua y parte de su vida en la tierra. ¿Cómo se les llama a estos animales?",
    "options": [
      "Anfibios",
      "Aeroterrestres",
      "Reptiles estrictos",
      "Mamíferos acuáticos"
    ],
    "correctAnswer": "Anfibios",
    "explain": "Los anfibios (como sapos y ranas) se caracterizan por combinar el medio acuático con el terrestre durante las diferentes etapas de su vida."
  },
  {
    "id": "t3tok1_13",
    "type": "multiple",
    "subject": "science",
    "station": "T3TOK1",
    "prompt": "El mono Tití Cabeciblanco es una especie emblemática de Colombia que se encuentra en peligro crítico. ¿Cuál es su hábitat principal?",
    "options": [
      "El Bosque Seco Tropical del Caribe colombiano.",
      "Los glaciares del Polo Norte.",
      "El desierto de la Guajira.",
      "Las profundidades del océano Pacífico."
    ],
    "correctAnswer": "El Bosque Seco Tropical del Caribe colombiano.",
    "explain": "Este primate es único en el mundo (endémico) y su hábitat natural, el Bosque Seco Tropical de la región Caribe, se ha reducido drásticamente."
  },
  {
    "id": "t3tok1_14",
    "type": "true_false",
    "subject": "science",
    "station": "T3TOK1",
    "prompt": "Los animales aeroterrestres (como las aves migratorias) viven el 100% de su vida volando en el aire y jamás tocan la tierra.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explain": "Aunque vuelan mucho tiempo, en algún momento necesitan tocar la tierra para reproducirse, poner huevos, descansar o buscar alimento."
  },
  {
    "id": "t3tok1_15",
    "type": "multiple",
    "subject": "science",
    "station": "T3TOK1",
    "prompt": "¿Por qué es importante que un lagarto o una serpiente reciba el calor del sol (un factor abiótico)?",
    "options": [
      "Para mantener su cuerpo caliente y poder sobrevivir.",
      "Porque les gusta broncearse en verano.",
      "Porque sin sol se vuelven invisibles.",
      "Para poder volar por los aires."
    ],
    "correctAnswer": "Para mantener su cuerpo caliente y poder sobrevivir.",
    "explain": "Los reptiles son animales que no producen suficiente calor por sí mismos, por eso dependen de la luz solar (factor abiótico) para calentar su cuerpo."
  }
];

data.push(...newQuestions);

fs.writeFileSync(file, 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('Agregadas 7 preguntas más, total = 15');
