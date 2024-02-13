/* The above class defines a Person with a name and age, and has a method to introduce themselves. */
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
PrintUser.introduce();
/**
 * The function describePerson calls the introduce method of the Person1 object.
 * @param callback - The callback parameter is a function that will be called within the describePerson
 * function.
 */
const Person1=new Person("tom",50)
function describePerson(callback){
    callback.call(Person1);
}
describePerson(Person1.introduce)
/* The code snippet is creating a Promise object called `wait`. */
let number=20
let wait = new Promise((resolve,reject)=>{
    if(number){
        resolve(`${number}`)
    }else{
        reject("fail upload")
    }
}) 
wait.then((number)=>setTimeout(()=>console.log(`${number}`),1000))
   


