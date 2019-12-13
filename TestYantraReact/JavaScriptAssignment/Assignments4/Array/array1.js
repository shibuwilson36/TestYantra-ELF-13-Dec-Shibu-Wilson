var cars=["BMW","Bentley. ","Aston Martin. ","Audi","Acura."];

console.log(cars);

console.log("--------------for each----------------------");
cars.forEach(val=>console.log(val))

console.log("--------------isArray----------------------");
console.log(Array.isArray(cars));

console.log("--------------includes----------------------");
console.log(cars.includes("Audi",2));

console.log("--------------push----------------------");
cars.push("Alfa Romeo");
console.log(cars);

console.log("--------------pop----------------------");
console.log("removed  "+cars.pop());
console.log(cars);

console.log("--------------shift----------------------");
console.log("removed  "+cars.shift());
console.log(cars);

console.log("--------------shift----------------------");
console.log(cars);

console.log("--------------indexOf----------------------");
console.log(cars.indexOf("BMW"));

console.log("--------------join----------------------");
var str=cars.join("---");
console.log("join method "+str);
