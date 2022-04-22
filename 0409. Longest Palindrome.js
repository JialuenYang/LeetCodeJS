/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	// Add all the char counts to a map
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			map.set(s[i], map.get(s[i]) + 1);
		} else {
			map.set(s[i], 1);
		}
	}
	// Add up the counts of all greatest even char counts.
	let output = 0;
	let hasOdd = false;
	for (const [key, value] of map) {
		if (value % 2 == 1) {
			hasOdd = true;
			output += value - 1;
		} else {
			output += value;
		}
	}
	// The middle of the palindrome can have 1 single letter if there are any odd count of chars
	if (hasOdd) {
		output += 1;
	}
	return output;
};
