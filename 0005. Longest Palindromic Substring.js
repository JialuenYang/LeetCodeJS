/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let maxLen = 1;
	let arr = [0, 0];

	const expandAroundCenter = (l, r) => {
		while (l >= 0 && r < s.length && s[l] === s[r]) {
			l--;
			r++;
		}
		l++;
		r--;
		return [l, r];
	};

	for (let i = 0; i < s.length; i++) {
		const odd = expandAroundCenter(i, i);
		const even = expandAroundCenter(i, i + 1);

		const oddLen = odd[1] - odd[0] + 1;
		const evenLen = even[1] - even[0] + 1;

		if (oddLen > maxLen) {
			maxLen = oddLen;
			arr = odd;
		}

		if (evenLen > maxLen) {
			maxLen = evenLen;
			arr = even;
		}
	}

	return s.substring(arr[0], arr[1] + 1);
};
