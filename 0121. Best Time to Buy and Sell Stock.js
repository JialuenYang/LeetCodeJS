/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// Sliding window technique
	let output = 0;
	let l = 0;
	let r = 1;
	while (r < prices.length) {
		if (prices[l] > prices[r]) {
			l = r;
		} else {
			output = Math.max(output, prices[r] - prices[l]);
		}
		r++;
	}

	return output;
};
