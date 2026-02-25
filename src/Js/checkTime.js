let timer;
let timeInput = document.getElementById("timeBtn");
let btnStop = document.getElementById("stopBtn");
let btnReset = document.getElementById("resetBtn");

function startTimer() {
    // prevent multiple intervals
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


// let timer;
//     let timeInput = document.getElementById("timeBtn");
//     let btnStop = document.getElementById("stopBtn");
//     let btnReset = document.getElementById("resetBtn");

//     function startTimer(){
//     const timeBtn = new Date();
//     console.log(timeBtn);
//      let displayTime = timeBtn.getHours() + ":" + timeBtn.getMinutes() + ":" + timeBtn.getSeconds();
//      console.log(displayTime);
//         timer = setInterval((e)=> { 
//             e.Date;
//             timeInput.innerHTML = displayTime; 
//         } ,1000) 
//     }

//     function stopTimer(){
//         clearInterval(timer);
//         console.log(timer);
//     }

//     function resesetTimer(){
//         clearInterval(timer);
//         timeInput.innerHTML = "00:00:00";
//         console.log("Timer reset");
//         console.log(timer); 
//     }