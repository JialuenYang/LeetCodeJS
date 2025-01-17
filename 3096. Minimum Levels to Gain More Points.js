/**
 * @param {number[]} possible
 * @return {number}
 */
var minimumLevels = function (possible) {
	/**
	 * No need to create two arrays to keep track. Just get total sum and then go left to right.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	let bob = 0;
	for (const p of possible) {
		bob += p == 1 ? 1 : -1;
	}

	let alice = 0;
	for (let i = 0; i < possible.length - 1; i++) {
		const point = possible[i] ? 1 : -1;
		alice += point;
		bob -= point;
		if (alice > bob) {
			return i + 1;
		}
	}

	return -1;
};
