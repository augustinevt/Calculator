//addition
var add = function(number1, number2) {
	return number1 + number2;
};

//subtraction
var subtract = function(number1, number2) {
	return number1 - number2;
};

// multiplication
function multiply(number1, number2) {
	return number1 * number2;
}

//division
function divide(number1, number2) {
	return number1 / number2;
}


//front end logic starts here

$(function() {
	$('#addSubmit').click(function(event) {
			var number1 = parseInt($("#add1").val());
			var number2 = parseInt($("#add2").val());
			var result = add(number1, number2);
			$("#output h1").text(result);
			event.preventDefault();
	});
	$('#subtractSubmit').click(function(event) {
			var number1 = parseInt($("#subtract1").val());
			var number2 = parseInt($("#subtract2").val());
			var result = subtract(number1, number2);
			$("#output h1").text(result);
			event.preventDefault();
	});

	$('#multiplySubmit').click(function(event) {
			var number1 = parseInt($("#multiply1").val());
			var number2 = parseInt($("#multiply2").val());
			var result = multiply(number1, number2);
			$("#output h1").text(result);
			event.preventDefault();
	});

	$('#divideSubmit').click(function(event) {
			var number1 = parseInt($("#divide1").val());
			var number2 = parseInt($("#divide2").val());
			var result = divide(number1, number2);
			$("#output h1").text(result);
			event.preventDefault();
	});

});
