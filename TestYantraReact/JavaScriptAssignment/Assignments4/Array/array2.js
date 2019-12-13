var animals=["cat","dog. ","TIGER. ","HEETAH","ANACONDA."];

console.log(animals);

console.log("--------------for each----------------------");
animals.forEach(val=>console.log(val))


console.log("--------------isArray----------------------");
console.log(Array.isArray(animals));

console.log("--------------includes----------------------");
console.log(animals.includes("Audi",2));

console.log("--------------push----------------------");
animals.push("Alfa Romeo");
console.log(animals);

console.log("--------------pop----------------------");
console.log("removed  "+animals.pop());
console.log(animals);

console.log("--------------shift----------------------");
console.log("removed  "+animals.shift());
console.log(animals);

console.log("--------------shift----------------------");
console.log(animals.unshift("dog"));

console.log("--------------indexOf----------------------");
console.log(animals.indexOf("dog"));


console.log("--------------join----------------------");
var str=animals.join("---");
console.log("join method "+str);

console.log("--------------filter----------------------");

numbers=[10,20,30,40]

var filNumber = numbers.filter(val => val > 20)
console.log("after filter ", filNumber);

console.log("--------------map----------------------");

var mapNumbers = numbers.map(val=>val *10)
console.log("after map ",mapNumbers);