const stairs = [1, 2];
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (stairs.length >= n) {
		return stairs[n - 1];
	}
	if (stairs.length == n - 1) {
		stairs[n - 1] = stairs[n - 2] + stairs[n - 3];
		return stairs[n - 1];
	}
	return climbStairs(n - 1) + climbStairs(n - 2);
};
