//BMI calculator
var yourMass = parseFloat(prompt("What is your weight? (lbs)"));
var yourHeight = parseFloat(prompt("What is your weight? (in) fyi, 5ft is 60in and 6ft is 72in :)"));
var calcBMI = function(mass, height) {
	return ((mass/Math.pow(height, 2))*703).toPrecision(4);
};

var yourBMI = calcBMI(yourMass,yourHeight);

var yourCategory;
if (yourBMI<15) {
  yourCategory = "very severely underweight";
} else if (yourBMI>=15 && yourBMI<16) {
  yourCategory = "severely underweight";
} else if (yourBMI>=16 && yourBMI<18.5) {
  yourCategory = "underweight";
} else if (yourBMI>=18.5 && yourBMI<25) {
  yourCategory = "normal";
} else if (yourBMI>=25 && yourBMI<30) {
	yourCategory = "overweight";
} else {
	yourCategory = "obese";
}

alert("Your BMI is "+yourBMI+"! This means that, according to the WHO, you are "+yourCategory+".");
