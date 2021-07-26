const carPassing = function (cars, speed) {
  let updatedCars = cars;

  updatedCars.push( {
    time: Date.now(),
    speed: speed,
    }
  );

  return updatedCars;
}

console.log(carPassing(cars,speed));