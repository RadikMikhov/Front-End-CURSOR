const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];

// 1 Создайте функцию getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - которая возвращает список предметов для конкретного студента. Обратите внимание – название предмета необходимо возвращать с большой буквы, а _ – заменить на пробел
function getSubjects(name) {
  let result = Object.keys(name.subjects);
  for (let i = 0; i < result.length; i++) {
    result[i] =
      result[i][0].toUpperCase() +
      result[i]
        .slice(1)
        .toLowerCase()
        .replace("_", " ");
  }
  return result;
}
console.log("Функція 1");
console.log(getSubjects(students[0]));
console.log(getSubjects(students[1]));
console.log(getSubjects(students[2]));

// 2 Создайте функцию getAverageMark(students[0]) --> 3.79 – которая вернёт среднюю оценку по всем предметам для переданного студента НЕ МАССИВА СТУДЕНТОВ. Оценку округлите до 2ого знака. Можно использовать функции написанные в предыдущих домашних заданиях :)
function getAverageMark(student) {
  let newArr = [].flat();
  for (let key in student.subjects) {
    newArr.push(student.subjects[key]);
  }
  return (
    newArr.flat().reduce(function(a, b) {
      return a + b;
    }, 0) / newArr.flat().length
  ).toFixed(2);
}
console.log("Функція 2");
console.log(getAverageMark(students[0]));
console.log(getAverageMark(students[1]));
console.log(getAverageMark(students[2]));

// 3 Создайте функцию getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – которая возвращает информацию общего вида по переданному студенту (вам пригодится функция из предыдущего задания). Должна быть выведена информация: курс, имя, средняя оценка.
function getStudentInfo(student) {
  let result = [
    `Ім'я: ${student.name}`,
    `Курс: ${student.course}`,
    `Середня оцінка: ${getAverageMark(student)}`
  ];
  return result.join(", ");
}
console.log("Функція 3");
console.log(getStudentInfo(students[0]));
console.log(getStudentInfo(students[1]));
console.log(getStudentInfo(students[2]));

// 4 Создайте функцию getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – которая возвращает имена студентов в алфавитном порядке.
function getStudentsNames(students) {
  let names = [];
  students.forEach(student => {
    names.push(student.name);
  });
  return names.sort();
}
console.log("Функція 4");
console.log(getStudentsNames(students));

// 5 Создайте функцию getBestStudent(students) --> "Anton" – которая возвращает лучшего студента из списка по показателю средней оценки.
function getBestStudent(student) {
  let result = [];
  let bestStudent = [];
  for (let i = 0; i < student.length; i++) {
    bestStudent.push(getAverageMark(students[i]));
  }
  for (let j = 0; j < bestStudent.length; j++) {
    if (Math.max(...bestStudent) == getAverageMark(students[j])) {
      result = students[j].name;
    }
  }
  return result;
}
console.log("Функція 5");
console.log(getBestStudent(students));

// 6 Создайте функцию calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – которая возвращает объект, в котором ключи это буквы в слове, а значения – количество их повторений.
function calculateWordLetters(word) {
  let countLetter = {};
  for (let i = 0; i < word.length; i++) {
    countLetter[word[i]] = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[i] == word[j]) {
        countLetter[word[i]] += 1;
      }
    }
  }
  return countLetter;
}
console.log("Функція 6");
console.log(calculateWordLetters("jabbawockeez"));

let result = `
1. Коректні назви предметів для Тетьяни: ${getSubjects(students[0])};<br>
2. Середня оцінка Тетьяни: ${getAverageMark(students[0])};<br>
3. ${getStudentInfo(students[0])};<br>
4. ${getStudentsNames(students)};<br>
5. Найкращій студент: ${getBestStudent(students)};<br>
`;
document.querySelector(".output").innerHTML = result;
