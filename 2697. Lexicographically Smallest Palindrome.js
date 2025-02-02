/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
	s = s.split("");
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] < s[s.length - i - 1]) {
			s[s.length - i - 1] = s[i];
		} else {
			s[i] = s[s.length - i - 1];
		}
	}
	return s.join("");
};
