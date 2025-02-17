export const questions = [
  // assuming that answer is answered correctly by the user, so that
  // it can be set to wrong if the user does eventually chose a wrong one
  {
    questionIndex: 0,
    question: "What is the capital of France?",
    answer: "Paris",
    difficulty: 2,
    timeToAnswer: 2 * 2 * 1000,
    options: ["Paris", "London", "Rome", "Berlin"],
    correctIndex: 0,
    answeredCorrectly: true,
  },
  {
    questionIndex: 1,
    question: "How many continents are there on Earth?",
    answer: "Seven",
    difficulty: 1,
    timeToAnswer: 1 * 2 * 1000,
    options: ["Five", "Six", "Seven", "Eight"],
    correctIndex: 2,
    answeredCorrectly: true,
  },
  {
    questionIndex: 2,
    question: 'Who wrote "To Kill a Mockingbird"?',
    answer: "Harper Lee",
    difficulty: 3,
    timeToAnswer: 3 * 2 * 1000,
    options: ["J.K. Rowling", "Mark Twain", "Harper Lee", "Ernest Hemingway"],
    correctIndex: 2,
    answeredCorrectly: true,
  },
  {
    questionIndex: 3,
    question: "What is the boiling point of water in Celsius?",
    answer: "100°C",
    difficulty: 2,
    timeToAnswer: 2 * 2 * 1000,
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctIndex: 1,
    answeredCorrectly: true,
  },
  {
    questionIndex: 4,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    difficulty: 1,
    timeToAnswer: 1 * 2 * 1000,
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctIndex: 1,
    answeredCorrectly: true,
  },
  {
    questionIndex: 5,
    question: "What is the square root of 144?",
    answer: "12",
    difficulty: 3,
    timeToAnswer: 3 * 2 * 1000,
    options: ["10", "11", "12", "13"],
    correctIndex: 2,
    answeredCorrectly: true,
  },
  {
    questionIndex: 6,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    difficulty: 4,
    timeToAnswer: 4 * 2 * 1000,
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctIndex: 2,
    answeredCorrectly: true,
  },
  {
    questionIndex: 7,
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    difficulty: 2,
    timeToAnswer: 2 * 2 * 1000,
    options: ["Ag", "Au", "Pb", "Fe"],
    correctIndex: 1,
    answeredCorrectly: true,
  },
  {
    questionIndex: 8,
    question: "What year did the Titanic sink?",
    answer: "1912",
    difficulty: 5,
    timeToAnswer: 5 * 2 * 1000,
    options: ["1905", "1912", "1923", "1931"],
    correctIndex: 1,
    answeredCorrectly: true,
  },
  {
    questionIndex: 9,
    question: "Which element has the atomic number 1?",
    answer: "Hydrogen",
    difficulty: 1,
    timeToAnswer: 1 * 2 * 1000,
    options: ["Oxygen", "Helium", "Hydrogen", "Carbon"],
    correctIndex: 2,
    answeredCorrectly: true,
  },
];

const totalQuizTimeSeconds =
  questions.reduce(function (accumulator, quizObject) {
    return accumulator + quizObject.timeToAnswer;
  }, 0) / 1000;

export const totalQuizTimeObject = {
  minutes: Math.floor(totalQuizTimeSeconds / 60),
  seconds: totalQuizTimeSeconds - Math.floor(totalQuizTimeSeconds / 60) * 60,
};
