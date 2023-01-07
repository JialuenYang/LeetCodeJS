/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
	if (n == 1) {
		return 1;
	}
	let leftSum = 1;
	let rightSum = ((1 + n) * n) / 2;
	for (let i = 1; i < n; i++) {
		if (leftSum == rightSum) {
			return i;
		}
		leftSum += i + 1;
		rightSum -= i;
	}
	return -1;
};
