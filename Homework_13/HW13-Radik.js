// Задание 1:
// Создайте бесконечный генератор идентификаторов. Должен работать следующим образом:
// const idGenerator = createIdGenerator();
// idGenerator.next().value -> 1
// idGenerator.next().value -> 2
// idGenerator.next().value -> 3

function* createIdGenerator() {
  for (let i = 1; i >= 1; i++) {
    yield i;
  }
}
const idGenerator = createIdGenerator();

console.log('Завдання 1');
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

// Задание 2 (advanced)
// Создайте генератор, который будет регулировать размеры шрифта для вашего сайта. (Можно доработать чтобы реально менял шрифт, но это не является обязательным условием)
// Работать генератор будет следующим образом:
// const fontGenerator = newFontGenerator(14); // 14 – стартовое значение
// fontGenerator.next("up").value -> 14
// fontGenerator.next("up").value -> 16
// fontGenerator.next("up").value -> 18
// fontGenerator.next().value -> 18
// fontGenerator.next("down").value -> 16
// fontGenerator.next("down").value -> 14
// fontGenerator.next("down").value -> 12
// fontGenerator.next().value -> 12

function* newFontGenerator(fontSize) {    
    while(true){
        let i = yield fontSize;
        if (i === "up") {
            fontSize += 2;
        } else if (i === "down") {
            fontSize -= 2;
        }
    }
}
const fontGenerator = newFontGenerator(14);

console.log('Завдання 2');
console.log(fontGenerator.next("up").value);   //-> 14
console.log(fontGenerator.next("up").value);   //-> 16
console.log(fontGenerator.next("up").value);   //-> 18
console.log(fontGenerator.next().value);       //-> 18
console.log(fontGenerator.next("down").value); //-> 16
console.log(fontGenerator.next("down").value); //-> 14
console.log(fontGenerator.next("down").value); //-> 12
console.log(fontGenerator.next().value);       //-> 12

let result = `
Завдання 1:<br> 
${idGenerator.next().value};<br>
${idGenerator.next().value};<br>
${idGenerator.next().value};<br>
Завдання 2:<br>
14 = ${fontGenerator.next("up").value};<br>
16 = ${fontGenerator.next("up").value};<br>
18 = ${fontGenerator.next("up").value};<br>
18 = ${fontGenerator.next().value};<br>
16 = ${fontGenerator.next("down").value};<br>
14 = ${fontGenerator.next("down").value};<br>
12 = ${fontGenerator.next("down").value};<br>
12 = ${fontGenerator.next().value};<br>
 
`;
document.querySelector(".output").innerHTML = result;
