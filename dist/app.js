"use strict";
const minuteSpan = document.getElementById("minute");
const secondsSpan = document.getElementById("second");
const milisecondsSpan = document.getElementById("milisecond");
const startButton = document.getElementById("start_button");
const pauseButton = document.getElementById("pause_button");
const stopButton = document.getElementById("stop_button");
let minute = 0;
let second = 0;
let milisecond = 0;
let isPaused = false;
let timerOnGoing = false;
let intervali = undefined;
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', (e) => {
    if (isPaused == true) {
        isPaused = false;
        timerOnGoing = true;
    }
    else {
        if (timerOnGoing == false) {
            timerOnGoing = true;
            startTimer();
        }
    }
});
pauseButton === null || pauseButton === void 0 ? void 0 : pauseButton.addEventListener('click', (e) => {
    e.preventDefault();
    isPaused = true;
});
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', (e) => {
    e.preventDefault();
    stopTimer();
});
function startTimer() {
    intervali = setInterval(() => {
        if (!isPaused) {
            milisecond += 1;
            if (milisecond == 99) {
                milisecond = 0;
                second += 1;
            }
            else if (second == 60) {
                second = 0;
                minute += 1;
            }
            appendNumbers();
        }
    }, 10);
}
function stopTimer() {
    clearInterval(intervali);
    minute = 0;
    second = 0;
    milisecond = 0;
    timerOnGoing = false;
    isPaused = false;
    appendNumbers();
}
function appendNumbers() {
    if (milisecondsSpan != null) {
        if (milisecond < 10) {
            milisecondsSpan.innerHTML = "0" + milisecond;
        }
        else {
            milisecondsSpan.innerHTML = milisecond.toString();
        }
    }
    if (secondsSpan != null) {
        if (second < 10) {
            secondsSpan.innerHTML = "0" + second;
        }
        else {
            secondsSpan.innerHTML = second.toString();
        }
    }
    if (minuteSpan != null) {
        if (minute < 10) {
            minuteSpan.innerHTML = "0" + minute;
        }
        else {
            minuteSpan.innerHTML = minute.toString();
        }
    }
}
//# sourceMappingURL=app.js.map