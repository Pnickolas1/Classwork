// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code. 
// ============================================================================================

var parameters = process.argv;

var subpar = parameters.slice(2, parameters.length);

subpar.sort(function(a,b){
	return a -b;
});

console.log(subpar);