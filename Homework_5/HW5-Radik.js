// Функція 1 getRandomArray(length, min, max)
function getRandomArray(length, min, max) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return array;
}
console.log(getRandomArray(25, 1, 99));

// Функція 3 getAverage(...numbers)

