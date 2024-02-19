/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
	// Find total sum from 1 + 2 +...+ n
	// Answer is total sum - 2 * divisible sum
	const totalSum = ((1 + n) * n) / 2;

	// Find divisible sum
	const maxMultiple = Math.floor(n / m);
	const divisibleSum = (m * (1 + maxMultiple) * maxMultiple) / 2;
	return totalSum - 2 * divisibleSum;
};
