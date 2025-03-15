/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
	/**
	 * Backtracking problem
	 * Time complexity: O(n^2 * 2^n)
	 * Space compelxity: O(n)
	 */
	let maxSplits = 0;

	const backtrack = (index, set) => {
		if (index >= s.length) {
			maxSplits = Math.max(maxSplits, set.size);
			return;
		}

		for (let i = index + 1; i <= s.length; i++) {
			const s1 = s.substring(index, i);
			if (set.has(s1)) {
				continue;
			}
			set.add(s1);
			backtrack(i, set);
			set.delete(s1);
		}

		return maxSplits;
	};

	backtrack(0, new Set());
	return maxSplits;
};
