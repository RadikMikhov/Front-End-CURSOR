const PRICE_BREAD = 15.678;
const PRICE_CHEESE = 123.965;
const PRICE_MEAT = 90.2345;

// 1 за допомогою Math вивести максимальне число
let maxPrice = Math.max(PRICE_BREAD, PRICE_CHEESE, PRICE_MEAT);
console.log("Максимальне число - " + maxPrice + "грн");

// 2 за допомогою Math вивести мінімальне число
let minPrice = Math.min(PRICE_BREAD, PRICE_CHEESE, PRICE_MEAT);
console.log("Мінімальне число - " + minPrice + "грн");

// 3 Вартість всіх товарів
let priceAllProducts = PRICE_BREAD + PRICE_CHEESE + PRICE_MEAT;
console.log("Сума всіх товарів - " + priceAllProducts + "грн");

// 4 Сума з округленням в меньшу сторону
let floorPriceAllProducts =
  Math.floor(PRICE_BREAD) + Math.floor(PRICE_CHEESE) + Math.floor(PRICE_MEAT);
console.log("Сума з округленням - " + floorPriceAllProducts + "грн");

// 5 Сума з округленням до сотих в більшу сторону
let RoundPriceAllProducts = Math.ceil(Math.round(priceAllProducts) / 100) * 100;
console.log("Сума округленням в більшу сторону: " + RoundPriceAllProducts);

// 6 Виведення булевого значення
priceAllProducts = Math.floor(priceAllProducts);
if (priceAllProducts % 2 === 0) {
  console.log("Чи є сума парною - " + true);
} else {
  console.log("Чи є сума парною - " + false);
}

// 7 Виведення решти при оплаті 500 грн
let change = 500 - (PRICE_BREAD + PRICE_CHEESE + PRICE_MEAT);
console.log("Решта з 500 грн - " + change + "грн");

// 8 Виведення середнього значення з округленням до другого символу
let middlePrice = ((PRICE_BREAD + PRICE_CHEESE + PRICE_MEAT) / 3).toFixed(2);
console.log("Середня сума - " + middlePrice + "грн");

// 9 Випадкова знижка
let discount = Math.round(Math.random() * 100);
console.log("Рандомна знижка - " + discount + "%");
let discountPriceAllProducts = priceAllProducts * ((100 - discount) / 100);
let priceAllProductsDiscount = (
  priceAllProducts - discountPriceAllProducts
).toFixed(2);
console.log("Ціна зі знижкою - " + priceAllProductsDiscount);

let costPrice = priceAllProducts / 2;
console.log("Собівартість - " + costPrice + "грн");

let lostProfit = (costPrice - discountPriceAllProducts).toFixed(2);
console.log("Втрачена вигода - " + lostProfit + "грн");

let result = `
Максимальна ціна: ${maxPrice};<br>
Мінімальна ціна: ${minPrice};<br>
Cума всіх товарів: ${priceAllProducts};<br>
Ціла сума округленна до min: ${floorPriceAllProducts};<br>
Сума округлена до сотень: ${RoundPriceAllProducts};<br>
Середня сума всіх товарів: ${middlePrice};<br>
<br>
Рандомна знижка: ${discount}%;<br>
Ціна зі знижкою: ${priceAllProductsDiscount};<br>
Втрачена вигода: ${lostProfit};<br>
`;
document.querySelector(".output").innerHTML = result;
