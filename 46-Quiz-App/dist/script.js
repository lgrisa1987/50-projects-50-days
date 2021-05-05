"use strict";

//Wait until the fonts load
WebFont.load({
  google: {
    families: ["Muli"]
  },
  active: function active() {
    document.body.classList.remove("hide");
  }
});

var select = function select(el) {
    return document.querySelector(el);
  },
  selectAll = function selectAll(el) {
    return [].slice.call(document.querySelectorAll(el));
  },
  quizData = [{
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d"
  }, {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b"
  }, {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a"
  }, {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b"
  }],
  quiz = select("#quiz"),
  answerEls = selectAll(".answer"),
  questionEl = select("#question"),
  aText = select("#a_text"),
  bText = select("#b_text"),
  cText = select("#c_text"),
  dText = select("#d_text"),
  submitBtn = select("#submit"),
  deselectAnswers = function deselectAnswers() {
    return answerEls.forEach(function (answer) {
      return answer.checked = false;
    });
  },
  getSelected = function getSelected() {
    return answerEls.reduce(function (acc, answer) {
      if (answer.checked) return answer.id;
      else return acc;
    }, 0);
  };

var currentQuiz = 0,
  score = 0;

var loadQuiz = function loadQuiz() {
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz],
    /* answers = Object.values(currentQuizData).slice(1, 5); */
    answers = [];
  for (var quiz in currentQuizData) {
    (quiz !== "question" && quiz !== "correct") && answers.push(currentQuizData[quiz]);
  }
  console.log(answers);
  questionEl.textContent = currentQuizData.question;
  answerEls.forEach(function (answer, index) {
    return answer.nextElementSibling.textContent = answers[index];
  });
};

loadQuiz();
submitBtn.addEventListener("click", function () {
  var answer = getSelected();
  if (answer) answer === quizData[currentQuiz].correct && score++;
  else {
    alert("Choose an option to continue");
    return;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) loadQuiz();
  else quiz.innerHTML = "<h2>You answered ".concat(score, "/").concat(quizData.length, " questions correctly</h2><button onclick=\"location.reload();\">Reload</button>");
});