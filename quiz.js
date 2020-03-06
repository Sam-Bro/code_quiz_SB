// timer variable
var timeEl = document.querySelector(".timer-out");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");

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
    console.log('started');
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide')
}

function setNextQuestion() {

}

function showQuestion(quesiton) {
    
}

function selectAnswer() {

}




// remove 10 seconds on false test
//var truthy = confirm("okay for true, cancel for false");

if (truthy) {
    console.log("true");
} else {
    console.log("wrong! -10 sec");
    secondsLeft = secondsLeft - 10; 
}