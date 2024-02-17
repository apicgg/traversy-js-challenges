function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((sum, car) => {
    return sum + car.mileage;
  }, 0);

  const averageMileage = totalMileage / cars.length;

  const highestMileageCar = cars.reduce((highest, car) => {
    return car.mileage > highest.mileage ? car : highest;
  }, cars[0]);

  const lowestMileageCar = cars.reduce((lowest, car) => {
    return car.mileage < lowest.mileage ? car : lowest;
  }, cars[0]);

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
