let numberN = null;
let numberM = null;

do {
  numberN = +prompt("Введіть число N : ");
} while (!numberN || NaN || !Number.isInteger(numberN));
console.log("N = " + numberN);

do {
  numberM = +prompt("Введіть число M : ");
} while (!numberM || NaN || !Number.isInteger(numberM) || numberM <= numberN);
console.log("M = " + numberM);

let answer = confirm("Пропускати парні числа?");

let sum = 0;
if (answer == true) {
  for (let a = numberN; a <= numberM; a++) {
    if (a % 2 === 0) {
      continue;
    } else {
      sum = sum + a;
    }
  }
  console.log("Сума чисел з парними числами: " + sum);
} else {
  for (let b = numberN; b <= numberM; b++) {
    sum = sum + b;
  }
  console.log("Сума чисел: " + sum);
}

document.writeln("Сума всіх вибраних значень = " + sum);
