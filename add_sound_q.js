const fs = require('fs');
const path = require('path');
const file = path.join('questions', 'ciencia_luz.js');
let data = require('./' + file);

data.forEach(q => {
    if (q.station === 'La Luz') {
        q.station = 'La Luz y el sonido';
    }
});

const newQuestions = [
  {
    "id": "sonido_1",
    "type": "multiple",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "¿Qué es el sonido?",
    "options": [
      "Una forma de energía que los oídos perciben",
      "Una luz que podemos ver con los ojos",
      "El silencio del universo",
      "Una onda que solo viaja en el vacío"
    ],
    "correctAnswer": "Una forma de energía que los oídos perciben",
    "explain": "El sonido es una forma de energía que es captada por nuestros oídos y se comunica al cerebro a través de señales."
  },
  {
    "id": "sonido_2",
    "type": "true_false",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "El sonido puede viajar y propagarse en el vacío absoluto.",
    "correctAnswer": "Falso",
    "explain": "A diferencia de la luz, el sonido necesita un medio material (gas, líquido o sólido) para propagarse y no viaja en el vacío."
  },
  {
    "id": "sonido_3",
    "type": "multiple",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "¿A través de qué medios puede propagarse el sonido?",
    "options": [
      "Gases, líquidos y sólidos",
      "Solo a través del aire",
      "Solo por el agua y el vacío",
      "Únicamente a través de los sólidos"
    ],
    "correctAnswer": "Gases, líquidos y sólidos",
    "explain": "El sonido puede transmitirse por distintos medios materiales como el aire (gas), el agua (líquido) o las paredes (sólidos)."
  },
  {
    "id": "sonido_4",
    "type": "true_false",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "El sonido se transmite en forma de vibraciones, que son movimientos de partículas en torno a una posición fija.",
    "correctAnswer": "Verdadero",
    "explain": "Las partículas vibran produciendo ondas que transportan la energía sonora."
  },
  {
    "id": "sonido_5",
    "type": "match",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "Relaciona las cualidades del sonido con su característica principal:",
    "pairs": [
      { "id": "p1", "left": "Intensidad", "right": "Diferencia un sonido fuerte de uno débil" },
      { "id": "p2", "left": "Tono", "right": "Distingue un sonido agudo de uno grave" },
      { "id": "p3", "left": "Sonido Fuerte", "right": "La detonación producida por un cañón" },
      { "id": "p4", "left": "Sonido Agudo", "right": "El silbato de un árbitro" }
    ],
    "explain": "La intensidad nos habla de lo 'fuerte o débil' y el tono de lo 'agudo o grave'."
  },
  {
    "id": "sonido_6",
    "type": "multiple",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "¿Qué cualidad del sonido nos permite decir si algo sonó muy 'duro' o muy 'pasito'?",
    "options": [
      "La intensidad",
      "El tono",
      "El eco",
      "La transparencia"
    ],
    "correctAnswer": "La intensidad",
    "explain": "La intensidad clasifica los sonidos en fuertes o débiles."
  },
  {
    "id": "sonido_7",
    "type": "multiple",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "Cuando escuchas un contrabajo y luego el canto de un pajarito, ¿qué cualidad te permite notar que uno es más grave y el otro más agudo?",
    "options": [
      "El tono",
      "La intensidad",
      "El vacío",
      "El volumen"
    ],
    "correctAnswer": "El tono",
    "explain": "El tono es la cualidad para distinguir entre sonidos graves (contrabajo) y agudos (pajarito o silbato)."
  },
  {
    "id": "sonido_8",
    "type": "multiple",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "De acuerdo a nuestros sentidos, ¿cómo percibe nuestro cuerpo los diferentes estímulos?",
    "options": [
      "Los sonidos por el oído y la luz por la vista.",
      "Los sonidos por el gusto y la luz por el tacto.",
      "Los sonidos por la vista y la luz por el oído.",
      "Ambos estímulos se perciben solo por el tacto."
    ],
    "correctAnswer": "Los sonidos por el oído y la luz por la vista.",
    "explain": "La vista capta la energía luminosa, y nuestro oído percibe las vibraciones como sonido."
  },
  {
    "id": "sonido_9",
    "type": "match",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "Clasifica los siguientes cuerpos luminosos según si son naturales o artificiales:",
    "pairs": [
      { "id": "p1", "left": "El Sol", "right": "Luminoso natural" },
      { "id": "p2", "left": "Las estrellas", "right": "Luminoso natural" },
      { "id": "p3", "left": "Una lámpara", "right": "Luminoso artificial" },
      { "id": "p4", "left": "Una vela encendida", "right": "Luminoso artificial" }
    ],
    "explain": "El Sol y las estrellas existen en la naturaleza. Las lámparas y las velas son creadas por los humanos."
  },
  {
    "id": "sonido_10",
    "type": "match",
    "subject": "science",
    "station": "La Luz y el sonido",
    "prompt": "Clasifica los siguientes instrumentos según la intensidad de sonido que suelen producir:",
    "pairs": [
      { "id": "p1", "left": "El tambor", "right": "Sonido Fuerte" },
      { "id": "p2", "left": "La trompeta", "right": "Sonido Fuerte" },
      { "id": "p3", "left": "La flauta dulce", "right": "Sonido Suave" },
      { "id": "p4", "left": "El triángulo", "right": "Sonido Suave" }
    ],
    "explain": "Los tambores y trompetas producen mucha intensidad (fuertes), mientras que los triángulos y las flautas suelen ser más suaves."
  }
];

data.push(...newQuestions);

const content = 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(file, content, 'utf8');
console.log('Updated station name and added 10 new questions.');
