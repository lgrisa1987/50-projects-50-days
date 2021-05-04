 //Wait until the fonts load
 WebFont.load({
     google: {
         families: [
             "Muli"
         ]
     },
     active: function () {
         document.body.classList.remove("hide");
     }
 });


 const select = el => (document.querySelector(el)),
     selectAll = el => [].slice.call(document.querySelectorAll(el)),
     quizData = [{
             question: "Which language runs in a web browser?",
             a: "Java",
             b: "C",
             c: "Python",
             d: "JavaScript",
             correct: "d",
         },
         {
             question: "What does CSS stand for?",
             a: "Central Style Sheets",
             b: "Cascading Style Sheets",
             c: "Cascading Simple Sheets",
             d: "Cars SUVs Sailboats",
             correct: "b",
         },
         {
             question: "What does HTML stand for?",
             a: "Hypertext Markup Language",
             b: "Hypertext Markdown Language",
             c: "Hyperloop Machine Language",
             d: "Helicopters Terminals Motorboats Lamborginis",
             correct: "a",
         },
         {
             question: "What year was JavaScript launched?",
             a: "1996",
             b: "1995",
             c: "1994",
             d: "none of the above",
             correct: "b",
         },
     ],
     quiz = select("#quiz"),
     answerEls = selectAll(".answer"),
     questionEl = select("#question"),
     aText = select("#a_text"),
     bText = select("#b_text"),
     cText = select("#c_text"),
     dText = select("#d_text"),
     submitBtn = select("#submit"),
     deselectAnswers = () => answerEls.forEach(answer => answer.checked = false),
     getSelected = () => {
         return answerEls.reduce((acc, answer) => {
             if (answer.checked) return answer.id;
             else return acc;
         }, 0);
     };
 let currentQuiz = 0,
     score = 0;
 const loadQuiz = () => {
     deselectAnswers();
     const currentQuizData = quizData[currentQuiz],
         answers = Object.values(currentQuizData).slice(1, 5);
     questionEl.textContent = currentQuizData.question;
     answerEls.forEach((answer, index) => answer.nextElementSibling.textContent = answers[index]);
 }

 loadQuiz();

 submitBtn.addEventListener("click", () => {
     const answer = getSelected();
     if (answer) answer === quizData[currentQuiz].correct && score++;
     else {
         alert("Choose an option to continue");
         return;
     }
     currentQuiz++;

     if (currentQuiz < quizData.length) loadQuiz();
     else quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2><button onclick="location.reload();">Reload</button>`
 })