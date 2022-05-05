/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
	// Sort the costs and then subract from the coins one by one
	// This is O(n*log(n)) time and O(1) space
	// There's also a O(n) time and O(n) space version if you just create a map for all the costs
	costs.sort((a, b) => a - b);
	let output = 0;
	let i = 0;
	while (coins >= costs[i]) {
		coins -= costs[i];
		output++;
		i++;
	}
	return output;
};
