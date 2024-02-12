let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ]

let getAverageAge=arr.reduce((sum,current) => sum+current.age,0)/arr.length;
let names = arr.map((x)=>x=x.name)
console.log(names)
console.log( getAverageAge);   // (25 + 30 + 29) / 3 = 28


let filterRange = (arrN, a, b) => arrN.filter(i => i >= a && i <= b);
let arrN = [5, 3, 8,1];
let filtered = filterRange(arrN, 1, 4);
console.log( filtered )