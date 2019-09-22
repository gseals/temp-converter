console.log('what\'s up danger?')

const printToDom = (divId, toPrint) => {
	document.getElementById(divId).innerHTML = toPrint;
}

const button = document.getElementById("converter");
const resetButton = document.getElementById("reset");


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

// // This function should determine which conversion should
// // happen based on which radio button is selected.
const determineConverter = (e) => {
	if (faRadio.checked === true) {
		toFahrenheit();
	} else if (celRadio.checked === true) {
		toCelsius();
	}
	//   if cRadio {
//	 toCelsius
//   } if fRadio {
//	 toFahrenheit
//   };
//   printToDom("conversion-space", temp)

}

const clearFields = (e) => {
	let burn = document.getElementById('temperature').value = '';
	printToDom ('conversion-space', '')
}

button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", clearFields);

// enter key has to activate functions
// colors based on instructions