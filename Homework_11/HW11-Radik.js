function getChar() {
  return new Promise(resolve => {
    setTimeout(() => {
      const sign = Date.now()
        .toString()
        .slice(-5);
      resolve(String.fromCharCode(sign));
    }, 50);
  });
}

async function getRandomChinese(length) {
  let str = "",
    i = 1;
  while (i <= length) {
    str += await getChar();
    i++;
  }
  return str;
}

getRandomChinese(4).then(result => {
  console.log(result);
});
