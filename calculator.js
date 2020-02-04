
var express = require("express");
var app = express();
var PORT = 8080;

// import * as Calc from './operations'
const Calc = require('./operations');

app.get('/:operator/:num1/:num2', function(req,res){
	
	var operator = req.params.operator
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var result;

	switch(operator){
		case "addition":
		result = Calc.add(num1, num2);
		break;

		case "subtraction":
		result = Calc.subtract(num1, num2);
		break;

		case "multiplication":
		result = Calc.multiply(num1, num2);
		break;

		case "division":
		result = Calc.divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}

	// function add(a, b){
	// 	return a + b
	// }

	// function subtract(a, b){
	// 	return a - b
	// }

	// function multiply(a, b){
	// 	return a * b
	// }

	// function divide(a, b){
	// 	return a / b
	// }

	res.json(result);
});

app.get("/", function(req, res){
	res.send("hello! please type some math y'all")
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});