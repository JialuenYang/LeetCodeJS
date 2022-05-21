/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
	// Sort of a trick question. Subsequences don't need to be next to each other, so you can remove all a's and then b's.
	// This means you can remove everything in max 2 steps. If s is a palindrome, 1 step. Else, 2 steps.

	// Check if s is a palindrome
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] !== s[s.length - i - 1]) {
			return 2;
		}
	}
	return 1;
};
