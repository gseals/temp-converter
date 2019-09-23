console.log('what\'s up danger?')

// print to dom
const printToDom = (divId, toPrint) => {
	document.getElementById(divId).innerHTML = toPrint;
}

// button variables

const button = document.getElementById("converter");
const resetButton = document.getElementById("reset");
const tempEnter = document.getElementById("temperature")

// conversion functions

const toFahrenheit =  () => {
	let temp = document.getElementById('temperature').value;
	let math = (temp * 9/5) + 32;
	let words = `${math}° Fahrenheit`
	printToDom ("conversion-space", words)
}

const toCelsius =  () => {
 		let temp = document.getElementById('temperature').value;
		let math = (temp - 32) * 5/9;
		let words = `${math}° Celsius`
		printToDom ("conversion-space", words)
} 


const determineConverter = (e) => {
	if (faRadio.checked === true) {
		toFahrenheit();
	} else if (celRadio.checked === true) {
		toCelsius();
	}
}

const clearFields = (e) => {
	let burn = document.getElementById('temperature').value = '';
	printToDom ('conversion-space', '')
}

button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", clearFields);
tempEnter.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		determineConverter();
	}
});

	// colors based on instructions