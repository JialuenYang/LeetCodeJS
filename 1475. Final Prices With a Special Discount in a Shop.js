/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
	// A better method is to use stack
	for (let i = 0; i < prices.length - 1; i++) {
		let j = i + 1;
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[j] <= prices[i]) {
				prices[i] -= prices[j];
				break;
			}
		}
	}
	return prices;
};
