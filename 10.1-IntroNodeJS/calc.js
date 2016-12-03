
	// if (console.log(process.argv[2]) === 'add'){
	// 	var x = parseInt(process.argv[3])
	// 	var y = parseInt(process.argv[4])
	// 	console.log(x + y)
	// }
	

	var operator = process.argv[2]
	var num1 = parseFloat(process.argv[3]);
	var num2 = parseFloat(process.argv[4]);



if (isNaN(num1) || isNaN(num2)){
	console.log("Bro! use actual numbers! Cmon Man")
}
else if (operator === 'add'){
	console.log(num1 + num2);
}
else if (operator === 'subtract'){
	console.log(num1 - num2);
}
else if (operator === 'multiply'){
	console.log(num1 *num2);
}
else if (operator === 'divide'){
	console.log(num1 / num2);
}
else if (operator === '')




// switch(operator){
// 	case "add":
// 		console.log(num1 + num2);
// 		break;
// 	case "subtract":
// 		console.log(num1 - num2);
// 		break;
// 	case "divide":
// 		console.log(num1 /num2);
// 		break;
// 	default:
// 	console.log("yo, bro! use a valid operator");
// }