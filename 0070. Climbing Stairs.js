const stairs = [1, 2];
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	// Recursion
	if (stairs.length >= n) {
		return stairs[n - 1];
	}
	if (stairs.length == n - 1) {
		stairs[n - 1] = stairs[n - 2] + stairs[n - 3];
		return stairs[n - 1];
	}
	return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	// Dynamic programming
	const dp = new Array(n + 1).fill(0);
	dp[1] = 1;
	dp[2] = 2;
	for (let i = 3; i < dp.length; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};
