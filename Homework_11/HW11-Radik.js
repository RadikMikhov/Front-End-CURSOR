async function getRandomChinese(length) {
  let str = "";
  let i = 0;
  while (length > i) {
    await new Promise(function(resolve, reject) {
      try {
        setTimeout(() => {
          const date = Date.now()
            .toString()
            .slice(-5);
          const sign = String.fromCharCode(date);
          resolve(sign);
          str += sign;
        }, 50);
      } catch (error) {
        reject(error);
      }
    });
    i++;
  }
  return str;
}
console.log(getRandomChinese(5));
