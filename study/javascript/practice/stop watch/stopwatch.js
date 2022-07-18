let timeText = document.querySelector("#time");
let startButton = document.querySelector("#start-button");
let pauseButton = document.querySelector("#pause-button");
let resetButton = document.querySelector("#reset-button");

let hour = 0;
let minute = 0;
let second = 0;

let timer;

function timeFlow() {
    if(hour >= 24) {
        window.alert("overflow!");
    }
    else if(minute >= 60) {
        hour++;
        minute = 0;
    }
    if(second >= 60) {
        minute++;
        second = 0;
    }
    second++;
    timeText.textContent = formatTime();

    function formatTime() {
        let h = (hour < 10)? `0${hour}`: `${hour}`;
        let m = (minute < 10)? `0${minute}`: `${minute}`;
        let s = (second < 10)? `0${second}`: `${second}`;
        return `${h}:${m}:${s}`;
    }
}



startButton.onclick = () => {
    timer = setInterval(timeFlow, 1000);
}

pauseButton.onclick = () => {
    clearInterval(timer);
}

resetButton.onclick = () => {
    hour = 0;
    minute = 0;
    second = 0;
    timeText.textContent = formatTime();
}