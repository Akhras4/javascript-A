let timer;
let timer1;
function work(input1, input2) {
  let mintolsec = input1 * 60;
  timer = setInterval(() => {
    let min = Math.floor(mintolsec / 60);
    let sec = mintolsec % 60;
    document.querySelector(".time").textContent = `${min} : ${sec}`;
    console.log(`${min} : ${sec}`);
    if (mintolsec == 0) {
      clearInterval(timer);
      document.querySelector('body').style.background='radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%)';
      statRest(input2, input1);
    } else {
      mintolsec--;
    }
    if (mintolsec == 5) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, #202677 0%, #000000 70%)"
  } else if (mintolsec == 4) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, rgb(115 20 20) 0%, #000000 70%)"
      document.getElementById("alarm").play();
  } else if (mintolsec == 3) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, #202677, #000000 70%)"
  } else if (mintolsec == 2) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, rgb(115 20 20) 0%, #000000 70%)"
  } else if (mintolsec == 1) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, #202677  0%, #000000 70%)"
  }
  }, 1000);
}

function statRest(input1, input2) {
  let mintolsec = input2 * 60;
  timer1 = setInterval(() => {
    let min = Math.floor(mintolsec / 60);
    let sec = mintolsec % 60;
    document.querySelector(".time").textContent = `${min} : ${sec}`;
    console.log(`${min} : ${sec}`);
    if (mintolsec == 0) {
      clearInterval(timer1);
      document.querySelector('body').style.background='radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%)';
      work(input1, input2);
    } else {
      mintolsec--;
    }
    if (mintolsec == 5) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, #202677 0%, #000000 70%)"
  } else if (mintolsec == 4) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, rgb(115 20 20) 0%, #000000 70%)"
      document.getElementById("alarm").play();
  } else if (mintolsec == 3) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, #202677, #000000 70%)"
  } else if (mintolsec == 2) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, rgb(115 20 20) 0%, #000000 70%)"
  } else if (mintolsec == 1) {
      document.querySelector('body').style.background = "radial-gradient(ellipse at center, #202677  0%, #000000 70%)"
  }
  }, 1000);
}

function stop() {
  clearInterval(timer)
  clearInterval(timer1)
  document.querySelector(".time").textContent = "00:00"
}
document.getElementById("timerform").addEventListener("submit", function (event) {
  event.preventDefault();
  clearInterval(timer)
  clearInterval(timer1)
  let worktime = document.getElementById("work").value;
  let resttime = document.getElementById("rest").value;
  work(worktime, resttime);
});
