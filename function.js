const age=(age)=>(age>18 ? true : "'Do you have your parents permission to access")
console.log(age(25))


const  pow=(x,n)=>{
    let l=1;
    for(i=0 ; i<n ; i++){
     l*=x  
}
return l
}

console.log(pow(3,3))


const ask=(question, yes, no)=>(question?yes():no())

ask(
    "Do you agree?",
    () => console.log("You agreed."),
    () => console.log("You canceled the execution.")
  )



  let calculator = {
      read(a,b){
          this.val1=a;
          this.val2=b;
          console.log(calculator)
  },
    sum(){
    let z=this.val1+this.val2;
    return z;
    
},
    mul(){
        let z=this.val1*this.val2;
        return z;
}
};
  calculator.read(6,5);
  console.log(calculator.sum());
  console.log(calculator.mul());



const min = (a, b) => (a < b ? a : b);
console.log(min(5, 3)); 

