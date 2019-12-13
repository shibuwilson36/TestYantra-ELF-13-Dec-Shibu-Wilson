var person =new  Object();
person.firstName="John";
person.lastName="Doe";
person.age=50;
person.eyeColor="blue";
console.log("--------------10-----------------");


for (var key in person) {
  console.log(key +" "+person[key]);
  
  
}
console.log("==================================");
