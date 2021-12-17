var catNames = ['Pushok', 'Bruno','Alex', 'Cliff'];

var arrayCats =[];

for (var i = 0; i < random(1, 12); i++ ){
	var cat = {
		name: catNames[random(0, catNames.length - 1)],
		color: 'orange',
		len: 30,
	};
	arrayCats.push(cat);
}

for (var i = 0; i < random(1, 12); i++ ){
	var cat = {
		name: catNames[random(0, catNames.length - 1)],
		color: 'black',
		len: 25,
	};
	arrayCats.push(cat);
}

for (var i = 0; i < random(1, 12); i++ ){
	var cat = {
		name: catNames[random(0, catNames.length - 1)],
		color: 'green',
		len: 29,
	};
	arrayCats.push(cat);
}

for (var i = 0; i < arrayCats.length; i++) {
	console.log(arrayCats[i]);
}

function random(min, max) {
	return Math.floor(Math.random() * (max - min * 1)) + min;
}