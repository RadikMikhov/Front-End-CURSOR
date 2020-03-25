const students = ["Олександр", "Ігор", "Олена", "Ірина", "Олексій", "Світлана"];
const themes = [
  "Диференційні рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних"
];
const marks = [4, 5, 5, 3, 4, 5];

// 1 Разбейте студентов на пары(парень + девушка) для работы над проектом. У вас должен получиться вложенный массив с парами студентов: [["Саша", "Лена"], [..], [...]];
function makePairs(students) {
  const boyStudents = ["Олександр", "Ігор", "Олексій"];
  const girlStudents = ["Олена", "Ірина", "Світлана"];
  let pairsStudents = [];
  for (let i = 0; i < Math.floor(students.length / 2); i++) {
    pairsStudents[i] = [boyStudents[i], girlStudents[i]];
  }
  return pairsStudents;
}
const pairsStudents = makePairs(students);
console.log(pairsStudents);

// 2 Сопоставьте пары из предыдущего задания и темы проектов, над которым студенты будут работать. Должен получиться вложенный массив вида: [["Саша и Лена", "Теория автоматов"], [...], [...]]
function getTheme(pairsStudents, themes) {
  let PairsAndTheme = [];
  for (let i = 0; i < Math.floor(students.length / 2); i++) {
    PairsAndTheme[i] = [pairsStudents[i].join(" i "), themes[i]];
  }
  return PairsAndTheme;
}
const PairsAndTheme = getTheme(pairsStudents, themes);
console.log(PairsAndTheme);

// 3 Сопоставьте оценки(marks) со студентом(students): [["Саша", 4], [...], [...]]
function getMarksStudents(students, marks) {
  let studentsAndMarks = [];
  for (i = 0; i < students.length; i++) {
    studentsAndMarks[i] = [students[i], marks[i]];
  }
  return studentsAndMarks;
}
const studentsAndMarks = getMarksStudents(students, marks);
console.log(studentsAndMarks);

// 4 Поставьте каждой паре случайную оценку(от 1 до 5) за проект(тут функция будет нечистой, но не должна мутировать массив): [["Саша и Лена", "Теория автоматов", 5], [...], [...]]
function getRandomMarks(PairsAndTheme) {
  let arrayRandomMarks = [];
  for (let i = 0; i < pairsStudents.length; i++) {
    arrayRandomMarks[i] = [
      PairsAndTheme[i],
      Math.floor(Math.random() * 5 + 1)
    ].flat();
  }
  return arrayRandomMarks;
}
const arrayRandomMarks = getRandomMarks(PairsAndTheme);
console.log(arrayRandomMarks);
