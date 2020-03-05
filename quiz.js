// timer variable
var timeEl = document.querySelector(".timer-out");


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

setTimer();


// remove 10 seconds on false test
var truthy = confirm("okay for true, cancel for false");

if (truthy) {
    console.log("true");
} else {
    console.log("wrong! -10 sec");
    secondsLeft = secondsLeft - 10; 
}