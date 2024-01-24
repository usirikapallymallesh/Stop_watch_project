var timerInMs = 0;
var timer;
function pauseTimer() {
  document.querySelector("#start").disabled = false;
  clearInterval(timer);
}
function resetTimer() {
  document.getElementById("hours").innerText = "00";
  document.getElementById("minutes").innerText = "00";
  document.getElementById("seconds").innerText = "00";
  document.getElementById("millisecond").innerText = "00";
  document.querySelector("#start").disabled = false;
  clearInterval(timer);
  timerInMs = 0;
}
function lapTimer() {
  document.querySelector("#start").disabled = false;

  const hours = Math.floor(timerInMs / 3600000);
  const sec = Math.floor(timerInMs / 1000);
  const min = Math.floor(timerInMs / 60000);
  const ms = (timerInMs % 1000) / 10;

  document.getElementById("hours").innerText =
    hours < 10 ? "0" + (hours % 60) : hours % 60;
  document.getElementById("minutes").innerText =
    min < 10 ? "0" + (min % 60) : min % 60;
  document.getElementById("seconds").innerText =
    sec < 10 ? "0" + (sec % 60) : sec % 60;
  document.getElementById("millisecond").innerText = ms;

  let output = document.querySelector(".scoreContainer");
  let div = document.createElement("div");
  let hoursLap = document.createElement("p");
  let minsLap = document.createElement("p");
  let secondsLap = document.createElement("p");
  let seedLap = document.createElement("p");
  //    output.innerHTML="";

  div.classList.add("result");

  hoursLap.innerText = `${hours} hours`;
  minsLap.innerText = `${min} min`;
  secondsLap.innerText = `${sec} sec`;
  seedLap.innerText = `${ms} ms`;

  div.append(hoursLap, minsLap, secondsLap, seedLap);
  output.append(div);
}

function startTimer() {
  document.querySelector("#start").disabled = true;
  timer = setInterval(() => {
    timerInMs += 10;
    updateTimer(timerInMs);
  }, 10);
}

function updateTimer(timerInMs) {
  const hours = Math.floor(timerInMs / 3600000);
  const sec = Math.floor(timerInMs / 1000);
  const min = Math.floor(timerInMs / 60000);
  const ms = (timerInMs % 1000) / 10;

  document.getElementById("hours").innerText =
    hours < 10 ? "0" + (hours % 60) : hours % 60;
  document.getElementById("minutes").innerText =
    min < 10 ? "0" + (min % 60) : min % 60;
  document.getElementById("seconds").innerText =
    sec < 10 ? "0" + (sec % 60) : sec % 60;
  document.getElementById("millisecond").innerText = ms;
}
