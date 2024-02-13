class Person {
constructor(name,age){
    this.name=name;
    this.age=age;
}
introduce(){
    console.log("hi my name is",`${this.name}`,"and i am ",`${this.age}`, "years old.")
}
}

const PrintUser=new Person("Johan",25)
const Person1=new Person("tom",50)
PrintUser.introduce();
function describePerson(callback){
    callback.call(Person1);
}
describePerson(Person1.introduce)


let number=20
let wait = new Promise((resolve,reject)=>{
    if(number){
        resolve(`${number}`)
    }else{
        reject("fail upload")
    }
}) 
wait.then((number)=>setTimeout(()=>console.log(`${number}`),1000))
   


