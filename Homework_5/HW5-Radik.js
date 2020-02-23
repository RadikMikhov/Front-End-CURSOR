// 1 Створити функцію getRandomArray(length, min, max) для повернення масиву випадкових чисел
function getRandomArray(length, min, max) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return array;
}
console.log("Функція 1:");
console.log(getRandomArray(25, 1, 99));

// 2 Створити функцію getModa(...numbers) для підрахунку моди всіх елементів
function getModa(...numbers) {
  let arguments = [...numbers];
  let moda = [];

  arguments.map((el, i) => {
    let currentNumbers = arguments.filter(num => num === arguments[i]);
    if (currentNumbers.length > moda.length && (el ^ 0) === el) {
      moda = currentNumbers;
    }
  });

  console.log(moda[0]);
}
console.log("Функція 2:");
getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);

// 3 Створити функцію getAverage(...numbers) для підрахунку середнього арифметичного значення
function getAverage(...numbers) {
  const correctArray = numbers.filter(
    char => parseFloat(char) - parseInt(char) === 0
  );
  return (
    correctArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / correctArray.length
  );
}
console.log("Функція 3:");
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4 Створити функцію getMedian(...numbers) для підрахунку медіани
function getMedian(...numbers) {
  const correctArray = numbers.filter(
    char => parseFloat(char) - parseInt(char) === 0
  );
  const sortCorrectArray = correctArray.sort((a, b) => a - b);
  if (sortCorrectArray.length % 2 === 0) {
    return (
      (sortCorrectArray[sortCorrectArray.length / 2 - 1] +
        sortCorrectArray[sortCorrectArray.length / 2]) /
      2
    );
  } else {
    return sortCorrectArray[Math.floor(sortCorrectArray.length / 2)];
  }
}
console.log("Функція 4:");
console.log(getMedian(1, 2, 3, 4, 5));

// 5 Створити функцію filterEvenNumbers(...numbers) для фільтрації парних чисел
function filterNumbers(...numbers) {
  return numbers.filter(el => parseFloat(el) - parseInt(el) === 0 && el % 2);
}
console.log("Функція 5:");
console.log(filterNumbers(1, 2, 3, 4, 5, 6));

// 6 Створити функцію countPositiveNumbers(...numbers) для підрахунку кількості чисел більше 0
function countPositiveNumbers(...numbers) {
  const correctArray = numbers.filter(
    char => parseFloat(char) - parseInt(char) === 0
  );
  return correctArray.reduce((sum, value) => {
    if (value > 0) {
      sum++;
    }
    return sum;
  }, 0);
}
console.log("Функція 6:");
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7 Створити функцію getDividedByFive(...numbers) для фільтрації і видалення всіх цифр крім тих що діляться на 5
function getDividedByFive(...numbers) {
  const correctArray = numbers.filter(
    char => parseFloat(char) - parseInt(char) === 0
  );
  return correctArray.filter(el => el % 5 === 0);
}
console.log("Функція 7:");
console.log(
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

// 8 Створити функцію replaceBadWords(string) для прибирання ненормативної лексики
function replaceBadWords(string) {
  let badWords = ["shit", "fuck", "suck", "bitch"];
  let arrayWords = string.split(" ");
  for (let i = 0; i < badWords.length; i++) {
    arrayWords = arrayWords.map(value => {
      return value.replace(badWords[i], "*".repeat(badWords[i].length));
    });
  }
  return arrayWords.join(" ");
}
console.log("Функція 8:");
console.log(replaceBadWords("Are you fucking kidding?"));

// 9 Створити функцію divideByThree(word) що розбиває слово на умовні слоги по 3 букви
function divideByThree(word) {
  let separate = [];
  word = word
    .toLowerCase()
    .split("")
    .filter(every => every !== " ");
  if (word.length > 3) {
    for (let i = 0; i < word.length; i++) {
      while (word.length) {
        separate.push(word.splice(0, 3).join(""));
      }
    }
  } else return word.join("");

  return separate;
}
console.log("Функція 9:");
console.log(divideByThree("Commander"));

let result = `
1. Масив: ${getRandomArray(25, 1, 99)};<br>
3. Середне значення: ${getAverage(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)};<br>
4. Медіана: ${getMedian(1, 2, 3, 4, 5)};<br>
5. Фільтрація парних чисел: ${filterNumbers(1, 2, 3, 4, 5, 6)};<br>
6. Числа більше 0: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)};<br>
7. Числа що діляться на 5: ${getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  55,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2
)};<br>
8. Цензура: ${replaceBadWords("Are you fucking kidding?")};<br>
9. Розділене слово: ${divideByThree("Commander")};<br>
`;
document.querySelector(".output").innerHTML = result;
