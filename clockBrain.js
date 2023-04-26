let breakIncrementBtn = document.getElementById('break-increment');
let breakDecrementBtn = document.getElementById('break-decrement');
let sessionIncrementBtn = document.getElementById('session-increment');
let sessionDecrementBtn = document.getElementById('session-decrement');
let startStopBtn = document.getElementById('start_stop');
let resetBtn = document.getElementById('reset');

let breakLength = document.getElementById('break-length');
let sessionLength = document.getElementById('session-length');
let timeLeft = document.getElementById('time-left');

let timer;
let timerStatus = "begin" // begin counting stoped

// the timer only starts counting when start/stop button is clicked
startStopBtn.addEventListener("click", () => {
    if (timerStatus === "begin" || timerStatus === "stopped") {
        // Start the timer
        console.log('start the timer');
        timerStatus = "counting";
        timer = setInterval(() => {
            // run the decrementTime each second when counting
            timeLeft.innerText = decrementTime(timeLeft.innerText);
        }, 1000);
    } else if (timerStatus === "counting") {
        // Stop the timer
        console.log('stop the timer');
        timerStatus = "stopped";
        clearInterval(timer);
    }
    
})

// the counting of the timer stops when the reset button is clicked
resetBtn.addEventListener("click", () => {
    console.log("reset button clicked");
    clearInterval(timer); 
}) 

function decrementTime (timeString) {
    let timeDisplay = timeString.split(":");
    let minuteDisplay = parseInt(timeDisplay[0]);
    let secondDisplay = parseInt(timeDisplay[1]);

    secondDisplay -= 1;

    if (secondDisplay === -1) {
        secondDisplay = 59;
        minuteDisplay -= 1;
    }

    if (secondDisplay <= 9) {
        secondDisplay = "0" + secondDisplay;
    }

    return minuteDisplay + ":" + secondDisplay;
}