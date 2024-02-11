/**
 * The code is a JavaScript function that implements a timer for work and rest intervals, with visual
 * and audio cues.
 * @param input1 - The input1 parameter represents the duration of the work period in minutes.
 * @param input2 - The input2 parameter represents the duration of the rest time in minutes.
 */
let timer;
let timer1;
/**
 * The `work` function takes two inputs, converts the first input from minutes to seconds, and then
 * starts a timer that counts down from the converted time while updating the display and background
 * color of the webpage.
 * @param input1 - The input1 parameter represents the number of minutes for the timer.
 * @param input2 - The parameter `input2` is not defined in the code snippet you provided. Could you
 * please provide more information about what `input2` represents or how it is used in the `work`
 * function?
 */
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

/**
 * The `statRest` function is a JavaScript function that takes two inputs and starts a timer countdown,
 * updating the time display every second and changing the background color of the body based on the
 * remaining time.
 * @param input1 - The input1 parameter is not defined in the code snippet you provided. Could you
 * please provide more information about what input1 represents?
 * @param input2 - The input2 parameter represents the number of minutes for the timer.
 */
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

/**
 * The function "stop" clears two intervals and sets the text content of an element with class "time"
 * to "00:00".
 */
function stop() {
  clearInterval(timer)
  clearInterval(timer1)
  document.querySelector(".time").textContent = "00:00"
}
/* The code snippet is adding an event listener to the form element with the id "timerform". When the
form is submitted, the function specified as the second argument is executed. */
document.getElementById("timerform").addEventListener("submit", function (event) {
  event.preventDefault();
  clearInterval(timer)
  clearInterval(timer1)
  let worktime = document.getElementById("work").value;
  let resttime = document.getElementById("rest").value;
  work(worktime, resttime);
});
