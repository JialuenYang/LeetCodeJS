/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
	/**
	 * The problem description is written in a very confusing way.
	 *
	 * A palindrome is a string that reads the same forward and backward,
	 * showing symmetry with respect to its center.
	 * For example, the string "babac" can form 5 palindromic groupings, such as:
	 *   1 part: "bacab"
	 *   2 parts: "aca" + "bb"
	 *   3 parts: "aa" + "bb" + "c"
	 *   4 parts: "aa" + "b" + "b" + "c"
	 *   5 parts: "a" + "a" + "b" + "b" + "c"
	 *
	 *
	 * Need to realize that the number of odd frequencies is the key.
	 *
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	if (s.length < k) {
		return false;
	}

	const freq = new Array(26).fill(0);
	for (const c of s) {
		freq[c.charCodeAt(0) - "a".charCodeAt(0)]++;
	}

	let oddCount = 0;
	for (const f of freq) {
		if (f % 2 == 1) {
			oddCount++;
		}
	}

	return oddCount <= k;
};
