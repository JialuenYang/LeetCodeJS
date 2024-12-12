/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
	let answer = 0;

	/**
	 * We want to find the total number of 5's as factors of the final product.
	 * The best way to do this is find the number of 5's, 25's, 125's... and so on.
	 */
	for (let i = 5; i <= 10 ** 4; i *= 5) {
		answer += Math.floor(n / i);
	}

	return answer;
};
