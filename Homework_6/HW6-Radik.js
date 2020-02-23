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

// 1 Створити функцію getSubjects(students[0] для повернення списку предметів для студента
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

// 2 Створити функцію getAverageMark(students[0]) щоб пыдрахувати оцінку оскремого студента (не масив)
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

// 3 Створити функцію getStudentInfo(students[0]) для отримання інформації по студенту
function getStudentInfo(student) {
  let result = {};
  result.course = student.course;
  result.name = student.name;
  result.averageMark = getAverageMark(student);
  return result;
}
console.log("Функція 3");
console.log(getStudentInfo(students[0]));
console.log(getStudentInfo(students[1]));
console.log(getStudentInfo(students[2]));

// 4 Створити функцію getStudentsNames(students) для сортування студентів в алфавітному порядку
function getStudentsNames(students) {
  let names = [];
  students.forEach(student => {
    names.push(student.name);
  });
  return names.sort();
}
console.log("Функція 4");
console.log(getStudentsNames(students));

// 5 Створити функцію getBestStudent(students) яка покаже кращого студента по середній оцінці
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

// 6 Створити функцію calculateWordLetters(word) для повернення об'екту, в якому ключи це літери в слові, а значення це їх повторення
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

