/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function (n) {
	/**
	 * The key is knowing that 2^x - 1 will always be the only possible all set bits.
	 * Time complexity: O(log n)
	 *
	 * Another method is to count the number of bits of the original n and use that as the power.
	 */
	let powerOfTwo = 2;
	// Need to use <= and not < because we subtract one later.
	while (powerOfTwo <= n) {
		powerOfTwo *= 2;
	}
	return powerOfTwo - 1;
};
