/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
	/**
	 * Keep track of the first and last indices of each letter. Loop through the in-between letters and make a set.
	 * Size of that set is how many 3 letter palindromes that begin with that letter.
	 * Time complexity: O(n)
	 * Space complexity: O(1)
	 */
	let output = 0;

	const first = new Array(26).fill(-1);
	const last = new Array(26).fill(-1);

	for (let i = 0; i < s.length; i++) {
		const c = s.charCodeAt(i) - "a".charCodeAt(0);

		if (first[c] == -1) {
			first[c] = i;
		}
		last[c] = i;
	}

	for (let i = 0; i < 26; i++) {
		if (first[i] >= 0) {
			const set = new Set();
			for (let j = first[i] + 1; j < last[i]; j++) {
				set.add(s[j]);
			}
			output += set.size;
		}
	}

	return output;
};
