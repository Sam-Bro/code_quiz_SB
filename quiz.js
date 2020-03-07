// timer variable
var timeEl = document.querySelector(".timer-out");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const finishButton = document.getElementById("finish-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const ansResult = document.getElementById("result");
const highscoreBtn = document.getElementById("score-btn");

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

highscoreBtn.addEventListener('click', scoreClick)

function scoreClick() {
    document.getElementById('scores').classList.remove('hide');
    startButton.classList.add('hide');
}

//timer elements
var secondsLeft = 10;

//timer function

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "time left: " + secondsLeft;

        //stop when seconds reach 0
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('finText').classList.remove('hide');
            questionContainerEl.classList.add('hide');
            ansResult.classList.add('hide');
            nextButton.classList.add('hide');
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
        return;
    } else {
        element.classList.add("wrong")
        ansResult.innerText = ("Incorrect!")
        secondsLeft = secondsLeft - 2; 
    }
}

function clearStatusClass(element) {
        element.classList.remove("correct")
        element.classList.remove("wrong")
}


/* questions array */
const questions = [
    {
        question: 'A loop that never ends is referred to as a(n) _________.',
        answers: [
            {text: 'While loop', correct: false},
            {text: 'Infinite loop', correct: true},
            {text: 'Recursive loop', correct: false},
            {text: 'For loop', correct: false},

        ]
    },
    {
        question: 'What is the process of finding errors and fixing them within a program?',
        answers: [
            {text: 'Debugging', correct: true},
            {text: 'Executing', correct: false},
            {text: 'Scanning', correct: false},
            {text: 'Compiling', correct: false},

        ]
    },
    {
        question: 'Jim needs to execute a section of code ten times within a program. Which statement should he use?',
        answers: [
            {text: 'if-Else', correct: false},
            {text: 'for', correct: true},
            {text: 'while', correct: false},
            {text: 'if', correct: false},

        ]
    },
    {
        question: 'In JavaScript, what element is used to store and manipulate text?',
        answers: [
            {text: 'Variables', correct: false},
            {text: 'Boolean', correct: false},
            {text: 'Arrays', correct: true},
            {text: 'Strings', correct: false},

        ]
    },
    {
        question: 'What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?',
        answers: [
            {text: 'While loop', correct: true},
            {text: 'Infinite loop', correct: false},
            {text: 'Recursive loop', correct: false},
            {text: 'For loop', correct: false},
        ]
    },
    {
        question: 'What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?',
        answers: [
            {text: 'Cascading', correct: false},
            {text: 'Reactive', correct: false},
            {text: 'Adjusting', correct: false},
            {text: 'Responsive', correct: true},

        ]
    }
    
]
