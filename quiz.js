// timer variable
var timeEl = document.querySelector(".timer-out");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("question")
const answerButtons = document.getElementById("answer-btns");


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", function() {
    startGame()
    setTimer()
});

//timer elements
var secondsLeft = 100;

//timer function
function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "time left: " + secondsLeft;

        //stop when seconds reach 0
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}




function startGame(){
    startButton.classList.add('hide');
    /* shuffles questions */
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add("btn-style", "btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}



function selectAnswer(e) {

}


const questions = [
    {
        question: 'What is something that is a question?',
        answers: [
            {text: 'correct answer', correct: true},
            {text: 'Wrong answer', correct: false},
            {text: 'Wrong answer', correct: false},
            {text: 'Wrong answer', correct: false},

        ]
    }
]

// remove 10 seconds on false test
//var truthy = confirm("okay for true, cancel for false");
/*
if (truthy) {
    console.log("true");
} else {
    console.log("wrong! -10 sec");
    secondsLeft = secondsLeft - 10; 
}
*/