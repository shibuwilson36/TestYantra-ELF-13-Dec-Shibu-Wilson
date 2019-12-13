var car = new Object();
car.name="maruti suzuki";
car.model="Alto 800 ";
car.price=2.89;
car.Color="blue";
console.log("--------------2-----------------");


for (var key in car) {
  console.log(key +" "+car[key]);
  
  
}
console.log("==================================");
