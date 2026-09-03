const fs = require('fs');
const path = require('path');

const questions = [
  // --- SINÓNIMOS Y ANTÓNIMOS ---
  {
    "id": "len4_1",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "**El Cumpleaños de Sofía:**\n\n'Sofía estaba muy **feliz** porque recibió un regalo enorme. Era un oso de peluche muy **lindo** que siempre había querido.'",
    "prompt": "¿Qué palabra significa lo mismo (es un sinónimo) que la palabra resaltada 'feliz'?",
    "options": ["Contenta", "Triste", "Enojada", "Cansada"],
    "correctAnswer": "Contenta",
    "explain": "Feliz y contenta son sinónimos, significan lo mismo."
  },
  {
    "id": "len4_2",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "**El Cumpleaños de Sofía:**\n\n'Sofía estaba muy feliz porque recibió un regalo **enorme**. Era un oso de peluche muy lindo que siempre había querido.'",
    "prompt": "¿Cuál es un antónimo (lo contrario) de la palabra 'enorme'?",
    "options": ["Pequeño", "Gigante", "Largo", "Bonito"],
    "correctAnswer": "Pequeño",
    "explain": "El antónimo de enorme (muy grande) es pequeño."
  },
  {
    "id": "len4_3",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "match",
    "context": "¡Juguemos a los opuestos! Los antónimos son palabras que significan lo contrario.",
    "prompt": "Relaciona cada palabra con su antónimo correcto:",
    "pairs": [
      { "id": "p4_1", "left": "Día", "right": "Noche" },
      { "id": "p4_2", "left": "Llorar", "right": "Reír" },
      { "id": "p4_3", "left": "Frío", "right": "Caliente" },
      { "id": "p4_4", "left": "Rápido", "right": "Lento" }
    ],
    "explain": "Cada par de palabras representa lo contrario (antónimos)."
  },
  {
    "id": "len4_4",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "Lee la siguiente frase:\n\n'El perro de mi vecino es muy **bravo**.'",
    "prompt": "¿Qué palabra significa lo mismo que 'bravo' (sinónimo)?",
    "options": ["Feroz", "Amable", "Dormilón", "Pequeño"],
    "correctAnswer": "Feroz",
    "explain": "Bravo y feroz son sinónimos porque indican que el perro tiene un carácter fuerte."
  },
  {
    "id": "len4_5",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "match",
    "context": "¡A buscar parejas que se parezcan! Los sinónimos son palabras diferentes que significan lo mismo.",
    "prompt": "Relaciona cada palabra con su sinónimo:",
    "pairs": [
      { "id": "s4_1", "left": "Saltar", "right": "Brincar" },
      { "id": "s4_2", "left": "Hermoso", "right": "Bello" },
      { "id": "s4_3", "left": "Regalo", "right": "Obsequio" },
      { "id": "s4_4", "left": "Terminar", "right": "Acabar" }
    ],
    "explain": "Saltar=Brincar, Hermoso=Bello, Regalo=Obsequio, Terminar=Acabar."
  },
  {
    "id": "len4_6",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "Tomás siempre es el primero en llegar a la escuela porque camina muy **rápido**.",
    "prompt": "¿Cuál de estas palabras es el antónimo de 'rápido'?",
    "options": ["Lento", "Veloz", "Fuerte", "Alto"],
    "correctAnswer": "Lento",
    "explain": "Lo contrario de ir rápido es ir lento."
  },
  {
    "id": "len4_7",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "**En el parque:**\n'La niña estaba **asustada** al ver al perro saltar tan alto.'",
    "prompt": "¿Cuál es un sinónimo de 'asustada'?",
    "options": ["Temerosa", "Alegre", "Tranquila", "Valiente"],
    "correctAnswer": "Temerosa",
    "explain": "Estar asustada o temerosa es sentir miedo."
  },
  {
    "id": "len4_8",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "María se puso un saco porque el clima estaba muy **frío**.",
    "prompt": "¿Qué pasa si cambiamos 'frío' por su antónimo? ¿Cómo quedaría la oración?",
    "options": [
      "...porque el clima estaba muy caliente.",
      "...porque el clima estaba muy helado.",
      "...porque el clima estaba muy nublado.",
      "...porque el clima estaba muy oscuro."
    ],
    "correctAnswer": "...porque el clima estaba muy caliente.",
    "explain": "El antónimo de frío es caliente."
  },
  {
    "id": "len4_9",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "El niño subió por la escalera para alcanzar el juguete.",
    "prompt": "¿Cuál es el antónimo del verbo 'subir'?",
    "options": ["Bajar", "Correr", "Trepar", "Caer"],
    "correctAnswer": "Bajar",
    "explain": "La acción contraria a subir es bajar."
  },
  {
    "id": "len4_10",
    "subject": "lenguaje",
    "station": "Vocabulario Divertido",
    "type": "multiple",
    "context": "Para preparar la sopa, el cocinero necesita **empezar** cortando las verduras.",
    "prompt": "¿Cuál es un sinónimo de la palabra 'empezar'?",
    "options": ["Comenzar", "Terminar", "Guardar", "Picar"],
    "correctAnswer": "Comenzar",
    "explain": "Empezar y comenzar son palabras sinónimas."
  },

  // --- AUMENTATIVOS Y DIMINUTIVOS ---
  {
    "id": "len4_11",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "A veces las cosas nos parecen muy grandes y usamos terminaciones como -ón, -ona, -azo, -aza, -ote, -ota.",
    "prompt": "¿Cuál es el aumentativo de la palabra 'perro'?",
    "options": ["Perrazo", "Perrito", "Perro", "Perrera"],
    "correctAnswer": "Perrazo",
    "explain": "Perrazo indica que el perro es muy grande."
  },
  {
    "id": "len4_12",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "**Una pequeña mascota:**\n'Mi hermana tiene un gato tan pequeñito que cabe en sus manos.'",
    "prompt": "¿Cuál es el diminutivo de 'gato'?",
    "options": ["Gatito", "Gatazo", "Gatón", "Gatear"],
    "correctAnswer": "Gatito",
    "explain": "Gatito se usa para nombrar a un gato pequeño."
  },
  {
    "id": "len4_13",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "match",
    "context": "Los diminutivos indican que algo es pequeño (-ito, -ita) y los aumentativos que es grande (-ote, -azo).",
    "prompt": "Relaciona la palabra original con su forma en diminutivo:",
    "pairs": [
      { "id": "dim_1", "left": "Casa", "right": "Casita" },
      { "id": "dim_2", "left": "Sol", "right": "Solecito" },
      { "id": "dim_3", "left": "Mesa", "right": "Mesita" },
      { "id": "dim_4", "left": "Pájaro", "right": "Pajarito" }
    ],
    "explain": "Añadimos -ita, -ito, -ecito para indicar tamaño pequeño."
  },
  {
    "id": "len4_14",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "match",
    "context": "¡Ahora vamos a hacer las cosas gigantes!",
    "prompt": "Relaciona la palabra con su aumentativo:",
    "pairs": [
      { "id": "aum_1", "left": "Libro", "right": "Librote" },
      { "id": "aum_2", "left": "Cabeza", "right": "Cabezota" },
      { "id": "aum_3", "left": "Golpe", "right": "Golpazo" },
      { "id": "aum_4", "left": "Coche", "right": "Cochazo" }
    ],
    "explain": "Usamos -ote, -ota, -azo para los aumentativos."
  },
  {
    "id": "len4_15",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "Lee la oración: 'El león pegó un rugido tan fuerte que asustó al ratoncito.'",
    "prompt": "¿Qué palabra de la oración está en diminutivo?",
    "options": ["Ratoncito", "Rugido", "Fuerte", "León"],
    "correctAnswer": "Ratoncito",
    "explain": "Ratoncito es el diminutivo de ratón."
  },
  {
    "id": "len4_16",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "Quiero decir que una manzana es muy, muy grande.",
    "prompt": "¿Qué palabra debo usar?",
    "options": ["Manzanota", "Manzanita", "Manzano", "Manzanar"],
    "correctAnswer": "Manzanota",
    "explain": "Manzanota es el aumentativo de manzana."
  },
  {
    "id": "len4_17",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "'Caperucita Roja iba por el bosque con su canastita.'",
    "prompt": "¿Cuántos diminutivos hay en la oración anterior?",
    "options": ["Dos (Caperucita, canastita)", "Uno (Caperucita)", "Uno (canastita)", "Ninguno"],
    "correctAnswer": "Dos (Caperucita, canastita)",
    "explain": "Caperucita (de caperuza) y canastita (de canasta) son diminutivos."
  },
  {
    "id": "len4_18",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "Carlos tiene unos zapatos enormes que le quedan grandes.",
    "prompt": "¿Cuál es el aumentativo correcto para 'zapatos'?",
    "options": ["Zapatones", "Zapatitos", "Zapatería", "Zapatillas"],
    "correctAnswer": "Zapatones",
    "explain": "Zapatones (o zapatotes) son aumentativos de zapato."
  },
  {
    "id": "len4_19",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "La palabra 'pelotazo' es un aumentativo que significa un golpe dado con una...",
    "prompt": "¿Qué significa pelotazo?",
    "options": ["Golpe fuerte con una pelota", "Una pelota pequeña", "Una pelota que bota poco", "Un juguete"],
    "correctAnswer": "Golpe fuerte con una pelota",
    "explain": "Pelotazo puede significar una pelota muy grande o un golpe fuerte con ella."
  },
  {
    "id": "len4_20",
    "subject": "lenguaje",
    "station": "Palabras que Crecen y se Achican",
    "type": "multiple",
    "context": "¿Sabías que algunas palabras terminan en 'ito' pero no son diminutivos? Por ejemplo: mosquito.",
    "prompt": "¿Cuál de estas palabras SÍ es un diminutivo?",
    "options": ["Perrito", "Mosquito", "Pajarito (ave pequeña)", "Perrito y Pajarito"],
    "correctAnswer": "Perrito y Pajarito",
    "explain": "Perrito viene de perro y pajarito de pájaro. Mosquito es una palabra entera, no viene de 'mosco' pequeño en el mismo sentido, aunque su origen sí lo sea, pero pajarito y perrito son los ejemplos más claros."
  },

  // --- FAMILIA DE PALABRAS ---
  {
    "id": "len4_21",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "Una familia de palabras es un grupo de palabras que comparten la misma raíz y tienen significados parecidos.",
    "prompt": "¿Qué palabra NO pertenece a la familia de la palabra 'FLOR'?",
    "options": ["Flotador", "Florero", "Florería", "Floral"],
    "correctAnswer": "Flotador",
    "explain": "Flotador viene de flotar, no tiene nada que ver con las flores."
  },
  {
    "id": "len4_22",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "Tenemos las palabras: zapato, zapatero, zapatería, zapatilla.",
    "prompt": "¿Cuál es la palabra primitiva o raíz de esta familia?",
    "options": ["Zapato", "Zapatería", "Zapatilla", "Zapatero"],
    "correctAnswer": "Zapato",
    "explain": "De la palabra 'zapato' nacen todas las demás."
  },
  {
    "id": "len4_23",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "match",
    "context": "A cada palabra primitiva, únele su familia de palabras.",
    "prompt": "Relaciona la raíz con su familia de palabras:",
    "pairs": [
      { "id": "fam_1", "left": "Pan", "right": "Panadero, panadería, panecillo" },
      { "id": "fam_2", "left": "Fruta", "right": "Frutero, frutería, frutal" },
      { "id": "fam_3", "left": "Mar", "right": "Marinero, submarino, marea" },
      { "id": "fam_4", "left": "Carne", "right": "Carnicero, carnicería, carnívoro" }
    ],
    "explain": "Cada grupo comparte la misma raíz y un significado relacionado."
  },
  {
    "id": "len4_24",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "**Investigación de Palabras:**\n\n'La niña guardó el libro en la librería, mientras el librero organizaba las estanterías.'",
    "prompt": "¿A qué familia de palabras pertenecen 'librería' y 'librero'?",
    "options": ["Familia de libro", "Familia de libre", "Familia de leer", "Familia de madera"],
    "correctAnswer": "Familia de libro",
    "explain": "Librería, librero y librito provienen de la palabra libro."
  },
  {
    "id": "len4_25",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "Lee con atención las siguientes palabras: campana, campanario, campanada, campamento.",
    "prompt": "¿Cuál palabra es la 'intrusa' que NO pertenece a la familia de 'campana'?",
    "options": ["Campamento", "Campanario", "Campanada", "Todas pertenecen"],
    "correctAnswer": "Campamento",
    "explain": "Campamento viene de campo/acampar, no de campana."
  },
  {
    "id": "len4_26",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "¿Qué lugar vende helados?",
    "prompt": "¿Cuál palabra de la familia de 'helado' significa 'tienda donde se venden helados'?",
    "options": ["Heladería", "Heladero", "Heladito", "Hielo"],
    "correctAnswer": "Heladería",
    "explain": "La terminación -ería a menudo indica la tienda o lugar de venta."
  },
  {
    "id": "len4_27",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "match",
    "context": "Encuentra el lugar de venta de estas familias de palabras.",
    "prompt": "Relaciona la palabra con el lugar donde se vende:",
    "pairs": [
      { "id": "ven_1", "left": "Pescado", "right": "Pescadería" },
      { "id": "ven_2", "left": "Reloj", "right": "Relojería" },
      { "id": "ven_3", "left": "Pan", "right": "Panadería" },
      { "id": "ven_4", "left": "Juguete", "right": "Juguetería" }
    ],
    "explain": "Se forman añadiendo -ería a la raíz de la palabra."
  },
  {
    "id": "len4_28",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "Mi tío pinta cuadros muy hermosos. A él le dicen el 'pintor'.",
    "prompt": "¿Qué otras palabras pertenecen a la familia de 'pintar'?",
    "options": ["Pintura, pintoresco, pintado", "Pino, piña, pinzón", "Pinta, pinocho, pimiento", "Pimiento, pingüino, pincho"],
    "correctAnswer": "Pintura, pintoresco, pintado",
    "explain": "Todas comparten la raíz 'pint-' y tienen que ver con color o cuadros."
  },
  {
    "id": "len4_29",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "¿De dónde vienen estas palabras: arboleda, arbusto, arbolito?",
    "prompt": "¿Cuál es la palabra raíz?",
    "options": ["Árbol", "Arena", "Arte", "Arbusto"],
    "correctAnswer": "Árbol",
    "explain": "Todas se refieren a árboles o conjuntos de ellos."
  },
  {
    "id": "len4_30",
    "subject": "lenguaje",
    "station": "Familias de Palabras",
    "type": "multiple",
    "context": "Las palabras también tienen familias, ¡como nosotros! Tienen un 'apellido' (raíz) en común.",
    "prompt": "¿Qué palabra es de la familia de 'caballo'?",
    "options": ["Caballeriza", "Cabaña", "Cabelo", "Cabra"],
    "correctAnswer": "Caballeriza",
    "explain": "Caballeriza es el lugar donde duermen los caballos."
  },

  // --- ONOMATOPEYAS ---
  {
    "id": "len4_31",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "Las onomatopeyas son palabras que imitan sonidos de la vida real. \n\n¡Miau, miau! dijo el animalito.",
    "prompt": "¿De qué animal es la onomatopeya 'miau'?",
    "options": ["El gato", "El perro", "El pato", "El león"],
    "correctAnswer": "El gato",
    "explain": "El sonido que hacen los gatos se escribe 'miau'."
  },
  {
    "id": "len4_32",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "**El reloj misterioso:**\n\n'En la casa de la abuela, a la medianoche se escuchaba: ¡Tic, tac, tic, tac! constante y sin parar.'",
    "prompt": "¿Qué sonido imita la onomatopeya 'tic, tac'?",
    "options": ["El sonido de un reloj", "Una campana", "Un tambor", "El agua cayendo"],
    "correctAnswer": "El sonido de un reloj",
    "explain": "El segundero de los relojes de pared suele sonar como tic-tac."
  },
  {
    "id": "len4_33",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "match",
    "context": "¡A jugar con los sonidos de los animales!",
    "prompt": "Relaciona cada animal con su onomatopeya:",
    "pairs": [
      { "id": "ono_1", "left": "Vaca", "right": "Muuu" },
      { "id": "ono_2", "left": "Pato", "right": "Cuac, cuac" },
      { "id": "ono_3", "left": "Oveja", "right": "Beee" },
      { "id": "ono_4", "left": "Perro", "right": "Guau, guau" }
    ],
    "explain": "Cada onomatopeya representa el ruido que hace ese animal."
  },
  {
    "id": "len4_34",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "El niño iba caminando cuando de pronto... ¡Pum! Se cayó al piso.",
    "prompt": "¿Qué significa la onomatopeya '¡Pum!'?",
    "options": ["Un golpe o caída", "Alguien que estornuda", "Un grito de alegría", "El canto de un pájaro"],
    "correctAnswer": "Un golpe o caída",
    "explain": "El sonido pum suele representar un impacto o caída fuerte."
  },
  {
    "id": "len4_35",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "match",
    "context": "No solo los animales hacen sonidos, ¡las cosas también!",
    "prompt": "Relaciona el sonido con lo que lo produce:",
    "pairs": [
      { "id": "son_1", "left": "¡Ring, ring!", "right": "El teléfono" },
      { "id": "son_2", "left": "¡Toc, toc!", "right": "Alguien llamando a la puerta" },
      { "id": "son_3", "left": "¡Pii, pii!", "right": "La bocina de un auto" },
      { "id": "son_4", "left": "¡Aaaachís!", "right": "Un estornudo" }
    ],
    "explain": "Estas onomatopeyas imitan los sonidos diarios a nuestro alrededor."
  },
  {
    "id": "len4_36",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "¿Sabías que los ruidos del cuerpo también se pueden escribir como onomatopeyas?",
    "prompt": "¿Cuál onomatopeya imita a alguien durmiendo?",
    "options": ["Zzz...", "Glu, glu...", "Muac...", "Ouch..."],
    "correctAnswer": "Zzz...",
    "explain": "La letra Z repetida imita el sonido del ronquido o la respiración al dormir."
  },
  {
    "id": "len4_37",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "¡Splash! Se escuchó fuerte cuando la rana saltó al estanque.",
    "prompt": "¿Qué representa la onomatopeya 'splash'?",
    "options": ["Algo cayendo al agua", "Una ventana rompiéndose", "Una pelota rebotando", "Un aplauso"],
    "correctAnswer": "Algo cayendo al agua",
    "explain": "Splash imita el sonido del agua salpicando."
  },
  {
    "id": "len4_38",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "Mamá me dio un abrazo y se escuchó: ¡Muac!",
    "prompt": "¿Qué significa la onomatopeya 'muac'?",
    "options": ["Un beso", "Un mordisco", "Un susto", "Una sonrisa"],
    "correctAnswer": "Un beso",
    "explain": "La palabra muac es como se suele escribir el sonido de dar un beso."
  },
  {
    "id": "len4_39",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "Camilo bebía jugo de manzana rápido y se escuchaba: glu, glu, glu.",
    "prompt": "¿Qué acción describe la onomatopeya 'glu, glu, glu'?",
    "options": ["Tragar un líquido", "Gargarear agua", "Escupir agua", "Hervir el agua"],
    "correctAnswer": "Tragar un líquido",
    "explain": "Glu glu imita el sonido al pasar un líquido por la garganta."
  },
  {
    "id": "len4_40",
    "subject": "lenguaje",
    "station": "Los Sonidos de las Palabras",
    "type": "multiple",
    "context": "Estábamos muy asustados en el bosque, y de repente se escuchó un fuerte ¡Grrrrr! escondido tras los árboles.",
    "prompt": "¿De qué podría ser esa onomatopeya?",
    "options": ["Un animal salvaje gruñendo", "Un pájaro cantando", "Un ratón corriendo", "Una puerta abriéndose"],
    "correctAnswer": "Un animal salvaje gruñendo",
    "explain": "Grrr imita el gruñido de animales furiosos o salvajes."
  }
];

const content = 'module.exports = ' + JSON.stringify(questions, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, 'questions', 'lenguaje_4.js'), content, 'utf8');
console.log('Created lenguaje_4.js con éxito');
