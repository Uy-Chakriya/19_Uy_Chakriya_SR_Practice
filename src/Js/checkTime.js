let timer;
let timeInput = document.getElementById("timeBtn");
let btnStop = document.getElementById("stopBtn");
let btnReset = document.getElementById("resetBtn");

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        const timeBtn = new Date();
        let displayTime =
            String(timeBtn.getHours()).padStart(2, "0") + ":" +
            String(timeBtn.getMinutes()).padStart(2, "0") + ":" +
            String(timeBtn.getSeconds()).padStart(2, "0");
        timeInput.innerHTML = displayTime;
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    console.log("Timer stopped");
}

function resetTimer() {
    clearInterval(timer);
    timeInput.innerHTML = "00:00:00";
    console.log("Timer reset");
}
