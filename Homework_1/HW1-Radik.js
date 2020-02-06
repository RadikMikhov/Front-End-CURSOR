let priceBread = 15.678;
let priceCheese = 123.965;
let priceMeat = 90.2345;

let maxSum = Math.max(priceBread, priceCheese, priceMeat);
console.log("Максимальне число - " + maxSum + "грн");

let minSum = Math.min(priceBread, priceCheese, priceMeat);
console.log("Мінімальне число - " + minSum + "грн");

let priceAllProducts = priceBread + priceCheese + priceMeat;
console.log("Сума всіх товарів - " + priceAllProducts + "грн");

let roundingPriceAllProducts =
  Math.floor(priceBread) + Math.floor(priceCheese) + Math.floor(priceMeat);
console.log("Сума з округленням - " + roundingPriceAllProducts + "грн");

let roundingToHundredsPriceAllProducts =
  Math.round(priceAllProducts / 100) * 100;
console.log(
  "Сума з округренням до сотих - " + roundingToHundredsPriceAllProducts + "грн"
);

priceAllProducts = Math.floor(priceAllProducts);
if (priceAllProducts % 2 === 0) {
  console.log("Чи є сума парною - " + true);
} else {
  console.log("Чи є сума парною - " + false);
}

let change = 500 - (priceBread + priceCheese + priceMeat);
console.log("Здача з 500 грн - " + change + "грн");

let middlePrice = ((priceBread + priceCheese + priceMeat) / 3).toFixed(2);
console.log("Середня сума - " + middlePrice + "грн");

let discount = Math.round(Math.random() * 100);
console.log("Рандомна знижка - " + discount + "%");

let discountPriceCheese = priceCheese * ((100 - discount) / 100);

let priceCheeseDiscount = (priceCheese - discountPriceCheese).toFixed(2);
console.log("Ціна на сир зі знижкою - " + priceCheeseDiscount);

let costPrice = priceCheese / 2;
console.log("Собівартість - " + costPrice + "грн");

let lostProfit = (costPrice - discountPriceCheese).toFixed(2);
console.log("Втрачена вигода - " + lostProfit + "грн");
