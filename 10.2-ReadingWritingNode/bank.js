
var total = 0;
var amount = 0;

var operator = process.argv[2];

var deposit = parseFloat(process.argv[3]);
var withdraw = parseFloat(process.argv[3]);


// if (operator != 'withdraw'  operator != 'deposit'){
	console.log("Please enter 'withdraw' or 'deposit' ")
 if (operator == 'withdraw'){
	amount = total - amount;
	total = amount
	console.log(total);
}else if (operator == 'deposit'){
	amount = total + deposit;
	total = amount
	console.log(total);
} else {
		console.log("please enter deposit or enter" );
	}