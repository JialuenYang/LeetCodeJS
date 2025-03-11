/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
	/**
	 * The key is finding the min and max capacity and do binary search.
	 * Time complexity: O(n*log(m)) where n = weights.length, m = sum of all weights
	 * Space complexity: O(1)
	 */

	// Min capacity is the max of weights. Otherwise, the ship can't carry the heaviest weight.
	let l = Math.max(...weights);
	// Max capacity is the sum of all weights. One day to ship everything.
	let r = weights.reduce((acc, cur) => acc + cur, 0);
	while (l <= r) {
		const m = Math.floor((l + r) / 2);

		// Count how many days it takes to ship using m capacity.
		let sum = 0;
		let numOfDays = 1;
		for (let i = 0; i < weights.length; i++) {
			if (sum + weights[i] <= m) {
				sum += weights[i];
			} else {
				numOfDays++;
				sum = weights[i];
			}
		}

		if (numOfDays <= days) {
			r = m - 1;
		} else {
			l = m + 1;
		}
	}
	// r is set only when we successfully ship everything within required days. m is the answer, which is r + 1.
	return r + 1;
};
