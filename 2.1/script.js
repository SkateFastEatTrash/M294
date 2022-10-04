const cars = ["Tesla", "BWM", "Audi", "Mercedes"];
console.log(cars);
const newCars = [...cars, "Fiat"];
console.log(newCars);

const numbers = [2, 4, 54, 35, 6]
const sqrt_numbers = numbers.map((number) => Math.pow(number, 2));
console.log(sqrt_numbers);
const filtered_numbers = numbers.filter((numbers) => numbers % 2 != 0);
console.log(filtered_numbers)