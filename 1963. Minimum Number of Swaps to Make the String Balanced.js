/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
	/**
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	let open = 0;
	let swaps = 0;
	for (const c of s) {
		if (c === "[") {
			open++;
		} else {
			open--;
		}

		if (open < 0) {
			swaps++;
			open += 2; // Each swap fixes 2 unbalanced brackets
		}
	}

	return swaps;
};
