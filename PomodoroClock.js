function work(input1,input2) {
  let mintolsec = input1 * 60;
  let timer = setInterval(() => {
    let min = Math.floor(mintolsec / 60);
    let sec = mintolsec % 60;

    console.log(`${min} : ${sec} `);

    if (mintolsec === 0) {
      clearInterval(timer); 
        statRest(input2);
    } else {
      mintolsec--; 
    }
  }, 1000); 
}
function statRest(input2){
  let mintolsec = input2 * 60;
  let timer = setInterval(() => {
    let min = Math.floor(mintolsec / 60);
    let sec = mintolsec % 60;
    console.log(`${min} : ${sec} `);
 
  if (mintolsec === input2) {
    clearInterval(timer); 
      work(input2);
  } else {
    mintolsec++; 
  }
}, 1000);
}


work(1,0.5);