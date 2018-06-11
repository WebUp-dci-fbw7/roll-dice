function getRandomInt(min, max) {
	min = Math.floor(min);
	max = Math.ceil(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}


let diceOne = {
	value: 1,
	roll : function(){
		this.value = getRandomInt(1, 6);
		return this.value;
	}
};
let diceTwo = {
	value: 1,
	roll : function(){
		this.value = getRandomInt(1, 6);
		return this.value;
	}
};
// console.log(diceOne.value);
//
// diceOne.roll();
// console.log(diceOne.value);
//
// diceOne.roll();
// console.log(diceOne.value);
//
// diceOne.roll();
// console.log(diceOne.value);
//


let button = document.body.querySelector("#roll-dice");



const loadDice = event =>{
	if(event) {
		event.preventDefault;
	}
	

	let containerOne = document.body.querySelector("#container-1");
	const diceUno = diceOne.roll();

	let newClass = "img-0"+diceUno;

	let elm = document.getElementById("container-1");

	if(elm.className !== newClass){
		elm.className = newClass;
}

	let containerTwo = document.body.querySelector("#container-2");
	const diceDos = diceTwo.roll();
	// let diceTwoOutput = document.createTextNode(diceDos);
	// containerTwo.appendChild(diceTwoOutput);

	let newClassTwo = "img-0"+diceDos;
	let elmTwo = document.getElementById("container-2");

	if(elmTwo.className !== newClassTwo){
		elmTwo.className = newClassTwo;
}

};


//----------------------click event-----------------------
let rollDice = button.addEventListener("click", loadDice);

loadDice();
