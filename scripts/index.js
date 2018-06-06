function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


let diceOne = {
	value: 1,
	roll : function(value){
		this.value = value;
		return value;
	}
};
console.log(diceOne.value);

diceOne.roll(getRandomInt(1, 7));

console.log(getRandomInt(1,7));


let containerOne = document.body.querySelector("container-1");
