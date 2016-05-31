//addition
var add = function(number1, number2) {
	return number1 + number2;
};

//subtraction
var sub = function(number1, number2) {
	return number1 - number2;
};

// multiplication
function times(number1, number2) {
	return number1 * number2;
}

//division
function div(number1, number2) {
	return number1 / number2;
}




//user input
var number1 = parseInt(prompt("Enter a number, please:"));
var number2 = parseInt(prompt("Enter another number, if you will.  (Please.)"));

alert(add(number1, number2));
alert(sub(number1, number2));
alert(times(number1, number2));
alert(div(number1, number2));
