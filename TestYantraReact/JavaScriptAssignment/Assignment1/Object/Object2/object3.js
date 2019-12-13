var employee = new Object();

employee.name="Ajil";
employee.age=50;
employee.id=10254;

console.log("--------------3-----------------");


for (var key in employee) {
  console.log(key +" "+employee[key]);
  
  
}
console.log("==================================");
