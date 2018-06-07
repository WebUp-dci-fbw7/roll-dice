function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
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



let button = document.body.querySelector("#roll-dice");


let rollDice = button.addEventListener("click", event =>{
event.preventDefault;

let containerOne = document.body.querySelector("#container-1");
const diceUno = diceOne.roll();
let diceOneOutput = document.createTextNode(diceUno);
containerOne.appendChild(diceOneOutput);




// let containerOne = document.body.querySelector("container-1");
// let text = document.createTextNode("haha, just kidding");
// containerOne.appendChild(text);

diceTwo.roll();
console.log(diceOne.value);
console.log(diceTwo.value);

});
