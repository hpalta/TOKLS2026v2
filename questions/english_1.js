module.exports = [
  {
    id: "eng_1",
    subject: "english",
    station: "Time",
    type: "multiple",
    context: "Mateo wakes up very early for school.",
    prompt: "What time do you get up?",
    options: ["At six o'clock.", "It's a chicken.", "Yes, I do."],
    correctAnswer: "At six o'clock.",
    explain: "When someone asks 'What time...?', we answer with 'At... o'clock'."
  },
  {
    id: "eng_2",
    subject: "english",
    station: "Routine",
    type: "label",
    context: null,
    prompt: "Label the daily routines.",
    svg: `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border-radius:10px;">
      <!-- Bed -->
      <rect x="20" y="40" width="50" height="30" fill="#3498db" rx="5"/>
      <!-- Sun -->
      <circle cx="150" cy="30" r="15" fill="#f1c40f"/>
      <!-- Food plate -->
      <circle cx="250" cy="50" r="20" fill="#e0e0e0"/>
      <circle cx="250" cy="50" r="15" fill="#fff"/>
      <path d="M 240 50 Q 250 30 260 50" fill="#e74c3c"/>
    </svg>`,
    labels: [
      { word: "go to bed", x: 15, y: 50 },
      { word: "get up", x: 50, y: 30 },
      { word: "eat dinner", x: 83, y: 50 }
    ],
    explain: "You 'get up' when the sun rises, you 'eat dinner' on a plate, and 'go to bed' to sleep."
  },
  {
    id: "eng_3",
    subject: "english",
    station: "Food",
    type: "match",
    context: null,
    prompt: "Match the food with its correct category or color.",
    pairs: [
      { id: "f1", left: "Cheese", right: "Yellow and made from milk" },
      { id: "f2", left: "Grapes", right: "Small, green or purple fruit" },
      { id: "f3", left: "Chicken", right: "Meat from a bird" }
    ],
    explain: "Cheese is yellow, grapes are small fruits, and chicken is a type of meat."
  },
  {
    id: "eng_4",
    subject: "english",
    station: "Grammar",
    type: "true_false",
    context: "Laura opens her lunchbox. She has sandwiches but no fruit.",
    prompt: "Is this sentence correct? 'I don't have some grapes.'",
    options: ["True", "False"],
    correctAnswer: "False",
    explain: "For negative sentences (with 'don't'), we use 'any'. It should be: 'I don't have any grapes.'"
  },
  {
    id: "eng_5",
    subject: "english",
    station: "Food",
    type: "multiple",
    context: null,
    prompt: "Which of these is something you DRINK?",
    options: ["Fries", "Juice", "Sausage"],
    correctAnswer: "Juice",
    explain: "You eat fries and sausage, but you drink juice."
  },
  {
    id: "eng_6",
    subject: "english",
    station: "Time",
    type: "label",
    context: "It's time for lunch!",
    prompt: "Read the time and label the clocks.",
    svg: `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" style="background:#fff; border-radius:10px;">
      <!-- Clock 1: 12:00 -->
      <circle cx="50" cy="50" r="40" fill="white" stroke="#333" stroke-width="4"/>
      <line x1="50" y1="50" x2="50" y2="20" stroke="#333" stroke-width="4" stroke-linecap="round"/>
      <!-- Clock 2: 3:00 -->
      <circle cx="150" cy="50" r="40" fill="white" stroke="#333" stroke-width="4"/>
      <line x1="150" y1="50" x2="150" y2="20" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <line x1="150" y1="50" x2="175" y2="50" stroke="#333" stroke-width="4" stroke-linecap="round"/>
      <!-- Clock 3: 7:00 -->
      <circle cx="250" cy="50" r="40" fill="white" stroke="#333" stroke-width="4"/>
      <line x1="250" y1="50" x2="250" y2="20" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <line x1="250" y1="50" x2="235" y2="75" stroke="#333" stroke-width="4" stroke-linecap="round"/>
    </svg>`,
    labels: [
      { word: "Twelve o'clock", x: 16, y: 50 },
      { word: "Three o'clock", x: 50, y: 50 },
      { word: "Seven o'clock", x: 83, y: 50 }
    ],
    explain: "Look at the short hand to know the hour!"
  },
  {
    id: "eng_7",
    subject: "english",
    station: "Suggestions",
    type: "multiple",
    context: "Your friend says: 'Let's play soccer!' You really want to play.",
    prompt: "What is the best answer?",
    options: ["Not really.", "I have some cheese.", "Sure, that sounds like fun!"],
    correctAnswer: "Sure, that sounds like fun!",
    explain: "When someone suggests a good idea with 'Let's...', we can answer 'Sure, that sounds like fun!'"
  },
  {
    id: "eng_8",
    subject: "english",
    station: "Grammar",
    type: "true_false",
    context: null,
    prompt: "We use 'some' for affirmative sentences.",
    options: ["True", "False"],
    correctAnswer: "True",
    explain: "Yes! We say 'I have some apples' (affirmative) and 'I don't have any apples' (negative)."
  },
  {
    id: "eng_9",
    subject: "english",
    station: "Routine",
    type: "order_words",
    context: "Think about your afternoon after school.",
    prompt: "Order the words to make a sentence:",
    words: ["I", "do", "homework", "at", "five", "o'clock."],
    explain: "I do homework at five o'clock."
  },
  {
    id: "eng_10",
    subject: "english",
    station: "Food",
    type: "match",
    context: null,
    prompt: "Match the food words.",
    pairs: [
      { id: "e1", left: "Egg", right: "Huevo" },
      { id: "e2", left: "Beans", right: "Frijoles" },
      { id: "e3", left: "Pear", right: "Pera" }
    ],
    explain: "Egg = Huevo, Beans = Frijoles, Pear = Pera."
  },
  {
    id: "eng_11",
    subject: "english",
    station: "Time",
    type: "multiple",
    context: null,
    prompt: "How do you ask for the time?",
    options: ["What time do you?", "What time is it?", "Let's time!"],
    correctAnswer: "What time is it?",
    explain: "To ask the current time, we say: 'What time is it?'"
  },
  {
    id: "eng_12",
    subject: "english",
    station: "Routine",
    type: "true_false",
    context: "It is 8:00 at night. You are very tired.",
    prompt: "Is this sentence correct? 'It's time to get up.'",
    options: ["True", "False"],
    correctAnswer: "False",
    explain: "At night, when you are tired, it's time to 'go to bed', not 'get up'."
  },
  {
    id: "eng_13",
    subject: "english",
    station: "Grammar",
    type: "multiple",
    context: "You are looking in the fridge for milk.",
    prompt: "Complete the sentence: 'We don't have ______ milk.'",
    options: ["some", "any", "a"],
    correctAnswer: "any",
    explain: "Because the sentence is negative ('don't have'), we must use 'any'."
  },
  {
    id: "eng_14",
    subject: "english",
    station: "Suggestions",
    type: "true_false",
    context: "Your brother asks: 'Do you want to eat broccoli?' but you hate broccoli.",
    prompt: "You can answer: 'Not really.'",
    options: ["True", "False"],
    correctAnswer: "True",
    explain: "Yes, 'Not really' is a polite way to say no to a suggestion."
  },
  {
    id: "eng_15",
    subject: "english",
    station: "Food",
    type: "match",
    context: null,
    prompt: "Match the foods.",
    pairs: [
      { id: "f4", left: "Fries", right: "Papas fritas" },
      { id: "f5", left: "Sausage", right: "Salchicha" },
      { id: "f6", left: "Rice", right: "Arroz" }
    ],
    explain: "Fries are made of potatoes, a sausage is a type of meat, and rice are small white grains."
  },
  {
    id: "eng_16",
    subject: "english",
    station: "Routine",
    type: "multiple",
    context: "After playing in the mud, you are very dirty.",
    prompt: "What do you do next?",
    options: ["I eat breakfast.", "I take a bath.", "I get dressed."],
    correctAnswer: "I take a bath.",
    explain: "If you are dirty, you need to 'take a bath' to get clean."
  },
  {
    id: "eng_17",
    subject: "english",
    station: "Time",
    type: "order_words",
    context: "Look at a clock showing 10:00.",
    prompt: "Order the words to make the sentence:",
    words: ["It", "is", "ten", "o'clock."],
    explain: "It is ten o'clock."
  },
  {
    id: "eng_18",
    subject: "english",
    station: "Grammar",
    type: "multiple",
    context: null,
    prompt: "Complete the sentence: 'I have ______ cheese.'",
    options: ["any", "some"],
    correctAnswer: "some",
    explain: "This is an affirmative sentence, so we use 'some'."
  },
  {
    id: "eng_19",
    subject: "english",
    station: "Routine",
    type: "match",
    context: null,
    prompt: "Match the action with the time of day.",
    pairs: [
      { id: "r1", left: "Eat breakfast", right: "In the morning" },
      { id: "r2", left: "Eat lunch", right: "In the afternoon" },
      { id: "r3", left: "Go to bed", right: "At night" }
    ],
    explain: "Breakfast is the first meal, lunch is in the middle of the day, and you sleep at night."
  },
  {
    id: "eng_20",
    subject: "english",
    station: "Suggestions",
    type: "true_false",
    context: null,
    prompt: "'Let's take a bath!' is a suggestion.",
    options: ["True", "False"],
    correctAnswer: "True",
    explain: "Yes! Sentences starting with 'Let's...' (Let us) are used to make suggestions."
  }
];
