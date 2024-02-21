/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
	const isPalindrome = (i, j, checkDelete = false) => {
		while (i < j) {
			if (s[i] !== s[j]) {
				return checkDelete
					? isPalindrome(i, j - 1) || isPalindrome(i + 1, j)
					: false;
			}
			i++;
			j--;
		}
		return true;
	};

	return isPalindrome(0, s.length - 1, true);
};
