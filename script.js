// quiz questions and answer options
const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Madrid", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which is not a fruit?",
    options: ["Berries", "Potatoe", "Melon", "Banana"],
    answer: "Potatoe"
  },
  {
    question: "Which is not a rainbow color?",
    options: ["Violet", "Indigo", "Purple", "Pink"],
    answer: "Pink"
  },
  {
    question: "Who is the current president of Kenya?",
    options: ["Raila", "Ruto", "Uhuru", "Kalonzo"],
    answer: "Ruto"
  },
  {
    question: "What is the largest country in the world?",
    options: ["USA", "China", "Russia", "India"],
    answer: "Russia"
  },
  {
    question: "What is the currency of Kenya?",
    options: ["Shillings", "Dollar", "Euro", "Pound"],
    answer: "Shillings"
  }
];

// Get HTML elements
const questionEl = document.getElementById("question");
const answerOptionsEl = document.getElementById("answer-options");
const scoreEl = document.getElementById("score");
const finalScoreEl = document.getElementById("final-score");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0; // Keep track of the current question
let score = 0; 

// Display the current question and answer options
function displayQuestion() {
  const currentQuestion = quiz[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  answerOptionsEl.innerHTML = ""; // Clear the answer options
  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.type = "radio";
    input.name = "answer";
    input.value = option;
    label.textContent = option;
    li.appendChild(input);
    li.appendChild(label);
    answerOptionsEl.appendChild(li);
  });
}

// Check the user's answer and update the score
function checkAnswer() {
  const selectedOption = document.querySelector("input[name='answer']:checked");
  if (!selectedOption) return; // Don't do anything if no option is selected
  const selectedAnswer = selectedOption.value;
  const currentQuestion = quiz[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.answer) {
    score++;
  } else {
    score--;
  }
  scoreEl.textContent = score; // Updates the score on the page
  selectedOption.checked = false; // Clear the selected option
}

// Display the final score and hide the question and answer options
function displayFinalScore() {
  document.getElementById("question-section").style.display = "none";
  document.getElementById("score-section").style.display = "none";
  finalScoreEl.textContent = score;
  document.getElementById("final-score-section").style.display = "block";
}

// Restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreEl.textContent = score;
  document.getElementById("final-score-section").style.display = "none";
  document.getElementById("question-section").style.display = "block";
  document.getElementById("score-section").style.display = "flex";
  displayQuestion();
}

// Event listeners
submitBtn.addEventListener("click", () => {
  checkAnswer();
  currentQuestionIndex++;
  if (currentQuestionIndex === quiz.length) {
    displayFinalScore();
  } else {
    displayQuestion();
  }
});

restartBtn.addEventListener("click", () => {
  restartQuiz();
});

// Display the first question
displayQuestion();
  