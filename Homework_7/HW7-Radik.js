const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1 Створити функцію getMyTaxes.call(country, salary) для підрахунку податків
function getMyTaxes(salary) {
  let result = salary * this.tax;
  return result;
}
console.log("Функція 1");
console.log(getMyTaxes.call(ukraine, 5000));
console.log(getMyTaxes.call(latvia, 5000));
console.log(getMyTaxes.call(litva, 5000));

// 2 Створити функцію getMiddleTaxes.call(country) яка вираховує середне значення податків
function getMiddleTaxes() {
  let result = this.middleSalary * this.tax;
  return result;
}
console.log("Функція 2");
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

// 3 Створити функцію getTotalTaxes.call(country) яка підраховує скільки всього платять податки ІТ спеціалісти
function getTotalTaxes() {
  let result = this.middleSalary * this.tax * this.vacancies;
  return result;
}
console.log("Функція 3");
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

// 4 Створити функцію getMySalary(country) щоб писала в консоль об'єкти ... кожні 10 секунд
function getMySalary(country) {
  let result = {};
  result.salary = Math.floor(1500 + Math.random() * (2000 + 1 - 1500));
  result.taxes = Math.floor(country.tax * result.salary);
  result.profit = result.salary - result.taxes;
  return result;
}

setInterval(() => console.log(getMySalary(ukraine)), 10000);
console.log("Функція 4");
