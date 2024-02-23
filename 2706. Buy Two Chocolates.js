/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
	// No need to sort since we only need 2 smallest numbers.
	let smallest = Infinity;
	let secondSmallest = Infinity;
	for (const price of prices) {
		if (price < smallest && price < secondSmallest) {
			secondSmallest = smallest;
			smallest = price;
		} else if (price < secondSmallest) {
			secondSmallest = price;
		}
	}

	return smallest + secondSmallest <= money
		? money - smallest - secondSmallest
		: money;
};
