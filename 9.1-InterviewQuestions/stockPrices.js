/**
 * Buy Low, Sell High -- Starter Code
 **/

// Stock Prices
iagStockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];



// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought){

var iagStockPricesMin = Math.min.apply(null,iagStockPrices);
var	iagStockPricesMax = Math.max.apply(null, iagStockPrices);

var premiumPaid =  iagStockPricesMin * sharesBought; 
var premiumSold = iagStockPricesMax * sharesBought;

var cashReturn = premiumPaid - premiumPaid;


};

// A Call to your Biggest Profit function.
biggestProfit(iagStockPrices, 10000); 

// NOTE: This should return 7600, 
// because you could have bought it at 1.14 per share 
// and then sold it at 1.90 per share. 
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.