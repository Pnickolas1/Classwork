// Using the require keyword lets us access all of the exports
// in our ess.js file
var stuffINeed = require("../exportStatement.js");

// This will print everything in exports.
console.log("--------------------------");
console.log("ALL THE STUFF I NEED");
console.log(stuffINeed);
console.log("--------------------------");

// These will print correctly because we imported them
console.log("Essentials");
console.log(stuffINeed.essentials.fun);
console.log("--------------------------");
console.log("Nice to Haves");
console.log(stuffINeed.nicetohaves);

// This won't print anything because it wasn't exported in ess.js
console.log("--------------------------");
console.log("Nonessentials");
console.log(stuffINeed.nonessentials);



var http = require("https://api.forecast.io/forecast/4650d6ba6c643b5dd6b1924b24346298/41.8781/-87.6298/?callback=?")
