// Функція 1 getMaxDigit(number)
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

// Функція 2 піднесення до степення
function getExp(number, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= number;
  }
  return result;
}

// Функція 3 виправлення імкені
function getCorectName(name) {
  let result = "";
  for (let i = 0; i < name.length; i++)
    i === 0
      ? (result += name[i].toUpperCase())
      : (result += name[i].toLowerCase());
  return result;
}

// Функція 4 для підкахунку податку
function pureSalary(salary) {
  const TAX = 19.5;
  const COEFFICIENT = (100 - TAX) / 100;
  let result = salary * COEFFICIENT;
  return result;
}

// Функцыя 5 для рандома getRandomNumber(1, 10) -> 5
function getRandomNumber(N, M) {
  let random = Math.floor(N + Math.random() * (M + 1 - N));
  return random;
}

// Функція 6 для підрахунку countLetter("а", "Асталависта") -> 4
function countLetter(letter, str) {
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i].toLowerCase() === letter.toLowerCase()) count++;
  return count;
}

// Функція 8 Що видає рандомний пароль
function getRandomPassword(passLength = 8) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password += Math.floor(Math.random() * 10);
  }
  return password;
}

// Функція 9 Для видалення окремих літер з тексту
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

// Функція 10 Чи є слово поліндромом
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

// функція 11 Для видалення літери, що зустрічається більше одного разу
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
