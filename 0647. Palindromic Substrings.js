/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	/**
	 * Expand from middle solution
	 * Time complexity: O(n^2)
	 * Space complexity: O(1)
	 */
	let count = 0;

	const expandMiddle = (l, r) => {
		const start = l;
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			l--;
			r++;
		}
		return start - l;
	};

	for (let i = 0; i < s.length; i++) {
		// Odd length palindrome
		count += expandMiddle(i, i);

		// Even length palindrome
		count += expandMiddle(i, i + 1);
	}

	return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	/**
	 * Dynamic programming solution
	 * Time complexity: O(n^2)
	 * Space complexity: O(n^2)
	 */
	const dp = new Array(s.length)
		.fill()
		.map(() => new Array(s.length).fill(true));
	let count = s.length;

	for (let j = 1; j < s.length; j++) {
		for (let i = 0; i < s.length - j; i++) {
			// [i][j+i]
			if (dp[i + 1][j + i - 1] && s[i] === s[j + i]) {
				dp[i][j + i] = true;
				count++;
			} else {
				dp[i][j + i] = false;
			}
		}
	}
	return count;
};
