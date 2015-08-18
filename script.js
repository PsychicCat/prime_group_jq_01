$(document).ready(function(){
	

	//create object constructor for fruit 
	var Fruit = function(type){
		this.type = type;
		this.price = randomNumber(0.5, 9.99);	
	}

	//user object

	var User = function(){
		this.name = '',
		this.apple = [],
		this.orange = [],
		this.banana = [],
		this.pear = [],
		this.cash = 100
	}


	//create fruits
	
	var apple = new Fruit("Apple");
	var orange = new Fruit("Orange");
	var banana = new Fruit("Banana");
	var pear = new Fruit("Pear");
	var fruits = [apple, orange, banana, pear];

	//display objects on the DOM
	var $Fruits = $('#Fruits');
	var $li = $('<li>');
	var $span = $('<span>');



setInterval(function() {apple.price = updatePrice(apple);}, 15000);
setInterval(function() {orange.price = updatePrice(orange);}, 15000);
setInterval(function() {banana.price = updatePrice(banana);}, 15000);
setInterval(function() {pear.price = updatePrice(pear);}, 15000);


	//create object constructor for user displaying total cash, inventory, and avg purchase price 





// });


//price update function
function updatePrice(fruit){
	var name = fruit.type;
	var price = fruit.price;
	
	var increment = randomNumber(0,1);

	
	if (increment == 0){
		price += 0.5;	
	} else {
		price -= 0.5;
	};

	if (fruit.price > 9.99) {
		price = 9.99;
	};

	if (fruit.price < 0.5) {
		price = 0.5;
	};

	console.log("price" + name + " " + price);

	return price;

}




function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

});


