var catNames = ['Pushok', 'Alex', 'Bruno' , 'Cliff ' ];
 var catColors = [ 'black', 'orange', 'pink', 'purple'];
 

var arrayCats = [];

for ( var i = 0; i < random (1,12); i++) {
	var cat = {
	name: catNames [random(0, catNames.length - 1)],
	color: catColors [random(0, catColors.length - 1)],
	len: random (0,50),
};
arrayCats.push(cat)
}

for (var i = 0; i < arrayCats.length; i++) {
console.log (arrayCats[i]);	
}

function random(min,max) {
	return Math.floor(Math.random() * ( max - min + 1)) + min;
}

console.log(random(0, 3));
