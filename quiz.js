// timer variable
var timeEl = document.querySelector(".timer-out");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const ansResult = document.getElementById("result");

var timerInterval;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", function() {
    startGame()
    setTimer()
});
nextButton.addEventListener('click', function() {
    currentQuestionIndex++
    setNextQuestion()
})
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
    ansResult.classList.add('hide')
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



function selectAnswer(e, timerInterval) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    //create an array from answer buttons
    Array.from(answerButtons.children).forEach(function(button) {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
    finishButton.classList.remove('hide')
    clearInterval(timerInterval);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
        ansResult.innerText = ("Correct!")
        ansResult.classList.remove("hide")
    } else {
        element.classList.add("wrong")
        ansResult.innerText = ("Incorrect!")
        secondsLeft = secondsLeft - 2.5; 
    }
}

function clearStatusClass(element) {
        element.classList.remove("correct")
        element.classList.remove("wrong")
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
    },
    {
        question: 'What is something that is a question?',
        answers: [
            {text: 'correct answer', correct: true},
            {text: 'Wrong answer', correct: false},
            {text: 'Wrong answer', correct: false},
            {text: 'Wrong answer', correct: false},

        ]
    },
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