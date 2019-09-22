console.log('what\'s up danger?')

const printToDom = (divId, toPrint) => {
	document.getElementById(divId).innerHTML = toPrint;
}

const button = document.getElementById("converter");
const resetButton = document.getElementById("reset");

// const toCelsius =  () => {
// 		let temp = document.getElementById('temperature').value;
// 	    return (temp - 32) * 5/9;   
// }

// const toFahrenheit =  () => {
// 		let temp = document.getElementById('temperature').value;
// 		return (temp * 9/5) + 32;
// }

// button function to initiate either function

// reset button should should erase all entered data 

// // Get a reference to the button element in the DOM


// // This function should determine which conversion should
// // happen based on which radio button is selected.
const determineConverter = (e) => {
  let temp = document.getElementById("temperature").value;
//   if fRadio {
//   } if cRadio {
//   };
  console.log(temp);
  printToDom("conversion-space", temp)

}

const clearFields = (e) => {
	document.getElementById('temperature').innerHTML = '';
	document.getElementById("conversion-space").innterHTML = '';
}


button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", clearFields);


// enter key has to activate functions
// colors based on instructions