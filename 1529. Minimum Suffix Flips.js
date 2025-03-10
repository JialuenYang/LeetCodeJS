/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
	/**
	 * Count the number of different consecutive bits. If first bit is 1, start with 1 flip.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	let flips = target[0] === "0" ? 0 : 1;
	for (let i = 0; i < target.length - 1; i++) {
		if (target[i] !== target[i + 1]) {
			flips++;
		}
	}
	return flips;
};
