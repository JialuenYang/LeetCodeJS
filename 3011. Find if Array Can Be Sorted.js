/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
	/**
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */

	// Only need to keep track of old max, current max, and old set bits.
	let oldMax = 0;
	let max = 0;
	let oldSetBits = 0;

	for (const num of nums) {
		const binary = num.toString(2);
		let setBits = 0;
		for (const c of binary) {
			if (c === "1") {
				setBits++;
			}
		}

		if (oldSetBits != setBits) {
			oldMax = max;
			oldSetBits = setBits;
		}

		if (num < oldMax) {
			return false;
		}

		max = Math.max(max, num);
	}

	return true;
};
