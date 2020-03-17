const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1 Создайте функцию getMyTaxes.call(country, salary) -> number; – которая считает сколько налогов вы заплатите как IT-специалист в какой-либо стране. Функция должна вызываться через call и работать с данными через this
function getMyTaxes(salary) {
  let result = salary * this.tax;
  return result;
}
console.log("Функція 1");
console.log(getMyTaxes.call(ukraine, 5000));
console.log(getMyTaxes.call(latvia, 5000));
console.log(getMyTaxes.call(litva, 5000));

// 2 Создайте функцию getMiddleTaxes.call(country) -> number; – которая считает сколько в среднем налогов платят IT-специалистсы в каждой стране. (tax * middleSalary). Функция должна вызываться через call и работать с данными через this
function getMiddleTaxes() {
  let result = this.middleSalary * this.tax;
  return result;
}
console.log("Функція 2");
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

// 3 Создайте функцию getTotalTaxes.call(country) -> number; – которая считает сколько всего налогов платят IT-специалистсы в каждой стране. (tax * middleSalary * vacancies). Функция должна вызываться через call и работать с данными через this
function getTotalTaxes() {
  let result = this.middleSalary * this.tax * this.vacancies;
  return result;
}
console.log("Функція 3");
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

// 4 Создайте функцию getMySalary(country) – которая будет писать в консоль объект вида: { salary: number, taxes: number, profit: number } каждые 10 секунд. Значения salary – генерируйте случайным образом в диапазоне 1500-2000. taxes – расчитывается в зависимости от от выбранной страны и значения salary.
function getMySalary() {
  let result = {};
  let randomSalary = Math.floor(Math.random() * (2000 - 1500) + 1500);
  result.salary = randomSalary;
  result.taxes = this.tax * randomSalary;
  result.profit = result.salary - result.taxes;
  return console.log(result);
}

let timeOut = setTimeout(function wait() {
  getMySalary.call(ukraine);
  timeOut = setTimeout(wait, 10000);
}, 10000);

console.log("Функція 4");

let result = `
1. Податки в Україні: ${getMyTaxes.call(ukraine, 5000)};<br>
2. Середне значення податків в Україні: ${getMiddleTaxes.call(ukraine)};<br>
3. Всього аодатків в Україні: ${getTotalTaxes.call(ukraine)};<br>
4. Функція: ${"В консолі"};<br>
`;
document.querySelector(".output").innerHTML = result;
