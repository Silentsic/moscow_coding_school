let money = prompt('сколько у вас с собой есть денег?');
let apple = prompt('сколько вы купили яблок ?');
let bread = prompt('сколько вы купили батонов хлеба ?');

function haveEnough(money, apple, bread){
	let priceApp = prompt('сколько стоит одно яблоко?') * apple;
    let priceBr = prompt('сколько стоит один батон хлеба?') * bread;
	let result = money >= (priceApp + priceBr);
	if (result){
		document.body.innerHTML = '<h1>' + 'Вам хватает денег на покупки' + '</h1>';
	}else{
        document.body.innerHTML = '<h1>' + 'Вам не хватает денег' + '</h1>';
	}
}
haveEnough(money, apple, bread);
