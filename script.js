
window.addEventListener("load", function () {
    console.log("page is fully loaded");

    let startStopBtn = document.getElementById('startStopBtn');
    let resetBtn = document.getElementById('resetBtn');

    resetBtn.addEventListener('click', reset);
    let id = 0;
    startStopBtn.addEventListener('click', function () {
        if (startStopBtn.innerHTML == 'Start') {
            id = setInterval(startTimer, 1000);
            startStopBtn.innerHTML = 'Stop';
        } else {
            stopTimer(id);
            startStopBtn.innerHTML = 'Start';
        }
    });

});

let hour = 0;
let minute = 0;
let seconds = 0;
function startTimer() {

    seconds += 1;
    if (seconds == 60) {
        seconds = 0;
        minute += 1;
    }
    if (minute == 60) {
        minute = 0;
        hour += 1;
    }

    let secondsElem = document.querySelector('.seconds')
    let minuteElem = document.querySelector('.minute')
    let hourElem = document.querySelector('.hour')

    if (seconds <= 9) {
        secondsElem.innerHTML = '0' + seconds;
    }
    else {
        secondsElem.innerHTML = seconds;
    }


    if (minute <= 9) {
        minuteElem.innerHTML = '0' + minute;
    }
    else {
        minuteElem.innerHTML = minute;
    }

    if (hour <= 9) {
        hourElem.innerHTML = '0' + hour;
    }
    else {
        hourElem.innerHTML = hour;
    }
}
function stopTimer(id) {

    clearInterval(id);
}


function reset() {
    hour = minute = seconds = 0;
    document.querySelector('.hour').innerHTML = '00';
    document.querySelector('.minute').innerHTML = '00';
    document.querySelector('.seconds').innerHTML = '00';

}


