let car = {
  make: "Toyata",
  model: "Camry",
  year: 2022,
  isElectric: false,
  start: function () {
    console.log("start");
  },
};
console.log(car.isElectric);
console.log(car.make);
console.log(car.year);
car.start();
