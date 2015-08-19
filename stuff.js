$(document).ready(function(){
	var $div = $('div');
	var $p = $('p');
	var $span = $('span');

//create object constructor for fruit 
	var Fruit = function(type){
		this.type = type;
		this.price = randomNumber(0.5, 9.99);	
	}

//user object
	var user = {
	money: 100,
	appleBought: [],
	bananaBought: [],
	orangeBought: [],
	pearBought: []
};

//create fruits
	var apple = new Fruit("Apple");
	var orange = new Fruit("Orange");
	var banana = new Fruit("Banana");
	var pear = new Fruit("Pear");
	var fruits = [apple, orange, banana, pear];
	
//display initial fruit prices
	$("p.apple").html("Current Price: $" + apple.price.toFixed(2));
	$("p.orange").html("Current Price: $" + orange.price.toFixed(2));
	$("p.banana").html("Current Price: $" + banana.price.toFixed(2));
	$("p.pear").html("Current Price: $" + pear.price.toFixed(2));

//update prices of fruit every 15 seconds
	setInterval(function() {apple.price = updatePrice(apple); ;}, 15000);
	setInterval(function() {orange.price = updatePrice(orange);}, 15000);
	setInterval(function() {banana.price = updatePrice(banana); }, 15000);
	setInterval(function() {pear.price = updatePrice(pear); }, 15000);
	
//price update function
	function updatePrice(fruit){
		var name = fruit.type;
		var price = fruit.price;
		
		var increment = randomNumber(0,1);
		
		if (increment == 0){
			price += 0.5;	
		} else {
			price -= 0.5;
		}
		if (price > 9.99) {
			price = 9.99;
		};
		if (price < 0.5) {
			price = 0.5;
		};
		$p.each(function(){
			if (this.id == fruit.type){
				$(this).text("Current Price $" + price.toFixed(2));
			} 
	})
	
	return price;
}

//random number function
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getAveragePrice(array, amount){
	return ((array.reduce(function(a,b){return a+b;})/amount).toFixed(2));
}


$('.applePurchase').on('click', function(e){
	if (user.money < apple.price){
	$("div.remainingMoney").html("Remaining $" + user.money + " You do not have enough for this purchase!")
	} else {
		user.appleBought.push(apple.price);
		user.money -= apple.price;
		$( "div.remainingMoney" ).html( "Remaining $" + user.money );
	}
	$("span.appleQuantityPurchased").html(user.appleBought.length);
	$('span.appleAveragePrice').html(" Average Price $" + getAveragePrice(user.appleBought,user.appleBought.length));
	console.log(user.money,user.appleBought);
	e.preventDefault;
});

$('.orangePurchase').on('click', function(e){
	if (user.money < orange.price){
	$("div.remainingMoney").html("Remaining $" + user.money + " You do not have enough for this purchase!")
	} else {
		user.orangeBought.push(orange.price);
		user.money -= orange.price;
		$( "div.remainingMoney" ).html( "Remaining $" + user.money );
	}
	$("span.orangeQuantityPurchased").html(user.orangeBought.length);
	$('span.orangeAveragePrice').html(" Average Price $" + getAveragePrice(user.orangeBought,user.orangeBought.length));
	console.log(user.money,user.orangeBought);
	e.preventDefault;
});

$('.bananaPurchase').on('click', function(e){
	if (user.money < banana.price){
	$("div.remainingMoney").html("Remaining $" + user.money + " You do not have enough for this purchase!")
	} else {
		user.bananaBought.push(banana.price);
		user.money -= banana.price;
		$( "div.remainingMoney" ).html( "Remaining $" + user.money );
	}
	$("span.bananaQuantityPurchased").html(user.bananaBought.length);
	$('span.bananaAveragePrice').html(" Average Price $" + getAveragePrice(user.bananaBought,user.bananaBought.length));
	console.log(user.money,user.bananaBought);
	e.preventDefault;
});

$('.pearPurchase').on('click', function(e){
	if (user.money < pear.price){
	$("div.remainingMoney").html("Remaining $" + user.money + " You do not have enough for this purchase!")
	} else {
		user.pearBought.push(pear.price);
		user.money -= pear.price;
		$( "div.remainingMoney" ).html( "Remaining $" + user.money );
	}
	$("span.pearQuantityPurchased").html(user.pearBought.length);
	$('span.pearAveragePrice').html(" Average Price $" + getAveragePrice(user.pearBought,user.pearBought.length));
	console.log(user.money,user.pearBought);
	e.preventDefault;
});


});



