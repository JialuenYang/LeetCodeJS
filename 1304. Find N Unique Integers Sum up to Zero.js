/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
	// Use positive and negative numbers to cancel out each other. Use 0 if n is odd.
	const output = [];
	if (n % 2 == 1) {
		output.push(0);
		n--;
	}
	n /= 2;
	for (let i = 1; i <= n; i++) {
		output.push(i);
		output.push(-i);
	}
	return output;
};
