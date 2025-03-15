/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
	/**
	 * Binary search problem
	 * Time complexity: O(n*log(m)) where n = candies.length, m = n/k
	 * Space complexity: O(1)
	 */
	let l = 0;
	let r = Math.floor(candies.reduce((acc, cur) => acc + cur, 0) / k);

	while (l <= r) {
		const m = Math.floor((l + r) / 2);

		let piles = 0;
		for (const c of candies) {
			piles += Math.floor(c / m);
		}
		if (piles >= k) {
			l = m + 1;
		} else {
			r = m - 1;
		}
	}

	return r;
};
