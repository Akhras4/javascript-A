function work(input1,input2) {
  let totalsec = input1 * 60;
  let timer = setInterval(() => {
    let min = Math.floor(totalsec / 60);
    let sec = totalsec % 60;

    console.log(`${min} : ${sec} `);

    if (totalSec === 0) {
      clearInterval(timer); 
        statRest(input2);
    } else {
      totalSeconds--; 
    }
  }, 1000); 
}
function statRest(input2){
  let totalSeconds = input2 * 60;
  let timer = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    console.log(`${minutes} minutes ${seconds} seconds`);
 
  if (totalSeconds === input2) {
    clearInterval(timer); 
      work(input2);
  } else {
    totalSeconds++; 
  }
}, 1000);
}
work(1,0.5);


