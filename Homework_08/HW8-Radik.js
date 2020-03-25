// 1. У стдентов должны быть следующие свойства: university, course, fullName, они передаются при создании студента(в конструктор).
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
  }
  // 2. Создайте метод this.getInfo() -> "Студент 1го курса Высшей Школы Мошенничества г.Одесса, Остап Родоманський Бендер", метод возвращает совокупную информацию о курсе, учебном заведении и имени студента
  getInfo() {
    return (
      "Студент " +
      this.course +
      "-го курсу" +
      ", " +
      this.university +
      ", " +
      this.fullName
    );
  }
  // 3. Создайте геттер оценок this.marks, который возвращает массив оценок студента [5, 4, 4, 5]
  getMarks() {
    return (this.marks = [5, 4, 4, 5]);
  }
  // 4. Создайте сеттер оценок this.marks = 5, который позволяет поставить оценку студенту. После того, как оценка поставлена, геттер должен вернуть массив this.marks -> [5, 4, 4, 5, 5]
  setMarks(val) {
    this.marks.push(val);
    return this.marks;
  }
  // 5. Создайте метод получения среднего балла this.getAverageMark() -> 4.6
  getAverageMark() {
    return (
      this.marks.reduce((a, b) => {
        return a + b;
      }, 0) / this.marks.length
    );
  }
  // 6. Создайте метод this.dismiss, который "исключит" студента. После вызова этого метода – ставить студенту оценки и получать их больше нельзя. (Никаких ошибок, просто возвращается всегда null вместо массива оценок)
  dismiss() {
    return (this.marks = null);
  }
  // 7. Создайте метод this.recover, который позволит восстановить студента
  recover() {
    return this.getMarks();
  }
}
let student = new Student("ДВНЗ УДХТУ", 4, "Кулик Володимир");

console.log("Завдання 2");
console.log(student.getInfo());

console.log("Завдання 3");
console.log("Масив оцінок студента: ", student.getMarks());

console.log("Завдання 4");
console.log(
  "Додали оцінку 5, тепер у студента такі оцінки: ",
  student.setMarks(5)
);

console.log("Завдання 5");
console.log("Середня оцінка", student.getAverageMark().toFixed(2));

console.log("Завдання 6");
console.log("Виключити студента", student.dismiss());

console.log("Завдання 7");
console.log("Студента прийнято! Оцінки: ", student.recover());

// 1. Создайте новый класс BudgetStudent, который полностью наследует класс Student
// 2. Бюджетный студент может получать стипендию с помощью метода this.getScholarship. Получение стипендии сопровождается выводом информации в консоль: Вы получили 1400 грн. стипендии
// 3. Метод получения стипендии автоматически вызывается каждые 30 секунд после создания объекта. Подсказка: вызывайте его в constructor
// 4. Студент получает стипендию только в том случае, если средний балл у него выше или равен 4.0
class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(
      () => console.log("getScholarship - " + this.getScholarship()),
      30000
    );
  }
  getMarks() {
    return (this.marks = [5, 4, 4, 5]);
  }
  getScholarship() {
    this.getMarks();
    if (this.marks === null || this.getAverageMark() < 4) {
      return "Оцінки низькі, Ви не маєте стипендії";
    } else {
      return "Вы отримуєте 1400 грн. стипендії";
    }
  }
}

let newStudent = new BudgetStudent(
  "Будівельна академія",
  "2",
  "Іванчук Сергій"
);

console.log(newStudent);
console.log("getScholarship - " + newStudent.getScholarship());
