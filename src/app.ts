//Variables
const minuteSpan: HTMLElement | null = document.getElementById("minute");
const secondsSpan = document.getElementById("second");
const milisecondsSpan = document.getElementById("milisecond");

const startButton = document.getElementById("start_button");
const pauseButton = document.getElementById("pause_button");
const stopButton = document.getElementById("stop_button");

let minute: number = 0;
let second: number = 0;
let milisecond: number = 0;
let isPaused: boolean = false;
let timerOnGoing: boolean = false;
let intervali: any = undefined;

//Buttons listeners 
startButton?.addEventListener('click', (e) => {

    if(isPaused == true){

        isPaused = false;
        timerOnGoing = true;

    } else {

        if(timerOnGoing == false){
            timerOnGoing = true;
            startTimer();
        }

    }

});

pauseButton?.addEventListener('click', (e) => {

    e.preventDefault();
    isPaused = true;

});

stopButton?.addEventListener('click', (e) => {
    e.preventDefault();
    stopTimer();
});

//Methods for the stopwatch
function startTimer(){

    intervali = setInterval(() => {

        if(!isPaused){

            milisecond += 1;

            if(milisecond == 99){

                milisecond = 0;
                second += 1;
            
            } else if(second == 60){

                second = 0;
                minute += 1;

            }

            appendNumbers();

        } 

    }, 10)

}

function stopTimer(){

    clearInterval(intervali);
    minute = 0;
    second = 0;
    milisecond = 0;
    timerOnGoing = false;
    isPaused = false;
    appendNumbers();
}

function appendNumbers(){

    if(milisecondsSpan != null){

        if(milisecond < 10){
            milisecondsSpan.innerHTML = "0" + milisecond
        } else {
            milisecondsSpan.innerHTML = milisecond.toString();
        }
        
    }

    if(secondsSpan != null){

        if(second < 10){
            secondsSpan.innerHTML = "0" + second
        } else {
            secondsSpan.innerHTML = second.toString();
        }
        
    }

    if(minuteSpan != null){

        if(minute < 10){
            minuteSpan.innerHTML = "0" + minute
        } else {
            minuteSpan.innerHTML = minute.toString();
        }
        
    }

}
