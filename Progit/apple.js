let money = prompt('сколько у вас с собой есть денег?');
let apple = prompt('сколько вы купили яблок ?');
let bread = prompt('сколько вы купили батонов хлеба ?');
let priceApp = prompt('сколько стоит одно яблоко?') * apple;
let priceBr = prompt('сколько стоит один батон хлеба?') * bread;
let result = money >= (priceApp + priceBr);
document.body.innerHTML = '<h1>' + result + '</h1>';
