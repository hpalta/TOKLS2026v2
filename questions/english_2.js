module.exports = [
  {
    id: "eng_21",
    subject: "english",
    station: "Food",
    type: "label",
    context: "Let's check what we have in the kitchen.",
    prompt: "Label the foods.",
    svg: `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border-radius:10px;">
      <!-- Milk box -->
      <rect x="30" y="20" width="30" height="60" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2"/>
      <polygon points="30,20 45,5 60,20" fill="#3498db"/>
      <text x="35" y="50" font-size="10" fill="#333">MILK</text>
      <!-- Mango -->
      <path d="M 130 50 Q 150 20 170 50 Q 150 80 130 50" fill="#f39c12"/>
      <!-- Cheese -->
      <polygon points="230,70 270,70 250,30" fill="#f1c40f"/>
      <circle cx="250" cy="60" r="3" fill="#d4ac0d"/>
      <circle cx="260" cy="55" r="4" fill="#d4ac0d"/>
      <circle cx="245" cy="45" r="3" fill="#d4ac0d"/>
    </svg>`,
    labels: [
      { word: "Milk", x: 15, y: 50 },
      { word: "Mango", x: 50, y: 50 },
      { word: "Cheese", x: 83, y: 50 }
    ],
    explain: "Milk is white and comes in a carton, mango is an orange/yellow fruit, and cheese has holes."
  },
  {
    id: "eng_22",
    subject: "english",
    station: "Routine",
    type: "multiple",
    context: "It's morning and the alarm clock is ringing.",
    prompt: "What do you do?",
    options: ["I eat dinner.", "I get up.", "I go to bed."],
    correctAnswer: "I get up.",
    explain: "When the alarm rings in the morning, you 'get up' to start your day!"
  },
  {
    id: "eng_23",
    subject: "english",
    station: "Grammar",
    type: "match",
    context: null,
    prompt: "Match 'some' or 'any' with the correct sentence.",
    pairs: [
      { id: "g1", left: "I have ______ chicken.", right: "some (affirmative)" },
      { id: "g2", left: "I don't have ______ juice.", right: "any (negative)" }
    ],
    explain: "We use 'some' for affirmative sentences and 'any' for negative sentences."
  },
  {
    id: "eng_24",
    subject: "english",
    station: "Time",
    type: "true_false",
    context: null,
    prompt: "'What time do you eat lunch?' can be answered with 'Yes, I do.'",
    options: ["True", "False"],
    correctAnswer: "False",
    explain: "Questions starting with 'What time...' must be answered with a time, like 'At one o'clock', not Yes/No."
  },
  {
    id: "eng_25",
    subject: "english",
    station: "Suggestions",
    type: "order_words",
    context: "Your mom asks: 'Do you want to eat some grapes?'",
    prompt: "Order the words to make the answer:",
    words: ["Sure,", "that", "sounds", "like", "fun!"],
    explain: "Sure, that sounds like fun!"
  },
  {
    id: "eng_26",
    subject: "english",
    station: "Food",
    type: "multiple",
    context: null,
    prompt: "Which of these foods is yellow and made by cows?",
    options: ["Beans", "Cheese", "Chicken"],
    correctAnswer: "Cheese",
    explain: "Cows give us milk, and we use milk to make cheese!"
  },
  {
    id: "eng_27",
    subject: "english",
    station: "Routine",
    type: "true_false",
    context: "After you get up, you stay in your pajamas all day.",
    prompt: "Is this correct? 'I get dressed.'",
    options: ["True", "False"],
    correctAnswer: "True",
    explain: "You 'get dressed' when you take off your pajamas and put on your clothes."
  },
  {
    id: "eng_28",
    subject: "english",
    station: "Time",
    type: "multiple",
    context: "The short hand points to 4 and the long hand points to 12.",
    prompt: "What time is it?",
    options: ["It's twelve o'clock.", "It's four o'clock.", "It's time to sleep."],
    correctAnswer: "It's four o'clock.",
    explain: "The short hand tells the hour. If it's on 4, it's four o'clock."
  },
  {
    id: "eng_29",
    subject: "english",
    station: "Grammar",
    type: "multiple",
    context: "Tom wants to say he doesn't have cheese.",
    prompt: "Choose the correct sentence:",
    options: ["I don't have some cheese.", "I have any cheese.", "I don't have any cheese."],
    correctAnswer: "I don't have any cheese.",
    explain: "Negative sentences use 'don't have' + 'any'."
  },
  {
    id: "eng_30",
    subject: "english",
    station: "Food",
    type: "match",
    context: null,
    prompt: "Match the food to its color.",
    pairs: [
      { id: "c1", left: "Grapes", right: "Green or Purple" },
      { id: "c2", left: "Milk", right: "White" },
      { id: "c3", left: "Mango", right: "Yellow/Orange" }
    ],
    explain: "Grapes are green/purple, milk is white, and mangoes are yellow/orange."
  },
  {
    id: "eng_31",
    subject: "english",
    station: "Suggestions",
    type: "multiple",
    context: "You are very tired and your friend says 'Let's run!'",
    prompt: "How do you say no politely?",
    options: ["Yes!", "Not really.", "Sure, that sounds like fun!"],
    correctAnswer: "Not really.",
    explain: "'Not really' is a good way to decline a suggestion."
  },
  {
    id: "eng_32",
    subject: "english",
    station: "Routine",
    type: "multiple",
    context: "You have a lot of school work to finish.",
    prompt: "What routine action is this?",
    options: ["Do homework", "Get up", "Eat dinner"],
    correctAnswer: "Do homework",
    explain: "Doing assignments from school is called 'doing homework'."
  },
  {
    id: "eng_33",
    subject: "english",
    station: "Time",
    type: "true_false",
    context: null,
    prompt: "We use 'At' to talk about the time we do something (e.g., 'At nine o'clock').",
    options: ["True", "False"],
    correctAnswer: "True",
    explain: "Yes! 'What time do you get up?' -> 'AT seven o'clock.'"
  },
  {
    id: "eng_34",
    subject: "english",
    station: "Food",
    type: "order_words",
    context: "Think about your favorite food.",
    prompt: "Order the words to make the sentence:",
    words: ["I", "have", "some", "chicken", "and", "juice."],
    explain: "I have some chicken and juice."
  },
  {
    id: "eng_35",
    subject: "english",
    station: "Grammar",
    type: "true_false",
    context: null,
    prompt: "'I don't have some milk' is correct.",
    options: ["True", "False"],
    correctAnswer: "False",
    explain: "It's wrong! It should be 'I don't have ANY milk'."
  },
  {
    id: "eng_36",
    subject: "english",
    station: "Routine",
    type: "match",
    context: null,
    prompt: "Match the action.",
    pairs: [
      { id: "r4", left: "Get dressed", right: "Vestirse" },
      { id: "r5", left: "Do homework", right: "Hacer la tarea" },
      { id: "r6", left: "Take a bath", right: "Bañarse" }
    ],
    explain: "Get dressed = vestirse. Do homework = hacer tarea. Take a bath = bañarse."
  },
  {
    id: "eng_37",
    subject: "english",
    station: "Food",
    type: "multiple",
    context: "It is a fruit, it is green, and it is shaped like a bell.",
    prompt: "What is it?",
    options: ["A grape", "A pear", "A bean"],
    correctAnswer: "A pear",
    explain: "A pear is a green fruit with a bell shape."
  },
  {
    id: "eng_38",
    subject: "english",
    station: "Suggestions",
    type: "true_false",
    context: null,
    prompt: "'Do you want to play?' and 'Let's play!' mean exactly the same.",
    options: ["True", "False"],
    correctAnswer: "False",
    explain: "They are similar, but 'Do you want to...?' is a question, and 'Let's...' is a suggestion."
  },
  {
    id: "eng_39",
    subject: "english",
    station: "Time",
    type: "multiple",
    context: null,
    prompt: "How do you write '11:00' in words?",
    options: ["Twelve o'clock", "Eleven o'clock", "Seven o'clock"],
    correctAnswer: "Eleven o'clock",
    explain: "11:00 is 'Eleven o'clock'."
  },
  {
    id: "eng_40",
    subject: "english",
    station: "Grammar",
    type: "match",
    context: null,
    prompt: "Complete the sentences.",
    pairs: [
      { id: "g3", left: "I have...", right: "...some fries." },
      { id: "g4", left: "I don't have...", right: "...any fries." }
    ],
    explain: "Affirmative = some. Negative = any."
  }
];
