// DOM ELEMENTS
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What is the capital of france?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
    ],
  },

  {
    question: "Which animal can sleep for around 22 hours a day?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Koala", correct: true },
      { text: "Sloth", correct: false },
      { text: "Panda", correct: false },
    ],
  },

  {
    question:
      "What is the only planet in our solar system that rotates on its side?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: true },
      { text: "Mars", correct: false },
    ],
  },

  {
    question: "Which fruit floats in water because about 25% of it is air?",
    answers: [
      { text: "Orange", correct: false },
      { text: "Apple", correct: true },
      { text: "Mango", correct: false },
      { text: "Pear", correct: false },
    ],
  },

  {
    question: "Which country invented paper?",
    answers: [
      { text: "Egypt", correct: false },
      { text: "Greece", correct: false },
      { text: "China", correct: true },
      { text: "India", correct: false },
    ],
  },

  {
    question: "Which is the largest organ in the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
      { text: "Heart", correct: false },
      { text: "Skin", correct: true },
    ],
  },

  {
    question: "Which famous tower was originally intended to be temporary?",
    answers: [
      { text: "Big Ben", correct: false },
      { text: "Eiffel Tower", correct: true },
      { text: "Leaning Tower of Pisa", correct: false },
      { text: "Tokyo Tower", correct: false },
    ],
  },

  {
    question: "Which sea creature has three hearts?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Dolphin", correct: false },
      { text: "Octopus", correct: true },
      { text: "Whale", correct: false },
    ],
  },

  {
    question: "Which country has the most time zones?",
    answers: [
      { text: "Russia", correct: false },
      { text: "United States", correct: false },
      { text: "France", correct: true },
      { text: "Australia", correct: false },
    ],
  },

  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Leopard", correct: false },
      { text: "Antelope", correct: false },
    ],
  },

  {
    question: "Which language has the most native speakers worldwide?",
    answers: [
      { text: "English", correct: false },
      { text: "Hindi", correct: false },
      { text: "Spanish", correct: false },
      { text: "Mandarin Chinese", correct: true },
    ],
  },

  {
    question: "Which element has the chemical symbol 'Au'?",
    answers: [
      { text: "Silver", correct: false },
      { text: "Gold", correct: true },
      { text: "Aluminum", correct: false },
      { text: "Argon", correct: false },
    ],
  },

  {
    question: "What is the world's largest desert?",
    answers: [
      { text: "Sahara Desert", correct: false },
      { text: "Gobi Desert", correct: false },
      { text: "Arabian Desert", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },

  {
    question: "Which bird is famous for being unable to fly?",
    answers: [
      { text: "Eagle", correct: false },
      { text: "Penguin", correct: true },
      { text: "Falcon", correct: false },
      { text: "Owl", correct: false },
    ],
  },

  {
    question: "Which country has won the most FIFA World Cup titles (Men's)?",
    answers: [
      { text: "Germany", correct: false },
      { text: "Italy", correct: false },
      { text: "Argentina", correct: false },
      { text: "Brazil", correct: true },
    ],
  },

  {
    question: "Which company created the video game character Mario?",
    answers: [
      { text: "Sony", correct: false },
      { text: "Sega", correct: false },
      { text: "Nintendo", correct: true },
      { text: "Capcom", correct: false },
    ],
  },

  {
    question:
      "Which actor has played Iron Man in the Marvel Cinematic Universe?",
    answers: [
      { text: "Chris Evans", correct: false },
      { text: "Tom Hiddleston", correct: false },
      { text: "Samuel L. Jackson", correct: false },
      { text: "Robert Downey Jr.", correct: true },
    ],
  },

  {
    question: "Which country is home to kangaroos?",
    answers: [
      { text: "South Africa", correct: false },
      { text: "Australia", correct: true },
      { text: "Brazil", correct: false },
      { text: "New Zealand", correct: false },
    ],
  },

  {
    question: "Which is the smallest bone in the human body?",
    answers: [
      { text: "Femur", correct: false },
      { text: "Tibia", correct: false },
      { text: "Stapes", correct: true },
      { text: "Radius", correct: false },
    ],
  },

  {
    question: "Which sport uses the terms 'love,' 'deuce,' and 'ace'",
    answers: [
      { text: "Cricket", correct: false },
      { text: "Badminton", correct: false },
      { text: "Tennis", correct: true },
      { text: "Table Tennis", correct: false },
    ],
  },
];

// QUIZ STATS VARS
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

const startQuiz = () => {
  //   RESET VARS
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
};

startButton.addEventListener("click", startQuiz);

const showQuestion = () => {
  // RESET STATE
  answerDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;

  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");

    btn.dataset.correct = answer.correct;

    btn.addEventListener("click", selectAnswer);

    answersContainer.appendChild(btn);
  });
};

const selectAnswer = (e) => {
  // Optimization Check
  if (answerDisabled) return;

  answerDisabled = true;

  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    } else if (btn === selectBtn) {
      btn.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
};

const showResults = () => {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
};

const restartQuiz = () => {
  resultScreen.classList.remove("active");

  startQuiz();
};

restartButton.addEventListener("click", restartQuiz);
