// 1 Создать функцию getMaxDigit(number) – которая получает любое число и выводит самую большую цифру в этом числе.
function getMaxDigit(number) {
  number = number.toString();
  let max = 0;
  for (let i = 0; i < number.length; i++) {
    if (max < number[i]) {
      max = number[i];
    }
  }
  return max;
}

// 2 Создать функцию, которая вычисляет степень числа. Не используя Math.pow и **. Используйте цикл
function getExp(number, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= number;
  }
  return result;
}

// 3 Создать функцию, которая форматирует имя, делая первую букву заглавной. ("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);
function getCorectName(name) {
  let result = "";
  for (let i = 0; i < name.length; i++)
    i === 0
      ? (result += name[i].toUpperCase())
      : (result += name[i].toLowerCase());
  return result;
}

// 4 Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы. (Налог = 18% + 1.5% -> 19.5%).
function pureSalary(salary) {
  const TAX = 19.5;
  const COEFFICIENT = (100 - TAX) / 100;
  let result = salary * COEFFICIENT;
  return result;
}

// 5 Создать функцию, которая возвращает случайное целое число в диапазоне от N до M. Пример: getRandomNumber(1, 10) -> 5
function getRandomNumber(N, M) {
  let random = Math.floor(N + Math.random() * (M + 1 - N));
  return random;
}

// 6 Создать функцию, которая считает сколько раз определенная буква повторяется в слове. Пример: countLetter("а", "Асталависта") -> 4
function countLetter(letter, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i].toLowerCase() === letter.toLowerCase()) count++;
  return count;
}

// 8 Создайте функцию генерации случайного пароля (только числа), длинна устанавливается пользователем или по умолчанию = 8 символам.
function getRandomPassword(passLength = 8) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += Math.floor(Math.random() * 10);
  }
  return password;
}

// 9 Создайте функцию, которая удаляет все буквы из предложения.
function deleteLatters(text, letter) {
  let newString = letter.toLowerCase();
  let result = "";
  for (let i = 0; i < newString.length; i++) {
    if (newString.charAt(i) !== text.toLowerCase()) {
      result += newString.charAt(i);
    }
  }
  return result;
}

// 10 Создайте функцию, которая проверяет является ли слово палиндромом.
function isPalindrom(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      result += str[i];
    }
  }
  let palidrome = true;
  result = result.toLocaleLowerCase();
  for (let i = 0; i < result.length / 2; i++) {
    if (result[i] !== result[result.length - i - 1]) {
      palidrome = false;
      break;
    }
  }
  return palidrome;
}

// 11 Создайте функцию, которая удалит из предложения буквы, которые встречаются более 1 раза.
function deleteDuplicateLetter(str) {
  str = str.toString();
  str = str.toLowerCase();
  let result = "";
  for (let x = 0; x < str.length; x++) {
    let y = 0;
    for (let z = 0; z < str.length; z++) {
      if (str[x] === str[z]) {
        y++;
      }
    }
    if (y < 2) {
      result += str[x];
    }
  }
  return result;
}

let result = `
    Функція 1 вхідні дані (12958): ${getMaxDigit(12958)};<br>
    Функція 2 вхідні дані (5, 7): ${getExp(5, 7)};<br>
    Функція 3 вхідні дані ('rODioN'): ${getCorectName("rODioN")};<br>
    Функція 4 вхідні дані (1000): ${pureSalary(1000)};<br>
    Функція 5 вхідні дані (1, 10): ${getRandomNumber(1, 10)};<br>
    Функція 6 вхідні дані ('a','Astalavista'): ${countLetter(
      "a",
      "Astalavista"
    )};<br>
    Функція 8 вхідні дані (): ${getRandomPassword()};<br>
    Функція 9 вхідні дані ('i','Lorem ipsum dolor sit amet, consectetur adipiscing elit'): ${deleteLatters(
      "i",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    )};<br>
    Функція 10 вхідні дані ('Аргентина манить темношкірого'): ${isPalindrom(
      "Аргентина манить темношкірого"
    )};<br>
    Функція 11 вхідні дані ('Бісквіт був дуже ніжний'): ${deleteDuplicateLetter(
      "Бісквіт був дуже ніжний"
    )};<br>
`;
document.querySelector(".output").innerHTML = result;
